import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Content = ({ children }: Props) => {
  return <main className="flex-grow px-4">{children}</main>;
};

export default Content;
