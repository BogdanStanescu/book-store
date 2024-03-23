import useSWR from 'swr';
import { fetcher } from '../utils';

export const useGetBook = <T>({ id }: { id: string }) => {
  const URL = `http://localhost:3000/book/${id}`;

  const { data, error, isLoading, mutate } = useSWR<T>(
    `book/${id}`,
    async () => await fetcher(URL),
    {
      refreshInterval: 0,
    }
  );

  const revalidate = () => {
    mutate();
  };

  return { data, isLoading, error, revalidate };
};
