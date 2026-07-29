/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        surface: '#141414',
        border: 'rgba(255,255,255,0.08)',
        muted: '#a3a3a3',
        neon: '#d4ff00',
        cyan: '#00d4ff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
