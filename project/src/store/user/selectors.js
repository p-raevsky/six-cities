import {NameSpace} from '../../const';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

export const getUserEmail = (state) => state[NameSpace.USER].userEmail;
