import React from 'react'

type Props = {
  children: React.ReactNode
}

const Content = ({ children }: Props) => {
  return <div className="flex flex-1">{children}</div>
}

export default Content
