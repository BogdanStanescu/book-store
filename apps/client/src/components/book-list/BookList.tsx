import BookCard from '../book-card/BookCard';
import ImageList from '@mui/material/ImageList';
import { BookCardProps } from '../book-card/BookCard.types';
import { Alert, Skeleton, Stack } from '@mui/material';
import { styles } from './BookList.styles';
import { useGetBooks } from '../../hooks';

export default function BookList() {
  const { isLoading, data, error } = useGetBooks<BookCardProps[]>();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (!data) {
    return <EmptyData />;
  }

  const books = data.filter((item) => Object.keys(item).length > 1);

  return (
    <ImageList sx={styles.bookList}>
      {books.map((item) => (
        <BookCard key={item.id} props={item} />
      ))}
    </ImageList>
  );
}

const Loading = () => {
  return (
    <Stack direction="column" spacing={4} p={2}>
      <Stack spacing={1} direction="row" gap={2}>
        <Skeleton variant="rectangular" width="50%" height="50vh" />
        <Skeleton variant="rectangular" width="50%" height="50vh" />
      </Stack>

      <Stack spacing={1} direction="row" gap={2}>
        <Skeleton variant="rectangular" width="50%" height="50vh" />
        <Skeleton variant="rectangular" width="50%" height="50vh" />
      </Stack>
    </Stack>
  );
};

const Error = () => {
  return (
    <Alert severity="error" variant="filled" sx={styles.errorAlert}>
      Something went wrong while retrieving the list of books. Please try again
      later.
    </Alert>
  );
};

const EmptyData = () => {
  return (
    <Alert severity="info" variant="filled" sx={styles.emptyDataAlert}>
      There are no books available at the moment.
    </Alert>
  );
};
