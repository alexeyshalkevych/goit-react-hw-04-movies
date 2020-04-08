import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchPopularTodayMovies = () =>
  axios
    .get('/trending/movie/day?api_key=4dce7cd3557cfb8e6e269a90f5961d8a')
    .then(response => response.data.results);

export const fetchMovieWithId = id =>
  axios
    .get(`movie/${id}?api_key=4dce7cd3557cfb8e6e269a90f5961d8a`)
    .then(response => response.data);

export const fetchMovieWithQuery = query =>
  axios
    .get(
      `/search/movie?api_key=4dce7cd3557cfb8e6e269a90f5961d8a&query=${query}`,
    )
    .then(response => response.data.results);

export const fetchMovieWithCast = id =>
  axios
    .get(`/movie/${id}/credits?api_key=4dce7cd3557cfb8e6e269a90f5961d8a`)
    .then(response => response.data.cast);

export const fetchMovieWithReviews = id =>
  axios
    .get(`/movie/${id}/reviews?api_key=4dce7cd3557cfb8e6e269a90f5961d8a`)
    .then(response => response.data.results);
