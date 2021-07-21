import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {createMemoryHistory} from 'history';
import {createAPI} from '../../../services/api';
import RatingList from './rating-list';

let api = null;

describe('Component: RatingList', () => {
  api = createAPI(() => {});
  const history = createMemoryHistory();
  const createStore = configureStore([thunk.withExtraArgument(api)]);
  it('should render correctly', () => {
    const {container} = render(
      <Provider store = {createStore({PROCESS: {newRating: ''}})} >
        <Router history = {history}>
          <RatingList isDisabled />
        </Router>
      </Provider>,
    );
    expect(container.querySelector('.form__rating')).toBeInTheDocument();
  });
});
