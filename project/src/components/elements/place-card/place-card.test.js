import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {createMemoryHistory} from 'history';
import PlaceCard from './place-card';

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
  rating: 5,
  type: 'type',
  bedrooms: 1,
  maxAdults: 2,
  price: 100,
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

const placesType = 'CITIES';

describe('Component: PlaceCard', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Provider store = {mockStore()}>
        <Router history = {history}>
          <PlaceCard offer = {offer} placesType = {placesType} />
        </Router>
      </Provider>,
    );

    const priceElement = getByText(`€${offer.price}`);
    const priceTextElement = getByText('/ night');
    const titleElement = getByText(offer.title);
    const typeElement = getByText(offer.type);

    expect(priceElement).toBeInTheDocument();
    expect(priceTextElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(typeElement).toBeInTheDocument();
  });
});
