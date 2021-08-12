import { isReq, isStr, isBool } from '../../common/validation/validation.js';

export const createOrUpdateTodoScheme = {
  title: [isReq, isStr],
  completed: [isReq, isBool],
};
