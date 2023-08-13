/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        primary: '#1D4ED8',
        success: '#059669',
        secondary: '#F3EDFC',
        error: '#EB4335',
      },
      backgroundColor: {
        primary: '#1D4ED8',
        success: '#059669',
        secondary: '#F3EDFC',
        error: '#EB4335',
      },
      borderColor: {},
      fontFamily: {
        primary: ['var(--font-primary)'],
      },
      padding: {
        primary: '5vw',
      },
      minHeight: {
        main: 'calc(100vh - 72px)',
      },
      outlineColor: {
        primary: '#1D4ED8',
      },
    },
  },
  plugins: [],
}
