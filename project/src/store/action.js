export const ActionType = {
  CURRENT_CITY: 'city/addCurrent',
  ACTIVE_PLACE_ID: 'places/activePlace',
  IS_OPEN: 'sorting/isOpen',
  SORTING_TYPE: 'sorting/chahgeSortingType',
};

export const ActionCreator = {
  setCurrentCity: (payload) => ({
    type: ActionType.CURRENT_CITY,
    payload,
  }),
  setActivePlaceID: (payload) => ({
    type: ActionType.ACTIVE_PLACE_ID,
    payload,
  }),
  setOpening: () => ({
    type: ActionType.IS_OPEN,
  }),
  chahgeSortingType: (payload) => ({
    type: ActionType.SORTING_TYPE,
    payload,
  }),
};
