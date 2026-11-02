import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#FBF3F4',
          100: '#F5E4E6',
          200: '#ECCBCE',
          300: '#DEA7AC',
          400: '#CA7882',
          500: '#A94857',
          600: '#8E2E40',
          700: '#6D1A2B', // Primary Brand Burgundy
          800: '#521320',
          900: '#3D0B16',
          950: '#25040B',
        },
        gold: {
          50: '#FDFBF2',
          100: '#F9F4DF',
          200: '#F1E5B9',
          300: '#E6D28C',
          400: '#D8BC5A',
          500: '#D4AF37', // Antique Gold Accent
          600: '#B88F23',
          700: '#946E19',
          800: '#755418',
          900: '#614417',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FDFBF7', // Primary warm ivory
          200: '#FAF6F0', // Secondary warm cream
          300: '#F5EFE6',
          400: '#EBE2D5',
          500: '#DDD2C1',
        },
        blush: {
          50: '#FCF7F8',
          100: '#F8EFF0',
          200: '#F2DFE2',
          300: '#E8C5CB',
          400: '#DCA5AE',
          500: '#CE828E',
        },
        charcoal: {
          900: '#1C1517',
          800: '#2D2225',
          700: '#423337',
          600: '#5F4B51',
          500: '#7F676E',
          400: '#A48991',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'Alex Brush', 'Dancing Script', 'cursive'],
      },
      boxShadow: {
        'soft-luxury': '0 10px 30px -10px rgba(109, 26, 43, 0.08), 0 4px 12px -2px rgba(212, 175, 55, 0.06)',
        'elevated-luxury': '0 20px 40px -15px rgba(109, 26, 43, 0.15), 0 8px 16px -4px rgba(212, 175, 55, 0.12)',
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.35)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
