import { useReducer, useState, useCallback, useMemo, useEffect } from 'react';
import { Heading, Stack } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';

import ContactsForm from './ContactsForm';
import Filter from './Filter';
import ContactsItem from './ContactsItem';

const initialState = [];

function contactsReducer(state, action) {
  switch (action.type) {
    case 'add':
      const newContact = {
        id: uuid(),
        ...action.payload,
      };

      return [...state, newContact];

    case 'delete':
      return state.filter((contact) => contact.id !== action.payload);

    default:
      break;
  }
}

function Contacts() {
  const [contacts, dispatch] = useReducer(contactsReducer, initialState);
  const [filter, setFilter] = useState('');

  const handleDelete = useCallback((id) => {
    dispatch({
      type: 'delete',
      payload: id,
    });
  }, []);

  const value = useMemo(() => {
    return filter + '1';
  }, [filter]);

  useEffect(() => {
    console.log('filter + 1', value);
  }, [value]);

  return (
    <div>
      <Heading mb="1">Contacts</Heading>

      <ContactsForm
        onSubmit={(data) =>
          dispatch({
            type: 'add',
            payload: data,
          })
        }
      />

      <Filter value={filter} onChange={setFilter} />

      <Stack mt="3">
        {contacts.map((contact) => (
          <ContactsItem key={contact.id} {...contact} onDelete={handleDelete} />
        ))}
      </Stack>
    </div>
  );
}

export default Contacts;
