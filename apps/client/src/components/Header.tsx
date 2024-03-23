import { LibraryBooks } from '@mui/icons-material';
import {
  AppBar,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from '@mui/material';
import { useRef, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Book Store
        </Typography>

        <IconButton
          ref={menuButtonRef}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleMenuToggle}
        >
          <MenuIcon />
        </IconButton>

        {isOpen && (
          <Menu
            id="menu-basic"
            anchorEl={menuButtonRef.current}
            open={isOpen}
            onClose={handleMenuToggle}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuList>
              <MenuItem onClick={handleMenuToggle}>
                <ListItemIcon>
                  <LibraryBooks fontSize="small" />
                </ListItemIcon>

                <ListItemText>All Books</ListItemText>
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
