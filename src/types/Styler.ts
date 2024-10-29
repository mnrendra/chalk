interface Styler {
  readonly open: string
  readonly close: string
  readonly openAll: string
  readonly closeAll: string
  readonly parent?: Styler
}

export default Styler
