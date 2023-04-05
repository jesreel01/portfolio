import React from 'react'
import { clsx } from 'clsx'

type Props = {
  size?: 'sm' | 'base' | 'lg'
  children?: React.ReactNode
}

const sizes = {
  sm: 'border-2 p-1 border-black rounded',
  base: 'border-2 p-1 border-black rounded',
  lg: 'border-2 p-1 border-black rounded',
}

const Button = (props: Props) => {
  const { size = 'base', children } = props

  return <button className={clsx(sizes[size])}>{children}</button>
}

export default Button
