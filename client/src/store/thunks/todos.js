import { setLoading, setTodo } from '../actions';

export const fetchTodos = () => async (dispatch) => {
  const startTime = Date.now();

  dispatch(setLoading(true));
  dispatch(setTodo(null));
  const response = await fetch('http://localhost:8080/todos');
  const data = await response.json();
  const endTime = Date.now();

  endTime - startTime < 1000
    ? setTimeout(() => {
        dispatch(setLoading(false));
        dispatch(setTodo(data));
      }, 1000 - (endTime - startTime))
    : () => {
        dispatch(setLoading(false));
        dispatch(setTodo(data));
      };
};
