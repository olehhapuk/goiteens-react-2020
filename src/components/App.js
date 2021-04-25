import { Container, Button } from '@chakra-ui/react';
import { useState } from 'react';

import Counter from './Counter';
import Poster from './Poster';
import Modal from './Modal';
import Contacts from './Contacts';
import RegisterForm from './RegisterForm';

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <RegisterForm />
      {/* <Counter /> */}
      {/* <Poster /> */}
      {/* <Contacts /> */}

      {/* <Button type="button" onClick={() => setModalVisible(true)}>
        Show Modal
      </Button>

      {modalVisible && <Modal closeModal={() => setModalVisible(false)} />} */}
    </Container>
  );
}

export default App;
