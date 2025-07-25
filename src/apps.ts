// src/apps.ts

interface TechStack {
  name: string;
  color: string;
}

interface StackCategory {
  category: string; //例: 'フロントエンド', 'バックエンド', 'データベース'
  technologies: TechStack[];
}

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
  stack: StackCategory[];
}

export const apps: App[] = [
  {
    id: 1,
    title: 'ポートフォリオサイト (SkillTrail)',
    description: 'Vue 3, Vite, Tailwind CSSを使い、自身の開発スキルと制作物を紹介するために構築したポートフォリオサイト。コンポーネント設計やデータ駆動のUI実装を学びました。',
    screenshot: '',
    githubUrl: 'https://github.com/tako-chan0511/skilltrail',
    tags: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite'],
    learnings: {
      challenge: 'Vue3+Vite環境とTailwind CSSの連携設定でエラーが頻発。特にパッケージ間のバージョン不整合が原因でスタイルが全く適用されなかった。',
      solution: 'package.jsonを見直し、Vite, Tailwind, PostCSS等のバージョンを広く使われている安定版に統一。古いnode_modulesとlockファイルを削除し再インストールすることで環境をクリーンにし、問題を解決した。',
    },
    features: ['コンポーネントベースのUI構築', '動的なタグフィルタリング', 'ページ内スムーズスクロール'],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' }, { name: 'Tailwind CSS', color: 'bg-sky-200 text-sky-800' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 4,
    title: 'AIマーケットアナリスト',
    description: 'Vector DBを使わない、動的・一時的な知識ベースでのRAGアーキテクチャを実装。企業名を入力すると、関連ニュースをGNews API経由でリアルタイムに収集。その収集したテキスト全体をその場限りの知識源としてGeminiに提供し、対話的な深掘り分析を可能にします。サーバーサイドキャッシュによる高速化も特徴です。',
    screenshot: '',
    appUrl: 'https://hara0511my-market-analyst.vercel.app/',
    githubUrl: 'https://github.com/tako-chan0511/my-market-analyst',
    tags: ['RAG', 'Caching', 'Serverless', 'Gemini API', 'Markdown', 'Vite', 'TypeScript', 'GNews API'],
    learnings: {
      challenge: '同一企業への分析リクエストが頻発した場合の、APIコストの増大とレスポンス遅延。また、一般的なLLMの知識だけでは、直近の企業ニュースに基づいた専門的な質疑応答が困難でした。',
      solution: 'サーバーレス関数（BFF）にキャッシュ層を導入。GNewsへのリクエストとGeminiによる初期分析結果を、企業名をキーとして1日間キャッシュします。これによりAPIコストを削減し、2回目以降のアクセスを高速化しました。追加質問に対しては、収集したニュース記事本文を知識源とするRAGパイプラインを起動。これにより、最新情報に基づいた専門家レベルの対話を実現しました。',
    },
    features: [ 'サーバーサイドキャッシュ(TTL:1日)による高速化・コスト削減', '収集ニュースを知識源とする動的なRAGチャット機能', 'Geminiによる分析レポートのMarkdown形式での生成', '重要キーワードの自動ハイライトによる可読性向上' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' }, { name: 'marked.js', color: 'bg-gray-700 text-white' } ] },
      { category: 'バックエンド (Serverless)', technologies: [ { name: 'Vercel Functions (BFF)', color: 'bg-black text-white' } ] },
      { category: 'キャッシュ戦略 (ストレージ)', technologies: [ { name: 'Vercel KV (Redis)', color: 'bg-black text-white' } ] },
      { category: 'RAG検索対象', technologies: [ { name: '動的ニュース記事 (キャッシュ)', color: 'bg-purple-200 text-purple-800' } ] },
      { category: 'AI', technologies: [ { name: 'Gemini API', color: 'bg-red-200 text-red-800' } ] },
      { category: '外部API', technologies: [ { name: 'GNews API', color: 'bg-blue-800 text-white' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 5,
    title: 'AIニュースダイジェスト',
    description: 'ユーザーが選択した単一の記事に特化した、動的なRAGアーキテクチャ。GNews APIで記事リストを取得後、選択された記事の本文をサーバーレス関数でスクレイピング。その抽出テキストをその場限りの知識源としてGeminiに与えることで、ユーザーは記事内容について「この記事の〇〇とは？」といった対話的な深掘りができます。',
    screenshot: '',
    appUrl: 'https://hara0511my-daily-digest.vercel.app/',
    githubUrl: 'https://github.com/tako-chan0511/my-daily-digest',
    tags: ['RAG', 'Web Scraping', '3-pane UI', 'Gemini API', 'Markdown', 'Vite', 'TypeScript', 'GNews API'],
    learnings: {
      challenge: '多様なHTML構造を持つニュースサイトからの安定した本文抽出。また、単なる要約に留まらず、ユーザーが記事内容について対話的に深掘りできる仕組みの構築が技術的な課題でした。',
      solution: 'バックエンドでPuppeteerを用いたスクレイピング関数をサーバーレスで実行し、本文を抽出してMarkdown形式に変換。ユーザーが記事を選択した際、この抽出テキストをその場限りの知識ベースとするRAGパイプラインを起動します。これにより、Geminiは記事の文脈に沿った正確な回答を生成でき、ユーザーは「この記事の〇〇について、もっと詳しく教えて」といった対話的な深掘りが可能になりました。',
    },
    features: [ 'GNews APIによるキーワード検索', 'サーバーレス関数での動的Webスクレイピング', '記事内容に基づくRAG（検索拡張生成）チャット機能', '3ペイン構成による優れたUX/UI', 'Markdownによるリッチな本文表示' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' }, { name: 'marked.js', color: 'bg-gray-700 text-white' } ] },
      { category: 'バックエンド (Serverless)', technologies: [ { name: 'Vercel Functions', color: 'bg-black text-white' }, { name: 'Puppeteer', color: 'bg-teal-200 text-teal-800' } ] },
      { category: 'RAG検索対象', technologies: [ { name: 'スクレイピングした記事本文', color: 'bg-purple-200 text-purple-800' } ] },
      { category: 'AI', technologies: [ { name: 'Gemini API', color: 'bg-red-200 text-red-800' } ] },
      { category: '外部API', technologies: [ { name: 'GNews API', color: 'bg-blue-800 text-white' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 6,
    title: 'AI統計アナリスト',
    description: '文章検索を行うRAGとは異なり、構造化データ（JSON）の分析に特化したAI活用アーキテクチャ。政府統計の総合窓口（e-stat）APIと連携し、BFFが統計データをAIが扱いやすい形式に整形。そのデータ全体をGeminiに渡して、相関関係や背景の深掘り分析を対話的に行います。',
    screenshot: '',
    appUrl: 'https://hara0511ai-stat-analyst.vercel.app/',
    githubUrl: 'https://github.com/tako-chan0511/ai-stat-analyst',
    tags: ['e-stat API', 'BFF', 'Serverless', 'Gemini API', 'データ可視化', 'Vite', 'TypeScript'],
    learnings: {
      challenge: 'e-stat APIのレスポンスは階層が深く、そのままではフロントエンドでの扱いやAIへの入力が困難。また、APIキーをクライアントサイドに露出させることはできない。',
      solution: 'Vercel FunctionsでBFF（Backend for Frontend）層を構築。BFFがAPIキーを安全に管理し、e-statからのRAWデータを必要な情報（項目名、値、単位など）だけに絞り込んだシンプルなJSONに加工してからフロントに返却。これによりフロントエンドの実装を簡略化し、AIには分析に不要なメタデータを与えないことで、トークン効率と分析精度の向上を両立させた。',
    },
    features: [ 'BFF(サーバーレス関数)によるe-stat APIの安全な中継', 'キーワードによる統計データの検索・絞り込み機能', '選択された統計データの動的なグラフ描画', 'Geminiによる相関関係や背景の深掘り分析' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' }, { name: 'Chart.js', color: 'bg-pink-200 text-pink-800' } ] },
      { category: 'バックエンド (Serverless)', technologies: [ { name: 'Vercel (BFF)', color: 'bg-black text-white' } ] },
      { category: 'AI', technologies: [ { name: 'Gemini API', color: 'bg-red-200 text-red-800' } ] },
      { category: '外部API', technologies: [ { name: 'e-stat API', color: 'bg-blue-800 text-white' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 7,
    title: 'AI政権比較アナリスト',
    description: '大規模かつ恒久的な知識ベースを扱う、Vector DBを活用した本格的なRAGアーキテクチャ。各政党の公式サイトから最新の政策情報をリアルタイムで収集・ベクトル化してDBに蓄積。ユーザーの質問に対し、意味が最も近い情報をDBから検索してGeminiに提供することで、常に最新かつ正確な情報源に基づいた深い分析レポートを生成します。',
    screenshot: '',
    appUrl: 'https://hara0511jp-politics.vercel.app/',
    githubUrl: 'https://github.com/tako-chan0511/jp-politics',
    tags: ['RAG', 'Web Scraping', 'Serverless', 'Gemini API', 'Prompt Engineering', 'Vite', 'TypeScript'],
    learnings: {
      challenge: '静的な知識しか持たないLLMに、常に変化する最新の政党の政策について分析させること。また、Webスクレイピングは対象サイトの構造変更に弱く、メンテナンスコストが高い点が課題でした。',
      solution: 'アーキテクチャを工夫し、Vercel Functions等のサーバーレス環境で定期的にスクレイピング処理を実行。収集したテキストデータをチャンク（断片）に分割し、ベクトルデータベースに保存するRAGパイプラインを構築しました。ユーザーからの質問に対し、関連性の高いテキストチャンクを検索してプロンプトに埋め込むことで、Geminiは常に最新の一次情報源に基づいて回答を生成できます。これにより、LLMの知識を動的に拡張し、ハルシネーション（幻覚）を大幅に抑制することに成功しました。',
    },
    features: [ 'サーバーレス関数による定期的なWebスクレイピング実行', '収集データのベクトル化とデータベースへの保存', 'RAGによるLLMの知識ベースの動的拡張', '中立性を担保するための役割（ロール）設定プロンプト' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' } ] },
      { category: 'バックエンド (Serverless)', technologies: [ { name: 'Vercel Functions', color: 'bg-black text-white' }, { name: 'Puppeteer', color: 'bg-teal-200 text-teal-800' } ] },
      { category: 'AI', technologies: [ { name: 'Gemini API', color: 'bg-red-200 text-red-800' } ] },
      { category: 'データベース', technologies: [ { name: 'Supabase (pgvector)', color: 'bg-emerald-300 text-emerald-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 8,
    title: '料理レシピ提案アプリ',
    description: '楽天レシピカテゴリランキングAPIと連携し、人気のレシピを多彩な条件で検索できるアプリケーション。複雑なパラメータを組み合わせるロジックをBFF(Backend for Frontend)に集約することで、フロントエンドの責務を分離し、保守性と拡張性を高めた設計になっています。',
    screenshot: '',
    appUrl: 'https://hara0511my-recipes.vercel.app/',
    githubUrl: 'https://github.com/tako-chan0511/my-recipes',
    tags: ['Vue 3', 'BFF', 'Rakuten API', 'State Management', 'Vite', 'TypeScript'],
    learnings: {
      challenge: 'カテゴリ、調理時間、予算など複数の絞り込み条件を組み合わせた動的なAPIリクエストの構築。これらの複雑な状態管理をすべてフロントエンドで行うと、コンポーネントが肥大化し、見通しが悪くなる懸念がありました。',
      solution: 'フロントエンドはUIの状態（どのボタンが押されているか等）の管理に専念させ、BFF（サーバーレス関数）側でそれらの状態を解釈して楽天APIへのリクエストURLを組み立てる責務分離のアーキテクチャを採用。これによりフロントエンドは「何をしたいか」だけをBFFに伝えればよく、複雑なロジックから解放され、コードの可読性と保守性が大幅に向上しました。',
    },
    features: [ '楽天APIと連携したカテゴリ別レシピランキング表示', '調理時間・予算など、複数の条件を組み合わせた絞り込み機能', 'BFFによるAPIリクエストロジックのカプセル化', '将来的なAI機能（献立提案など）の追加を見据えた拡張性の高い設計' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' } ] },
      { category: 'バックエンド (Serverless)', technologies: [ { name: 'Vercel (BFF)', color: 'bg-black text-white' } ] },
      { category: '外部API', technologies: [ { name: 'Rakuten API', color: 'bg-red-600 text-white' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 9,
    title: 'ブックマーク管理アプリ',
    description: 'SupabaseをBaaSとして採用した、個人認証付きのブックマーク管理PWA。認証情報とブックマークデータをPostgreSQLで一元管理し、RLS(Row Level Security)で堅牢なデータ保護を実現。認証不要で機能を試せるサンドボックスモードも搭載し、モバイルフレンドリーなUIとPWA対応で、どこからでも快適に利用できます。',
    screenshot: '',
    appUrl: 'https://hara0511bookmark-manager.vercel.app/',
    githubUrl: 'https://github.com/tako-chan0511/bookmark-manager',
    tags: ['Supabase', 'PWA', 'Auth', 'PostgreSQL', 'Vue 3', 'Vite', 'TypeScript'],
    learnings: {
      challenge: 'ユーザー毎にデータを完全に分離するセキュアなマルチテナントDBの実現と、認証状態に応じて「本番モード」と「サンドボックスモード」をシームレスに切り替える状態管理が課題でした。',
      solution: 'SupabaseのRLS（行単位セキュリティ）ポリシーを活用。「`auth.uid() = user_id`」というルールをテーブルに適用し、SQLレベルでユーザーが自身のデータしか操作できないよう強制しました。フロントエンドでは、ユーザーの認証状態をリアクティブに監視し、未認証時は`localStorage`をデータソースとするサンドボックスモード、認証後はSupabaseクライアントをデータソースとする本番モードに動的に切り替えるロジックを実装しました。',
    },
    features: [ 'Supabase Authによるメール・パスワード認証', 'RLSによるユーザーデータの厳格なアクセス制御', 'キーワードと複数タグによるAND/OR検索機能', '認証不要で試せるサンドボックスモード', 'PWA対応（オフライン動作、インストール機能）' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' }, { name: 'Tailwind CSS', color: 'bg-sky-200 text-sky-800' } ] },
      { category: 'バックエンド (BaaS)', technologies: [ { name: 'Supabase Auth', color: 'bg-emerald-300 text-emerald-900' } ] },
      { category: 'データベース', technologies: [ { name: 'Supabase (PostgreSQL)', color: 'bg-sky-300 text-sky-900' } ] },
      { category: 'キャッシュ戦略', technologies: [ { name: 'オフライン (Service Worker)', color: 'bg-gray-300 text-gray-900' }, { name: 'クライアントサイド (localStorage)', color: 'bg-gray-300 text-gray-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 10,
    title: '天気予報アプリ',
    description: '複数の外部APIとCDNライブラリを連携させた、リッチなUIを持つ天気予報PWA。LocationIQ APIで地名・住所から緯度経度を割り出し（ジオコーディング）、OpenWeatherMap APIで詳細な気象情報を取得。結果はLeaflet.js製のインタラクティブ地図上に表示されます。気象情報に合わせたサウンドをtone.jsで再生するなど、遊び心のある機能も搭載しています。',
    screenshot: '',
    appUrl: 'https://hara0511weather-app.vercel.app/',
    githubUrl: 'https://github.com/tako-chan0511/weather-app',
    tags: ['Web API', 'Leaflet.js', 'PWA', 'Vanilla JS', 'Vite', 'TypeScript', 'LocationIQ API'],
    learnings: {
      challenge: '複数の外部サービス（API、CDN）に依存するため、それぞれの非同期処理の順序制御とエラーハンドリングが複雑化。特に、ジオコーディングAPIの成功を待ってから気象情報APIを呼び出す、といった処理の連鎖をいかに綺麗に書くかが課題でした。',
      solution: 'async/await構文を全面的に採用し、非同期処理のフローを同期的で読みやすいコードに改善。APIリクエスト部分を責務ごとにモジュール化し、例えば`LocationService`が緯度経度を返し、`WeatherService`がそれを引き受ける形に設計。これにより、各サービスは自身の役割に専念でき、コードの再利用性とテスト容易性が向上しました。',
    },
    features: [ '都市名・住所・地図クリックによる多彩な地点指定', 'Leaflet.jsによるインタラクティブ地図表示', 'OpenWeatherMap APIによる詳細な気象データ取得', 'tone.jsによる気象サウンドの再生', 'PWA対応（オフライン動作、インストール機能）' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' } ] },
      { category: '外部API', technologies: [ { name: 'OpenWeatherMap API', color: 'bg-blue-500 text-white' }, { name: 'LocationIQ API', color: 'bg-purple-500 text-white' } ] },
      { category: 'ライブラリ', technologies: [ { name: 'Leaflet.js', color: 'bg-green-500 text-white' }, { name: 'tone.js', color: 'bg-orange-400 text-white' } ] },
      { category: 'キャッシュ戦略', technologies: [ { name: 'オフライン (Service Worker)', color: 'bg-gray-300 text-gray-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 11,
    title: 'MelodyCanvas',
    description: 'Web上でピアノ演奏を録音し、楽譜として可視化・編集できる音楽シーケンサー。tone.jsでWeb Audio APIを抽象化し、正確なタイミングでの音声再生と録音を実現。演奏データはVexFlowによってリアルタイムで五線譜にレンダリングされます。Piniaストアで演奏データや再生状態を一元管理し、localStorageへの永続化も行っています。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/melodycanvas/',
    githubUrl: 'https://github.com/tako-chan0511/melodycanvas',
    tags: ['Web Audio', 'Music', 'VexFlow', 'Pinia', 'Vue 3', 'Vite', 'TypeScript'],
    learnings: {
      challenge: 'tone.jsが管理する音声イベントのタイミングと、VexFlowが描画する楽譜、そしてユーザーのUI操作（再生ボタンなど）を完全に同期させること。また、内部の音楽データ構造を、VexFlowの楽譜描画用フォーマットとMIDIファイル用フォーマットの両方に変換する必要がありました。',
      solution: 'アプリケーションの状態（再生中か、現在の再生位置など）をすべてPiniaストアに集約。各コンポーネントはこのストアをリアクティブに監視し、状態に応じて自身の描画を更新します。例えば、再生位置が変わるたびにVexFlowの楽譜上の対応する音符をハイライトする、といった処理を実装。データ変換については、内部データを各形式にマッピングする専用のユーティリティ関数（Adapterパターン）を作成し、責務を明確に分離しました。',
    },
    features: [ 'tone.jsによるリアルタイムなピアノ演奏と録音', 'VexFlowによる演奏データの五線譜への動的レンダリング', 'Piniaストアによる状態の一元管理とlocalStorageへの永続化', '演奏データのJSONおよびMIDI形式でのエクスポート機能', '再生速度のリアルタイム調整' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' }, { name: 'Pinia', color: 'bg-yellow-400 text-black' } ] },
      { category: 'Web API', technologies: [ { name: 'Web Audio API', color: 'bg-indigo-200 text-indigo-800' } ] },
      { category: 'ライブラリ', technologies: [ { name: 'tone.js', color: 'bg-orange-400 text-white' }, { name: 'VexFlow', color: 'bg-purple-400 text-white' }, { name: 'MIDI-Writer-JS', color: 'bg-gray-400 text-white' } ] },
      { category: 'キャッシュ戦略', technologies: [ { name: 'クライアントサイド (localStorage)', color: 'bg-gray-300 text-gray-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 12,
    title: 'ラッキーロトシミュレーション',
    description: 'Vue 3とNaive UIで構築された、多機能な宝くじシミュレーション＆管理ツール。Vue RouterによるSPA構成で、各くじ（ナンバーズ4、ロト6）のシミュレーション画面や購入履歴、統計データ画面をコンポーネントとして明確に分離。Piniaストアと永続化プラグインを活用し、すべてのユーザーデータをクライアントサイドで安全に管理します。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/luckylotto',
    githubUrl: 'https://github.com/tako-chan0511/luckylotto',
    tags: ['Vue 3', 'Pinia', 'Vue Router', 'Naive UI', 'Chart.js', 'PWA', 'Vite', 'TypeScript'],
    learnings: {
      challenge: 'シミュレーションのエントリー、購入履歴、統計データなど、アプリ全体で共有・連動させるべき状態が多岐にわたったこと。特に、複数のコンポーネントから状態を変更し、それをリアクティブに別のコンポーネントのグラフ描画に反映させるロジックが複雑化しました。',
      solution: 'Piniaを導入し、状態管理のロジックをコンポーネントから完全に分離。購入履歴や統計データなどをストアに集約し、各コンポーネントはストアのデータを参照・更新するだけのシンプルな責務にしました。`pinia-plugin-persistedstate`を組み合わせることで、リロードしてもデータが消えない永続化を容易に実現。これにより、複雑な状態遷移も非常に見通しよく管理できるようになりました。',
    },
    features: [ 'ナンバーズ4・ロト6の抽選アルゴリズムシミュレーション', 'Vue RouterによるマルチページSPA構成', 'Piniaストアによる状態の一元管理とlocalStorageへの永続化', 'Naive UIコンポーネントによるリッチなUI構築', 'Chart.jsによる統計データのグラフ可視化', 'PWA対応（オフライン動作、インストール機能）' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' }, { name: 'Pinia', color: 'bg-yellow-400 text-black' }, { name: 'Vue Router', color: 'bg-green-300 text-green-900' }, { name: 'Naive UI', color: 'bg-teal-200 text-teal-800' }, { name: 'Chart.js', color: 'bg-pink-200 text-pink-800' } ] },
      { category: 'キャッシュ戦略', technologies: [ { name: 'オフライン (Service Worker)', color: 'bg-gray-300 text-gray-900' }, { name: 'クライアントサイド (localStorage)', color: 'bg-gray-300 text-gray-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 13,
    title: 'CSS初心者向け練習アプリ',
    description: 'CSSのプロパティを視覚的・対話的に学習できるサンドボックス環境。DOM要素を直接ドラッグ＆ドロップで配置・リサイズしたり、専用のUI（スライダーやカラーピッカー）でスタイルをリアルタイムに変更可能。変更は即座にプレビューとコードに反映され、直感的なトライ＆エラーを通じてCSSの挙動を深く理解できます。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/cssvisualizer/',
    githubUrl: 'https://github.com/tako-chan0511/cssvisualizer',
    tags: ['Vanilla JS', 'DOM', 'CSS', 'UI/UX', 'PWA', 'Vite', 'TypeScript'],
    learnings: {
      challenge: 'プレビュー画面上のDOM要素への操作（ドラッグ等）と、UIコントロール（スライダー等）からの変更、そしてコード表示という3者間の状態を完全に同期させること。いずれか一つを変更した際に、他の二つが遅延なく、かつ正確に追従するリアクティブなシステムの構築が最大の課題でした。',
      solution: 'すべての状態（各要素の位置、サイズ、色など）を単一のJavaScriptオブジェクトとして一元管理する「Single Source of Truth」の設計パターンを採用。DOMイベントリスナーとUIコントロールの入力イベントは、すべてこの中央オブジェクトを更新するだけとし、オブジェクトの変更を監視するメインの描画関数が、差分を検知してプレビューとコード表示を再レンダリングするアーキテクチャを構築しました。',
    },
    features: [ 'ドラッグ＆ドロップによる直感的な要素配置', 'スライダーやカラーピッカーによるリアルタイムなスタイル編集', '変更と即座に同期するCSSコードの自動生成', 'FlexboxやGridなど、主要なレイアウトシステムの視覚的学習', 'PWA対応（オフライン動作、インストール機能）' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' } ] },
      { category: 'ライブラリ', technologies: [ { name: 'Interact.js', color: 'bg-pink-300 text-pink-900' } ] },
      { category: 'キャッシュ戦略', technologies: [ { name: 'オフライン (Service Worker)', color: 'bg-gray-300 text-gray-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 14,
    title: 'キーボードタイピング練習アプリ (Typing Fall)',
    description: 'ゲーム感覚でタイピングスキルを向上させるためのPWA。落下してくる単語を消していく「ゲームモード」と、正しい指使いを覚える「徹底練習モード」を搭載。リアルタイムな入力判定と、視覚・聴覚フィードバックによる高い没入感が特徴です。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/typingfall/',
    githubUrl: 'https://github.com/tako-chan0511/typingfall',
    tags: ['GameDev', 'Vanilla JS', 'PWA', 'DOM', 'Vite', 'TypeScript'],
    learnings: {
      challenge: 'ゲームのメインループ（落下処理、入力判定、スコア更新）と、DOMの描画（単語の移動、キーボードのハイライト）を、パフォーマンスを損なうことなく滑らかに同期させること。特に、フレーム毎の状態更新と描画ロジックの分離が課題でした。',
      solution: '`requestAnimationFrame`で安定したゲームループを構築。ゲームの状態（スコア、レベル、単語の位置など）をすべて単一の`gameState`オブジェクトで管理。ループ内では、まず状態を更新するロジックを実行し、その変更された`gameState`に基づいてDOM要素のスタイルを一括で更新する、という明確な責務分離を行いました。これにより、不要な再描画を防ぎ、パフォーマンスを最適化しました。',
    },
    features: [ 'requestAnimationFrameによる滑らかなゲームループ', '練習モードと、難易度別のゲームモード', '入力キーと指位置のリアルタイムアシスト表示', '正解・不正解時のサウンドエフェクト', 'PWA対応（オフライン動作、インストール機能）' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' } ] },
      { category: 'キャッシュ戦略', technologies: [ { name: 'オフライン (Service Worker)', color: 'bg-gray-300 text-gray-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 15,
    title: '数独（ナンプレ）＆ソルバー・トレーニング',
    description: '純粋なJavaScriptで実装された、高機能な数独PWA。難易度別の問題生成、盤面サポート機能に加え、解法テクニックを解説する独自の「トレーニングモード」を搭載。ロジックの核心部である問題生成・解決アルゴリズムと、81マスに及ぶ盤面の複雑な状態管理が技術的な見どころです。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/sudoku/',
    githubUrl: 'https://github.com/tako-chan0511/sudoku',
    tags: ['Algorithm', 'Vanilla JS', 'PWA', 'Logic', 'Vite', 'TypeScript'],
    learnings: {
      challenge: '再帰的なバックトラッキング（深さ優先探索）アルゴリズムによる問題生成と解答ロジックの実装。特に、人間が解ける範囲の良問を生成するための適切なヒント数の調整と、トレーニングモードで特定の解法パターン（例：予約、三国同盟）を盤面から認識させるロジックの構築が複雑でした。',
      solution: '数独のロジック（検証、解答、パターン認識）をUIのDOM操作から完全に分離したモジュールとして設計。盤面の状態は多次元配列で管理し、すべての操作はこの配列を更新する関数を介して行われます。UIは状態配列の変更を検知して再描画するだけのシンプルな構造にすることで、複雑なアルゴリズムの実装に集中できました。',
    },
    features: [ 'バックトラッキング法による問題生成とソルバー機能', '解法テクニックをステップ・バイ・ステップで学べるトレーニングモード', '候補数字のメモ機能や、矛盾箇所のハイライトなどの盤面サポート', 'localStorageを利用した盤面の状態保存・復元機能', 'PWA対応（オフライン動作、インストール機能）' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' } ] },
      { category: 'コアロジック', technologies: [ { name: 'Algorithm Design', color: 'bg-purple-200 text-purple-800' } ] },
      { category: 'キャッシュ戦略', technologies: [ { name: 'オフライン (Service Worker)', color: 'bg-gray-300 text-gray-900' }, { name: 'クライアントサイド (localStorage)', color: 'bg-gray-300 text-gray-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 16,
    title: 'オセロ（リバーシ）',
    description: 'Vue 3のComposition APIで構築された、クラシックなオセロゲーム。最大の特徴は、8x8の標準盤面だけでなく、4x4から24x24まで盤面サイズを動的に変更できる点です。ゲームのコアロジックとUIコンポーネントを分離し、Vueのリアクティブな特性を活かして、盤面の状態変更を即座に描画に反映させています。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/othello-Vue3-/',
    githubUrl: 'https://github.com/tako-chan0511/othello-Vue3-',
    tags: ['Vue 3', 'Algorithm', 'GameDev', 'PWA', 'Vite', 'TypeScript'],
    learnings: {
      challenge: '盤面サイズが可変であるため、石を置ける場所の判定や、石を裏返すロジックを、特定の盤面サイズに依存しない汎用的なアルゴリズムとして実装する必要があったこと。8方向すべてに対して、どこまで石を裏返せるかを動的に計算するロジックの設計が最も挑戦的でした。',
      solution: '盤面の状態を二次元配列で管理。ユーザーがマスをクリックした際、そのマスを起点として8方向（上下左右、斜め4方向）への探索をループで実行する関数を実装。各方向に対して、相手の石が連続し、その先に自分の石が存在するかを判定し、裏返せる石の座標をリストアップします。このロジックを盤面サイズに依存しない形にしたことで、任意のサイズの盤面に対応可能となりました。',
    },
    features: [ '4x4から24x24までの動的な盤面サイズ変更機能', '石を置ける場所をハイライト表示するサポートモード', '「一手戻す」機能とゲーム履歴の表示', 'PWA対応（オフライン動作、インストール機能）' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' } ] },
      { category: 'コアロジック', technologies: [ { name: 'Algorithm Design', color: 'bg-purple-200 text-purple-800' } ] },
      { category: 'キャッシュ戦略', technologies: [ { name: 'オフライン (Service Worker)', color: 'bg-gray-300 text-gray-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 17,
    title: 'パズルスライダー N×M',
    description: '正方形に限らず、N×Mの任意の盤面サイズで遊べるスライドパズル。純粋なJavaScriptで実装されており、状態管理とDOM操作の基本に忠実な設計が特徴です。アルゴリズムの核心は、常に解くことが可能な盤面を生成するシャッフルロジックにあります。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/slidepuzzle/',
    githubUrl: 'https://github.com/tako-chan0511/slidepuzzle',
    tags: ['Algorithm', 'Vanilla JS', 'PWA', 'DOM', 'Vite', 'TypeScript'],
    learnings: {
      challenge: 'パズルをランダムにシャッフルした際に、物理的に解くことが不可能な配置（アンソルバブル）になってしまう問題。また、N×Mという非正方格子におけるタイルの移動可能性判定ロジックの一般化が課題でした。',
      solution: '完全にランダムな配置を生成するのではなく、まず完成状態の盤面を用意し、そこから空きマスをランダムに動かす操作を数百回繰り返すことで、「解けることが保証された」シャッフル盤面を生成するアルゴリズムを採用しました。これにより、ユーザーが絶対にクリアできないという状況を回避しています。',
    },
    features: [ '行と列を個別に指定できるN×M盤面生成機能', '解けることが保証されたシャッフルアルゴリズム', '空きマスと同じ行・列のタイルを一括で移動させる便利機能', 'PWA対応（オフライン動作、インストール機能）' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' } ] },
      { category: 'コアロジック', technologies: [ { name: 'Algorithm Design', color: 'bg-purple-200 text-purple-800' } ] },
      { category: 'キャッシュ戦略', technologies: [ { name: 'オフライン (Service Worker)', color: 'bg-gray-300 text-gray-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 18,
    title: '神経衰弱 (Matching Game) N×M',
    description: 'N×Mの任意の盤面サイズでプレイできる、クラシックな神経衰弱ゲーム。ゲームの状態遷移（1枚目選択中、2枚目選択中、評価中など）を管理するロジックと、ユーザーの連続クリックを防止するUI制御が開発のポイントです。Vanilla JSで実装されており、フロントエンドの基本的な状態管理のプラクティスが詰まっています。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/matchinggame',
    githubUrl: 'https://github.com/tako-chan0511/matchinggame',
    tags: ['GameDev', 'Vanilla JS', 'PWA', 'State Management', 'Vite', 'TypeScript'],
    learnings: {
      challenge: '2枚のカードをめくった後の評価中（正解か不正解かを見せるための数秒間）に、ユーザーが3枚目のカードをクリックできてしまう問題。これにより、ゲームのロジックが破綻する可能性がありました。',
      solution: 'ゲーム盤全体を覆う透明なオーバーレイ要素を用意し、CSSの`pointer-events`プロパティを活用。2枚目のカードをクリックした直後にオーバーレイを表示してマウスクリックを無効化（`pointer-events: auto`）し、評価が終わった後に`setTimeout`で非表示にする（`pointer-events: none`）ことで、意図しないユーザー操作を完全にブロックする堅牢なUIを実現しました。',
    },
    features: [ '行と列を個別に指定できるN×M盤面生成機能', 'Fisher-Yatesアルゴリズムによるカードのシャッフル', '一定時間すべてのカードをプレビューできる「チラ見」機能', 'PWA対応（オフライン動作、インストール機能）' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' } ] },
      { category: '状態管理', technologies: [ { name: 'State Management', color: 'bg-red-200 text-red-800' } ] },
      { category: 'キャッシュ戦略', technologies: [ { name: 'オフライン (Service Worker)', color: 'bg-gray-300 text-gray-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 19,
    title: 'マインスイーパ N×M',
    description: 'Vue 3で構築された、盤面サイズと地雷数を自由にカスタマイズできるマインスイーパ。ゲームのコアロジックは、ユーザーの最初のクリックが絶対に地雷にならない「安全な初回クリック」の保証と、空白マスが連鎖的に開く「再帰的探索アルゴリズム」の実装にあります。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/Minesweeper/',
    githubUrl: 'https://github.com/tako-chan0511/Minesweeper',
    tags: ['Vue 3', 'Algorithm', 'GameDev', 'PWA', 'Vite', 'TypeScript'],
    learnings: {
      challenge: 'ユーザーが最初にクリックしたマスとその周囲には地雷を配置しないロジックと、数字のないマスをクリックした際に隣接する安全なマスをすべて自動で開く、いわゆる「空白連鎖」の効率的な実装が課題でした。',
      solution: '地雷の配置処理を、ユーザーの最初のクリックイベントが発生した後に実行するアーキテクチャを採用。クリックされた座標を除外して地雷をランダムに配置することで、安全な初回クリックを保証しました。空白連鎖については、クリックされたマスを起点とするキュー（Queue）を用いた幅優先探索（BFS）アルゴリズムを実装。これにより、再帰呼び出しによるスタックオーバーフローのリスクを回避しつつ、連鎖的に開くマスを効率的に特定できました。',
    },
    features: [ '幅・高さ・地雷数を自由に設定できる盤面生成機能', '最初のクリックが必ず安全マスになるアルゴリズム', '幅優先探索（BFS）による空白マスの連鎖展開', '右クリックによる旗立て・解除機能', 'PWA対応（オフライン動作、インストール機能）' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' } ] },
      { category: 'コアロジック', technologies: [ { name: 'Algorithm Design', color: 'bg-purple-200 text-purple-800' } ] },
      { category: 'キャッシュ戦略', technologies: [ { name: 'オフライン (Service Worker)', color: 'bg-gray-300 text-gray-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 20,
    title: 'テトリス (Tetris)',
    description: 'Vue 3のComposition APIとリアクティブな状態管理を駆使して実装された、クラシックなテトリスゲーム。ゲームループ、テトリミノ（ブロック）の移動・回転ロジック、衝突判定、そして行の消去といった、リアルタイムゲームの基本的な要素がすべて純粋なVueの機能で構築されています。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/tetris/',
    githubUrl: 'https://github.com/tako-chan0511/tetris/',
    tags: ['Vue 3', 'GameDev', 'Algorithm', 'PWA', 'Vite', 'TypeScript'],
    learnings: {
      challenge: 'ゲームの状態（盤面、現在のテトリミノの位置・形状、スコア等）をVueのリアクティブシステムとどう同期させるか。特に、`setInterval`で実行されるゲームループ内で状態を更新し、それをDOMに効率的に反映させること、そしてテトリミノの回転時に壁や他のブロックとの衝突を正確に判定する「ウォールキック」の実装が課題でした。',
      solution: '盤面の状態をVueの`ref`で定義した二次元配列で管理。ゲームループは`setInterval`で実装し、ループごとにテトリミノを1段落下させるロジック（配列の更新）を実行します。Vueのリアクティビティにより、この配列への変更は自動的にDOM（CSS Gridで構築した盤面）に反映されます。衝突判定や回転ロジックは、移動・回転後の仮の座標を計算し、それが盤面の境界内かつ他のブロックと重ならないかをチェックする純粋な関数として分離しました。',
    },
    features: [ 'setIntervalによる安定したゲームループ制御', 'テトリミノの移動・回転・衝突判定アルゴリズム', 'キーボードとタッチ操作の両方に対応したレスポンシブなコントロール', 'ライン消去とスコア・レベルアップ機能', 'PWA対応（オフライン動作、インストール機能）' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' } ] },
      { category: 'コアロジック', technologies: [ { name: 'Algorithm Design', color: 'bg-purple-200 text-purple-800' } ] },
      { category: 'キャッシュ戦略', technologies: [ { name: 'オフライン (Service Worker)', color: 'bg-gray-300 text-gray-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 21,
    title: 'ブロック崩し (Breakout)',
    description: 'Vue 3のリアクティブな状態管理と`<canvas>`要素を組み合わせて構築された、クラシックなブロック崩しゲーム。ゲームの全要素（ボール、パドル、ブロック）の状態をVueの`reactive`オブジェクトで一元管理し、`requestAnimationFrame`で駆動するゲームループがその状態を毎フレーム`<canvas>`に描画します。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/breakout/',
    githubUrl: 'https://github.com/tako-chan0511/breakout/',
    tags: ['Vue 3', 'Canvas', 'GameDev', 'PWA', 'Vite', 'TypeScript'],
    learnings: {
      challenge: 'Vueの宣言的なレンダリング（テンプレート）と、`<canvas>`の命令的な描画APIをどう融合させるか。特に、Vueのリアクティブな状態変更をトリガーにして、パフォーマンスを維持しつつ`<canvas>`全体を効率的に再描画するアーキテクチャの設計が課題でした。',
      solution: 'Vueコンポーネントの`onMounted`ライフサイクルフックで`<canvas>`のコンテキストを取得し、ゲームループを開始。ループ内では、ボールの移動や衝突判定などの物理演算ロジックを実行して`reactive`な状態オブジェクトを更新します。Vueの`watch`機能を使ってこの状態オブジェクトの変更を監視し、変更があったフレームでのみ`<canvas>`のクリアと再描画を行う関数を呼び出します。これにより、状態管理はVueに任せ、描画は`requestAnimationFrame`に最適化させることができました。',
    },
    features: [ 'requestAnimationFrameによる滑らかなゲームループ', 'Vueのリアクティブな状態管理とCanvas APIの連携', '矩形ベースのシンプルな衝突判定アルゴリズム', 'パドル幅やボールの色を動的に変更できるカスタマイズ機能', 'PWA対応（オフライン動作、インストール機能）' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' } ] },
      { category: '描画', technologies: [ { name: 'Canvas API', color: 'bg-red-300 text-red-900' } ] },
      { category: 'キャッシュ戦略', technologies: [ { name: 'オフライン (Service Worker)', color: 'bg-gray-300 text-gray-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 22,
    title: 'ブロック崩し (Next.js/React版)',
    description: 'Vue 3で実装したブロック崩しをNext.jsとReact Hooksで再構築した技術研究プロジェクト。同じゲームロジックを異なるフレームワークで実装することで、それぞれの状態管理やレンダリングの思想の違いを深く探求することを目的としています。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/breakout-next/',
    githubUrl: 'https://github.com/tako-chan0511/breakout-next',
    tags: ['Next.js', 'React', 'Canvas', 'GameDev', 'Hooks', 'PWA', 'Vite', 'TypeScript'],
    learnings: {
      challenge: 'Vueのリアクティブシステム（`reactive`）からReactのHooks（`useState`, `useRef`, `useEffect`）への思考の切り替え。特に、`requestAnimationFrame`のゲームループ内で毎フレーム更新されるボールの座標などを`useState`で管理すると、過剰な再レンダリングを引き起こしパフォーマンスが低下する問題がありました。',
      solution: 'パフォーマンスに影響するゲーム状態（ボールの座標や速度など）は`useRef`で管理し、再レンダリングを発生させずに値を保持・更新。スコアやライフなど、UIの表示更新が必要な状態のみを`useState`で管理する責務分離を行いました。ゲームループは`useEffect`内で開始・停止を制御することで、Reactのコンポーネントライフサイクルに沿った安全な実装を実現しました。',
    },
    features: [ 'VueからReact/Next.jsへのフレームワーク移植研究', 'React Hooks (`useState`, `useRef`, `useEffect`) による状態管理', 'requestAnimationFrameによる滑らかなゲームループ', '矩形ベースのシンプルな衝突判定アルゴリズム', 'PWA対応（オフライン動作、インストール機能）' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Next.js', color: 'bg-black text-white' }, { name: 'React (Hooks)', color: 'bg-cyan-200 text-cyan-800' } ] },
      { category: '描画', technologies: [ { name: 'Canvas API', color: 'bg-red-300 text-red-900' } ] },
      { category: 'キャッシュ戦略', technologies: [ { name: 'オフライン (Service Worker)', color: 'bg-gray-300 text-gray-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 23,
    title: '二桁の2乗暗算ゲーム (Streamlit版)',
    description: 'PythonのWebアプリケーションフレームワークであるStreamlitを用いて開発した、暗算トレーニングアプリ。フロントエンドの知識がなくても、PythonだけでインタラクティブなUIを構築できるStreamlitの特性を探求。状態管理の仕組みがJavaScriptフレームワークと大きく異なる点が技術的なハイライトです。',
    screenshot: '',
    appUrl: 'https://squared-cypmgjuwvks8uqqehiuy2p.streamlit.app/',
    githubUrl: 'https://github.com/tako-chan0511/sq2',
    tags: ['Python', 'Streamlit', 'State Management'],
    learnings: {
      challenge: 'Streamlitはユーザーの操作ごとにスクリプト全体を再実行するため、ゲームの状態（現在の問題、スコアなど）を保持する標準的な方法がJavaScriptフレームワークとは全く異なった。変数を単純に宣言するだけでは、インタラクションのたびに初期化されてしまう。',
      solution: 'Streamlitが提供するセッション状態管理機能 `st.session_state` を活用。これは、ユーザーセッションをまたいでデータを永続化させるための辞書ライクなオブジェクトです。ゲームの状態をすべて`st.session_state`に格納し、スクリプトの再実行時にも値が保持されるように設計。これにより、ステートフルなアプリケーションをPythonicに実装できることを学びました。',
    },
    features: [ 'StreamlitによるインタラクティブなUI構築', 'st.session_state を用いた状態管理', '出題範囲を動的に変更できる機能', 'Pythonによるシンプルなゲームロジック実装' ],
    stack: [
      { category: '言語', technologies: [ { name: 'Python', color: 'bg-blue-300 text-blue-900' } ] },
      { category: 'フレームワーク', technologies: [ { name: 'Streamlit', color: 'bg-red-400 text-white' } ] }
    ],
  },
  {
    id: 24,
    title: '二桁の暗算練習アプリ (2乗＆掛け算)',
    description: 'Vue 3で構築された、二桁の2乗と二桁同士の掛け算に特化した暗算トレーニングツール。ユニークな「補助ステップ」機能は、掛け算の筆算過程を視覚的に分解して表示し、ユーザーの思考をサポート。Vue 3のリアクティブなデータバインディングを駆使した、教育的価値の高いUIが特徴です。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/kakezan/',
    githubUrl: 'https://github.com/tako-chan0511/kakezan',
    tags: ['Vue 3', 'UI/UX', 'State Management', 'Algorithm', 'PWA', 'Vite', 'TypeScript'],
    learnings: {
      challenge: '掛け算の筆算過程をUIに落とし込む際の、複雑な状態管理。特に、各桁の計算結果を入力する複数のinput要素と、それらを元に計算される中間結果、そして最終的な答えのすべてをリアクティブに連動させることが課題でした。',
      solution: 'Vue 3のComposition APIと`reactive`を使用し、掛け算のプロセス全体を表現する単一の状態オブジェクトを設計。このオブジェクトには、問題の数値、ユーザーが入力する各ステップの値、計算後の中間結果などが含まれます。UIの各`input`は`v-model`でこのオブジェクトの各プロパティに直接バインド。`watch`や`computed`プロパティを活用し、ユーザーの入力があるたびに中間結果と最終結果を自動的に再計算・表示する仕組みを構築しました。',
    },
    features: [ '二乗数と掛け算の2つの練習モード', '掛け算の筆算過程を視覚的に分解・補助するUI', 'Vueのリアクティビティを活用したリアルタイムな入力・計算処理', '動的な問題生成アルゴリズム', 'PWA対応（オフライン動作、インストール機能）' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' } ] },
      { category: 'コアロジック', technologies: [ { name: 'Algorithm Design', color: 'bg-purple-200 text-purple-800' } ] },
      { category: 'キャッシュ戦略', technologies: [ { name: 'オフライン (Service Worker)', color: 'bg-gray-300 text-gray-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 25,
    title: '立体四並べ (Connect Four)',
    description: 'Vue 3で実装されたクラシックな対戦ゲーム「コネクトフォー」。ロジックの核心は、プレイヤーがコマを落とすたびに、そのマスを起点として縦・横・斜めの4方向に4つコマが連続しているかを判定する、効率的な勝利判定アルゴリズムにあります。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/Connect4/',
    githubUrl: 'https://github.com/tako-chan0511/Connect4/',
    tags: ['Vue 3', 'GameDev', 'Algorithm', 'Logic', 'PWA', 'Vite', 'TypeScript'],
    learnings: {
      challenge: '毎ターン、盤面全体をスキャンして勝利条件をチェックするのは非効率。パフォーマンスを考慮し、いかに判定処理を最適化するかが課題でした。',
      solution: '勝利判定のアルゴリズムを、常に盤面全体ではなく「最後に置かれたコマ」を起点として実行するように設計。そのコマの位置から、縦・横・斜め右上がり・斜め右下がりの4方向（8つの向き）に対して、同じ色のコマがいくつ連続しているかをチェックします。これにより、計算量を大幅に削減し、即座に勝敗を判定できるパフォーマンスを実現しました。',
    },
    features: [ 'Vue 3のリアクティブなデータによる盤面描画', '最後に置かれたコマを起点とする効率的な勝利判定アルゴリズム', '「一手戻す（Undo）」機能', 'ゲームのリスタート機能', 'PWA対応（オフライン動作、インストール機能）' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' } ] },
      { category: 'コアロジック', technologies: [ { name: 'Algorithm Design', color: 'bg-purple-200 text-purple-800' } ] },
      { category: 'キャッシュ戦略', technologies: [ { name: 'オフライン (Service Worker)', color: 'bg-gray-300 text-gray-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 26,
    title: 'ソリティアクラッシック (Vue3版)',
    description: 'Vue 3のComposition APIを用いて、複雑なルールを持つソリティアを実装。山札、場札、組札といった複数のカードの山（パイル）の状態を、単一のリアクティブなオブジェクトとして管理。カードの移動ルール（色違い、数字の連番など）の検証ロジックと、直感的なドラッグ＆ドロップUIの実現が技術的な核心です。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/Solitaire/',
    githubUrl: 'https://github.com/tako-chan0511/Solitaire',
    tags: ['Vue 3', 'GameDev', 'Algorithm', 'State Management', 'UI/UX', 'PWA', 'Vite', 'TypeScript'],
    learnings: {
      challenge: '7つの場札の山、4つの組札の山、山札、捨て札という複雑な状態と、それらの間でカードを移動させる際の厳密なルールセットをどう管理するか。特に、ドラッグ＆ドロップ操作と、その操作がルール上可能かどうかの検証ロジックをどう連携させるかが課題でした。',
      solution: 'ゲーム全体の盤面状態を`reactive`な単一オブジェクトで管理。各パイルをカードオブジェクトの配列として保持しました。カードの移動ロジックは、「移動元のカード」と「移動先のパイル」を引数に取り、ルールに合致するかを判定する純粋な関数としてカプセル化。UI側ではHTML5のDrag and Drop APIを利用し、`dragstart`で移動元カード情報を、`drop`で移動先パイル情報を取得し、この検証関数を呼び出すことで、ロジックとUIを綺麗に分離しました。',
    },
    features: [ 'Vue 3のComposition APIによる複雑な状態管理', 'HTML5 Drag and Drop APIによる直感的なカード操作', '「一手戻す」機能と、ゲームクリア時の「自動完了」機能', 'ダブルクリックによる組札への自動移動', 'PWA対応（オフライン動作、インストール機能）' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' } ] },
      { category: '状態管理', technologies: [ { name: 'State Management', color: 'bg-red-200 text-red-800' } ] },
      { category: 'Web API', technologies: [ { name: 'Drag & Drop API', color: 'bg-yellow-200 text-yellow-800' } ] },
      { category: 'キャッシュ戦略', technologies: [ { name: 'オフライン (Service Worker)', color: 'bg-gray-300 text-gray-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 27,
    title: 'Hit & Blow (Vue3版)',
    description: 'Vue 3で構築された、クラシックな数字当てゲーム「Hit & Blow」。桁数を1～10桁まで自由に設定できる練習モードと、コンピュータの思考ルーチンと競う対戦モードを搭載。特に、練習モードの「候補絞り込みサポート」機能は、過去の履歴から論理的にあり得る数字の組み合わせを計算する、高度なアルゴリズムを実装しています。',
    screenshot: '',
    appUrl: 'https://my-hitblow-game.vercel.app/',
    githubUrl: 'https://github.com/tako-chan0511/my-hitblow-game',
    tags: ['Vue 3', 'Algorithm', 'GameDev', 'Logic', 'PWA', 'Vite', 'TypeScript'],
    learnings: {
      challenge: '「候補絞り込みサポート」機能の実装。ユーザーの推測履歴（例：「1234」→「1 Hit, 2 Blow」）が増えるたびに、考えられるすべての数字の組み合わせ（最大10! = 約360万通り）を走査し、過去の履歴すべてと矛盾しないものだけをフィルタリングする必要がありました。この重い処理を、ブラウザをフリーズさせることなく実行することが最大の課題でした。',
      solution: '計算量の多いフィルタリング処理をメインスレッドから切り離すため、Web Workerを導入。UIスレッドとは別のスレッドで候補の計算を行うことで、計算中もユーザーがUIを快適に操作できるようにしました。また、PC対戦モードの思考ルーチンには、残りの候補が最も少なくなるような推測を次の手に選ぶ「ミニマックス法」に近い戦略的アルゴリズムを実装し、手強い対戦相手を実現しました。',
    },
    features: [ '1～10桁まで対応した動的なゲーム設定', '練習モードと、戦略的アルゴリズムを持つPC対戦モード', 'Web Workerによるノンブロッキングな候補絞り込み計算', 'localStorageによるゲーム履歴の永続化', 'PWA対応（オフライン動作、インストール機能）' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' } ] },
      { category: 'コアロジック', technologies: [ { name: 'Algorithm Design', color: 'bg-purple-200 text-purple-800' }, { name: 'Web Workers', color: 'bg-orange-300 text-orange-900' } ] },
      { category: 'キャッシュ戦略', technologies: [ { name: 'オフライン (Service Worker)', color: 'bg-gray-300 text-gray-900' }, { name: 'クライアントサイド (localStorage)', color: 'bg-gray-300 text-gray-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 28,
    title: 'Hit & Blow (React/Next.js版)',
    description: 'Vue版のHit & BlowをReact HooksとNext.jsで再実装した技術探求プロジェクト。同じロジックを異なるパラダイムで実装することで、両フレームワークの状態管理とパフォーマンス最適化のアプローチの違いを比較・学習。特に、計算量の多い候補絞り込み処理の実装方法に大きな違いが現れました。',
    screenshot: '',
    appUrl: 'https://hitblow-next.vercel.app/',
    githubUrl: 'https://github.com/tako-chan0511/hitblow-next',
    tags: ['Next.js', 'React', 'Hooks', 'Algorithm', 'Performance', 'PWA', 'Vite', 'TypeScript'],
    learnings: {
      challenge: 'Vue版ではWeb Workerで解決した重い候補絞り込み処理を、Reactのエコシステム内でどう効率的に扱うか。ユーザーの入力履歴（依存配列）が変化するたびに数百万通りの組み合わせを再計算すると、UIがブロックされてしまう。',
      solution: 'Reactのメモ化Hooksである`useMemo`を活用。候補絞り込みを行う純粋関数を`useMemo`でラップし、その依存配列に推測履歴を指定しました。これにより、履歴が更新された時にのみ計算が実行され、不要な再レンダリング時の再計算を完全に防ぐことができます。Web Workerを使わずにメインスレッドで処理しつつも、Reactのレンダリング最適化機能によって快適なUXを維持するアプローチを学びました。',
    },
    features: [ 'VueからReact/Next.jsへのフレームワーク移植研究', 'React Hooks (`useState`, `useRef`, `useEffect`) による状態管理', '`useMemo`による重い計算処理のメモ化・最適化', 'localStorageへのゲーム履歴の永続化', 'PWA対応（オフライン動作、インストール機能）' ],
    stack: [
      { category: 'フロントエンド', technologies: [ { name: 'Next.js', color: 'bg-black text-white' }, { name: 'React (Hooks)', color: 'bg-cyan-200 text-cyan-800' } ] },
      { category: 'パフォーマンス', technologies: [ { name: '`useMemo`', color: 'bg-green-300 text-green-900' } ] },
      { category: 'キャッシュ戦略', technologies: [ { name: 'オフライン (Service Worker)', color: 'bg-gray-300 text-gray-900' }, { name: 'クライアントサイド (localStorage)', color: 'bg-gray-300 text-gray-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
  {
    id: 29,
    title: 'ゲームハブ (Toppage)',
    description: 'これまで開発した25個のアプリケーションを集約したポータルサイト。静的サイトジェネレーターで構築されたフロントエンドと、Vercel Serverless Functions及びSupabase(PostgreSQL)で構成されたバックエンドを組み合わせた、モダンなJamstackアーキテクチャを採用。各アプリの参照数や「いいね」数を動的に管理・表示します。',
    screenshot: '',
    appUrl: 'https://toppage-five.vercel.app/',
    githubUrl: 'https://github.com/tako-chan0511/toppage/',
    tags: ['Jamstack', 'Vercel', 'Supabase', 'BFF', 'Vue 3', 'Vite', 'TypeScript'],
    learnings: {
      challenge: '静的サイトとして高速な表示を実現しつつ、各ゲームカードの参照数や「いいね」数といった動的なデータをどう扱うか。クライアントから直接DBにアクセスすると、セキュリティやパフォーマンスに問題が生じる。',
      solution: 'フロントエンドとDBの間にVercel Serverless Functionsで構築したBFF(Backend for Frontend)層を設置。フロントエンドはBFFに対してAPIリクエストを送り、BFFがSupabaseクライアントを介して安全にDBと通信します。DBの接続情報はサーバーレス関数の環境変数に設定することで、クライアントサイドへの漏洩を完全に防ぎました。この構成により、静的サイトのメリットを享受しつつ、動的な機能をセキュアかつスケーラブルに実現できました。',
    },
    features: [ 'Vercel Serverless FunctionsによるAPIエンドポイント構築', 'Supabase(PostgreSQL)による参照数・いいね数の永続化', '環境変数を利用した安全なDB認証情報管理', '非同期データフェッチによる動的なカウント表示', '全25個の自作アプリケーションへのランディングページ機能' ],
    stack: [
      { category: 'アーキテクチャ', technologies: [ { name: 'Jamstack', color: 'bg-pink-300 text-pink-900' } ] },
      { category: 'フロントエンド', technologies: [ { name: 'Vue 3', color: 'bg-green-200 text-green-800' } ] },
      { category: 'バックエンド (Serverless)', technologies: [ { name: 'Vercel Functions (BFF)', color: 'bg-black text-white' } ] },
      { category: 'データベース', technologies: [ { name: 'Supabase', color: 'bg-emerald-300 text-emerald-900' }, { name: 'PostgreSQL', color: 'bg-sky-300 text-sky-900' } ] },
      { category: 'ビルド・開発環境', technologies: [ { name: 'Vite', color: 'bg-purple-200 text-purple-800' }, { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' } ] }
    ],
  },
];

// 全てのタグを重複なく取得する
export const allTags = [...new Set(apps.flatMap(app => app.tags))].sort();