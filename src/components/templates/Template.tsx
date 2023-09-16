import React from 'react';

import { Navbar } from '../common';

interface Props {
  children: React.ReactNode;
  withNavbar?: Boolean;
}

export const Template = ({ children, withNavbar = true }: Props) => {
  if (withNavbar)
    return (
      <>
        <div className={`viewport relative h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden`}>
          {children}
        </div>
        <Navbar />
      </>
    );
  return <div className={`viewport h-screen overflow-y-auto overflow-x-hidden`}>{children}</div>;
};
