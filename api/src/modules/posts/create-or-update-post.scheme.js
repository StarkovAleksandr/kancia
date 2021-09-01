import { isReq, isStr } from '../../common/validation/rules.js';

export const createOrUpdatePostScheme = {
  title: [isReq, isStr],
  body: [isReq, isStr],
};
