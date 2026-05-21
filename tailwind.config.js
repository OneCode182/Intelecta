export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        carmesi: { DEFAULT: '#5b1e2d', 200: '#e7b6c1', 300: '#d49aa6', 600: '#6e2638', 700: '#5b1e2d', 800: '#481723', 900: '#330f18' },
        ink: { DEFAULT: '#111827', 800: '#1a2230', 700: '#262f3f' },
        mist: { DEFAULT: '#6b7280', 400: '#9aa1ac', 200: '#d9dce1' },
        ivory: { DEFAULT: '#f9faf7', 100: '#f3f4ef', 200: '#e7e9e1' },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
