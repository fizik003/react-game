import React, { ReactNode } from 'react';
import Header from '../Header';

interface VidePropsInterface {
  children?: ReactNode;
}

const Layout = ({ children }: VidePropsInterface) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__container">{children}</div>
    </div>
  );
};

export default Layout;
