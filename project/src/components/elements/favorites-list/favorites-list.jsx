import React from 'react';
import PropTypes from 'prop-types';

import FavoritesLocationItem from '../../elements/favorites-location/favorites-location';

import placeCardProp from '../../pages/offer.prop';

function FavoritesList({favoritesPlaces}) {
  const uniquePlaces = [...new Set(favoritesPlaces.map((offer) => offer.city.name))];

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {uniquePlaces
          .map((city) => {
            const filteredPlaces = favoritesPlaces.filter((place) => place.city.name === city);
            return <FavoritesLocationItem key = {city} city = {city} filteredPlaces = {filteredPlaces} />;
          })}
      </ul>
    </section>
  );
}

FavoritesList.propTypes = {
  favoritesPlaces: PropTypes.arrayOf(placeCardProp),
};

export default FavoritesList;
