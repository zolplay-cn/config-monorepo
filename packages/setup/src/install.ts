// eslint-disable-next-line node/prefer-global/process
import { cwd } from 'node:process'
import { outputFile } from 'fs-extra/esm'
import { addDependency } from 'nypm'
import type { Config } from './types'

export async function install(config: Config[]) {
  const depsToInstall = {
    dependencies: config.flatMap((config) => config.dependencies || []),
    devDependencies: config.flatMap((config) => config.devDependencies || []),
  }

  await Promise.allSettled(
    Object.entries(depsToInstall).map(([type, dependencies]) => {
      return addDependency(dependencies, { cwd: cwd(), dev: type === 'devDependencies', silent: true })
    }),
  )

  await Promise.allSettled(
    config.map(async (config) => {
      config.files &&
        (await Promise.allSettled(
          config.files.map(async (file) => {
            // TODO ensure dir
            await outputFile(`${cwd()}/${file.path}`, file.content.trim(), { encoding: 'utf-8' })
          }),
        ))
    }),
  )
}
