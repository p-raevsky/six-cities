import {ActionType} from './action';
import {Cities} from '../const';
import {
  SortingType,
  AuthorizationStatus
} from '../const';

const initialState = {
  city: Cities.PARIS,
  activePlaceId: null,
  offers: [],
  offer: {},
  reviews: [],
  nearPlaces: [],
  isSortingOpen: false,
  selectedSorting: SortingType.POPULAR,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isOffersDataLoaded: false,
  isOfferDataLoaded: false,
  isReviewsDataLoaded: false,
  isNearPlacesDataLoaded: false,
  userEmail: null,
  newComment: '',
  newRating: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CURRENT_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.ACTIVE_PLACE_ID:
      return {
        ...state,
        activePlaceId: action.payload,
      };
    case ActionType.IS_OPEN:
      return {
        ...state,
        isSortingOpen: !state.isSortingOpen,
      };
    case ActionType.SORTING_CLOSED:
      return {
        ...state,
        isSortingOpen: false,
      };
    case ActionType.SORTING_TYPE:
      return {
        ...state,
        selectedSorting: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isOffersDataLoaded: true,
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
        isOfferDataLoaded: true,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        isReviewsDataLoaded: true,
      };
    case ActionType.LOAD_NEARBY:
      return {
        ...state,
        nearPlaces: action.payload,
        isNearPlacesDataLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.EMAIL:
      return {
        ...state,
        userEmail: action.payload,
      };
    case ActionType.NEW_COMMENT:
      return {
        ...state,
        newComment: action.payload,
      };
    case ActionType.NEW_RATING:
      return {
        ...state,
        newRating: action.payload,
      };
    default:
      return state;
  }
};


export {reducer};
