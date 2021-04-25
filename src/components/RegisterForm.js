import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
} from '@chakra-ui/react';
import { Formik } from 'formik';

function RegisterForm() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={props.values.email}
              onChange={props.handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={props.values.password}
              onChange={props.handleChange}
            />
          </FormControl>

          <Button type="submit" colorScheme="twitter" mt="3">
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default RegisterForm;
