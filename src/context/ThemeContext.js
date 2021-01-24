import { createContext } from 'react';

import { Themes } from '../constants';

const ThemeContext = createContext(Themes.Light);
ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;
