import type { Builder, Styler } from '../types'

import { GENERATOR, STYLER, IS_EMPTY } from '../symbols'

import store from '../store'

const replaceAll = (
  string: string,
  searchValue: string,
  replaceValue: string
): string => {
  let index = string.indexOf(searchValue)

  if (index === -1) {
    return string
  }

  const substringLength = searchValue.length

  let endIndex = 0
  let returnValue = ''

  do {
    returnValue += string.slice(endIndex, index) + searchValue + replaceValue
    endIndex = index + substringLength
    index = string.indexOf(searchValue, endIndex)
  } while (index !== -1)

  returnValue += string.slice(endIndex)

  return returnValue
}

const encaseNewLine = (
  string: string,
  prefix: string,
  postfix: string,
  index: number
): string => {
  let endIndex = 0
  let returnValue = ''

  do {
    const gotCR = string[index - 1] === '\r'
    returnValue += string.slice(endIndex, (gotCR ? index - 1 : index)) + prefix + (gotCR ? '\r\n' : '\n') + postfix
    endIndex = index + 1
    index = string.indexOf('\n', endIndex)
  } while (index !== -1)

  returnValue += string.slice(endIndex)

  return returnValue
}

const applyStyle = (
  self: Builder,
  string: string
): string => {
  if (self.level <= 0 || typeof string !== 'string' || string === '') {
    return self[IS_EMPTY] === true
      ? ''
      : string
  }

  let styler = self[STYLER]

  if (styler === undefined) {
    return string
  }

  const { open, close, openAll, closeAll } = styler

  if (string.includes('\u001B')) {
    while (styler !== undefined) {
      // Replace any instances already present with a re-opening code
      // otherwise only the part of the string until said closing code
      // will be colored, and the rest will simply be 'plain'.
      string = replaceAll(string, close, open)

      styler = styler.parent
    }
  }

  // We can move both next actions out of loop, because remaining actions in
  // loop won't have any/visible effect on parts we add here. Close the styling
  // before a linebreak and reopen after next line to fix a bleed issue on
  // macOS: https://github.com/chalk/chalk/pull/92
  const lfIndex = string.indexOf('\n')

  if (lfIndex !== -1) {
    string = encaseNewLine(string, closeAll, openAll, lfIndex)
  }

  return openAll + string + closeAll
}

const createBuilder = (
  self: Builder,
  styler?: Styler,
  isEmpty?: boolean
): Builder => {
  // Single argument is hot path, implicit coercion is faster than anything
  const builder = (...text: unknown[]): string => applyStyle(builder as Builder, text.join(' '))

  // We alter the prototype because we must return a function, but there is
  // no way to create a function with a different prototype
  Object.setPrototypeOf(builder, store.proto)

  builder[GENERATOR] = self
  builder[STYLER] = styler
  builder[IS_EMPTY] = isEmpty

  return builder as Builder
}

export default createBuilder
