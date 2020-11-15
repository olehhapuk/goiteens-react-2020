import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// http://hn.algolia.com/api/v1/search?query=react&page=0&hitsPerPage=5

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
