import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {createMemoryHistory} from 'history';
import MainPage from './main-page';
import {createAPI} from '../../../services/api';

const offer1 = {
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    name: 'Paris',
  },
  images: ['image1', 'image2'],
  isPremium: false,
  isFavorite: false,
  title: 'offerTitle',
  rating: 0,
  type: 'type',
  bedrooms: 0,
  maxAdults: 0,
  price: 0,
  goods: ['good1', 'good2'],
  description: 'description',
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0,
  },
  id: 1,
  previewImage: 'previewImage',
  host: {
    id: 0,
    name: 'name',
    avatarUrl: 'avatarUrl',
    isPro: true,
  },
};

const offer2 = {
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    name: 'Paris',
  },
  images: ['image1', 'image2'],
  isPremium: false,
  isFavorite: false,
  title: 'offerTitle2',
  rating: 0,
  type: 'type2',
  bedrooms: 0,
  maxAdults: 0,
  price: 1,
  goods: ['good1', 'good2'],
  description: 'description',
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0,
  },
  id: 2,
  previewImage: 'previewImage',
  host: {
    id: 0,
    name: 'name',
    avatarUrl: 'avatarUrl',
    isPro: true,
  },
};

let api = null;

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    api = createAPI(() => {});
    const history = createMemoryHistory();
    const createStore = configureStore([thunk.withExtraArgument(api)]);


    const {queryByText} = render(
      <Provider store = {createStore({
        DATA: {
          offers: [offer1, offer2],
          isOffersDataLoaded: true,
        },
        PROCESS: {
          isSortingOpen: false,
          city: 'Paris',
          selectedSorting: 'Popular',
        },
        USER: {
          authorizationStatus: 'NO_AUTH',
        },
      })}
      >
        <Router history = {history}>
          <MainPage />
        </Router>
      </Provider>,
    );
    expect(queryByText(/text/i)).not.toBeInTheDocument();
  });
});
