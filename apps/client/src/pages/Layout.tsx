import { useOutlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const Layout = () => {
  const outlet = useOutlet();

  return (
    <>
      <Header />
      {outlet}
      <Footer />
    </>
  );
};

export default Layout;
