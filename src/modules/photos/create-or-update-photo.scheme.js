import { isReq, isStr } from '../../common/validation/validation.js';

export const createOrUpdatePhotoScheme = {
  title: [isReq, isStr],
  url: [isReq, isStr],
  thumbnailUrl: [isReq, isStr],
};
