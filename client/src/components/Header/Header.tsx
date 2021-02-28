import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <React.Fragment>
      <nav className="navigation green">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo navigation__logo">
            RPC
          </a>

          <ul
            id="nav-mobile"
            className="right hide-on-med-and-down navigation__item-list"
          >
            <li className="navigation__item">
              <a href="sass.html">Sass</a>
            </li>
            <li className="navigation__item">
              <a href="badges.html">Components</a>
            </li>
            <li className="navigation__item">
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
