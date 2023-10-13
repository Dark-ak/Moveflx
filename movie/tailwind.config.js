/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins',"sans-serif"]
      },
      backgroundImage: {
        banner: "url(./src/assets/banner_bg01.jpg)",
        footer: "url(./src/assets/footer_bg.jpg)"
      }
    },
  },
  plugins: [],
}

