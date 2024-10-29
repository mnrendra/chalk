import styles, {
  type Styles,
  type ModifierName,
  type ForegroundColorName,
  type BackgroundColorName,
  type ColorName,
  ansiStyles,
  modifierNames,
  foregroundColorNames,
  backgroundColorNames,
  colorNames
} from '@mnrendra/chalk-ansi-styles'

// TODO: Remove these aliases in the next major version

/**
 * @deprecated Use `ModifierName` instead.
 *
 * Basic modifier names.
 */
export type Modifiers = ModifierName

/**
 * @deprecated Use `ForegroundColorName` instead.
 *
 * Basic foreground color names.
 *
 * [More colors here.](https://github.com/chalk/chalk/blob/main/readme.md#256-and-truecolor-color-support)
 */
export type ForegroundColor = ForegroundColorName

/**
 * @deprecated Use `BackgroundColorName` instead.
 *
 * Basic background color names.
 *
 * [More colors here.](https://github.com/chalk/chalk/blob/main/readme.md#256-and-truecolor-color-support)
 */
export type BackgroundColor = BackgroundColorName

/**
 * @deprecated Use `ColorName` instead.
 *
 * Basic color names. The combination of `foreground` and `background` color
 * names.
 *
 * [More colors here.](https://github.com/chalk/chalk/blob/main/readme.md#256-and-truecolor-color-support)
 */
export type Color = ColorName

// TODO: Remove these aliases in the next major version

/**
 * @deprecated Use `modifierNames` instead.
 *
 * Basic modifier names.
 */
export const modifiers = modifierNames

/**
 * @deprecated Use `foregroundColorNames` instead.
 *
 * Basic foreground color names.
 */
export const foregroundColors = foregroundColorNames

/**
 * @deprecated Use `backgroundColorNames` instead.
 *
 * Basic background color names.
 */
export const backgroundColors = backgroundColorNames

/**
 * @deprecated Use `colorNames` instead.
 *
 * Basic color names. The combination of `foreground` and `background` color
 * names.
 */
export const colors = colorNames

export {
  type Styles,
  type ModifierName,
  type ForegroundColorName,
  type BackgroundColorName,
  type ColorName,
  ansiStyles,
  modifierNames,
  foregroundColorNames,
  backgroundColorNames,
  colorNames
}

export default styles
