import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import App from './components/App';
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';

ReactDOM.render(
  <AuthContextProvider>
    <ThemeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);
