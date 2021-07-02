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

export const ActionCreator = {
  setCurrentCity: (payload) => ({
    type: ActionType.CURRENT_CITY,
    payload,
  }),
  setActivePlaceID: (payload) => ({
    type: ActionType.ACTIVE_PLACE_ID,
    payload,
  }),
  setOpening: () => ({
    type: ActionType.IS_OPEN,
  }),
  closeSorting: () => ({
    type: ActionType.SORTING_CLOSED,
  }),
  chahgeSortingType: (payload) => ({
    type: ActionType.SORTING_TYPE,
    payload,
  }),
  loadOffers: (payload) => ({
    type: ActionType.LOAD_OFFERS,
    payload,
  }),
  loadOffer: (payload) => ({
    type: ActionType.LOAD_OFFER,
    payload,
  }),
  loadReviews: (payload) => ({
    type: ActionType.LOAD_REVIEWS,
    payload,
  }),
  loadNearby: (payload) => ({
    type: ActionType.LOAD_NEARBY,
    payload,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  setEmail: (email) => ({
    type: ActionType.EMAIL,
    payload: email,
  }),
  setNewComment: (comment) => ({
    type: ActionType.NEW_COMMENT,
    payload: comment,
  }),
  setNewRating: (rating) => ({
    type: ActionType.NEW_RATING,
    payload: rating,
  }),
};
