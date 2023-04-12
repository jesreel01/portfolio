import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

type Props = {
  children?: React.ReactNode;
  className?: string;
  size?: 'default' | 'large' | 'small' | number;
  src?: string;
};

const sizesClasses = {
  default: 'h-10 w-10',
  large: 'h-12 w-12 ',
  small: 'h-8 w-8',
};

const sizes = {
  default: 40,
  large: 48,
  small: 32,
};

const defaultClasses = 'inline-block rounded-full bg-slate-500 text-center';

const Avatar = (props: Props) => {
  const { className = '', size = 'default', src = '' } = props;

  const isNumber = typeof size === 'number';

  return (
    <Image
      width={isNumber ? size : sizes[size]}
      height={isNumber ? size : sizes[size]}
      className={clsx(
        defaultClasses,
        // if size is a number, we use the h-[size] and w-[size] classes
        isNumber ? `h-[${size}px] h-[${size}px]` : sizesClasses[size],
        className,
      )}
      src={src}
      alt=""
    />
  );
};

export default Avatar;
