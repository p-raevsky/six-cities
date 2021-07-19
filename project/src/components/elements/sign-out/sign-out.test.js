import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch, Route} from 'react-router-dom';

import userEvent from '@testing-library/user-event';

import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {createMemoryHistory} from 'history';
import SignOut from './sign-out';

import {AppRoute} from '../../../const';

const mockStore = configureStore({});

const userEmail = 'userEmail';
let history;

describe('Component: SignOut', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });
  it('should render correctly', () => {
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

  it('should redirect to /faforites url when user clicked to link', () => {
    history.push('/fake');
    render(
      <Provider store = {mockStore({USER: {userAvatar: ''}})}>
        <Router history = {history}>
          <Switch>
            <Route path = {AppRoute.FAVORITES} exact>
              <h1>This is faforites page</h1>
            </Route>
            <Route>
              <SignOut userEmail = {userEmail} />
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/This is faforites page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByText(userEmail));
    expect(screen.queryByText(/This is faforites page/i)).toBeInTheDocument();
  });
});
