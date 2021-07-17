import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {createMemoryHistory} from 'history';
import PlacesBlock from './places-block';

const mockStore = configureStore({});

const offer1 = {
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
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  host: {
    id: 0,
    name: 'name',
    avatarUrl: 'avatarUrl',
    isPro: false,
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
  id: 1,
  previewImage: 'previewImage',
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  host: {
    id: 0,
    name: 'name',
    avatarUrl: 'avatarUrl',
    isPro: false,
  },
};

const places1 = [offer1, offer2];
const places2 = [offer2];
const currentCity = 'Paris';

describe('Component: PlacesBlock', () => {
  it('should render correctly if there are a few places', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Provider store = {mockStore({PROCESS: {city: 'Paris', selectedSorting: 'Popular'}})}>
        <Router history = {history}>
          <PlacesBlock places = {places1} />
        </Router>
      </Provider>,
    );

    const textElement = getByText(`${places1.length} places to stay in ${currentCity}`);

    expect(textElement).toBeInTheDocument();
  });

  it('should render correctly if there is only one place', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Provider store = {mockStore({PROCESS: {city: 'Paris', selectedSorting: 'Popular'}})}>
        <Router history = {history}>
          <PlacesBlock places = {places2} />
        </Router>
      </Provider>,
    );

    const textElement = getByText(`1 place to stay in ${currentCity}`);

    expect(textElement).toBeInTheDocument();
  });
});
