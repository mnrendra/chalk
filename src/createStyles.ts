import type { Chalk, Properties } from './types'

import { GENERATOR } from './symbols'

import store from './store'

import {
  createAnsiStyles,
  createVisible,
  createModels
} from './styles'

const { setPrototypeOf, defineProperties } = Object

const createStyles = (
  chalk: Chalk
): void => {
  const styles = Object.create(null)

  setPrototypeOf(chalk.prototype, Function.prototype)

  createAnsiStyles(styles)

  createVisible(styles)

  createModels(styles)

  store.proto = defineProperties(() => {}, {
    ...styles as Properties<typeof styles>,
    level: {
      enumerable: true,
      get () {
        return this[GENERATOR].level
      },
      set (level) {
        this[GENERATOR].level = level
      }
    }
  })

  defineProperties(
    chalk.prototype,
    styles as Properties<typeof styles>
  )
}

export default createStyles
