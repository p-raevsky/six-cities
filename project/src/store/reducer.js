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
  reviews: [],
  isSortingOpen: false,
  selectedSorting: SortingType.POPULAR,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
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
        isDataLoaded: true,
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
    default:
      return state;
  }
};


export {reducer};
