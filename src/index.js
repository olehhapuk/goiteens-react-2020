import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ErrorBoundary from './components/ErrorBoundary';
import App from './components/App';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
