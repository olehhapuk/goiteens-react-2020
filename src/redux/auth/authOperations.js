import axios from 'axios';

import * as actions from './authActions';
import * as selectors from './authSelectors';

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
      dispatch(actions.loginError(error.message));
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
      dispatch(actions.registerError(error.message));
    });
};

export const logout = () => (dispatch) => {
  dispatch(actions.logoutRequest());

  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(actions.logoutSuccess());
    })
    .catch((error) => {
      dispatch(actions.logoutError(error));
    });
};

export const fetchUserData = () => (dispatch, getState) => {
  const stateToken = selectors.getToken(getState());

  if (!stateToken) {
    return;
  }

  token.set(stateToken);

  dispatch(actions.fetchUserDataRequest());

  axios
    .get('/users/current')
    .then((res) => {
      dispatch(actions.fetchUserDataSuccess(res.data));
    })
    .catch((error) => {
      token.unset();
      dispatch(actions.fetchUserDataError(error.response.data.message));
    });
};
