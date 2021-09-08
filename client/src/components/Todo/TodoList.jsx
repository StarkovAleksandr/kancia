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
    {console.log(props.todos)}
    {props.todos.map((todo, index) => {
      return (
        <TodoItem
          todo={todo}
          key={todo._id}
          index={index}
          onChange={props.onToggle}
        ></TodoItem>
      );
    })}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};
