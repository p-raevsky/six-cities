import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {AuthorizationStatus, AppRoute} from '../../const';
import { createAPI } from '../../services/api';
import App from './app';

let history = null;
let store = null;
let fakeApp = null;
let api = null;

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    api = createAPI(() => {});

    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);

    store = createFakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
      DATA: {
        offers: [],
        offer: {},
        reviews: [],
        nearPlaces: [],
        favorites: [],
        isOffersDataLoaded: true,
        isOfferDataLoaded: true,
        isReviewsDataLoaded: true,
        isNearPlacesDataLoaded: true,
        isFavoritesLoaded: true,
      },
      PROCESS: {
        city: 'Paris',
        selectedSorting: 'Popular',
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.ROOT);
    render(fakeApp);
  });

  it('should render "FavoritesPage" when user navigate to "/favorites" and authorizationStatus is AUTH', () => {
    history.push(AppRoute.FAVORITES);
    render(fakeApp);
  });

  it('should render "FavoritesPage" when user navigate to "/favorites" and authorizationStatus is NO_AUTH', () => {
    history = createMemoryHistory();

    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);

    store = createFakeStore({
      USER: { authorizationStatus: AuthorizationStatus.NO_AUTH},
      DATA: {
        isFavoritesLoaded: true,
        favorites: [],
      },
      PROCESS: {
        city: 'Paris',
        selectedSorting: 'Popular',
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    history.push(AppRoute.FAVORITES);
    render(fakeApp);
  });

  it('should render "SingInPage" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);
  });

  it('should render "RoomPageWrapper" when user navigate to "/offer"', () => {
    history.push(AppRoute.OFFER);
    render(fakeApp);
  });

  it('should render "404" when user navigate to "/offer"', () => {
    history.push(AppRoute.NOT_FOUND);
    render(fakeApp);
  });
});
