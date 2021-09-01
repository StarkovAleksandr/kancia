export const validationScheme = (scheme, obj) => {
  const err = Object.entries(scheme).reduce((errors, [key, value]) => {
    if (!Array.isArray(value)) {
      const res = validationScheme(scheme[key], obj[key]);
      if (Object.keys(res).length !== 0) {
        errors[key] = res;
      }
    } else {
      for (let currentFunction of value) {
        const result = currentFunction(obj[key]);

        if (result) {
          errors[key] = [...(errors[key] || []), result];
        }
      }
    }

    return errors;
  }, {});

  return err;
};
