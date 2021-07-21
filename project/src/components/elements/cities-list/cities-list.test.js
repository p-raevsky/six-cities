import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {createMemoryHistory} from 'history';
import {createAPI} from '../../../services/api';

import CitiesList from './cities-list';

let api = null;

const setCity = () => {};

describe('Component: CitiesList', () => {
  it('should render correctly', () => {
    api = createAPI(() => {});
    const history = createMemoryHistory();
    const createStore = configureStore([thunk.withExtraArgument(api)]);

    const {queryByText} = render(
      <Provider store = {createStore({
        PROCESS: {
          city: 'Paris',
        },
      })}
      >
        <Router history = {history}>
          <CitiesList setCity = {setCity} />
        </Router>
      </Provider>,
    );
    expect(queryByText(/text/i)).not.toBeInTheDocument();
  });
});
