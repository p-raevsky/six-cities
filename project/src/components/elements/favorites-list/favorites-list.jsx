import React from 'react';
import PropTypes from 'prop-types';

import FavoritesLocationItem from '../../elements/favorites-location/favorites-location';

import placeCardProp from '../../pages/offer.prop';

function FavoritesList(props) {
  const {favoritesPlaces} = props;

  const uniquePlaces = [...new Set(favoritesPlaces.map((offer) => offer.city.name))];

  return (
    <ul className="favorites__list">
      {uniquePlaces
        .map((city) => {
          const filteredPlaces = favoritesPlaces.filter((place) => place.city.name === city);
          return <FavoritesLocationItem key = {city} city = {city} filteredPlaces = {filteredPlaces} />;
        })}
    </ul>
  );
}

FavoritesList.propTypes = {
  favoritesPlaces: PropTypes.arrayOf(placeCardProp),
};

export default FavoritesList;
