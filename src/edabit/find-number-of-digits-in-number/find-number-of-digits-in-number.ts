export function numOfDigits(number: number) {
  let hasFinished = false
  let digitsCount = 0
  let divisionResult = number

  while (hasFinished === false) {
    const result = divisionResult / 10
    const isResultFloorZero = !Math.floor(result) // if 0

    if (isResultFloorZero) {
      hasFinished = true
    }

    divisionResult = result
    digitsCount += 1
  }

  return digitsCount
}
