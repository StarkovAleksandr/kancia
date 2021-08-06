export const schemaValidate = (schema, obj) => {
  const err = Object.entries(schema).reduce((error, [key, value]) => {
    for (let currentFunction of value) {
      const result = currentFunction(obj[key]);

      if (result === 'You should fill it') {
        error = [...error, `"${key}": ${result}`];
        break;
      } else if (result !== undefined) {
        error = [...error, `"${key}": ${result}`];
      }
    }

    return error;
  }, []);

  if (err.length === 0) {
    return true;
  } else {
    return err;
  }
};

export const isStr = (value) => {
  if (typeof value !== 'string') {
    return 'invalid value';
  }
  console.log('isStr');
};

export const isNum = (value) => {
  if (typeof value !== 'number') {
    return 'invalid value';
  }
  console.log('isNum');
};

export const isBool = (value) => {
  if (typeof value !== 'boolean') {
    return 'invalid value';
  }
  console.log('isBool');
};

export const isReq = (value) => {
  if (typeof value === 'undefined') {
    return 'You should fill it';
  }
  console.log('isReq');
};
