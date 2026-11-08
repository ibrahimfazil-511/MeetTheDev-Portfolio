/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          obsidian: '#050507',
          obsidianLight: '#0A0A0E',
          obsidianCard: '#111216',
          charcoal: '#181920',
          borderDark: '#23242C',
          borderLight: '#E4E4E7',
          offwhite: '#F7F7F8',
          offwhiteCard: '#FFFFFF',
          silver: '#E4E4E7',
          zincMuted: '#71717A',
          zincLight: '#A1A1AA',
          pureWhite: '#FFFFFF',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #D4D4D8 40%, #A1A1AA 70%, #71717A 100%)',
        'brand-gradient-horizontal': 'linear-gradient(90deg, #FFFFFF 0%, #E4E4E7 50%, #71717A 100%)',
        'radial-gradient-hero': 'radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02) 40%, rgba(0, 0, 0, 0) 70%)',
        'subtle-glow': 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 70%)',
      },
      animation: {
        'aurora': 'aurora 15s ease infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.3' },
          '50%': { transform: 'scale(1.15) rotate(180deg)', opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        spotlight: {
          '0%': {
            opacity: 0,
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
      },
      boxShadow: {
        'glow-white': '0 0 35px -5px rgba(255, 255, 255, 0.25)',
        'glow-silver': '0 0 25px -5px rgba(228, 228, 231, 0.2)',
        'glow-subtle': '0 10px 40px -10px rgba(255, 255, 255, 0.08), 0 0 20px -5px rgba(255, 255, 255, 0.05)',
        'glow-brand': '0 10px 30px -10px rgba(255, 255, 255, 0.2), 0 0 20px -5px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};
