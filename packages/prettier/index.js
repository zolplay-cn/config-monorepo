module.exports = {
  arrowParens: 'always',
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  jsxSingleQuote: false,
  tabWidth: 2,
  useTabs: false,
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('@ianvs/prettier-plugin-sort-imports'),
  ],
}
