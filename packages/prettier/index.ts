import pluginOrganizeAttributes from 'prettier-plugin-organize-attributes'
import type { ConfigOption } from './types'

import pluginSortImports from '@ianvs/prettier-plugin-sort-imports'

import { baseConfig } from './base'

export const factory = (options: ConfigOption = {}) => {
  const { attributesSort = true, importSort = true } = options

  const plugins = [...baseConfig.plugins]

  if (importSort) {
    plugins.push(pluginSortImports)
  }

  if (attributesSort) {
    plugins.push(pluginOrganizeAttributes)
  }

  return {
    ...baseConfig,
    plugins,
  }
}
export default factory({
  attributesSort: true,
  importSort: true,
})
