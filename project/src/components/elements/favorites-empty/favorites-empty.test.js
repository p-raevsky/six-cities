import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {createMemoryHistory} from 'history';
import FavoritesEmpty from './favorites-empty';

const mockStore = configureStore({});

describe('Component: FavoritesEmpty', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Provider store = {mockStore()}>
        <Router history = {history}>
          <FavoritesEmpty />
        </Router>
      </Provider>,
    );

    const textElement = getByText('Nothing yet saved.');
    const descriptionElement = getByText('Save properties to narrow down search or plan your future trips.');

    expect(textElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
