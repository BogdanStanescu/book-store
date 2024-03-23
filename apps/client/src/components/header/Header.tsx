import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/clerk-react';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" component="div">
          Book Store
        </Typography>

        <Box sx={{ flex: 1 }} />

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
