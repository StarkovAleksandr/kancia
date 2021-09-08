import { ADD_TODO, SET_TODOS, SET_LOADING, SET_ERROR } from '../actionTypes';

const defaultState = {
  todos: null,
  loading: false,
  error: null,
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
