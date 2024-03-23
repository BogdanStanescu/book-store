import { useState } from 'react';

/**
 * Custom hook that manages the open state of a component.
 * @returns An object containing the `open` state, `handleOpen` and `handleClose` functions.
 */
const useOpenState = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return { open, handleOpen, handleClose };
};

export default useOpenState;
