/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'display': ['var(--font-dm-serif-display)', 'monospace']
    }, 
    extend: {
      colors: {
        'cbrown': '#79443B',
        'cgreen': '#41644A',
        'cgray': "#EEEEEE",
        'ctan': '#fafafa'
      }
    }
  },
  plugins: [],
}
