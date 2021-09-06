import React from 'react';

import { TodoList } from './Todo/TodoList';
import { Context } from './Сontext';
import { Loader } from './components/Loader/index';
import { Theme } from './components/SwitchTheme/index';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, getTodo } from './store/action/todos';
import { AddTodo } from './Todo/AddTodo';

export const App = () => {
  React.useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then((res) => res.json())
      .then((res) => console.log(res));
  });

  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todos);

  const get = () => {
    dispatch(getTodo());
  };

  const add = () => {
    dispatch(addTodo());
  };

  return (
    <div className="app">
      <h1>Todos</h1>

      <button onClick={() => getTodos()}>Get Todos</button>
      <button onClick={() => addTodo()}>Add Todo</button>

      <Theme></Theme>

      <React fallback={<h2>Loading...</h2>}>
        <AddTodo onCreate={addTodo}></AddTodo>
      </React>

      {loading && <Loader></Loader>}

      {todos.length ? (
        <TodoList todos={todos}></TodoList>
      ) : loading ? null : (
        <h1>No Todos!</h1>
      )}
    </div>
  );
};
