import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviePage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import Navigation from '../Navigation/Navigation';
import routes from '../../routes';
import './App.css';

const App = () => (
  <>
    <Navigation />
    <Switch>
      <Route path={routes.HOME} exact component={HomePage} />
      <Route path={routes.MOVIE_DETAILS} component={MovieDetailsPage} />
      <Route path={routes.MOVIES} component={MoviesPage} />
      <Redirect to={routes.HOME} />
    </Switch>
  </>
);

export default App;
