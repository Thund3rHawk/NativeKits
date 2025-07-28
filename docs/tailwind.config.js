/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        secondary: '#5856D6',
        accent: '#FF3B30',
        background: '#FFFFFF',
        surface: '#F8F9FA',
        text: '#1C1C1E',
        textSecondary: '#6C6C70',
        border: '#E5E5EA',
      },
    },
  },
  plugins: [],
}