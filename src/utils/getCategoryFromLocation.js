import queryString from 'query-string';

const getCategoryFromLocation = location =>
  queryString.parse(location.search).category;

export default getCategoryFromLocation;
