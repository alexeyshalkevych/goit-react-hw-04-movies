import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const CastItem = styled.li`
  width: 10%;
  text-align: center;
`;

export const CastImage = styled.img`
  display: inline-block;
  margin-bottom: 15px;
  text-align: center;
`;

export const CastCharacterName = styled.h4`
  margin: 0 0 6px 0;
  font-size: 16px;
  font-weight: 500;
  color: rgb(255, 255, 255);
`;

export const CastCharacterCharacter = styled.p`
  margin: 0 0 10px 0;
  font-size: 14px;
  color: rgb(255, 255, 255);
`;
