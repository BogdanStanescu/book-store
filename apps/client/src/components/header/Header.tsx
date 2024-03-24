import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Link to="/" style={{ textDecoration: 'none', fontSize: '1.25rem' }}>
          Book Store
        </Link>

        <Box sx={{ flex: 1 }} />

        <Button
          variant="text"
          sx={{ fontSize: '1rem', color: 'white', mr: 1.5 }}
          onClick={() => navigate('/add-book')}
        >
          Add Book
        </Button>

        <SignIn />
        <SignOut />
      </Toolbar>
    </AppBar>
  );
};

const SignIn = () => {
  return (
    <SignedIn>
      <UserButton />
    </SignedIn>
  );
};

const SignOut = () => {
  return (
    <SignedOut>
      <SignInButton />
    </SignedOut>
  );
};

export default Header;
