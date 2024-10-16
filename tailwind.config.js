/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '0rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '8rem',
      },
    },

    screens: {
      's': '375px',
      // => @media (min-width: 375px) { ... }

      'sm': '425px',
      // => @media (min-width: 425px) { ... }

      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
