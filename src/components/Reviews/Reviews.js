import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { fetchMovieWithReviews } from '../../services/movie-api';
import getIdFromMatch from '../../utils/getIdFromMatch';

const Reviews = () => {
  const match = useRouteMatch();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const id = getIdFromMatch(match);

    fetchMovieWithReviews(id).then(review => setReviews(review));
  }, [match]);

  return (
    <div className="container">
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <h3>We dont have any reviews for this movie</h3>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
