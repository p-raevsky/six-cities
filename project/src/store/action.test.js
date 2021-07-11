import {
  ActionType,
  setCurrentCity,
  setActivePlaceID,
  setOpening,
  closeSorting,
  chahgeSortingType,
  loadOffers,
  loadOffer,
  loadReviews,
  loadNearby,
  requireAuthorization,
  closeSession,
  redirectToRoute,
  setEmail,
  setNewRating,
  loadFavorites,
  setUserAvatar,
  updateFavorites
} from './action';

describe('Actions', () => {
  it('action creator for setting current city, returns correct action with current city in payload', () => {
    const expectedAction = {
      type: ActionType.CURRENT_CITY,
      payload: 'currentCity',
    };

    const currentCity = 'currentCity';

    expect(setCurrentCity(currentCity)).toEqual(expectedAction);
  });

  it('action creator for setting active place ID, returns correct action with active place ID in payload', () => {
    const expectedAction = {
      type: ActionType.ACTIVE_PLACE_ID,
      payload: '1',
    };

    const activePlaceID = '1';

    expect(setActivePlaceID(activePlaceID)).toEqual(expectedAction);
  });

  it('action creator for opening sorting, returns correct action with undefined payload', () => {
    const expectedAction = {
      type: ActionType.IS_OPEN,
    };

    expect(setOpening()).toEqual(expectedAction);
  });

  it('action creator for closing sorting, returns correct action with undefined payload', () => {
    const expectedAction = {
      type: ActionType.SORTING_CLOSED,
    };

    expect(closeSorting()).toEqual(expectedAction);
  });

  it('action creator for changing sorting type, returns correct action with sortingType in payload', () => {
    const expectedAction = {
      type: ActionType.SORTING_TYPE,
      payload: 'sortingType',
    };

    const sortingType = 'sortingType';

    expect(chahgeSortingType(sortingType)).toEqual(expectedAction);
  });

  it('action creator for loading offers, returns correct action with array of objects in payload', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: [{}, {}, {}],
    };

    const offers = [{}, {}, {}];

    expect(loadOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for loading offer, returns correct action with offer in payload', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFER,
      payload: {},
    };

    const offer = {};

    expect(loadOffer(offer)).toEqual(expectedAction);
  });

  it('action creator for loading reviews, returns correct action with array of objects in payload', () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: [{}, {}, {}],
    };

    const reviews = [{}, {}, {}];

    expect(loadReviews(reviews)).toEqual(expectedAction);
  });

  it('action creator for loading nearby offers, returns correct action with array of objects in payload', () => {
    const expectedAction = {
      type: ActionType.LOAD_NEARBY,
      payload: [{}, {}, {}],
    };

    const nearbyoffers = [{}, {}, {}];

    expect(loadNearby(nearbyoffers)).toEqual(expectedAction);
  });

  it('action creator for authorization, returns correct action with authorization status in payload', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: 'status',
    };

    const status = 'status';

    expect(requireAuthorization(status)).toEqual(expectedAction);
  });

  it('action creator for closing session, returns correct action with undefined payload', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(closeSession()).toEqual(expectedAction);
  });

  it('action creator for redirecting to route, returns correct action with redirected path in payload', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: 'path',
    };

    const path = 'path';

    expect(redirectToRoute(path)).toEqual(expectedAction);
  });

  it('action creator for setting rating returns correct action with rating in payload', () => {
    const expectedAction = {
      type: ActionType.NEW_RATING,
      payload: 'rating',
    };

    const rating = 'rating';

    expect(setNewRating(rating)).toEqual(expectedAction);
  });

  it('action creator for setting user avatar, returns correct action with url in payload', () => {
    const expectedAction = {
      type: ActionType.USER_AVATAR,
      payload: 'url',
    };

    const url = 'url';

    expect(setUserAvatar(url)).toEqual(expectedAction);
  });

  it('action creator for setting email, returns correct action with email in payload', () => {
    const expectedAction = {
      type: ActionType.EMAIL,
      payload: 'email',
    };

    const email = 'email';

    expect(setEmail(email)).toEqual(expectedAction);
  });

  it('action creator for loading favorites offers, returns correct action with array of objects in payload', () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: [{}, {}, {}],
    };

    const offers = [{}, {}, {}];

    expect(loadFavorites(offers)).toEqual(expectedAction);
  });

  it('action creator for updating favorite offer, returns correct action with favorite offer in payload', () => {
    const expectedAction = {
      type: ActionType.UPDATE_FAVORITES,
      payload: {},
    };

    const offer = {};

    expect(updateFavorites(offer)).toEqual(expectedAction);
  });
});
