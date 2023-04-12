import React from 'react';
import { clsx } from 'clsx';

type Props = {
  size?: 'sm' | 'base' | 'lg';
  children?: React.ReactNode;
};

const sizesClasses = {
  sm: 'border-2 h-8 py-0 px-1 border-black rounded',
  base: 'border-2 p-1 h-9 border-black rounded',
  lg: 'text-lg border-2 p-1 h-10 border-black rounded',
};

const Button = (props: Props) => {
  const { size = 'base', children } = props;

  return <button className={clsx(sizesClasses[size])}>{children}</button>;
};

export default Button;
