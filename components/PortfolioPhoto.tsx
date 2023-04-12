import React from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  size: number;
  className?: string;
};

const PortfolioPhoto = ({ src, alt, size, className }: Props) => {
  return (
    <div className="inline-block">
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={`rounded-full filter grayscale ${className}`}
      />
    </div>
  );
};

export default PortfolioPhoto;
