export const validation = ([...condition], [...obj]) => {
  for (let index = 0; index <= condition.length; index++) {
    let isValid = true;
    const key = Object.keys(condition).find(
      (key) => condition[key] === condition[index]
    );

    if (typeof condition[keyNumber] === 'Object') {
      isValid = validation(obj[key]);
    } else if (obj[key] !== condition[index]) {
      return false;
    }
  }

  return isValid;
};
