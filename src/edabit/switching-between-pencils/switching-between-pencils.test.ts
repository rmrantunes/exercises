import { colorPatternTimes } from './switching-between-pencils'

describe('Switching Between Pencils', () => {
  it('should the time for switching and painting', () => {
    expect(colorPatternTimes(['Blue'])).toBe(2)
    expect(colorPatternTimes(['Red', 'Yellow', 'Green', 'Blue'])).toBe(11)
    expect(
      colorPatternTimes(['Blue', 'Blue', 'Blue', 'Red', 'Red', 'Red'])
    ).toBe(13)
  })
})
