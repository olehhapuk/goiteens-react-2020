import { Heading, Button, Text, Stack } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

const counterValueSelector = (state) => state.counter;

const counterIncrementAction = {
  type: 'counter/increment',
};

const counterDecrementAction = {
  type: 'counter/decrement',
};

function CounterRedux() {
  const counter = useSelector(counterValueSelector);
  const dispatch = useDispatch();

  function decrement() {
    dispatch(counterDecrementAction);
  }

  function increment() {
    dispatch(counterIncrementAction);
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
    </div>
  );
}

export default CounterRedux;
