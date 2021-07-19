import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch, Route} from 'react-router-dom';

import userEvent from '@testing-library/user-event';

import {createMemoryHistory} from 'history';
import SignIn from './sign-in';

import {AppRoute} from '../../../const';

let history;


describe('Component: SignIn', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly', () => {

    const {getByText} = render(
      <Router history = {history}>
        <SignIn />
      </Router>,
    );

    const textElement = getByText('Sign in');
    expect(textElement).toBeInTheDocument();
  });

  it('should redirect to /login url when user clicked to link', () => {
    history.push('/fake');
    render(
      <Router history = {history}>
        <Switch>
          <Route path = {AppRoute.LOGIN} exact>
            <h1>This is login page</h1>
          </Route>
          <Route>
            <SignIn />
          </Route>
        </Switch>
      </Router>);

    expect(screen.queryByText(/This is login page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.queryByText(/This is login page/i)).toBeInTheDocument();
  });
});
