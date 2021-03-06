import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import PlacesList from '../places-list/places-list';
import Map from '../map/map';
import SortList from '../sort-list/sort-list';

import placeCardProp from '../../pages/offer.prop';

import {getCity, getActivePlaceId} from '../../../store/process/selectors';

function PlacesBlock({places}) {
  const currentCity = useSelector(getCity);
  const activePlaceId = useSelector(getActivePlaceId);

  const placesCount = places.length;

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesCount} {placesCount === 1 ? 'place' : 'places'} to stay in {currentCity}</b>
        <SortList />
        <PlacesList places = {places} />
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map places = {places} city = {currentCity} activePlaceId = {activePlaceId} />
        </section>
      </div>
    </>
  );
}

PlacesBlock.propTypes = {
  places: PropTypes.arrayOf(placeCardProp),
};

export default PlacesBlock;
