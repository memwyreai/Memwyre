---
title: "Grok Build & Grok Bot"
description: "Give Grok Bot persistent, cross-bot shared memory. Automatically sync context and share knowledge across your entire Grok agent roster."
---

## Overview

Grok Bot allows you to run a roster of specialized agents (e.g., Researcher, Coder, Ops). While they can hand off tasks, they **do not natively share memory**. If your Researcher bot figures something out, your Coder bot starts with a blank slate.

The Memwyre Grok Plugin solves this by providing a **shared memory brain** for your entire agent roster:

1. **Cross-Bot Shared Memory**: When one bot finishes a session, its transcript is captured via the `Stop` hook and extracted into project memories. When the next bot starts, the `SessionStart` hook injects those memories. **Bot B instantly knows what Bot A learned.**
2. **True Portability**: Your memory vault is agent-agnostic. Memories captured in Claude Code or OpenClaw are instantly available to Grok Bot, and vice versa.
3. **Curation & Control**: Unlike native auto-memory, Memwyre puts captured insights into an Inbox for you to approve or discard.

## Installation

The plugin uses pure Node.js built-ins for its hooks, meaning **zero npm dependencies** and no installation bloat.

### Option A: Standard CLI Install

```bash
grok plugin install @memwyre/grok-plugin
```

### Option B: Manual Installation

Copy the plugin files into your user or project Grok configuration directory:

```bash
# For all Grok sessions on your machine
mkdir -p ~/.grok/plugins/memwyre
cp -r path/to/grok-plugin/plugin/* ~/.grok/plugins/memwyre/
```

> **Note:** If installing to a project-level `.grok` directory, you must run `/hooks-trust` in Grok Build before the hooks will execute.

## Configuration

Set your Memwyre API key in your shell environment (e.g., in your `~/.bashrc` or `~/.zshrc`) before launching `grok`:

```bash
export MEMWYRE_API_KEY="bv_sk_your_api_key_here"
export MEMWYRE_API_URL="https://server.memwyre.tech"  # Optional: For self-hosted vaults
```

> Generate your API key from **Settings → API Keys** in the Memwyre web app.

## How the Hooks Work

The plugin registers two deterministic shell hooks in `hooks.json`:

*   **`SessionStart`**: Fires when a Grok session begins. It reads the current workspace directory, fetches relevant memories from Memwyre, and injects them into the `additionalContext` of the system prompt.
*   **`Stop`**: Fires when the session ends or the agent pauses. It safely reads the `.jsonl` transcript of the conversation and posts it to the Memwyre extraction backend.

Both hooks are strictly non-blocking (always exit `0`) and will silently fail open if the API is unreachable, ensuring your Grok workflow is never interrupted.
