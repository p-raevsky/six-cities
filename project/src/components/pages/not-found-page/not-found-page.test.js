import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {createMemoryHistory} from 'history';
import NotFoundPage from './not-found-page';

const mockStore = configureStore({});

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Provider store = {mockStore({USER: {authorizationStatus: 'AUTH'}})}>
        <Router history = {history}>
          <NotFoundPage />
        </Router>
      </Provider>,
    );

    const headerElement = getByText('404. Page not found');
    const linkElement = getByText('Back to Home page');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
