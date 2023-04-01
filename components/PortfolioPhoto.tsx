import React from 'react'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
  size: number
}

const PortfolioPhoto = ({ src, alt, size }: Props) => {
  return (
    <div className="inline-block">
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="rounded-full filter grayscale"
      />
    </div>
  )
}

export default PortfolioPhoto
