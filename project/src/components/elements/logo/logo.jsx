import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {LogoType} from '../../../settings';

function Logo({isActive, type}) {
  return (
    <Link className={`${type}__logo-link ${isActive ? `${type}__logo-link--active` : ''}`} to="/">
      <img className={`${type}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={LogoType[type.toUpperCase()].width}
        height={LogoType[type.toUpperCase()].height}
      />
    </Link>
  );
}

Logo.propTypes = {
  isActive: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

export default Logo;
