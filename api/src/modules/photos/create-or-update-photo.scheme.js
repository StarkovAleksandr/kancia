import { isReq, isStr } from '../../common/validation/rules.js';

export const createOrUpdatePhotoScheme = {
  title: [isReq, isStr],
  url: [isReq, isStr],
  thumbnailUrl: [isReq, isStr],
};
