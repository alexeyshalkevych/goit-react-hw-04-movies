import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { fetchMovieWithReviews } from '../../services/movie-api';
import getIdFromMatch from '../../utils/getIdFromMatch';
import {
  ReviewsList,
  ReviewsItem,
  ReviewsAuthor,
  ReviewsContent,
} from './Reviews.styled';

const Reviews = () => {
  const match = useRouteMatch();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const id = getIdFromMatch(match);

    fetchMovieWithReviews(id).then(review => setReviews(review));
  }, [match]);

  return (
    <div>
      <ReviewsList>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <ReviewsAuthor>{author}</ReviewsAuthor>
              <ReviewsContent>{content}</ReviewsContent>
            </ReviewsItem>
          ))
        ) : (
          <h3>We dont have any reviews for this movie</h3>
        )}
      </ReviewsList>
    </div>
  );
};

export default Reviews;
