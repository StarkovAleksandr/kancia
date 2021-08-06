import {
  schemaValidate,
  isReq,
  isStr,
} from '../../common/validation/validation.js';

export const validation = (body) => {
  return schemaValidate({ title: [isReq, isStr], body: [isReq, isStr] }, body);
};
