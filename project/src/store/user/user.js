import {createReducer} from '@reduxjs/toolkit';

import {
  requireAuthorization,
  setEmail,
  closeSession,
  setUserAvatar
} from '../action';

import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userEmail: null,
  userAvatar: '',
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(closeSession, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(setEmail, (state, action) => {
      state.userEmail = action.payload;
    })
    .addCase(setUserAvatar, (state, action) => {
      state.userAvatar = action.payload;
    });
});

export {user};
