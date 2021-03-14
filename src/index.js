import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import './animations.css';

import store from './reduxv2/store';

import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
