import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import type { EslintConfigOptions } from './types'

import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
// @ts-expect-error no types
import nextPlugin from '@next/eslint-plugin-next'
import { configs as ReactQueryConfigs, rules as ReactQueryRules } from '@tanstack/eslint-plugin-query'

// @ts-expect-error no types
import tailwindPlugin from 'eslint-plugin-tailwindcss'

export const zolplay = ({ tailwind, next, reactQuery }: EslintConfigOptions = {}) => {
  const base = antfu({
    stylistic: false,
    react: true,
  }).removeRules('import/order')
  .append(eslintPluginPrettierRecommended)
  // .append(
  //   compat.config({
  //     plugins: ['svg-jsx'],
  //     rules: {
  //       'svg-jsx/camel-case-dash': 'error',
  //       'svg-jsx/camel-case-colon': 'error',
  //       'svg-jsx/no-style-string': 'error',
  //     },
  //   }),
  // )

  !!tailwind &&
    base.append([
      {
        name: 'taliwindcss',
        plugins: { tailwindcss: tailwindPlugin },
        rules: {
          ...tailwindPlugin.configs.recommended.rules,
          'tailwindcss/classnames-order': 'off',
          'tailwindcss/migration-from-tailwind-2': 'off',
        },
        settings: {},
      },
    ])

  !!next &&
    base.append([
      {
        name: 'next',
        plugins: { '@next/next': nextPlugin },
        rules: {
          ...nextPlugin.configs.recommended.rules,
          ...nextPlugin.configs['core-web-vitals'].rules,
          '@next/next/no-img-element': 'error',
          '@next/next/no-duplicate-head': 'off',
          '@next/next/no-page-custom-font': 'off',
        },
      },
    ])

  !!reactQuery &&
    base.append([
      {
        name: 'react-query',
        plugins: {
          '@tanstack/eslint-plugin-query': { rules: ReactQueryRules, configs: ReactQueryConfigs },
        },
        rules: {
          '@tanstack/eslint-plugin-query/exhaustive-deps': 'error',
          '@tanstack/eslint-plugin-query/no-rest-destructuring': 'warn',
          '@tanstack/eslint-plugin-query/stable-query-client': 'error',
        },
      },
    ])

  return base
}

const defaultConfig = zolplay({ tailwind: true, next: true, reactQuery: true })
export default defaultConfig
