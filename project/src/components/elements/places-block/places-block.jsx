import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import PlacesList from '../places-list';
import Map from '../map';
import SortList from '../sort-list';
import placeCardProp from '../../pages/offer.prop';

import {
  getCity,
  getActivePlaceId,
  getSelectedSorting
} from '../../../store/process/selectors';

function PlacesBlock(props) {
  const {
    city: currentCity,
    places,
    activePlaceId,
  } = props;

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
  city: PropTypes.string.isRequired,
  places: PropTypes.arrayOf(placeCardProp),
  activePlaceId: PropTypes.string,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  activePlaceId: getActivePlaceId(state),
  selectedSorting: getSelectedSorting(state),
});

export default connect(mapStateToProps)(PlacesBlock);
