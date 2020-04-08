import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviePage';
import routes from '../../routes';
import './App.css';
import Navigation from '../Navigation/Navigation';

const App = () => (
  <>
    <Navigation />
    <Switch>
      <Route path={routes.HOME} exact component={HomePage} />
      {/* <Route path={routes.MOVIE_DETAILS} component={AsyncMoviesDetailsPage} /> */}
      <Route path={routes.MOVIES} component={MoviesPage} />
      <Redirect to={routes.HOME} />
    </Switch>
  </>
);

export default App;
