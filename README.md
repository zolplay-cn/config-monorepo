

## Get Start

### Install

```shell
pnpm i -D @zolplay/eslint-config @zolplay/prettier-config
```

### ESLint

``` js
// .eslintrc.js

// Only if you want a more strict ruleset
process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: '@zolplay'
}

```

### Prettier

```js
// .prettierrc

module.exports = {
  ...require('@zolplay/prettier-config')
  // yours
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
