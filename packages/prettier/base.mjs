import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

export const baseConfig = {
  tabWidth: 2,
  printWidth: 80,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  endOfLine: 'lf',

  jsxSingleQuote: false,

  useTabs: false,

  plugins: [
    require.resolve('prettier-package-json'),
    require.resolve('prettier-plugin-autocorrect'),
    require.resolve('prettier-plugin-sh'),
  ],

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
}
