import type { Builder } from '../types'

import { STYLER } from '../symbols'

import { createBuilder } from '../utils'

const createVisible = (
  styles: any
): void => {
  styles.visible = {
    get () {
      const self = this as Builder
      const builder = createBuilder(self, self[STYLER], true)
      Object.defineProperty(self, 'visible', { value: builder })
      return builder
    }
  }
}

export default createVisible
