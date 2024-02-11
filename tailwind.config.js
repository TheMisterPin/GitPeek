/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'akaya-kanadaka': ['"Akaya Kanadaka"', 'serif'],
        bangers: ['Bangers', 'cursive'],
      },

      colors: {
        'card-grey': '#24292F',
        'blue-letter': '#539BF5',

      },
    },
  },
  plugins: [],
}
