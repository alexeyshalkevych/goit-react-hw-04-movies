import styled from 'styled-components';

export const InfoItems = styled.ul`
  margin: 0 0 50px 0;
  padding: 0;
  display: flex;
  list-style: none;
`;

export const InfoItem = styled.li`
  & a {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    text-decoration: none;

    &.active {
      color: rgb(255, 0, 0);
    }
  }

  :not(:last-child) {
    margin-right: 20px;
  }
`;
