import React, { useEffect, useState } from 'react';
import { fetchPopularTodayMovies } from '../../services/movie-api';
import MoviesList from '../../components/MoviesList/MoviesList';
import HomeTitle from './HomePage.styled';

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchPopularTodayMovies().then(movies => setFilms(movies));
  }, []);

  return (
    <div>
      <HomeTitle>Trending today</HomeTitle>
      {films.length > 0 && <MoviesList films={films} />}
    </div>
  );
};

export default HomePage;
