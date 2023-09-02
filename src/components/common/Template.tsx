import React from 'react';

import { Navbar } from '.';

interface Props {
  children: React.ReactNode;
  withHeader?: Boolean; // TODO: 뒤로가기 헤더 추가
  withNavbar?: Boolean;
}

export const Template = ({ children, withNavbar = true }: Props) => {
  if (withNavbar)
    return (
      <>
        <div className={`h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden`}>{children}</div>
        <Navbar />
      </>
    );
  return <div className={`h-screen overflow-y-auto overflow-x-hidden`}>{children}</div>;
};
