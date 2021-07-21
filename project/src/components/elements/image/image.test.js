import {render} from '@testing-library/react';
import React from 'react';
import Image from './image';

const url = 'url';

describe('Component: Image', () => {
  it('should render correctly', () => {
    const {getByAltText} = render(<Image url = {url} />);
    expect(getByAltText('Property')).toBeInTheDocument();
  });
});
