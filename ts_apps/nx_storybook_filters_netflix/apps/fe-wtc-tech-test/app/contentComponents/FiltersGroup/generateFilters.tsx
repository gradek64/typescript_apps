let stringDataArg = '';
let trackIndex = 1;
const generateFilters = (stringData: string, numberOfIteration: number) => {
  stringDataArg += stringData + ',';

  function findDuplicate(arr: string[]) {
    const object = {};
    arr.forEach(function (item: string) {
      const trimStirng = item.trim();
      if (!object[trimStirng]) object[trimStirng] = 0;
      object[trimStirng] += 1;
    });
    return object;
  }

  if (trackIndex === numberOfIteration) {
    const trimLastComa = stringDataArg.trim().replace(/,$/, '');
    const concatenatedString = [...trimLastComa.split(',')];
    trackIndex = 1;
    stringDataArg = '';
    return findDuplicate(concatenatedString);
  } else {
    trackIndex++;
  }
};

export { generateFilters };
