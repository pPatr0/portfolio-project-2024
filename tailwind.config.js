/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: ({ colors }) => ({
        primary: '#FED628',
        secondary: '#DCE1E1',
        light: '#EDEDEE',
        dark: '#231F20',
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        black: colors.black,
        white: colors.white,
        neutral: colors.neutral
    }),
    container: {
        padding: '0.75rem'
    },
    fontFamily: {
        primary: ['DM Sans', 'sans-serif'],
        secondary: ['Roboto', 'sans-serif']
    },
    screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1520px'
    },
    transitionDuration: {
        DEFAULT: '300ms'
    },
    extend: {
        spacing: {
            '60px': '60px',
            '70px': '70px',
            '25v': '25vh',
            '50v': '50vh',
            '75v': '75vh',
        }
    }
  },
  plugins: [],
}