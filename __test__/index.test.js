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

  test('edge case', () => {
    expect(split('double\n spa\n\nces is \n\ngood!', '\n\n'))
      .toEqual(['double\n spa', 'ces is \n\ngood!'])
  })
})
