import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from '../logo';

import {LogoType} from '../../../settings';
import {AppRoute} from '../../../const';

function Header(props) {
  const {
    isActive = false,
  } = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo type = {LogoType.HEADER.type} isActive = {isActive}/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" to={AppRoute.ROOT}>
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  isActive: PropTypes.bool,
};

export default Header;
