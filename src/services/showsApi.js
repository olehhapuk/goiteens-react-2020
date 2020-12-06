import axios from 'axios';

const config = {
  baseURL: 'http://api.tvmaze.com',
};

export function fetchAllShows(query) {
  return axios.get(`/search/shows?q=${query}`, config);
}

export function fetchShowDetails(showId) {
  return axios.get(`/shows/${showId}`, config);
}

export function fetchShowEpisodes(showId) {
  return axios.get(`/shows/${showId}/episodes`, config);
}
