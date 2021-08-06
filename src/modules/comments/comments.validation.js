import {
  schemaValidate,
  isReq,
  isStr,
} from '../../common/validation/validation.js';

export const validation = (body) => {
  return schemaValidate(
    { name: [isReq, isStr], email: [isReq, isStr], body: [isReq, isStr] },
    body
  );
};
