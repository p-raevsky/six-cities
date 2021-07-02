import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card';

import placeCardProp from '../../pages/offer.prop';
import {PlaceType} from '../../../const';

function NearPlacesList(props) {
  const {
    places,
  } = props;

  return (
    <div className="near-places__list places__list">
      {places.map((place) => <PlaceCard key = {place.id} offer = {place} placesType = {PlaceType.NEAR_PLACES} />)}
    </div>
  );
}

NearPlacesList.propTypes = {
  places: PropTypes.arrayOf(placeCardProp),
};

export default NearPlacesList;
