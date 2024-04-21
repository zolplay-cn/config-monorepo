import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

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

  plugins: [require.resolve('prettier-plugin-autocorrect'), require.resolve('prettier-plugin-sh')],

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

  attributeGroups: ['^className$', '^(id|name|ref)$', '$DEFAULT', '^aria-', '^data-', '^on'],
}
