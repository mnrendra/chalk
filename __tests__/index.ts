import styles, {
  ansiStyles,
  modifierNames as ansiModifierNames,
  foregroundColorNames as ansiForegroundColorNames,
  backgroundColorNames as ansiBackgroundColorNames,
  colorNames as ansiColorNames
} from '@mnrendra/chalk-ansi-styles'

import str from '@tests/utils/stringify'

import index, {
  type ColorSupportLevel,
  Chalk,
  chalk,
  chalkStderr,
  // style-names
  modifiers,
  modifierNames,
  foregroundColors,
  foregroundColorNames,
  backgroundColors,
  backgroundColorNames,
  colors,
  colorNames,
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
  // foregrounds
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
  // foregrounds
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
  bgWhiteBright
} from '..'

type StyleNames = keyof typeof styles

const testAnsiStyles = (): void => {
  Object.keys(styles).forEach((styl) => {
    const style: StyleNames = styl as StyleNames

    describe(`Test \`${style}\` function:`, () => {
      const { open, close } = styles[style]

      describe('By mocking the default `level` to be `3`:', () => {
        let originalLevel: any

        beforeEach(() => {
          originalLevel = index.level
          index.level = 3
        })

        afterEach(() => {
          index.level = originalLevel
        })

        it(`Should return '${str(open)} abc ${str(close)}' when given ' abc '!`, () => {
          const received = index[style](' abc ')
          const expected = `${open} abc ${close}`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(open)} abc ${str(close)}${str('\n')}${str(open)} def ${str(close)}' when given ' abc ${str('\n')} def '!`, () => {
          const received = index[style](' abc \n def ')
          const expected = `${open} abc ${close}\n${open} def ${close}`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(open)} abc ${str(close)}${str('\r')}${str('\n')}${str(open)} def ${str(close)}' when given ' abc ${str('\r')}${str('\n')} def '!`, () => {
          const received = index[style](' abc \r\n def ')
          const expected = `${open} abc ${close}\r\n${open} def ${close}`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(open)} abc ${str(open)} def ${str(close)}' when given ' abc ${str(open)} def '!`, () => {
          const received = index[style](` abc ${open} def `)
          const expected = style === 'reset' ? `${open} abc ${open}${open} def ${close}` : `${open} abc ${open} def ${close}`
          expect(received).toBe(expected)
        })
      })

      describe('By mocking the default `level` to be `2`:', () => {
        let originalLevel: any

        beforeEach(() => {
          originalLevel = index.level
          index.level = 2
        })

        afterEach(() => {
          index.level = originalLevel
        })

        it(`Should return '${str(open)} abc ${str(close)}' when given ' abc '!`, () => {
          const received = index[style](' abc ')
          const expected = `${open} abc ${close}`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(open)} abc ${str(close)}${str('\n')}${str(open)} def ${str(close)}' when given ' abc ${str('\n')} def '!`, () => {
          const received = index[style](' abc \n def ')
          const expected = `${open} abc ${close}\n${open} def ${close}`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(open)} abc ${str(close)}${str('\r')}${str('\n')}${str(open)} def ${str(close)}' when given ' abc ${str('\r')}${str('\n')} def '!`, () => {
          const received = index[style](' abc \r\n def ')
          const expected = `${open} abc ${close}\r\n${open} def ${close}`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(open)} abc ${str(open)} def ${str(close)}' when given ' abc ${str(open)} def '!`, () => {
          const received = index[style](` abc ${open} def `)
          const expected = style === 'reset' ? `${open} abc ${open}${open} def ${close}` : `${open} abc ${open} def ${close}`
          expect(received).toBe(expected)
        })
      })

      describe('By mocking the default `level` to be `1`:', () => {
        let originalLevel: any

        beforeEach(() => {
          originalLevel = index.level
          index.level = 1
        })

        afterEach(() => {
          index.level = originalLevel
        })

        it(`Should return '${str(open)} abc ${str(close)}' when given ' abc '!`, () => {
          const received = index[style](' abc ')
          const expected = `${open} abc ${close}`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(open)} abc ${str(close)}${str('\n')}${str(open)} def ${str(close)}' when given ' abc ${str('\n')} def '!`, () => {
          const received = index[style](' abc \n def ')
          const expected = `${open} abc ${close}\n${open} def ${close}`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(open)} abc ${str(close)}${str('\r')}${str('\n')}${str(open)} def ${str(close)}' when given ' abc ${str('\r')}${str('\n')} def '!`, () => {
          const received = index[style](' abc \r\n def ')
          const expected = `${open} abc ${close}\r\n${open} def ${close}`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(open)} abc ${str(open)} def ${str(close)}' when given ' abc ${str(open)} def '!`, () => {
          const received = index[style](` abc ${open} def `)
          const expected = style === 'reset' ? `${open} abc ${open}${open} def ${close}` : `${open} abc ${open} def ${close}`
          expect(received).toBe(expected)
        })
      })

      describe('By mocking the default `level` to be `0`:', () => {
        let originalLevel: any

        beforeEach(() => {
          originalLevel = index.level
          index.level = 0
        })

        afterEach(() => {
          index.level = originalLevel
        })

        it('Should return \' abc \' when given \' abc \'!', () => {
          const received = index[style](' abc ')
          const expected = ' abc '
          expect(received).toBe(expected)
        })

        it(`Should return ' abc ${str('\n')} def ' when given ' abc ${str('\n')} def '!`, () => {
          const received = index[style](' abc \n def ')
          const expected = ' abc \n def '
          expect(received).toBe(expected)
        })

        it(`Should return ' abc ${str('\r')}${str('\n')} def ' when given ' abc ${str('\r')}${str('\n')} def '!`, () => {
          const received = index[style](' abc \r\n def ')
          const expected = ' abc \r\n def '
          expect(received).toBe(expected)
        })

        it('Should return \' abc  def \' when given \' abc  def \'!', () => {
          const received = index[style](` abc ${open} def `)
          const expected = ` abc ${open} def `
          expect(received).toBe(expected)
        })
      })
    })
  })
}

const testVisible = (): void => {
  describe('Test `visible` function:', () => {
    describe('By mocking the default `level` to be `3`:', () => {
      let originalLevel: any

      beforeEach(() => {
        originalLevel = index.level
        index.level = 3
      })

      afterEach(() => {
        index.level = originalLevel
      })

      it('Should return \' abc \' when given \' abc \'!', () => {
        const received = index.visible(' abc ')
        const expected = ' abc '
        expect(received).toBe(expected)
      })

      it(`Should return ' abc ${str('\n')} def ' when given ' abc ${str('\n')} def '!`, () => {
        const received = index.visible(' abc \n def ')
        const expected = ' abc \n def '
        expect(received).toBe(expected)
      })

      it(`Should return ' abc ${str('\r')}${str('\n')} def ' when given ' abc ${str('\r')}${str('\n')} def '!`, () => {
        const received = index.visible(' abc \r\n def ')
        const expected = ' abc \r\n def '
        expect(received).toBe(expected)
      })

      it('Should return \' abc  def \' when given \' abc  def \'!', () => {
        const received = index.visible(' abc  def ')
        const expected = ' abc  def '
        expect(received).toBe(expected)
      })
    })

    describe('By mocking the default `level` to be `2`:', () => {
      let originalLevel: any

      beforeEach(() => {
        originalLevel = index.level
        index.level = 2
      })

      afterEach(() => {
        index.level = originalLevel
      })

      it('Should return \' abc \' when given \' abc \'!', () => {
        const received = index.visible(' abc ')
        const expected = ' abc '
        expect(received).toBe(expected)
      })

      it(`Should return ' abc ${str('\n')} def ' when given ' abc ${str('\n')} def '!`, () => {
        const received = index.visible(' abc \n def ')
        const expected = ' abc \n def '
        expect(received).toBe(expected)
      })

      it(`Should return ' abc ${str('\r')}${str('\n')} def ' when given ' abc ${str('\r')}${str('\n')} def '!`, () => {
        const received = index.visible(' abc \r\n def ')
        const expected = ' abc \r\n def '
        expect(received).toBe(expected)
      })

      it('Should return \' abc  def \' when given \' abc  def \'!', () => {
        const received = index.visible(' abc  def ')
        const expected = ' abc  def '
        expect(received).toBe(expected)
      })
    })

    describe('By mocking the default `level` to be `1`:', () => {
      let originalLevel: any

      beforeEach(() => {
        originalLevel = index.level
        index.level = 1
      })

      afterEach(() => {
        index.level = originalLevel
      })

      it('Should return \' abc \' when given \' abc \'!', () => {
        const received = index.visible(' abc ')
        const expected = ' abc '
        expect(received).toBe(expected)
      })

      it(`Should return ' abc ${str('\n')} def ' when given ' abc ${str('\n')} def '!`, () => {
        const received = index.visible(' abc \n def ')
        const expected = ' abc \n def '
        expect(received).toBe(expected)
      })

      it(`Should return ' abc ${str('\r')}${str('\n')} def ' when given ' abc ${str('\r')}${str('\n')} def '!`, () => {
        const received = index.visible(' abc \r\n def ')
        const expected = ' abc \r\n def '
        expect(received).toBe(expected)
      })

      it('Should return \' abc  def \' when given \' abc  def \'!', () => {
        const received = index.visible(' abc  def ')
        const expected = ' abc  def '
        expect(received).toBe(expected)
      })
    })

    describe('By mocking the default `level` to be `0`:', () => {
      let originalLevel: any

      beforeEach(() => {
        originalLevel = index.level
        index.level = 0
      })

      afterEach(() => {
        index.level = originalLevel
      })

      it('Should return \'\' when given \' abc \'!', () => {
        const received = index.visible(' abc ')
        const expected = ''
        expect(received).toBe(expected)
      })

      it(`Should return '' when given ' abc ${str('\n')} def '!`, () => {
        const received = index.visible(' abc \n def ')
        const expected = ''
        expect(received).toBe(expected)
      })

      it(`Should return '' when given ' abc ${str('\r')}${str('\n')} def '!`, () => {
        const received = index.visible(' abc \r\n def ')
        const expected = ''
        expect(received).toBe(expected)
      })

      it('Should return \'\' when given \' abc  def \'!', () => {
        const received = index.visible(' abc  def ')
        const expected = ''
        expect(received).toBe(expected)
      })
    })
  })
}

const testModels = (): void => {
  ['hex', 'bgHex'].forEach((mdl, i) => {
    const model: 'hex' | 'bgHex' = mdl as 'hex' | 'bgHex'
    const lyr = i === 0 ? '3' : '4'

    describe(`Test \`${model}\` function:`, () => {
      describe('By mocking the default `level` to be `3`:', () => {
        let originalLevel: any

        beforeEach(() => {
          originalLevel = index.level
          index.level = 3
        })

        afterEach(() => {
          index.level = originalLevel
        })

        it(`Should return '${str(`\u001b[${lyr}8;2;255;0;0m`)} abc ${str(`\u001b[${lyr}9m`)}' when given '#FF0000' and ' abc '!`, () => {
          const received = index[model]('#FF0000')(' abc ')
          const expected = `\u001b[${lyr}8;2;255;0;0m abc \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr}8;2;0;255;0m`)} abc ${str(`\u001b[${lyr}9m`)}${str('\n')}${str(`\u001b[${lyr}8;2;0;255;0m`)} def ${str(`\u001b[${lyr}9m`)}' when given '#00FF00' and ' abc ${str('\n')} def '!`, () => {
          const received = index[model]('#00FF00')(' abc \n def ')
          const expected = `\u001b[${lyr}8;2;0;255;0m abc \u001b[${lyr}9m\n\u001b[${lyr}8;2;0;255;0m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr}8;2;0;0;255m`)} abc ${str(`\u001b[${lyr}9m`)}${str('\r')}${str('\n')}${str(`\u001b[${lyr}8;2;0;0;255m`)} def ${str(`\u001b[${lyr}9m`)}' when given '#0000FF' and ' abc ${str('\r')}${str('\n')} def '!`, () => {
          const received = index[model]('#0000FF')(' abc \r\n def ')
          const expected = `\u001b[${lyr}8;2;0;0;255m abc \u001b[${lyr}9m\r\n\u001b[${lyr}8;2;0;0;255m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr}8;2;255;0;255m`)} abc ${str(`\u001b[${lyr}8;2;255;0;255m`)} def ${str(`\u001b[${lyr}9m`)}' when given '#FF00FF' and ' abc ${str(`\u001b[${lyr}8;2;255;0;255m`)} def '!`, () => {
          const received = index[model]('#FF00FF')(` abc \u001b[${lyr}8;2;255;0;255m def `)
          const expected = `\u001b[${lyr}8;2;255;0;255m abc \u001b[${lyr}8;2;255;0;255m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })
      })

      describe('By mocking the default `level` to be `2`:', () => {
        let originalLevel: any

        beforeEach(() => {
          originalLevel = index.level
          index.level = 2
        })

        afterEach(() => {
          index.level = originalLevel
        })

        it(`Should return '${str(`\u001b[${lyr}8;5;196m`)} abc ${str(`\u001b[${lyr}9m`)}' when given '#FF0000' and ' abc '!`, () => {
          const received = index[model]('#FF0000')(' abc ')
          const expected = `\u001b[${lyr}8;5;196m abc \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr}8;5;46m`)} abc ${str(`\u001b[${lyr}9m`)}${str('\n')}${str(`\u001b[${lyr}8;5;46m`)} def ${str(`\u001b[${lyr}9m`)}' when given '#00FF00' and ' abc ${str('\n')} def '!`, () => {
          const received = index[model]('#00FF00')(' abc \n def ')
          const expected = `\u001b[${lyr}8;5;46m abc \u001b[${lyr}9m\n\u001b[${lyr}8;5;46m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr}8;5;21m`)} abc ${str(`\u001b[${lyr}9m`)}${str('\r')}${str('\n')}${str(`\u001b[${lyr}8;5;21m`)} def ${str(`\u001b[${lyr}9m`)}' when given '#0000FF' and ' abc ${str('\r')}${str('\n')} def '!`, () => {
          const received = index[model]('#0000FF')(' abc \r\n def ')
          const expected = `\u001b[${lyr}8;5;21m abc \u001b[${lyr}9m\r\n\u001b[${lyr}8;5;21m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr}8;5;201m`)} abc ${str(`\u001b[${lyr}8;5;201m`)} def ${str(`\u001b[${lyr}9m`)}' when given '#FF00FF' and ' abc ${str(`\u001b[${lyr}8;5;201m`)} def '!`, () => {
          const received = index[model]('#FF00FF')(` abc \u001b[${lyr}8;5;201m def `)
          const expected = `\u001b[${lyr}8;5;201m abc \u001b[${lyr}8;5;201m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })
      })

      describe('By mocking the default `level` to be `1`:', () => {
        let originalLevel: any

        beforeEach(() => {
          originalLevel = index.level
          index.level = 1
        })

        afterEach(() => {
          index.level = originalLevel
        })

        it(`Should return '${str('\u001b[91m')} abc ${str(`\u001b[${lyr}9m`)}' when given '#FF0000' and ' abc '!`, () => {
          const received = index[model]('#FF0000')(' abc ')
          const expected = `\u001b[91m abc \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str('\u001b[92m')} abc ${str(`\u001b[${lyr}9m`)}${str('\n')}${str('\u001b[92m')} def ${str(`\u001b[${lyr}9m`)}' when given '#00FF00' and ' abc ${str('\n')} def '!`, () => {
          const received = index[model]('#00FF00')(' abc \n def ')
          const expected = `\u001b[92m abc \u001b[${lyr}9m\n\u001b[92m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str('\u001b[94m')} abc ${str(`\u001b[${lyr}9m`)}${str('\r')}${str('\n')}${str('\u001b[94m')} def ${str(`\u001b[${lyr}9m`)}' when given '#0000FF' and ' abc ${str('\r')}${str('\n')} def '!`, () => {
          const received = index[model]('#0000FF')(' abc \r\n def ')
          const expected = `\u001b[94m abc \u001b[${lyr}9m\r\n\u001b[94m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str('\u001b[95m')} abc ${str('\u001b[95m')} def ${str(`\u001b[${lyr}9m`)}' when given '#FF00FF' and ' abc ${str('\u001b[95m')} def '!`, () => {
          const received = index[model]('#FF00FF')(' abc \u001b[95m def ')
          const expected = `\u001b[95m abc \u001b[95m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })
      })

      describe('By mocking the default `level` to be `0`:', () => {
        let originalLevel: any

        beforeEach(() => {
          originalLevel = index.level
          index.level = 0
        })

        afterEach(() => {
          index.level = originalLevel
        })

        it('Should return \' abc \' when given \'#FF0000\' and \' abc \'!', () => {
          const received = index[model]('#FF0000')(' abc ')
          const expected = ' abc '
          expect(received).toBe(expected)
        })

        it(`Should return ' abc ${str('\n')} def ' when given '#00FF00' and ' abc ${str('\n')} def '!`, () => {
          const received = index[model]('#00FF00')(' abc \n def ')
          const expected = ' abc \n def '
          expect(received).toBe(expected)
        })

        it(`Should return ' abc ${str('\r')}${str('\n')} def ' when given '#0000FF' and ' abc ${str('\r')}${str('\n')} def '!`, () => {
          const received = index[model]('#0000FF')(' abc \r\n def ')
          const expected = ' abc \r\n def '
          expect(received).toBe(expected)
        })

        it(`Should return ' abc ${str('\u001Bm')} def ' when given '#FF00FF' and ' abc ${str('\u001Bm')} def '!`, () => {
          const received = index[model]('#FF00FF')(' abc \u001Bm def ')
          const expected = ' abc \u001Bm def '
          expect(received).toBe(expected)
        })
      })
    })
  });

  ['rgb', 'bgRgb'].forEach((mdl, i) => {
    const model: 'rgb' | 'bgRgb' = mdl as 'rgb' | 'bgRgb'
    const lyr = i === 0 ? '3' : '4'

    describe(`Test \`${model}\` function:`, () => {
      describe('By mocking the default `level` to be `3`:', () => {
        let originalLevel: any

        beforeEach(() => {
          originalLevel = index.level
          index.level = 3
        })

        afterEach(() => {
          index.level = originalLevel
        })

        it(`Should return '${str(`\u001b[${lyr}8;2;255;0;0m`)} abc ${str(`\u001b[${lyr}9m`)}' when given \`255, 0, 0\` and ' abc '!`, () => {
          const received = index[model](255, 0, 0)(' abc ')
          const expected = `\u001b[${lyr}8;2;255;0;0m abc \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr}8;2;0;255;0m`)} abc ${str(`\u001b[${lyr}9m`)}${str('\n')}${str(`\u001b[${lyr}8;2;0;255;0m`)} def ${str(`\u001b[${lyr}9m`)}' when given \`0, 255, 0\` and ' abc ${str('\n')} def '!`, () => {
          const received = index[model](0, 255, 0)(' abc \n def ')
          const expected = `\u001b[${lyr}8;2;0;255;0m abc \u001b[${lyr}9m\n\u001b[${lyr}8;2;0;255;0m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr}8;2;0;0;255m`)} abc ${str(`\u001b[${lyr}9m`)}${str('\r')}${str('\n')}${str(`\u001b[${lyr}8;2;0;0;255m`)} def ${str(`\u001b[${lyr}9m`)}' when given \`0, 0, 255\` and ' abc ${str('\r')}${str('\n')} def '!`, () => {
          const received = index[model](0, 0, 255)(' abc \r\n def ')
          const expected = `\u001b[${lyr}8;2;0;0;255m abc \u001b[${lyr}9m\r\n\u001b[${lyr}8;2;0;0;255m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr}8;2;255;0;255m`)} abc ${str(`\u001b[${lyr}8;2;255;0;255m`)} def ${str(`\u001b[${lyr}9m`)}' when given \`255, 0, 255\` and ' abc ${str(`\u001b[${lyr}8;2;255;0;255m`)} def '!`, () => {
          const received = index[model](255, 0, 255)(` abc \u001b[${lyr}8;2;255;0;255m def `)
          const expected = `\u001b[${lyr}8;2;255;0;255m abc \u001b[${lyr}8;2;255;0;255m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })
      })

      describe('By mocking the default `level` to be `2`:', () => {
        let originalLevel: any

        beforeEach(() => {
          originalLevel = index.level
          index.level = 2
        })

        afterEach(() => {
          index.level = originalLevel
        })

        it(`Should return '${str(`\u001b[${lyr}8;5;196m`)} abc ${str(`\u001b[${lyr}9m`)}' when given \`255, 0, 0\` and ' abc '!`, () => {
          const received = index[model](255, 0, 0)(' abc ')
          const expected = `\u001b[${lyr}8;5;196m abc \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr};5;46m`)} abc ${str(`\u001b[${lyr}9m`)}${str('\n')}${str(`\u001b[${lyr};5;46m`)} def ${str(`\u001b[${lyr}9m`)}' when given \`0, 255, 0\` and ' abc ${str('\n')} def '!`, () => {
          const received = index[model](0, 255, 0)(' abc \n def ')
          const expected = `\u001b[${lyr}8;5;46m abc \u001b[${lyr}9m\n\u001b[${lyr}8;5;46m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr};5;21m`)} abc ${str(`\u001b[${lyr}9m`)}${str('\r')}${str('\n')}${str(`\u001b[${lyr};5;21m`)} def ${str(`\u001b[${lyr}9m`)}' when given \`0, 0, 255\` and ' abc ${str('\r')}${str('\n')} def '!`, () => {
          const received = index[model](0, 0, 255)(' abc \r\n def ')
          const expected = `\u001b[${lyr}8;5;21m abc \u001b[${lyr}9m\r\n\u001b[${lyr}8;5;21m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr};5;201m`)} abc ${str(`\u001b[${lyr};5;201m`)} def ${str(`\u001b[${lyr}9m`)}' when given \`255, 0, 255\` and ' abc ${str(`\u001b[${lyr};5;201m`)} def '!`, () => {
          const received = index[model](255, 0, 255)(` abc \u001b[${lyr}8;5;201m abc def `)
          const expected = `\u001b[${lyr}8;5;201m abc \u001b[${lyr}8;5;201m abc def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })
      })

      describe('By mocking the default `level` to be `1`:', () => {
        let originalLevel: any

        beforeEach(() => {
          originalLevel = index.level
          index.level = 1
        })

        afterEach(() => {
          index.level = originalLevel
        })

        it(`Should return '${str('\u001b[91m')} abc ${str(`\u001b[${lyr}9m`)}' when given \`255, 0, 0\` and ' abc '!`, () => {
          const received = index[model](255, 0, 0)(' abc ')
          const expected = `\u001b[91m abc \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str('\u001b[92m')} abc ${str(`\u001b[${lyr}9m`)}${str('\n')}${str('\u001b[92m')} def ${str(`\u001b[${lyr}9m`)}' when given \`0, 255, 0\` and ' abc ${str('\n')} def '!`, () => {
          const received = index[model](0, 255, 0)(' abc \n def ')
          const expected = `\u001b[92m abc \u001b[${lyr}9m\n\u001b[92m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str('\u001b[94m')} abc ${str(`\u001b[${lyr}9m`)}${str('\r')}${str('\n')}${str('\u001b[94m')} def ${str(`\u001b[${lyr}9m`)}' when given \`0, 0, 255\` and ' abc ${str('\r')}${str('\n')} def '!`, () => {
          const received = index[model](0, 0, 255)(' abc \r\n def ')
          const expected = `\u001b[94m abc \u001b[${lyr}9m\r\n\u001b[94m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str('\u001b[95m')} abc ${str('\u001b[95m')} def ${str(`\u001b[${lyr}9m`)}' when given \`255, 0, 255\` and ' abc ${str('\u001b[95m')} def '!`, () => {
          const received = index[model](255, 0, 255)(' abc \u001b[95m def ')
          const expected = `\u001b[95m abc \u001b[95m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })
      })

      describe('By mocking the default `level` to be `0`:', () => {
        let originalLevel: any

        beforeEach(() => {
          originalLevel = index.level
          index.level = 0
        })

        afterEach(() => {
          index.level = originalLevel
        })

        it('Should return \' abc \' when given `255, 0, 0` and \' abc \'!', () => {
          const received = index[model](255, 0, 0)(' abc ')
          const expected = ' abc '
          expect(received).toBe(expected)
        })

        it(`Should return ' abc ${str('\n')} def ' when given \`0, 255, 0\` and ' abc ${str('\n')} def '!`, () => {
          const received = index[model](0, 255, 0)(' abc \n def ')
          const expected = ' abc \n def '
          expect(received).toBe(expected)
        })

        it(`Should return ' abc ${str('\r')}${str('\n')} def ' when given \`0, 0, 255\` and ' abc ${str('\r')}${str('\n')} def '!`, () => {
          const received = index[model](0, 0, 255)(' abc \r\n def ')
          const expected = ' abc \r\n def '
          expect(received).toBe(expected)
        })

        it(`Should return ' abc ${str('\u001Bm')} def ' when given \`255, 0, 255\` and ' abc ${str('\u001Bm')} def '!`, () => {
          const received = index[model](255, 0, 255)(' abc \u001Bm def ')
          const expected = ' abc \u001Bm def '
          expect(received).toBe(expected)
        })
      })
    })
  });

  ['ansi256', 'bgAnsi256'].forEach((mdl, i) => {
    const model: 'ansi256' | 'bgAnsi256' = mdl as 'ansi256' | 'bgAnsi256'
    const lyr = i === 0 ? '3' : '4'

    describe(`Test \`${model}\` function:`, () => {
      describe('By mocking the default `level` to be `3`:', () => {
        let originalLevel: any

        beforeEach(() => {
          originalLevel = index.level
          index.level = 3
        })

        afterEach(() => {
          index.level = originalLevel
        })

        it(`Should return '${str(`\u001b[${lyr}8;5;255m`)} abc ${str(`\u001b[${lyr}9m`)}' when given \`255\` and ' abc '!`, () => {
          const received = index[model](255)(' abc ')
          const expected = `\u001b[${lyr}8;5;255m abc \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr}8;5;200m`)} abc ${str(`\u001b[${lyr}9m`)}${str('\n')}${str(`\u001b[${lyr}8;5;200m`)} def ${str(`\u001b[${lyr}9m`)}' when given \`200\` and ' abc ${str('\n')} def '!`, () => {
          const received = index[model](200)(' abc \n def ')
          const expected = `\u001b[${lyr}8;5;200m abc \u001b[${lyr}9m\n\u001b[${lyr}8;5;200m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr}8;5;155m`)} abc ${str(`\u001b[${lyr}9m`)}${str('\r')}${str('\n')}${str(`\u001b[${lyr}8;5;155m`)} def ${str(`\u001b[${lyr}9m`)}' when given \`155\` and ' abc ${str('\r')}${str('\n')} def '!`, () => {
          const received = index[model](155)(' abc \r\n def ')
          const expected = `\u001b[${lyr}8;5;155m abc \u001b[${lyr}9m\r\n\u001b[${lyr}8;5;155m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr}8;5;100m`)} abc ${str(`\u001b[${lyr}8;5;100m`)} def ${str(`\u001b[${lyr}9m`)}' when given \`100\` and ' abc ${str(`\u001b[${lyr}8;5;100m`)} def '!`, () => {
          const received = index[model](100)(` abc \u001b[${lyr}8;5;100m def `)
          const expected = `\u001b[${lyr}8;5;100m abc \u001b[${lyr}8;5;100m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })
      })

      describe('By mocking the default `level` to be `2`:', () => {
        let originalLevel: any

        beforeEach(() => {
          originalLevel = index.level
          index.level = 2
        })

        afterEach(() => {
          index.level = originalLevel
        })

        it(`Should return '${str(`\u001b[${lyr}8;5;255m`)} abc ${str(`\u001b[${lyr}9m`)}' when given \`255\` and ' abc '!`, () => {
          const received = index[model](255)(' abc ')
          const expected = `\u001b[${lyr}8;5;255m abc \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr}8;5;200m`)} abc ${str(`\u001b[${lyr}9m`)}${str('\n')}${str(`\u001b[${lyr}8;5;200m`)} def ${str(`\u001b[${lyr}9m`)}' when given \`200\` and ' abc ${str('\n')} def '!`, () => {
          const received = index[model](200)(' abc \n def ')
          const expected = `\u001b[${lyr}8;5;200m abc \u001b[${lyr}9m\n\u001b[${lyr}8;5;200m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr}8;5;155m`)} abc ${str(`\u001b[${lyr}9m`)}${str('\r')}${str('\n')}${str(`\u001b[${lyr}8;5;155m`)} def ${str(`\u001b[${lyr}9m`)}' when given \`155\` and ' abc ${str('\r')}${str('\n')} def '!`, () => {
          const received = index[model](155)(' abc \r\n def ')
          const expected = `\u001b[${lyr}8;5;155m abc \u001b[${lyr}9m\r\n\u001b[${lyr}8;5;155m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr}8;5;100m`)} abc ${str(`\u001b[${lyr}8;5;100m`)} def ${str(`\u001b[${lyr}9m`)}' when given \`100\` and ' abc ${str(`\u001b[${lyr}8;5;100m`)} def '!`, () => {
          const received = index[model](100)(` abc \u001b[${lyr}8;5;100m def `)
          const expected = `\u001b[${lyr}8;5;100m abc \u001b[${lyr}8;5;100m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })
      })

      describe('By mocking the default `level` to be `1`:', () => {
        let originalLevel: any

        beforeEach(() => {
          originalLevel = index.level
          index.level = 1
        })

        afterEach(() => {
          index.level = originalLevel
        })

        it(`Should return '${str(`\u001b[${lyr}8;5;255m`)} abc ${str(`\u001b[${lyr}9m`)}' when given \`255\` and ' abc '!`, () => {
          const received = index[model](255)(' abc ')
          const expected = `\u001b[${lyr}8;5;255m abc \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr}8;5;200m`)} abc ${str(`\u001b[${lyr}9m`)}${str('\n')}${str(`\u001b[${lyr}8;5;200m`)} def ${str(`\u001b[${lyr}9m`)}' when given \`200\` and ' abc ${str('\n')} def '!`, () => {
          const received = index[model](200)(' abc \n def ')
          const expected = `\u001b[${lyr}8;5;200m abc \u001b[${lyr}9m\n\u001b[${lyr}8;5;200m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr}8;5;155m`)} abc ${str(`\u001b[${lyr}9m`)}${str('\r')}${str('\n')}${str(`\u001b[${lyr}8;5;155m`)} def ${str(`\u001b[${lyr}9m`)}' when given \`155\` and ' abc ${str('\r')}${str('\n')} def '!`, () => {
          const received = index[model](155)(' abc \r\n def ')
          const expected = `\u001b[${lyr}8;5;155m abc \u001b[${lyr}9m\r\n\u001b[${lyr}8;5;155m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })

        it(`Should return '${str(`\u001b[${lyr}8;5;100m`)} abc ${str(`\u001b[${lyr}8;5;100m`)} def ${str(`\u001b[${lyr}9m`)}' when given \`100\` and ' abc ${str(`\u001b[${lyr}8;5;100m`)} def '!`, () => {
          const received = index[model](100)(` abc \u001b[${lyr}8;5;100m def `)
          const expected = `\u001b[${lyr}8;5;100m abc \u001b[${lyr}8;5;100m def \u001b[${lyr}9m`
          expect(received).toBe(expected)
        })
      })

      describe('By mocking the default `level` to be `0`:', () => {
        let originalLevel: any

        beforeEach(() => {
          originalLevel = index.level
          index.level = 0
        })

        afterEach(() => {
          index.level = originalLevel
        })

        it('Should return \' abc \' when given `255` and \' abc \'!', () => {
          const received = index[model](255)(' abc ')
          const expected = ' abc '
          expect(received).toBe(expected)
        })

        it(`Should return ' abc ${str('\n')} def ' when given \`200\` and ' abc ${str('\n')} def '!`, () => {
          const received = index[model](200)(' abc \n def ')
          const expected = ' abc \n def '
          expect(received).toBe(expected)
        })

        it(`Should return ' abc ${str('\r')}${str('\n')} def ' when given \`155\` and ' abc ${str('\r')}${str('\n')} def '!`, () => {
          const received = index[model](155)(' abc \r\n def ')
          const expected = ' abc \r\n def '
          expect(received).toBe(expected)
        })

        it(`Should return ' abc ${str('\u001Bm')} def ' when given \`100\` and ' abc ${str('\u001Bm')} def '!`, () => {
          const received = index[model](100)(' abc \u001Bm def ')
          const expected = ' abc \u001Bm def '
          expect(received).toBe(expected)
        })
      })
    })
  })
}

const testCombine = (): void => {
  describe('Test `combine` functions:', () => {
    const {
      bold,
      underline,
      red,
      yellow,
      blue,
      bgGray,
      bgYellow,
      bgMagenta,
      bgCyan
    } = ansiStyles

    it(`Should return '${str(red.open)}${str(bgCyan.open)} abc ${str(bgCyan.close)}${str(red.close)}' when calling \`.red.bgCyan\` by giving ' abc '!`, () => {
      const received = index.red.bgCyan(' abc ')
      const expected = `${red.open}${bgCyan.open} abc ${bgCyan.close}${red.close}`
      expect(received).toBe(expected)
    })

    it(`Should return '${str(bgMagenta.open)}${str(yellow.open)} abc ${str(yellow.close)}${str(bgMagenta.close)}${str('\n')}${str(bgMagenta.open)}${str(yellow.open)} def ${str(yellow.close)}${str(bgMagenta.close)}' when calling \`.bgMagenta.yellow\` by giving ' abc ${str('\n')} def '!`, () => {
      const received = index.bgMagenta.yellow(' abc \n def ')
      const expected = `${bgMagenta.open}${yellow.open} abc ${yellow.close}${bgMagenta.close}\n${bgMagenta.open}${yellow.open} def ${yellow.close}${bgMagenta.close}`
      expect(received).toBe(expected)
    })

    it(`Should return '${str(bold.open)}${str(blue.open)}${str(bgGray.open)} abc ${str(bgGray.close)}${str(blue.close)}${str(bold.close)}${str('\r')}${str('\n')}${str(bold.open)}${str(blue.open)}${str(bgGray.open)} def ${str(bgGray.close)}${str(blue.close)}${str(bold.close)}' when calling \`.bold.blue.bgGray\` by giving ' abc ${str('\r')}${str('\n')} def '!`, () => {
      const received = index.bold.blue.bgGray(' abc \r\n def ')
      const expected = `${bold.open}${blue.open}${bgGray.open} abc ${bgGray.close}${blue.close}${bold.close}\r\n${bold.open}${blue.open}${bgGray.open} def ${bgGray.close}${blue.close}${bold.close}`
      expect(received).toBe(expected)
    })

    it(`Should return '${str(bgYellow.open)}${str(underline.open)} abc ${str('\u001Bm')} def ${str(underline.close)}${str(bgYellow.close)}' when calling \`.underline.bgYellow\` by giving ' abc ${str('\u001Bm')} def '!`, () => {
      const received = index.bgYellow.underline(' abc \u001Bm def ')
      const expected = `${bgYellow.open}${underline.open} abc \u001Bm def ${underline.close}${bgYellow.close}`
      expect(received).toBe(expected)
    })
  })
}

const testError = (): void => {
  describe('Test error level', () => {
    it('Should throw an error when given invalid `level`!', () => {
      const received = (): void => {
        Chalk({ level: 4 as ColorSupportLevel })
      }

      const expected = Error('The `level` option should be an integer from 0 to 3!')

      expect(received).toThrow(expected)
    })
  })
}

describe('Test all features:', () => {
  describe('Test default export API:', () => {
    testAnsiStyles()
    testVisible()
    testModels()
    testCombine()
    testError()
  })

  describe('Test named exports API:', () => {
    it('`Chalk` instance should be same as the default export API!', () => {
      const received = Chalk({ level: index.level })
      const expected = index
      expect(received.prototype).toEqual(expected.prototype)
    })

    it('`chalk` API should be same as the default export API!', () => {
      const received = chalk
      const expected = index
      expect(received.prototype).toEqual(expected.prototype)
    })

    it('`chalkStderr` API should be same as the `Chalk({ level: chalkStderr.level })` instance!', () => {
      const received = chalkStderr
      const expected = Chalk({ level: chalkStderr.level })
      expect(received.prototype).toEqual(expected.prototype)
    })

    // modifierNames

    it('`modifiers` API should be same as the `modifierNames` API!', () => {
      const received = modifiers
      const expected = modifierNames
      expect(received).toEqual(expected)
    })

    it('`modifierNames` API should be same as the `ansiModifierNames` value!', () => {
      const received = modifierNames
      const expected = ansiModifierNames
      expect(received).toEqual(expected)
    })

    // foregroundColorNames

    it('`foregroundColors` API should be same as the `foregroundColorNames` API!', () => {
      const received = foregroundColors
      const expected = foregroundColorNames
      expect(received).toEqual(expected)
    })

    it('`foregroundColorNames` API should be same as the `ansiForegroundColorNames` value!', () => {
      const received = foregroundColorNames
      const expected = ansiForegroundColorNames
      expect(received).toEqual(expected)
    })

    // backgroundColorNames

    it('`backgroundColors` API should be same as the `backgroundColorNames` API!', () => {
      const received = backgroundColors
      const expected = backgroundColorNames
      expect(received).toEqual(expected)
    })

    it('`backgroundColorNames` API should be same as the `ansiBackgroundColorNames` value!', () => {
      const received = backgroundColorNames
      const expected = ansiBackgroundColorNames
      expect(received).toEqual(expected)
    })

    // colorNames

    it('`colors` API should be same as the `colorNames` API!', () => {
      const received = colors
      const expected = colorNames
      expect(received).toEqual(expected)
    })

    it('`colorNames` API should be same as the `ansiColorNames` value!', () => {
      const received = colorNames
      const expected = ansiColorNames
      expect(received).toEqual(expected)
    })

    // modifiers

    it('`reset` API should be same as the `chalk.reset` API!', () => {
      const received = reset(' abc ')
      const expected = chalk.reset(' abc ')
      expect(received).toBe(expected)
    })

    it('`bold` API should be same as the `chalk.bold` API!', () => {
      const received = bold(' abc ')
      const expected = chalk.bold(' abc ')
      expect(received).toBe(expected)
    })

    it('`dim` API should be same as the `chalk.dim` API!', () => {
      const received = dim(' abc ')
      const expected = chalk.dim(' abc ')
      expect(received).toBe(expected)
    })

    it('`italic` API should be same as the `chalk.italic` API!', () => {
      const received = italic(' abc ')
      const expected = chalk.italic(' abc ')
      expect(received).toBe(expected)
    })

    it('`underline` API should be same as the `chalk.underline` API!', () => {
      const received = underline(' abc ')
      const expected = chalk.underline(' abc ')
      expect(received).toBe(expected)
    })

    it('`inverse` API should be same as the `chalk.inverse` API!', () => {
      const received = inverse(' abc ')
      const expected = chalk.inverse(' abc ')
      expect(received).toBe(expected)
    })

    it('`hidden` API should be same as the `chalk.hidden` API!', () => {
      const received = hidden(' abc ')
      const expected = chalk.hidden(' abc ')
      expect(received).toBe(expected)
    })

    it('`strikethrough` API should be same as the `chalk.strikethrough` API!', () => {
      const received = strikethrough(' abc ')
      const expected = chalk.strikethrough(' abc ')
      expect(received).toBe(expected)
    })

    it('`overline` API should be same as the `chalk.overline` API!', () => {
      const received = overline(' abc ')
      const expected = chalk.overline(' abc ')
      expect(received).toBe(expected)
    })

    // foregrounds

    it('`black` API should be same as the `chalk.black` API!', () => {
      const received = black(' abc ')
      const expected = chalk.black(' abc ')
      expect(received).toBe(expected)
    })

    it('`red` API should be same as the `chalk.red` API!', () => {
      const received = red(' abc ')
      const expected = chalk.red(' abc ')
      expect(received).toBe(expected)
    })

    it('`green` API should be same as the `chalk.green` API!', () => {
      const received = green(' abc ')
      const expected = chalk.green(' abc ')
      expect(received).toBe(expected)
    })

    it('`yellow` API should be same as the `chalk.yellow` API!', () => {
      const received = yellow(' abc ')
      const expected = chalk.yellow(' abc ')
      expect(received).toBe(expected)
    })

    it('`blue` API should be same as the `chalk.blue` API!', () => {
      const received = blue(' abc ')
      const expected = chalk.blue(' abc ')
      expect(received).toBe(expected)
    })

    it('`magenta` API should be same as the `chalk.magenta` API!', () => {
      const received = magenta(' abc ')
      const expected = chalk.magenta(' abc ')
      expect(received).toBe(expected)
    })

    it('`cyan` API should be same as the `chalk.cyan` API!', () => {
      const received = cyan(' abc ')
      const expected = chalk.cyan(' abc ')
      expect(received).toBe(expected)
    })

    it('`white` API should be same as the `chalk.white` API!', () => {
      const received = white(' abc ')
      const expected = chalk.white(' abc ')
      expect(received).toBe(expected)
    })

    it('`gray` API should be same as the `chalk.gray` API!', () => {
      const received = gray(' abc ')
      const expected = chalk.gray(' abc ')
      expect(received).toBe(expected)
    })

    it('`grey` API should be same as the `chalk.grey` API!', () => {
      const received = grey(' abc ')
      const expected = chalk.grey(' abc ')
      expect(received).toBe(expected)
    })

    it('`blackBright` API should be same as the `chalk.blackBright` API!', () => {
      const received = blackBright(' abc ')
      const expected = chalk.blackBright(' abc ')
      expect(received).toBe(expected)
    })

    it('`redBright` API should be same as the `chalk.redBright` API!', () => {
      const received = redBright(' abc ')
      const expected = chalk.redBright(' abc ')
      expect(received).toBe(expected)
    })

    it('`greenBright` API should be same as the `chalk.greenBright` API!', () => {
      const received = greenBright(' abc ')
      const expected = chalk.greenBright(' abc ')
      expect(received).toBe(expected)
    })

    it('`yellowBright` API should be same as the `chalk.yellowBright` API!', () => {
      const received = yellowBright(' abc ')
      const expected = chalk.yellowBright(' abc ')
      expect(received).toBe(expected)
    })

    it('`blueBright` API should be same as the `chalk.blueBright` API!', () => {
      const received = blueBright(' abc ')
      const expected = chalk.blueBright(' abc ')
      expect(received).toBe(expected)
    })

    it('`magentaBright` API should be same as the `chalk.magentaBright` API!', () => {
      const received = magentaBright(' abc ')
      const expected = chalk.magentaBright(' abc ')
      expect(received).toBe(expected)
    })

    it('`cyanBright` API should be same as the `chalk.cyanBright` API!', () => {
      const received = cyanBright(' abc ')
      const expected = chalk.cyanBright(' abc ')
      expect(received).toBe(expected)
    })

    it('`whiteBright` API should be same as the `chalk.whiteBright` API!', () => {
      const received = whiteBright(' abc ')
      const expected = chalk.whiteBright(' abc ')
      expect(received).toBe(expected)
    })

    // backgrounds

    it('`bgBlack` API should be same as the `chalk.bgBlack` API!', () => {
      const received = bgBlack(' abc ')
      const expected = chalk.bgBlack(' abc ')
      expect(received).toBe(expected)
    })

    it('`bgRed` API should be same as the `chalk.bgRed` API!', () => {
      const received = bgRed(' abc ')
      const expected = chalk.bgRed(' abc ')
      expect(received).toBe(expected)
    })

    it('`bgGreen` API should be same as the `chalk.bgGreen` API!', () => {
      const received = bgGreen(' abc ')
      const expected = chalk.bgGreen(' abc ')
      expect(received).toBe(expected)
    })

    it('`bgYellow` API should be same as the `chalk.bgYellow` API!', () => {
      const received = bgYellow(' abc ')
      const expected = chalk.bgYellow(' abc ')
      expect(received).toBe(expected)
    })

    it('`bgBlue` API should be same as the `chalk.bgBlue` API!', () => {
      const received = bgBlue(' abc ')
      const expected = chalk.bgBlue(' abc ')
      expect(received).toBe(expected)
    })

    it('`bgMagenta` API should be same as the `chalk.bgMagenta` API!', () => {
      const received = bgMagenta(' abc ')
      const expected = chalk.bgMagenta(' abc ')
      expect(received).toBe(expected)
    })

    it('`bgCyan` API should be same as the `chalk.bgCyan` API!', () => {
      const received = bgCyan(' abc ')
      const expected = chalk.bgCyan(' abc ')
      expect(received).toBe(expected)
    })

    it('`bgWhite` API should be same as the `chalk.bgWhite` API!', () => {
      const received = bgWhite(' abc ')
      const expected = chalk.bgWhite(' abc ')
      expect(received).toBe(expected)
    })

    it('`bgGray` API should be same as the `chalk.bgGray` API!', () => {
      const received = bgGray(' abc ')
      const expected = chalk.bgGray(' abc ')
      expect(received).toBe(expected)
    })

    it('`bgGrey` API should be same as the `chalk.bgGrey` API!', () => {
      const received = bgGrey(' abc ')
      const expected = chalk.bgGrey(' abc ')
      expect(received).toBe(expected)
    })

    it('`bgBlackBright` API should be same as the `chalk.bgBlackBright` API!', () => {
      const received = bgBlackBright(' abc ')
      const expected = chalk.bgBlackBright(' abc ')
      expect(received).toBe(expected)
    })

    it('`bgRedBright` API should be same as the `chalk.bgRedBright` API!', () => {
      const received = bgRedBright(' abc ')
      const expected = chalk.bgRedBright(' abc ')
      expect(received).toBe(expected)
    })

    it('`bgGreenBright` API should be same as the `chalk.bgGreenBright` API!', () => {
      const received = bgGreenBright(' abc ')
      const expected = chalk.bgGreenBright(' abc ')
      expect(received).toBe(expected)
    })

    it('`bgYellowBright` API should be same as the `chalk.bgYellowBright` API!', () => {
      const received = bgYellowBright(' abc ')
      const expected = chalk.bgYellowBright(' abc ')
      expect(received).toBe(expected)
    })

    it('`bgBlueBright` API should be same as the `chalk.bgBlueBright` API!', () => {
      const received = bgBlueBright(' abc ')
      const expected = chalk.bgBlueBright(' abc ')
      expect(received).toBe(expected)
    })

    it('`bgMagentaBright` API should be same as the `chalk.bgMagentaBright` API!', () => {
      const received = bgMagentaBright(' abc ')
      const expected = chalk.bgMagentaBright(' abc ')
      expect(received).toBe(expected)
    })

    it('`bgCyanBright` API should be same as the `chalk.bgCyanBright` API!', () => {
      const received = bgCyanBright(' abc ')
      const expected = chalk.bgCyanBright(' abc ')
      expect(received).toBe(expected)
    })

    it('`bgWhiteBright` API should be same as the `chalk.bgWhiteBright` API!', () => {
      const received = bgWhiteBright(' abc ')
      const expected = chalk.bgWhiteBright(' abc ')
      expect(received).toBe(expected)
    })
  })
})
