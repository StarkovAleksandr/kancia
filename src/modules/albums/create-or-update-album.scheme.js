import { isStr, isReq } from '../../common/validation/validation.js';

export const createOrUpdateAlbumScheme = { title: [isReq, isStr] };
