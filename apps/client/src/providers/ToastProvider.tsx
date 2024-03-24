import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastProvider = () => {
  return (
    <ToastContainer
      autoClose={3000}
      icon={({ type }) =>
        type === 'success' ? '🚀' : type === 'error' ? '👾' : '📋'
      }
    />
  );
};

export default ToastProvider;
