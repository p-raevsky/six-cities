import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from '../../elements/header';
import CitiesList from '../../elements/cities-list';

import placeCardProp from '../../pages/offer.prop';
import {sortFilteredPlaces} from '../../../six-cities-data';
import LoadWrapper from '../../elements/load-wrapper';
import PlacesWrapper from '../../elements/places-wrapper';

function MainPage(props) {
  const {
    places,
    isOffersDataLoaded,
  } = props;

  return (
    <div className="page page--gray page--main">
      <Header isActive />
      <main className={`page__main page__main--index${!places.length ? ' page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          <div className="cities__places-container container">
            <LoadWrapper isLoaded = {isOffersDataLoaded}>
              <PlacesWrapper places = {places} />
            </LoadWrapper>
          </div>
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  places: PropTypes.arrayOf(placeCardProp),
  isOffersDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  places: sortFilteredPlaces(state.offers, state.selectedSorting, state.city),
  isOffersDataLoaded: state.isOffersDataLoaded,
});

export default connect(mapStateToProps)(MainPage);
