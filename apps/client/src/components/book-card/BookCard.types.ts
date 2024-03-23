export interface BookCardProps {
  id: string;
  image: string;
  title: string;
  genre: string;
  author: string;
  description: string;
}

export interface DescriptionDialogProps extends Omit<BookCardProps, 'image'> {
  open: boolean;
  handleClose: () => void;
}

export type SubheaderInfo = Pick<BookCardProps, 'author' | 'genre'>;
