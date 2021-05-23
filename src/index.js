import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from './redux/store';

import './index.css';

import App from './components/App';

// document.querySelector('html').style.fontFamily = 'serif';
document.querySelector('html').style.fontSize = '18px';

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById('root')
);

// import axios from 'axios';

// http://site.com/search?query=react&sortBy=title&sortOrder=asc

// axios.defaults.baseURL = 'http://site.com';

// axios({
//   method: 'post',
//   url: '/search',
//   params: {
//     query: 'react',
//     sortBy: 'title',
//     sortOrder: 'asc',
//   },
//   data: someData,
// });
