import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import {AppRoute} from '../../../const';
import {logout} from '../../../store/api-actions';
import {getUserAvatar} from '../../../store/user/selectors';

function SignOut({userEmail}) {
  const dispatch = useDispatch();
  const userAvatar = useSelector(getUserAvatar);

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
          <div
            className="header__avatar-wrapper user__avatar-wrapper"
            style={{backgroundImage: `url(${userAvatar})`, borderRadius: '50%'}}
          >
          </div>
          <span className="header__user-name user__name">{userEmail}</span>
        </Link>
      </li>
      <li
        className="header__nav-item"
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(logout());
        }}
      >
        <a href="" className="header__nav-link">
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </>
  );
}

SignOut.propTypes = {
  userEmail: PropTypes.string,
};

export default SignOut;
