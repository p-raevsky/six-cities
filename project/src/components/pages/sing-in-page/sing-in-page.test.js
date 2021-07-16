import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';

import {createMemoryHistory} from 'history';
import SingInPage from './sing-in-page';

const mockStore = configureStore({});

describe('Component: SingInPage', () => {
  it('should render correctly when user navigate to "login" url', () => {
    const history = createMemoryHistory();
    history.push('/login');

    const {queryAllByText} = render(
      <Provider store = {mockStore({PROCESS: {city: 'Paris'}, USER: {authorizationStatus: 'NO_AUTH'}})}>
        <Router history = {history}>
          <SingInPage />
        </Router>
      </Provider>,
    );

    expect(queryAllByText(/Sign in/i).length).toBe(3);

    userEvent.type(screen.getByTestId('login'), 'login');
    userEvent.type(screen.getByTestId('password'), 'password');

    expect(screen.getByDisplayValue(/login/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/password/i)).toBeInTheDocument();
  });
});
