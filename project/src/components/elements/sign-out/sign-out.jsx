import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {AppRoute} from '../../../const';
import {logout} from '../../../store/api-actions';

function SignOut(props) {
  const {
    logoutUser,
  } = props;

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
        </Link>
      </li>
      <li
        className="header__nav-item"
        onClick={(evt) => {
          evt.preventDefault();
          logoutUser();
        }}
      >
        <a className="header__nav-link">
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </>
  );
}

SignOut.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logoutUser() {
    dispatch(logout());
  },
});

export default connect(null, mapDispatchToProps)(SignOut);
