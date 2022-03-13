import { perimeter } from './perimeters-with-a-catch'

describe('', () => {
  it('should return the perimeter of a square properly', () => {
    expect(perimeter('s', 7)).toBe(28)
  })

  it('should return the perimeter of a circle properly', () => {
    expect(perimeter('c', 4)).toBe(25.12)
    expect(perimeter('c', 9)).toBe(56.52)
  })

  it('should return undefined if 1st parameter is not either s or c', () => {
    expect(perimeter('d', 4)).toBeUndefined()
  })
})
