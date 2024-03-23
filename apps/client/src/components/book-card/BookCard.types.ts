export interface BookCardProps {
  image: string;
  title: string;
  genre: string;
  author: string;
  description: string;
}

export type SubheaderInfo = Pick<BookCardProps, 'author' | 'genre'>;
