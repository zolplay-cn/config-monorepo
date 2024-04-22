import type { PrettierConfigOptions } from './types'

import { baseConfig } from './base'

export const factory = (options: PrettierConfigOptions = {}) => {
  const { importSort = true, attributesSort = true, tailwindcss = false } = options

  const plugins = [...baseConfig.plugins]

  if (importSort) {
    plugins.push(require.resolve('@ianvs/prettier-plugin-sort-imports'))
  }

  if (tailwindcss) {
    plugins.push(require.resolve('prettier-plugin-tailwindcss'))
  }

  if (attributesSort) {
    plugins.push(require.resolve('prettier-plugin-organize-attributes'))
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
