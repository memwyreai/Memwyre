<template>
  <div class="h-full flex-1 flex flex-col transition-colors duration-300 font-sans overflow-hidden bg-transparent">
    
    <!-- 1. DETAIL VIEW (When an integration is selected or route is /integrations/:id) -->
    <main v-if="currentDetailItem" class="flex-1 overflow-y-auto custom-scrollbar w-full max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col animate-fade-in">
      
      <!-- Back Navigation Link -->
      <button 
        @click="goToStore" 
        class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white mb-6 transition-colors w-fit cursor-pointer"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Integrations</span>
      </button>

      <!-- App Icon -->
      <div class="w-16 h-16 rounded-2xl bg-gray-200/60 dark:bg-[#18181b] flex items-center justify-center p-3.5 mb-5 shrink-0 shadow-2xs">
        <template v-if="currentDetailItem.iconDark">
          <img :src="currentDetailItem.icon" class="w-10 h-10 object-contain dark:hidden" :alt="currentDetailItem.name" />
          <img :src="currentDetailItem.iconDark" class="w-10 h-10 object-contain hidden dark:block" :alt="currentDetailItem.name" />
        </template>
        <img 
          v-else-if="currentDetailItem.icon" 
          :src="currentDetailItem.icon" 
          :class="['w-10 h-10 object-contain', {'invert': currentDetailItem.invert, 'dark:invert': currentDetailItem.darkInvert}]" 
          :alt="currentDetailItem.name" 
        />
        <div v-else-if="currentDetailItem.rawSvg" v-html="currentDetailItem.rawSvg" class="w-10 h-10 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"></div>
        <svg v-else class="w-10 h-10 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      <!-- Title & Action Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div class="flex items-center gap-2.5">
            <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{{ currentDetailItem.name }}</h1>
            <span v-if="currentDetailItem.isComingSoon" class="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-md bg-zinc-200/70 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">Coming Soon</span>
            <span v-else-if="currentDetailItem.isPro" class="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400">PRO</span>
          </div>
          <p class="text-sm text-gray-500 dark:text-zinc-400 mt-1">{{ currentDetailItem.subtitle || currentDetailItem.desc }}</p>
        </div>

        <!-- Install / Connect Action Button -->
        <div>
          <button
            v-if="!currentDetailItem.isComingSoon"
            @click="handleDetailPrimaryAction"
            class="px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer shadow-xs"
            :class="isItemConnected(currentDetailItem) 
              ? 'bg-gray-200 dark:bg-zinc-800 text-gray-900 dark:text-zinc-200 hover:bg-gray-300 dark:hover:bg-zinc-700' 
              : 'bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200'"
          >
            <span v-if="isItemConnected(currentDetailItem)">
              {{ currentDetailItem.id === 'notion' ? 'Sync Workspace' : 'Installed' }}
            </span>
            <span v-else>Install plugin</span>
          </button>
          <button
            v-else
            disabled
            class="px-5 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-zinc-800/60 text-gray-400 dark:text-zinc-500 cursor-not-allowed"
          >
            Coming Soon
          </button>
        </div>
      </div>

      <!-- Hero Gradient Banner Card with Interactive Sample Prompt -->
      <div class="relative overflow-hidden rounded-3xl p-6 sm:p-10 my-4 sm:my-6 flex items-center justify-center min-h-[160px] sm:min-h-[200px] shadow-xs transition-all bg-gradient-to-r from-[#93c5fd]/70 via-[#a7f3d0]/60 to-[#6ee7b7]/60 dark:from-[#112d4e] dark:via-[#0f3c4c] dark:to-[#0f3e3a]">
        <div class="relative z-10 w-full max-w-xl">
          <div class="bg-white/95 dark:bg-[#18181b]/95 backdrop-blur-md rounded-full pl-5 pr-2 py-2 sm:py-2.5 flex items-center justify-between gap-3 shadow-lg border border-white/50 dark:border-zinc-700/50">
            <div class="text-xs sm:text-sm text-gray-800 dark:text-zinc-200 min-w-0 pr-2 truncate">
              <span class="text-gray-700 dark:text-zinc-200">{{ currentDetailItem.samplePrompt || 'Search memory index, recall context, and generate structured insights' }}</span>
            </div>
            <button 
              @click="handleCopySamplePrompt(currentDetailItem)" 
              class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 flex items-center justify-center text-gray-700 dark:text-zinc-200 shrink-0 transition-colors cursor-pointer"
              title="Copy prompt"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Capabilities / Long Description -->
      <div class="my-6 space-y-3">
        <p v-if="currentDetailItem.fullDesc" class="text-sm text-gray-600 dark:text-zinc-300 leading-relaxed">
          {{ currentDetailItem.fullDesc }}
        </p>
        
        <!-- Feature Highlights -->
        <div v-if="currentDetailItem.features && currentDetailItem.features.length > 0" class="space-y-2 pt-2">
          <div 
            v-for="(feature, idx) in currentDetailItem.features" 
            :key="idx" 
            class="text-sm text-gray-700 dark:text-zinc-300 flex items-start gap-2.5"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-zinc-500 mt-2 shrink-0"></span>
            <span>
              <strong class="font-semibold text-gray-900 dark:text-white">{{ feature.title }}</strong>
              <span class="text-gray-500 dark:text-zinc-400"> — {{ feature.desc }}</span>
            </span>
          </div>
        </div>
      </div>

      <!-- Apps / Connector Status Section -->
      <div class="mt-8 border-t border-gray-100 dark:border-zinc-800/80 pt-6">
        <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-4">App</h3>
        
        <div class="space-y-2">
          <div class="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 dark:bg-zinc-900/40 border border-gray-100 dark:border-zinc-800/60 transition-colors">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gray-200/60 dark:bg-[#18181b] flex items-center justify-center p-2">
                <img 
                  v-if="currentDetailItem.icon" 
                  :src="currentDetailItem.icon" 
                  :class="['w-6 h-6 object-contain', {'invert': currentDetailItem.invert, 'dark:invert': currentDetailItem.darkInvert}]" 
                  :alt="currentDetailItem.name" 
                />
                <div v-else-if="currentDetailItem.rawSvg" v-html="currentDetailItem.rawSvg" class="w-6 h-6 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"></div>
              </div>
              <div>
                <h4 class="text-sm font-medium text-gray-900 dark:text-white">{{ currentDetailItem.name }}</h4>
                <p class="text-xs text-gray-500 dark:text-zinc-400">{{ currentDetailItem.appSubtitle || (currentDetailItem.id === 'notion' ? 'OAuth 2.0 Workspace Sync' : 'Direct MCP Connector') }}</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span v-if="isItemConnected(currentDetailItem)" class="text-xs text-gray-500 dark:text-zinc-400 font-medium flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                Connected
              </span>
              <span v-else-if="currentDetailItem.isComingSoon" class="text-xs text-gray-400 dark:text-zinc-500 font-medium">
                Coming Soon
              </span>
              <span v-else class="text-xs text-gray-400 dark:text-zinc-500 font-medium">
                Not connected
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Connection / Configuration Guide (Grounded by Integration Type) -->
      <div v-if="!currentDetailItem.isComingSoon" class="mt-8 border-t border-gray-100 dark:border-zinc-800/80 pt-6">
        <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-1">
          {{ currentDetailItem.setupSectionTitle || (currentDetailItem.isPlugin ? 'Plugin Configuration' : (currentDetailItem.isExtension ? 'Extension Installation' : (currentDetailItem.isOAuth ? 'OAuth 2.0 Authorization' : (currentDetailItem.isCustomAction ? 'Custom Action & Tool Setup' : 'MCP Configuration')))) }}
        </h3>
        <p class="text-xs text-gray-500 dark:text-zinc-400 mb-4">
          {{ currentDetailItem.setupSubtitle || (currentDetailItem.isPlugin ? 'Run the terminal command below and configure your authentication credentials.' : (currentDetailItem.isExtension ? 'Install the official extension from the Chrome Web Store and pair your Memwyre API key.' : (currentDetailItem.isOAuth ? 'Authorize Memwyre to sync pages, databases, and workspace knowledge.' : (currentDetailItem.isCustomAction ? 'Configure OpenAPI action schemas or function declarations in your AI platform.' : 'Copy the configuration below or click "Install plugin" to generate an active API key.')))) }}
        </p>

        <!-- A. Notion / OAuth Connectors -->
        <div v-if="currentDetailItem.isOAuth" class="space-y-4">
          <div class="p-4 rounded-2xl bg-gray-100/70 dark:bg-[#18181b] border border-gray-200/70 dark:border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 class="text-sm font-semibold text-gray-900 dark:text-white">Workspace Authorization</h4>
              <p class="text-xs text-gray-500 dark:text-zinc-400 mt-0.5">
                {{ connectionsStatus[currentDetailItem.id]?.connected ? `Connected to ${connectionsStatus[currentDetailItem.id]?.workspace_name || 'workspace'}` : 'Click connect to initiate OAuth 2.0 authorization with your workspace.' }}
              </p>
            </div>
            <button
              @click="handleDetailPrimaryAction"
              class="px-4 py-2 rounded-xl text-xs font-semibold bg-[#D97757] hover:bg-[#c66849] text-white transition-colors cursor-pointer shrink-0 shadow-xs"
            >
              {{ connectionsStatus[currentDetailItem.id]?.connected ? 'Sync Workspace Now' : 'Connect with OAuth' }}
            </button>
          </div>
        </div>

        <!-- B. Chrome Extension -->
        <div v-else-if="currentDetailItem.isExtension" class="space-y-4">
          <div class="p-4 rounded-2xl bg-gray-100/70 dark:bg-[#18181b] border border-gray-200/70 dark:border-zinc-800/80 space-y-3">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="text-sm font-semibold text-gray-900 dark:text-white">1. Install from Chrome Web Store</h4>
                <p class="text-xs text-gray-500 dark:text-zinc-400 mt-0.5">Get the official Memwyre extension for Chrome, Brave, and Edge.</p>
              </div>
              <a 
                href="https://chromewebstore.google.com" 
                target="_blank"
                class="px-4 py-2 rounded-xl text-xs font-semibold bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors shrink-0"
              >
                Chrome Web Store ↗
              </a>
            </div>

            <div class="pt-3 border-t border-gray-200/70 dark:border-zinc-800/70">
              <h4 class="text-xs font-semibold text-gray-900 dark:text-white mb-1.5">2. Pair with your API Key</h4>
              <div class="flex items-center gap-2">
                <div class="flex-1 bg-white dark:bg-[#121214] rounded-lg border border-gray-200/80 dark:border-zinc-800 p-2.5">
                  <code class="text-xs text-gray-800 dark:text-zinc-200 font-mono">{{ integrationApiKey }}</code>
                </div>
                <button
                  @click="handleCopySamplePrompt({ samplePrompt: integrationApiKey })"
                  class="px-3 py-2 rounded-lg bg-gray-200/80 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 text-xs font-medium text-gray-800 dark:text-zinc-200 transition-colors cursor-pointer"
                >
                  Copy Key
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- C. Custom Actions / LLMs (ChatGPT / Gemini / Perplexity) -->
        <div v-else-if="currentDetailItem.isCustomAction" class="space-y-4">
          <div class="p-4 rounded-2xl bg-gray-100/70 dark:bg-[#18181b] border border-gray-200/70 dark:border-zinc-800/80 space-y-3">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="text-sm font-semibold text-gray-900 dark:text-white">API Authentication Header</h4>
                <p class="text-xs text-gray-500 dark:text-zinc-400 mt-0.5">Use Bearer token authentication against the Memwyre OpenAPI gateway.</p>
              </div>
            </div>
            <div class="bg-white dark:bg-[#121214] rounded-lg border border-gray-200/80 dark:border-zinc-800 p-3">
              <code class="text-xs text-gray-800 dark:text-zinc-200 font-mono select-all">Authorization: Bearer {{ integrationApiKey }}</code>
            </div>
            <div class="text-xs text-gray-500 dark:text-zinc-400">
              <span>Endpoint: </span><code class="text-gray-800 dark:text-zinc-300 font-mono">https://api.memwyre.tech/api/v1/memory/search</code>
            </div>
          </div>
        </div>

        <!-- D. Standard MCP & CLI Plugins (Cursor, VS Code, Windsurf, Claude Code, OpenClaw, Antigravity, etc.) -->
        <div v-else>
          <McpConnectionGuide 
            :apiKey="integrationApiKey" 
            :initialTab="mapIntegrationToTab(currentDetailItem.id)"
            :hideHeader="true"
            :hideTabs="true"
            class="!mt-0"
          />
        </div>
      </div>

      <!-- Information Section -->
      <div class="mt-10 border-t border-gray-100 dark:border-zinc-800/80 pt-6 pb-12">
        <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-4">Information</h3>
        <dl class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <dt class="text-gray-400 dark:text-zinc-500 font-medium">Developer</dt>
            <dd class="text-gray-900 dark:text-zinc-200 mt-0.5 font-medium">Memwyre Inc.</dd>
          </div>
          <div>
            <dt class="text-gray-400 dark:text-zinc-500 font-medium">Category</dt>
            <dd class="text-gray-900 dark:text-zinc-200 mt-0.5 font-medium">{{ currentDetailItem.typeLabel || 'IDE Integration' }}</dd>
          </div>
          <div>
            <dt class="text-gray-400 dark:text-zinc-500 font-medium">Protocol / Interface</dt>
            <dd class="text-gray-900 dark:text-zinc-200 mt-0.5 font-medium">{{ currentDetailItem.protocol || 'Model Context Protocol (MCP)' }}</dd>
          </div>
          <div>
            <dt class="text-gray-400 dark:text-zinc-500 font-medium">Documentation</dt>
            <dd class="text-gray-900 dark:text-zinc-200 mt-0.5">
              <a :href="currentDetailItem.docsLink || 'https://docs.memwyre.tech'" target="_blank" class="text-blue-500 hover:underline flex items-center gap-1">
                <span>View docs</span>
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </dd>
          </div>
        </dl>
      </div>

    </main>

    <!-- 2. MAIN STORE VIEW (Grid & Search) -->
    <main v-else class="flex-1 overflow-y-auto custom-scrollbar w-full max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col">
      
      <!-- Top Header & Search Bar -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Integrations</h1>
          <p class="text-sm text-gray-500 dark:text-zinc-400 mt-1">Work with Memwyre across your favorite tools and agent backplanes.</p>
        </div>

        <!-- Search Bar Capsule -->
        <div class="relative w-full sm:w-72 shrink-0">
          <svg class="w-4 h-4 text-gray-400 dark:text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            v-model="searchQuery"
            placeholder="Search integrations"
            class="w-full bg-gray-100/90 dark:bg-[#18181b] text-xs sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 rounded-full pl-9 pr-8 py-2 border border-gray-200/80 dark:border-zinc-800/90 focus:border-[#D97757] dark:focus:border-[#D97757] focus:outline-none transition-all"
          />
          <button 
            v-if="searchQuery" 
            @click="searchQuery = ''" 
            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs cursor-pointer"
          >
            ✕
          </button>
        </div>
      </div>

      <!-- Installed Row -->
      <div v-if="!searchQuery" class="mb-9">
        <div class="flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-zinc-200 mb-3 cursor-pointer group w-fit">
          <span>Installed</span>
          <svg class="w-4 h-4 text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <div class="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1">
          <div
            v-for="app in installedApps"
            :key="app.id"
            @click="openIntegrationDetail(app)"
            class="w-12 h-12 rounded-2xl bg-gray-200/60 dark:bg-[#18181b] flex items-center justify-center p-2.5 hover:bg-gray-200 dark:hover:bg-zinc-800 hover:scale-105 transition-all cursor-pointer shrink-0 relative group"
            :title="app.name + ' - View Details'"
          >
            <template v-if="app.iconDark">
              <img :src="app.icon" class="w-7 h-7 object-contain dark:hidden" :alt="app.name" />
              <img :src="app.iconDark" class="w-7 h-7 object-contain hidden dark:block" :alt="app.name" />
            </template>
            <img 
              v-else-if="app.icon" 
              :src="app.icon" 
              :class="['w-7 h-7 object-contain', {'invert': app.invert, 'dark:invert': app.darkInvert}]" 
              :alt="app.name" 
            />
            <div v-else-if="app.rawSvg" v-html="app.rawSvg" class="w-7 h-7 flex items-center justify-center [&>svg]:w-7 [&>svg]:h-7"></div>
            <svg v-else class="w-7 h-7 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Search Results View -->
      <div v-if="searchQuery" class="space-y-6">
        <h3 class="text-sm font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-wider">
          Search Results ({{ filteredItems.length }})
        </h3>
        
        <div v-if="filteredItems.length === 0" class="text-center py-16 text-sm text-gray-400 dark:text-zinc-500">
          No integrations found matching "{{ searchQuery }}".
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          <div
            v-for="item in filteredItems"
            :key="item.id"
            @click="openIntegrationDetail(item)"
            class="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-100/70 dark:hover:bg-zinc-900/60 transition-colors cursor-pointer group"
          >
            <!-- Left Info -->
            <div class="flex items-center gap-3 min-w-0 pr-2">
              <div 
                class="w-11 h-11 rounded-2xl flex items-center justify-center p-2 shrink-0 bg-gray-200/60 dark:bg-[#18181b] relative transition-transform group-hover:scale-105"
              >
                <template v-if="item.iconDark">
                  <img :src="item.icon" class="w-7 h-7 object-contain dark:hidden" :alt="item.name" />
                  <img :src="item.iconDark" class="w-7 h-7 object-contain hidden dark:block" :alt="item.name" />
                </template>
                <img 
                  v-else-if="item.icon" 
                  :src="item.icon" 
                  :class="['w-7 h-7 object-contain', {'invert': item.invert, 'dark:invert': item.darkInvert}]" 
                  :alt="item.name" 
                />
                <div v-else-if="item.rawSvg" v-html="item.rawSvg" class="w-7 h-7 flex items-center justify-center [&>svg]:w-7 [&>svg]:h-7"></div>
                <svg v-else class="w-7 h-7 text-gray-500 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <div class="min-w-0">
                <div class="flex items-center gap-1.5">
                  <h4 class="text-sm font-semibold text-gray-900 dark:text-zinc-100 group-hover:text-[#D97757] transition-colors truncate">{{ item.name }}</h4>
                  <span v-if="item.isComingSoon" class="px-1 py-0.2 text-[9px] uppercase font-bold tracking-wider rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">Soon</span>
                  <span v-else-if="item.isPro" class="px-1 py-0.2 text-[9px] uppercase font-bold tracking-wider rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">PRO</span>
                </div>
                <p class="text-xs text-gray-500 dark:text-zinc-400 truncate max-w-[240px] sm:max-w-[320px]">{{ item.desc }}</p>
              </div>
            </div>

            <!-- Right Action -->
            <div class="flex items-center gap-1 shrink-0">
              <span v-if="isItemConnected(item)" class="text-xs text-gray-500 dark:text-zinc-400 font-medium px-2 py-1 flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                <span>Installed</span>
              </span>
              <button 
                v-else
                class="w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
                :title="'View ' + item.name"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Categorized Sections (2-Column ChatGPT Grid Layout) -->
      <div v-else class="space-y-10">
        <section v-for="category in integrationCategories" :key="category.name" class="space-y-3.5">
          <!-- Section Title -->
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-semibold text-gray-900 dark:text-zinc-200">{{ category.name }}</h3>
          </div>

          <!-- 2-Column Item Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
            <div
              v-for="item in category.items"
              :key="item.id"
              @click="openIntegrationDetail(item)"
              class="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-100/70 dark:hover:bg-zinc-900/60 transition-colors cursor-pointer group"
            >
              <!-- Left Info -->
              <div class="flex items-center gap-3 min-w-0 pr-2">
                <div 
                  class="w-11 h-11 rounded-2xl flex items-center justify-center p-2 shrink-0 bg-gray-200/60 dark:bg-[#18181b] relative transition-transform group-hover:scale-105"
                >
                  <template v-if="item.iconDark">
                    <img :src="item.icon" class="w-7 h-7 object-contain dark:hidden" :alt="item.name" />
                    <img :src="item.iconDark" class="w-7 h-7 object-contain hidden dark:block" :alt="item.name" />
                  </template>
                  <img 
                    v-else-if="item.icon" 
                    :src="item.icon" 
                    :class="['w-7 h-7 object-contain', {'invert': item.invert, 'dark:invert': item.darkInvert}]" 
                    :alt="item.name" 
                  />
                  <div v-else-if="item.rawSvg" v-html="item.rawSvg" class="w-7 h-7 flex items-center justify-center [&>svg]:w-7 [&>svg]:h-7"></div>
                  <svg v-else class="w-7 h-7 text-gray-500 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <div class="min-w-0">
                  <div class="flex items-center gap-1.5">
                    <h4 class="text-sm font-semibold text-gray-900 dark:text-zinc-100 group-hover:text-[#D97757] transition-colors truncate">{{ item.name }}</h4>
                    <span v-if="item.isComingSoon" class="px-1 py-0.2 text-[9px] uppercase font-bold tracking-wider rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">Soon</span>
                    <span v-else-if="item.isPro" class="px-1 py-0.2 text-[9px] uppercase font-bold tracking-wider rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">PRO</span>
                  </div>
                  <p class="text-xs text-gray-500 dark:text-zinc-400 truncate max-w-[220px] sm:max-w-[300px]">{{ item.desc }}</p>
                </div>
              </div>

              <!-- Right Action -->
              <div class="flex items-center gap-1 shrink-0">
                <span v-if="isItemConnected(item)" class="text-xs text-gray-500 dark:text-zinc-400 font-medium px-2 py-1 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                  <span>Installed</span>
                </span>
                <button 
                  v-else
                  class="w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                  :title="'View ' + item.name"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

    </main>

    <!-- Confirmation Modal for Removing Key -->
    <ConfirmationModal
      :is-open="showDeleteModal"
      title="Remove Key"
      message="Are you sure you want to remove this API key? This action cannot be undone."
      confirm-text="Remove"
      :loading="deletingKey"
      @confirm="confirmDeleteKey"
      @cancel="showDeleteModal = false"
    />
    
    <!-- Integration Setup Modal (Quick connect modal) -->
    <div v-if="showIntegrationModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" @click.self="closeIntegrationModal">
      <div class="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity" @click="closeIntegrationModal"></div>
      <div class="relative bg-white dark:bg-[#161618] border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col animate-fade-in">
        
        <!-- Modal Header -->
        <div class="px-6 py-4 border-b border-gray-100 dark:border-zinc-800/80 flex justify-between items-center bg-gray-50/60 dark:bg-zinc-900/40">
          <div class="flex items-center gap-3">
            <div class="h-11 w-11 flex items-center justify-center rounded-2xl overflow-hidden bg-gray-200/60 dark:bg-[#18181b] p-2">
              <template v-if="selectedIntegration?.iconDark">
                <img :src="selectedIntegration?.icon" class="w-7 h-7 object-contain dark:hidden" :alt="selectedIntegration?.name" />
                <img :src="selectedIntegration?.iconDark" class="w-7 h-7 object-contain hidden dark:block" :alt="selectedIntegration?.name" />
              </template>
              <img 
                v-else-if="selectedIntegration?.icon" 
                :src="selectedIntegration?.icon" 
                :class="['w-7 h-7 object-contain', {'invert': selectedIntegration?.invert, 'dark:invert': selectedIntegration?.darkInvert}]" 
                :alt="selectedIntegration?.name" 
              />
              <div v-else-if="selectedIntegration?.rawSvg" v-html="selectedIntegration?.rawSvg" class="w-7 h-7 flex items-center justify-center [&>svg]:w-7 [&>svg]:h-7"></div>
            </div>
            <div>
              <h3 class="text-base font-semibold text-gray-900 dark:text-white">Connect {{ selectedIntegration?.name }}</h3>
              <p class="text-xs text-gray-500 dark:text-zinc-400">{{ selectedIntegration?.desc }}</p>
            </div>
          </div>
          <button @click="closeIntegrationModal" class="text-gray-400 hover:text-gray-600 dark:hover:text-zinc-200 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <!-- Modal Content -->
        <div class="p-6 overflow-y-auto custom-scrollbar space-y-4">
          <div v-if="isExistingKey" class="bg-blue-50/70 dark:bg-blue-950/30 p-4 rounded-xl border border-blue-200/80 dark:border-blue-900/50">
            <h4 class="text-xs font-semibold text-blue-900 dark:text-blue-300 flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Existing Connection Key Active
            </h4>
            <p class="text-xs text-blue-700 dark:text-blue-400 mt-1">You already have an active API key generated for {{ selectedIntegration?.name }}. You can use the configuration below directly, or regenerate a fresh key.</p>
            <button @click="generateKeyForIntegration(selectedIntegration.name, true)" class="mt-3 px-3 py-1.5 bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-zinc-700 rounded-lg text-xs font-semibold hover:bg-blue-50 dark:hover:bg-zinc-700 transition-colors shadow-2xs cursor-pointer">
              <LoadingLogo v-if="generatingKey" size="sm" class="w-3 h-3 inline mr-1" />
              Regenerate Key
            </button>
          </div>

          <div v-if="!isExistingKey && integrationApiKey !== '<YOUR_API_KEY>'" class="bg-green-50/70 dark:bg-green-950/30 p-4 rounded-xl border border-green-200/80 dark:border-green-900/50">
            <h4 class="text-xs font-semibold text-green-900 dark:text-green-300 flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              API Key Generated Successfully
            </h4>
            <p class="text-xs text-green-700 dark:text-green-400 mt-1">Copy the configuration below and paste it into your tool's settings.</p>
          </div>

          <McpConnectionGuide 
            :apiKey="integrationApiKey" 
            :initialTab="mapIntegrationToTab(selectedIntegration?.id)"
            :hideHeader="true"
            :hideTabs="true"
            @close="closeIntegrationModal"
            class="!mt-0 shadow-none border-none rounded-none"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import api from '../services/api';
import apiKeysService from '../services/apiKeys'; 
import ConfirmationModal from '../components/ConfirmationModal.vue';
import McpConnectionGuide from '../components/McpConnectionGuide.vue';
import { useToast } from 'vue-toastification';
import LoadingLogo from '@/components/common/LoadingLogo.vue';

// Authentic brand icon assets
import cursorLightIcon from '@/assets/cursor_CUBE_2D_LIGHT.svg';
import cursorDarkIcon from '@/assets/cursor_CUBE_2D_DARK.svg';
import cursorIcon from '@/assets/cursor_icon.png';
import antigravityIcon from '@/assets/Google-Antigravity-Icon-Full-Color.png';
import vscodeIcon from '@/assets/vscode.svg';
import claudeIcon from '@/assets/claude-color.svg';
import claudeCodeIcon from '@/assets/claudecode-color.svg';
import grokIcon from '@/assets/grok-color.svg';
import openclawIcon from '@/assets/openclaw-color.svg';
import gdriveIcon from '@/assets/google-drive.svg';
import notionIcon from '@/assets/notion-svgrepo-com.svg';
import openaiIcon from '@/assets/openai.svg';
import geminiIcon from '@/assets/gemini-color.svg';
import perplexityIcon from '@/assets/perplexity-color.svg';
import chromeIcon from '@/assets/chrome-logo-svgrepo-com.svg';

import windsurfIcon from '@/assets/windsurf-color.svg';
import codexIcon from '@/assets/codex-color.svg';
import opencodeIcon from '@/assets/opencode-color.svg';

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const toast = useToast();

const searchQuery = ref('');
const keys = ref([]);
const apiKeys = ref([]);
const generatingKey = ref(false);
const deletingKey = ref(false);

// Modal State
const showIntegrationModal = ref(false);
const selectedIntegration = ref(null);
const integrationApiKey = ref("<YOUR_API_KEY>");
const isExistingKey = ref(false);
const keyToDelete = ref(null);
const showDeleteModal = ref(false);

const connectionsStatus = ref({
  notion: { connected: false, workspace_name: null, last_synced_at: null, workspace_icon: null },
  gdrive: { connected: false, workspace_name: null, last_synced_at: null, workspace_icon: null }
});

// Authentic Memwyre Integration Registry (Grounded with exact protocols & types)
const integrationCategories = ref([
  {
    name: 'Featured',
    items: [
      { 
        id: 'cursor', 
        name: 'Cursor', 
        subtitle: 'Codebase context, semantic search, and project memory in Cursor IDE',
        desc: 'One-click MCP install for codebase context and memory', 
        samplePrompt: 'Search codebase decisions, retrieve previous architectural notes, and debug with full project context',
        fullDesc: 'Seamlessly query your Memwyre second brain inside Cursor. Let AI agents retrieve architectural patterns, remembered bug fixes, and project specs directly within your editor.',
        features: [
          { title: 'Codebase context recall', desc: 'Retrieve relevant conventions and technical specs as you write code' },
          { title: 'Project memory graph', desc: 'Let Cursor AI query decisions made across previous coding sessions' },
          { title: 'Instant synchronization', desc: 'Auto-ingest key project insights into persistent storage' }
        ],
        icon: cursorLightIcon,
        iconDark: cursorDarkIcon,
        protocol: 'Model Context Protocol (MCP)',
        typeLabel: 'Native IDE MCP Client',
        appSubtitle: 'Direct stdio / SSE MCP Connector',
        setupSectionTitle: 'MCP Configuration',
        docsLink: 'https://docs.memwyre.tech/integrations/mcp-server/cursor'
      },
      { 
        id: 'notion', 
        name: 'Notion', 
        subtitle: 'Create docs, tasks, databases and index workspace knowledge',
        desc: 'Import Notion pages, databases, and workspace docs', 
        samplePrompt: 'Search Notion workspace content, update pages, or turn specs, notes, and meeting context into structured outputs',
        fullDesc: 'Connect your Notion workspace directly to Memwyre. Search, index, and synthesize project documents, PRDs, and database entries with bidirectional syncing.',
        features: [
          { title: 'Create documentation', desc: 'Generate PRDs, tech specs, and architecture docs from your research' },
          { title: 'Search and find answers', desc: 'Let AI search across all your Notion and connected workspace content' },
          { title: 'Manage tasks', desc: 'Generate code snippets from task descriptions and update project status' },
          { title: 'Build reports', desc: 'Create release notes, project updates, and performance reports' }
        ],
        icon: notionIcon, 
        darkInvert: true,
        protocol: 'OAuth 2.0 / Notion REST API',
        typeLabel: 'Cloud Workspace Connector',
        appSubtitle: 'OAuth 2.0 Workspace Sync',
        setupSectionTitle: 'Workspace Authorization',
        isOAuth: true,
        docsLink: 'https://docs.memwyre.tech/integrations/connectors'
      },
      { 
        id: 'claude-desktop', 
        name: 'Claude Desktop', 
        subtitle: 'Connect supermemory and personal knowledge graphs in Claude Desktop',
        desc: 'Connect supermemory in Claude Desktop', 
        samplePrompt: 'Recall past conversations, project briefs, and personal knowledge graphs in any prompt',
        fullDesc: 'Empower Claude Desktop with infinite context. Claude automatically queries your Memwyre memory vault to recall conversations, references, and personal conventions.',
        features: [
          { title: 'Long-term recall', desc: 'Never repeat your preferences, tech stack, or background context' },
          { title: 'Dynamic tool execution', desc: 'Claude autonomously pulls memories when answering complex queries' },
          { title: 'Bi-directional ingestion', desc: 'Save critical takeaways back to your Memwyre vault' }
        ],
        icon: claudeIcon,
        protocol: 'Model Context Protocol (MCP)',
        typeLabel: 'Desktop Assistant MCP Client',
        appSubtitle: 'Desktop stdio MCP Server',
        setupSectionTitle: 'MCP Configuration',
        docsLink: 'https://docs.memwyre.tech/integrations/mcp-server/claude'
      },
      { 
        id: 'vscode', 
        name: 'VS Code', 
        subtitle: 'Native MCP support for VS Code and Copilot workspaces',
        desc: 'Native MCP support for VS Code', 
        samplePrompt: 'Access project history, persistent context, and convention rules directly in your editor',
        fullDesc: 'Equip Visual Studio Code with native MCP connection. Query your memory index, link cross-project dependencies, and preserve workspace state.',
        features: [
          { title: 'Workspace memory retrieval', desc: 'Query your memory graph directly within VS Code and Copilot chat' },
          { title: 'Multi-repo intelligence', desc: 'Seamlessly link memories across different workspaces and projects' },
          { title: 'Convention enforcement', desc: 'Ensure team coding standards and past decisions are remembered' }
        ],
        icon: vscodeIcon,
        protocol: 'Model Context Protocol (MCP)',
        typeLabel: 'IDE Extension / MCP Client',
        appSubtitle: 'VS Code MCP Server',
        setupSectionTitle: 'MCP Configuration',
        docsLink: 'https://docs.memwyre.tech/integrations/mcp-server/vscode'
      },
      { 
        id: 'antigravity', 
        name: 'Antigravity', 
        subtitle: 'Deep context memory tool for Antigravity agents',
        desc: 'Deep context memory tool for Antigravity agents', 
        samplePrompt: 'Leverage persistent memory across pair programming and multi-agent workflows',
        fullDesc: 'Google Antigravity pairs directly with Memwyre to power long-horizon coding tasks, codebase modifications, and multi-step refactoring runs.',
        features: [
          { title: 'Agent loop persistence', desc: 'Preserves execution logs, subagent findings, and task milestones' },
          { title: 'Direct MCP connector', desc: 'Built-in support for tool calls: save_memory, search_memwyre, and get_inbox' }
        ],
        icon: antigravityIcon,
        protocol: 'Model Context Protocol (MCP) & Agent Skill',
        typeLabel: 'Agentic IDE & Skill Architecture',
        appSubtitle: 'Antigravity MCP Server & Tool Schemas',
        setupSectionTitle: 'MCP & Skill Configuration',
        docsLink: 'https://docs.memwyre.tech/integrations/mcp-server'
      },
      { 
        id: 'chrome', 
        name: 'Chrome Extension', 
        subtitle: 'Instant web memory & article capture from browser',
        desc: 'Instant web memory & article capture from browser', 
        samplePrompt: 'Save web pages, highlighted snippets, and research articles with one click',
        fullDesc: 'Capture articles, technical documentation, and web pages from Chrome directly into your Memwyre inbox with auto-summarization and tag extraction.',
        features: [
          { title: 'One-click capture', desc: 'Save any webpage or snippet into your Memwyre vault' },
          { title: 'AI summarization', desc: 'Automatic key takeaway extraction and semantic tagging' }
        ],
        icon: chromeIcon,
        protocol: 'Chrome Manifest V3 / Web API',
        typeLabel: 'Browser Extension',
        appSubtitle: 'Browser Context & Webpage Ingestor',
        setupSectionTitle: 'Extension Installation',
        isExtension: true,
        docsLink: 'https://docs.memwyre.tech/integrations/browser'
      }
    ]
  },
  {
    name: 'IDE & Developer Tools',
    items: [
      { 
        id: 'cursor', 
        name: 'Cursor', 
        subtitle: 'Codebase context, semantic search, and project memory in Cursor IDE',
        desc: 'One-click MCP install for codebase context and memory', 
        samplePrompt: 'Search codebase decisions, retrieve previous architectural notes, and debug with full project context',
        fullDesc: 'Seamlessly query your Memwyre second brain inside Cursor. Let AI agents retrieve architectural patterns and remembered bug fixes directly within your editor.',
        features: [
          { title: 'Codebase context recall', desc: 'Retrieve relevant conventions and technical specs as you write code' },
          { title: 'Project memory graph', desc: 'Let Cursor AI query decisions made across previous coding sessions' }
        ],
        icon: cursorLightIcon,
        iconDark: cursorDarkIcon,
        protocol: 'Model Context Protocol (MCP)',
        typeLabel: 'Native IDE MCP Client',
        appSubtitle: 'Direct stdio / SSE MCP Connector',
        setupSectionTitle: 'MCP Configuration',
        docsLink: 'https://docs.memwyre.tech/integrations/mcp-server/cursor'
      },
      { 
        id: 'vscode', 
        name: 'VS Code', 
        subtitle: 'Native MCP support for VS Code and Copilot workspaces',
        desc: 'Native MCP support for VS Code', 
        samplePrompt: 'Access project history, persistent context, and convention rules directly in your editor',
        fullDesc: 'Equip Visual Studio Code with native MCP connection. Query your memory index, link cross-project dependencies, and preserve workspace state.',
        features: [
          { title: 'Workspace memory retrieval', desc: 'Query your memory graph directly within VS Code and Copilot chat' },
          { title: 'Multi-repo intelligence', desc: 'Seamlessly link memories across different workspaces and projects' }
        ],
        icon: vscodeIcon,
        protocol: 'Model Context Protocol (MCP)',
        typeLabel: 'IDE Extension / MCP Client',
        appSubtitle: 'VS Code MCP Server',
        setupSectionTitle: 'MCP Configuration',
        docsLink: 'https://docs.memwyre.tech/integrations/mcp-server/vscode'
      },
      { 
        id: 'windsurf', 
        name: 'Windsurf', 
        subtitle: 'Windsurf Cascade AI memory connector',
        desc: 'Windsurf Cascade AI memory connector', 
        samplePrompt: 'Recall past architecture decisions from Memwyre to guide this Cascade refactor',
        fullDesc: 'Connect Memwyre to Windsurf Cascade. Feed your AI workflows with long-term codebase history, conventions, and design specifications.',
        features: [
          { title: 'Cascade flow memory', desc: 'Retrieve relevant codebase history during multi-file edits' },
          { title: 'Architecture indexing', desc: 'Sync codebase structures into Memwyre vector memory index' }
        ],
        icon: windsurfIcon,
        darkInvert: true,
        protocol: 'Model Context Protocol (MCP)',
        typeLabel: 'Cascade IDE MCP Client',
        appSubtitle: 'Cascade Flow MCP Connector',
        setupSectionTitle: 'MCP Configuration',
        docsLink: 'https://docs.memwyre.tech/integrations/mcp-server'
      },
      { 
        id: 'codex', 
        name: 'Codex', 
        subtitle: 'Persistent memory for the Codex CLI',
        desc: 'Persistent memory for the Codex CLI', 
        samplePrompt: 'Search memory vault for terminal commands and deployment configurations',
        fullDesc: 'Supercharge the Codex CLI with continuous memory. Persist command configurations, build outputs, and execution instructions.',
        features: [
          { title: 'CLI command memory', desc: 'Remember CLI setups, environment variables, and execution plans' }
        ],
        icon: codexIcon,
        protocol: 'Codex CLI Protocol & MCP',
        typeLabel: 'CLI Assistant Integration',
        appSubtitle: 'Codex CLI Memory Extension',
        setupSectionTitle: 'CLI Configuration',
        docsLink: 'https://docs.memwyre.tech/integrations/cli-installer'
      }
    ]
  },
  {
    name: 'CLI & Autonomous Agents',
    items: [
      { 
        id: 'claude-code', 
        name: 'Claude Code', 
        subtitle: 'Remembers conventions, decisions, and project context across CLI sessions',
        desc: 'Remembers conventions, decisions, and project context', 
        samplePrompt: 'Query Memwyre for how we previously handled authentication and session migration',
        fullDesc: 'Claude Code pairs with Memwyre to remember your codebase decisions across separate command runs, terminal sessions, and automated refactors.',
        features: [
          { title: 'CLI session persistence', desc: 'Carry memory across terminal restarts and separate coding tasks' },
          { title: 'Automated bug investigation', desc: 'Recall previous bug fixes, stack traces, and mitigation steps' }
        ],
        icon: claudeCodeIcon, 
        isPro: true,
        protocol: 'Claude Code Plugin Protocol',
        typeLabel: 'CLI Terminal Plugin',
        appSubtitle: 'Native Claude Code CLI Plugin',
        setupSectionTitle: 'Plugin Installation & Auth',
        isPlugin: true,
        docsLink: 'https://docs.memwyre.tech/integrations/plugins/claude'
      },
      { 
        id: 'grok-build', 
        name: 'Grok Build & Bot', 
        subtitle: 'Persistent, cross-bot shared memory for your Grok Bot roster',
        desc: 'Persistent, cross-bot shared memory for Grok', 
        samplePrompt: 'Share what you found with the Coder bot in the next session',
        fullDesc: 'The Grok plugin enables true cross-bot shared memory. When one bot finishes a session, its memories are extracted and injected into the next bot\'s session context.',
        features: [
          { title: 'Cross-bot context', desc: 'Bot B instantly knows what Bot A learned in the previous task' },
          { title: 'Curated memory', desc: 'Approve or discard memories before they become permanent' }
        ],
        icon: grokIcon, 
        isPro: true,
        protocol: 'Grok Build Hooks Protocol',
        typeLabel: 'Autonomous Agent Plugin',
        appSubtitle: 'Native Grok Build CLI Plugin',
        setupSectionTitle: 'Plugin Installation & Auth',
        isPlugin: true,
        docsLink: 'https://docs.memwyre.tech/integrations/plugins/grok'
      },
      { 
        id: 'openclaw', 
        name: 'OpenClaw', 
        subtitle: 'Add persistent memory to autonomous OpenClaw agent sessions',
        desc: 'Add persistent memory to autonomous OpenClaw sessions', 
        samplePrompt: 'Load previous execution memory and retrieve saved facts for this workflow',
        fullDesc: 'Give OpenClaw autonomous agents long-term persistence. Agents query Memwyre to retrieve tools, state, and facts across execution loops.',
        features: [
          { title: 'Agent state backplane', desc: 'Equip autonomous OpenClaw agents with long-term memory' },
          { title: 'Knowledge persistence', desc: 'Persist state and learned facts across multi-agent loops' }
        ],
        icon: openclawIcon, 
        isPro: true,
        protocol: 'OpenClaw Plugin Architecture',
        typeLabel: 'Autonomous Agent Plugin',
        appSubtitle: 'OpenClaw Agent Backplane Plugin',
        setupSectionTitle: 'Plugin Configuration',
        isPlugin: true,
        docsLink: 'https://docs.memwyre.tech/integrations/plugins/openclaw'
      },
      { 
        id: 'antigravity', 
        name: 'Antigravity', 
        subtitle: 'Deep context memory tool for Antigravity agents',
        desc: 'Deep context memory tool for Antigravity agents', 
        samplePrompt: 'Save this task execution plan and milestone findings to my Memwyre memory index',
        fullDesc: 'Google Antigravity pairs directly with Memwyre to power long-horizon coding tasks, codebase modifications, and multi-step refactoring runs.',
        features: [
          { title: 'Agent loop persistence', desc: 'Preserves execution logs, subagent findings, and task milestones' },
          { title: 'Direct MCP connector', desc: 'Built-in support for tool calls: save_memory, search_memwyre, and get_inbox' }
        ],
        icon: antigravityIcon,
        protocol: 'Model Context Protocol (MCP) & Agent Skill',
        typeLabel: 'Agentic IDE & Skill Architecture',
        appSubtitle: 'Antigravity MCP Server & Tool Schemas',
        setupSectionTitle: 'MCP & Skill Configuration',
        docsLink: 'https://docs.memwyre.tech/integrations/mcp-server'
      },
      { 
        id: 'claude-desktop', 
        name: 'Claude Desktop', 
        subtitle: 'Connect supermemory and personal knowledge graphs in Claude Desktop',
        desc: 'Connect supermemory in Claude Desktop', 
        samplePrompt: 'Retrieve relevant project notes from my Memwyre vault to answer this question',
        fullDesc: 'Empower Claude Desktop with infinite context. Claude automatically queries your Memwyre memory vault to recall conversations, references, and personal conventions.',
        features: [
          { title: 'Long-term recall', desc: 'Never repeat your preferences, tech stack, or background context' },
          { title: 'Dynamic tool execution', desc: 'Claude autonomously pulls memories when answering complex queries' }
        ],
        icon: claudeIcon,
        protocol: 'Model Context Protocol (MCP)',
        typeLabel: 'Desktop Assistant MCP Client',
        appSubtitle: 'Desktop stdio MCP Server',
        setupSectionTitle: 'MCP Configuration',
        docsLink: 'https://docs.memwyre.tech/integrations/mcp-server/claude'
      },
      { 
        id: 'opencode', 
        name: 'OpenCode', 
        subtitle: 'Long-term memory for your OpenCode sessions',
        desc: 'Long-term memory for your OpenCode sessions', 
        samplePrompt: 'Index coding tasks and carry architectural rules into OpenCode sessions',
        fullDesc: 'Connect OpenCode with Memwyre to automatically retain coding patterns, conventions, and decisions across team sessions.',
        features: [
          { title: 'Cross-session memory', desc: 'Sync code snippets, design decisions, and architectural notes' }
        ],
        icon: opencodeIcon,
        darkInvert: true,
        isPro: true,
        protocol: 'OpenCode Agent Plugin / MCP',
        typeLabel: 'Multi-Agent Platform Plugin',
        appSubtitle: 'OpenCode Context Connector',
        setupSectionTitle: 'Plugin Configuration',
        isPlugin: true,
        docsLink: 'https://docs.memwyre.tech/integrations/mcp-server'
      }
    ]
  },
  {
    name: 'Knowledge & Cloud Workspaces',
    items: [
      { 
        id: 'notion', 
        name: 'Notion', 
        subtitle: 'Create docs, tasks, databases and index workspace knowledge',
        desc: 'Import Notion pages, databases, and workspace docs', 
        samplePrompt: 'Search Notion workspace content, update pages, or turn specs, notes, and meeting context into structured outputs',
        fullDesc: 'Connect your Notion workspace directly to Memwyre. Search, index, and synthesize project documents, PRDs, and database entries with bidirectional syncing.',
        features: [
          { title: 'Create documentation', desc: 'Generate PRDs, tech specs, and architecture docs from your research' },
          { title: 'Search and find answers', desc: 'Let AI search across all your Notion and connected workspace content' },
          { title: 'Manage tasks', desc: 'Generate code snippets from task descriptions and update project status' }
        ],
        icon: notionIcon, 
        darkInvert: true,
        protocol: 'OAuth 2.0 / Notion REST API',
        typeLabel: 'Cloud Workspace Connector',
        appSubtitle: 'OAuth 2.0 Workspace Sync',
        setupSectionTitle: 'Workspace Authorization',
        isOAuth: true,
        docsLink: 'https://docs.memwyre.tech/integrations/connectors'
      },
      { 
        id: 'gdrive', 
        name: 'Google Drive', 
        subtitle: 'Sync Docs, Sheets, and Slides into your memory index',
        desc: 'Sync Docs, Sheets and Slides into memory index', 
        samplePrompt: 'Search across Google Drive documents, slide decks, and spreadsheet data',
        fullDesc: 'Automatically index and vectorize Google Docs, Sheets, and Presentations. Query information across multi-format documents in one centralized search.',
        features: [
          { title: 'Document indexing', desc: 'Automatically parse and vectorize Google Docs and PDFs' },
          { title: 'Cross-format search', desc: 'Query spreadsheet tables, slide decks, and docs in one search' }
        ],
        icon: gdriveIcon, 
        isComingSoon: true,
        protocol: 'Google Workspace OAuth 2.0',
        typeLabel: 'Cloud Workspace Connector',
        appSubtitle: 'Google Workspace Document Indexer',
        setupSectionTitle: 'Workspace Authorization',
        isOAuth: true,
        docsLink: 'https://docs.memwyre.tech/integrations/connectors'
      },
      { 
        id: 'chrome', 
        name: 'Chrome Extension', 
        subtitle: 'Instant web memory & article capture from browser',
        desc: 'Instant web memory & article capture from browser', 
        samplePrompt: 'Save web pages, highlighted snippets, and research articles with one click',
        fullDesc: 'Capture articles, technical documentation, and web pages from Chrome directly into your Memwyre inbox with auto-summarization and tag extraction.',
        features: [
          { title: 'One-click capture', desc: 'Save any webpage or snippet into your Memwyre vault' },
          { title: 'AI summarization', desc: 'Automatic key takeaway extraction and semantic tagging' }
        ],
        icon: chromeIcon,
        protocol: 'Chrome Manifest V3 / Web API',
        typeLabel: 'Browser Extension',
        appSubtitle: 'Browser Context & Webpage Ingestor',
        setupSectionTitle: 'Extension Installation',
        isExtension: true,
        docsLink: 'https://docs.memwyre.tech/integrations/browser'
      }
    ]
  },
  {
    name: 'AI Models & LLM Providers',
    items: [
      { 
        id: 'chatgpt', 
        name: 'ChatGPT', 
        subtitle: 'Direct memory integration with OpenAI ChatGPT',
        desc: 'Direct memory integration with OpenAI ChatGPT', 
        samplePrompt: 'Access your Memwyre memory vault directly within ChatGPT conversations',
        fullDesc: 'Connect your Memwyre second brain to ChatGPT. Query your memory graph and index new insights directly from conversational ChatGPT sessions.',
        features: [
          { title: 'Custom GPT & Memory Tool', desc: 'Connect your personal second brain to ChatGPT' },
          { title: 'Semantic retrieval', desc: 'Query past project notes and knowledge graphs inside ChatGPT' }
        ],
        icon: openaiIcon, 
        darkInvert: true,
        protocol: 'OpenAI Custom Actions (OpenAPI / REST)',
        typeLabel: 'Custom GPT / LLM Tool',
        appSubtitle: 'OpenAPI Schema & Action Endpoints',
        setupSectionTitle: 'Custom Action Configuration',
        isCustomAction: true,
        docsLink: 'https://docs.memwyre.tech/integrations/llms'
      },
      { 
        id: 'gemini', 
        name: 'Google Gemini', 
        subtitle: 'Google Gemini agent memory backplane',
        desc: 'Google Gemini agent memory backplane', 
        samplePrompt: 'Multi-modal memory recall and context ingestion in Gemini workflows',
        fullDesc: 'Equip Google Gemini with persistent context. Store multimodal facts, diagrams, and markdown notes in a unified memory index.',
        features: [
          { title: 'Multimodal memory recall', desc: 'Store images, markdown docs, and code snippets in unified memory' },
          { title: 'Real-time indexing', desc: 'Automatically sync conversation takeaways into Memwyre' }
        ],
        icon: geminiIcon,
        protocol: 'Gemini Function Calling / REST API',
        typeLabel: 'LLM Function Calling Tool',
        appSubtitle: 'Gemini Function Declarations',
        setupSectionTitle: 'Function Calling Configuration',
        isCustomAction: true,
        docsLink: 'https://docs.memwyre.tech/integrations/llms'
      },
      { 
        id: 'perplexity', 
        name: 'Perplexity', 
        subtitle: 'Search and citation memory integration',
        desc: 'Search and citation memory integration', 
        samplePrompt: 'Index Perplexity search threads, citations, and research papers into persistent memory',
        fullDesc: 'Bridge Perplexity research sessions into Memwyre. Ingest web findings, citations, and multi-source answers into your permanent knowledge graph.',
        features: [
          { title: 'Research persistence', desc: 'Ingest Perplexity search results and citations into persistent memory' },
          { title: 'Citation graphs', desc: 'Build connected references across web search queries' }
        ],
        icon: perplexityIcon,
        protocol: 'Citation & Webhook Ingestion API',
        typeLabel: 'Search & Citation Integration',
        appSubtitle: 'Research Stream Webhook',
        setupSectionTitle: 'Webhook & Ingestion Setup',
        isCustomAction: true,
        docsLink: 'https://docs.memwyre.tech/integrations/llms'
      }
    ]
  }
]);

// Compute current detail item based on route param (e.g. /integrations/notion) or selected item
const currentDetailItem = computed(() => {
  const paramId = route.params.id;
  if (!paramId) return null;
  
  for (const cat of integrationCategories.value) {
    const found = cat.items.find(i => i.id.toLowerCase() === paramId.toLowerCase());
    if (found) return found;
  }
  return null;
});

// Navigate into integration detail page
const openIntegrationDetail = (item) => {
  router.push(`/integrations/${item.id}`);
};

// Navigate back to the store
const goToStore = () => {
  router.push('/integrations');
};

// Copy sample prompt from hero card
const handleCopySamplePrompt = (item) => {
  const text = item.samplePrompt || 'Search memory index, recall context, and generate structured insights';
  navigator.clipboard.writeText(text);
  toast.success('Prompt copied to clipboard');
};

// Primary button click on detail page
const handleDetailPrimaryAction = () => {
  if (!currentDetailItem.value) return;
  handleConnectClientClick(currentDetailItem.value);
};

// Helper to check if item is connected
const isItemConnected = (item) => {
  if (!item) return false;
  if (item.id === 'notion') {
    return !!connectionsStatus.value.notion?.connected;
  }
  if (item.id === 'gdrive') {
    return !!connectionsStatus.value.gdrive?.connected;
  }
  return apiKeys.value.some(k => k.name.toLowerCase() === item.name.toLowerCase() && k.is_active);
};

// Installed apps for the top horizontal row
const installedApps = computed(() => {
  const all = [];
  const addedIds = new Set();

  integrationCategories.value.forEach(cat => {
    cat.items.forEach(item => {
      if (!addedIds.has(item.id)) {
        if (isItemConnected(item) || ['cursor', 'vscode', 'claude-desktop', 'antigravity', 'chrome'].includes(item.id)) {
          all.push(item);
          addedIds.add(item.id);
        }
      }
    });
  });

  return all.slice(0, 8);
});

// Filtered items when searching
const filteredItems = computed(() => {
  if (!searchQuery.value.trim()) return [];
  const q = searchQuery.value.toLowerCase().trim();
  const results = [];
  const seen = new Set();

  integrationCategories.value.forEach(cat => {
    cat.items.forEach(item => {
      if (!seen.has(item.id)) {
        if (item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q) || cat.name.toLowerCase().includes(q)) {
          results.push(item);
          seen.add(item.id);
        }
      }
    });
  });

  return results;
});

const closeIntegrationModal = () => {
  showIntegrationModal.value = false;
  selectedIntegration.value = null;
};

const mapIntegrationToTab = (id) => {
  if (id === 'claude-desktop') return 'claude';
  if (id === 'cursor') return 'cursor';
  if (id === 'vscode') return 'vscode';
  if (id === 'claude-code') return 'claudecode';
  if (id === 'grok-build') return 'grok';
  if (id === 'codex') return 'codex';
  if (id === 'antigravity') return 'antigravity';
  if (id === 'openclaw') return 'openclaw';
  if (id === 'opencode') return 'opencode';
  if (id === 'windsurf') return 'windsurf';
  if (id === 'chatgpt') return 'openai';
  if (id === 'gemini') return 'gemini';
  if (id === 'perplexity') return 'perplexity';
  return 'claude';
};

const loadConnectionsStatus = async () => {
  try {
    const res = await api.get('/connectors/status');
    connectionsStatus.value = res.data;
  } catch (err) {
    console.error("Failed to load connectors status", err);
  }
};

const handleNotionConnect = () => {
  const width = 600;
  const height = 700;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  
  const baseUrl = api.defaults.baseURL || 'http://localhost:8000/api/v1';
  const authUrl = `${baseUrl}/connectors/notion/auth?token=${authStore.token}`;
  
  const popup = window.open(
    authUrl,
    "Connect Notion",
    `width=${width},height=${height},left=${left},top=${top},status=no,location=no,toolbar=no,menubar=no`
  );
  
  const messageListener = async (event) => {
    if (event.data === "notion_connected") {
      toast.success("Notion Workspace Connected!");
      await loadConnectionsStatus();
      window.removeEventListener("message", messageListener);
    }
  };
  window.addEventListener("message", messageListener);
};

const handleConnectClientClick = async (item) => {
  if (item.isComingSoon) {
    toast.info(`${item.name} connector is coming soon!`);
    return;
  }

  if (item.id === 'notion') {
    const status = connectionsStatus.value.notion;
    if (status && status.connected) {
      try {
        toast.info("Starting Notion sync...");
        await api.post('/connectors/notion/sync');
        toast.success("Notion sync started in background!");
        await loadConnectionsStatus();
      } catch (err) {
        toast.error("Failed to start Notion sync");
      }
    } else {
      handleNotionConnect();
    }
    return;
  }

  selectedIntegration.value = item;
  
  const existingKey = apiKeys.value.find(k => k.name.toLowerCase() === item.name.toLowerCase() && k.is_active);
  
  if (existingKey) {
    integrationApiKey.value = "<YOUR_API_KEY>";
    isExistingKey.value = true;
    showIntegrationModal.value = true;
  } else {
    isExistingKey.value = false;
    await generateKeyForIntegration(item.name);
  }
};

const loadApiKeys = async () => {
  try {
    const res = await apiKeysService.listKeys();
    apiKeys.value = res.data;
  } catch (err) {
    console.error("Failed to list keys", err);
  }
};

const generateKeyForIntegration = async (name, isRegenerate = false) => {
  generatingKey.value = true;
  try {
    if (isRegenerate) {
      const existingKey = apiKeys.value.find(k => k.name.toLowerCase() === name.toLowerCase() && k.is_active);
      if (existingKey) {
        await apiKeysService.revokeKey(existingKey.id);
      }
    }
    
    const res = await apiKeysService.createKey(name);
    integrationApiKey.value = res.data.key;
    isExistingKey.value = false;
    showIntegrationModal.value = true;
    toast.success("API Key generated successfully");
    loadApiKeys();
  } catch (err) {
    toast.error("Failed to generate key");
  } finally {
    generatingKey.value = false;
  }
};

const loadKeys = async () => {
  try {
    const res = await api.get('/user/llm-keys');
    keys.value = res.data;
  } catch (err) {
    console.error(err);
  }
};

const confirmDeleteKey = async () => {
  if (!keyToDelete.value) return;
  deletingKey.value = true;
  try {
    const isUserKey = apiKeys.value.some(k => k.id === keyToDelete.value);

    if (isUserKey) {
      await apiKeysService.revokeKey(keyToDelete.value);
      loadApiKeys();
    } else {
      await api.delete(`/user/llm-keys/${keyToDelete.value}`);
      loadKeys();
    }
    
    toast.success("Key removed");
    showDeleteModal.value = false;
    keyToDelete.value = null;
  } catch (err) {
    toast.error("Failed to remove key");
  } finally {
    deletingKey.value = false;
  }
};

onMounted(() => {
  loadKeys();
  loadApiKeys();
  loadConnectionsStatus();
});
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.2s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
