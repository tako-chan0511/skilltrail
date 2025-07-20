<!-- src/App.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue';
import AppCard from './components/AppCard.vue';
import AppDetail from './components/AppDetail.vue'; // AppDetailをインポート
import { apps, allTags } from './apps';

const selectedTag = ref<string | null>(null);

const filteredApps = computed(() => {
  if (!selectedTag.value) {
    return apps;
  }
  return apps.filter(app => app.tags.includes(selectedTag.value!));
});

function selectTag(tag: string | null) {
  selectedTag.value = tag;
}
</script>

<template>
  <div class="bg-gray-100 min-h-screen font-sans">
    <header class="bg-white shadow-md p-6 sticky top-0 z-10">
      <div class="container mx-auto">
        <h1 class="text-4xl font-bold text-gray-800">SkillTrail: My Development Journey</h1>
        <p class="text-lg text-gray-600 mt-2">これまでに開発したアプリケーションの軌跡</p>
      </div>
    </header>

    <main class="container mx-auto p-6">
      <!-- タグフィルター -->
      <div class="mb-12 text-center">
        <!-- ★★★ ここを修正しました ★★★ -->
        <button
          @click="selectTag(null)"
          :class="[
            'py-2 px-4 rounded-full text-sm font-semibold mr-2 mb-2 transition-colors',
            selectedTag === null
              ? 'bg-blue-500 text-white'
              : 'bg-white text-blue-500 border border-blue-500 hover:bg-blue-100',
          ]"
        >
          All
        </button>
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="selectTag(tag)"
          :class="[
            'py-2 px-4 rounded-full text-sm font-semibold mr-2 mb-2 transition-colors',
            selectedTag === tag
              ? 'bg-blue-500 text-white'
              : 'bg-white text-blue-500 border border-blue-500 hover:bg-blue-100',
          ]"
        >
          {{ tag }}
        </button>
      </div>

      <!-- アプリケーションカードのグリッド -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <AppCard v-for="app in filteredApps" :key="app.id" :app="app" />
      </div>

      <hr class="mb-16 border-t-2 border-gray-200" />

      <!-- アプリケーション詳細セクション -->
      <div class="space-y-12">
        <AppDetail v-for="app in apps" :key="app.id" :app="app" />
      </div>
    </main>

    <footer class="text-center py-6 mt-8 text-gray-500">
      <p>&copy; 2025 Your Name. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<style>
/* スムーズスクロールを有効にする */
html {
  scroll-behavior: smooth;
}
</style>
