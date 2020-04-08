import React from 'react';
import PropTypes from 'prop-types';
import getDate from '../../utils/getDates';

const stylesContainer = {
  display: 'flex',
};

const stylesImg = {
  display: 'block',
  maxWdth: '100%',
  height: 'auto',
};

const stylesGenresList = {
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

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
      <button type="button" onClick={onGoback}>
        Go back
      </button>
      <div className="container" style={stylesContainer}>
        {posterPath ? (
          <img
            src={`https://image.tmdb.org/t/p/original${posterPath}`}
            alt={originalTilte}
            width="250"
            height="350"
            style={stylesImg}
          />
        ) : (
          <img
            src="http://placehold.it/250x350"
            alt={originalTilte}
            width="250"
            height="350"
            style={stylesImg}
          />
        )}

        <div style={{ padding: '10px 50px 10px 20px' }}>
          <h3>
            {originalTilte} <span>({getDate(releaseDate)})</span>
          </h3>
          <p>User score: {voteAverage * 10}%</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h5>Genres</h5>
          {genres.length && (
            <ul style={stylesGenresList}>
              {genres.map(({ id, name }) => (
                <li key={id} style={{ padding: '0px 3px' }}>
                  <p>{name}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
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
