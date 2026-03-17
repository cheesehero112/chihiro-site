/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#C4622D',
        'accent-light': 'rgba(196,98,45,0.08)',
        'off-white': '#f8f7f5',
        'light-gray': '#e8e6e2',
        'mid-gray': '#666666',
        'text-gray': '#444444',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
      },
    },
  },
  plugins: [],
}
