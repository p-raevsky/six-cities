import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {createMemoryHistory} from 'history';
import RoomPage from './room-page';

const mockStore = configureStore({});

const review1 = {
  comment: 'comment',
  date: 'date',
  id: 1,
  rating: 4,
  user: {
    avatarUrl: 'avatarUrl',
    id: 4,
    isPro: false,
    name: 'name1',
  },
};
const review2 = {
  comment: 'comment',
  date: 'date',
  id: 2,
  rating: 4,
  user: {
    avatarUrl: 'avatarUrl',
    id: 5,
    isPro: false,
    name: 'name2',
  },
};

const offer = {
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
  id: 1,
  previewImage: 'previewImage',
  host: {
    id: 0,
    name: 'name',
    avatarUrl: 'avatarUrl',
    isPro: true,
  },
};

const nearPlaces = [offer2];
const reviews = [review1, review2];

describe('Component: RoomPage', () => {
  it('should render correctly when authorizationStatus is AUTH', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Provider store = {mockStore({USER: {authorizationStatus: 'AUTH'}, PROCESS: {newRating: ''}})}>
        <Router history = {history}>
          <RoomPage  offer = {offer} reviews = {reviews} nearPlaces = {nearPlaces} />
        </Router>
      </Provider>,
    );

    const titleElement = getByText(offer.title);
    const typeElement = getByText(offer.type);
    const bedroomsElement = getByText(`${offer.bedrooms}${offer.bedrooms === 1 ? ' Bedroom' : ' Bedrooms'}`);
    const adultsElement = getByText(`Max ${offer.maxAdults}${offer.maxAdults === 1 ? ' adult' : ' adults'}`);
    const priceElement = getByText(`€${offer.price}`);
    const nightSpanElement = getByText('night');
    const hostTitleElement = getByText('Meet the host');
    const userNameElement = getByText(offer.host.name);
    const userIsProElement = getByText('Pro');
    const descriptionElement = getByText(offer.description);
    const reviewsTitleElement = getByText('Reviews ·');
    const reviewsAmountElement = getByText('2');
    const placesTitleElement = getByText('Other places in the neighbourhood');

    expect(titleElement).toBeInTheDocument();
    expect(typeElement).toBeInTheDocument();
    expect(bedroomsElement).toBeInTheDocument();
    expect(adultsElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(nightSpanElement).toBeInTheDocument();
    expect(hostTitleElement).toBeInTheDocument();
    expect(userNameElement).toBeInTheDocument();
    expect(userIsProElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(reviewsTitleElement).toBeInTheDocument();
    expect(reviewsAmountElement).toBeInTheDocument();
    expect(placesTitleElement).toBeInTheDocument();
  });
  it('should render correctly when authorizationStatus is NO_AUTH', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Provider store = {mockStore({USER: {authorizationStatus: 'NO_AUTH'}, PROCESS: {newRating: ''}})}>
        <Router history = {history}>
          <RoomPage  offer = {offer} reviews = {reviews} nearPlaces = {nearPlaces} />
        </Router>
      </Provider>,
    );

    const titleElement = getByText(offer.title);
    const typeElement = getByText(offer.type);
    const bedroomsElement = getByText(`${offer.bedrooms}${offer.bedrooms === 1 ? ' Bedroom' : ' Bedrooms'}`);
    const adultsElement = getByText(`Max ${offer.maxAdults}${offer.maxAdults === 1 ? ' adult' : ' adults'}`);
    const priceElement = getByText(`€${offer.price}`);
    const nightSpanElement = getByText('night');
    const hostTitleElement = getByText('Meet the host');
    const userNameElement = getByText(offer.host.name);
    const userIsProElement = getByText('Pro');
    const descriptionElement = getByText(offer.description);
    const reviewsTitleElement = getByText('Reviews ·');
    const reviewsAmountElement = getByText('2');
    const placesTitleElement = getByText('Other places in the neighbourhood');

    expect(titleElement).toBeInTheDocument();
    expect(typeElement).toBeInTheDocument();
    expect(bedroomsElement).toBeInTheDocument();
    expect(adultsElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(nightSpanElement).toBeInTheDocument();
    expect(hostTitleElement).toBeInTheDocument();
    expect(userNameElement).toBeInTheDocument();
    expect(userIsProElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(reviewsTitleElement).toBeInTheDocument();
    expect(reviewsAmountElement).toBeInTheDocument();
    expect(placesTitleElement).toBeInTheDocument();
  });
});
