import { useState, useEffect } from 'react';
import { Heading, Button, Text, Stack, Input } from '@chakra-ui/react';

// this.state = {
//   counter: 5,
// };

// this.setState((prevState) => ({
//   counter: prevState.counter + 1
// }));

function Counter() {
  const [counter, setCounter] = useState(5);
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log('Render');

    return () => {
      console.log('cleanup');
    };
  });

  useEffect(() => {
    console.log('Counter updating');
  }, [counter]);

  useEffect(() => {
    console.log('Step updating');
  }, [step]);

  function increment() {
    setCounter((prevCounter) => prevCounter + step);
  }

  function decrement() {
    setCounter((prevCounter) => prevCounter - step);
  }

  function handleStepChange(e) {
    setStep(e.target.valueAsNumber);
  }

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

      <Input
        type="number"
        placeholder="Step"
        mt="3"
        value={step}
        onChange={handleStepChange}
      />
    </div>
  );
}

export default Counter;
