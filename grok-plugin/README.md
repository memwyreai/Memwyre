# Grok Build × Memwyre Plugin

<p align="center">
  <a href="https://www.npmjs.com/package/@memwyre/grok-plugin"><img src="https://img.shields.io/npm/v/@memwyre/grok-plugin?style=flat-square&color=ff4d4d&label=npm" alt="npm version" /></a>
  <a href="https://opensource.org/licenses/Apache-2.0"><img src="https://img.shields.io/badge/license-Apache--2.0-blue?style=flat-square" alt="license" /></a>
  <img src="https://img.shields.io/badge/grok_build-plugin-000000?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MzQgMzE4Ij48cGF0aCBkPSJNODMyLjU2NSAwLjU5QzczNi42MzMgOC40MSAzNTkuNTYzIDU1LjE2IDk4LjEwNiAzMThIMUwxMiAzMDdDNjcgMjU0IDMwOSAzMC4zIDgzMi41NjUgMC4yOTh6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=" alt="grok plugin" />
</p>

Seamless persistent memory and automated session lifecycle hooks for **Grok Build** (`grok` CLI), powered by **Memwyre**.

---

## Features

- 🧠 **`SessionStart` — Context Injection**: Automatically retrieves past project memories when a Grok Build session starts, prepending them into the system prompt.
- 💾 **`Stop` — Session Capture**: When the session ends, sends the transcript to Memwyre for background memory extraction.
- ⚡ **Zero Dependencies**: Both hook scripts are pure Node.js built-ins (`http`, `https`, `fs`, `readline`). No `npm install` needed.
- 🔒 **Non-Blocking**: All hooks exit `0` and never stall the agent — errors are silently swallowed.

---

## Installation

### Option A — Grok Build Plugin Marketplace (recommended)

```bash
grok plugin install memwyre
```

### Option B — Local Path Install

```bash
grok plugin install /path/to/grok-plugin
```

### Option C — Manual (direct `.grok` placement)

Copy the `plugin/` directory into your project or user Grok config:

```bash
# Project-level (this repo only)
mkdir -p .grok/plugins/memwyre
cp -r plugin/* .grok/plugins/memwyre/

# User-level (all Grok sessions)
mkdir -p ~/.grok/plugins/memwyre
cp -r plugin/* ~/.grok/plugins/memwyre/
```

Then trust the plugin:
```bash
/hooks-trust
```

---

## Configuration

Set your Memwyre API key in your environment (`.bashrc`, `.zshrc`, or system env):

```bash
export MEMWYRE_API_KEY="bv_sk_your_api_key_here"
```

Optionally override the API URL if self-hosting:

```bash
export MEMWYRE_API_URL="https://api.memwyre.tech"   # default
```

---

## How It Works

| Hook | Trigger | Action |
|------|---------|--------|
| `SessionStart` | Grok Build session opens | Fetches past project memories from Memwyre → injects as `<memwyre-context>` into system prompt |
| `Stop` | Agent turn ends / session closes | Reads the session transcript `.jsonl` → POSTs to Memwyre for async memory extraction |

### Data Flow

```
Grok Build session starts
    ↓
SessionStart hook fires
    ↓ stdin: { hookEventName, sessionId, cwd, ... }
inject-memory.js
    → GET /api/v1/plugin/context?project=<name>
    → stdout: { hookSpecificOutput: { additionalContext: "<memwyre-context>...</memwyre-context>" } }
    ↓
Grok prepends context to system prompt
    ↓
[... your Grok Build session ...]
    ↓
Stop hook fires
    ↓ stdin: { hookEventName, sessionId, cwd, transcript_path, ... }
capture-session.js
    → parses transcript_path .jsonl
    → POST /api/v1/plugin/capture
    → stdout: { continue: true }
```

---

## Plugin Structure

```
grok-plugin/
├── package.json
├── README.md
└── plugin/
    ├── plugin.json          ← Grok Build plugin manifest
    ├── hooks/
    │   └── hooks.json       ← SessionStart + Stop lifecycle hook config
    └── scripts/
        ├── inject-memory.js ← SessionStart handler (zero deps)
        └── capture-session.js ← Stop handler (zero deps)
```

---

## License

[Apache-2.0](LICENSE)
