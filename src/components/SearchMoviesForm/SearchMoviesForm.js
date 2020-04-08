import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchInput,
  SearchButton,
} from './SearchMovieForm.styled';

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
    <SearchForm onSubmit={handleFormSubmit}>
      <SearchInput
        type="text"
        value={query}
        onChange={handleInputVhange}
        name="query"
        autoComplete="off"
      />
      <SearchButton type="submit">search</SearchButton>
    </SearchForm>
  );
};

SearchMoviesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchMoviesForm;
