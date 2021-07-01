import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CityItem from '../city-item';

import {Cities} from '../../../const';
import {setCurrentCity} from '../../../store/action';
import {getCity} from '../../../store/process/selectors';

function CitiesList(props) {
  const {
    city: currentCity,
    setCity,
  } = props;

  const cities = Object.values(Cities);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((cityItem) => <CityItem key = {cityItem} onCurrentCity = {setCity} cityItem = {cityItem} currentCity = {currentCity}/>)}
        </ul>
      </section>
    </div>
  );
}

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCity(value) {
    dispatch(setCurrentCity(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
