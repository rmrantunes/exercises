import { Circle } from './make-a-circle-with-oop'

// let circy = new Circle(11)
// circy.getArea()

// // Should return 380.132711084365
// let circy = new Circle(4.44)
// circy.getPerimeter()

// // Should return 27.897342763877365

describe('Make a Circle with OOP', () => {
  it('getArea()', () => {
    const circy = new Circle(11)
    const area = circy.getArea()

    expect(area).toBe(380.132711084365)
  })
  it('getPerimeter()', () => {
    const circy = new Circle(4.44)
    const perimeter = circy.getPerimeter()

    expect(perimeter).toBe(27.897342763877365)
  })
})
