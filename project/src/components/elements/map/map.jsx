import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {connect} from 'react-redux';

import 'leaflet/dist/leaflet.css';

import {customPin} from '../../../settings';
import useMap from '../../../hooks/use-map';

import {CityCenter} from '../../../settings';
import {getPoints} from '../../../utils';

import placeCardProp from '../../pages/offer.prop';

function Map({city, places}) {
  const cityCenter = CityCenter[city.toUpperCase()];
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityCenter);
  const defaultCustomIcon = leaflet.icon(customPin.DEFAULT);
  const points = getPoints(places);

  useEffect(() => {
    if (map) {
      points.forEach(({location: {latitude, longitude}}) => {
        leaflet
          .marker({
            lat: latitude,
            lng: longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [city, map, points]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

Map.propTypes = {
  city: PropTypes.string.isRequired,
  places: PropTypes.arrayOf(placeCardProp),
};

const mapStateToProps = (state) => ({
  city: state.city,
  places: state.places,
});

export default connect(mapStateToProps)(Map);
