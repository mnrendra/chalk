import type { Builder } from '../types'

import { type Styles, ansiStyles } from '../vendors/ansi-styles'

import { STYLER, IS_EMPTY } from '../symbols'

import { createStyler, createBuilder } from '../utils'

const { entries, defineProperty } = Object

const createAnsiStyles = (
  styles: any
): void => {
  for (const [styleName, { open, close }] of entries(ansiStyles as Styles)) {
    styles[styleName] = {
      get () {
        const self = this as Builder
        const styler = createStyler(open, close, self[STYLER])
        const builder = createBuilder(self, styler, self[IS_EMPTY])
        defineProperty(self, styleName, { value: builder })
        return builder
      }
    }
  }
}

export default createAnsiStyles
