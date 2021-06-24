export function advancedSort(array: (string | number)[]) {
  const arrayToReturn: (string | number)[][] = [];

  for (const item of array) {
    const itemsArray = arrayToReturn.find((innerArray) =>
      innerArray.includes(item)
    );
    if (itemsArray) itemsArray.push(item);
    else arrayToReturn.push([item]);
  }

  return arrayToReturn;
}
