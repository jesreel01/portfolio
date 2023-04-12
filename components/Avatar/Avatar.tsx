import React from 'react';
import clsx from 'clsx';

type Props = {
  children?: React.ReactNode;
  className?: string;
  size?: 'default' | 'large' | 'small';
};

const defaultClasses = 'inline-flex rounded-full bg-slate-500';

const sizesClasses = {
  default: 'h-10 w-10',
  large: 'h-12 w-12',
  small: 'h-8 w-8',
};

const Avatar = (props: Props) => {
  const { children, className = '', size = 'default' } = props;

  return <div className={className}>{children}</div>;
};

export default Avatar;
