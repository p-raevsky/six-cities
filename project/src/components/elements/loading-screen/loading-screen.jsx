import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './loading-screen.css';

import SortList from '../../elements/sort-list';
import Map from '../../elements/map';
import placeCardProp from '../../pages/offer.prop';

function LoadingScreen(props) {
  const {
    city,
    places,

  } = props;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">0 places to stay in {city}</b>
        <SortList />
        <div className="loadingio-spinner-pulse-b2f9g7e93n">
          <div className="ldio-6etoy8b1ix3">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map city = {city} places = {places}/>
        </section>
      </div>
    </div>
  );
}

LoadingScreen.propTypes = {
  city: PropTypes.string.isRequired,
  places: PropTypes.arrayOf(placeCardProp),
};

const mapStateToProps = (state) => ({
  city: state.city,
});

export default connect(mapStateToProps)(LoadingScreen);
