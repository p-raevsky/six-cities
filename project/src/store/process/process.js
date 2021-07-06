import {createReducer} from '@reduxjs/toolkit';

import {
  setCurrentCity,
  setActivePlaceID,
  setOpening,
  closeSorting,
  chahgeSortingType,
  setNewRating
} from '../action';
import {Cities} from '../../const';
import {SortingType} from '../../const';


const initialState = {
  city: Cities.PARIS,
  activePlaceId: null,
  isSortingOpen: false,
  selectedSorting: SortingType.POPULAR,
  newComment: '',
  newRating: '',
  isNewCommentDisabled: false,
  isCommentTextValid: false,
};

const process = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setActivePlaceID, (state, action) => {
      state.activePlaceId = action.payload;
    })
    .addCase(setOpening, (state) => {
      state.isSortingOpen = !state.isSortingOpen;
    })
    .addCase(closeSorting, (state) => {
      state.isSortingOpen = false;
    })
    .addCase(chahgeSortingType, (state, action) => {
      state.selectedSorting = action.payload;
    })
    .addCase(setNewRating, (state, action) => {
      state.newRating = action.payload;
    });
});

export {process};
