import type { ChalkInstance, Options } from './types'

import { stderr } from './vendors/supports-color'

import applyOptions from './applyOptions'
import createStyles from './createStyles'

export function Chalk (
  options: Options = {}
): ChalkInstance {
  const chalk = (...text: unknown[]): string => text.join(' ')
  applyOptions(chalk as ChalkInstance, options)
  Object.setPrototypeOf(chalk, Chalk.prototype as object)
  return chalk as ChalkInstance
}

createStyles(Chalk)

export const chalk = Chalk()
export const chalkStderr = Chalk({
  level: stderr !== false ? stderr.level : 0
})

// Export `modifiers`
export const reset = chalk.reset
export const bold = chalk.bold
export const dim = chalk.dim
export const italic = chalk.italic
export const underline = chalk.underline
export const inverse = chalk.inverse
export const hidden = chalk.hidden
export const strikethrough = chalk.strikethrough
export const overline = chalk.overline

// Export `foreground`
export const black = chalk.black
export const red = chalk.red
export const green = chalk.green
export const yellow = chalk.yellow
export const blue = chalk.blue
export const magenta = chalk.magenta
export const cyan = chalk.cyan
export const white = chalk.white
export const gray = chalk.gray
export const grey = chalk.grey
export const blackBright = chalk.blackBright
export const redBright = chalk.redBright
export const greenBright = chalk.greenBright
export const yellowBright = chalk.yellowBright
export const blueBright = chalk.blueBright
export const magentaBright = chalk.magentaBright
export const cyanBright = chalk.cyanBright
export const whiteBright = chalk.whiteBright

// Export `background`
export const bgBlack = chalk.bgBlack
export const bgRed = chalk.bgRed
export const bgGreen = chalk.bgGreen
export const bgYellow = chalk.bgYellow
export const bgBlue = chalk.bgBlue
export const bgMagenta = chalk.bgMagenta
export const bgCyan = chalk.bgCyan
export const bgWhite = chalk.bgWhite
export const bgGray = chalk.bgGray
export const bgGrey = chalk.bgGrey
export const bgBlackBright = chalk.bgBlackBright
export const bgRedBright = chalk.bgRedBright
export const bgGreenBright = chalk.bgGreenBright
export const bgYellowBright = chalk.bgYellowBright
export const bgBlueBright = chalk.bgBlueBright
export const bgMagentaBright = chalk.bgMagentaBright
export const bgCyanBright = chalk.bgCyanBright
export const bgWhiteBright = chalk.bgWhiteBright

// Export `visible`
export const visible = chalk.visible

// Export `models`
export const hex = chalk.hex
export const rgb = chalk.rgb
export const ansi256 = chalk.ansi256
export const bgHex = chalk.bgHex
export const bgRgb = chalk.bgRgb
export const bgAnsi256 = chalk.bgAnsi256

export default chalk
