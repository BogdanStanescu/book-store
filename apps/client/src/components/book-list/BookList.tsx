import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import BookCard from '../book-card/BookCard';
import { itemData } from './mockData';

export default function BookList() {
  return (
    <ImageList sx={{ width: '100%', height: '100vh', pb: 6 }}>
      <ImageListItem key="Subheader" cols={2}></ImageListItem>
      {itemData.map((item) => (
        <BookCard key={item.id} {...item} />
      ))}
    </ImageList>
  );
}
