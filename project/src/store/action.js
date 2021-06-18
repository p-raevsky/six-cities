export const ActionType = {
  CURRENT_CITY: 'city/addCurrent',
  PLACES_LIST: 'places/currentPlaces',
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
};
