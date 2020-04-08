import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { fetchMovieWithCast } from '../../services/movie-api';
import getIdFromMatch from '../../utils/getIdFromMatch';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const match = useRouteMatch();

  useEffect(() => {
    const id = getIdFromMatch(match);

    fetchMovieWithCast(id).then(info => setCast(info));
  }, [match]);

  return (
    <div className="container">
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ id, character, name, profile_path: profilePath }) => (
            <li key={id}>
              {profilePath ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${profilePath}`}
                  alt={name}
                  width="100"
                  height="150"
                />
              ) : (
                <img
                  src="http://placehold.it/100x150"
                  alt={name}
                  width="100"
                  height="150"
                />
              )}

              <h4>{name}</h4>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>We dont have any cast for this movie</h3>
      )}
    </div>
  );
};

export default Cast;
