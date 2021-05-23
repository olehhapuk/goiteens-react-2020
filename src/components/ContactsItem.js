import { useEffect } from 'react';

import { DeleteIcon } from '@chakra-ui/icons';
import { Heading, Box, Text, IconButton, Flex } from '@chakra-ui/react';

function ContactsItem({ id, name, number, onDelete }) {
  useEffect(() => {
    console.log('ContactsItem render');
  }, [onDelete]);

  return (
    <Box key={id} bgColor="gray.100" borderRadius="5px" p="12px">
      <Flex justifyContent="space-between">
        <Box>
          <Heading size="md">{name}</Heading>
          <Text>{number}</Text>
        </Box>
        <IconButton
          icon={<DeleteIcon />}
          colorScheme="red"
          color="white"
          onClick={() => onDelete(id)}
        />
      </Flex>
    </Box>
  );
}

export default ContactsItem;
