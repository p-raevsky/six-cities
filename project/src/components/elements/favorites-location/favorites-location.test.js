import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {createMemoryHistory} from 'history';
import FavoritesLocation from './favorites-location';

const mockStore = configureStore({});

const city = 'Paris';

const offer = {
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    name: 'Paris',
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

describe('Component: FavoritesLocation', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Provider store = {mockStore()}>
        <Router history = {history}>
          <FavoritesLocation city = {city} filteredPlaces = {[offer]} />
        </Router>
      </Provider>,
    );

    const linkElement = getByText(city);

    expect(linkElement).toBeInTheDocument();
  });
});
