import {
  Alert,
  Box,
  Button,
  Skeleton,
  Stack,
  Tab,
  Tabs,
  TextField,
} from '@mui/material';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { useGetBook, useUpdateBook } from '../../hooks';
import { useState } from 'react';

const bookSchema = yup.object().shape({
  id: yup.string(),
  image: yup.string().url(),
  title: yup.string().trim().min(0).max(100),
  genre: yup.string().trim().min(0).max(100),
  author: yup.string().trim().min(0).max(100),
  description: yup.string().trim().min(0).max(1500),
});

type Book = yup.InferType<typeof bookSchema>;

const EditBookForm = () => {
  const { id } = useParams() as { id: string };
  const { updateBook } = useUpdateBook({ id });

  const navigate = useNavigate();
  const [value, setValue] = useState('one');
  const bookResponse = useGetBook<Book>({ id });

  if (bookResponse.isLoading) {
    return <Loading />;
  }

  if (bookResponse.error) {
    return <Error />;
  }

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleSubmit = (values: Book, actions: FormikHelpers<Book>) => {
    updateBook(values);
    actions.resetForm();
  };

  return (
    <Box sx={{ width: '100%', px: 4, pt: 2, pb: 10 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab value="one" label="Books" onClick={() => navigate('/')} />
      </Tabs>

      <Formik
        initialValues={bookResponse.data as Book}
        validationSchema={bookSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors }) => (
          <Form>
            <Field
              name="title"
              label="Title"
              margin="normal"
              fullWidth
              as={TextField}
              helperText={<ErrorMessage name="title" />}
              error={!!errors.title}
            />

            <Field
              name="author"
              label="Author"
              margin="normal"
              fullWidth
              as={TextField}
              helperText={<ErrorMessage name="author" />}
              error={!!errors.author}
            />

            <Field
              name="genre"
              label="Genre"
              margin="normal"
              fullWidth
              as={TextField}
              helperText={<ErrorMessage name="genre" />}
              error={!!errors.genre}
            />

            <Field
              name="image"
              label="Image URL"
              margin="normal"
              fullWidth
              as={TextField}
              helperText={<ErrorMessage name="image" />}
              error={!!errors.image}
            />

            <Field
              name="description"
              label="Description"
              margin="normal"
              fullWidth
              multiline
              rows={4}
              as={TextField}
              helperText={<ErrorMessage name="description" />}
              error={!!errors.description}
            />

            <Button type="submit" variant="contained" color="primary">
              Save Book
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

const Loading = () => {
  return (
    <Stack spacing={4} sx={{ mt: 4, px: 4 }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton
          key={index}
          animation="pulse"
          variant="rectangular"
          height={80}
        />
      ))}
    </Stack>
  );
};

const Error = () => {
  return (
    <Alert severity="error" variant="filled" sx={{ m: 4 }}>
      Something went wrong while retrieving the book. Please try again later.
    </Alert>
  );
};

export default EditBookForm;
