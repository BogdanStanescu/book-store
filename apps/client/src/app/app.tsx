import { useAuth } from '@clerk/clerk-react';
import BookList from '../components/book-list/BookList';
import Header from '../components/header/Header';
import ShouldShow from '../components/should-show/ShouldShow';

import Footer from '../components/footer/Footer';
import { Box } from '@mui/material';
import HomePageBanner from '../components/home-page-banner/HomePageBanner';

const App = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null;
  }

  return (
    <Box>
      <Header />

      <ShouldShow condition={!!isSignedIn}>
        <BookList />
      </ShouldShow>

      <ShouldShow condition={!isSignedIn}>
        <HomePageBanner />
      </ShouldShow>
      <Footer />
    </Box>
  );
};

export default App;
