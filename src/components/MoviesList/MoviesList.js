import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemImage,
  ListItemTitle,
} from './MoviesList.styled';

const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <List>
      {films.length > 0 &&
        films.map(({ id, title, poster_path: posterPath }) => (
          <ListItem key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              {posterPath ? (
                <ListItemImage
                  src={`https://image.tmdb.org/t/p/original${posterPath}`}
                  alt={title}
                  width="480"
                />
              ) : (
                <ListItemImage src="http://placehold.it/480x620" alt={title} />
              )}

              <ListItemTitle>{title}</ListItemTitle>
            </Link>
          </ListItem>
        ))}
    </List>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape([]).isRequired).isRequired,
};

export default MoviesList;
