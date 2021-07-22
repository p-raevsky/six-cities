import {process} from './process';
import {
  setCurrentCity,
  setActivePlaceID,
  setOpening,
  closeSorting,
  changeSortingType,
  setNewRating
} from '../action';

const initialState = {
  city: 'Paris',
  activePlaceId: null,
  isSortingOpen: false,
  selectedSorting: 'Popular',
  newRating: '',
};

describe('Reducer: process', () => {
  it('without additional parameters should return initial state', () => {
    expect(process(undefined, {}))
      .toEqual(initialState);
  });

  it('should return new current city in a given value', () => {
    const newCity = 'newCity';

    expect(process({city: initialState.city}, setCurrentCity(newCity)))
      .toEqual({city: newCity});
  });

  it('should return active place id in a given value', () => {
    const id = '1';

    expect(process({activePlaceId: initialState.activePlaceId}, setActivePlaceID(id)))
      .toEqual({activePlaceId: id});
  });

  it('should change to the opposite boolean value', () => {
    expect(process({isSortingOpen: false}, setOpening()))
      .toEqual({isSortingOpen: true});
    expect(process({isSortingOpen: true}, setOpening()))
      .toEqual({isSortingOpen: false});
  });

  it('should close sorting and return false in any cases', () => {
    expect(process({isSortingOpen: true}, closeSorting()))
      .toEqual({isSortingOpen: false});
    expect(process({isSortingOpen: false}, closeSorting()))
      .toEqual({isSortingOpen: false});
  });

  it('should return sorting type in a given value', () => {
    const sortingType = 'sortingType';

    expect(process({selectedSorting: initialState.selectedSorting}, changeSortingType(sortingType)))
      .toEqual({selectedSorting: sortingType});
  });

  it('should return new rating in a given value', () => {
    const rating = 'rating';

    expect(process({newRating: initialState.newRating}, setNewRating(rating)))
      .toEqual({newRating: rating});
  });
});
