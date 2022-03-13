// source: https://edabit.com/challenge/Np7R8F24PaqBShZc5

const TIME_TO_SWITCH_IN_SECONDS = 1
const TIME_TO_COLOR_IN_SECONDS = 2

export function colorPatternTimes(colorPattern: string[]) {
  let finalTime = 0

  for (let i = 0; i < colorPattern.length; i++) {
    const currentColor = colorPattern[i]
    const prevColor = colorPattern[i - 1]

    if (!currentColor) {
      continue
    }

    const shouldJustColorIt =
      prevColor === undefined || prevColor === currentColor

    const currentOperationTime = shouldJustColorIt
      ? TIME_TO_COLOR_IN_SECONDS
      : TIME_TO_SWITCH_IN_SECONDS + TIME_TO_COLOR_IN_SECONDS

    finalTime += currentOperationTime
  }

  return finalTime
}
