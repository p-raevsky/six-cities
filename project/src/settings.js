export const logoType = {
  HEADER: {
    type: 'header',
    width: '81',
    height: '41',
  },
  FOOTER: {
    type: 'footer',
    width: '64',
    height: '33',
  },
};

export const placeCardType = {
  CITIES: {
    type: 'cities',
    className: 'cities__place-card place-card',
    width: '260',
    height: '200',
  },
  NEAR_PLACES: {
    type: 'near-places',
    className: 'near-places__card place-card',
    width: '260',
    height: '200',
  },
  FAVORITES: {
    type: 'favorites',
    className: 'favorites__card place-card',
    width: '150',
    height: '110',
  },
};

export const customPin = {
  DEFAULT: {
    iconUrl: 'img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  },
  ACTIVE: {
    iconUrl: 'img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  },
};
