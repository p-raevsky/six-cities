import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {CustomPin} from '../../../settings';
import useMap from '../../../hooks/use-map';
import {CityCenter} from '../../../settings';
import {getPoints} from '../../../utils';
import placeCardProp from '../../pages/offer.prop';

import 'leaflet/dist/leaflet.css';

function Map({city, places, activePlaceId}) {
  const cityCenter = CityCenter[city.toUpperCase()];
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityCenter);
  const defaultCustomIcon = leaflet.icon(CustomPin.DEFAULT);
  const currentCustomIcon = leaflet.icon(CustomPin.ACTIVE);
  const points = getPoints(places);
  const {location: {latitude: lat, longitude: lng, zoom}} = cityCenter;

  useEffect(() => {
    const markers = leaflet.layerGroup();

    if (map) {
      markers.addTo(map);

      points.forEach(({id, location: {latitude, longitude}}) => {
        leaflet
          .marker({
            lat: latitude,
            lng: longitude,
          }, {
            icon: String(id) === activePlaceId ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(markers);
      });

      map.flyTo([lat, lng], zoom);
    }

    return () => {
      markers.clearLayers();
    };

  }, [currentCustomIcon, defaultCustomIcon, lat, lng, zoom, city, activePlaceId, map, points]);

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
  activePlaceId: PropTypes.string,
};

export default Map;
