import React from 'react';
import PropTypes from 'prop-types';

import FavoritesLocationItem from '../../elements/favorites-location-item/favorites-location-item';

import placeCardProp from '../../pages/offer.prop';

function FavoritesList(props) {
  const {favoritesPlaces} = props;
  const placesEntries = favoritesPlaces.map((place) => [place.city.name, place]);
  const placesMap = new Map(placesEntries);
  const uniquePlaces =  new Set(placesMap.keys());

  return (
    <ul className="favorites__list">
      {Array.from(uniquePlaces).map((city) => <FavoritesLocationItem key = {city} city = {city} favoritesPlaces = {favoritesPlaces} />)}
    </ul>
  );
}

FavoritesList.propTypes = {
  favoritesPlaces: PropTypes.arrayOf(placeCardProp),
};

export default FavoritesList;
