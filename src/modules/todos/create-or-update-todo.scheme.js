import { isReq, isStr, isBool } from '../../common/validation/rules.js';

export const createOrUpdateTodoScheme = {
  title: [isReq, isStr],
  completed: [isReq, isBool],
};
