import type { GENERATOR, STYLER, IS_EMPTY } from '../symbols'

import type ChalkInstance from './ChalkInstance'
import type Styler from './Styler'

interface Builder extends ChalkInstance {
  readonly [GENERATOR]?: Builder
  readonly [STYLER]?: Styler
  readonly [IS_EMPTY]?: boolean
}

export default Builder
