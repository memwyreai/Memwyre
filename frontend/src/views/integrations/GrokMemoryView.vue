<template>
  <div class="relative min-h-screen bg-white dark:bg-[#0c0c0c] pt-28 pb-0 [overflow-x:clip] font-sans">
    <!-- Grid Blueprint background line effects -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    </div>

    <!-- Global Vertical Grid Lines -->
    <div class="hidden lg:block absolute top-0 bottom-0 left-6 sm:left-8 lg:left-[calc(50%-640px)] w-px bg-gray-300/80 dark:bg-gray-800/60 pointer-events-none select-none z-30"></div>
    <div class="hidden lg:block absolute top-0 bottom-0 right-6 sm:right-8 lg:right-[calc(50%-640px)] w-px bg-gray-300/80 dark:bg-gray-800/60 pointer-events-none select-none z-30"></div>

    <div class="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 animate-fade-in">
      
      <!-- Back Navigation Header -->
      <div class="pt-6 mb-8">
        <router-link 
          to="/plugins" 
          class="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 hover:text-[#D97757] dark:hover:text-[#D97757] transition-colors"
        >
          <span class="inline-flex items-center justify-center w-5 h-5 rounded-full border border-gray-300 dark:border-zinc-800 text-[10px]">&larr;</span>
          All Plugins
        </router-link>
      </div>

      <!-- Header Section -->
      <div class="space-y-4 mb-8 text-left">
        <div class="text-xs font-bold uppercase tracking-wider text-[#D97757] font-mono">
          INTEGRATION <span class="text-gray-300 dark:text-gray-700 mx-2">/</span> AUGUST 4, 2026
        </div>
        
        <h1 class="hero-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.1] text-gray-950 dark:text-white">
          Grok Bot & Grok Build Shared Memory <br />
          <span class="italic font-medium text-gray-900 dark:text-gray-100">Cross-Bot <span class="inline-block bg-[#D97757] text-white px-3 py-0.5 italic font-medium">Shared Agent Memory</span></span>
        </h1>

        <div class="text-[10px] tracking-wider uppercase font-bold font-mono text-gray-400 dark:text-gray-500 pt-2">
          14 MIN READ · TECHNICAL SPECIFICATION & GUIDE
        </div>
      </div>

      <!-- Section Separator Line -->
      <div class="-mx-6 sm:-mx-8 lg:-mx-12 h-px bg-gray-200 dark:bg-gray-850 pointer-events-none select-none"></div>

      <!-- 3-Column Layout Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-0 pb-24">
        
        <!-- Left Sidebar (Author Info & Social Sharing) -->
        <aside class="lg:col-span-2 lg:border-r border-gray-200 dark:border-gray-800 lg:pr-8 pt-8 lg:pt-12 text-left">
          <div class="sticky top-24 space-y-8">
            <!-- Author Card -->
            <div class="flex items-center gap-3">
              <a href="https://linkedin.com/in/himansh-shivhare" target="_blank" rel="noopener noreferrer" class="flex-shrink-0 hover:opacity-80 transition-opacity">
                <img 
                  src="https://avatars.githubusercontent.com/u/170114968?v=4" 
                  alt="Himansh Shivhare" 
                  class="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-zinc-800"
                  @error="$event.target.src = 'https://ui-avatars.com/api/?name=Himansh+Shivhare&background=f3f4f6&color=333'"
                />
              </a>
              <div class="flex flex-col">
                <a href="https://linkedin.com/in/himansh-shivhare" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold text-gray-900 dark:text-white hover:text-[#D97757] dark:hover:text-[#D97757] transition-colors">
                  Himansh Shivhare
                </a>
                <span class="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Founder & Lead Architect
                </span>
                <span class="text-[10px] text-gray-400 dark:text-gray-500 mt-1 uppercase tracking-wide font-mono">
                  Last Updated: August 2026
                </span>
              </div>
            </div>

            <!-- Official & Benchmark Outbound Links (E-E-A-T) -->
            <div class="space-y-2 pt-6 border-t border-gray-100 dark:border-gray-900">
              <div class="text-[11px] font-mono text-gray-400 dark:text-gray-500 tracking-wider uppercase font-bold mb-3">OFFICIAL RESOURCES</div>
              <a 
                href="https://docs.anthropic.com/en/docs/agents-and-tools/Grok-code/overview" 
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 hover:text-[#D97757] dark:hover:text-[#D97757] transition-colors"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-[#D97757]"></span>
                Grok Build Docs (Anthropic)
              </a>
              <a 
                href="https://github.com/anthropics/Grok-code" 
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 hover:text-[#D97757] dark:hover:text-[#D97757] transition-colors"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-[#D97757]"></span>
                Grok Build CLI Repo
              </a>
              <a 
                href="https://github.com/thedaviddias/Grok-mem" 
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 hover:text-[#D97757] dark:hover:text-[#D97757] transition-colors"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-[#D97757]"></span>
                Grok-mem (OSS Baseline)
              </a>
            </div>

            <!-- Share Buttons -->
            <div class="space-y-3 pt-6 border-t border-gray-100 dark:border-gray-900">
              <div class="text-[11px] font-mono text-gray-400 dark:text-gray-500 tracking-wider uppercase font-bold">SHARE THIS PAGE</div>
              <div class="flex items-center gap-2">
                <!-- LinkedIn -->
                <a 
                  :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`" 
                  target="_blank"
                  class="w-9 h-9 rounded border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-gray-500 hover:text-[#D97757] dark:hover:text-[#D97757] transition-all bg-white dark:bg-[#111]"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <!-- Twitter -->
                <a 
                  :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`" 
                  target="_blank"
                  class="w-9 h-9 rounded border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-gray-500 hover:text-[#D97757] dark:hover:text-[#D97757] transition-all bg-white dark:bg-[#111]"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <!-- Copy -->
                <button 
                  @click="copyLink"
                  class="w-9 h-9 rounded border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-gray-500 hover:text-[#D97757] dark:hover:text-[#D97757] transition-all bg-white dark:bg-[#111] cursor-pointer"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </aside>

        <!-- Middle Column (Banner & Article Body) -->
        <main class="lg:col-span-8 px-0 lg:px-8 pt-0 lg:pt-12 text-left">
          
          <div class="markdown-content mb-16 animate-fade-in">
            <!-- Verified Environment & E-E-A-T Trust Badge -->
            <div class="mb-8 p-3.5 rounded-md border border-gray-200 dark:border-zinc-800 bg-gray-50/60 dark:bg-zinc-900/40 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-600 dark:text-gray-400 font-mono">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span class="font-bold text-gray-900 dark:text-white uppercase">VERIFIED ENVIRONMENT</span>
              </div>
              <div class="flex flex-wrap items-center gap-4 text-[11px]">
                <span>Tested on: <strong class="text-gray-800 dark:text-gray-200">macOS, Linux, WSL2</strong></span>
                <span>Runtime: <strong class="text-gray-800 dark:text-gray-200">Node.js v18+</strong></span>
                <span>License: <strong class="text-gray-800 dark:text-gray-200">Apache-2.0</strong></span>
              </div>
            </div>

            <!-- TL;DR -->
            <h2 id="tldr">TL;DR</h2>
            <p>
              Give Grok Bot & Grok Build Shared Memory across every session. The Memwyre plugin auto-injects past project context when you start a session and auto-captures decisions when you exit — no manual <code>Grok Memory</code> management needed.
            </p>
            <div class="flex flex-wrap gap-3 my-6">
              <router-link to="/signup" class="px-6 py-2.5 bg-[#050614] dark:bg-white text-white dark:text-black text-sm font-semibold rounded hover:bg-gray-800 transition-colors shadow-sm">
                Install Plugin Free →
              </router-link>
              <a href="https://docs.memwyre.tech/integrations/plugins/Grok" target="_blank" class="px-6 py-2.5 bg-white dark:bg-transparent text-[#050614] dark:text-white text-sm font-semibold rounded border border-gray-250 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Plugin Docs
              </a>
            </div>

            <!-- Quick Summary / Answer-First Box -->
            <div class="relative p-6 bg-white dark:bg-[#111] border border-dashed border-gray-300 dark:border-zinc-800 rounded-xl shadow-sm my-6">
              <div class="absolute -top-1.5 -left-1.5 w-3 h-3 pointer-events-none border-t-2 border-l-2 border-gray-400 dark:border-zinc-700"></div>
              <div class="absolute -bottom-1.5 -right-1.5 w-3 h-3 pointer-events-none border-b-2 border-r-2 border-gray-400 dark:border-zinc-700"></div>
              <div class="space-y-2">
                <div class="text-[#D97757] font-mono text-xs uppercase font-bold tracking-wider">Quick Summary / Key Takeaways</div>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                  <strong>Answer:</strong> By default, Grok Build uses <code>Grok Memory</code> (static guidelines) and Auto Memory (local <code>MEMORY.md</code>). However, native Auto Memory is strictly capped at <strong>200 lines / 25KB</strong> and silently truncates older notes when exceeded. The <strong>Memwyre Plugin</strong> solves this by using deterministic lifecycle hooks (<code>SessionStart</code> and <code>Stop</code>) to auto-inject dynamic, semantically ranked memories on launch and auto-capture architectural decisions on exit across Grok Build, <router-link to="/cursor-memory" class="text-[#D97757] hover:underline font-medium">Cursor AI</router-link>, and <router-link to="/mcp-memory" class="text-[#D97757] hover:underline font-medium">VS Code via MCP</router-link>.
                </p>
              </div>
            </div>

            <!-- Metric Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10">
              <div class="relative p-6 bg-white dark:bg-[#111] border border-dashed border-gray-300 dark:border-zinc-800 rounded-xl shadow-sm text-left">
                <div class="absolute -top-1.5 -left-1.5 w-3 h-3 pointer-events-none border-t-2 border-l-2 border-gray-400 dark:border-zinc-700"></div>
                <div class="absolute -bottom-1.5 -right-1.5 w-3 h-3 pointer-events-none border-b-2 border-r-2 border-gray-400 dark:border-zinc-700"></div>
                <div class="text-[#D97757] text-4xl sm:text-5xl font-extrabold font-mono tracking-tight">200 L</div>
                <div class="mt-2">
                  <div class="text-gray-900 dark:text-white font-bold text-base">Native Truncation Cap</div>
                  <div class="text-gray-500 dark:text-gray-400 text-xs tracking-wider uppercase font-semibold mt-0.5">MEMORY.md Silent Cutoff</div>
                </div>
              </div>

              <div class="relative p-6 bg-white dark:bg-[#111] border border-dashed border-gray-300 dark:border-zinc-800 rounded-xl shadow-sm text-left">
                <div class="absolute -top-1.5 -left-1.5 w-3 h-3 pointer-events-none border-t-2 border-l-2 border-gray-400 dark:border-zinc-700"></div>
                <div class="absolute -bottom-1.5 -right-1.5 w-3 h-3 pointer-events-none border-b-2 border-r-2 border-gray-400 dark:border-zinc-700"></div>
                <div class="text-gray-900 dark:text-white text-4xl sm:text-5xl font-extrabold font-mono tracking-tight">25 KB</div>
                <div class="mt-2">
                  <div class="text-gray-900 dark:text-white font-bold text-base">Buffer Limit</div>
                  <div class="text-gray-500 dark:text-gray-400 text-xs tracking-wider uppercase font-semibold mt-0.5">Native File Size Ceiling</div>
                </div>
              </div>

              <div class="relative p-6 bg-white dark:bg-[#111] border border-dashed border-gray-300 dark:border-zinc-800 rounded-xl shadow-sm text-left">
                <div class="absolute -top-1.5 -left-1.5 w-3 h-3 pointer-events-none border-t-2 border-l-2 border-gray-400 dark:border-zinc-700"></div>
                <div class="absolute -bottom-1.5 -right-1.5 w-3 h-3 pointer-events-none border-b-2 border-r-2 border-gray-400 dark:border-zinc-700"></div>
                <div class="text-[#D97757] text-4xl sm:text-5xl font-extrabold font-mono tracking-tight">70.5%</div>
                <div class="mt-2">
                  <div class="text-gray-900 dark:text-white font-bold text-base">Memwyre Accuracy</div>
                  <div class="text-gray-500 dark:text-gray-400 text-xs tracking-wider uppercase font-semibold mt-0.5">LoCoMo-10 Benchmark</div>
                </div>
              </div>
            </div>

            <h2 id="the-problem">The Problem: Grok Build Forgets Everything</h2>
            <p>
              Every time you close a Grok Build session, the context window resets. Your debugging breakthroughs, architecture decisions, database schema notes, and style conventions — all gone. You spend the first 5 minutes of every session re-explaining your project.
            </p>
            <p>
              Anthropic provides <code>Grok Memory</code> and auto-memory as built-in solutions, but they require manual maintenance, are limited to flat Markdown files, and don't share context across tools. If you use Grok Build <em>and</em> Grok Desktop <em>and</em> <router-link to="/cursor-memory" class="text-[#D97757] hover:underline font-medium">Cursor</router-link>, each tool maintains its own isolated silo.
            </p>

            <h2 id="Grokmd-masterclass">The Complete Guide to Grok Memory: Hierarchy, Syntax &amp; Best Practices</h2>
            <p>
              <code>Grok Memory</code> is the foundational instruction file for Anthropic's Grok Build CLI. Whenever you initiate a session, Grok reads this file and injects its contents into the root system prompt. Mastering <code>Grok Memory</code> is the single most effective way to eliminate repetitive prompting for static project rules.
            </p>

            <h3 id="Grokmd-hierarchy">Directory Hierarchy &amp; Rule Precedence</h3>
            <p>
              Grok Build searches for instruction files across a deterministic directory hierarchy. Understanding this resolution order prevents conflicting instructions:
            </p>
            <ul>
              <li><strong>Global Configuration (<code>~/.Grok/Grok Memory</code>):</strong> Applies across every repository and terminal session on your computer. Use this exclusively for developer-specific habits, such as preferred shell shortcuts, default terminal flags, or global Git commit author styles.</li>
              <li><strong>Project Root (<code>./Grok Memory</code>):</strong> Placed at the root of your Git repository. This file is shared among your team and defines project-level architecture, build commands, testing frameworks, and linting rules.</li>
              <li><strong>Subdirectory Scopes (<code>./apps/web/Grok Memory</code>):</strong> In monorepos, you can place localized files within package directories. When Grok runs commands inside that directory, it merges the package-level rules with the root rules.</li>
            </ul>

            <h3 id="Grokmd-template">Production Grok Memory Master Template</h3>
            <p>
              The most effective <code>Grok Memory</code> files are concise, imperative, and structured with clear Markdown headers. Avoid narrative paragraphs; use bullet points and exact shell syntax:
            </p>

            <pre><code class="language-markdown"># Project: E-Commerce Microservices Platform

## Tech Stack &amp; Package Manager
- Runtime: Node.js 20 LTS with pnpm (NEVER use npm or yarn)
- Framework: Next.js 15 (App Router only, Server Actions for mutations)
- Database: PostgreSQL 16 with Drizzle ORM
- Styling: Tailwind CSS v4 with Shadcn UI

## Core Build &amp; Test Commands
- Dev Server: `pnpm run dev` (runs on http://localhost:3000)
- Typecheck: `pnpm run type-check` (TypeScript strict mode)
- Test Suite: `pnpm test` (Vitest unit tests)
- Integration Tests: `pnpm test:e2e` (Playwright)
- Database Migration: `pnpm drizzle-kit push`

## Architectural Invariants
- Never use standard API route handlers (`/api/...`) for form submissions; always use Server Actions with `zod` validation.
- All database queries must run through repository modules in `lib/db/repositories/`.
- Zero `any` policy in TypeScript. Use unknown + narrowing or generic constraints.

## Git &amp; Workflow Rules
- Commits must adhere to Conventional Commits format: `feat(auth): add OAuth provider`.
- Never commit directly to `main`. Create feature branches (`feat/`, `fix/`).</code></pre>

            <h3 id="Grokmd-anti-patterns">What NEVER to Put in Grok Memory (Context Inflation Anti-Pattern)</h3>
            <p>
              Because <code>Grok Memory</code> is injected verbatim into <em>every single turn</em> of your conversation, bloating it directly degrades performance:
            </p>
            <ul>
              <li><strong>Do NOT include raw database schemas:</strong> Dumping 500 lines of SQL or Prisma models into <code>Grok Memory</code> consumes 3,000+ tokens on every interaction. Grok can read schema files on demand via its file tools when needed.</li>
              <li><strong>Do NOT include ephemeral debugging fixes:</strong> Notes like <em>"Fixed Redis port mismatch on line 88"</em> become obsolete in days and clutter Grok's reasoning window.</li>
              <li><strong>Do NOT paste conversation logs or changelogs:</strong> Historical changelogs belong in Git history, not in the active LLM context.</li>
            </ul>

            <h2 id="prompt-caching-vs-memory">Anthropic Prompt Caching vs. Persistent Memory</h2>
            <p>
              Many developers confuse Anthropic's <strong>Prompt Caching</strong> with long-term memory. While both optimize context, they serve fundamentally different functions:
            </p>

            <div class="overflow-x-auto my-6">
              <table class="w-full text-sm text-left border border-gray-200 dark:border-gray-800 rounded overflow-hidden">
                <thead>
                  <tr class="bg-gray-50 dark:bg-zinc-900 text-xs uppercase font-mono font-bold text-gray-500">
                    <th class="px-4 py-3 border-b border-gray-200 dark:border-gray-800">Attribute</th>
                    <th class="px-4 py-3 border-b border-gray-200 dark:border-gray-800">Anthropic Prompt Caching</th>
                    <th class="px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-[#FDF8F6] dark:bg-orange-950/20">
                      <span class="text-[#D97757]">Persistent Cross-Session Memory</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="text-gray-700 dark:text-gray-300 text-xs leading-relaxed">
                  <tr>
                    <td class="px-4 py-3 font-semibold border-b border-gray-100 dark:border-gray-800">Primary Purpose</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">Reduces latency &amp; input token cost for repetitive prompt prefixes.</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-[#FDFCFB] dark:bg-orange-950/10">Preserves architectural decisions &amp; solutions across terminal restarts.</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-semibold border-b border-gray-100 dark:border-gray-800">Time-to-Live (TTL)</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 font-bold text-red-500">5 Minutes (Ephemeral)</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-[#FDFCFB] dark:bg-orange-950/10 font-bold text-emerald-500">Permanent (Cross-Session)</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-semibold border-b border-gray-100 dark:border-gray-800">Session Boundary</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">Dies when terminal closes or prompt pauses &gt;5 min.</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-[#FDFCFB] dark:bg-orange-950/10">Persists across terminal sessions, reboots, and days.</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-semibold border-b border-gray-100 dark:border-gray-800">Cross-Tool Sharing</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">❌ Locked to active API request prefix.</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-[#FDFCFB] dark:bg-orange-950/10">✅ Shared between Grok Build, Cursor, and VS Code.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              In short: <strong>Prompt caching saves tokens within a rapid 5-minute typing loop</strong>. But as soon as you step away for coffee, switch git branches, or close your terminal, the cache evaporates. Persistent memory stores lessons forever and injects them only when semantically relevant.
            </p>

            <h2 id="native-memory-limits">How Grok Build Memory Works: Deconstructing Native Limits</h2>
            <p>
              To understand why Grok Build developers frequently experience memory loss, we inspected Grok Build's memory engine (located in <code>src/memdir/</code>). Grok Build provides three native mechanisms for managing context:
            </p>

            <h3 id="mechanism-Grokmd">1. Grok Memory (Static Rules)</h3>
            <p>
              <code>Grok Memory</code> is a Markdown file placed at your project root or in <code>~/.Grok/Grok Memory</code>. On startup, Grok loads this file verbatim into its context window. It is ideal for permanent guidelines (e.g., <em>"Always use pnpm"</em>, <em>"Follow TypeScript strict mode"</em>), but it requires 100% manual updating and does not learn dynamically from your terminal sessions.
            </p>

            <h3 id="mechanism-automemory">2. Auto Memory &amp; MEMORY.md (Version 2.1.59+)</h3>
            <p>
              Anthropic introduced <strong>Auto Memory</strong> to let Grok write notes automatically to a local Markdown file at <code>~/.Grok/projects/&lt;project-name&gt;/memory/MEMORY.md</code>. While an improvement, it suffers from three critical architectural constraints:
            </p>
            <ul>
              <li><strong>The 200-Line Silent Truncation Cap:</strong> <code>MEMORY.md</code> is hardcoded to truncate after <strong>200 lines</strong>. When your project accumulates more than 200 lines of facts, older entries are silently dropped from Grok's prompt injection. Grok has no awareness that earlier debugging lessons have vanished.</li>
              <li><strong>The 25KB File Size Limit:</strong> Auto Memory enforces a 25KB binary ceiling. Large code snippets or database schemas quickly trigger this limit.</li>
              <li><strong>Exact Keyword Search Only:</strong> Native Auto Memory relies primarily on exact text matching rather than two-stage cross-encoder semantic search. If your prompt phrases a problem differently than how Grok originally saved it, the memory is missed.</li>
            </ul>

            <h3 id="mechanism-autodream">3. Auto Dream (Idle Consolidation)</h3>
            <p>
              Grok Build includes an experimental background process called <strong>Auto Dream</strong> that reorganizes memories while the agent is idle. However, it remains machine-locked: it cannot synchronize observations to your laptop, your teammates, or your other editors (Cursor, VS Code, or Grok Desktop).
            </p>

            <!-- Visual Diagram 1: Native Memory Failure vs Memwyre Graph -->
            <div class="my-8 p-6 rounded-xl bg-gray-50/80 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 text-gray-800 dark:text-gray-200 shadow-sm">
              <div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-200 dark:border-zinc-800">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-gray-900 dark:bg-white"></span>
                  <span class="text-xs font-mono uppercase font-bold text-gray-900 dark:text-white tracking-wider">Architecture Teardown</span>
                </div>
                <span class="text-[10px] font-mono text-gray-500 dark:text-gray-400 uppercase">Native src/memdir/ vs Graph</span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
                <!-- Native Architecture Box -->
                <div class="p-4 rounded-lg bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 shadow-sm space-y-3">
                  <div class="flex items-center justify-between text-gray-900 dark:text-white font-bold">
                    <span>Grok Build Native Memory</span>
                    <span class="text-[10px] bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded border border-gray-200 dark:border-zinc-700">Flat Buffer</span>
                  </div>
                  <div class="p-3 bg-gray-50 dark:bg-zinc-900 rounded border border-gray-200 dark:border-zinc-800 text-[11px] space-y-1.5 text-gray-600 dark:text-gray-400 leading-snug font-mono">
                    <div class="text-gray-900 dark:text-gray-200 font-semibold">Local MEMORY.md (~/.Grok/projects/...)</div>
                    <div>┌─ [Line 1 - 20]: Database Schema Notes</div>
                    <div>├─ [Line 21 - 50]: JWT Auth Workaround</div>
                    <div class="text-gray-900 dark:text-white font-bold bg-gray-200/80 dark:bg-zinc-800 p-1 rounded">▼ [LINE 201+]: SILENT TRUNCATION DROP</div>
                    <div class="text-gray-400 dark:text-gray-500 italic text-[10px]">&nbsp;&nbsp;(Older architecture rules discarded silently)</div>
                    <div class="pt-2 text-gray-500 dark:text-gray-400">Exact String Search: "credential security"</div>
                    <div class="text-gray-900 dark:text-white font-bold">↳ MISSED (Saved as "Argon2id hashing")</div>
                  </div>
                  <div class="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
                    Single-file flat text buffer. Strict 200-line cap causes silent memory loss. Zero synchronization with other developer tools.
                  </div>
                </div>

                <!-- Memwyre Architecture Box -->
                <div class="p-4 rounded-lg bg-white dark:bg-zinc-950 border border-gray-300 dark:border-zinc-700 shadow-sm space-y-3">
                  <div class="flex items-center justify-between text-gray-900 dark:text-white font-bold">
                    <span>Memwyre Context Engine</span>
                    <span class="text-[10px] bg-gray-900 dark:bg-white text-white dark:text-black font-semibold px-2 py-0.5 rounded">Multi-Factor Graph</span>
                  </div>
                  <div class="p-3 bg-gray-50 dark:bg-zinc-900 rounded border border-gray-200 dark:border-zinc-800 text-[11px] space-y-1.5 text-gray-600 dark:text-gray-400 leading-snug font-mono">
                    <div class="text-gray-900 dark:text-gray-200 font-semibold">Knowledge Vault + Cross-Encoder</div>
                    <div>┌─ AST Graph: Entity Relations (Table ⇄ API)</div>
                    <div>├─ Ebbinghaus Recency Decay (Fresh beats stale)</div>
                    <div class="text-gray-900 dark:text-white font-bold bg-gray-200/80 dark:bg-zinc-800 p-1 rounded">✔ Scalable Index: Millions of tokens indexed</div>
                    <div class="text-gray-500 dark:text-gray-400 text-[10px]">&nbsp;&nbsp;(Only top-k relevant ~1,500 tokens injected)</div>
                    <div class="pt-2 text-gray-500 dark:text-gray-400">Query: "credential security"</div>
                    <div class="text-gray-900 dark:text-white font-bold">↳ MATCHED: Vector similarity 0.92 to Argon2id</div>
                  </div>
                  <div class="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
                    Multi-factor ranking with semantic embeddings and dependency graph. Shared simultaneously with Cursor and VS Code.
                  </div>
                </div>
              </div>
            </div>

            <h2 id="cli-commands">Grok Build CLI Commands: Managing Working Context</h2>
            <p>
              During active development, Grok Build accumulates terminal output, file reads, and tool execution traces. Anthropic provides several built-in slash commands in the CLI to inspect and control working context:
            </p>

            <div class="overflow-x-auto my-6">
              <table class="w-full text-sm text-left border border-gray-200 dark:border-gray-800 rounded overflow-hidden">
                <thead>
                  <tr class="bg-gray-50 dark:bg-zinc-900 text-xs uppercase font-mono font-bold text-gray-500">
                    <th class="px-4 py-3 border-b border-gray-200 dark:border-gray-800">Command</th>
                    <th class="px-4 py-3 border-b border-gray-200 dark:border-gray-800">Action</th>
                    <th class="px-4 py-3 border-b border-gray-200 dark:border-gray-800">Context Impact</th>
                  </tr>
                </thead>
                <tbody class="text-gray-700 dark:text-gray-300 text-xs leading-relaxed font-mono">
                  <tr>
                    <td class="px-4 py-3 font-bold text-[#D97757] border-b border-gray-100 dark:border-gray-800">/memory</td>
                    <td class="px-4 py-3 font-sans border-b border-gray-100 dark:border-gray-800">Opens the interactive memory viewer to review or edit stored notes.</td>
                    <td class="px-4 py-3 font-sans border-b border-gray-100 dark:border-gray-800">Allows manual pruning of stale or inaccurate auto-memories.</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-bold text-[#D97757] border-b border-gray-100 dark:border-gray-800">/compact</td>
                    <td class="px-4 py-3 font-sans border-b border-gray-100 dark:border-gray-800">Forces immediate context compression by summarizing conversational history.</td>
                    <td class="px-4 py-3 font-sans border-b border-gray-100 dark:border-gray-800">Frees up 40–70% of context tokens. Warning: fine-grained error logs are lost.</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-bold text-[#D97757] border-b border-gray-100 dark:border-gray-800">/clear</td>
                    <td class="px-4 py-3 font-sans border-b border-gray-100 dark:border-gray-800">Wipes all working session history and restarts the context window.</td>
                    <td class="px-4 py-3 font-sans border-b border-gray-100 dark:border-gray-800">100% reset. Only <code>Grok Memory</code> and auto-memory persist.</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-bold text-[#D97757] border-b border-gray-100 dark:border-gray-800">/context</td>
                    <td class="px-4 py-3 font-sans border-b border-gray-100 dark:border-gray-800">Displays a visual bar chart of active tokens (system prompt, tools, chat).</td>
                    <td class="px-4 py-3 font-sans border-b border-gray-100 dark:border-gray-800">Diagnostic tool to pinpoint files or tools causing prompt bloat.</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-bold text-[#D97757] border-b border-gray-100 dark:border-gray-800">/cost</td>
                    <td class="px-4 py-3 font-sans border-b border-gray-100 dark:border-gray-800">Outputs dollar expenditure and cumulative token counts for current session.</td>
                    <td class="px-4 py-3 font-sans border-b border-gray-100 dark:border-gray-800">Monitors prompt token burn rate in real time.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="team-silo-problem">The Team Silo Problem: Why Local Memory Fails Collaborative Engineering</h2>
            <p>
              By default, Grok Build writes notes to <code>~/.Grok/projects/&lt;project-name&gt;/memory/MEMORY.md</code>. Because this path is stored in your personal home directory on your local workstation, it is completely invisible to your teammates.
            </p>
            <p>
              This creates severe organizational context fragmentation across development teams:
            </p>
            <ul>
              <li><strong>Redundant Problem Solving:</strong> When Senior Engineer Sarah spends 45 minutes debugging an esoteric Docker networking issue on macOS and Grok notes the fix, Junior Engineer Alex encounters the exact same failure the next day and spends another 45 minutes rediscovering the solution from scratch.</li>
              <li><strong>Git Merge Conflicts from Shared Files:</strong> Teams that try to solve this by committing dynamic notes to <code>Grok Memory</code> in Git quickly suffer from branch collision. Every developer's branch modifies <code>Grok Memory</code>, generating messy merge conflicts on pull requests.</li>
              <li><strong>Cross-Editor Disconnect:</strong> Even on a single developer's laptop, if you alternate between Grok Build in your terminal, Cursor for quick edits, and Grok Desktop for strategic planning, none of them know what the other two discovered.</li>
            </ul>

            <h2 id="comparison">Four Approaches to Grok Build Memory</h2>
            <p>
              There is no single "right" approach — each method suits a different workflow. If you've researched this space, you've likely seen <strong>Grok-mem</strong> (89K+ GitHub stars) alongside Anthropic's built-in options. Here is an honest breakdown of all four approaches.
            </p>

            <div class="overflow-x-auto my-6">
              <table class="w-full text-sm text-left border border-gray-200 dark:border-gray-800 rounded overflow-hidden">
                <thead>
                  <tr class="bg-gray-50 dark:bg-zinc-900 text-xs uppercase font-mono font-bold text-gray-500">
                    <th class="px-4 py-3 border-b border-gray-200 dark:border-gray-800">Feature</th>
                    <th class="px-4 py-3 border-b border-gray-200 dark:border-gray-800">Grok Memory / Auto-Memory</th>
                    <th class="px-4 py-3 border-b border-gray-200 dark:border-gray-800">Grok-mem (OSS)</th>
                    <th class="px-4 py-3 border-b border-gray-200 dark:border-gray-800">MCP Memory Server</th>
                    <th class="px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-[#FDF8F6] dark:bg-orange-950/20">
                      <span class="text-[#D97757]">Memwyre Plugin</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="text-gray-700 dark:text-gray-300 text-xs leading-relaxed">
                  <tr>
                    <td class="px-4 py-3 font-semibold border-b border-gray-100 dark:border-gray-800">Automation</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">Manual edits</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">Predictive (LLM decides when to save)</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">Predictive (LLM decides when to use tool)</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-[#FDFCFB] dark:bg-orange-950/10">Deterministic (Always runs on SessionStart/Stop)</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-semibold border-b border-gray-100 dark:border-gray-800">Storage</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">Flat Markdown file</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">Local SQLite + ChromaDB</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">Varies (cloud or local)</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-[#FDFCFB] dark:bg-orange-950/10">Cloud vault + entity graph</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-semibold border-b border-gray-100 dark:border-gray-800">Setup</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">Manual file creation</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800"><code>npx Grok-mem install</code></td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">JSON config + API key</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-[#FDFCFB] dark:bg-orange-950/10"><code>Grok plugin install</code></td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-semibold border-b border-gray-100 dark:border-gray-800">Cross-Session</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">✅ Loads on startup</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">✅ Local DB persistence</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">✅ Via tool calls</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-[#FDFCFB] dark:bg-orange-950/10">✅ Auto-injected on startup</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-semibold border-b border-gray-100 dark:border-gray-800">Cross-Tool</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">❌ Grok Build only</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">⚠️ SSH sync (<code>Grok-mem-sync</code>)</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">✅ Any MCP client</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-[#FDFCFB] dark:bg-orange-950/10">✅ Shared vault (Cursor, VS Code, Grok Desktop)</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-semibold border-b border-gray-100 dark:border-gray-800">License</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">N/A (built-in)</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">AGPL-3.0</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">Varies</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-[#FDFCFB] dark:bg-orange-950/10">Apache-2.0</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-semibold">Best For</td>
                    <td class="px-4 py-3">Static project rules</td>
                    <td class="px-4 py-3">Local-first power users</td>
                    <td class="px-4 py-3">Real-time tool access</td>
                    <td class="px-4 py-3 bg-[#FDFCFB] dark:bg-orange-950/10"><strong>Hands-free cross-tool memory</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p class="text-gray-500 text-xs italic">
              These approaches are complementary, not mutually exclusive. Many production teams use Grok Memory for permanent guidelines and an external memory layer for dynamic session memory.
            </p>

            <h3 id="approach-native">Approach 1: Pure Native (Grok Memory + Auto Memory)</h3>
            <p>
              Anthropic's built-in combination requires no external tools or API keys. You write static guidelines into <code>Grok Memory</code>, and Grok Build automatically records notes to <code>MEMORY.md</code>.
            </p>
            <ul>
              <li><strong>Best for:</strong> Solo developers working on single repositories who don't mind manually curating Markdown files.</li>
              <li><strong>Trade-off:</strong> Suffers from the 200-line silent truncation limit and zero cross-tool synchronization.</li>
            </ul>

            <h3 id="approach-Grok-mem">Approach 2: Local Open-Source (Grok-mem by David Dias)</h3>
            <p>
              <strong>Grok-mem</strong> is a popular open-source project (89K+ GitHub stars) that runs an autonomous memory server locally on your machine. It installs via npm and manages context using SQLite and ChromaDB:
            </p>
            <pre><code class="language-bash"># Install Grok-mem CLI
npx Grok-mem install</code></pre>
            <p>
              Under the hood, <code>Grok-mem</code> hooks into Grok's execution stream to summarize observations and store vector embeddings in ChromaDB.
            </p>
            <ul>
              <li><strong>Strengths:</strong> Completely local-first, zero cloud reliance, open-source codebase.</li>
              <li><strong>Limitations:</strong> Single-machine lock-in. To share context across multiple computers or team members, developers must configure <code>Grok-mem-sync</code> over SSH tunnels. Additionally, its <strong>AGPL-3.0</strong> copyleft license creates compliance concerns for proprietary enterprise codebases.</li>
            </ul>

            <h3 id="approach-mcp">Approach 3: Generic MCP Memory Servers</h3>
            <p>
              The Model Context Protocol (MCP) allows Grok Build to connect to external servers exposing memory tools (e.g., <code>save_memory</code> and <code>search_memory</code>):
            </p>
            <pre><code class="language-bash"># Add a custom MCP server to Grok Build
Grok mcp add memory-server -- node /path/to/server.js</code></pre>
            <ul>
              <li><strong>Strengths:</strong> Standardized protocol supported across Grok Build, Cursor, and Grok Desktop.</li>
              <li><strong>Limitations:</strong> Predictive tool invocation. The LLM must actively decide when to query or update memory during conversation turns. This consumes reasoning tokens on every turn and frequently fails when the model doesn't realize relevant memory exists.</li>
            </ul>

            <h3 id="approach-memwyre">Approach 4: Dedicated Unified Context Engine (Memwyre)</h3>
            <p>
              Memwyre approaches memory <strong>deterministically</strong> rather than predictively. Instead of forcing the LLM to remember to make tool calls, Memwyre intercepts Grok Build's native lifecycle hooks (<code>SessionStart</code> and <code>Stop</code>). Context is injected before prompt typing begins and extracted when the terminal closes, synchronized across Grok Build, <router-link to="/cursor-memory" class="text-[#D97757] hover:underline font-medium">Cursor AI</router-link>, and <router-link to="/mcp-memory" class="text-[#D97757] hover:underline font-medium">VS Code (MCP)</router-link>.
            </p>

            <h2 id="architecture">How the Memwyre Grok Build Plugin Works</h2>
            <p>
              The plugin hooks into Grok Build's native lifecycle events — two hooks, zero configuration after install. It reads your project directory name and handles context retrieval and capture automatically.
            </p>

            <!-- Visual Diagram 2: Deterministic Lifecycle Sequence Map -->
            <div class="my-8 p-6 rounded-xl bg-gray-50/80 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 text-gray-800 dark:text-gray-200 shadow-sm overflow-x-auto">
              <div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-200 dark:border-zinc-800">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-gray-900 dark:bg-white"></span>
                  <span class="text-xs font-mono uppercase font-bold text-gray-900 dark:text-white tracking-wider">Deterministic Lifecycle Sequence</span>
                </div>
                <span class="text-[10px] font-mono text-gray-500 dark:text-gray-400 uppercase font-semibold">Low-Latency Overhead</span>
              </div>

              <div class="space-y-4 font-mono text-xs min-w-[580px]">
                <!-- Step 1: SessionStart -->
                <div class="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 shadow-sm">
                  <div class="w-7 h-7 rounded-md bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white font-mono font-bold flex items-center justify-center shrink-0 text-xs">
                    1
                  </div>
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-gray-900 dark:text-white text-xs">Terminal Launch &rarr; SessionStart Hook</span>
                      <span class="text-[10px] text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded border border-gray-200 dark:border-zinc-700">&lt;280ms Latency</span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 font-sans text-xs">
                      Developer runs <code>Grok</code> in terminal. Plugin intercepts initialization before prompt input, identifies git workspace, and queries Memwyre API.
                    </p>
                    <div class="p-2 rounded bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-[11px] text-gray-800 dark:text-gray-200 font-mono">
                      POST /api/v1/memories/retrieve { workspace: "my-app", branch: "feat/auth" }
                    </div>
                  </div>
                </div>

                <!-- Arrow Down -->
                <div class="flex justify-center text-gray-400 dark:text-gray-600 -my-2 text-xs font-mono">↓</div>

                <!-- Step 2: System Injection -->
                <div class="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 shadow-sm">
                  <div class="w-7 h-7 rounded-md bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white font-mono font-bold flex items-center justify-center shrink-0 text-xs">
                    2
                  </div>
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-gray-900 dark:text-white text-xs">Targeted Context Injection (&lt;memwyre-context&gt;)</span>
                      <span class="text-[10px] text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded border border-gray-200 dark:border-zinc-700">~1,500 Tokens Max</span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 font-sans text-xs">
                      Top-k memories scored by cross-encoder relevance and recency are formatted into a clean XML block and injected silently into Grok's prompt.
                    </p>
                  </div>
                </div>

                <!-- Arrow Down -->
                <div class="flex justify-center text-gray-400 dark:text-gray-600 -my-2 text-xs font-mono">↓</div>

                <!-- Step 3: Stop Hook Capture -->
                <div class="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 shadow-sm">
                  <div class="w-7 h-7 rounded-md bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white font-mono font-bold flex items-center justify-center shrink-0 text-xs">
                    3
                  </div>
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-gray-900 dark:text-white text-xs">Session Exit &rarr; Stop Hook Extraction</span>
                      <span class="text-[10px] text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded border border-gray-200 dark:border-zinc-700">Background Worker</span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 font-sans text-xs">
                      On terminal exit (or <code>/exit</code>), full JSONL transcript sends to Memwyre worker. Model strips ephemeral shell noise and indexes structural decisions.
                    </p>
                    <div class="p-2 rounded bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-[11px] text-gray-800 dark:text-gray-200 font-mono">
                      ✔ Synced to cloud vault &mdash; Accessible immediately in Cursor &amp; VS Code
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 id="sessionstart">① SessionStart — Context Injection</h3>
            <p>
              When you open a Grok Build session, the plugin fires before the first prompt. It reads your working directory, queries the Memwyre retrieval engine for past memories matching that project, and injects them directly into Grok's system prompt.
            </p>
            <pre><code class="language-markdown">&lt;memwyre-context&gt;
## Past Memories for my-project
- Database uses PostgreSQL 15 with pgvector
- Auth flow: JWT + refresh tokens in httpOnly cookies
- Fixed: race condition in worker queue (use Redis lock)
&lt;/memwyre-context&gt;</code></pre>
            
            <h3 id="stop-session">② Stop — Session Capture</h3>
            <p>
              When you exit Grok Build (or the session ends), the plugin reads the full JSONL session transcript, sends it to Memwyre's background worker, and extracts structured memories — architecture decisions, debugging solutions, code patterns, and configuration choices.
            </p>

            <h3 id="troubleshooting">Troubleshooting & Edge Cases</h3>
            <p>
              No extraction model is perfect. Here's how to handle the edge cases:
            </p>
            <ul>
              <li><strong>Misclassified memory:</strong> If the extraction model captures something irrelevant or incorrect, you can view, edit, or delete any individual memory from the <router-link to="/dashboard" class="text-[#D97757] hover:underline font-medium">Memwyre dashboard</router-link> or via the API (<code>DELETE /api/v1/memories/:id</code>). Every memory is individually addressable.</li>
              <li><strong>Stale facts:</strong> Decided to switch from PostgreSQL to CockroachDB? The Ebbinghaus logarithmic recency decay model automatically deprioritizes older, superseded facts. The most recent observation wins in retrieval ranking — you don't need to manually clean up outdated context.</li>
              <li><strong>Deduplication:</strong> If consecutive sessions produce near-identical observations (e.g., "project uses Tailwind" captured in sessions #4, #5, and #6), the extraction model deduplicates them during ingestion. Your vault stays lean.</li>
              <li><strong>Project exclusion:</strong> Don't want to capture sessions for a specific repo? Unset the <code>MEMWYRE_API_KEY</code> environment variable for that terminal session, or configure project-level exclusions in your Memwyre dashboard settings.</li>
            </ul>

            <h2 id="setup">Install in 60 Seconds</h2>
            <p>
              Choose between standard CLI plugin installation or manual hooks configuration:
            </p>
            
            <div class="space-y-6 my-4">
              <div>
                <h3 class="text-sm font-bold text-gray-900 dark:text-white mb-2">Option A: Direct Plugin Install (Recommended)</h3>
                <ol class="space-y-3 text-sm">
                  <li>
                    <strong>1. Install the plugin package:</strong>
                    <pre><code class="language-bash">Grok plugin install @memwyre/Grok-code-plugin</code></pre>
                  </li>
                  <li>
                    <strong>2. Export your API key:</strong>
                    <pre><code class="language-bash">export MEMWYRE_API_KEY="bv_sk_your_api_key_here"</code></pre>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Add to your <code>~/.zshrc</code>, <code>~/.bashrc</code>, or system environment variables.</p>
                  </li>
                </ol>
              </div>

              <div>
                <h3 class="text-sm font-bold text-gray-900 dark:text-white mb-2">Option B: Manual Hooks Configuration (Custom Setup)</h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">If configuring hooks manually in <code>~/.Grok/hooks.json</code>:</p>
                <pre><code class="language-json">{
  "description": "Memwyre: Persistent autonomous memory",
  "hooks": {
    "SessionStart": [{ "hooks": [{ "type": "command", "command": "node \"/path/to/node_modules/@memwyre/Grok-memwyre/dist/inject-memory.cjs\"", "timeout": 30 }] }],
    "Stop": [{ "hooks": [{ "type": "command", "command": "node \"/path/to/node_modules/@memwyre/Grok-memwyre/dist/capture-session.cjs\"", "timeout": 30 }] }]
  }
}</code></pre>
              </div>
            </div>

            <!-- Documentation Link Box -->
            <div class="mt-8 p-4 rounded-lg bg-gray-50 dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div class="font-bold text-sm text-gray-900 dark:text-white">Need detailed setup docs or custom hooks guidance?</div>
                <div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Read our official Grok Build integration guide covering hook timeouts, environment variables, and self-hosting.</div>
              </div>
              <a href="https://docs.memwyre.tech/integrations/plugins/Grok" target="_blank" class="shrink-0 px-4 py-2 bg-[#D97757] text-white text-xs font-semibold rounded hover:bg-[#c05c3d] transition-colors">
                Read Grok Docs →
              </a>
            </div>

            <h2 id="capabilities">What Grok Remembers With Memwyre</h2>
            <ul>
              <li><strong>🧠 Architecture Decisions:</strong> Database choices, API patterns, deployment configs, and framework decisions from past sessions.</li>
              <li><strong>🐛 Debugging Solutions:</strong> Race conditions fixed, environment variable gotchas, and edge cases you already solved once.</li>
              <li><strong>🔗 Entity Relationships:</strong> Connections between database tables, files, services, and APIs — enabling multi-hop reasoning.</li>
              <li><strong>✂️ Dynamic Pruning:</strong> Filters out duplicate CLI logs, compiler errors, and noise — keeping memory lean and token costs low.</li>
            </ul>

            <h3 id="monorepo-isolation">Monorepo &amp; Package Boundary Scoping</h3>
            <p>
              In multi-package monorepos (Turborepo, Nx, pnpm workspaces), native <code>Grok Memory</code> files often create context collision: Grok Build running in a backend service directory pulls in frontend styling rules, polluting the prompt and wasting context. Memwyre applies path-aware AST bounding to ensure strict context isolation.
            </p>

            <!-- Visual Diagram 3: Monorepo Package Scoping Architecture -->
            <div class="my-8 p-6 rounded-xl bg-gray-50/80 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 text-gray-800 dark:text-gray-200 shadow-sm overflow-x-auto">
              <div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-200 dark:border-zinc-800">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-gray-900 dark:bg-white"></span>
                  <span class="text-xs font-mono uppercase font-bold text-gray-900 dark:text-white tracking-wider">Monorepo Workspace Isolation</span>
                </div>
                <span class="text-[10px] font-mono text-gray-500 dark:text-gray-400 uppercase font-semibold">Zero Context Pollution</span>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 font-mono text-xs">
                <!-- Column 1: Git Root & Monorepo Tree -->
                <div class="p-4 rounded-lg bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 shadow-sm space-y-2">
                  <div class="text-gray-900 dark:text-white font-bold flex items-center gap-1.5 pb-2 border-b border-gray-100 dark:border-zinc-800">
                    <span>📁 Git Root: /enterprise-repo</span>
                  </div>
                  <div class="text-[11px] space-y-1 text-gray-600 dark:text-gray-400 font-mono">
                    <div class="text-gray-900 dark:text-gray-100 font-semibold">├── apps/web/ (Next.js 15)</div>
                    <div class="text-gray-400 dark:text-gray-500 pl-4">↳ Working Directory 1</div>
                    <div class="text-gray-900 dark:text-gray-100 font-semibold">├── services/auth/ (Go)</div>
                    <div class="text-gray-400 dark:text-gray-500 pl-4">↳ Working Directory 2</div>
                    <div class="text-gray-900 dark:text-gray-100 font-semibold">└── packages/ui/ (Tailwind v4)</div>
                    <div class="text-gray-400 dark:text-gray-500 pl-4">↳ Shared Dependency</div>
                  </div>
                </div>

                <!-- Column 2: Terminal Session A -->
                <div class="p-4 rounded-lg bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 shadow-sm space-y-2">
                  <div class="text-gray-900 dark:text-white font-bold flex items-center justify-between pb-2 border-b border-gray-100 dark:border-zinc-800">
                    <span>Session A: cd apps/web</span>
                    <span class="text-[10px] bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-gray-700 dark:text-gray-300 font-mono border border-gray-200 dark:border-zinc-700">Active</span>
                  </div>
                  <div class="p-2.5 bg-gray-50 dark:bg-zinc-900 rounded border border-gray-200 dark:border-zinc-800 text-[11px] space-y-1.5 font-mono">
                    <div class="text-gray-900 dark:text-white font-semibold">✔ Injected Context:</div>
                    <div class="text-gray-700 dark:text-gray-300">• Next.js Server Actions standard</div>
                    <div class="text-gray-700 dark:text-gray-300">• packages/ui Button tokens</div>
                    <div class="text-gray-400 dark:text-gray-500 pt-1">✕ Filtered Out:</div>
                    <div class="text-gray-400 dark:text-gray-500 line-through">• Go JWT claims logic (services/auth)</div>
                    <div class="text-gray-400 dark:text-gray-500 line-through">• PostgreSQL connection pooling</div>
                  </div>
                  <p class="text-[10px] font-sans text-gray-600 dark:text-gray-400 leading-snug">
                    Grok Build receives only relevant Next.js and shared UI tokens. No backend noise.
                  </p>
                </div>

                <!-- Column 3: Terminal Session B -->
                <div class="p-4 rounded-lg bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 shadow-sm space-y-2">
                  <div class="text-gray-900 dark:text-white font-bold flex items-center justify-between pb-2 border-b border-gray-100 dark:border-zinc-800">
                    <span>Session B: cd services/auth</span>
                    <span class="text-[10px] bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-gray-700 dark:text-gray-300 font-mono border border-gray-200 dark:border-zinc-700">Active</span>
                  </div>
                  <div class="p-2.5 bg-gray-50 dark:bg-zinc-900 rounded border border-gray-200 dark:border-zinc-800 text-[11px] space-y-1.5 font-mono">
                    <div class="text-gray-900 dark:text-white font-semibold">✔ Injected Context:</div>
                    <div class="text-gray-700 dark:text-gray-300">• Go Argon2id password hashing</div>
                    <div class="text-gray-700 dark:text-gray-300">• Database migration rollbacks</div>
                    <div class="text-gray-400 dark:text-gray-500 pt-1">✕ Filtered Out:</div>
                    <div class="text-gray-400 dark:text-gray-500 line-through">• Tailwind theme definitions</div>
                    <div class="text-gray-400 dark:text-gray-500 line-through">• React query hydration hooks</div>
                  </div>
                  <p class="text-[10px] font-sans text-gray-600 dark:text-gray-400 leading-snug">
                    Grok Build receives pure backend security &amp; database rules without CSS clutter.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="benchmark">Benchmark: Why Retrieval Quality Matters</h2>
            <p>
              Generic memory plugins dump raw vectors into Grok's context window. That approach fails on the queries that actually matter in a codebase — temporal reasoning ("when did we switch from REST to GraphQL?"), multi-hop connections ("which services depend on the auth token format we changed last week?"), and adversarial edge cases ("we never discussed Redis" → the system should abstain, not hallucinate).
            </p>
            <p>
              We evaluated Memwyre's retrieval engine against a flat vector RAG baseline on the <strong><a href="https://arxiv.org/abs/2402.17753" target="_blank" rel="noopener noreferrer" class="text-[#D97757] hover:underline">LoCoMo-10 benchmark</a></strong> (Snap Research, ACL 2024) — 1,540 questions across 10 long conversations spanning 200,000+ tokens:
            </p>

            <div class="overflow-x-auto my-6">
              <table class="w-full text-sm text-left border border-gray-200 dark:border-gray-800 rounded overflow-hidden">
                <thead>
                  <tr class="bg-gray-50 dark:bg-zinc-900 text-xs uppercase font-mono font-bold text-gray-500">
                    <th class="px-4 py-3 border-b border-gray-200 dark:border-gray-800">Category</th>
                    <th class="px-4 py-3 border-b border-gray-200 dark:border-gray-800">Flat Vector RAG</th>
                    <th class="px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-[#FDF8F6] dark:bg-orange-950/20">
                      <span class="text-[#D97757]">Memwyre Engine</span>
                    </th>
                    <th class="px-4 py-3 border-b border-gray-200 dark:border-gray-800">Improvement</th>
                  </tr>
                </thead>
                <tbody class="text-gray-700 dark:text-gray-300 text-xs leading-relaxed">
                  <tr>
                    <td class="px-4 py-3 font-semibold border-b border-gray-100 dark:border-gray-800">Single-Hop Recall</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">53.0%</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-[#FDFCFB] dark:bg-orange-950/10 font-semibold">80.0%</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-green-600 dark:text-green-400 font-semibold">+51%</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-semibold border-b border-gray-100 dark:border-gray-800">Multi-Hop Reasoning</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">24.0%</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-[#FDFCFB] dark:bg-orange-950/10 font-semibold">45.0%</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-green-600 dark:text-green-400 font-semibold">+87.5%</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-semibold border-b border-gray-100 dark:border-gray-800">Temporal Alignment</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">48.0%</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-[#FDFCFB] dark:bg-orange-950/10 font-semibold">74.0%</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-green-600 dark:text-green-400 font-semibold">+54%</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-semibold border-b border-gray-100 dark:border-gray-800">Open-Domain Reasoning</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">50.0%</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-[#FDFCFB] dark:bg-orange-950/10 font-semibold">76.0%</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-green-600 dark:text-green-400 font-semibold">+52%</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-semibold border-b border-gray-100 dark:border-gray-800">Overall Accuracy</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">43.7%</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-[#FDFCFB] dark:bg-orange-950/10 font-bold text-[#D97757]">70.5%</td>
                    <td class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-green-600 dark:text-green-400 font-bold">+61%</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-semibold">Context Tokens Sent</td>
                    <td class="px-4 py-3">~26,000</td>
                    <td class="px-4 py-3 bg-[#FDFCFB] dark:bg-orange-950/10 font-semibold">~3,000</td>
                    <td class="px-4 py-3 text-green-600 dark:text-green-400 font-semibold">−81%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The improvement comes from three architectural choices: <strong>dynamic context pruning</strong> during ingestion (strips conversational filler), <strong>two-stage cross-encoder re-ranking</strong> (high-recall vector fetch → precision cross-encoder scoring), and <strong>Ebbinghaus logarithmic recency decay</strong> (automatically deprioritizes stale observations).
            </p>
            <p class="flex flex-wrap gap-4 text-sm">
              <router-link to="/ai-memory-benchmark-locomo" class="text-[#D97757] hover:underline font-medium">View the full LoCoMo-10 benchmark results →</router-link>
              <router-link to="/research/vector-database-vs-agent-memory" class="text-[#D97757] hover:underline font-medium">Read our Vector DB vs. Agent Memory deep dive →</router-link>
            </p>

            <h2 id="real-world-workflow">Real-World Workflow: Large Codebase Refactoring</h2>
            <p>
              To understand the depth of this integration, consider a common scenario: migrating a large React SPA to Next.js App Router.
            </p>
            <p>
              In a standard Grok Build setup, you might tackle routing on Monday, API endpoints on Tuesday, and state management on Wednesday. By Wednesday, Grok has forgotten that you decided to use Server Actions for mutations instead of traditional API routes. It will start generating standard REST calls, requiring you to manually correct it and burn through tokens.
            </p>
            <p>
              With the <strong>Memwyre Plugin</strong>, Monday's architectural decision ("we are exclusively using Server Actions for Next.js mutations") is extracted during the session stop hook. When you open Grok on Wednesday, that context is automatically injected. Grok inherently knows the project's boundaries, saving you countless prompt-correction cycles and significantly reducing your token usage by preventing hallucinated code paths.
            </p>

            <h2 id="security-and-costs">Token Costs, Noise, & Security</h2>
            <p>
              Sending large conversational contexts directly impacts both billing and privacy. The plugin employs several strategies to mitigate this:
            </p>
            <h3 id="noise-filtration">Algorithmic Noise Filtration</h3>
            <p>
              Not every CLI error needs to be remembered. Memwyre's backend uses a specialized extraction model that differentiates between <em>ephemeral noise</em> (e.g., a typo in a <code>git commit</code> command) and <em>structural knowledge</em> (e.g., adding a new <code>enum</code> to a Prisma schema). Only the structural knowledge is saved to your vector vault, keeping your persistent memory highly relevant and dense.
            </p>
            <h3 id="token-efficiency">Predictable Token Usage</h3>
            <p>
              By summarizing and deduplicating past sessions, the plugin injects a concise <code>&lt;memwyre-context&gt;</code> block that rarely exceeds 1,500 tokens. Compared to manually pasting in megabytes of old transcript logs, this targeted injection saves Anthropic API costs while providing superior context.
            </p>

            <!-- Visual Diagram 4: 30-Day Context ROI & Token Cost Math -->
            <div class="my-8 p-6 rounded-xl bg-gray-50/80 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 text-gray-800 dark:text-gray-200 shadow-sm overflow-x-auto">
              <div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-200 dark:border-zinc-800">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-gray-900 dark:bg-white"></span>
                  <span class="text-xs font-mono uppercase font-bold text-gray-900 dark:text-white tracking-wider">30-Day Token Economics</span>
                </div>
                <span class="text-[10px] font-mono text-gray-500 dark:text-gray-400 uppercase font-semibold">91.8% Reduction</span>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 font-mono text-xs">
                <!-- Card 1: Unmanaged Prompt Pasting -->
                <div class="p-4 rounded-lg bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between space-y-3">
                  <div class="space-y-1">
                    <div class="flex items-center justify-between text-gray-900 dark:text-white font-bold">
                      <span>Manual Pasting / Raw Files</span>
                      <span class="text-[10px] bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 px-1.5 py-0.5 rounded border border-gray-200 dark:border-zinc-700">Unoptimized</span>
                    </div>
                    <p class="text-[11px] font-sans text-gray-600 dark:text-gray-400">Pasting old Grok Memory files, chat logs, and manual specs.</p>
                  </div>

                  <div class="p-3 bg-gray-50 dark:bg-zinc-900 rounded border border-gray-200 dark:border-zinc-800 text-[11px] space-y-2 text-gray-700 dark:text-gray-300">
                    <div class="flex justify-between">
                      <span class="text-gray-500 dark:text-gray-400">Tokens / Session:</span>
                      <span class="font-bold text-gray-900 dark:text-white font-mono">18,500</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-500 dark:text-gray-400">Sessions / Day (5×):</span>
                      <span class="font-mono">92,500 tokens</span>
                    </div>
                    <div class="flex justify-between pt-1 border-t border-gray-200 dark:border-zinc-800">
                      <span class="text-gray-500 dark:text-gray-400">Monthly Tokens:</span>
                      <span class="font-bold text-gray-900 dark:text-white font-mono">2.03M tokens</span>
                    </div>
                    <div class="flex justify-between font-bold pt-1 border-t border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white">
                      <span>Anthropic API Cost:</span>
                      <span>~$6.09 - $16.24/mo</span>
                    </div>
                  </div>

                  <div class="text-[10px] text-gray-500 dark:text-gray-400 italic">
                    + 5 to 10 mins spent re-explaining context per session.
                  </div>
                </div>

                <!-- Card 2: Memwyre Targeted Injection -->
                <div class="p-4 rounded-lg bg-white dark:bg-zinc-950 border border-gray-300 dark:border-zinc-700 shadow-sm flex flex-col justify-between space-y-3">
                  <div class="space-y-1">
                    <div class="flex items-center justify-between text-gray-900 dark:text-white font-bold">
                      <span>Memwyre Smart Context</span>
                      <span class="text-[10px] bg-gray-900 dark:bg-white text-white dark:text-black px-1.5 py-0.5 rounded font-semibold">Deterministic</span>
                    </div>
                    <p class="text-[11px] font-sans text-gray-600 dark:text-gray-400">Dynamic cross-encoder top-k injection (~1,500 tokens max).</p>
                  </div>

                  <div class="p-3 bg-gray-50 dark:bg-zinc-900 rounded border border-gray-200 dark:border-zinc-800 text-[11px] space-y-2 text-gray-700 dark:text-gray-300">
                    <div class="flex justify-between">
                      <span class="text-gray-500 dark:text-gray-400">Tokens / Session:</span>
                      <span class="font-bold text-gray-900 dark:text-white font-mono">~1,500</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-500 dark:text-gray-400">Sessions / Day (5×):</span>
                      <span class="font-mono">7,500 tokens</span>
                    </div>
                    <div class="flex justify-between pt-1 border-t border-gray-200 dark:border-zinc-800">
                      <span class="text-gray-500 dark:text-gray-400">Monthly Tokens:</span>
                      <span class="font-bold text-gray-900 dark:text-white font-mono">165K tokens</span>
                    </div>
                    <div class="flex justify-between font-bold pt-1 border-t border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white">
                      <span>Anthropic API Cost:</span>
                      <span>~$0.49 - $1.32/mo</span>
                    </div>
                  </div>

                  <div class="text-[10px] text-gray-700 dark:text-gray-300 font-medium">
                    ⚡ Instant prompt readiness (0 mins lost to priming).
                  </div>
                </div>

                <!-- Card 3: Net Efficiency & Savings Summary -->
                <div class="p-4 rounded-lg bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between space-y-3">
                  <div class="space-y-1">
                    <div class="flex items-center justify-between text-gray-900 dark:text-white font-bold">
                      <span>Monthly Developer ROI</span>
                      <span class="text-[10px] bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 px-1.5 py-0.5 rounded border border-gray-200 dark:border-zinc-700 font-mono">Per Engineer</span>
                    </div>
                    <p class="text-[11px] font-sans text-gray-600 dark:text-gray-400">Calculated across 22 work days at 5 Grok Build sessions/day.</p>
                  </div>

                  <div class="p-3 bg-gray-50 dark:bg-zinc-900 rounded border border-gray-200 dark:border-zinc-800 text-[11px] space-y-2.5 text-gray-700 dark:text-gray-300">
                    <div>
                      <div class="flex justify-between text-gray-700 dark:text-gray-300 mb-1">
                        <span>Context Token Reduction:</span>
                        <span class="font-bold text-gray-900 dark:text-white font-mono">-91.8%</span>
                      </div>
                      <div class="w-full h-2 bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <div class="h-full bg-gray-900 dark:bg-white rounded-full" style="width: 91.8%"></div>
                      </div>
                    </div>
                    <div class="flex justify-between pt-2 border-t border-gray-200 dark:border-zinc-800">
                      <span class="text-gray-500 dark:text-gray-400">Engineering Time Saved:</span>
                      <span class="font-bold text-gray-900 dark:text-white font-mono">~9.2 hrs/mo</span>
                    </div>
                    <div class="flex justify-between font-bold pt-1 border-t border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white">
                      <span>Direct Token Savings:</span>
                      <span>$5.60 - $14.92/mo</span>
                    </div>
                  </div>

                  <div class="text-[10px] text-gray-500 dark:text-gray-400">
                    Pays for itself in recovered engineering focus within the first 3 sessions.
                  </div>
                </div>
              </div>
            </div>
            <h3 id="enterprise-security">Zero-Retention & Self-Hosting</h3>
            <p>
              Your code is yours. The Memwyre extraction engine uses zero-retention policies—meaning your transcripts are processed in memory and immediately discarded. For enterprise environments with strict compliance requirements, the entire Memwyre backend can be <strong>self-hosted</strong> behind your firewall, ensuring your proprietary source code never leaves your VPC.
            </p>

            <h2 id="license-and-requirements">License & Requirements</h2>
            <ul>
              <li><strong>License:</strong> <a href="https://github.com/memwyreai/Memwyre" target="_blank" class="text-[#D97757] hover:underline font-medium">Apache-2.0</a> — no copyleft obligations. You can use, modify, and deploy Memwyre in proprietary environments without open-sourcing your changes. This matters for teams: Grok-mem's <strong>AGPL-3.0</strong> license requires that any modifications served over a network be made open-source, which creates real compliance friction in enterprise environments.</li>
              <li><strong>System requirements:</strong> Node.js 18+ (for the plugin runtime). Works on macOS, Linux, and Windows. No local database required — unlike Grok-mem (SQLite + ChromaDB dependency), Memwyre stores data in a managed cloud vault.</li>
              <li><strong>Self-hosting:</strong> For teams that need full data sovereignty, the entire Memwyre backend is available for <strong>self-hosted Docker deployment</strong>. See the <a href="https://github.com/memwyreai/Memwyre" target="_blank" class="text-[#D97757] hover:underline font-medium">GitHub repo</a> for instructions.</li>
            </ul>

            <h2 id="honest-take">Why Not Just Use Grok Memory?</h2>
            <p>
              <code>Grok Memory</code> is genuinely useful — and you should keep using it. It's the right place for static project rules like "use TypeScript strict mode" or "prefer Tailwind over inline styles."
            </p>
            <p>
              But it has real limitations:
            </p>
            <ul>
              <li><strong>Manual maintenance</strong> — you have to remember to update it.</li>
              <li><strong>Flat storage</strong> — everything goes into one Markdown file. No semantic search or entity relationships.</li>
              <li><strong>Tool-locked</strong> — Grok Memory only works in Grok Build. Your <router-link to="/cursor-memory" class="text-[#D97757] hover:underline font-medium">Cursor</router-link> and Grok Desktop sessions can't access it.</li>
            </ul>

            <!-- Connected Ecosystem & Related Integrations -->
            <div class="my-10 p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-950/40">
              <div class="text-xs font-mono font-bold uppercase tracking-wider text-[#D97757] mb-1">CONNECTED ECOSYSTEM</div>
              <h3 class="text-lg font-bold text-gray-950 dark:text-white hero-serif mb-4">Explore More Agent Memory Integrations</h3>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <router-link to="/cursor-memory" class="p-4 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-[#D97757]/60 transition-all group block">
                  <div class="font-bold text-sm text-gray-900 dark:text-white group-hover:text-[#D97757] transition-colors mb-1">Cursor AI Memory →</div>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Eliminate Composer chat amnesia with persistent project memory.</p>
                </router-link>
                <router-link to="/opencode-memory" class="p-4 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-[#D97757]/60 transition-all group block">
                  <div class="font-bold text-sm text-gray-900 dark:text-white group-hover:text-[#D97757] transition-colors mb-1">OpenCode Memory →</div>
                  <p class="text-xs text-gray-500 dark:text-gray-400">118MB lightweight memory layer for terminal-native coding agents.</p>
                </router-link>
                <router-link to="/openclaw-memory" class="p-4 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-[#D97757]/60 transition-all group block">
                  <div class="font-bold text-sm text-gray-900 dark:text-white group-hover:text-[#D97757] transition-colors mb-1">OpenClaw Autonomous →</div>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Multi-agent shared memory bus without re-feeding prompt tokens.</p>
                </router-link>
              </div>
            </div>

            <h2 id="faq">FAQ</h2>
            <div class="space-y-4 my-6">
              <details v-for="(faq, index) in faqs" :key="index" class="bg-gray-50 dark:bg-zinc-900/50 p-4 rounded-lg">
                <summary class="font-semibold cursor-pointer outline-none">{{ faq.question }}</summary>
                <div class="mt-2 text-sm text-gray-600 dark:text-gray-400" v-html="faq.answer"></div>
              </details>
            </div>
            
            <hr class="my-8 border-gray-200 dark:border-gray-800" />
            <div class="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-lg border border-gray-200 dark:border-zinc-800 mt-8">
              <h3 class="text-lg font-bold mb-2 hero-serif !mt-0">Give Grok Bot & Grok Build Shared Memory</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                One plugin install. Automatic context injection. Automatic session capture. Memory that works across Grok Build, Grok Desktop, Cursor, and VS Code.
              </p>
              <router-link to="/signup" class="px-6 py-2 bg-[#D97757] text-white rounded text-sm font-semibold inline-block hover:bg-[#c05c3d] transition-colors">
                Start Free
              </router-link>
            </div>
          </div>
        </main>

        <!-- Right Sidebar (Dynamic Table of Contents) -->
        <aside class="hidden lg:block lg:col-span-2 lg:border-l border-gray-200 dark:border-gray-800 lg:pl-8 pt-12 text-left">
          <div class="sticky top-24 space-y-4">
            <div class="text-[11px] font-mono text-gray-400 dark:text-gray-500 tracking-wider uppercase font-bold">ON THIS PAGE</div>
            <nav class="space-y-3 text-sm relative pl-4 border-l border-gray-100 dark:border-zinc-900">
              <a 
                v-for="heading in toc" 
                :key="heading.slug" 
                :href="`#${heading.slug}`" 
                @click.prevent="scrollTo(heading.slug)"
                class="block font-medium text-gray-500 dark:text-gray-400 hover:text-[#D97757] dark:hover:text-[#D97757] transition-colors leading-snug relative"
                :class="{ 'text-[#D97757] font-semibold': activeSection === heading.slug, 'pl-4 text-xs opacity-80': heading.level === 3 }"
              >
                <!-- Active Indicator vertical line -->
                <div 
                  v-if="activeSection === heading.slug" 
                  class="absolute -left-[17px] top-0 bottom-0 w-0.5 bg-[#D97757]"
                ></div>
                {{ heading.text }}
              </a>
            </nav>
          </div>
        </aside>

      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted, nextTick } from 'vue';
import SiteFooter from '@/components/SiteFooter.vue';

// Page Info
const pageTitle = 'Grok Build Memory Plugin | Memwyre';
const pageUrl = computed(() => typeof window !== 'undefined' ? window.location.href : '');

const copyLink = () => {
  if (typeof window !== 'undefined') {
    navigator.clipboard.writeText(window.location.href);
    alert('Article link copied to clipboard!');
  }
};

// TOC and Scrollspy
const toc = [
  { level: 2, text: 'TL;DR', slug: 'tldr' },
  { level: 2, text: 'The Problem', slug: 'the-problem' },
  { level: 2, text: 'Grok Memory Guide', slug: 'Grokmd-masterclass' },
  { level: 3, text: 'Hierarchy & Rules', slug: 'Grokmd-hierarchy' },
  { level: 3, text: 'Master Template', slug: 'Grokmd-template' },
  { level: 2, text: 'Prompt Cache vs Memory', slug: 'prompt-caching-vs-memory' },
  { level: 2, text: 'Native Memory Limits', slug: 'native-memory-limits' },
  { level: 2, text: 'CLI Context Commands', slug: 'cli-commands' },
  { level: 2, text: 'The Team Silo Problem', slug: 'team-silo-problem' },
  { level: 2, text: 'Four Approaches', slug: 'comparison' },
  { level: 3, text: '1. Pure Native', slug: 'approach-native' },
  { level: 3, text: '2. Grok-mem (OSS)', slug: 'approach-Grok-mem' },
  { level: 3, text: '3. Generic MCP', slug: 'approach-mcp' },
  { level: 3, text: '4. Memwyre Engine', slug: 'approach-memwyre' },
  { level: 2, text: 'Plugin Architecture', slug: 'architecture' },
  { level: 3, text: 'SessionStart', slug: 'sessionstart' },
  { level: 3, text: 'Stop Session', slug: 'stop-session' },
  { level: 3, text: 'Troubleshooting', slug: 'troubleshooting' },
  { level: 2, text: 'Setup', slug: 'setup' },
  { level: 2, text: 'Capabilities', slug: 'capabilities' },
  { level: 3, text: 'Monorepo Scoping', slug: 'monorepo-isolation' },
  { level: 2, text: 'Benchmark', slug: 'benchmark' },
  { level: 2, text: 'Real-World Refactor', slug: 'real-world-workflow' },
  { level: 2, text: 'Token Economics & Costs', slug: 'security-and-costs' },
  { level: 3, text: '30-Day Token ROI', slug: 'token-efficiency' },
  { level: 2, text: 'License & Compliance', slug: 'license-and-requirements' },
  { level: 2, text: 'FAQ', slug: 'faq' }
];

const activeSection = ref('tldr');
let observer = null;

const scrollTo = (slug) => {
  const el = document.getElementById(slug);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

const setupScrollObserver = () => {
  if (typeof window === 'undefined') return;
  if (observer) observer.disconnect();

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -75% 0px',
    threshold: 0.1
  });

  nextTick(() => {
    const headings = document.querySelectorAll('.markdown-content h2, .markdown-content h3');
    headings.forEach((h) => {
      observer.observe(h);
    });
  });
};

onMounted(() => {
  setTimeout(() => {
    setupScrollObserver();
  }, 200);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

const faqs = [
  {
    question: 'Does Grok Build have built-in memory?',
    answer: 'Yes — Grok Build has two built-in memory mechanisms. <strong>Grok Memory</strong> is a Markdown file loaded into the system prompt on startup, and <strong>auto-memory</strong> saves notes to <code>~/.Grok/projects/.../memory/</code>. Both are useful for static rules but limited for dynamic, searchable, cross-tool memory.'
  },
  {
    question: 'How do I give Grok Bot & Grok Build Shared Memory across sessions?',
    answer: 'The fastest way is to install the Memwyre Grok Build plugin: <code>Grok plugin install @memwyre/Grok-code-plugin</code>. Set your <code>MEMWYRE_API_KEY</code> environment variable, and every session will automatically load relevant past context on start and save new insights on exit.'
  },
  {
    question: 'What is the best Grok Build memory plugin?',
    answer: 'It depends on your needs. <strong>Grok Memory</strong> is best for static project rules (zero setup). <strong>Memwyre\'s plugin</strong> is best if you want fully automated, searchable memory that works across Grok Build, Grok Desktop, Cursor, and VS Code — it scores 70.5% on the LoCoMo-10 benchmark vs. 43.7% for flat vector RAG. <strong>Grok-mem</strong> (89K+ stars, AGPL-3.0) is another strong option for local-first, single-machine workflows.'
  },
  {
    question: 'How is Memwyre different from Grok-mem?',
    answer: '<strong>Grok-mem</strong> stores observations locally in SQLite + ChromaDB — great for single-machine use with zero cloud dependency. <strong>Memwyre</strong> uses a shared cloud vault with an entity graph and two-stage cross-encoder re-ranking, enabling cross-tool sync (Grok Build, Cursor, VS Code, Grok Desktop) without SSH setup. License-wise, Grok-mem is AGPL-3.0 (copyleft); Memwyre is Apache-2.0 (permissive). On retrieval quality, Memwyre\'s engine scores 70.5% on LoCoMo-10 vs. 43.7% for flat vector baselines, using 81% fewer context tokens.'
  },
  {
    question: 'Does the plugin work with Grok Desktop too?',
    answer: 'Yes. The Memwyre plugin stores memories in a shared vault. Grok Build (via plugin hooks) and Grok Desktop (via MCP server) both read from and write to the same memory layer. Context saved in a terminal session is instantly available in your Desktop sidebar — same API key, same vault, zero sync configuration.'
  },
  {
    question: 'What license is Memwyre released under?',
    answer: '<strong>Apache-2.0.</strong> No copyleft obligations. You can use, modify, and deploy Memwyre in proprietary environments without open-sourcing your changes. The full source is available on <a href="https://github.com/memwyreai/Memwyre" target="_blank" class="text-[#D97757] hover:underline">GitHub</a>.'
  },
  {
    question: 'What happens if Memwyre captures something wrong?',
    answer: 'Every memory is individually addressable. You can view, edit, or delete any observation from the Memwyre dashboard or via API (<code>DELETE /api/v1/memories/:id</code>). The Ebbinghaus decay model also automatically deprioritizes stale facts over time, so outdated context naturally fades from retrieval results.'
  },
  {
    question: 'Why does Grok Build forget instructions despite having Auto Memory and Grok Memory?',
    answer: 'Grok Build\'s native memory engine stores notes in a local <code>MEMORY.md</code> file that is strictly hardcapped at <strong>200 lines / 25KB</strong>. When your notes exceed 200 lines, older memories are silently truncated without notifying Grok. Additionally, native memory uses exact keyword matching rather than semantic vector search, so Grok fails to retrieve notes unless your query uses identical wording. Memwyre solves this with automated vector and entity graph search that scales to millions of tokens.'
  },
  {
    question: 'What is the 200-line / 25KB limit in Grok Build native memory, and how does Memwyre bypass it?',
    answer: 'In Grok Build\'s internal compiler (<code>src/memdir/</code>), <code>MEMORY.md</code> is limited to 200 lines and 25KB to prevent system prompt bloat. When exceeded, facts at the top of the file fall off silently. Memwyre bypasses this by moving storage out of the local Markdown file and into an external, cloud-hosted semantic memory vault. Instead of dumping raw files, Memwyre retrieves only the top-k relevant memories (~1,500 tokens) on session start using two-stage cross-encoder re-ranking.'
  },
  {
    question: 'Is my memory data private?',
    answer: 'Fully private and encrypted. Your memory vault is only accessible via your authenticated API key. Memwyre uses zero-retention processing — transcripts are extracted in memory and immediately discarded. For full data sovereignty, you can <a href="https://github.com/memwyreai/Memwyre" target="_blank" class="text-[#D97757] hover:underline">self-host the entire backend</a> behind your firewall.'
  }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

.hero-serif {
  font-family: 'Playfair Display', Georgia, serif;
}

/* Base styling mimicking blog post Markdown CSS */
.markdown-content {
  font-family: inherit;
  color: var(--vp-c-text-1, #374151);
}

.dark .markdown-content {
  color: #d1d5db;
}

.markdown-content h1,
.markdown-content h2,
.markdown-content h3,
.markdown-content h4 {
  font-family: 'Playfair Display', Georgia, serif;
  color: #111827;
  line-height: 1.25;
  margin-top: 36px;
  margin-bottom: 16px;
  scroll-margin-top: 100px;
}

.dark .markdown-content h1,
.dark .markdown-content h2,
.dark .markdown-content h3,
.dark .markdown-content h4 {
  color: #f3f4f6;
}

.markdown-content h2 {
  font-size: 1.75rem;
  font-weight: 700;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 8px;
}

.dark .markdown-content h2 {
  border-bottom-color: #374151;
}

.markdown-content h3 {
  font-size: 1.35rem;
  font-weight: 600;
}

.markdown-content p {
  line-height: 1.75;
  margin-bottom: 1.25rem;
}

.markdown-content ul,
.markdown-content ol {
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
  line-height: 1.75;
}

.markdown-content ul {
  list-style-type: disc;
}

.markdown-content ol {
  list-style-type: decimal;
}

.markdown-content li {
  margin-bottom: 0.5rem;
}

.markdown-content pre {
  background-color: #f8fafc;
  color: #1e293b;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  overflow-x: auto;
  margin-bottom: 1.25rem;
  font-size: 0.875rem;
  line-height: 1.5;
}

.dark .markdown-content pre {
  background-color: #18181b;
  color: #f4f4f5;
  border: 1px solid #27272a;
}

.markdown-content code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.markdown-content pre code {
  background-color: transparent !important;
  color: inherit !important;
  padding: 0 !important;
  border-radius: 0 !important;
  border: none !important;
  font-size: inherit !important;
}

.markdown-content p code, 
.markdown-content li code {
  background-color: #f1f5f9;
  color: #0f172a;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  border: 1px solid #e2e8f0;
  font-size: 0.875em;
}

.dark .markdown-content p code, 
.dark .markdown-content li code {
  background-color: #27272a;
  color: #f4f4f5;
  border-color: #3f3f46;
}

details summary::-webkit-details-marker {
  display: none;
}

details summary {
  list-style: none;
}
</style>
