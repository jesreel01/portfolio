import React from 'react'

const PageLayout = ({ children }: any) => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col min-h-screen">
      {children}
    </div>
  )
}

export default PageLayout
