import {user} from './user';

import {
  requireAuthorization,
  setEmail,
  closeSession,
  setUserAvatar
} from '../action';

const initialState = {
  authorizationStatus: 'UNKNOWN',
  userEmail: null,
  userAvatar: '',
};

describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {}))
      .toEqual(initialState);
  });

  it('should update authorizationStatus to "AUTH"', () => {
    expect(user({authorizationStatus: initialState.authorizationStatus}, requireAuthorization('AUTH')))
      .toEqual({authorizationStatus: 'AUTH'});
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    expect(user({authorizationStatus: initialState.authorizationStatus}, requireAuthorization('NO_AUTH')))
      .toEqual({authorizationStatus: 'NO_AUTH'});
  });


  it('should update user email by loaded user email', () => {
    const userEmail = 'userEmail';

    expect(user({userEmail: initialState.userEmail}, setEmail(userEmail)))
      .toEqual({userEmail});
  });

  it('should update user avatar by loaded user avatar', () => {
    const userAvatar = 'userAvatar';

    expect(user({userAvatar: initialState.userAvatar}, setUserAvatar(userAvatar)))
      .toEqual({userAvatar});
  });

  it('should close session by updating authorizationStatus to "AUTH"', () => {
    expect(user({authorizationStatus: 'AUTH'}, closeSession()))
      .toEqual({authorizationStatus: 'NO_AUTH'});
  });
});
