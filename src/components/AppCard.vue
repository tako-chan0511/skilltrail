<!-- src/components/AppCard.vue -->
<script setup lang="ts">
import type { App } from '../apps';
defineProps<{ app: App }>();
</script>

<template>
  <div class="border rounded-lg overflow-hidden shadow-lg bg-white flex flex-col transition-transform hover:scale-105 duration-300">
    <!-- ★★★ v-if を追加 ★★★ -->
    <!-- app.screenshot に値がある場合のみ画像を表示 -->
    <img v-if="app.screenshot" 
         :src="app.screenshot" 
         :alt="app.title" 
         class="w-full h-48 object-cover" 
         onerror="this.onerror=null; this.src='https://placehold.co/600x400/e2e8f0/94a3b8?text=Image+Not+Found';" />

    <div class="p-6 flex-grow flex flex-col">
      <h3 class="text-xl font-bold mb-2 text-gray-800">{{ app.title }}</h3>
      
      <p class="text-gray-600 text-sm mb-4 flex-grow">{{ app.description.substring(0, 80) }}...</p>

      <div class="mb-4">
        <span v-for="tag in app.tags" :key="tag" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{{ tag }}
        </span>
      </div>

      <div class="mt-auto pt-4 border-t border-gray-200 text-center">
        <a :href="`#app-${app.id}`" 
           class="inline-block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
          技術的な詳細を見る
        </a>
      </div>
    </div>
  </div>
</template>
