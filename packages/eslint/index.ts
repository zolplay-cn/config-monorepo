// @ts-expect-error no types
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import type { EslintConfigOptions } from './types'

import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
// @ts-expect-error no types
import nextPlugin from '@next/eslint-plugin-next'
import queryPlugin from '@tanstack/eslint-plugin-query'

// @ts-expect-error no types
import tailwindPlugin from 'eslint-plugin-tailwindcss'

const compat = new FlatCompat()

export const factory = ({ prettier, tailwind, next, reactQuery }: EslintConfigOptions = {}) => {
  const base = antfu({
    stylistic: false,
    react: true,
  }).removeRules('import/order')

  base.append([
    ...compat.config({
      plugins: ['svg-jsx'],
      rules: {
        'svg-jsx/camel-case-dash': 'error',
        'svg-jsx/camel-case-colon': 'error',
        'svg-jsx/no-style-string': 'error',
      },
    }),
  ])

  !!prettier && base.append([eslintPluginPrettierRecommended, eslintConfigPrettier])

  !!tailwind &&
    base.append(tailwindPlugin.configs['flat/recommended'], {
      settings: {
        tailwindcss: {
          callees: ['classnames', 'clsxm', 'cn', 'tv'],
        },
      },
    })

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

  !!reactQuery && base.append(queryPlugin.configs['flat/recommended'])

  return base
}

const defaultConfig = factory({ prettier: true, tailwind: true, next: true, reactQuery: true })
export default defaultConfig

// Fix `error TS2742: The inferred type of 'factory' cannot be named without a reference to '.pnpm/eslint-flat-config-utils@0.2.5/node_modules/eslint-flat-config-utils'. This is likely not portable. A type annotation is necessary.`
export * from 'eslint-flat-config-utils'
