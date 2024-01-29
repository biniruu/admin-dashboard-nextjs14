import { type Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex: {},
      fontSize: {},
      colors: {
        lime: 'lime',
        red: 'red',
        text: 'white',
        'text-soft': '#b7bac1',
      },
      backgroundColor: ({ theme }) => ({
        ...theme('colors'),
        bg: '#151c2c',
        'bg-soft': '#182237',
        hover: '#2e374a',
      }),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        DEFAULT: '0.625rem',
      },
    },
  },
  plugins: [],
}
export default config
