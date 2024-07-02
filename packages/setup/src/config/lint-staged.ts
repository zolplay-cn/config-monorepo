import type { Config } from '../types'

// TODO support post install hooks: npx simple-git-hooks
export const lintStagedConfig = {
  name: 'Lint Staged',
  devDependencies: ['lint-staged', 'simple-git-hooks'],
  files: [
    {
      path: 'simple-git-hooks.json',
      content: `
{
    "pre-commit": "npx lint-staged",
}
                  `,
    },
    {
      path: 'lint-staged.config.mjs',
      content: `
{
    "*": "eslint --fix"
}
                  `,
    },
  ],
} satisfies Config
