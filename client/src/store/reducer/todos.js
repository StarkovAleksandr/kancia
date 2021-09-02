import { ADD_TODO, GET_TODOS } from '../actionTypes';

const defaultState = {
  todos: [],
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
    // return [...state, [action.payload]];

    case GET_TODOS:
    // return [...state];

    default:
      return state;
  }
};
