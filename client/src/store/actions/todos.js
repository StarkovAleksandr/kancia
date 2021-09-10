import { ADD_TODO, SET_ERROR, SET_LOADING, SET_TODOS } from '../actionTypes';

export const addTodo = () => ({ type: ADD_TODO, payload: 5 });
export const setTodo = (payload) => ({ type: SET_TODOS, payload });
export const setLoading = (payload) => ({ type: SET_LOADING, payload });
export const setError = (payload) => ({ type: SET_ERROR, payload });
