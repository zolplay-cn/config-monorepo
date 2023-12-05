## Getting Started

### Installation

```shell
pnpm i -D @zolplay/eslint-config @zolplay/prettier-config prettier@^2.8.8
```

### ESLint

```js
// .eslintrc.js

// Only use if you want a stricter ruleset
process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: '@zolplay',
}
```

### Prettier

```js
// .prettierrc.mjs
import config from '@zolplay/prettier-config'

export default config

// or
import { factory } from '@zolplay/prettier-config'

export default factory({ tailwindcss:true,importSort:true })
```

## IDE Settings

### VSCode

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Credit

This project is inspired by https://github.com/antfu/eslint-config
