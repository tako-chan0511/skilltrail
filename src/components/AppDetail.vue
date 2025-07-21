<!-- src/components/AppDetail.vue -->
<script setup lang="ts">
import type { App } from '../apps';
defineProps<{ app: App }>();
</script>

<template>
  <!-- sectionにIDを設定し、リンクの飛び先にする -->
  <section :id="`app-${app.id}`" class="bg-white p-8 rounded-2xl shadow-xl mb-16 scroll-mt-24">
    
    <!-- ヘッダー：タイトルと各種リンク -->
    <header class="flex flex-wrap items-center justify-between gap-6 mb-6 border-b-2 border-gray-200 pb-6">
      <h3 class="text-4xl font-bold text-gray-900">{{ app.title }}</h3>
      <div class="flex items-center gap-3">
        <a v-if="app.appUrl && app.appUrl !== '#'" :href="app.appUrl" target="_blank" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-lg transition-colors text-base shadow-md">
          アプリを試す
        </a>
        <a :href="app.githubUrl" target="_blank" class="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-5 rounded-lg transition-colors text-base shadow-md">
          ソースコード
        </a>
      </div>
    </header>

    <!-- メインコンテンツ -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-8">
      
      <!-- 左側：技術ハイライトとTips -->
      <div class="lg:col-span-2">
        <h4 class="text-2xl font-semibold mb-4 text-gray-800 border-l-4 border-blue-500 pl-4">技術ハイライト</h4>
        <p class="mb-8 text-gray-700 leading-relaxed">{{ app.description }}</p>
        
        <h4 class="text-2xl font-semibold mb-4 text-gray-800 border-l-4 border-blue-500 pl-4">課題とTips</h4>
        <div class="bg-gray-50 border border-gray-200 p-6 rounded-lg">
          <p class="font-semibold text-lg text-gray-900 mb-2">【直面した課題】</p>
          <p class="mb-4 text-gray-700">{{ app.learnings.challenge }}</p>
          <p class="font-semibold text-lg text-gray-900 mb-2">【解決策・Tips】</p>
          <p class="text-gray-700">{{ app.learnings.solution }}</p>
        </div>
      </div>

      <!-- 右側：実装機能と技術スタック -->
      <div class="space-y-8">
        <div>
          <h4 class="text-xl font-semibold mb-3 text-gray-800">実装した主要機能</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-600">
            <li v-for="(feature, index) in app.features" :key="index">{{ feature }}</li>
          </ul>
        </div>
        
        <!-- ★★★ ここから技術スタックの表示方法を変更 ★★★ -->
        <div>
          <h4 class="text-xl font-semibold mb-4 text-gray-800">技術スタック</h4>
          <div class="space-y-4">
            <!-- カテゴリごとにループ -->
            <div v-for="category in app.stack" :key="category.category">
              <h5 class="text-md font-bold text-gray-600 mb-2">{{ category.category }}</h5>
              <!-- 各カテゴリ内の技術をループ -->
              <div class="flex flex-wrap gap-2">
                <span v-for="(tech, index) in category.technologies" :key="index" class="text-sm font-medium px-3 py-1 rounded-full shadow-sm" :class="tech.color">
                  {{ tech.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- ★★★ ここまで ★★★ -->

      </div>
    </div>
  </section>
</template>
