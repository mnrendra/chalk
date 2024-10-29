import type { Builder } from '../types'

import { ansiStyles } from '../vendors/ansi-styles'

import { STYLER, IS_EMPTY } from '../symbols'

import { createStyler, createBuilder } from '../utils'

const LEVELS = ['ansi', 'ansi', 'ansi256', 'ansi16m'] as const
type Level = typeof LEVELS[number]

const MODELS = ['rgb', 'hex', 'ansi256'] as const
type Model = typeof MODELS[number]

type Layer = 'color' | 'bgColor'

const getModelAnsi = (
  model: Model,
  level: Level,
  type: Layer,
  ...args: number[]
): string => {
  if (model === 'rgb') {
    if (level === 'ansi16m') {
      return ansiStyles[type].ansi16m(args[0], args[1], args[2])
    }

    if (level === 'ansi256') {
      const ansi256 = ansiStyles.rgbToAnsi256(args[0], args[1], args[2])
      return ansiStyles[type].ansi256(ansi256)
    }

    const ansi = ansiStyles.rgbToAnsi(args[0], args[1], args[2])
    return ansiStyles[type].ansi(ansi)
  }

  if (model === 'hex') {
    const rgb = ansiStyles.hexToRgb(args[0])
    return getModelAnsi('rgb', level, type, ...rgb)
  }

  return ansiStyles[type].ansi256(args[0])
}

const createModel = <Self extends Builder = Builder, Lyr extends Layer = Layer>(
  self: Self,
  model: Model,
  layer: Lyr
) => (...args: number[]): Builder => {
    const open = getModelAnsi(model, LEVELS[self.level], layer, ...args)
    const { close } = ansiStyles[layer]
    const styler = createStyler(open, close as string, self[STYLER])
    return createBuilder(self, styler, self[IS_EMPTY])
  }

const createModels = (
  styles: any
): void => {
  for (const model of MODELS) {
    styles[model] = {
      get () {
        const self = this as Builder
        return createModel(self, model, 'color')
      }
    }

    const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1)
    styles[bgModel] = {
      get () {
        const self = this as Builder
        return createModel(self, model, 'bgColor')
      }
    }
  }
}

export default createModels
