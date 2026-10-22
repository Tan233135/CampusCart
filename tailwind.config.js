/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#17191C',
        muted: '#64748B',
        canvas: '#FAFBFC',
        mint: '#ECFDF5',
        emerald: {
          500: '#10B981',
          700: '#075C46',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 16px 48px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
