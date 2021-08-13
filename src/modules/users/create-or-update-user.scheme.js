import { isReq, isStr } from '../../common/validation/rules.js';

export const createOrUpdateUserScheme = {
  name: [isReq, isStr],
  username: [isReq, isStr],
  email: [isReq, isStr],
  address: {
    street: [isReq, isStr],
    suite: [isReq, isStr],
    city: [isReq, isStr],
    zipcode: [isReq, isStr],
    geo: {
      lat: [isReq, isStr],
      lng: [isReq, isStr],
    },
  },
  phone: [isReq, isStr],
  website: [isReq, isStr],
  company: {
    name: [isReq, isStr],
    catchPhrase: [isReq, isStr],
    bs: [isReq, isStr],
  },
};
