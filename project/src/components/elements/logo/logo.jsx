import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {logoType} from '../../../settings';

function Logo(props) {
  const {
    isActive,
    type,
  } = props;

  return (
    <Link className={`${type}__logo-link ${isActive ? `${type}__logo-link--active` : ''}`} to="/">
      <img className={`${type}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={logoType[type.toUpperCase()].width}
        height={logoType[type.toUpperCase()].height}
      />
    </Link>
  );
}

Logo.propTypes = {
  isActive: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

export default Logo;
