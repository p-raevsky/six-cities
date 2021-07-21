import {render} from '@testing-library/react';
import React from 'react';
import LoadWrapper from './load-wrapper';

describe('Component: LoadWrapper', () => {
  it('should render correctly', () => {
    const {queryByText} = render(<LoadWrapper isLoaded />);
    expect(queryByText(/text/i)).not.toBeInTheDocument();
  });
});
