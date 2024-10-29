import type { ChalkInstance, Options } from './types'

import { stdout } from './vendors/supports-color'

const applyOptions = (
  chalk: ChalkInstance,
  { level }: Options = {}
): void => {
  if (level !== undefined && ![0, 1, 2, 3].includes(level)) {
    throw new Error('The `level` option should be an integer from 0 to 3!')
  }

  // Detect level if not set manually
  const colorLevel = stdout !== false ? stdout.level : 0
  chalk.level = level ?? colorLevel
}

export default applyOptions
