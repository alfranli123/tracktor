<script lang="ts">
  import { onMount } from 'svelte';
  
  let config: any = null;
  let loading = true;
  let error = '';

  async function fetchConfig() {
    try {
      const response = await fetch(`${import.meta.env.VITE_PUBLIC_API_BASE_URL || 'http://localhost:3333'}/api/config`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      config = await response.json();
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to fetch config';
      console.error('Config fetch error:', err);
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    fetchConfig();
  });
</script>

<div class="container mx-auto px-4 py-8">
  <div class="max-w-4xl mx-auto">
    <header class="text-center mb-8">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Vehicle Management System
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300">
        Track your vehicles, fuel consumption, maintenance, and more
      </p>
    </header>

    {#if loading}
      <div class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    {:else if error}
      <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
        <div class="flex items-center">
          <svg class="w-6 h-6 text-red-600 dark:text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h3 class="text-lg font-medium text-red-800 dark:text-red-200">Connection Error</h3>
            <p class="text-red-600 dark:text-red-400 mt-1">{error}</p>
            <p class="text-sm text-red-500 dark:text-red-400 mt-2">
              Make sure the backend server is running on port 3333
            </p>
          </div>
        </div>
        <button 
          on:click={fetchConfig}
          class="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Retry Connection
        </button>
      </div>
    {:else if config}
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          System Status
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h3 class="font-medium text-green-800 dark:text-green-200">Application</h3>
            <p class="text-green-600 dark:text-green-400">{config.appName}</p>
            <p class="text-sm text-green-500 dark:text-green-400">Version {config.version}</p>
          </div>
          <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h3 class="font-medium text-blue-800 dark:text-blue-200">Connection</h3>
            <p class="text-blue-600 dark:text-blue-400">✓ Backend Connected</p>
            <p class="text-sm text-blue-500 dark:text-blue-400">API responding normally</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Vehicles</h3>
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <p class="text-gray-600 dark:text-gray-300">Manage your vehicle fleet</p>
          <div class="mt-4">
            <span class="text-2xl font-bold text-gray-900 dark:text-white">0</span>
            <span class="text-sm text-gray-500 dark:text-gray-400 ml-2">registered</span>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Fuel Logs</h3>
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <p class="text-gray-600 dark:text-gray-300">Track fuel consumption</p>
          <div class="mt-4">
            <span class="text-2xl font-bold text-gray-900 dark:text-white">0</span>
            <span class="text-sm text-gray-500 dark:text-gray-400 ml-2">entries</span>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Maintenance</h3>
            <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <p class="text-gray-600 dark:text-gray-300">Schedule and track maintenance</p>
          <div class="mt-4">
            <span class="text-2xl font-bold text-gray-900 dark:text-white">0</span>
            <span class="text-sm text-gray-500 dark:text-gray-400 ml-2">records</span>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Insurance</h3>
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <p class="text-gray-600 dark:text-gray-300">Manage insurance policies</p>
          <div class="mt-4">
            <span class="text-2xl font-bold text-gray-900 dark:text-white">0</span>
            <span class="text-sm text-gray-500 dark:text-gray-400 ml-2">policies</span>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>