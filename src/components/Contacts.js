import { useReducer, useState } from 'react';
import { Heading, Stack, Box, Text, IconButton, Flex } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { v4 as uuid } from 'uuid';

import ContactsForm from './ContactsForm';
import Filter from './Filter';

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

      <Stack>
        {contacts.map((contact) => (
          <Box key={contact.id} bgColor="gray.100" borderRadius="5px" p="12px">
            <Flex justifyContent="space-between">
              <Box>
                <Heading size="md">{contact.name}</Heading>
                <Text>{contact.number}</Text>
              </Box>
              <IconButton
                icon={<DeleteIcon />}
                bgColor="red.300"
                color="white"
                onClick={() =>
                  dispatch({
                    type: 'delete',
                    payload: contact.id,
                  })
                }
              />
            </Flex>
          </Box>
        ))}
      </Stack>
    </div>
  );
}

export default Contacts;
