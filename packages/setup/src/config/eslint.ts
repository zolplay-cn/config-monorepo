import type { Config } from '../types'

export const eslintConfig = {
  name: 'ESLint',
  devDependencies: [
    '@zolplay/eslint-config',
    'eslint',
    'eslint-plugin-react-hooks@rc',
    'eslint-plugin-react-refresh',
    'eslint-plugin-svg-jsx',
    '@eslint-react/eslint-plugin',
  ],
  files: [
    {
      path: 'eslint.config.mjs',
      content: `
    import config from '@zolplay/eslint-config'

    export default config.append({
      settings: {
        tailwindcss: {
          // path to your tailwind config
          config: '',
        },
      },
    })
    `,
    },
  ],
} satisfies Config
