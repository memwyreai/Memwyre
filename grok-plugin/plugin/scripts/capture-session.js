/**
 * Memwyre × Grok Build — Stop Hook
 * ==================================
 * Fired by Grok Build at the end of every agent turn / when the session stops.
 *
 * Stdin:  JSON payload from Grok Build — includes:
 *           hookEventName, sessionId, cwd, transcript_path (path to .jsonl)
 * Stdout: JSON { continue: true } to allow Grok to resume normally
 * Exit 0: always — this hook never blocks
 *
 * Deterministic contract:
 *   - Reads stdin → extracts sessionId + transcript_path
 *   - Parses the .jsonl transcript file line-by-line
 *   - POSTs to /api/v1/plugin/capture for background memory extraction
 *   - Always exits 0
 */

'use strict';

const https = require('https');
const http = require('http');
const fs = require('fs');
const readline = require('readline');
const path = require('path');
const os = require('os');

// ---------------------------------------------------------------------------
// Stdin reader
// ---------------------------------------------------------------------------
function readStdin() {
  return new Promise((resolve) => {
    let data = '';
    let resolved = false;
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
// JSONL transcript parser — reads .jsonl file line by line
// ---------------------------------------------------------------------------
async function parseTranscript(filePath) {
  const messages = [];
  if (!filePath || !fs.existsSync(filePath)) return messages;
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(filePath, { encoding: 'utf8' }),
      crlfDelay: Infinity,
    });
    for await (const line of rl) {
      if (!line.trim()) continue;
      try { messages.push(JSON.parse(line)); } catch (_) { /* skip malformed */ }
    }
  } catch (_) { /* silent */ }
  return messages;
}

// ---------------------------------------------------------------------------
// Fallback: scan Grok Build's own session store for the latest .jsonl
// Grok Build stores sessions at: ~/.grok/sessions/<encoded-cwd>/<session_id>/updates.jsonl
// ---------------------------------------------------------------------------
async function findLatestGrokSession() {
  try {
    const sessionsRoot = path.join(os.homedir(), '.grok', 'sessions');
    if (!fs.existsSync(sessionsRoot)) return [];
    
    let latestFile = null;
    let latestTime = 0;
    
    // Scan project directories
    const projects = fs.readdirSync(sessionsRoot, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory());
      
    for (const proj of projects) {
      const projPath = path.join(sessionsRoot, proj.name);
      const sessions = fs.readdirSync(projPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory());
        
      for (const sess of sessions) {
        const transcriptPath = path.join(projPath, sess.name, 'updates.jsonl');
        if (fs.existsSync(transcriptPath)) {
          const mtime = fs.statSync(transcriptPath).mtimeMs;
          if (mtime > latestTime) {
            latestTime = mtime;
            latestFile = transcriptPath;
          }
        }
      }
    }
    
    if (!latestFile) return [];
    return await parseTranscript(latestFile);
  } catch (_) {
    return [];
  }
}

// ---------------------------------------------------------------------------
// Minimal HTTP POST — zero npm deps
// ---------------------------------------------------------------------------
function postJson(url, payload, headers = {}, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(payload);
    const parsed = new URL(url);
    const transport = parsed.protocol === 'https:' ? https : http;
    const reqOptions = {
      hostname: parsed.hostname,
      port: parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
      path: parsed.pathname + parsed.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
        ...headers,
      },
    };
    const req = transport.request(reqOptions, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, data }));
    });
    req.setTimeout(timeout, () => req.destroy(new Error('Timed out')));
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  const input = await readStdin();

  const cwd = input.workspaceRoot || input.cwd || process.cwd();
  const sessionId = input.sessionId || input.session_id || `grok_${Date.now()}`;
  const transcriptPath = input.transcriptPath || input.transcript_path || null;
  const projectName = path.basename(cwd) || 'default';

  const apiKey = process.env.MEMWYRE_API_KEY;
  const apiUrl = (process.env.MEMWYRE_API_URL || 'https://api.memwyre.tech').replace(/\/$/, '');

  // Always signal continue — this hook never blocks Grok
  const done = () => {
    process.stdout.write(JSON.stringify({ continue: true }));
    process.exit(0);
  };

  if (!apiKey) return done();

  // 1. Try to read transcript from the path Grok provides in the hook payload
  let transcript = await parseTranscript(transcriptPath);

  // 2. Fallback: scan Grok's session store
  if (transcript.length === 0) {
    transcript = await findLatestGrokSession();
  }

  if (transcript.length === 0) return done();

  // 3. POST to Memwyre capture endpoint (fire-and-forget with a short timeout)
  try {
    await postJson(
      `${apiUrl}/api/v1/plugin/capture`,
      {
        session_id: sessionId,
        project_name: projectName,
        cwd,
        transcript,
      },
      { Authorization: `Bearer ${apiKey}` },
      10000
    );
  } catch (_) {
    // Non-fatal — network errors are silently swallowed
  }

  done();
}

main().catch(() => {
  process.stdout.write(JSON.stringify({ continue: true }));
  process.exit(0);
});
