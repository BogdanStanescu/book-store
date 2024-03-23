import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Divider,
} from '@mui/material';
import Description from '../Description';
import { styles } from './BookCard.styles';
import { BookCardProps, SubheaderInfo } from './BookCard.types';

const MAX_DESCRIPTION_LENGTH = 150;

export const BookCard: React.FC<BookCardProps> = ({
  title,
  genre,
  image,
  description,
  author,
}) => {
  return (
    <Card sx={styles.card}>
      <CardMedia component="img" image={image} alt={title} sx={styles.media} />

      <CardHeader
        title={title}
        subheader={<Subheader author={author} genre={genre} />}
      />

      <Divider />

      <CardContent>
        <Description text={description} maxLength={MAX_DESCRIPTION_LENGTH} />
      </CardContent>
    </Card>
  );
};

const Subheader: React.FC<SubheaderInfo> = ({ author, genre }) => {
  return (
    <Typography variant="body2" color="textSecondary">
      {author} • {genre}
    </Typography>
  );
};

export default BookCard;
