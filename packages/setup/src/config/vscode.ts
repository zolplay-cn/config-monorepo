import type { Config } from '../types'

// https://github.com/antfu/eslint-config/blob/main/src/cli/constants.ts
export const VSCodeConfig = {
  name: 'VSCode',
  files: [
    {
      path: './.vscode/settings.json',
      content: `
{
  "prettier.enable": true,

  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  "eslint.runtime": "node",

  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ],

  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.preferences.autoImportFileExcludePatterns": ["typescript"]
}
    `,
    },
  ],
} satisfies Config
