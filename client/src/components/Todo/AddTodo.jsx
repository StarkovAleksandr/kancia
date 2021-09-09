import React from 'react';
import PropTypes from 'prop-types';

const useInputValue = (defaultValue = '') => {
  const [value, setValue] = React.useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(''),
    value: () => value,
  };
};

export const AddTodo = ({ onCreate }) => {
  const input = useInputValue('');

  const submitHandler = React.useCallback((event) => {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }, []);

  return (
    <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type="submit">Add todo</button>
    </form>
  );
};

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
