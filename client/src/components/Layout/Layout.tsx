import React, { ReactNode } from 'react';
import Header from '../Header';

interface VidePropsInterface {
  children?: ReactNode;
}

const Layout = ({ children }: VidePropsInterface) => {
  return (
    <div className="layout">
      <Header className="mb-3 header" />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
