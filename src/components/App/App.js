import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import routes from '../../routes';
import Navigation from '../Navigation/Navigation';
import AppContainer from './App.styled';

const AsyncHomePage = lazy(() =>
  import('../../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const AsyncMoviesPage = lazy(() =>
  import(
    '../../pages/MoviePage/MoviePage' /* webpackChunkName: "movies-page" */
  ),
);
const AsyncMoviesDetailsPage = lazy(() =>
  import(
    '../../pages/MovieDetailsPage/MovieDetailsPage'
    /* webpackChunkName: "movies-details-page" */
  ),
);

const App = () => (
  <AppContainer>
    <Navigation />
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
        <Route path={routes.HOME} exact component={AsyncHomePage} />
        <Route path={routes.MOVIE_DETAILS} component={AsyncMoviesDetailsPage} />
        <Route path={routes.MOVIES} component={AsyncMoviesPage} />
        <Redirect to={routes.HOME} />
      </Switch>
    </Suspense>
  </AppContainer>
);

export default App;
