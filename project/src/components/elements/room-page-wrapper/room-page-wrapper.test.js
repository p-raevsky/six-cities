import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {createMemoryHistory} from 'history';
import RoomPageWrapper from './room-page-wrapper';
import {createAPI} from '../../../services/api';

let api = null;

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

const offerId = '1';

describe('Component: RoomPageWrapper', () => {
  api = createAPI(() => {});
  const history = createMemoryHistory();
  const createStore = configureStore([thunk.withExtraArgument(api)]);
  it('should render correctly', () => {
    const {queryByText} = render(
      <Provider store = {createStore({
        DATA: {
          offer: offer1,
          isOfferLoaded: true,
        },
        USER: {
          authorizationStatus: 'AUTH',
        },
      })}
      >
        <Router history = {history}>
          <RoomPageWrapper offerId = {offerId} />
        </Router>
      </Provider>,
    );
    expect(queryByText(/text/i)).not.toBeInTheDocument();
  });
});
