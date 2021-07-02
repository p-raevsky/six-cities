import {SortingType} from './const';
import {AuthorizationStatus} from './const';

export const sortFilteredPlaces = (places, type, city) => {
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
};

export const parseOfferData = (offer) => {
  const parsedData = {
    ...offer,
    host: {
      avatarUrl: offer.host.avatar_url,
      isPro: offer.host.is_pro,
      id: offer.host.id,
      name: offer.host.name,
    },
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image,
  };

  delete parsedData.is_favorite;
  delete parsedData.is_premium;
  delete parsedData.max_adults;
  delete parsedData.preview_image;

  return parsedData;
};

export const parseReviewData = (review) => {
  const parsedData = {
    ...review,
    user: {
      avatarUrl: review.user.avatar_url,
      isPro: review.user.is_pro,
      id: review.user.id,
      name: review.user.name,
    },
  };

  return parsedData;
};

export const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.AUTH;
