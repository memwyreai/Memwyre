---
title: "OpenCode"
description: "Install the Memwyre plugin for OpenCode to inject shared coding patterns, architecture decisions, and conventions directly into code generation."
---

## Overview

OpenCode generates excellent code, but keeping it aligned with your team's specific architecture decisions and styling conventions can be challenging. The Memwyre OpenCode plugin bridges this gap by automatically injecting shared coding patterns directly into OpenCode's context window.

By connecting OpenCode to your Memwyre Vault, the extension can query your established patterns (like error handling protocols, component structures, or API layer standards) to keep all generated code aligned with your architecture.

## Available Tools

Once configured, OpenCode will have access to the following Memwyre tools:

| Tool | Description |
| --- | --- |
| get_conventions | Retrieve the active coding conventions for the current project. |
| search_memwyre | Run a semantic search across your Memwyre Vault for architecture decisions. |

## Installation

The plugin (Version **1.1.5**) can be installed directly through the OpenCode extension marketplace or via CLI.

### Option A: Extension Marketplace

1. Open your IDE's Extensions view.
2. Search for **Memwyre for OpenCode**.
3. Click **Install**.

### Option B: CLI Install

`ash
opencode ext install memwyre-opencode-plugin
`

## Configuration

After installation, configure the plugin to connect to your Memwyre account:

1. Open the OpenCode command palette (Ctrl+Shift+P or Cmd+Shift+P).
2. Run Memwyre: Configure API Key.
3. Enter your Memwyre API key.
4. (Optional) Run Memwyre: Set Host URL if you are using a self-hosted instance.

> Generate your API key from **Settings -> API Keys** in the Memwyre web app.

## Best Practices

To get the most out of the OpenCode integration:

- **Tag your conventions**: When saving architecture decisions to Memwyre, use the tag #opencode or #convention so the plugin can easily retrieve them.
- **Project-Specific Context**: Ensure your OpenCode workspace is mapped to the correct Memwyre Project Name to prevent cross-contamination of conventions between different codebases.
