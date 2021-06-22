import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CityItem from '../city-item/city-item';

import {Cities} from '../../../const';
import {ActionCreator} from '../../../store/action';

function CitiesList(props) {
  const {
    city: currentCity,
    setCurrentCity,
  } = props;

  const cities = Object.values(Cities);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((cityItem) => <CityItem key = {cityItem} onCurrentCity = {setCurrentCity} cityItem = {cityItem} currentCity = {currentCity}/>)}
        </ul>
      </section>
    </div>
  );
}

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  setCurrentCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentCity(value) {
    dispatch(ActionCreator.setCurrentCity(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
