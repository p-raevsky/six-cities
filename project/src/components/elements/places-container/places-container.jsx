import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import PlacesList from '../../elements/places-list';
import Map from '../../elements/map';
import SortList from '../../elements/sort-list';
import LoadingScreen from '../../elements/loading-screen';

import placeCardProp from '../../pages/offer.prop';

function PlacesContainer(props) {
  const {
    city: currentCity,
    places,
    activePlaceId,
    isDataLoaded,
  } = props;

  const placesCount = places.length;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesCount} {placesCount === 1 ? 'place' : 'places'} to stay in {currentCity}</b>
        <SortList />
        {!isDataLoaded ? <LoadingScreen /> : <PlacesList places = {places} />}
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map places = {places} city = {currentCity} activePlaceId = {activePlaceId} />
        </section>
      </div>
    </div>
  );
}

PlacesContainer.propTypes = {
  city: PropTypes.string.isRequired,
  places: PropTypes.arrayOf(placeCardProp),
  activePlaceId: PropTypes.string,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  activePlaceId: state.activePlaceId,
  selectedSorting: state.selectedSorting,
  isDataLoaded: state.isDataLoaded,
});

export default connect(mapStateToProps)(PlacesContainer);
