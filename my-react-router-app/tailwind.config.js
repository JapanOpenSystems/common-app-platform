/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // プロジェクト固有のトークン等はここで拡張
    },
  },
  plugins: [
    require('@digital-go-jp/tailwind-theme-plugin')
  ],
} 