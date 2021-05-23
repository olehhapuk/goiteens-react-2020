import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.number().required(),
});

function ContactsForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit,
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl>
        <FormLabel>Contact name</FormLabel>
        <Input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && (
          <FormHelperText color="red.300">{formik.errors.name}</FormHelperText>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Phone number</FormLabel>
        <Input
          type="tel"
          name="number"
          value={formik.values.number}
          onChange={formik.handleChange}
        />
        {formik.errors.number && (
          <FormHelperText color="red.300">
            {formik.errors.number}
          </FormHelperText>
        )}
      </FormControl>

      <Button type="submit" colorScheme="twitter" mt="3">
        Submit
      </Button>
    </form>
  );
}

export default ContactsForm;
