import axios from 'axios';

export function fetchArticlesByQuery(query, page) {
  return axios
    .get(
      `http://hn.algolia.com/api/v1/search?query=${query}&page=${page}&hitsPerPage=5`
    )
    .then((response) => response.data.hits);
}
