export function antipodesAverage(numbersArray: number[]) {
  const length = numbersArray.length
  const isLengthOdd = length % 2 !== 0
  const lengthHalf = Math.floor(length / 2)
  const lastHalfSliceIndex = isLengthOdd ? lengthHalf + 1 : lengthHalf

  const firstHalf = numbersArray.slice(0, lengthHalf)
  const reversedLastHalf = numbersArray.slice(lastHalfSliceIndex).reverse()

  const result: number[] = []

  for (let i = 0; i < firstHalf.length; i++) {
    const sumAverage = (firstHalf[i] + reversedLastHalf[i]) / 2
    result.push(sumAverage)
  }

  return result
}
