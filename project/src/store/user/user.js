import {createReducer} from '@reduxjs/toolkit';

import {
  requireAuthorization,
  setEmail,
  closeSession
} from '../action';

import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userEmail: null,
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
    });
});

export {user};
