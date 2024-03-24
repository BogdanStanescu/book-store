import Home from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EditBookForm from './pages/books/EditBook';
import AddBookForm from './pages/books/AddBook';
import Layout from './pages/Layout';

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
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
