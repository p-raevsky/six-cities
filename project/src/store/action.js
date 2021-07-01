import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CURRENT_CITY: 'city/addCurrent',
  ACTIVE_PLACE_ID: 'places/activePlace',
  IS_OPEN: 'sorting/isOpen',
  SORTING_CLOSED: 'sorting/closed',
  SORTING_TYPE: 'sorting/chahgeSortingType',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_REVIEWS: 'data/loadReviews',
  LOAD_NEARBY: 'data/loadNearby',
  LOAD_FAVORITES: 'data/loadFavorites',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
  EMAIL: 'user/setEmail',
  NEW_COMMENT:'user/newComment',
  NEW_RATING: 'user/newRating',
};


export const setCurrentCity = createAction(ActionType.CURRENT_CITY, (payload) => ({
  payload,
}));

export const setActivePlaceID = createAction(ActionType.ACTIVE_PLACE_ID, (payload) => ({
  payload,
}));

export const setOpening = createAction(ActionType.IS_OPEN);

export const closeSorting = createAction(ActionType.SORTING_CLOSED);

export const chahgeSortingType = createAction(ActionType.SORTING_TYPE, (payload) => ({
  payload,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (payload) => ({
  payload,
}));

export const loadOffer = createAction(ActionType.LOAD_OFFER, (payload) => ({
  payload,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (payload) => ({
  payload,
}));

export const loadNearby = createAction(ActionType.LOAD_NEARBY, (payload) => ({
  payload,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (payload) => ({
  payload,
}));

export const closeSession = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (payload) => ({
  payload,
}));

export const setEmail = createAction(ActionType.EMAIL, (payload) => ({
  payload,
}));

export const setNewComment = createAction(ActionType.NEW_COMMENT, (payload) => ({
  payload,
}));

export const setNewRating = createAction(ActionType.NEW_RATING, (payload) => ({
  payload,
}));

export const loadFavorites = createAction(ActionType.LOAD_FAVORITES, (payload) => ({
  payload,
}));
