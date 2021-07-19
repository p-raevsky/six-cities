import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch, Route} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {createMemoryHistory} from 'history';
import PlaceCard from './place-card';
import {AppRoute} from '../../../const';

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
let history;

describe('Component: PlaceCard', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });
  it('should render correctly', () => {
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

  it('should redirect to offer url when user clicked to image', () => {
    history.push('/fake');
    render(
      <Provider store = {mockStore()}>
        <Router history={history}>
          <Switch>
            <Route path = {`${AppRoute.OFFER}/${offer.id}`} exact>
              <h1>This is offer page</h1>
            </Route>
            <Route>
              <PlaceCard offer = {offer} placesType = {placesType} />
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/This is offer page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByAltText('Place'));
    expect(screen.queryByText(/This is offer page/i)).toBeInTheDocument();
  });

  it('should redirect to offer url when user clicked to title', () => {
    history.push('/fake');
    render(
      <Provider store = {mockStore()}>
        <Router history={history}>
          <Switch>
            <Route path = {`${AppRoute.OFFER}/${offer.id}`} exact>
              <h1>This is offer page</h1>
            </Route>
            <Route>
              <PlaceCard offer = {offer} placesType = {placesType} />
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/This is offer page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByText(offer.title));
    expect(screen.queryByText(/This is offer page/i)).toBeInTheDocument();
  });
});
