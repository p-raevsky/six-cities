import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {createMemoryHistory} from 'history';
import SortItem from './sort-item';

const mockStore = configureStore({});

const sortItem = 'sortItem';
const selectedSorting = 'selectedSorting';

const onChahgeSortingType = () => {};

describe('Component: SortItem', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Provider store = {mockStore()}>
        <Router history = {history}>
          <SortItem selectedSorting = {selectedSorting} sortItem = {sortItem} onChahgeSortingType = {onChahgeSortingType} />
        </Router>
      </Provider>,
    );

    const sortItemElement = getByText(sortItem);

    expect(sortItemElement).toBeInTheDocument();
  });
  it('should render correctly when sortItem === selectedSorting', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Provider store = {mockStore()}>
        <Router history = {history}>
          <SortItem selectedSorting = {sortItem} sortItem = {sortItem} onChahgeSortingType = {onChahgeSortingType} />
        </Router>
      </Provider>,
    );

    const sortItemElement = getByText(sortItem);

    expect(sortItemElement).toBeInTheDocument();
  });
});
