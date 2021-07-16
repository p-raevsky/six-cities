import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {createMemoryHistory} from 'history';
import CityItem from './city-item';

const mockStore = configureStore({});
const setCity = () => {};

const city = 'Paris';
const currentCity = '';

describe('Component: CityItem', () => {
  it('should render correctly when city is Paris', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Provider store = {mockStore()}>
        <Router history = {history}>
          <CityItem cityItem = {city} currentCity = {city} onCurrentCity = {setCity} />
        </Router>
      </Provider>,
    );

    const textElement = getByText(city);

    expect(textElement).toBeInTheDocument();
  });
  it('should render correctly when curent city is empty', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Provider store = {mockStore()}>
        <Router history = {history}>
          <CityItem cityItem = {city} currentCity = {currentCity} onCurrentCity = {setCity} />
        </Router>
      </Provider>,
    );

    const textElement = getByText(city);

    expect(textElement).toBeInTheDocument();
  });
});
