import InfoIcon from '@mui/icons-material/Info';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import { BookCardProps, DescriptionDialogProps } from './BookCard.types';

import useOpenState from '../../hooks/useOpenState';

const BookCard: React.FC<BookCardProps> = ({
  image,
  title,
  author,
  genre,
  description,
}) => {
  const openState = useOpenState();

  return (
    <ImageListItem>
      <img
        srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${image}?w=248&fit=crop&auto=format`}
        alt={title}
        loading="lazy"
      />
      <ImageListItemBar
        title={title}
        subtitle={`By ${author} (${genre} genre)`}
        actionIcon={
          <IconButton
            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            title={`info about: ${title}`}
            onClick={openState.handleOpen}
          >
            <InfoIcon />
          </IconButton>
        }
      />

      <DescriptionDialog
        open={openState.open}
        handleClose={openState.handleClose}
        title={title}
        author={author}
        genre={genre}
        description={description}
      />
    </ImageListItem>
  );
};

const DescriptionDialog: React.FC<DescriptionDialogProps> = ({
  open,
  handleClose,
  title,
  author,
  genre,
  description,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {`${title} by ${author} (${genre})`}
      </DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookCard;