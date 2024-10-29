# @mnrendra/chalk

Refactored [chalk](https://github.com/chalk/chalk) code to support both **CommonJS (CJS)** and **ES Modules (ESM)** with mixed exports. This allows users to `import` or `require` the module without needing to access the `.default` property.

## Benefits
- ✅ Auto-detection for `browser` and `node` platforms
- ✅ Supports both **CommonJS (CJS)** and **ES Modules (ESM)**
- ✅ Mixed exports (no need to access `.default` for default value)
- ✅ Minified distribution package
- ✅ Well-tested (100% code coverage)
- ✅ **TypeScript** source code for easier development

## Reference
Refactored from the [original source code](https://github.com/chalk/chalk) since version [v5.3.0](https://github.com/chalk/chalk/releases/tag/v5.3.0), commit [4a10354](https://github.com/chalk/chalk/commit/4a10354857ba6d7932dad5fa6ef2e021c4ed47fb).<br/>
*This module will be kept updated with the original source code; contributions are welcome. 🙏*

## Install
```bash
npm i @mnrendra/chalk
```

## Usage
Using `CommonJS`:
```javascript
const main = require('@mnrendra/chalk')

const {
  Chalk,
  chalk,
  chalkStderr,
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
  // style names
  modifiers,
  modifierNames,
  foregroundColors,
  foregroundColorNames,
  backgroundColors,
  backgroundColorNames,
  colors,
  colorNames,
  // supports color
  supportsColor,
  supportsColorStderr
} = require('@mnrendra/chalk')

// from default export
console.log(main.bgRed.blue.strikethrough('abc'))
console.log(main.default.bgRed.blue.strikethrough('abc'))
// from named exports
console.log(chalk.bgRed.blue.strikethrough('abc'))
console.log(bgRed.blue.strikethrough('abc'))
console.log(new Chalk({ level: 3 }).bgRed.blue.strikethrough('abc'))
console.log(chalkStderr.bgRed.blue.strikethrough('abc'))
console.log(`${[...modifiers, ...colors]}` === `${[...modifierNames, ...foregroundColorNames, ...backgroundColorNames]}`)
```

Using `ES Modules`:
```javascript
import main, {
  Chalk,
  chalk,
  chalkStderr,
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
  // style names
  modifiers,
  modifierNames,
  foregroundColors,
  foregroundColorNames,
  backgroundColors,
  backgroundColorNames,
  colors,
  colorNames,
  // supports color
  supportsColor,
  supportsColorStderr
} from '@mnrendra/chalk'

// from default export
console.log(main.bgRed.blue.strikethrough('abc'))
// from named exports
console.log(chalk.bgRed.blue.strikethrough('abc'))
console.log(bgRed.blue.strikethrough('abc'))
console.log(new Chalk({ level: 3 }).bgRed.blue.strikethrough('abc'))
console.log(chalkStderr.bgRed.blue.strikethrough('abc'))
console.log(`${[...modifiers, ...colors]}` === `${[...modifierNames, ...foregroundColorNames, ...backgroundColorNames]}`)
```

For more details, refer to the original source code: [https://github.com/chalk/chalk](https://github.com/chalk/chalk).

## Types
```typescript
import type {
  ColorSupportLevel,
  ColorSupport,
  ColorInfo,
  SupportsColor,
  Options
} from '@mnrendra/chalk'
```

## Contribute
Contributions are always welcome! Please open discussions [here](https://github.com/mnrendra/chalk/discussions).

## Special Thanks 🙇
- [sindresorhus](https://github.com/sindresorhus) for creating the [original source code](https://github.com/chalk/chalk).
- [Qix-](https://github.com/Qix-) for being the active maintainer of the [original source code](https://github.com/chalk/chalk).
- and all [contributors](https://github.com/chalk/chalk/graphs/contributors) who contributed to the original source code.

## License
[MIT](https://github.com/mnrendra/chalk/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
