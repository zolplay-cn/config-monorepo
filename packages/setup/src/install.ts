import { cwd } from 'node:process'
import { outputFile } from 'fs-extra/esm'
import { addDependency } from 'nypm'
import type { Config } from './types'

export async function install(config: Config[]) {
  await Promise.allSettled(
    config.map(async (config) => {
      config.dependencies && (await addDependency(config.dependencies, { cwd: cwd(), silent: false }))
      config.devDependencies && (await addDependency(config.devDependencies, { cwd: cwd(), dev: true, silent: false }))

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
