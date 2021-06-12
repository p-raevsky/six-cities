import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../../elements/place-card/place-card';

import placeCardProp from '../../pages/offer.prop';
import {PlaceType} from '../../../const';

function FavoritesLocationItem(props) {
  const {
    city,
    favoritesPlaces,
  } = props;

  const filteredPlaces = favoritesPlaces.filter((place) => place.city.name === city);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {filteredPlaces.map((offer) => <PlaceCard key = {offer.id} offer = {offer} placesType = {PlaceType.FAVORITES}/>)}
      </div>
    </li>
  );
}

FavoritesLocationItem.propTypes = {
  city: PropTypes.string,
  favoritesPlaces: PropTypes.arrayOf(placeCardProp),
};

export default FavoritesLocationItem;
