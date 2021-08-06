import {
  schemaValidate,
  isReq,
  isStr,
} from '../../common/validation/validation.js';

export const validation = (body) => {
  return schemaValidate(
    {
      title: [isReq, isStr],
      url: [isReq, isStr],
      thumbnailUrl: [isReq, isStr],
    },
    body
  );
};
