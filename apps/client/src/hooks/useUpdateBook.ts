import useSWR from 'swr';
import axios from 'axios';
import { BookCardProps } from '../components/book-card/BookCard.types';
import { toast } from 'react-toastify';
import { fetcher } from '../utils';

export const useUpdateBook = ({ id }: { id: string }) => {
  const URL = `http://localhost:3000/book/${id}`;

  const { mutate } = useSWR(URL, async () => await fetcher(URL, 'put'));

  const updateBook = async (book: Partial<BookCardProps>) => {
    try {
      await axios.put(URL, book);
      mutate(book, false);
      toast.success('Book updated successfully.');
    } catch (error) {
      toast.error('An error occurred while updating the book.');
    }
  };

  return { updateBook };
};
