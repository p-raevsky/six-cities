import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import Logo from '../logo';
import SignOut from '../sign-out';
import SignIn from '../sign-in';

import {LogoType} from '../../../settings';
import {isCheckedAuth} from '../../../six-cities-data';
import {
  getAuthorizationStatus,
  getUserEmail
} from '../../../store/user/selectors';

function Header(props) {
  const {
    isActive = false,
  } = props;

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const userEmail = useSelector(getUserEmail);

  const isAuth = isCheckedAuth(authorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo type = {LogoType.HEADER.type} isActive = {isActive} />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuth ? <SignOut userEmail = {userEmail} /> : <SignIn />}
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
