import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import useOpenState from '../../hooks/useOpenState';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Menu,
  MenuItem,
} from '@mui/material';
import { BookCardProps, DescriptionDialogProps } from './BookCard.types';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useNavigate } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styles } from './BookCard.styles';

const BookCard: React.FC<{ props: BookCardProps }> = ({ props }) => {
  const openState = useOpenState();
  const navigate = useNavigate();

  return (
    <ImageListItem sx={styles.imageListItem}>
      <Box sx={styles.overlay} />

      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button
              variant="text"
              {...bindTrigger(popupState)}
              sx={styles.menuButton}
            >
              <MoreVertIcon />
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem
                onClick={() => {
                  popupState.close();
                  navigate(`/edit-book/${props.id}`);
                }}
              >
                Edit Book
              </MenuItem>

              <MenuItem
                onClick={() => {
                  popupState.close();
                  navigate(`/edit-book/${props.id}`);
                }}
              >
                Delete Book
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>

      <img
        srcSet={`${props.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${props.image}?w=248&fit=crop&auto=format`}
        alt={props.title}
        loading="lazy"
      />

      <ImageListItemBar
        title={props.title}
        subtitle={`By ${props.author} (${props.genre} genre)`}
        actionIcon={
          <IconButton
            sx={styles.actionIcon}
            title={`info about: ${props.title}`}
            onClick={openState.handleOpen}
          >
            <InfoIcon sx={styles.infoIcon} />
          </IconButton>
        }
      />

      <DescriptionDialog
        open={openState.open}
        handleClose={openState.handleClose}
        {...props}
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
