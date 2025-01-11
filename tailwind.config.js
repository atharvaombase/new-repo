/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'neon': {
          green: '#39FF14',
          DEFAULT: '#39FF14',
          dark: '#2ECC40'
        },
        'storm': {
          dark: '#121212',
          darker: '#0A0A0A',
          light: '#1E1E1E'
        }
      },
      fontFamily: {
        'cyber': ['Space Grotesk', 'sans-serif'],
        'code': ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}

