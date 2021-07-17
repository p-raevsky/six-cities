import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {createMemoryHistory} from 'history';
import PlacesEmpty from './places-empty';

const mockStore = configureStore({});

describe('Component: PlacesEmpty', () => {
  it('should render correctly when there is no places in the current city', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Provider store = {mockStore({DATA: {offers: []}, PROCESS: {city: 'Dusseldorf'}})}>
        <Router history = {history}>
          <PlacesEmpty />
        </Router>
      </Provider>,
    );

    const statusTextElement = getByText('No places to stay available');
    const statusDescriptionElement = getByText('We could not find any property available at the moment in Dusseldorf');

    expect(statusTextElement).toBeInTheDocument();
    expect(statusDescriptionElement).toBeInTheDocument();
  });
});
