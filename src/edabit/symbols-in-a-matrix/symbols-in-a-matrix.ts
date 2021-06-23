const symbolValues = {
  "#": 5,
  O: 3,
  X: 1,
  "!": -1,
  "!!": -3,
  "!!!": -5,
};

export function checkScore(matrix: (keyof typeof symbolValues)[][]) {
  return matrix.reduce((prev, symbols) => {
    return (
      prev +
      symbols.reduce((prev, symbol) => {
        const isSymbolValid = Object.keys(symbolValues).includes(symbol);
        if (!isSymbolValid) {
          throw new Error(`Bro, that symbol ${symbol} is wrong!`);
        }
        return prev + symbolValues[symbol];
      }, 0)
    );
  }, 0);
}
