import pluginAutoCorrect from 'prettier-plugin-autocorrect'
import pluginSh from 'prettier-plugin-sh'

export const baseConfig = {
  arrowParens: 'always',
  attributeGroups: ['^className$', '^(key|id|name|ref)$', '$DEFAULT', '^aria-', '^data-', '^on'],
  endOfLine: 'lf',
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
  jsxSingleQuote: true,
  plugins: [pluginAutoCorrect, pluginSh],
  printWidth: 120,
  semi: false,
  singleQuote: true,

  tabWidth: 2,

  trailingComma: 'all',

  useTabs: false,
}
