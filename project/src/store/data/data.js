import {createReducer} from '@reduxjs/toolkit';

import {
  loadOffers,
  loadOffer,
  loadReviews,
  loadNearby,
  loadFavorites
} from '../action';

const initialState = {
  offers: [],
  offer: {},
  reviews: [],
  nearPlaces: [],
  favorites: [],
  isOffersDataLoaded: false,
  isOfferDataLoaded: false,
  isReviewsDataLoaded: false,
  isNearPlacesDataLoaded: false,
  isFavoritesLoaded: false,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.isOffersDataLoaded = true;
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.isOfferDataLoaded = true;
      state.offer = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.isReviewsDataLoaded = true;
      state.reviews = action.payload;
    })
    .addCase(loadNearby, (state, action) => {
      state.isNearPlacesDataLoaded = true;
      state.nearPlaces = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.isFavoritesLoaded = true;
      state.favorites = action.payload;
    });
});

export {data};
