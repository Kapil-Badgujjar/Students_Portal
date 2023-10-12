import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'text-reveal': {
            '0%': { transform: 'translateX(-100%)', opacity: '0%'},
            '100%': { transform: 'translateX(0%)', opacity: '100%'}
        },
        'image-reveal': {
          '0%': { transform: 'translateX(100%)', opacity: '50%'},
            '100%': { transform: 'translateX(0%)', opacity: '100%'}
        },
        'top-down':{
          '0%': { transform: 'translateY(-100%)', opacity: '0%'},
          '100%': { transform: 'translateY(0%)', opacity: '100%'}
        }

      },
      animation: {
        'text-reveal': 'text-reveal 1s ease-in-out forwards',
        'image-reveal': 'image-reveal 1s ease-in-out forwards',
        'top-down': 'top-down 1s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
export default config
