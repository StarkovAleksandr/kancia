import React from 'react';

import PropTypes from 'prop-types';

import { TodoItem } from './TodoItem';

const styles = {
  ul: {
    listStyle: 'none',
  },
};

export const TodoList = (props) => (
  <ul style={styles.ul}>
    {props.todos.map((todo, index) => (
      <TodoItem key={todo._id} todo={todo} index={index}></TodoItem>
    ))}
  </ul>
);

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onToggle: PropTypes.func.isRequired,
// };
