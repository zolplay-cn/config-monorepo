import type { Config } from '../types'

export const prettierConfig = {
  name: 'Prettier',
  devDependencies: ['prettier', '@zolplay/prettier-config'],
  files: [
    {
      path: 'prettier.config.mjs',
      content: `import config from '@zolplay/prettier-config'

      export default config
      `,
    },
  ],
} satisfies Config
