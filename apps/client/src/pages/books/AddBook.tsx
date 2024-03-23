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
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useAddBook } from '../../hooks';
import { useState } from 'react';

const bookSchema = yup.object().shape({
  id: yup.string(),
  image: yup.string().url().required('Image URL is required'),
  title: yup.string().trim().min(0).max(100).required('Title is required'),
  genre: yup.string().trim().min(0).max(100).required('Genre is required'),
  author: yup.string().trim().min(0).max(100).required('Author is required'),
  description: yup
    .string()
    .trim()
    .min(0)
    .max(1500)
    .required('Description is required'),
});

type Book = yup.InferType<typeof bookSchema>;

const AddBookForm = () => {
  const { addBook } = useAddBook();

  const navigate = useNavigate();
  const [value, setValue] = useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleSubmit = (values: Book, actions: FormikHelpers<Book>) => {
    addBook(values);
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
        initialValues={{} as Book}
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
              Add Book
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddBookForm;
