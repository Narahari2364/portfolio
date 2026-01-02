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
        // Base colors
        background: {
          DEFAULT: "var(--color-bg-base)",
          base: "var(--color-bg-base)",
          surface: "var(--color-bg-surface)",
          elevated: "var(--color-bg-elevated)",
        },
        foreground: {
          DEFAULT: "var(--color-fg-primary)",
          primary: "var(--color-fg-primary)",
          secondary: "var(--color-fg-secondary)",
          tertiary: "var(--color-fg-tertiary)",
        },
        // Accent colors
        accent: {
          primary: "var(--color-accent-primary)",
          secondary: "var(--color-accent-secondary)",
          tertiary: "var(--color-accent-tertiary)",
        },
        // Legacy support
        backgroundLegacy: "var(--background)",
        foregroundLegacy: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        // Fluid typography scale
        'fluid-xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0' }],
        'fluid-sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'fluid-base': ['1rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'fluid-lg': ['1.25rem', { lineHeight: '1.7', letterSpacing: '-0.01em' }],
        'fluid-xl': ['1.5rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'fluid-2xl': ['2rem', { lineHeight: '1.5', letterSpacing: '-0.02em' }],
        'fluid-3xl': ['2.5rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
        'fluid-4xl': ['3rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        'fluid-5xl': ['4rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'fluid-6xl': ['6rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      spacing: {
        // Extended spacing scale (4px base unit)
        '18': '4.5rem',  // 72px
        '22': '5.5rem',  // 88px
        '26': '6.5rem',  // 104px
        '30': '7.5rem',  // 120px
        '34': '8.5rem',  // 136px
        '38': '9.5rem',  // 152px
        '42': '10.5rem', // 168px
        '46': '11.5rem', // 184px
        '50': '12.5rem', // 200px
      },
      borderRadius: {
        // Organic, fluid border radius
        'fluid': '60% 40% 30% 70% / 60% 30% 70% 40%',
        'blob': '40% 60% 30% 70% / 50% 40% 60% 30%',
        'blob-2': '30% 60% 70% 40% / 50% 60% 30% 60%',
      },
      boxShadow: {
        // Organic, soft shadows
        'fluid': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'fluid-lg': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'fluid-xl': '0 16px 48px rgba(0, 0, 0, 0.16)',
        'glow-primary': '0 0 24px rgba(124, 58, 237, 0.3)',
        'glow-secondary': '0 0 24px rgba(236, 72, 153, 0.3)',
        'glow-tertiary': '0 0 24px rgba(6, 182, 212, 0.3)',
      },
      transitionTimingFunction: {
        // Custom easing curves
        'fluid': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '400ms',
        'slow': '600ms',
        'slower': '800ms',
        'slowest': '1200ms',
      },
      animation: {
        // Fluid animations
        'fluid': 'fluid 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'morph': 'morph 4s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        // Organic blob morphing
        fluid: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        // Floating motion
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        // Morphing transform
        morph: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.05) rotate(2deg)' },
        },
        // Soft pulsing
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
export default config;

