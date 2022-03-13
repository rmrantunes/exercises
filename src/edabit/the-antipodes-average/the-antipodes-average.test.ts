import { antipodesAverage } from './the-antipodes-average'

describe('The Antipodes Average', () => {
  it('should return averages properly', () => {
    expect(antipodesAverage([1, 2, 3, 4])).toEqual([2.5, 2.5])
    expect(antipodesAverage([1, 2, 3, 4, 5])).toEqual([3, 3])
    expect(antipodesAverage([-1, -2])).toEqual([-1.5])
  })
})
