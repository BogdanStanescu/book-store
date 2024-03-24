import App from './app/app';
import * as ReactDOM from 'react-dom/client';
import ToastProvider from './providers/ToastProvider';
import ClerkProvider from './providers/ClerkProvider';
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ClerkProvider>
      <ToastProvider />
      <App />
    </ClerkProvider>
  </StrictMode>
);
