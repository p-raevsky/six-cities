import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';

import {createMemoryHistory} from 'history';
import PropertyGoodsItem from './property-goods-item';

const goodsItem = 'goodsItem';

describe('Component: PropertyGoodsItem', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Router history = {history}>
        <PropertyGoodsItem goodsItem = {goodsItem}/>
      </Router>,
    );

    const textElement = getByText(goodsItem);
    expect(textElement).toBeInTheDocument();
  });
});
