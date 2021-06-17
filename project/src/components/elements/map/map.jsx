import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {customPin} from '../../../settings';
import 'leaflet/dist/leaflet.css';

import useMap from '../../../hooks/use-map';

function Map({city, points}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const defaultCustomIcon = leaflet.icon(customPin.DEFAULT);

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
  }, [map, points]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

Map.propTypes = {
  city: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }),
  points: PropTypes.arrayOf(
    PropTypes.shape({
      location:  PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }),
    }),
  ),
};

export default Map;
