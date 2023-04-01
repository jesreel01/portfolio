import React from 'react'

const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">My Website</h1>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">{children}</div>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <p>&copy; 2023 My Website</p>
        </div>
      </footer>
    </div>
  )
}

export default PageLayout
