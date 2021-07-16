import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {createMemoryHistory} from 'history';
import ReviewsForm from './reviews-form';

const mockStore = configureStore({});

const id = 1;

describe('Component: ReviewsForm', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const { getByRole, getByText} = render(
      <Provider store = {mockStore({PROCESS: {newRating: ''}})}>
        <Router history = {history}>
          <ReviewsForm id = {id} />
        </Router>
      </Provider>,
    );

    const titleElement = getByText('Your review');
    const textElement = getByText(/To submit review please make sure to set/i);
    const spanElement = getByText(/rating/i);
    const textContinueElement = getByText(/ and describe your stay with at least /i);
    const textAmountElement = getByText(/50 characters/i);
    const buttonElement = getByRole('button');


    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(spanElement).toBeInTheDocument();
    expect(textContinueElement).toBeInTheDocument();
    expect(textAmountElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
