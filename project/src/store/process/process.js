import {createReducer} from '@reduxjs/toolkit';

import {
  setCurrentCity,
  setActivePlaceID,
  setOpening,
  closeSorting,
  chahgeSortingType,
  setNewRating,
  setNewComment,
  setNewCommentDisabling,
  setIsCommentTextValid
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
    })
    .addCase(setNewComment, (state, action) => {
      state.newComment = action.payload;
    })
    .addCase(setNewCommentDisabling, (state, action) => {
      state.isNewCommentDisabled = action.payload;
    })
    .addCase(setIsCommentTextValid, (state, action) => {
      state.isCommentTextValid = action.payload;
    });
});

export {process};
