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

// ★★★ すべてのアプリデータをここに集約 ★★★
export const apps: App[] = [
  // --- 既存のアプリ ---
  {
    id: 1,
    title: 'ポートフォリオサイト (SkillTrail)',
    description: 'Vue 3, Vite, Tailwind CSSを使い、自身の開発スキルと制作物を紹介するために構築したポートフォリオサイト。コンポーネント設計やデータ駆動のUI実装を学びました。',
    screenshot: '', // '/screenshots/app1.png' のように後で設定
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
  // (もし他にも既存のアプリがあればここに追加)

  // --- Geminiと作成した新規アプリ 5件 ---
  {
    id: 4,
    title: 'AIマーケットアナリスト',
    description: '金融APIから取得した市場データをGemini APIに渡し、専門家のような分析レポートを生成させるアプリケーション。複雑な数値データから意味のある洞察を引き出す挑戦でした。',
    screenshot: '', 
    appUrl: '#',
    githubUrl: '#',
    tags: ['Vue', 'API', 'Gemini', 'Chart.js'],
    learnings: {
      challenge: 'Geminiに単に数値データを渡すだけでは、生成されるレポートの形式や品質が安定しなかった。',
      solution: 'プロンプト内に高品質な「分析レポートの手本」を数例含める「Few-shotプロンプティング」を導入。これにより、Geminiは望ましい出力形式を学習し、一貫性のある構造化されたレポートを生成できるようになった。',
    },
    features: ['市場データの可視化グラフ', 'Geminiによる自動分析レポート生成', '分析対象期間の指定'],
    stack: [
      { name: 'Vue 3', color: 'bg-green-200 text-green-800' },
      { name: 'Gemini API', color: 'bg-red-200 text-red-800' },
      { name: 'Chart.js', color: 'bg-pink-200 text-pink-800' },
      { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' },
    ],
  },
  {
    id: 5,
    title: 'AIニュースダイジェスト',
    description: '複数のニュースAPIから最新記事を並行して取得し、Gemini APIがそれらを要約して簡潔なダイジェストを作成。非同期処理の効率化が鍵となりました。',
    screenshot: '',
    appUrl: '#',
    githubUrl: '#',
    tags: ['JavaScript', 'API', 'Gemini', '非同期処理'],
    learnings: {
      challenge: '複数のニュースソースからのAPIリクエストを逐次処理していたため、全データの取得に時間がかかり、ユーザー体験が悪かった。',
      solution: '`Promise.all()` を活用し、すべてのAPIリクエストを同時に並列実行するようにリファクタリング。全体のデータ取得時間を劇的に短縮し、UIにはローディングスケルトンを導入して待機時間を快適にした。',
    },
    features: ['複数ソースからニュース集約', 'Geminiによる自動要約', 'ローディングスケルトンUI'],
    stack: [
      { name: 'JavaScript (ES6+)', color: 'bg-yellow-200 text-yellow-800' },
      { name: 'Gemini API', color: 'bg-red-200 text-red-800' },
      { name: 'HTML5', color: 'bg-orange-200 text-orange-800' },
      { name: 'CSS3', color: 'bg-blue-200 text-blue-800' },
    ],
  },
  {
    id: 6,
    title: 'AI統計アナリスト',
    description: 'ユーザーがアップロードしたCSVファイルをクライアントサイドで解析し、そのデータを基にGeminiが統計的な傾向や相関関係を分析・解説するツール。',
    screenshot: '',
    appUrl: '#',
    githubUrl: '#',
    tags: ['JavaScript', 'CSV', 'Gemini', 'File API'],
    learnings: {
      challenge: '巨大なCSVファイルをそのままAPIに送ると、トークン数の上限を超えてしまう問題があった。',
      solution: 'クライアントサイドでCSVをパースし、全データを送るのではなく、統計的に重要な列や集計後のサマリーデータのみを抽出してGeminiに渡す戦略を考案。これにより、トークン数を節約しつつ精度の高い分析を実現した。',
    },
    features: ['ブラウザでのCSVファイル読み込み', '主要な統計データの自動計算', 'Geminiによるデータ傾向の自然言語解説'],
    stack: [
      { name: 'JavaScript', color: 'bg-yellow-200 text-yellow-800' },
      { name: 'File API', color: 'bg-gray-200 text-gray-800' },
      { name: 'PapaParse', color: 'bg-green-200 text-green-800' },
      { name: 'Gemini API', color: 'bg-red-200 text-red-800' },
    ],
  },
  {
    id: 7,
    title: 'AI政権比較アナリスト',
    description: '公開されている複数の政権の支持率や政策データを比較し、Geminiが中立的な立場から事実に基づいた比較レポートを生成。プロンプトによるAIの役割付けが重要でした。',
    screenshot: '',
    appUrl: '#',
    githubUrl: '#',
    tags: ['Vue', 'API', 'Gemini', 'プロンプトエンジニアリング'],
    learnings: {
      challenge: '政治のような繊細なトピックでは、AIが意図せず偏った、あるいは意見的な記述をしてしまうリスクがあった。',
      solution: 'プロンプト内で「貴方は中立的な政治アナリストです。提供されたデータのみに基づき、感情や意見を交えずに事実のみを比較・報告してください」という強い役割（ロール）を与えることで、AIの出力を客観的かつ事実に即したものに制御した。',
    },
    features: ['複数政権のデータ比較表示', 'Geminiによる中立的な比較レポート生成', '参照データソースの明記'],
    stack: [
      { name: 'Vue 3', color: 'bg-green-200 text-green-800' },
      { name: 'Gemini API', color: 'bg-red-200 text-red-800' },
      { name: 'Prompt Engineering', color: 'bg-indigo-200 text-indigo-800' },
    ],
  },
  {
    id: 8,
    title: '料理レシピ提案アプリ',
    description: 'ユーザーが手持ちの食材をリストアップすると、それらを使って作れる料理のレシピをGeminiが提案。実用的な出力を得るために、AIへの指示形式を工夫しました。',
    screenshot: '',
    appUrl: '#',
    githubUrl: '#',
    tags: ['React', 'Gemini', 'JSON'],
    learnings: {
      challenge: 'AIからのレシピ提案が自由すぎるテキスト形式だと、UIでの整形や表示が困難だった。',
      solution: 'Geminiへのリクエスト時に「レシピは必ず{title, ingredients, steps}というキーを持つJSON形式で回答してください」と厳密な出力形式を指定。これにより、APIからの応答を確実にパースして、整ったUIで表示できるようになった。',
    },
    features: ['所持食材からのレシピ提案', '調理時間やカロリーでの絞り込み', 'JSON形式での構造化されたレシピ表示'],
    stack: [
      { name: 'React', color: 'bg-cyan-200 text-cyan-800' },
      { name: 'Gemini API', color: 'bg-red-200 text-red-800' },
      { name: 'TypeScript', color: 'bg-blue-200 text-blue-800' },
    ],
  },
];

// 全てのタグを重複なく取得する
export const allTags = [...new Set(apps.flatMap(app => app.tags))].sort();
