import React, { ReactNode } from 'react';
import Header from '../Header';

import './Layout.scss';
import git from '../../img/git.png';

interface VidePropsInterface {
  children?: ReactNode;
}

const Layout = ({ children }: VidePropsInterface) => {
  return (
    <div className="layout">
      <Header className="mb-3 header" />
      <main className="h-100">{children}</main>
      <footer className="mt-2">
        <div className="container py-1 d-flex justify-content-between  align-items-center">
          <div className="footer__rss-logo">
            <a href="https://rs.school/react/">
              <img src="https://rs.school/images/rs_school_js.svg" alt="" />
            </a>
          </div>
          <div className="footer__git-logo">
            <a href="https://github.com/fizik003">
              <img src={git} alt="" />
            </a>
          </div>
          <div className="footer__year">
            <p>2021</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
