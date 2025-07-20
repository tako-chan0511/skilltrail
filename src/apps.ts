// src/apps.ts

// 技術スタックの型定義
interface TechStack {
  name: string;
  color: string; // Tailwind CSSのクラス (例: 'bg-blue-200 text-blue-800')
}

// Appの型定義
export interface App {
  id: number;
  title: string;
  description: string;
  screenshot: string;
  appUrl?: string;
  githubUrl: string;
  tags: string[];
  learnings: {
    challenge: string;
    solution: string;
  };
  features: string[];
  stack: TechStack[];
}

// すべてのアプリデータをここに集約
export const apps: App[] = [
  {
    id: 1,
    title: 'ポートフォリオサイト (SkillTrail)',
    description: 'Vue 3, Vite, Tailwind CSSを使い、自身の開発スキルと制作物を紹介するために構築したポートフォリオサイト。コンポーネント設計やデータ駆動のUI実装を学びました。',
    screenshot: '', 
    githubUrl: '#',
    tags: ['Vue', 'TypeScript', 'Tailwind CSS', 'Vite'],
    learnings: {
      challenge: 'Vue3+Vite環境とTailwind CSSの連携設定でエラーが頻発。特にパッケージ間のバージョン不整合が原因でスタイルが全く適用されなかった。',
      solution: 'package.jsonを見直し、Vite, Tailwind, PostCSS等のバージョンを広く使われている安定版に統一。古いnode_modulesとlockファイルを削除し再インストールすることで環境をクリーンにし、問題を解決した。',
    },
    features: ['コンポーネントベースのUI構築', '動的なタグフィルタリング', 'ページ内スムーズスクロール'],
    stack: [
      { name: 'Vue 3', color: 'bg-green-200 text-green-800' },
      { name: 'Vite', color: 'bg-purple-200 text-purple-800' },
      { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' },
      { name: 'Tailwind CSS', color: 'bg-sky-200 text-sky-800' },
    ],
  },
  {
    id: 4,
    title: 'AIマーケットアナリスト',
    description: '企業名を入力すると、関連ニュースをGNews API経由で収集・分析する企業分析ツール。サーバーサイドキャッシュによる高速化と、RAG（検索拡張生成）による対話的な深掘り分析が特徴。Geminiが生成するレポートはMarkdown形式で表示され、重要キーワードがハイライトされるなど、高度なUX/UIを実現しています。',
    screenshot: '', 
    appUrl: 'https://hara0511my-market-analyst.vercel.app/',
    githubUrl: 'https://github.com/tako-chan0511/my-market-analyst',
    tags: ['RAG', 'Caching', 'Serverless', 'Gemini', 'Markdown'],
    learnings: {
      challenge: '同一企業への分析リクエストが頻発した場合の、APIコストの増大とレスポンス遅延。また、一般的なLLMの知識だけでは、直近の企業ニュースに基づいた専門的な質疑応答が困難でした。',
      solution: 'サーバーレス関数（BFF）にキャッシュ層を導入。GNewsへのリクエストとGeminiによる初期分析結果を、企業名をキーとして1日間キャッシュします。これによりAPIコストを削減し、2回目以降のアクセスを高速化しました。追加質問に対しては、収集したニュース記事本文を知識源とするRAGパイプラインを起動。これにより、最新情報に基づいた専門家レベルの対話を実現しました。',
    },
    features: [
      'サーバーサイドキャッシュ(TTL:1日)による高速化・コスト削減',
      '収集ニュースを知識源とする動的なRAGチャット機能',
      'Geminiによる分析レポートのMarkdown形式での生成',
      '重要キーワードの自動ハイライトによる可読性向上',
    ],
    stack: [
      { name: 'Vue 3', color: 'bg-green-200 text-green-800' },
      { name: 'Vercel (BFF & Cache)', color: 'bg-black text-white' },
      { name: 'GNews API', color: 'bg-blue-800 text-white' },
      { name: 'Gemini API', color: 'bg-red-200 text-red-800' },
      { name: 'marked.js', color: 'bg-gray-700 text-white' },
    ],
  },
  {
    id: 5,
    title: 'AIニュースダイジェスト',
    description: 'GNews APIで取得した記事リスト、サーバーレス関数によるWebスクレイピング、RAGを活用した対話型AIを組み合わせた高機能ニュースリーダー。UIは3ペイン構成を採用し、「記事リスト」「要約・本文（Markdown）」「AIとの対話」をシームレスに連携させ、快適な情報収集と深掘り体験の実現を目指しました。',
    screenshot: '',
    appUrl: 'https://hara0511my-daily-digest.vercel.app/',
    githubUrl: 'https://github.com/tako-chan0511/my-daily-digest',
    tags: ['RAG', 'Web Scraping', '3-pane UI', 'Gemini', 'Markdown'],
    learnings: {
      challenge: '多様なHTML構造を持つニュースサイトからの安定した本文抽出。また、単なる要約に留まらず、ユーザーが記事内容について対話的に深掘りできる仕組みの構築が技術的な課題でした。',
      solution: 'バックエンドでPuppeteerを用いたスクレイピング関数をサーバーレスで実行し、本文を抽出してMarkdown形式に変換。ユーザーが記事を選択した際、この抽出テキストをその場限りの知識ベースとするRAGパイプラインを起動します。これにより、Geminiは記事の文脈に沿った正確な回答を生成でき、ユーザーは「この記事の〇〇について、もっと詳しく教えて」といった対話的な深掘りが可能になりました。',
    },
    features: [
      'GNews APIによるキーワード検索',
      'サーバーレス関数での動的Webスクレイピング',
      '記事内容に基づくRAG（検索拡張生成）チャット機能',
      '3ペイン構成による優れたUX/UI',
      'Markdownによるリッチな本文表示',
    ],
    stack: [
      { name: 'JavaScript (ES6+)', color: 'bg-yellow-200 text-yellow-800' },
      { name: 'GNews API', color: 'bg-blue-800 text-white' },
      { name: 'Puppeteer', color: 'bg-teal-200 text-teal-800' },
      { name: 'Vercel (Serverless)', color: 'bg-black text-white' },
      { name: 'Gemini API', color: 'bg-red-200 text-red-800' },
      { name: 'marked.js', color: 'bg-gray-700 text-white' },
    ],
  },
  {
    id: 6,
    title: 'AI統計アナリスト',
    description: '政府統計の総合窓口（e-stat）APIと連携し、日本の公的統計データを対話的に探索・分析するアプリケーション。バックエンド（BFF）がe-statの複雑なレスポンスを整形し、フロントエンドはデータの可視化とGeminiへの分析リクエストに専念するアーキテクチャを採用しました。',
    screenshot: '',
    appUrl: 'https://hara0511ai-stat-analyst.vercel.app/',
    githubUrl: 'https://github.com/tako-chan0511/ai-stat-analyst',
    tags: ['e-stat API', 'BFF', 'Serverless', 'Gemini', 'データ可視化'],
    learnings: {
      challenge: 'e-stat APIのレスポンスは階層が深く、そのままではフロントエンドでの扱いやAIへの入力が困難。また、APIキーをクライアントサイドに露出させることはできない。',
      solution: 'Vercel FunctionsでBFF（Backend for Frontend）層を構築。BFFがAPIキーを安全に管理し、e-statからのRAWデータを必要な情報（項目名、値、単位など）だけに絞り込んだシンプルなJSONに加工してからフロントに返却。これによりフロントエンドの実装を簡略化し、AIには分析に不要なメタデータを与えないことで、トークン効率と分析精度の向上を両立させた。',
    },
    features: [
      'BFF(サーバーレス関数)によるe-stat APIの安全な中継',
      'キーワードによる統計データの検索・絞り込み機能',
      '選択された統計データの動的なグラフ描画',
      'Geminiによる相関関係や背景の深掘り分析',
    ],
    stack: [
      { name: 'JavaScript', color: 'bg-yellow-200 text-yellow-800' },
      { name: 'e-stat API', color: 'bg-blue-800 text-white' },
      { name: 'Vercel (BFF)', color: 'bg-black text-white' },
      { name: 'Chart.js', color: 'bg-pink-200 text-pink-800' },
      { name: 'Gemini API', color: 'bg-red-200 text-red-800' },
    ],
  },
  {
    id: 7,
    title: 'AI政権比較アナリスト',
    description: 'サーバーレスアーキテクチャ上で動作するWebスクレイピング機能とRAG (Retrieval-Augmented Generation) を組み合わせ、特定のテーマに関する最新情報に基づいた高度な分析を生成するシステム。各政党の公式サイトから最新の政策情報をリアルタイムで収集・ベクトル化し、それを知識ベースとしてGeminiに提供することで、単なるWeb検索では得られない、文脈を理解した深い分析レポートを生成します。',
    screenshot: '',
    appUrl: 'https://hara0511jp-politics.vercel.app/',
    githubUrl: 'https://github.com/tako-chan0511/jp-politics',
    tags: ['RAG', 'Web Scraping', 'Serverless', 'Gemini', 'Prompt Engineering'],
    learnings: {
      challenge: '静的な知識しか持たないLLMに、常に変化する最新の政党の政策について分析させること。また、Webスクレイピングは対象サイトの構造変更に弱く、メンテナンスコストが高い点が課題でした。',
      solution: 'アーキテクチャを工夫し、Vercel Functions等のサーバーレス環境で定期的にスクレイピング処理を実行。収集したテキストデータをチャンク（断片）に分割し、ベクトルデータベースに保存するRAGパイプラインを構築しました。ユーザーからの質問に対し、関連性の高いテキストチャンクを検索してプロンプトに埋め込むことで、Geminiは常に最新の一次情報源に基づいて回答を生成できます。これにより、LLMの知識を動的に拡張し、ハルシネーション（幻覚）を大幅に抑制することに成功しました。',
    },
    features: [
      'サーバーレス関数による定期的なWebスクレイピング実行',
      '収集データのベクトル化とデータベースへの保存',
      'RAGによるLLMの知識ベースの動的拡張',
      '中立性を担保するための役割（ロール）設定プロンプト',
    ],
    stack: [
      { name: 'Vue 3', color: 'bg-green-200 text-green-800' },
      { name: 'Vercel (Serverless)', color: 'bg-black text-white' },
      { name: 'Puppeteer', color: 'bg-teal-200 text-teal-800' },
      { name: 'Gemini API', color: 'bg-red-200 text-red-800' },
      { name: 'Vector DB', color: 'bg-indigo-200 text-indigo-800' },
    ],
  },
  {
    id: 8,
    title: '料理レシピ提案アプリ',
    description: '楽天レシピカテゴリランキングAPIと連携し、人気のレシピを多彩な条件で検索できるアプリケーション。複雑なパラメータを組み合わせるロジックをBFF(Backend for Frontend)に集約することで、フロントエンドの責務を分離し、保守性と拡張性を高めた設計になっています。',
    screenshot: '',
    appUrl: 'https://hara0511my-recipes.vercel.app/',
    githubUrl: 'https://github.com/tako-chan0511/my-recipes',
    tags: ['React', 'BFF', 'Rakuten API', '状態管理'],
    learnings: {
      challenge: 'カテゴリ、調理時間、予算など複数の絞り込み条件を組み合わせた動的なAPIリクエストの構築。これらの複雑な状態管理をすべてフロントエンドで行うと、コンポーネントが肥大化し、見通しが悪くなる懸念がありました。',
      solution: 'フロントエンドはUIの状態（どのボタンが押されているか等）の管理に専念させ、BFF（サーバーレス関数）側でそれらの状態を解釈して楽天APIへのリクエストURLを組み立てる責務分離のアーキテクチャを採用。これによりフロントエンドは「何をしたいか」だけをBFFに伝えればよく、複雑なロジックから解放され、コードの可読性と保守性が大幅に向上しました。',
    },
    features: [
      '楽天APIと連携したカテゴリ別レシピランキング表示',
      '調理時間・予算など、複数の条件を組み合わせた絞り込み機能',
      'BFFによるAPIリクエストロジックのカプセル化',
      '将来的なAI機能（献立提案など）の追加を見据えた拡張性の高い設計',
    ],
    stack: [
      { name: 'React', color: 'bg-cyan-200 text-cyan-800' },
      { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' },
      { name: 'Rakuten API', color: 'bg-red-600 text-white' },
      { name: 'Vercel (BFF)', color: 'bg-black text-white' },
    ],
  },
];

// 全てのタグを重複なく取得する
export const allTags = [...new Set(apps.flatMap(app => app.tags))].sort();
