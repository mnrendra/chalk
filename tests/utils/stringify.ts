const stringify = (string: string): string => {
  return JSON.stringify(string).replaceAll('"', '')
}

export default stringify
