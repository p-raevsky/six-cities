import {render} from '@testing-library/react';
import React from 'react';
import Map from './map';

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

const city = 'Paris';
const places = [offer1, offer2];
const activePlaceId = '1';

describe('Component: Map', () => {
  it('should render correctly', () => {
    const {queryByText} = render(<Map city = {city} places = {places} activePlaceId = {activePlaceId} />);
    expect(queryByText(/text/i)).not.toBeInTheDocument();
  });
});
