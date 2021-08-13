export const isStr = (value) => {
  if (typeof value !== 'string') {
    return 'must be string';
  }
};

export const isNum = (value) => {
  if (typeof value !== 'number') {
    return 'must be number';
  }
};

export const isBool = (value) => {
  if (typeof value !== 'boolean') {
    return 'must be boolean';
  }
};

export const isReq = (value) => {
  if (typeof value === 'undefined') {
    return 'must be filled';
  }
};
