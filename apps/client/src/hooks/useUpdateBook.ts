import useSWR from 'swr';
import axios from 'axios';
import { BookCardProps } from '../components/book-card/BookCard.types';
import { toast } from 'react-toastify';

export const useUpdateBook = ({ id }: { id: string }) => {
  const URL = `http://localhost:3000/book/${id}`;

  const fetcher = async (url: string) => {
    const response = await axios.put(url, {
      title: 'New Title',
    });
    return response.data;
  };

  const { mutate } = useSWR(URL, async () => await fetcher(URL));

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
