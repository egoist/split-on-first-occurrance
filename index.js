'use strict'

module.exports = (input, char) => {
  char = char || ''
  const m = input.match(new RegExp(`^([^${char}]+)${char}([^$]+)`))
  return m && [m[1], m[2]]
}
