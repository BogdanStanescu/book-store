import { useOutlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import ErrorBoundary from '../components/error-boundary/ErrorBoundary';
import ErrorFallback from '../components/error-fallback/ErrorFallback';

const Layout = () => {
  const outlet = useOutlet();

  return (
    <ErrorBoundary page={<ErrorFallback />}>
      <Header />
      {outlet}
      <Footer />
    </ErrorBoundary>
  );
};

export default Layout;
