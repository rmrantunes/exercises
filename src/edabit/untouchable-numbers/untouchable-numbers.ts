function getProperDivisors(number: number): number[] {
  const properDivirsors = [];
  for (
    let potentialDivisor = number;
    potentialDivisor > 0;
    potentialDivisor--
  ) {
    const division = number / potentialDivisor;
    const isProperDivisor = division % 2 === 0 || division % 2 === 1;

    if (potentialDivisor !== number && isProperDivisor)
      properDivirsors.push(potentialDivisor);
  }

  return properDivirsors;
}

export function isUntouchable(number: number) {
  if (number < 2) return "Invalid Input: number is lower than 2";
  const rangeNumbersDivisorsSumEqualToNumber = [];
  const RANGE_MIN = 2;
  const RANGE_MAX = Math.pow(number, 2);

  for (let rangeNumber = RANGE_MIN; rangeNumber <= RANGE_MAX; rangeNumber++) {
    const properDivirsors = getProperDivisors(rangeNumber);
    const sum = properDivirsors.reduce((prev, curr) => prev + curr, 0);
    if (sum === number) rangeNumbersDivisorsSumEqualToNumber.push(rangeNumber);
  }

  return (
    !rangeNumbersDivisorsSumEqualToNumber.length ||
    rangeNumbersDivisorsSumEqualToNumber
  );
}
