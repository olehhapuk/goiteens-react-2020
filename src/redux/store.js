import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/authReducer';
import contactsReducer from './contacts/contactsReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
});
