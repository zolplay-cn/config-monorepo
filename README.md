## Getting Started

### Installation

```shell
pnpm i -D @zolplay/eslint-config @zolplay/prettier-config
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
// .prettierrc.js

module.exports = {
  ...require('@zolplay/prettier-config'),
  // your configurations
}
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
