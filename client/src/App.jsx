import React from 'react';

import { TodoList } from './Todo/TodoList';
import { Context } from './Сontext';
import { Loader } from './Loader';
import { Theme } from './ChangeTheme/ChangeTheme';
import { useDispatch, useSelector } from 'react-redux';
// import { AddTodo } from './Todo/AddTodo';

export const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const getTodos = () => {
    dispatch({ type: 'GET_TODOS' });
  };

  const addTodo = () => {
    dispatch({ type: 'ADD_TODO' });
  };

  // const [todos, setTodos] = React.useState([]);
  // const [loading, setLoading] = React.useState(true);

  // React.useEffect(async () => {
  //   await fetch('http://localhost:3001/todos')
  //     .then((response) => response.json())
  //     .then((todos) => {
  //       setTodos(todos);
  //       setLoading(false);
  //     });
  // }, []);

  // const removeTodo = React.useCallback(
  //   (id) => {
  //     setTodos(todos.filter((todo) => todo.id !== id));
  //   },
  //   [todos]
  // );

  // const addTodo = React.useCallback(
  //   (title) => {
  //     setTodos(
  //       todos.concat([
  //         {
  //           title,
  //           id: Date.now(),
  //           completed: false,
  //         },
  //       ])
  //     );
  //   },
  //   [todos]
  // );

  return (
    // <Context.Provider value={{ removeTodo }}>
    <div className={'app'}>
      <h1>Todos</h1>

      <button onClick={() => getTodos()}>Get Todos</button>
      <button onClick={() => addTodo()}>Add Todo</button>

      <Theme></Theme>

      {/* <React.Suspense fallback={<h2>Loading...</h2>}>
          <AddTodo onCreate={addTodo}></AddTodo>
        </React.Suspense> */}

      {loading && <Loader></Loader>}

      {/* {todos.length ? (
          <TodoList todos={todos}></TodoList>
        ) : loading ? null : (
          <h1>No Todos!</h1>
        )} */}
    </div>
    // </Context.Provider>
  );
};
