import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import NavContainer from './Navigation.styled';

const Navigation = () => (
  <NavContainer>
    <NavLink to={routes.HOME} exact>
      Home
    </NavLink>
    <NavLink to={routes.MOVIES}>Movies</NavLink>
  </NavContainer>
);

export default Navigation;
