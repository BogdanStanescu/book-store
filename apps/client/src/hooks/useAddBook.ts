import useSWR from 'swr';
import axios from 'axios';
import { BookCardProps } from '../components/book-card/BookCard.types';
import { toast } from 'react-toastify';

export const useAddBook = () => {
  const URL = `http://localhost:3000/book`;

  const fetcher = async (url: string) => {
    const response = await axios.post(url);
    return response.data;
  };

  const { mutate } = useSWR(URL, async () => await fetcher(URL));

  const addBook = async (book: Partial<BookCardProps>) => {
    try {
      await axios.post(URL, book);
      mutate(book, false);
      toast.success('Book added successfully.');
    } catch (error) {
      toast.error('An error occurred while adding the book.');
    }
  };

  return { addBook };
};
