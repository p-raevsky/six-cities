import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from '../../elements/header/header';
import PlacesList from '../../elements/places-list/places-list';
import Map from '../../elements/map/map';
import CitiesList from '../../elements/cities-list/cities-list';

import placeCardProp from '../../pages/offer.prop';

function MainPage(props) {
  const {
    city: currentCity,
    places,
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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <PlacesList offers = {places} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map />
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
};

const mapStateToProps = (state) => ({
  city: state.city,
  places: state.places,
});

export default connect(mapStateToProps)(MainPage);
