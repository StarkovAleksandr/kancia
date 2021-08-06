import {
  schemaValidate,
  isReq,
  isStr,
  isBool,
} from '../../common/validation/validation.js';

export const validation = (body) => {
  return schemaValidate(
    { title: [isReq, isStr], completed: [isReq, isBool] },
    body
  );
};
