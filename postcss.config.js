// eslint-disable-next-line @typescript-eslint/no-var-requires
const autoprefixer = require('autoprefixer')()
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindcss = require('tailwindcss')('./tailwind.config.js')

module.exports = {
  plugins: [tailwindcss, autoprefixer]
}