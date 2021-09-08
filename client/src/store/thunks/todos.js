import { setTodo } from '../actions';

export const fetchTodos = () => async (dispatch) => {
  const response = await fetch('http://localhost:8080/todos');
  const data = await response.json();
  dispatch(setTodo(data));
};
