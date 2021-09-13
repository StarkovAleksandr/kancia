import React from 'react';

import { TodoList } from './components/Todo/TodoList';
import { ErrorMessage } from './components/Error/error';
import { Loader } from './components/Loader/index';
import { SwitchTheme } from './components/SwitchTheme/index';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './store/actions/todos';
import { fetchTodos } from './store/thunks/todos';

export const App = () => {
  React.useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.todos);
  const loading = useSelector((state) => state.todo.loading);
  const error = useSelector((state) => state.todo.error);

  const set = () => {
    dispatch(fetchTodos());
  };

  const add = () => {
    dispatch(addTodo());
  };

  return (
    <div className="wrapper">
      <h1>Todo CRUD</h1>
      <button onClick={set}>Refresh Todos</button>
      <button onClick={add}>Add Todo</button>

      <SwitchTheme />

      {loading && <Loader />}
      {todos !== null && <TodoList todos={todos} />}
      {error && <ErrorMessage />}
      {/* <AddTodo onCreate={addTodo}></AddTodo> */}
    </div>
  );
};
