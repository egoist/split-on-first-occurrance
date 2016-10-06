'use strict'

module.exports = (input, char) => {
  char = char || ''
  const index = input.indexOf(char)
  return [
    input.substr(0, index),
    input.substr(index + char.length)
  ]
}
