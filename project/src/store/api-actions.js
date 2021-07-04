import {
  loadOffers,
  loadOffer,
  loadReviews,
  loadFavorites,
  loadNearby,
  requireAuthorization,
  closeSession,
  redirectToRoute,
  setEmail,
  setNewCommentDisabling,
  setNewComment,
  setNewRating,
  setIsCommentTextValid,
  setUserAvatar,
  updateFavorites,
  updateOffers,
  updateOffer,
  updateNearby
} from './action';
import {
  AuthorizationStatus,
  APIRoute,
  AppRoute
} from '../const';
import {
  parseOfferData,
  parseReviewData
} from '../six-cities-data';
import {showAlert} from '../utils';

const ERROR_MSG = 'Something went wrong, please try posting your comment later';

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      dispatch(loadOffers(
        data.map((offer) => parseOfferData(offer)),
      ));
    })
);

export const fetchNearbyList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => {
      dispatch(loadNearby(
        data.map((offer) => parseOfferData(offer)),
      ));
    })
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchHotel = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => dispatch(loadOffer(parseOfferData(data))))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchReviwsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => {
      dispatch(loadReviews(
        data.map((review) => parseReviewData(review)),
      ));
    })
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchFavoriteList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      dispatch(loadFavorites(
        data.map((offer) => parseOfferData(offer)),
      ));
    })
    .catch(() => dispatch(redirectToRoute(AppRoute.LOGIN)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(setEmail(data.email));
      dispatch(setUserAvatar(data.avatar_url));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(setEmail(data.email));
      dispatch(setUserAvatar(data.avatar_url));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
);

export const createComment = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {comment, rating})
    .then(({data}) => {
      dispatch(loadReviews(
        data.map((review) => parseReviewData(review)),
      ));
      dispatch(setNewComment(''));
      dispatch(setNewRating(''));
      dispatch(setIsCommentTextValid(false));
    })
    .catch(() => showAlert(ERROR_MSG))
    .finally(() => dispatch(setNewCommentDisabling(false)))
);

export const sendFavoritePlace = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => {
      const parsedData = parseOfferData(data);
      dispatch(updateOffer(parsedData));
      dispatch(updateOffers(parsedData));
      dispatch(updateFavorites(parsedData));
      dispatch(updateNearby(parsedData));
    })
    .catch(() => {})
);
