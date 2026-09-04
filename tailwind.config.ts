import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{css,scss}',
  ],
  theme: {
    extend: {
      colors: {
        zentro: {
          navy: {
            DEFAULT: '#1E293B',
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#475569',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
            950: '#020617',
          },
          orange: {
            DEFAULT: '#F97316',
            50: '#FFF7ED',
            100: '#FFEDD5',
            200: '#FED7AA',
            300: '#FDBA74',
            400: '#FB923C',
            500: '#F97316',
            600: '#EA580C',
            700: '#C2410C',
            800: '#9A3412',
            900: '#7C2D12',
          },
          bg: {
            soft: '#FAFAFA',
            white: '#FFFFFF',
            dark: '#0F172A',
          },
          text: {
            primary: '#0F172A',
            secondary: '#475569',
            muted: '#94A3B8',
          },
          border: {
            light: '#E2E8F0',
            dark: '#334155',
          },
          status: {
            success: '#10B981',
            warning: '#F59E0B',
            error: '#EF4444',
            info: '#0EA5E9',
          },
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        'zentro-sm': '8px',
        'zentro-md': '12px',
        'zentro-lg': '16px',
        'zentro-xl': '24px',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '250ms',
        complex: '350ms',
      },
    },
  },
  plugins: [],
};

export default config;