import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card';

import placeCardProp from '../../pages/offer.prop';
import {PlaceType} from '../../../const';

function FavoritesPlacesList({filteredPlaces}) {
  return (
    <div className="favorites__places">
      {filteredPlaces.map((offer) => <PlaceCard key = {offer.id} offer = {offer} placesType = {PlaceType.FAVORITES} />)}
    </div>
  );
}

FavoritesPlacesList.propTypes = {
  filteredPlaces: PropTypes.arrayOf(placeCardProp),
};

export default FavoritesPlacesList;
