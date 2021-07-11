export const DEFAULT_OFFER_DATA = {
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    name: '',
  },
  images: [],
  isPremium: false,
  isFavorite: false,
  title: '',
  rating: 0,
  type: '',
  bedrooms: 0,
  maxAdults: 0,
  price: 0,
  goods: [],
  description: '',
  id: 0,
  previewImage: '',
  host: {
    id: 0,
    name: '',
    avatarUrl: '',
    isPro: false,
  },
};

export const ErrorMessages = {
  ERROR_RATING_MSG: 'Rating is required',
  ERROR_COMMENT_MSG: 'Something went wrong, please try posting your comment later',
  ERROR_CONNECT_MSG: 'Something went wrong. Try refreshing the page or come back later',
};

export const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer',
  NOT_FOUND: '/404',
};

export const Cities = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
};

export const PlaceType = {
  CITIES: 'CITIES',
  NEAR_PLACES: 'NEAR_PLACES',
  FAVORITES: 'FAVORITES',
};

export const SortingType = {
  POPULAR: 'Popular',
  PRICE_UP: 'Price: low to high',
  PRICE_DOWN: 'Price: high to low',
  RATING: 'Top rated first',
};

export const HttpCode = {
  UNAUTHORIZED: 401,
  SERVER_ERORR: 500,
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  HOTELS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  FAVORITE: '/favorite',
  COMMENTS: '/comments',
};

export const NameSpace = {
  DATA: 'DATA',
  PROCESS: 'PROCESS',
  USER: 'USER',
};
