import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svelte,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Geist', 'system-ui', ...defaultTheme.fontFamily.sans],
        mono: ['Geist Mono', 'JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },

      colors: {
        supabase: {
          dark: '#141414',        // bukan pure black
          surface: '#1A1A1A',     // card utama
          surface_light: '#202020', // hover / elevated
          border: '#262626',      // lebih soft
          text: '#FAFAFA',
          text_muted: '#A3A3A3',
          accent: '#FFFFFF',
        },
      },


      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
