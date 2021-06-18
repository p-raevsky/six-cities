import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {ActionCreator} from '../../../store/action';
import placeCardProp from '../../pages/offer.prop';

function CityItem(props) {
  const {
    cityItem,
    city: currentCity,
    getCurrentCity,
    getPlacesList,
    offers,
  } = props;

  return (
    <li
      className="locations__item"
      data-city={cityItem}
      onClick={(evt) => {
        evt.preventDefault();
        const value = evt.currentTarget.dataset.city;
        getCurrentCity(value);
        getPlacesList(offers, value);
      }}
    >
      <Link to=""
        className={`locations__item-link tabs__item${currentCity === cityItem ? ' tabs__item--active' : ''}`}
      >
        <span>{cityItem}</span>
      </Link>
    </li>
  );
}

CityItem.propTypes = {
  offers: PropTypes.arrayOf(placeCardProp),
  cityItem: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(CityItem);
