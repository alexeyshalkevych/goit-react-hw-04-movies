import React, { useState, useEffect, lazy, Suspense } from 'react';
import {
  Route,
  Switch,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import InfoList from '../../components/InfoList/InfoList';
import { fetchMovieWithId } from '../../services/movie-api';
import getIdFromMatch from '../../utils/getIdFromMatch';
import routes from '../../routes';
import {
  MovieDetailsContainer,
  MovieDetailsTitle,
} from './MovieDetailsPage.styled';

const AsyncCast = lazy(() =>
  import('../../components/Cast/Cast' /* webpackChunkName: "cast-page" */),
);

const AsyncReviews = lazy(() =>
  import(
    '../../components/Reviews/Reviews' /* webpackChunkName: "reviews-page" */
  ),
);

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
    <MovieDetailsContainer>
      <MovieDetailsTitle>Movie Details Page</MovieDetailsTitle>
      {movie && (
        <>
          <MovieDetails {...movie} onGoback={handleGoBack} />
          <InfoList />
          <Suspense
            fallback={
              <Loader
                style={{ textAlign: 'center' }}
                type="ThreeDots"
                color="#F1005C"
                height={100}
                width={100}
                timeout={3000}
              />
            }
          >
            <Switch>
              <Route path={`${match.path}/cast`} component={AsyncCast} />
              <Route path={`${match.path}/reviews`} component={AsyncReviews} />
            </Switch>
          </Suspense>
        </>
      )}
    </MovieDetailsContainer>
  );
};

export default MovieDetailsPage;
