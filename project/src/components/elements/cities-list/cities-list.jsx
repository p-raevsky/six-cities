import React from 'react';
import {connect, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import CityItem from '../city-item';

import {Cities} from '../../../const';
import {setCurrentCity} from '../../../store/action';
import {getCity} from '../../../store/process/selectors';

function CitiesList({setCity}) {
  const currentCity = useSelector(getCity);
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
  setCity: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCity(value) {
    dispatch(setCurrentCity(value));
  },
});

export default connect(null, mapDispatchToProps)(CitiesList);
