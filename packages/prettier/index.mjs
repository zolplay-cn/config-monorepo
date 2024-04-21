import { createRequire } from 'node:module'

import { baseConfig } from './base.mjs'

const require = createRequire(import.meta.url)
/**
 * @param {import('./types').PrettierConfigOptions} options
 */
export const factory = (options = {}) => {
  const { importSort = true, attributesSort = true, tailwindcss = false } = options

  const plugins = [...baseConfig.plugins]

  if (importSort) {
    plugins.push(require.resolve('@ianvs/prettier-plugin-sort-imports'))
  }

  if (tailwindcss) {
    plugins.push(require.resolve('prettier-plugin-tailwindcss'))
  }

  if (attributesSort) {
    plugins.push(require.resolve('prettier-plugin-sort-attributes'))
  }

  return {
    ...baseConfig,
    plugins,
  }
}
export default factory({
  tailwindcss: true,
  importSort: true,
})
