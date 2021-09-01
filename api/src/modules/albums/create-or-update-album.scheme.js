import { isStr, isReq } from '../../common/validation/rules.js';

export const createOrUpdateAlbumScheme = { title: [isReq, isStr] };
