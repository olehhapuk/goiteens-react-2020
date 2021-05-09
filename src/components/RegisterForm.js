import { useEffect } from 'react';
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
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(255).required(),
  imageUrl: Yup.string().url().required(),
});

function RegisterForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      imageUrl: '',
    },
    onSubmit,
    validationSchema,
  });

  useEffect(() => {
    formik.setValues({
      ...formik.values,
      email: '1234@mail.com',
    });
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && (
          <FormHelperText color="red.300">{formik.errors.email}</FormHelperText>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && (
          <FormHelperText color="red.300">
            {formik.errors.password}
          </FormHelperText>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Image</FormLabel>
        <Input
          type="url"
          name="imageUrl"
          value={formik.values.imageUrl}
          onChange={formik.handleChange}
        />
        {formik.errors.imageUrl && (
          <FormHelperText color="red.300">
            {formik.errors.imageUrl}
          </FormHelperText>
        )}
      </FormControl>

      <Button type="submit" colorScheme="twitter" mt="3">
        Submit
      </Button>
    </form>
  );
}

export default RegisterForm;
