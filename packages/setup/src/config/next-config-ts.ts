import type { Config } from '../types'

export const nextTsConfig = {
  name: 'Next.config.ts',
  devDependencies: ['tsx'],
  files: [
    {
      path: 'next.config.mjs',
      content: `
import { tsImport } from 'tsx/esm/api'
    
const { default: module } = await tsImport('./next.config.ts', import.meta.url)

export default module.default`,
    },
    {
      path: 'next.config.ts',
      content: `
import type { NextConfig } from 'next'

const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
} satisfies NextConfig

export default nextConfig
      `,
    },
  ],
} satisfies Config
