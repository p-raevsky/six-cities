import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {createMemoryHistory} from 'history';
import SignOut from './sign-out';

const mockStore = configureStore({});

const userEmail = 'userEmail';

describe('Component: SignOut', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Provider store = {mockStore({USER: {userAvatar: ''}})}>
        <Router history = {history}>
          <SignOut userEmail = {userEmail} />
        </Router>
      </Provider>,
    );

    const userEmailElement = getByText('userEmail');
    const signOutElement = getByText('Sign out');

    expect(userEmailElement).toBeInTheDocument();
    expect(signOutElement).toBeInTheDocument();
  });
});
