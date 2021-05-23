import { useEffect } from 'react';
import { Heading, Button, Text, Stack } from '@chakra-ui/react';

import { useCounter } from '../hooks/useCounter';

// this.state = {
//   counter: 5,
// };

// this.setState((prevState) => ({
//   counter: prevState.counter + 1
// }));

function Counter() {
  const [counter, increment, decrement] = useCounter(0);

  useEffect(() => {
    console.log('Render');

    return () => {
      console.log('cleanup');
    };
  });

  useEffect(() => {
    console.log('Counter updating');
  }, [counter]);

  return (
    <div>
      <Heading>Counter</Heading>

      <Stack spacing="3" direction="row" alignItems="center">
        <Button type="button" onClick={decrement}>
          -
        </Button>
        <Text>{counter}</Text>
        <Button type="button" onClick={increment}>
          +
        </Button>
      </Stack>

      {/* <Input
        type="number"
        placeholder="Step"
        mt="3"
        value={step}
        onChange={handleStepChange}
      /> */}
    </div>
  );
}

export default Counter;
