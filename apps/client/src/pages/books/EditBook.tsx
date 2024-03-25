import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Skeleton,
  Stack,
  Tab,
  Tabs,
  TextField,
} from '@mui/material';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { useDeleteBook, useGetBook, useUpdateBook } from '../../hooks';
import React, { Dispatch, SetStateAction, useState } from 'react';

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
  const [open, setOpen] = React.useState(false);
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
    navigate('/');
  };

  return (
    <Box sx={{ width: '100%', px: 4, pt: 2, pb: 10 }}>
      <DeleteBookDialog
        open={open}
        setOpen={setOpen}
        book={bookResponse.data as Required<Book>}
      />

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

            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setOpen(true)}
              >
                Delete Book
              </Button>

              <Button type="submit" variant="contained" color="primary">
                Save Book
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

const DeleteBookDialog = ({
  open,
  setOpen,
  book,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  book: Required<Book>;
}) => {
  const { id } = useParams() as { id: string };
  const { deleteBook } = useDeleteBook({ id });
  const navigate = useNavigate();

  const handleDeleteBook = () => {
    setOpen(false);
    deleteBook(book);
    navigate('/');
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Are you sure you want to delete this book?
      </DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This action cannot be undone. Are you sure you want to delete this
          book? Once deleted, it cannot be recovered. Please confirm.
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDeleteBook} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
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
