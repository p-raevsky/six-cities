import { render } from '@testing-library/react';
import React from 'react';
import LoadingScreen from './loading-screen';

describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    const {container} = render(<LoadingScreen />);
    expect(container.querySelector('.loading-spinner-pulse')).toBeInTheDocument();
  });
});
