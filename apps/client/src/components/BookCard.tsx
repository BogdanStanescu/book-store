import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Divider,
} from '@mui/material';
import Description from './Description';

interface BookCardProps {
  image: string;
  title: string;
  genre: string;
  author: string;
  description: string;
}

type SubheaderInfo = Pick<BookCardProps, 'author' | 'genre'>;

const MAX_DESCRIPTION_LENGTH = 150;

export const BookCard: React.FC<BookCardProps> = ({
  title,
  genre,
  image,
  description,
  author,
}) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)' }}>
      <CardMedia
        component="img"
        height="194"
        sx={{ pt: 2 }}
        image={image}
        alt={title}
      />

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
