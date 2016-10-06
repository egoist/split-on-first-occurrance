const split = require('../')

describe('it works', () => {
  test('space', () => {
    expect(split('this is testing space', ' '))
      .toEqual(['this', 'is testing space'])
  })

  test('double spaces', () => {
    expect(split('double  spaces is  good!', '  '))
      .toEqual(['double', 'spaces is  good!'])
  })
})
