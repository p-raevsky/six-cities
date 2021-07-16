import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';

import {createMemoryHistory} from 'history';
import SignIn from './sign-in';

describe('Component: SignIn', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Router history = {history}>
        <SignIn />
      </Router>,
    );

    const textElement = getByText('Sign in');
    expect(textElement).toBeInTheDocument();
  });
});
