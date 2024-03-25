import useSWR from 'swr';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BookCardProps } from '../components/book-card/BookCard.types';
import { fetcher } from '../utils';

export const useDeleteBook = ({ id }: { id: string }) => {
  const URL = `http://localhost:3000/book/${id}`;

  const { mutate } = useSWR(URL, async () => await fetcher(URL, 'delete'));

  const deleteBook = async (book: BookCardProps) => {
    try {
      await axios.delete(URL, {
        data: { id: book.id },
      });
      mutate(book, false);
      toast.success('Book deleted successfully.');
    } catch (error) {
      toast.error('An error occurred while deleting the book.');
    }
  };
  return { deleteBook };
};
