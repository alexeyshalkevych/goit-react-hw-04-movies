import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import routes from '../../routes';
import './App.css';

const App = () => (
  <Switch>
    <Route path={routes.HOME} exact component={HomePage} />
    {/* <Route path={routes.MOVIE_DETAILS} component={AsyncMoviesDetailsPage} />
    <Route path={routes.MOVIES} component={AsyncMoviesPage} /> */}
    <Redirect to={routes.HOME} />
  </Switch>
);

export default App;
