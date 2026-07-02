/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'cafe-beige': '#faf3e0', // Warna dasar latar belakang
        'cafe-brown-dark': '#5c3d2e', // Teks cokelat gelap
        'cafe-gold': '#b8860b', // Aksen emas/oranye
        'cafe-coffee': '#8b4513', // Cokelat kopi yang lebih kaya
        'cafe-cream': '#fce4d6', // Warna krem lembut
        'cafe-black': '#1a1a1a', // Latar belakang gelap (footer)
      },
      fontFamily: {
        sans: ['"Lato"', 'sans-serif'],
         space: ['"Space Mono"', 'monospace'], // Gunakan font Sans-serif yang bersih
      },
    },
  },
  plugins: [],
}