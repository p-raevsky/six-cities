import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {createMemoryHistory} from 'history';
import FavoritesList from './favorites-list';

const mockStore = configureStore({});

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

describe('Component: FavoritesList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Provider store = {mockStore()}>
        <Router history = {history}>
          <FavoritesList favoritesPlaces = {[offer]} />
        </Router>
      </Provider>,
    );

    const headerElement = getByText('Saved listing');

    expect(headerElement).toBeInTheDocument();
  });
});
