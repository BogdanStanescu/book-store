import { useAuth } from '@clerk/clerk-react';
import { Routes } from '../Routes';

const App = () => {
  const { isLoaded } = useAuth();

  if (!isLoaded) {
    return null;
  }

  return <Routes />;
};

export default App;
