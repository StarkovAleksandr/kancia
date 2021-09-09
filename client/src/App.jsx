import React from 'react';

import { TodoList } from './components/Todo/TodoList';
import { Loader } from './components/Loader/index';
import { SwitchTheme } from './components/SwitchTheme/index';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './store/actions/todos';
import { fetchTodos } from './store/thunks/todos';

export const App = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.todos);

  const loading = useSelector((state) => state.todo.loading);

  const set = () => {
    dispatch(fetchTodos());
  };

  const add = () => {
    dispatch(addTodo());
  };

  return (
    <div className="app">
      <button onClick={set}>Refresh Todos</button>
      <button onClick={add}>Add Todo</button>
      <SwitchTheme />

      {loading === true && <Loader />}

      {todos !== null && <TodoList todos={todos} />}

      {/* <AddTodo onCreate={addTodo}></AddTodo> */}
    </div>
  );
};
