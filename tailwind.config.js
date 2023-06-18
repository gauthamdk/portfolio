/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        palette: {
          primary: 'var(--color-primary)',
          "primary-text": 'var(--color-primary-text)',
          secondary: 'var(--color-secondary)',
          "secondary-muted": 'var(--color-secondary-muted)',
        }
      },
      borderColor:{
        palette: {
          secondary: 'var(--color-secondary)',
          "secondary-muted": 'var(--color-secondary-muted)',
        }
      },
      backgroundColor:{
        palette: {
          primary: 'var(--color-primary)',
          "primary-muted": 'var(--color-primary-muted)',
        }
      }
    },
  },
  plugins: [],
}
