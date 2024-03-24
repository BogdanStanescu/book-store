import Home from './pages/Home';
import NotFound from './pages/404';
import Layout from './pages/Layout';
import EditBookForm from './pages/books/EditBook';
import AddBookForm from './pages/books/AddBook';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
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
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
