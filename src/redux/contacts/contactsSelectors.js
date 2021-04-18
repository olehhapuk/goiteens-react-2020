import { createSelector } from '@reduxjs/toolkit';

export const getContacts = (state) => state.contacts.items;
export const getLoading = (state) => state.contacts.loading;
export const getError = (state) => state.contacts.error;
export const getFilter = (state) => state.contacts.filter;

// export const getFilteredContacts = (state) => {
//   return getContacts(state).filter((contact) => {
//     return contact.name.toLowerCase().includes(getFilter(state).toLowerCase());
//   });
// };

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
