import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';
import {
  parseOfferData,
  parseReviewData
} from '../six-cities-data';

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      const parsedData = data.map((offer) => parseOfferData(offer));
      dispatch(ActionCreator.loadOffers(parsedData));
    })
);

export const fetchNearbyList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => {
      const parsedData = data.map((offer) => parseOfferData(offer));
      dispatch(ActionCreator.loadNearby(parsedData));
    })
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchHotel = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => {
      const parsedData = parseOfferData(data);
      dispatch(ActionCreator.loadOffer(parsedData));
    })
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchReviwsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => {
      const parsedData = data.map((review) => parseReviewData(review));
      dispatch(ActionCreator.loadReviews(parsedData));
    })
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setEmail(data.email));
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

export const createComment = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {comment, rating})
    .then(({data}) => {
      const parsedData = data.map((review) => parseReviewData(review));
      dispatch(ActionCreator.loadReviews(parsedData));
    })
    .catch(() => {})
);
