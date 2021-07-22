import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {createMemoryHistory} from 'history';
import SortList from './sort-list';

const mockStore = configureStore({});
const changeSortType = () => {};

describe('Component: SortList', () => {
  it('should render correctly when isSortingOpen: false', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Provider store = {mockStore({PROCESS: {isSortingOpen: false, selectedSorting: 'selectedSorting'}})}>
        <Router history = {history}>
          <SortList changeSortType = {changeSortType} />
        </Router>
      </Provider>,
    );

    const selectedSortingElement = getByText('selectedSorting');
    expect(selectedSortingElement).toBeInTheDocument();
  });
  it('should render correctly when isSortingOpen: true', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Provider store = {mockStore({PROCESS: {isSortingOpen: true, selectedSorting: 'selectedSorting'}})}>
        <Router history = {history}>
          <SortList changeSortType = {changeSortType} />
        </Router>
      </Provider>,
    );

    const selectedSortingElement = getByText('selectedSorting');
    expect(selectedSortingElement).toBeInTheDocument();
  });
});
