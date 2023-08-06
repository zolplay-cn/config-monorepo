module.exports = {
  extends: ['plugin:react-hooks/recommended', '@zolplay/eslint-config-ts'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-hooks/exhaustive-deps': 'error',
  },
  overrides: [
    {
      files: ['*.tsx', '*.jsx'],
      rules: {
        '@typescript-eslint/no-use-before-define': 'off',
      },
    },
  ],
}
