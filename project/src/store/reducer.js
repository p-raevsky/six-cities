import {ActionType} from './action';
import {Cities} from '../const';
import offers from '../mocks/offers';
import {SortingType} from '../const';

const initialState = {
  city: Cities.PARIS,
  activePlaceId: null,
  offers,
  isSortingOpen: false,
  selectedSorting: SortingType.POPULAR,
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
    case ActionType.SORTING_TYPE:
      return {
        ...state,
        selectedSorting: action.payload,
      };
    default:
      return state;
  }
};


export {reducer};
