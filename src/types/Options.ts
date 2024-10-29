import type { ColorSupportLevel } from '../vendors/supports-color'

interface Options {
  /**
   * Specify the color support for Chalk.
   *
   * By default, color support is automatically detected based on the
   * environment.
   *
   * Levels:
   * - `0` - All colors disabled.
   * - `1` - Basic 16 colors support.
   * - `2` - ANSI 256 colors support.
   * - `3` - Truecolor 16 million colors support.
   */
  readonly level?: ColorSupportLevel
}

export default Options
