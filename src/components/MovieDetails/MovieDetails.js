import React from 'react';
import PropTypes from 'prop-types';
import getDate from '../../utils/getDates';
import {
  DetailsContainer,
  DetailsGenresList,
  DetailsButton,
  DetailsContent,
  DetailsGenresItem,
  DetailsTitle,
  DetailsGenresName,
  DetailsGenresTitle,
  DetailsOverviewText,
  DetailsOverview,
  DetailsImage,
  DetailsScore,
} from './MovieDetails.styled';

const MovieDetails = ({
  poster_path: posterPath,
  original_title: originalTilte,
  release_date: releaseDate,
  vote_average: voteAverage,
  overview,
  genres,
  onGoback,
}) => {
  return (
    <>
      <DetailsButton type="button" onClick={onGoback}>
        Go back
      </DetailsButton>
      <DetailsContainer>
        {posterPath ? (
          <DetailsImage
            src={`https://image.tmdb.org/t/p/original${posterPath}`}
            alt={originalTilte}
            width="250"
            height="350"
          />
        ) : (
          <DetailsImage
            src="http://placehold.it/250x350"
            alt={originalTilte}
            width="250"
            height="350"
          />
        )}

        <DetailsContent>
          <DetailsTitle>
            {originalTilte} <span>({getDate(releaseDate)})</span>
          </DetailsTitle>
          <DetailsScore>User score: {voteAverage * 10}%</DetailsScore>
          <DetailsOverview>Overview</DetailsOverview>
          <DetailsOverviewText>{overview}</DetailsOverviewText>
          <DetailsGenresTitle>Genres</DetailsGenresTitle>
          {genres.length && (
            <DetailsGenresList>
              {genres.map(({ id, name }) => (
                <DetailsGenresItem key={id}>
                  <DetailsGenresName>{name}</DetailsGenresName>
                </DetailsGenresItem>
              ))}
            </DetailsGenresList>
          )}
        </DetailsContent>
      </DetailsContainer>
    </>
  );
};

MovieDetails.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.shape([]).isRequired).isRequired,
  onGoback: PropTypes.func.isRequired,
  overview: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
};

MovieDetails.defaultProps = {
  poster_path: 'http://placehold.it/250x350',
};

export default MovieDetails;
