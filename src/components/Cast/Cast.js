import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { fetchMovieWithCast } from '../../services/movie-api';
import getIdFromMatch from '../../utils/getIdFromMatch';
import {
  CastCharacterName,
  CastList,
  CastItem,
  CastCharacterCharacter,
  CastImage,
} from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const match = useRouteMatch();

  useEffect(() => {
    const id = getIdFromMatch(match);

    fetchMovieWithCast(id).then(info => setCast(info));
  }, [match]);

  return (
    <div>
      {cast.length > 0 ? (
        <CastList>
          {cast.map(({ id, character, name, profile_path: profilePath }) => (
            <CastItem key={id}>
              {profilePath ? (
                <CastImage
                  src={`https://image.tmdb.org/t/p/original${profilePath}`}
                  alt={name}
                  width="100"
                  height="150"
                />
              ) : (
                <CastImage
                  src="http://placehold.it/100x150"
                  alt={name}
                  width="100"
                  height="150"
                />
              )}

              <CastCharacterName>{name}</CastCharacterName>
              <CastCharacterCharacter>{character}</CastCharacterCharacter>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <h3>We dont have any cast for this movie</h3>
      )}
    </div>
  );
};

export default Cast;
