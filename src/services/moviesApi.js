import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = ''; // <--- Ваш api ключ сюди

export function fetchTrendingMovies() {
  return axios.get(`${baseUrl}/trending/movie/day?api_key=${apiKey}`);
}

export function fetchMoviesByQuery(query) {
  return axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`);
}

export function fetchMovieDetails(movieId) {
  return axios.get(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`);
}

// fetchMovieDetails вертає об'єкт в якому буде backdrop_path, це кусок посилання на фото
// Щоб зібрати повне посилання потрібно притримуватись такого формату:
// `https://image.tmdb.org/t/p/original/${backdrop_path}`
// Приклад в компоненті ImageDemo
