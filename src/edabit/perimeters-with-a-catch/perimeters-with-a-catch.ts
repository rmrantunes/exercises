const PI = 3.14
const SIDES = 4

function calculateCirclePerimeter(radius: number) {
  return PI * 2 * radius
}

function calculateSquarePerimeter(side: number) {
  return SIDES * side
}

export function perimeter(format: string, radiusOrSide: number) {
  return (
    (format === 's' && calculateSquarePerimeter(radiusOrSide)) ||
    (format === 'c' && calculateCirclePerimeter(radiusOrSide)) ||
    undefined
  )
}
