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
        'img-1': "url(/images/desktop/image-gallery-milkbottles.jpg)",
        'img-2': "url(/images/desktop/image-gallery-orange.jpg)",
        'img-3': "url(/images/desktop/image-gallery-cone.jpg)",
        'img-4': "url(/images/desktop/image-gallery-sugarcubes.jpg)",
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      colors: {
        'orange-blue': '#3DBEFF',
        'cherry-green': '#9ED9CB'
      },
      letterSpacing: {
        wide: '.25em',
        widest: '.50em',
      },
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
    },
  },

  plugins: [],
}
