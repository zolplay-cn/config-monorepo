module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    React: true,
    JSX: true,
  },
  extends: ['@zolplay/eslint-config-react', 'next', 'plugin:mdx/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
}
