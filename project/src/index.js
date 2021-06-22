import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';
import {reducer} from './store/reducer';

import offers from '../src/mocks/offers';
import reviews from '../src/mocks/reviews';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers = {offers}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
