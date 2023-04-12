import React from 'react';

const PageLayout = ({ children }: any) => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col min-h-screen">
      {children}
    </div>
  );
};

export default PageLayout;
