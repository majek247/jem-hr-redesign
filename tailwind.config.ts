import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1B1726',
        paper: '#FBF6F2',
        coral: {
          DEFAULT: '#F1435C',
          dark: '#C92E45',
          light: '#FBD9DE',
        },
        palm: '#177A4F',
        sand: '#EFE7DD',
        mist: '#EDEAF7',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      maxWidth: {
        content: '78rem',
      },
      borderRadius: {
        xl2: '1.75rem',
      },
      boxShadow: {
        soft: '0 24px 60px -30px rgba(27, 23, 38, 0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config
