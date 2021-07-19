import React from 'react';
import PropTypes from 'prop-types';

import PlacesBlock from '../../elements/places-block/places-block';
import PlacesEmpty from '../../elements/places-empty/places-empty';

import placeCardProp from '../../pages/offer.prop';

function PlacesWrapper({places}) {
  return (places.length && <PlacesBlock places = {places} />) || <PlacesEmpty />;
}

PlacesWrapper.propTypes = {
  places: PropTypes.arrayOf(placeCardProp),
};

export default PlacesWrapper;
