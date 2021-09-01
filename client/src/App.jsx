import React from 'react';

// import { TodoList } from './Todo/TodoList';
import { Context } from './Сontext';
import { Loader } from './Loader';
import { Theme } from './ChangeTheme/ChangeTheme';
// import { AddTodo } from './Todo/AddTodo';

export const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000);
      });
  }, []);

  const toggleTodo = React.useCallback(
    (id) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      );
    },
    [todos]
  );

  const removeTodo = React.useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

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
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>

        <Theme></Theme>

        {/* <React.Suspense fallback={<h2>Loading...</h2>}>
          <AddTodo onCreate={addTodo}></AddTodo>
        </React.Suspense> */}

        {loading && <Loader></Loader>}

        {/* {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
        ) : loading ? null : (
          <h1>No Todos!</h1>
        )} */}
      </div>
    </Context.Provider>
  );
};
