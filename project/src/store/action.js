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
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
  EMAIL: 'user/setEmail',
  NEW_COMMENT:'user/newComment',
  NEW_RATING: 'user/newRating',
};


export const setCurrentCity = (payload) => ({
  type: ActionType.CURRENT_CITY,
  payload,
});

export const setActivePlaceID = (payload) => ({
  type: ActionType.ACTIVE_PLACE_ID,
  payload,
});

export const setOpening = () => ({
  type: ActionType.IS_OPEN,
});

export const closeSorting = () => ({
  type: ActionType.SORTING_CLOSED,
});

export const chahgeSortingType = (payload) => ({
  type: ActionType.SORTING_TYPE,
  payload,
});

export const loadOffers = (payload) => ({
  type: ActionType.LOAD_OFFERS,
  payload,
});

export const loadOffer = (payload) => ({
  type: ActionType.LOAD_OFFER,
  payload,
});

export const loadReviews = (payload) => ({
  type: ActionType.LOAD_REVIEWS,
  payload,
});

export const loadNearby = (payload) => ({
  type: ActionType.LOAD_NEARBY,
  payload,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const closeSession = () => ({
  type: ActionType.LOGOUT,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const setEmail = (email) => ({
  type: ActionType.EMAIL,
  payload: email,
});

export const setNewComment = (comment) => ({
  type: ActionType.NEW_COMMENT,
  payload: comment,
});

export const setNewRating = (rating) => ({
  type: ActionType.NEW_RATING,
  payload: rating,
});
