import {ActionType} from '../action';

const initialState = {
  offers: [],
  offer: {},
  reviews: [],
  nearPlaces: [],
  isOffersDataLoaded: false,
  isOfferDataLoaded: false,
  isReviewsDataLoaded: false,
  isNearPlacesDataLoaded: false,
};

const data = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};


export {data};
