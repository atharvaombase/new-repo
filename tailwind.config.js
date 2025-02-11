/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js" // Add Flowbite source files
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
  plugins: [
    flowbite // Use the imported plugin
  ]
}