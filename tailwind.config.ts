import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a5f',
          light: '#2c5282',
          dark: '#152e4d',
        },
        accent: {
          DEFAULT: '#ff6b35',
          hover: '#ff5722',
        },
        neutral: {
          bg: '#fafafa',
          card: '#ffffff',
          text: '#2d3748',
          'text-light': '#718096',
          border: '#e2e8f0',
        },
        success: {
          DEFAULT: '#38a169',
          light: '#48bb78',
        },
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['Pretendard Variable', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1-mobile': ['32px', { lineHeight: '1.2', letterSpacing: '-0.5px', fontWeight: '700' }],
        'h1-desktop': ['48px', { lineHeight: '1.2', letterSpacing: '-0.5px', fontWeight: '700' }],
        'h2-mobile': ['24px', { lineHeight: '1.3', letterSpacing: '-0.3px', fontWeight: '600' }],
        'h2-desktop': ['32px', { lineHeight: '1.3', letterSpacing: '-0.3px', fontWeight: '600' }],
        'h3-mobile': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'h3-desktop': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        body: ['16px', { lineHeight: '1.6' }],
        small: ['14px', { lineHeight: '1.5' }],
        price: ['20px', { fontWeight: '600' }],
        quote: ['18px', { lineHeight: '1.8', fontWeight: '500' }],
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '40px',
        xl: '64px',
        '2xl': '80px',
      },
      maxWidth: {
        container: '1200px',
      },
      screens: {
        tablet: '768px',
        desktop: '1024px',
      },
    },
  },
  plugins: [],
}
export default config