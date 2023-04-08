/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': '560px'
      },
      width: {
        'admin-full-width': 'calc(100% - 250px)',
        'admin-resposive': 'calc(100% - 50px)',
      },
      colors: {
        'admin-hover': 'rgb(90, 82, 132)',
        'admin-focus': 'rgb(201, 190, 255)',
        'login-page': '#9E89E3'
      }
    },
  },
  plugins: [],
}

