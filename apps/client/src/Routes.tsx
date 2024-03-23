import Home from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EditBookForm from './pages/books/EditBook';
import AddBookForm from './pages/books/AddBook';

const router = createBrowserRouter([
  {
    path: '/add-book',
    element: <AddBookForm />,
  },
  {
    path: '/edit-book/:id',
    element: <EditBookForm />,
  },
  {
    path: '/',
    element: <Home />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
