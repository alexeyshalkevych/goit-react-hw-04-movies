import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchMoviesForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();

    onSubmit(query);

    setQuery('');
  };

  const handleInputVhange = ({ target }) => {
    const { value } = target;

    setQuery(value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleInputVhange}
        name="query"
        autoComplete="off"
      />
      <button type="submit">search</button>
    </form>
  );
};

SearchMoviesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchMoviesForm;
