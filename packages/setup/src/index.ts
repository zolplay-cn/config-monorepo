import type { Config } from './types'

import { multiselect, outro, spinner } from '@clack/prompts'

import { eslintConfig, lintStagedConfig, prettierConfig, T3EnvConfig, TSConfig, VSCodeConfig } from './config'
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
    {
      label: VSCodeConfig.name,
      value: VSCodeConfig,
    },
    {
      label: TSConfig.name,
      value: TSConfig,
    },
    {
      label: T3EnvConfig.name,
      value: T3EnvConfig,
    },
  ],
  required: false,
})) as Config[] | undefined

const s = spinner()

s.start(`Setting up your project`)

selectedConfigs && (await install(selectedConfigs))

s.stop()

outro(`🚢 LFG!`)
