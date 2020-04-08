import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import InfoList from '../components/InfoList/InfoList';
import { fetchMovieWithId } from '../services/movie-api';
import getIdFromMatch from '../utils/getIdFromMatch';
import routes from '../routes';

// const AsyncCast = lazy(() =>
//   import('../components/Cast/Cast' /* webpackChunkName: "cast-page" */),
// );

// const AsyncReviews = lazy(() =>
//   import(
//     '../components/Reviews/Reviews' /* webpackChunkName: "reviews-page" */
//   ),
// );

const styles = { textAlign: 'center' };

const MovieDetailsPage = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const id = getIdFromMatch(match);

    fetchMovieWithId(id).then(films => setMovie(films));
  }, [match]);

  const handleGoBack = () => {
    if (location.state) {
      history.push(location.state.from);
      return;
    }

    history.push(routes.HOME);
  };

  return (
    <div>
      <h1 className="text-center">Movie Details Page</h1>
      {movie && (
        <>
          <MovieDetails {...movie} onGoback={handleGoBack} />
          <InfoList />
          <Loader
            style={styles}
            type="ThreeDots"
            color="#F1005C"
            height={100}
            width={100}
            timeout={3000}
          />
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
