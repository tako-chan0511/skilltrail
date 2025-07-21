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
    githubUrl: 'https://github.com/tako-chan0511/skilltrail',
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
    appUrl: '#',
    githubUrl: '#',
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
    appUrl: '#',
    githubUrl: '#',
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
  {
    id: 9,
    title: 'ブックマーク管理アプリ',
    description: 'SupabaseをBaaSとして採用した、個人認証付きのブックマーク管理PWA。認証情報とブックマークデータをPostgreSQLで一元管理し、RLS(Row Level Security)で堅牢なデータ保護を実現。認証不要で機能を試せるサンドボックスモードも搭載し、モバイルフレンドリーなUIとPWA対応で、どこからでも快適に利用できます。',
    screenshot: '',
    appUrl: 'https://hara0511bookmark-manager.vercel.app/',
    githubUrl: 'https://github.com/tako-chan0511/bookmark-manager',
    tags: ['Supabase', 'PWA', 'Auth', 'PostgreSQL', 'Vue 3'],
    learnings: {
      challenge: 'ユーザー毎にデータを完全に分離するセキュアなマルチテナントDBの実現と、認証状態に応じて「本番モード」と「サンドボックスモード」をシームレスに切り替える状態管理が課題でした。',
      solution: 'SupabaseのRLS（行単位セキュリティ）ポリシーを活用。「`auth.uid() = user_id`」というルールをテーブルに適用し、SQLレベルでユーザーが自身のデータしか操作できないよう強制しました。フロントエンドでは、ユーザーの認証状態をリアクティブに監視し、未認証時は`localStorage`をデータソースとするサンドボックスモード、認証後はSupabaseクライアントをデータソースとする本番モードに動的に切り替えるロジックを実装しました。',
    },
    features: [
      'Supabase Authによるメール・パスワード認証',
      'RLSによるユーザーデータの厳格なアクセス制御',
      'キーワードと複数タグによるAND/OR検索機能',
      'Service Workerを利用したPWA対応（オフラインキャッシュ）',
      '認証不要で試せるサンドボックスモード',
    ],
    stack: [
      { name: 'Vue 3', color: 'bg-green-200 text-green-800' },
      { name: 'Supabase', color: 'bg-emerald-300 text-emerald-900' },
      { name: 'PostgreSQL', color: 'bg-sky-300 text-sky-900' },
      { name: 'PWA', color: 'bg-amber-300 text-amber-900' },
      { name: 'Tailwind CSS', color: 'bg-sky-200 text-sky-800' },
    ],
  },
  {
    id: 10,
    title: '天気予報アプリ',
    description: '複数の外部APIとCDNライブラリを連携させた、リッチなUIを持つ天気予報PWA。LocationIQ APIで地名・住所から緯度経度を割り出し（ジオコーディング）、OpenWeatherMap APIで詳細な気象情報を取得。結果はLeaflet.js製のインタラクティブ地図上に表示されます。気象情報に合わせたサウンドをtone.jsで再生するなど、遊び心のある機能も搭載しています。',
    screenshot: '',
    appUrl: 'https://hara0511weather-app.vercel.app/',
    githubUrl: 'https://github.com/tako-chan0511/weather-app',
    tags: ['Web API', 'Leaflet.js', 'PWA', 'Vanilla JS'],
    learnings: {
      challenge: '複数の外部サービス（API、CDN）に依存するため、それぞれの非同期処理の順序制御とエラーハンドリングが複雑化。特に、ジオコーディングAPIの成功を待ってから気象情報APIを呼び出す、といった処理の連鎖をいかに綺麗に書くかが課題でした。',
      solution: 'async/await構文を全面的に採用し、非同期処理のフローを同期的で読みやすいコードに改善。APIリクエスト部分を責務ごとにモジュール化し、例えば`LocationService`が緯度経度を返し、`WeatherService`がそれを引き受ける形に設計。これにより、各サービスは自身の役割に専念でき、コードの再利用性とテスト容易性が向上しました。',
    },
    features: [
      '都市名・住所・地図クリックによる多彩な地点指定',
      'Leaflet.jsによるインタラクティブ地図表示',
      'OpenWeatherMap APIによる詳細な気象データ取得',
      'tone.jsによる気象サウンドの再生',
      'PWA対応によるネイティブアプリのような体験',
    ],
    stack: [
      { name: 'JavaScript (ES6+)', color: 'bg-yellow-200 text-yellow-800' },
      { name: 'OpenWeatherMap API', color: 'bg-blue-500 text-white' },
      { name: 'LocationIQ API', color: 'bg-purple-500 text-white' },
      { name: 'Leaflet.js', color: 'bg-green-500 text-white' },
      { name: 'tone.js', color: 'bg-orange-400 text-white' },
      { name: 'PWA', color: 'bg-amber-300 text-amber-900' },
    ],
  },
  {
    id: 11,
    title: 'MelodyCanvas',
    description: 'Web上でピアノ演奏を録音し、楽譜として可視化・編集できる音楽シーケンサー。tone.jsでWeb Audio APIを抽象化し、正確なタイミングでの音声再生と録音を実現。演奏データはVexFlowによってリアルタイムで五線譜にレンダリングされます。Piniaストアで演奏データや再生状態を一元管理し、localStorageへの永続化も行っています。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/melodycanvas/',
    githubUrl: 'https://github.com/tako-chan0511/melodycanvas',
    tags: ['Web Audio', 'Music', 'VexFlow', 'Pinia', 'Vue 3'],
    learnings: {
      challenge: 'tone.jsが管理する音声イベントのタイミングと、VexFlowが描画する楽譜、そしてユーザーのUI操作（再生ボタンなど）を完全に同期させること。また、内部の音楽データ構造を、VexFlowの楽譜描画用フォーマットとMIDIファイル用フォーマットの両方に変換する必要がありました。',
      solution: 'アプリケーションの状態（再生中か、現在の再生位置など）をすべてPiniaストアに集約。各コンポーネントはこのストアをリアクティブに監視し、状態に応じて自身の描画を更新します。例えば、再生位置が変わるたびにVexFlowの楽譜上の対応する音符をハイライトする、といった処理を実装。データ変換については、内部データを各形式にマッピングする専用のユーティリティ関数（Adapterパターン）を作成し、責務を明確に分離しました。',
    },
    features: [
      'tone.jsによるリアルタイムなピアノ演奏と録音',
      'VexFlowによる演奏データの五線譜への動的レンダリング',
      'Piniaストアによる状態の一元管理とlocalStorageへの永続化',
      '演奏データのJSONおよびMIDI形式でのエクスポート機能',
      '再生速度のリアルタイム調整',
    ],
    stack: [
      { name: 'Vue 3', color: 'bg-green-200 text-green-800' },
      { name: 'tone.js', color: 'bg-orange-400 text-white' },
      { name: 'VexFlow', color: 'bg-purple-400 text-white' },
      { name: 'Pinia', color: 'bg-yellow-400 text-black' },
      { name: 'MIDI-Writer-JS', color: 'bg-gray-400 text-white' },
    ],
  },
  {
    id: 12,
    title: 'ラッキーロトシミュレーション',
    description: 'Vue 3とNaive UIで構築された、多機能な宝くじシミュレーション＆管理ツール。Vue RouterによるSPA構成で、各くじ（ナンバーズ4、ロト6）のシミュレーション画面や購入履歴、統計データ画面をコンポーネントとして明確に分離。Piniaストアと永続化プラグインを活用し、すべてのユーザーデータをクライアントサイドで安全に管理します。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/luckylotto',
    githubUrl: 'https://github.com/tako-chan0511/luckylotto',
    tags: ['Vue 3', 'Pinia', 'Vue Router', 'Naive UI', 'Chart.js'],
    learnings: {
      challenge: 'シミュレーションのエントリー、購入履歴、統計データなど、アプリ全体で共有・連動させるべき状態が多岐にわたったこと。特に、複数のコンポーネントから状態を変更し、それをリアクティブに別のコンポーネントのグラフ描画に反映させるロジックが複雑化しました。',
      solution: 'Piniaを導入し、状態管理のロジックをコンポーネントから完全に分離。購入履歴や統計データなどをストアに集約し、各コンポーネントはストアのデータを参照・更新するだけのシンプルな責務にしました。`pinia-plugin-persistedstate`を組み合わせることで、リロードしてもデータが消えない永続化を容易に実現。これにより、複雑な状態遷移も非常に見通しよく管理できるようになりました。',
    },
    features: [
      'ナンバーズ4・ロト6の抽選アルゴリズムシミュレーション',
      'Vue RouterによるマルチページSPA構成',
      'Piniaストアによる状態の一元管理とlocalStorageへの永続化',
      'Naive UIコンポーネントによるリッチなUI構築',
      'Chart.jsによる統計データのグラフ可視化',
    ],
    stack: [
      { name: 'Vue 3', color: 'bg-green-200 text-green-800' },
      { name: 'Pinia', color: 'bg-yellow-400 text-black' },
      { name: 'Vue Router', color: 'bg-green-300 text-green-900' },
      { name: 'Naive UI', color: 'bg-teal-200 text-teal-800' },
      { name: 'Chart.js', color: 'bg-pink-200 text-pink-800' },
      { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' },
    ],
  },
  {
    id: 13,
    title: 'CSS初心者向け練習アプリ',
    description: 'CSSのプロパティを視覚的・対話的に学習できるサンドボックス環境。DOM要素を直接ドラッグ＆ドロップで配置・リサイズしたり、専用のUI（スライダーやカラーピッカー）でスタイルをリアルタイムに変更可能。変更は即座にプレビューとコードに反映され、直感的なトライ＆エラーを通じてCSSの挙動を深く理解できます。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/cssvisualizer/',
    githubUrl: 'https://github.com/tako-chan0511/cssvisualizer',
    tags: ['Vanilla JS', 'DOM', 'CSS', 'UI/UX'],
    learnings: {
      challenge: 'プレビュー画面上のDOM要素への操作（ドラッグ等）と、UIコントロール（スライダー等）からの変更、そしてコード表示という3者間の状態を完全に同期させること。いずれか一つを変更した際に、他の二つが遅延なく、かつ正確に追従するリアクティブなシステムの構築が最大の課題でした。',
      solution: 'すべての状態（各要素の位置、サイズ、色など）を単一のJavaScriptオブジェクトとして一元管理する「Single Source of Truth」の設計パターンを採用。DOMイベントリスナーとUIコントロールの入力イベントは、すべてこの中央オブジェクトを更新するだけとし、オブジェクトの変更を監視するメインの描画関数が、差分を検知してプレビューとコード表示を再レンダリングするアーキテクチャを構築しました。',
    },
    features: [
      'ドラッグ＆ドロップによる直感的な要素配置',
      'スライダーやカラーピッカーによるリアルタイムなスタイル編集',
      '変更と即座に同期するCSSコードの自動生成',
      'FlexboxやGridなど、主要なレイアウトシステムの視覚的学習',
    ],
    stack: [
      { name: 'JavaScript (ES6+)', color: 'bg-yellow-200 text-yellow-800' },
      { name: 'HTML5', color: 'bg-orange-200 text-orange-800' },
      { name: 'CSS3', color: 'bg-blue-200 text-blue-800' },
      { name: 'Interact.js', color: 'bg-pink-300 text-pink-900' },
    ],
  },
  {
    id: 14,
    title: 'キーボードタイピング練習アプリ (Typing Fall)',
    description: 'ゲーム感覚でタイピングスキルを向上させるためのPWA。落下してくる単語を消していく「ゲームモード」と、正しい指使いを覚える「徹底練習モード」を搭載。リアルタイムな入力判定と、視覚・聴覚フィードバックによる高い没入感が特徴です。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/typingfall/',
    githubUrl: 'https://github.com/tako-chan0511/typingfall',
    tags: ['GameDev', 'Vanilla JS', 'PWA', 'DOM'],
    learnings: {
      challenge: 'ゲームのメインループ（落下処理、入力判定、スコア更新）と、DOMの描画（単語の移動、キーボードのハイライト）を、パフォーマンスを損なうことなく滑らかに同期させること。特に、フレーム毎の状態更新と描画ロジックの分離が課題でした。',
      solution: '`requestAnimationFrame`で安定したゲームループを構築。ゲームの状態（スコア、レベル、単語の位置など）をすべて単一の`gameState`オブジェクトで管理。ループ内では、まず状態を更新するロジックを実行し、その変更された`gameState`に基づいてDOM要素のスタイルを一括で更新する、という明確な責務分離を行いました。これにより、不要な再描画を防ぎ、パフォーマンスを最適化しました。',
    },
    features: [
      'requestAnimationFrameによる滑らかなゲームループ',
      '練習モードと、難易度別のゲームモード',
      '入力キーと指位置のリアルタイムアシスト表示',
      '正解・不正解時のサウンドエフェクト',
      'PWA対応によるオフライン動作とインストール機能',
    ],
    stack: [
      { name: 'JavaScript (ES6+)', color: 'bg-yellow-200 text-yellow-800' },
      { name: 'HTML5', color: 'bg-orange-200 text-orange-800' },
      { name: 'CSS3', color: 'bg-blue-200 text-blue-800' },
      { name: 'PWA', color: 'bg-amber-300 text-amber-900' },
    ],
  },
  {
    id: 15,
    title: '数独（ナンプレ）＆ソルバー・トレーニング',
    description: '純粋なJavaScriptで実装された、高機能な数独PWA。難易度別の問題生成、盤面サポート機能に加え、解法テクニックを解説する独自の「トレーニングモード」を搭載。ロジックの核心部である問題生成・解決アルゴリズムと、81マスに及ぶ盤面の複雑な状態管理が技術的な見どころです。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/sudoku/',
    githubUrl: 'https://github.com/tako-chan0511/sudoku',
    tags: ['Algorithm', 'Vanilla JS', 'PWA', 'Logic'],
    learnings: {
      challenge: '再帰的なバックトラッキング（深さ優先探索）アルゴリズムによる問題生成と解答ロジックの実装。特に、人間が解ける範囲の良問を生成するための適切なヒント数の調整と、トレーニングモードで特定の解法パターン（例：予約、三国同盟）を盤面から認識させるロジックの構築が複雑でした。',
      solution: '数独のロジック（検証、解答、パターン認識）をUIのDOM操作から完全に分離したモジュールとして設計。盤面の状態は多次元配列で管理し、すべての操作はこの配列を更新する関数を介して行われます。UIは状態配列の変更を検知して再描画するだけのシンプルな構造にすることで、複雑なアルゴリズムの実装に集中できました。',
    },
    features: [
      'バックトラッキング法による問題生成とソルバー機能',
      '解法テクニックをステップ・バイ・ステップで学べるトレーニングモード',
      '候補数字のメモ機能や、矛盾箇所のハイライトなどの盤面サポート',
      'localStorageを利用した盤面の状態保存・復元機能',
      'PWA対応によるオフラインでのプレイ',
    ],
    stack: [
      { name: 'JavaScript (ES6+)', color: 'bg-yellow-200 text-yellow-800' },
      { name: 'HTML5', color: 'bg-orange-200 text-orange-800' },
      { name: 'CSS3', color: 'bg-blue-200 text-blue-800' },
      { name: 'PWA', color: 'bg-amber-300 text-amber-900' },
      { name: 'Algorithm Design', color: 'bg-purple-200 text-purple-800' },
    ],
  },
  // --- ★★★ ここから新規追加 ★★★ ---
  {
    id: 16,
    title: 'オセロ（リバーシ）',
    description: 'Vue 3のComposition APIで構築された、クラシックなオセロゲーム。最大の特徴は、8x8の標準盤面だけでなく、4x4から24x24まで盤面サイズを動的に変更できる点です。ゲームのコアロジックとUIコンポーネントを分離し、Vueのリアクティブな特性を活かして、盤面の状態変更を即座に描画に反映させています。',
    screenshot: '',
    appUrl: 'https://tako-chan0511.github.io/othello-Vue3-/',
    githubUrl: 'https://github.com/tako-chan0511/othello-Vue3-',
    tags: ['Vue 3', 'Algorithm', 'GameDev', 'PWA'],
    learnings: {
      challenge: '盤面サイズが可変であるため、石を置ける場所の判定や、石を裏返すロジックを、特定の盤面サイズに依存しない汎用的なアルゴリズムとして実装する必要があったこと。8方向すべてに対して、どこまで石を裏返せるかを動的に計算するロジックの設計が最も挑戦的でした。',
      solution: '盤面の状態を二次元配列で管理。ユーザーがマスをクリックした際、そのマスを起点として8方向（上下左右、斜め4方向）への探索をループで実行する関数を実装。各方向に対して、相手の石が連続し、その先に自分の石が存在するかを判定し、裏返せる石の座標をリストアップします。このロジックを盤面サイズに依存しない形にしたことで、任意のサイズの盤面に対応可能となりました。',
    },
    features: [
      '4x4から24x24までの動的な盤面サイズ変更機能',
      '石を置ける場所をハイライト表示するサポートモード',
      '「一手戻す」機能とゲーム履歴の表示',
      'PWA対応によるオフラインでのプレイ',
    ],
    stack: [
      { name: 'Vue 3 (Composition API)', color: 'bg-green-200 text-green-800' },
      { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' },
      { name: 'PWA', color: 'bg-amber-300 text-amber-900' },
      { name: 'Algorithm Design', color: 'bg-purple-200 text-purple-800' },
    ],
  },
];

// 全てのタグを重複なく取得する
export const allTags = [...new Set(apps.flatMap(app => app.tags))].sort();
