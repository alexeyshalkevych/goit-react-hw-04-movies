import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => (
  <>
    <NavLink to={routes.HOME} exact>
      Home
    </NavLink>
    <NavLink to={routes.MOVIES}>Movies</NavLink>
  </>
);

export default Navigation;
