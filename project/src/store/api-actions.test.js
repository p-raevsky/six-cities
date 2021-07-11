import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {
  login,
  fetchHotelsList,
  fetchNearbyList,
  fetchHotel,
  fetchReviewsList,
  fetchFavoriteList,
  checkAuth,
  logout,
  createComment,
  sendFavoritePlace
} from './api-actions';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';

const offer = {
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    name: 'name',
  },
  images: ['image', 'image'],
  'is_premium': false,
  'is_favorite': false,
  title: 'title',
  rating: 0,
  type: 'type',
  bedrooms: 0,
  'max_adults': 0,
  price: 0,
  goods: ['good', 'good'],
  description: 'description',
  id: 0,
  'preview_image': 'previewImage',
  host: {
    id: 0,
    name: 'name',
    'avatar_url': 'avatarUrl',
    'is_pro': false,
  },
};

const parsedOffer = {
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    name: 'name',
  },
  images: ['image', 'image'],
  isPremium: false,
  isFavorite: false,
  title: 'title',
  rating: 0,
  type: 'type',
  bedrooms: 0,
  maxAdults: 0,
  price: 0,
  goods: ['good', 'good'],
  description: 'description',
  id: 0,
  previewImage: 'previewImage',
  host: {
    id: 0,
    name: 'name',
    avatarUrl: 'avatarUrl',
    isPro: false,
  },
};

const authInfo = {
  avatarUrl: 'img/1.png',
  email: 'Oliver.conner@gmail.com',
};

const id = 1;

const review = {
  comment: 'comment',
  date: 'date',
  id: 1,
  rating: 4,
  user: {
    'avatar_url': 'avatarUrl',
    id: 4,
    'is_pro': false,
    name: 'name',
  },
};

const parsedReview = {
  comment: 'comment',
  date: 'date',
  id: 1,
  rating: 4,
  user: {
    avatarUrl: 'avatarUrl',
    id: 4,
    isPro: false,
    name: 'name',
  },
};

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, authInfo);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.EMAIL,
          payload: authInfo.email,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.USER_AVATAR,
          payload: authInfo.userAvatar,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const email = 'email';
    const password = 'password';

    const loginLoader = login({login: email, password});

    apiMock
      .onPost(APIRoute.LOGIN, {email, password})
      .reply(200, authInfo);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.EMAIL,
          payload: authInfo.email,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.USER_AVATAR,
          payload: authInfo.userAvatar,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });
      });
  });

  it('should make a correct API call to POST /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const logoutLoader = logout();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(204);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGOUT,
        });
      });
  });

  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelsLoader = fetchHotelsList();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, [offer, offer]);

    return hotelsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [parsedOffer, parsedOffer],
        });
      });
  });

  it('should make a correct API call to GET /hotels/:id/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const hotelsNearbyLoader = fetchNearbyList(id);

    apiMock
      .onGet(`${APIRoute.HOTELS}/${id}/nearby`)
      .reply(200, [offer, offer]);

    return hotelsNearbyLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY,
          payload: [parsedOffer, parsedOffer],
        });
      });
  });

  it('should make a correct API call to GET /hotels/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const hotelLoader = fetchHotel(id);

    apiMock
      .onGet(`${APIRoute.HOTELS}/${id}`)
      .reply(200, offer);

    return hotelLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER,
          payload: parsedOffer,
        });
      });
  });

  it('should make a correct API call to GET /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const reviewsLoader = fetchReviewsList(id);

    apiMock
      .onGet(`${APIRoute.COMMENTS}/${id}`)
      .reply(200, [review, review]);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [parsedReview, parsedReview],
        });
      });
  });

  it('should make a correct API call to GET /favotites', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const favoriteListLoader = fetchFavoriteList();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, [offer, offer]);

    return favoriteListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: [parsedOffer, parsedOffer],
        });
      });
  });

  it('should make a correct API call to POST /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const comment = 'comment';
    const rating = 'rating';

    const createCommentLoader = createComment(id, {comment, rating});

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${id}`, {comment, rating})
      .reply(200, [review, review]);

    return createCommentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [parsedReview, parsedReview],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.NEW_RATING,
          payload: '',
        });
      });
  });

  it('should make a correct API call to POST /favotites/:id/:status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const status = 0;

    const favoritePlaceLoader = sendFavoritePlace(id, status);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${id}/${status}`)
      .reply(200, offer);

    return favoritePlaceLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_FAVORITES,
          payload: parsedOffer,
        });
      });
  });
});
