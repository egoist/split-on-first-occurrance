'use strict'

module.exports = (input, char) => {
  if (!input || typeof input !== 'string') {
    throw new Error('Expected input to be a string')
  }
  char = char || ''
  const index = input.indexOf(char)
  return index === -1 ? null : [
    input.substr(0, index),
    input.substr(index + char.length)
  ]
}
