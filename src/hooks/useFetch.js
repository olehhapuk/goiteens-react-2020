import axios from 'axios';

axios({
  url: 'url.com',
  method: 'get',
  data: {},
  headers: {},
  // Query params
  params: {
    query: 'david',
  },
});

// Makes request on first render
function useFetch(config, initialValue) {
  return [data, loading, error];
}

const [users, usersLoading, usersError, fetch] = useFetch(
  {
    url: 'url.com',
    method: 'get',
    data: {},
    headers: {},
    // Query params
    params: {
      query: 'david',
    },
  },
  []
);

// Makes request when fetchData gets called
function useFetch(config, initialValue) {
  return [data, loading, error, fetchData];
}

const [users, usersLoading, usersError, fetch, fetchUsers] = useFetch({}, []);
