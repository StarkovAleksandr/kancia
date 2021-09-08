import { combineReducers } from 'redux';

import { reducer } from './todos';

export const rootReducer = combineReducers({ todo: reducer });
