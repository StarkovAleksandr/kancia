import { isReq, isStr } from '../../common/validation/rules.js';

export const createOrUpdateCommentScheme = {
  name: [isReq, isStr],
  email: [isReq, isStr],
  body: [isReq, isStr],
};
