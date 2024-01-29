import { type Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      borderColor: {
        default: '#2e374a',
      },
      borderRadius: {
        default: '0.625rem',
        half: '50%',
      },
      colors: {
        lime: 'lime',
        red: 'red',
        text: 'white',
        'text-soft': '#b7bac1',
      },
      gap: {
        default: '0.625rem',
      },
      padding: {
        default: '0.625rem'
      }
    },
  },
  plugins: [],
}
export default config
