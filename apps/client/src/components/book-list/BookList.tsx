import useSWR from 'swr';
import BookCard from '../book-card/BookCard';
import ImageList from '@mui/material/ImageList';
import { BookCardProps } from '../book-card/BookCard.types';
import { Alert, Skeleton, Stack } from '@mui/material';
import { fetcher } from '../../utils/fetcher';
import { styles } from './BookList.styles';

export default function BookList() {
  const { isLoading, data, error } = useBooks();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (!data) {
    return <EmptyData />;
  }

  return (
    <ImageList sx={styles.bookList}>
      {(data || []).map((item) => (
        <BookCard key={item.id} {...item} />
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

const useBooks = () => {
  const URL = 'http://localhost:3000/books';

  const { data, error, isLoading } = useSWR<BookCardProps[]>(
    '/books',
    async () => await fetcher(URL)
  );

  return { data, isLoading, error };
};
