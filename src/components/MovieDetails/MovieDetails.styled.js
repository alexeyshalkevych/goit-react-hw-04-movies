import styled from 'styled-components';

export const DetailsButton = styled.button`
  display: block;
  padding: 10px;
  margin-bottom: 30px;
  width: 10%;
  font-size: 16px;
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`;

export const DetailsContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  padding: 0 60px 0 20px;
`;

export const DetailsGenresList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const DetailsGenresItem = styled.li`
  padding: 0px 5px;
`;

export const DetailsGenresTitle = styled.p`
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;
`;

export const DetailsGenresName = styled.p`
  margin: 0 0 12px 0;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 500;
`;

export const DetailsImage = styled.img`
  padding-right: 30px;
`;

export const DetailsContent = styled.div`
  padding: 10px 50px 10px 20px;
`;

export const DetailsTitle = styled.h3`
  margin: 0 0 6px 0;
  font-size: 20px;
  font-weight: 500;
  line-height: 2;
  text-transform: uppercase;
`;

export const DetailsOverview = styled.h4`
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 2;
  text-transform: uppercase;
`;

export const DetailsOverviewText = styled.p`
  margin: 0 0 10px 0;
  max-width: 800px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const DetailsScore = styled.p`
  margin: 0 0 10px 0;
  font-size: 16px;
  font-weight: 500px;
  line-height: 1.5;
`;
