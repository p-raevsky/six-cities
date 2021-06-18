import {ActionType} from './action';
import {Cities} from '../const';
import offers from '../mocks/offers';

const initialState = {
  city: Cities.PARIS,
  places: offers.filter((place) => place.city.name === Cities.PARIS),
  offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CURRENT_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.PLACES_LIST:
      return {
        ...state,
        places: action.payload,
      };
    default:
      return state;
  }
};


export {reducer};
