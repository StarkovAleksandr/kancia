import { isReq, isStr } from '../../common/validation/validation.js';

export const createOrUpdatePostScheme = {
  title: [isReq, isStr],
  body: [isReq, isStr],
};
