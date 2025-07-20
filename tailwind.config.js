// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // srcフォルダ内の全てのvue, js, tsファイルを対象にする
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}