import {ActionType} from '../action';
import {Cities} from '../../const';
import {SortingType} from '../../const';

const initialState = {
  city: Cities.PARIS,
  activePlaceId: null,
  isSortingOpen: false,
  selectedSorting: SortingType.POPULAR,
  newComment: '',
  newRating: '',
};

const process = (state = initialState, action) => {
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


export {process};
