const pluginTailwindCSS = require('prettier-plugin-tailwindcss')

module.exports = {
  arrowParens: 'always',
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  jsxSingleQuote: false,
  tabWidth: 2,
  useTabs: false,
  plugins: [pluginTailwindCSS, '@ianvs/prettier-plugin-sort-imports'],
}
