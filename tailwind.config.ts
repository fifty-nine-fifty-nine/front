import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7082FF',
        secondary: '#1BD689',
      },
      backgroundImage: {
        'primary-pattern': "url('/img/pattern_primary.png')",
        'secondary-pattern': "url('/img/pattern_secondary.png')",
      },
    },
  },
  plugins: [],
};
export default config;
