/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'monospace'],
        sans: ['var(--font-geist-sans)', 'sans-serif'],
      },
      colors: {
        terminal: {
          green: '#4ade80',
          'green-dark': '#22c55e',
          background: '#1f2937',
          'background-light': '#fafafa',
          text: '#e5e7eb',
          'text-light': '#374151',
          border: '#374151',
          'border-light': '#d1d5db',
        }
      },
      animation: {
        'cursor-blink': 'cursor-blink 1.06s infinite',
        'typewriter': 'typewriter var(--duration) steps(var(--steps)) forwards',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'typewriter': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
