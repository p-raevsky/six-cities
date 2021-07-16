import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {createMemoryHistory} from 'history';
import ReviewsItem from './reviews-item';

const mockStore = configureStore({});

const review = {
  comment: 'comment',
  date: '2019-04-24',
  rating: 'rating',
  user: {
    avatarUrl: 'avatarUrl',
    name: 'name',
  },
};

describe('Component: ReviewsItem', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Provider store = {mockStore()}>
        <Router history = {history}>
          <ReviewsItem review = {review} />
        </Router>
      </Provider>,
    );

    const userNameElement = getByText('name');
    const comentElement = getByText('comment');
    const dateElement = getByText('Apr 2019');

    expect(userNameElement).toBeInTheDocument();
    expect(comentElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
  });
});
