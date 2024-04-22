import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['index.ts'],
  format: ['cjs', 'esm'],
  shims: true,
  banner: {
    js: `import {createRequire as __createRequire} from 'module';var require=__createRequire(import\.meta.url);`,
  },
})
