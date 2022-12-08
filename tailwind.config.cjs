/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image-header': "url('/images/desktop/image-header.jpg')",
        'image-transform': "url('/images/desktop/image-transform.jpg')",
        'image-stand-out': "url('/images/desktop/image-stand-out.jpg')",
        'image-graphic-design': "url('/images/desktop/image-graphic-design.jpg')",
        'image-photography': "url('/images/desktop/image-photography.jpg')",
      }
    },
  },
  plugins: [],
}
