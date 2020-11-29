import axios from 'axios';

const key = '18873751-8e18f299cbfc24db3206257a6';

export function fetchImagesByQuery(query, page = 1) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((res) => res.data.hits);
}
