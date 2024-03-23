import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Box } from '@mui/material';
import { Routes } from '../Routes';

const App = () => {
  return (
    <Box>
      <Header />
      <Routes />
      <Footer />
    </Box>
  );
};

export default App;
