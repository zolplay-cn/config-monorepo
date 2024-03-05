/* eslint-disable import/first */
// @ts-nocheck

export type InteropDefault<T> = T extends { default: infer U } ? U : T

/* #__NO_SIDE_EFFECTS__ */
function interopDefault<T>(m: T): InteropDefault<T> {
  return (m as any).default || m
}

import * as _pluginAntfu from 'eslint-plugin-antfu'
export const pluginAntfu: typeof import('eslint-plugin-antfu').default =
  interopDefault(_pluginAntfu)

import * as _pluginComments from 'eslint-plugin-eslint-comments'
export const pluginComments = interopDefault(_pluginComments)

import * as _pluginMarkdown from 'eslint-plugin-markdown'
export const pluginMarkdown = interopDefault(_pluginMarkdown)

import tseslint from 'typescript-eslint'
export { tseslint }

import * as _pluginUnicorn from 'eslint-plugin-unicorn'
export const pluginUnicorn = interopDefault(_pluginUnicorn)

import * as _pluginVue from 'eslint-plugin-vue'
export const pluginVue = interopDefault(_pluginVue)

import * as _pluginNode from 'eslint-plugin-n'
export const pluginNode = interopDefault(_pluginNode)

import * as _pluginPerfectionist from 'eslint-plugin-perfectionist'
export const pluginPerfectionist = interopDefault(_pluginPerfectionist)

import * as _pluginUnocss from '@unocss/eslint-plugin'
export const pluginUnocss: typeof import('@unocss/eslint-plugin').default =
  interopDefault(_pluginUnocss)

import * as _pluginPrettier from 'eslint-plugin-prettier'
export const pluginPrettier = interopDefault(_pluginPrettier)

import * as _configPrettier from 'eslint-config-prettier'
export const configPrettier = interopDefault(_configPrettier)

export * as pluginImport from 'eslint-plugin-i'
export * as pluginJsonc from 'eslint-plugin-jsonc'
export * as pluginUnusedImports from 'eslint-plugin-unused-imports'
export * as pluginYml from 'eslint-plugin-yml'

export * as parserVue from 'vue-eslint-parser'
export * as parserYml from 'yaml-eslint-parser'
export * as parserJsonc from 'jsonc-eslint-parser'
