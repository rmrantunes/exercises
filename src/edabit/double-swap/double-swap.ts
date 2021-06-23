export function doubleSwap(
  text: string,
  characterOne: string,
  characterTwo: string
) {
  const regex = new RegExp(`(${characterOne})|(${characterTwo})`, "g");

  const swappedText = text.replace(regex, (match) => {
    if (match === characterOne) return characterTwo;
    return characterOne;
  });

  return swappedText;
}
