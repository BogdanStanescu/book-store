import ShouldShow from '../components/should-show/ShouldShow';
import HomePageBanner from '../components/home-page-banner/HomePageBanner';
import { useAuth } from '@clerk/clerk-react';
import BookList from '../components/book-list/BookList';

const Home = () => {
  const { isSignedIn } = useAuth();

  return (
    <>
      <ShouldShow condition={!!isSignedIn}>
        <BookList />
      </ShouldShow>

      <ShouldShow condition={!isSignedIn}>
        <HomePageBanner />
      </ShouldShow>
    </>
  );
};

export default Home;
