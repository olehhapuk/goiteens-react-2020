import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'd19b59b3b6c574219e918a0f3144198f',
};

export function fetchTrendingMovies() {
  return axios.get('/trending/movie/day').then((res) => res.data);
}

export function fetchMoviesByQuery(query, page = 1) {
  return axios
    .get(`/search/movie?query=${query}&page=${page}`)
    .then((res) => res.data);
}

export function fetchMovieDetails(movieId) {
  return axios.get(`/movie/${movieId}`).then((res) => res.data);
}
