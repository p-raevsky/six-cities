import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from '../src/mocks/offers';
import reviews from '../src/mocks/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App
      offers = {offers}
      reviews = {reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
