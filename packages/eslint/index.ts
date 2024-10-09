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

export const factory = ({ next, prettier, reactQuery, tailwind }: EslintConfigOptions = {}) => {
  const base = antfu({
    react: true,
    stylistic: false,
  }).overrideRules({
    '@next/next/no-img-element': 'off',
    'import/order': 'off',
    'no-irregular-whitespace': 'off',
    'node/prefer-global/process': 'warn',
    'perfectionist/sort-imports': 'off',
    'react/prefer-destructuring-assignment': 'off',
    'sort-imports': 'off',
    'ts/no-unused-expressions': 'off',
    'ts/no-use-before-define': 'off',
    'unused-imports/no-unused-vars': 'warn',
  })

  base.append([
    ...(compat.config({
      plugins: ['svg-jsx'],
      rules: {
        'svg-jsx/camel-case-colon': 'error',
        'svg-jsx/camel-case-dash': 'error',
        'svg-jsx/no-style-string': 'error',
      },
    }) as any),
  ])

  const customGroups = {
    as: ['as'],
    children: ['children'],
    variant: ['variant', 'type', 'mode'],
    className: ['class', 'className', '*className', 'style'],
    label: ['label', 'name'],
    icon: ['icon'],
    value: ['value'],
    is: ['is*'],
    callback: ['on*', 'handle*'],
    'framer-motion': ['initial', 'animate', 'exit', 'whileHover', 'whileTap', 'transition'],
    jsx: ['key', 'ref', 'id'],
    links: ['link', 'href', 'to', 'src', 'url'],
    meta: ['name', 'property', 'content'],
    svg: ['d', 'width', 'height', 'viewBox', 'fill', 'stroke'],
  }

  const groups = [
    'meta',
    'as',
    'jsx',
    'children',
    'links',
    'variant',
    'className',
    'label',
    'shorthand',
    'icon',
    'value',
    'svg',
    'is',
    'framer-motion',
    'unknown',
    'multiline',
    'callback',
  ]

  // perfectionist
  base.append({
    rules: {
      'perfectionist/sort-array-includes': ['error', { type: 'natural' }],
      'perfectionist/sort-enums': ['error', { type: 'natural', partitionByComment: true }],
      'perfectionist/sort-exports': ['error', { type: 'natural' }],
      'perfectionist/sort-interfaces': [
        'error',
        {
          type: 'natural',
          customGroups,
          groupKind: 'required-first',
          groups,
          partitionByComment: true,
          partitionByNewLine: true,
        },
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          type: 'natural',
          customGroups,
          groups,
        },
      ],
      'perfectionist/sort-named-exports': ['error', { type: 'natural', groupKind: 'types-first' }],
      'perfectionist/sort-object-types': [
        'error',
        {
          type: 'natural',
          customGroups,
          groups,
          partitionByComment: true,
          partitionByNewLine: true,
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'natural',
          customGroups,
          groups: groups.filter((group) => group !== 'shorthand' && group !== 'multiline'),
          partitionByComment: true,
          partitionByNewLine: true,
        },
      ],
      'perfectionist/sort-union-types': ['error', { type: 'natural' }],
    },
  })

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
          '@next/next/no-duplicate-head': 'off',
          '@next/next/no-img-element': 'error',
          '@next/next/no-page-custom-font': 'off',
        },
      },
    ])

  !!reactQuery && base.append(queryPlugin.configs['flat/recommended'] as any)

  return base
}

const defaultConfig = factory({ next: true, prettier: true, reactQuery: true, tailwind: true })
export default defaultConfig

// Fix `error TS2742: The inferred type of 'factory' cannot be named without a reference to '.pnpm/eslint-flat-config-utils@0.2.5/node_modules/eslint-flat-config-utils'. This is likely not portable. A type annotation is necessary.`
export * from 'eslint-flat-config-utils'
