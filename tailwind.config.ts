import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF8F2',
        coconut: '#F3EADB',
        cacao: '#2A1F15',
        nanyang: {
          DEFAULT: '#2F5D50',
          dark: '#234539',
        },
        turmeric: '#D49A3C',
        enamel: '#D98C86',
        sage: '#9BA89A',
        rouge: '#A63D2A',
      },
      fontFamily: {
        display: ['Noto Serif SC', 'Songti SC', 'serif'],
        body: ['Noto Sans SC', 'PingFang SC', 'sans-serif'],
        latinDisplay: ['Cormorant Garamond', 'serif'],
        latinBody: ['Inter', 'sans-serif'],
        accent: ['LXGW WenKai', 'Noto Serif SC', 'serif'],
      },
      container: {
        center: true,
        padding: '1.25rem',
      },
    },
  },
  plugins: [],
}
export default config
