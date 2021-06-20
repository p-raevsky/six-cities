import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CityItem from '../city-item/city-item';

import {Cities} from '../../../const';
import placeCardProp from '../../pages/offer.prop';
import {ActionCreator} from '../../../store/action';

function CitiesList(props) {
  const {
    city: currentCity,
    getCurrentCity,
    getPlacesList,
    offers,
  } = props;

  const cities = Object.values(Cities);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list"
          onClick={(evt) => {
            evt.preventDefault();
            if (evt.target.closest('li')) {
              const value = evt.target.closest('li').dataset.city;
              getCurrentCity(value);
              getPlacesList(offers, value);
            }
          }}
        >
          {cities.map((cityItem) => <CityItem key = {cityItem} cityItem = {cityItem} currentCity = {currentCity}/>)}
        </ul>
      </section>
    </div>
  );
}

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(placeCardProp),
  getCurrentCity: PropTypes.func.isRequired,
  getPlacesList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentCity(value) {
    dispatch(ActionCreator.getCurrentCity(value));
  },
  getPlacesList(places, city) {
    dispatch(ActionCreator.getPlacesList(places, city));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
