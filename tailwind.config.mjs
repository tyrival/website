/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#111116',
        surface: '#1e1e2e',
        primary: '#cdd6f4',
        secondary: '#a6adc8',
        accent: '#89b4fa',
        mint: '#94e2d5',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
        sans: ['PingFang SC', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
