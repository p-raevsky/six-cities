import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const places = [
  {
    id: 1,
    isPremium: false,
    price: 130,
    previewImage: 'img/apartment-03.jpg',
  },
  {
    id: 2,
    isPremium: true,
    price: 50,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: 3,
    isPremium: false,
    price: 40,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: 4,
    isPremium: true,
    price: 30,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: 5,
    isPremium: false,
    price: 120,
    previewImage: 'img/apartment-01.jpg',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      places = {places}
    />
  </React.StrictMode>,
  document.getElementById('root'));
