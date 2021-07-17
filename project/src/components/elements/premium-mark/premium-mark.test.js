import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';

import {createMemoryHistory} from 'history';
import PremiumMark from './premium-mark';

describe('Component: PremiumMark', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Router history = {history}>
        <PremiumMark />
      </Router>,
    );

    const textElement = getByText('Premium');
    expect(textElement).toBeInTheDocument();
  });
});
