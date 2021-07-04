import {NameSpace} from '../../const';

export const getCity = (state) => state[NameSpace.PROCESS].city;

export const getActivePlaceId = (state) => state[NameSpace.PROCESS].activePlaceId;

export const getSelectedSorting = (state) => state[NameSpace.PROCESS].selectedSorting;

export const getIsSortingOpen = (state) => state[NameSpace.PROCESS].isSortingOpen;

export const getNewRating = (state) => state[NameSpace.PROCESS].newRating;

export const getNewComment = (state) => state[NameSpace.PROCESS].newComment;

export const getIsNewCommentDisabled = (state) => state[NameSpace.PROCESS].isNewCommentDisabled;

export const getIsCommentTextValid = (state) => state[NameSpace.PROCESS].isCommentTextValid;
