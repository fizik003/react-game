import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import './Header.scss';

interface MainPageInterface {
  className?: string;
}
const Header = ({ className }: MainPageInterface) => {
  return (
    <header className="header">
      <nav
        className={cn(
          'navbar navbar-expand-lg navbar-dark bg-primary',
          className,
        )}
      >
        <div className="container-fluid">
          <Link className="navbar-brand header__logo" to="/main">
            RPC
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/main"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/stat"
                >
                  Statistics
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/settings"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
