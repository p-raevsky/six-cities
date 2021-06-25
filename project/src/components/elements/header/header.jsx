import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Logo from '../logo';
import SignOut from '../sign-out';
import SignIn from '../sign-in';

import {LogoType} from '../../../settings';
import {AuthorizationStatus} from '../../../const';

function Header(props) {
  const {
    isActive = false,
    authorizationStatus,
  } = props;

  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo type = {LogoType.HEADER.type} isActive = {isActive}/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuth ? <SignOut /> : <SignIn />}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  isActive: PropTypes.bool,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export default connect(mapStateToProps)(Header);
