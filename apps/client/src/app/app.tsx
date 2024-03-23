import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import { Box } from '@mui/material';
import { useAuth } from '@clerk/clerk-react';
import { Routes } from '../Routes';

const App = () => {
  const { isLoaded } = useAuth();

  if (!isLoaded) {
    return null;
  }

  return (
    <Box>
      <Header />
      <Routes />
      <Footer />
    </Box>
  );
};

export default App;
