import type { Config } from 'tailwindcss';

/**
 * TINTEL.ONLINE — Design Tokens
 * Fonte única de verdade para cor, tipografia e espaçamento.
 * NÃO alterar sem aprovação do briefing de design.
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4ED8', // Azul profundo — identidade, navegação, destaque institucional
          hover: '#1A43BD',
          light: '#60A5FA', // Azul claro — hover, elementos auxiliares, gradientes
        },
        accent: {
          DEFAULT: '#F97316', // Laranja — CTAs, promoções, ações importantes
          hover: '#EA6A0C',
        },
        neutral: {
          white: '#FFFFFF',
          50: '#F5F5F5', // Cinza claro
          200: '#D1D5DB', // Cinza médio
          600: '#374151', // Cinza escuro
          900: '#111827', // Preto suave
        },
        success: '#16A34A',
        error: '#DC2626',
        warning: '#F59E0B',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'], // Títulos — Poppins Bold
        heading: ['Poppins', 'sans-serif'], // Subtítulos — Poppins SemiBold
        body: ['Inter', 'sans-serif'], // Texto — Inter Regular
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '10px',
        lg: '14px',
        xl: '20px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(17, 24, 39, 0.06), 0 1px 3px rgba(17, 24, 39, 0.08)',
        'card-hover': '0 4px 12px rgba(17, 24, 39, 0.10), 0 2px 4px rgba(17, 24, 39, 0.06)',
        popover: '0 8px 24px rgba(17, 24, 39, 0.12)',
      },
      maxWidth: {
        container: '1280px',
      },
      keyframes: {
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        'slide-up': { from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        'slide-in-right': { from: { transform: 'translateX(100%)' }, to: { transform: 'translateX(0)' } },
        shimmer: { '0%': { backgroundPosition: '-400px 0' }, '100%': { backgroundPosition: '400px 0' } },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
        'slide-up': 'slide-up 0.25s ease-out',
        'slide-in-right': 'slide-in-right 0.28s cubic-bezier(0.32, 0.72, 0, 1)',
        shimmer: 'shimmer 1.6s infinite linear',
      },
    },
  },
  plugins: [],
} satisfies Config;