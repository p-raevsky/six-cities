import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Logo(props) {
  const {
    isHeader = true,
    isMainPageActive,
  } = props;

  const isActiveClassName = isMainPageActive ? 'header__logo-link--active ' : '';
  const isHeaderClassName = isHeader ? 'header__logo-link' : 'footer__logo-link';

  return (
    <Link className={isActiveClassName + isHeaderClassName} to="/">
      <img className={isHeader ? 'header__logo' : 'footer__logo'}
        src="img/logo.svg"
        alt="6 cities logo"
        width={isHeader ? '81' : '64'}
        height={isHeader ? '41' : '33'}
      />
    </Link>
  );
}

Logo.propTypes = {
  isHeader: PropTypes.bool,
  isMainPageActive: PropTypes.bool,
};

export default Logo;
