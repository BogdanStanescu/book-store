import { ClerkProvider as Clerk } from '@clerk/clerk-react';
import { ReactNode } from 'react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const ClerkProvider = ({ children }: { children: ReactNode[] }) => {
  if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key');
  }

  return <Clerk publishableKey={PUBLISHABLE_KEY}>{children}</Clerk>;
};

export default ClerkProvider;
