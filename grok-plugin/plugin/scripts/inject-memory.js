/**
 * Memwyre × Grok Build — SessionStart Hook
 * ==========================================
 * Fired by Grok Build at the beginning of every session.
 *
 * Stdin:  JSON payload from Grok Build (hookEventName, sessionId, cwd, etc.)
 * Stdout: JSON with hookSpecificOutput.additionalContext to inject into system prompt
 * Exit 0: success / allow session to proceed
 *
 * Deterministic contract:
 *   - Reads stdin → parses JSON
 *   - Calls GET /api/v1/plugin/context?project=<name>
 *   - Writes additionalContext back to stdout for Grok to prepend to system prompt
 *   - Always exits 0 (never blocks the session)
 */

'use strict';

const https = require('https');
const http = require('http');
const path = require('path');

// ---------------------------------------------------------------------------
// Stdin reader — reads all of stdin as a UTF-8 string, returns parsed JSON
// ---------------------------------------------------------------------------
function readStdin() {
  return new Promise((resolve) => {
    let data = '';
    let resolved = false;

    // Safety fallback: if stdin closes without data (e.g. invoked standalone)
    const fallback = setTimeout(() => {
      if (!resolved) { resolved = true; resolve({}); }
    }, 2000);

    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (chunk) => { data += chunk; });
    process.stdin.on('end', () => {
      clearTimeout(fallback);
      if (resolved) return;
      resolved = true;
      try { resolve(JSON.parse(data)); } catch (_) { resolve({}); }
    });
    process.stdin.on('error', () => {
      clearTimeout(fallback);
      if (!resolved) { resolved = true; resolve({}); }
    });
  });
}

// ---------------------------------------------------------------------------
// Minimal fetch replacement — no dependencies, pure Node built-ins
// ---------------------------------------------------------------------------
function fetchJson(url, options = {}) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const transport = parsed.protocol === 'https:' ? https : http;
    const reqOptions = {
      hostname: parsed.hostname,
      port: parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
      path: parsed.pathname + parsed.search,
      method: options.method || 'GET',
      headers: options.headers || {},
    };

    const req = transport.request(reqOptions, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        try { resolve({ status: res.statusCode, data: JSON.parse(body) }); }
        catch (_) { resolve({ status: res.statusCode, data: body }); }
      });
    });

    req.setTimeout(options.timeout || 8000, () => {
      req.destroy(new Error('Request timed out'));
    });

    req.on('error', reject);

    if (options.body) {
      req.write(options.body);
    }
    req.end();
  });
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  const input = await readStdin();

  // Resolve project name from cwd (Grok sends workspaceRoot and/or cwd in stdin)
  const cwd = input.workspaceRoot || input.cwd || process.cwd();
  const projectName = path.basename(cwd) || 'default';

  const apiKey = process.env.MEMWYRE_API_KEY;
  const apiUrl = (process.env.MEMWYRE_API_URL || 'https://api.memwyre.tech').replace(/\/$/, '');

  // If no API key configured — emit a soft status message, don't block
  if (!apiKey) {
    process.stdout.write(JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'SessionStart',
        additionalContext: `<memwyre-status>\nMemwyre: MEMWYRE_API_KEY not set. Set it to enable persistent memory across sessions.\n</memwyre-status>`
      }
    }));
    process.exit(0);
  }

  let contextText = '';

  try {
    const res = await fetchJson(
      `${apiUrl}/api/v1/plugin/context?project=${encodeURIComponent(projectName)}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        timeout: 8000,
      }
    );

    const memories = (res.data && res.data.memories) ? res.data.memories : [];

    if (memories.length > 0) {
      contextText = `<memwyre-context>\n## Past Memories — ${projectName}\n\n`;
      for (const m of memories) {
        contextText += `- ${m.content}\n`;
      }
      contextText += `\n</memwyre-context>`;
    } else {
      contextText = `<memwyre-status>\nMemwyre: No previous memories for "${projectName}". This session will be captured automatically.\n</memwyre-status>`;
    }
  } catch (err) {
    // Non-fatal: network issue. Don't block the session.
    contextText = `<memwyre-status>\nMemwyre: Could not reach API (${err.message}). Session will proceed without memory injection.\n</memwyre-status>`;
  }

  process.stdout.write(JSON.stringify({
    hookSpecificOutput: {
      hookEventName: 'SessionStart',
      additionalContext: contextText,
    }
  }));

  process.exit(0);
}

main().catch(() => process.exit(0));
