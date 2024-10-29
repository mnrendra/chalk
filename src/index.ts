import main from './main'

export {
  type Modifiers,
  type ModifierName,
  type ForegroundColor,
  type ForegroundColorName,
  type BackgroundColor,
  type BackgroundColorName,
  type Color,
  type ColorName,
  modifiers,
  modifierNames,
  foregroundColors,
  foregroundColorNames,
  backgroundColors,
  backgroundColorNames,
  colors,
  colorNames
} from './vendors/ansi-styles'

export {
  type ColorInfo,
  type ColorSupport,
  type ColorSupportLevel,
  supportsColor,
  supportsColorStderr
} from './vendors/supports-color'

export type {
  Options,
  ChalkInstance
} from './types'

export {
  // modifier
  reset,
  bold,
  dim,
  italic,
  underline,
  inverse,
  hidden,
  strikethrough,
  overline,
  // foreground
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  gray,
  grey,
  blackBright,
  redBright,
  greenBright,
  yellowBright,
  blueBright,
  magentaBright,
  cyanBright,
  whiteBright,
  // background
  bgBlack,
  bgRed,
  bgGreen,
  bgYellow,
  bgBlue,
  bgMagenta,
  bgCyan,
  bgWhite,
  bgGray,
  bgGrey,
  bgBlackBright,
  bgRedBright,
  bgGreenBright,
  bgYellowBright,
  bgBlueBright,
  bgMagentaBright,
  bgCyanBright,
  bgWhiteBright,
  // visible
  visible,
  // models
  hex,
  rgb,
  ansi256,
  bgHex,
  bgRgb,
  bgAnsi256,
  // chalks
  chalk,
  chalkStderr,
  Chalk
} from './main'

export default main
