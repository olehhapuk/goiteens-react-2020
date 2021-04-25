import { Box, Text, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';

function Modal({ closeModal }) {
  useEffect(() => {
    return () => {
      console.log('Will unmount');
    };
  }, []);

  return (
    <Box w="500px" h="300px">
      <Text>I'm a modal</Text>
      <IconButton type="button" onClick={closeModal} icon={<CloseIcon />} />
    </Box>
  );
}

export default Modal;
