/* eslint-disable ts/no-require-imports */
export const baseConfig = {
  tabWidth: 2,
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  endOfLine: 'lf',

  jsxSingleQuote: true,

  useTabs: false,

  plugins: [require('prettier-plugin-autocorrect'), require('prettier-plugin-sh')],

  importOrder: [
    'react',
    '<THIRD_PARTY_MODULES>',
    '<TYPES>',
    '<TYPES>^[.]',
    '',

    '^@(.*)/(.*)$',
    '',
    '^~/(.*)$',
    '',
    '^@/(.*)$',
    '',
    '^[./]',
    '',
    '^(?!.*[.]css$)[./].*$',
    '.css$',
  ],

  attributeGroups: ['^className$', '^(key|id|name|ref)$', '$DEFAULT', '^aria-', '^data-', '^on'],
}
