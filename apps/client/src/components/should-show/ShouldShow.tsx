import React from 'react';
import { ShouldShowProps } from './ShouldShow.types';

const ShouldShow: React.FC<ShouldShowProps> = ({ condition, children }) => {
  return condition ? children : null;
};

export default ShouldShow;
