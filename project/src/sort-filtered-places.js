import {SortingType} from './const';

export default function sortFilteredPlaces(places, type, city) {
  const filteredPlaces = places.filter((place) => place.city.name === city);
  switch (type) {
    case SortingType.PRICE_UP:
      return filteredPlaces.sort((a, b) => a.price - b.price);
    case SortingType.PRICE_DOWN:
      return filteredPlaces.sort((a, b) => b.price - a.price);
    case SortingType.RATING:
      return filteredPlaces.sort((a, b) => b.rating - a.rating);
    default:
      return filteredPlaces;
  }
}
