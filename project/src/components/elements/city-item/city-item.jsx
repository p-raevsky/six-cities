import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function CityItem(props) {
  const {
    cityItem,
    currentCity,
  } = props;

  return (
    <li className="locations__item"
      data-city={cityItem}
    >
      <Link to=""
        className={`locations__item-link tabs__item${currentCity === cityItem ? ' tabs__item--active' : ''}`}
      >
        <span>{cityItem}</span>
      </Link>
    </li>
  );
}

CityItem.propTypes = {
  cityItem: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
};

export default CityItem;
