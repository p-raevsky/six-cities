export const ActionType = {
  CURRENT_CITY: 'city/addCurrent',
  PLACES_LIST: 'places/currentPlaces',
  ACTIVE_PLACE_ID: 'places/activePlace',
  IS_SORTING_ACTIVE: 'sorting/isActive',
  SORTING_TYPE: 'sorting/chahgeSortingType',
};

const getPlacesInCurrentCity = (places, city) => places.filter((place) => place.city.name === city);

export const ActionCreator = {
  getPlacesList: (places, city) => ({
    type: ActionType.PLACES_LIST,
    payload: getPlacesInCurrentCity(places, city),
  }),
  getCurrentCity: (payload) => ({
    type: ActionType.CURRENT_CITY,
    payload,
  }),
  getActivePlaceID: (payload) => ({
    type: ActionType.ACTIVE_PLACE_ID,
    payload,
  }),
  setSorting: () => ({
    type: ActionType.IS_SORTING_ACTIVE,
  }),
  chahgeSortingType: (payload) => ({
    type: ActionType.SORTING_TYPE,
    payload,
  }),
};
