import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import PlacesList from '../places-list';
import Map from '../map';
import SortList from '../sort-list';
import placeCardProp from '../../pages/offer.prop';

function PlacesBlock(props) {
  const {
    city: currentCity,
    places,
    activePlaceId,
  } = props;

  const placesCount = places.length;

  return (
    <div className="cities__places-container container">
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
    </div>
  );
}

PlacesBlock.propTypes = {
  city: PropTypes.string.isRequired,
  places: PropTypes.arrayOf(placeCardProp),
  activePlaceId: PropTypes.string,
};

const mapStateToProps = (state) => ({
  city: state.city,
  activePlaceId: state.activePlaceId,
  selectedSorting: state.selectedSorting,
});

export default connect(mapStateToProps)(PlacesBlock);
