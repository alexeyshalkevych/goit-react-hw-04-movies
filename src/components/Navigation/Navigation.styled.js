import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 75px;
  padding: 0 30px;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);

  & a {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    text-decoration: none;

    :not(:last-child) {
      margin-right: 20px;
    }

    &.active {
      color: rgb(255, 0, 0);
    }
  }
`;

export default NavContainer;
