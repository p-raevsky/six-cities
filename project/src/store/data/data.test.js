import {data} from './data';
import {
  loadOffers,
  loadOffer,
  loadReviews,
  loadNearby,
  loadFavorites,
  updateFavorites
} from '../action';

const defaultOffer = {
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    name: '',
  },
  images: [],
  isPremium: false,
  isFavorite: false,
  title: '',
  rating: 0,
  type: '',
  bedrooms: 0,
  maxAdults: 0,
  price: 0,
  goods: [],
  description: '',
  id: 0,
  previewImage: '',
  host: {
    id: 0,
    name: '',
    avatarUrl: '',
    isPro: false,
  },
};

const offer = {
  isFavorite: true,
  id: 2,
};

const initialState = {
  offers: [],
  offer: defaultOffer,
  reviews: [],
  nearPlaces: [],
  favorites: [],
  isOffersDataLoaded: false,
  isOfferDataLoaded: false,
  isReviewsDataLoaded: false,
  isNearPlacesDataLoaded: false,
  isFavoritesLoaded: false,
};

describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(data(undefined, {}))
      .toEqual(initialState);
  });

  it('should update offers by loaded offers', () => {
    const offers = [offer, offer];

    expect(data({offers: [], isOffersDataLoaded: false}, loadOffers(offers)))
      .toEqual({offers, isOffersDataLoaded: true});
  });

  it('should update offer by loaded offer', () => {
    expect(data({offer: defaultOffer, isOfferDataLoaded: false}, loadOffer(offer)))
      .toEqual({offer, isOfferDataLoaded: true});
  });

  it('should update reviews by loaded reviews', () => {
    const review = {
      comment: 'comment',
    };

    const reviews = [review, review];

    expect(data({reviews: [], isReviewsDataLoaded: false}, loadReviews(reviews)))
      .toEqual({reviews, isReviewsDataLoaded: true});
  });

  it('should update nearby places by loaded nearby places', () => {
    const nearPlaces = [offer, offer];

    expect(data({nearPlaces: [], isNearPlacesDataLoaded: false}, loadNearby(nearPlaces)))
      .toEqual({nearPlaces, isNearPlacesDataLoaded: true});
  });

  it('should update favorites offers by loaded favorites offers', () => {
    const favorites = [offer, offer];

    expect(data({favorites: [], isFavoritesLoaded: false}, loadFavorites(favorites)))
      .toEqual({favorites, isFavoritesLoaded: true});
  });

  it('should update all offers marked with favorites by loaded favorite offer', () => {
    const offerFirst = {
      isFavorite: false,
      id: 1,
    };

    const offerSecond = {
      isFavorite: false,
      id: 2,
    };

    const offerThird = {
      isFavorite: false,
      id: 3,
    };

    expect(data({
      offers: [offerFirst, offerSecond, offerThird],
      offer: offerSecond,
      nearPlaces: [offerFirst, offerSecond, offerThird],
      favorites: [offerFirst, offerSecond, offerThird],
    }, updateFavorites(offer)))
      .toEqual({
        offers: [offerFirst, offer, offerThird],
        offer,
        nearPlaces: [offerFirst, offer, offerThird],
        favorites: [offerFirst, offer, offerThird],
      });
  });
});
