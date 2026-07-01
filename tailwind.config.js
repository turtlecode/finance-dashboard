/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f1419',
          'bg-secondary': '#1a1f26',
          'bg-tertiary': '#252b33',
          text: '#e1e8ed',
          'text-secondary': '#71767b',
          border: '#2f3336',
          'border-light': '#3d4144',
        },
        green: {
          'market': '#17bf63',
          'market-dark': '#0f9a5f',
        },
        red: {
          'market': '#e7244e',
          'market-dark': '#c51230',
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0f1419 0%, #1a1f26 100%)',
        'gradient-chart': 'linear-gradient(180deg, rgba(23, 191, 99, 0.2) 0%, rgba(23, 191, 99, 0) 100%)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
