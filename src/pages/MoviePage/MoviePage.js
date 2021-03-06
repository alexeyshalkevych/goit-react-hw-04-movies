import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchMovieWithQuery } from '../../services/movie-api';
import SearchMoviesForm from '../../components/SearchMoviesForm/SearchMoviesForm';
import MoviesList from '../../components/MoviesList/MoviesList';
import getCategoryFromLocation from '../../utils/getCategoryFromLocation';
import { MovieContainer, MovieTitle } from './MoviePage.styled';

const MoviesPage = () => {
  const history = useHistory();
  const location = useLocation();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const categoryQuery = getCategoryFromLocation(location);

    if (categoryQuery) {
      fetchMovieWithQuery(categoryQuery).then(films => setMovies(films));
    }
  }, [location]);

  useEffect(() => {
    const query = getCategoryFromLocation(location);

    if (query) {
      fetchMovieWithQuery(query).then(films => setMovies(films));
    }
  }, [location]);

  const searchMovie = query => {
    if (query) {
      fetchMovieWithQuery(query).then(films => setMovies(films));
      history.push({
        ...location,
        search: `category=${query}`,
      });
      return;
    }

    history.push({
      ...location,
      search: '',
    });
  };

  return (
    <MovieContainer>
      <MovieTitle>Movies Page</MovieTitle>
      <SearchMoviesForm onSubmit={searchMovie} />
      <MoviesList films={movies} />
    </MovieContainer>
  );
};

export default MoviesPage;
