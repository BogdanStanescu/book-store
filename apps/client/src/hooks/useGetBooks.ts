import useSWR from 'swr';
import { fetcher } from '../utils';

export const useGetBooks = <T>() => {
  const URL = 'http://localhost:3000/books';

  const { data, error, isLoading } = useSWR<T>(
    '/books',
    async () => await fetcher(URL)
  );

  return { data, isLoading, error };
};
