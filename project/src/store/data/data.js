import {createReducer} from '@reduxjs/toolkit';
import {updateData} from '../../utils';
import {DEFAULT_OFFER_DATA} from '../../const';

import {
  loadOffers,
  loadOffer,
  loadReviews,
  loadNearby,
  loadFavorites,
  updateFavorites,
  updateOffers,
  updateOffer,
  updateNearby
} from '../action';

const initialState = {
  offers: [],
  offer: DEFAULT_OFFER_DATA,
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
    })
    .addCase(updateFavorites, (state, action) => {
      state.favorites = updateData(state.favorites, action.payload);
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = updateData(state.offers, action.payload);
    })
    .addCase(updateNearby, (state, action) => {
      state.nearPlaces = updateData(state.nearPlaces, action.payload);
    })
    .addCase(updateOffer, (state, action) => {
      state.offer = action.payload;
    });
});

export {data};
