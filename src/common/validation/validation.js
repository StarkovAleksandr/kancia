export const schemaValidate = (schema, obj) => {
  const err = Object.entries(schema).reduce((error, [key, value]) => {
    if (!Array.isArray(value)) {
      schemaValidate(schema[key], obj[key]);
    } else {
      for (let currentFunction of value) {
        const result = currentFunction(obj[key]);

        if (result === 'You should fill it') {
          error = [...error, `"${key}": ${result}`];
          break;
        } else if (result === 'invalid value') {
          error = [...error, `"${key}": ${result}`];
        }
      }
    }

    return error;
  }, []);

  if (err.length === 0) {
    return true;
  } else {
    console.log(`Error = ${err}`);
    return err;
  }
};

export const isStr = (value) => {
  if (typeof value !== 'string') {
    return 'invalid value';
  }
};

export const isNum = (value) => {
  if (typeof value !== 'number') {
    return 'invalid value';
  }
};

export const isBool = (value) => {
  if (typeof value !== 'boolean') {
    return 'invalid value';
  }
};

export const isReq = (value) => {
  if (typeof value === 'undefined') {
    return 'You should fill it';
  }
};
