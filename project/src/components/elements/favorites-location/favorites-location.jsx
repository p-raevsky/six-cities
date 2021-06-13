import React from 'react';
import PropTypes from 'prop-types';

import FavoritesPlacesList from '../favorites-places-list/favorites-places-list';

import placeCardProp from '../../pages/offer.prop';

function FavoritesLocation(props) {
  const {
    city,
    filteredPlaces,
  } = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <FavoritesPlacesList filteredPlaces = {filteredPlaces}/>
    </li>
  );
}

FavoritesLocation.propTypes = {
  city: PropTypes.string,
  filteredPlaces: PropTypes.arrayOf(placeCardProp),
};

export default FavoritesLocation;
