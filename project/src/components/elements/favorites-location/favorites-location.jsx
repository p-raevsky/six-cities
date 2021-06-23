import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import FavoritesPlacesList from '../favorites-places-list/favorites-places-list';

import placeCardProp from '../../pages/offer.prop';
import {AppRoute} from '../../../const';
import {ActionCreator} from '../../../store/action';

function FavoritesLocation(props) {
  const {
    city,
    filteredPlaces,
    setCurrentCity,
  } = props;

  return (
    <li className="favorites__locations-items">
      <div
        className="favorites__locations locations locations--current"
        onClick={({target}) => {
          if (target.closest('a')) {
            const value = target.closest('a').dataset.city;
            setCurrentCity(value);
          }
        }}
      >
        <div className="locations__item">
          <Link
            to={AppRoute.ROOT}
            className="locations__item-link"
            data-city={city}
          >
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <FavoritesPlacesList filteredPlaces = {filteredPlaces}/>
    </li>
  );
}

FavoritesLocation.propTypes = {
  city: PropTypes.string,
  filteredPlaces: PropTypes.arrayOf(placeCardProp),
  setCurrentCity: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentCity(value) {
    dispatch(ActionCreator.setCurrentCity(value));
  },
});

export default connect(null, mapDispatchToProps)(FavoritesLocation);
