/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#F3F4F6',
        accent: '#1F2937',
        text: '#111827',
      },
    },
  },
  plugins: [],
}
