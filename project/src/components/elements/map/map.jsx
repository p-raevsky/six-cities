import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {customPin} from '../../../settings';
import 'leaflet/dist/leaflet.css';

function useMap(mapRef, city) {
  const {location: {latitude, longitude, zoom}} = city;
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom,
        zoomControl: false,
        marker: true,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map, city]);

  return map;
}

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
