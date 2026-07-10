import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cirka', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        sora: ['var(--font-sora)', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          muted: '#6B6B6B',
          faint: '#A3A3A3',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          warm: '#FAFAF8',
          elevated: '#F5F5F3',
        },
        accent: {
          gold: '#C9A227',
          mint: '#3D8B7A',
          'mint-soft': '#E8F4F0',
        },
        night: {
          DEFAULT: '#0D0D0D',
          elevated: '#1A1A1A',
        },
        border: {
          DEFAULT: '#E8E8E6',
        }
      },
      borderRadius: {
        lg: '14px',
        xl: '20px',
      },
    },
  },
  plugins: [],
}
export default config
