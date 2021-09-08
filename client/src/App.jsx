import React from 'react';

// import { TodoList } from './components/Todo/TodoList';
// import { Loader } from './components/Loader/index';
import { SwitchTheme } from './components/SwitchTheme/index';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, setTodo } from './store/actions/todos';
import { fetchTodos } from './store/Thunks/todos';
// import { AddTodo } from './components/Todo/AddTodo';

export const App = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.todos);

  const set = () => {
    dispatch(fetchTodos());
  };

  const add = () => {
    dispatch(addTodo());
  };

  return (
    <div className="app">
      <h1>Todos</h1>

      <button onClick={set}>Get Todos</button>
      <button onClick={add}>Add Todo</button>
      <SwitchTheme />

      {todos !== null ? (
        <div>
          {todos.map((todo) => (
            <ul style={{ fontSize: '3rem' }}>{JSON.stringify(todo)}</ul>
          ))}
        </div>
      ) : (
        <p>No todos</p>
      )}

      {/* <AddTodo onCreate={addTodo}></AddTodo> */}
      {/* <TodoList todos={todos} /> */}
    </div>
  );
};
