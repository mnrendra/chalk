import type { Styler } from '../types'

const createStyler = (
  open: string,
  close: string,
  parent?: Styler
): Styler => {
  let openAll
  let closeAll

  if (parent === undefined) {
    openAll = open
    closeAll = close
  } else {
    openAll = parent.openAll + open
    closeAll = close + parent.closeAll
  }

  return {
    open,
    close,
    openAll,
    closeAll,
    parent
  }
}

export default createStyler
