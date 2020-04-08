import React, { useEffect, useState } from 'react';
import { fetchPopularTodayMovies } from '../services/movie-api';
import MoviesList from '../components/MoviesList/MoviesList';

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchPopularTodayMovies().then(movies => setFilms(movies));
  }, []);

  return (
    <div>
      <h1 className="text-center">Home Page</h1>
      {films.length > 0 && <MoviesList films={films} />}
    </div>
  );
};

export default HomePage;
