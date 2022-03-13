import { numOfDigits } from './find-number-of-digits-in-number'

describe('numOfDigits', () => {
  it('should return digits properly', () => {
    expect(numOfDigits(1000)).toBe(4)
    expect(numOfDigits(12345)).toBe(5)
    expect(numOfDigits(12)).toBe(2)
    expect(numOfDigits(1305981031)).toBe(10)
    expect(numOfDigits(0)).toBe(1)
  })
})
