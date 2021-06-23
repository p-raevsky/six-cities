export const LogoType = {
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

export const PlaceCardType = {
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

export const CustomPin = {
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

export const CityCenter = {
  PARIS: {
    location: {
      latitude: 48.85,
      longitude: 2.35,
      zoom: 12,
    },
  },
  COLOGNE: {
    location: {
      latitude: 50.93,
      longitude: 6.95,
      zoom: 12,
    },
  },
  BRUSSELS: {
    location: {
      latitude: 50.85,
      longitude: 4.35,
      zoom: 12,
    },
  },
  AMSTERDAM: {
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 12,
    },
  },
  HAMBURG: {
    location: {
      latitude: 53.54,
      longitude: 9.99,
      zoom: 12,
    },
  },
  DUSSELDORF: {
    location: {
      latitude: 51.23,
      longitude: 6.77,
      zoom: 12,
    },
  },
};

export const ApiSettings = {
  BACKEND_URL: 'https://7.react.pages.academy/six-cities',
  REQUEST_TIMEOUT: 5000,
};
