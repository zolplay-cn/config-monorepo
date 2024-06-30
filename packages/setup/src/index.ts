import type { Config } from './types'

import { multiselect, outro, spinner } from '@clack/prompts'

import { eslintConfig, lintStagedConfig, prettierConfig } from './config'
import { install } from './install'

const selectedConfigs = (await multiselect({
  message: 'Choose your setups',
  options: [
    {
      label: eslintConfig.name,
      value: eslintConfig,
    },
    {
      label: prettierConfig.name,
      value: prettierConfig,
    },
    {
      label: lintStagedConfig.name,
      value: lintStagedConfig,
    },
  ],
  required: false,
})) as Config[]

const s = spinner()

s.start(`Setting up your project`)

await install(selectedConfigs)

s.stop()

outro(`🚢 LFG!`)
