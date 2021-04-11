import axios from 'axios';

import * as actions from './authActions';

const token = {
  set(value) {
    axios.defaults.headers.common.Authorization = `Bearer ${value}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = null;
  },
};

export const login = (credentials) => (dispatch) => {
  dispatch(actions.loginRequest());

  axios
    .post('/users/login', credentials)
    .then((res) => {
      token.set(res.data.token);
      dispatch(actions.loginSuccess(res.data));
    })
    .catch((error) => {
      dispatch(actions.loginError(error));
    });
};

export const register = (credentials) => (dispatch) => {
  dispatch(actions.registerRequest());

  axios
    .post('/users/signup', credentials)
    .then((res) => {
      token.set(res.data.token);
      dispatch(actions.registerSuccess(res.data));
    })
    .catch((error) => {
      dispatch(actions.registerError(error));
    });
};
