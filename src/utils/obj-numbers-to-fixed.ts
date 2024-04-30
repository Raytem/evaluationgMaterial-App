export function objNumbersToFixed(obj, cntOfNumbersAfterPoint: number) {
  if (obj !== null && typeof obj !== 'object') {
    throw new Error(`This is not an object: ${obj}`);
  }

  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      if (!obj[key].toString().toLocaleLowerCase().includes('e')) {
        obj[key] = +obj[key].toFixed(cntOfNumbersAfterPoint);
      }
    }
    if (obj[key] === Infinity) {
      obj[key] = 0;
    }
  }
  return obj;
}
