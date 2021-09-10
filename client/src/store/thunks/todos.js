import { setError, setLoading, setTodo } from '../actions';

export const fetchTodos = () => async (dispatch) => {
  const startTime = Date.now();

  dispatch(setLoading(true));
  dispatch(setTodo(null));

  const response = await fetch('http://localhost:8080/tod');

  if (!response.ok) {
    dispatch(setLoading(false));
    dispatch(setError(true));
    return;
  }

  const data = await response.json();
  const endTime = Date.now();

  const successFetch = () => {
    dispatch(setLoading(false));
    dispatch(setTodo(data));
  };

  if (endTime - startTime < 1000) {
    setTimeout(() => successFetch(), 1000 - (endTime - startTime));
  } else {
    successFetch();
  }
};
