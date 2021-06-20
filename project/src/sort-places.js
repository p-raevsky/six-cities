import {SortingType} from './const';

export default function sortPlaces(places, type) {
  switch (type) {
    case SortingType.PRICE_UP:
      return places.sort((a, b) => a.price - b.price);
    case SortingType.PRICE_DOWN:
      return places.sort((a, b) => b.price - a.price);
    case SortingType.RATING:
      return places.sort((a, b) => b.rating - a.rating);
    default:
      return places;
  }
}
