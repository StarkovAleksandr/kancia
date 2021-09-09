import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem',
  },
  input: {
    marginRight: '1rem',
  },
};

export const TodoItem = ({ todo, index }) => (
  <li style={styles.li}>
    <span className={`${todo.completed && 'done'}`}>
      <input type="checkbox" style={styles.input} />
      <strong>{index + 1}</strong>
      &nbsp;
      {todo.title}
    </span>
  </li>
);

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  count: PropTypes.string,
};
