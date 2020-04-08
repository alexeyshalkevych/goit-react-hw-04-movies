import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 500px;
  padding-bottom: 50px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  width: 40%;
  border: none;
  font-size: 16px;
  font-weight: 500;
`;

export const SearchButton = styled.button`
  display: block;
  padding: 10px;
  width: 10%;
  font-size: 16px;
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`;
