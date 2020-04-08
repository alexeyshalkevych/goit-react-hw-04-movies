import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
// import { List, ListItem } from './MovieList.styled';

const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.length > 0 &&
        films.map(({ id, title, poster_path: posterPath }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${posterPath}`}
                alt={title}
                width="484"
                // height="550"
              />
              <h5>{title}</h5>
            </Link>
          </li>
        ))}
    </ul>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape([]).isRequired).isRequired,
};

export default MoviesList;
