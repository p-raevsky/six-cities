import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from '../../elements/header/header';
import PlacesList from '../../elements/places-list/places-list';
import Map from '../../elements/map/map';
import CitiesList from '../../elements/cities-list/cities-list';
import SortList from '../../elements/sort-list/sort-list';

import placeCardProp from '../../pages/offer.prop';
import {sortFilteredPlaces} from '../../../six-cities-data';
import LoadingScreen from '../../elements/loading-screen';

function MainPage(props) {
  const {
    city: currentCity,
    places,
    activePlaceId,
    isDataLoaded,
  } = props;

  const placesCount = places.length;

  return (
    <div className="page page--gray page--main">
      <Header isActive />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
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
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  city: PropTypes.string.isRequired,
  places: PropTypes.arrayOf(placeCardProp),
  activePlaceId: PropTypes.string,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  places: sortFilteredPlaces(state.offers, state.selectedSorting, state.city),
  activePlaceId: state.activePlaceId,
  selectedSorting: state.selectedSorting,
  isDataLoaded: state.isDataLoaded,
});

export default connect(mapStateToProps)(MainPage);
