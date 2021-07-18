import {
  parseOfferData,
  parseReviewData,
  isCheckedAuth,
  sortFilteredPlaces
} from './six-cities-data';

import {AuthorizationStatus} from './const';

let offer = null;
let offer1 = null;
let offer2 = null;
let offer3 = null;
let offer4 = null;
let parsedOffer = null;
let review = null;
let parsedReview = null;

describe('Business Logic', () => {
  beforeAll(() => {
    offer = {
      city: {
        location: {
          latitude: 0,
          longitude: 0,
          zoom: 0,
        },
        name: 'name',
      },
      images: ['image', 'image'],
      'is_premium': false,
      'is_favorite': false,
      title: 'title',
      rating: 0,
      type: 'type',
      bedrooms: 0,
      'max_adults': 0,
      price: 0,
      goods: ['good', 'good'],
      description: 'description',
      id: 0,
      'preview_image': 'previewImage',
      host: {
        id: 0,
        name: 'name',
        'avatar_url': 'avatarUrl',
        'is_pro': false,
      },
    };

    parsedOffer = {
      bedrooms: 0,
      city: {
        location: {
          latitude: 0,
          longitude: 0,
          zoom: 0,
        },
        name: 'name',
      },
      description: 'description',
      goods: ['good', 'good'],
      host: {
        avatarUrl: 'avatarUrl',
        isPro: false,
        id: 0,
        name: 'name',
      },
      id: 0,
      images: ['image', 'image'],
      isFavorite: false,
      isPremium: false,
      maxAdults: 0,
      previewImage: 'previewImage',
      price: 0,
      rating: 0,
      title: 'title',
      type: 'type',
    };

    review = {
      comment: 'comment',
      date: 'date',
      id: 1,
      rating: 4,
      user: {
        'avatar_url': 'avatarUrl',
        id: 4,
        'is_pro': false,
        name: 'name',
      },
    };

    parsedReview = {
      comment: 'comment',
      date: 'date',
      id: 1,
      rating: 4,
      user: {
        avatarUrl: 'avatarUrl',
        id: 4,
        isPro: false,
        name: 'name',
      },
    };

    offer1 = {
      city: {
        name: 'Paris',
      },
      rating: 5,
      price: 100,
    };

    offer2 = {
      city: {
        name: 'Paris',
      },
      rating: 3,
      price: 80,
    };

    offer3 = {
      city: {
        name: 'Brussels',
      },
      rating: 3,
      price: 80,
    };

    offer4 = {
      city: {
        name: 'Paris',
      },
      rating: 4,
      price: 50,
    };
  });
  it('should return "true" in isCheckedAuth when answer AuthorizationStatus is AUTH', () => {
    expect(isCheckedAuth(AuthorizationStatus.AUTH)).toBe(true);
  });

  it('should return "false" in isCheckedAuth when answer AuthorizationStatus is NO_AUTH', () => {
    expect(isCheckedAuth(AuthorizationStatus.NO_AUTH)).toBe(false);
  });

  it('should return parsedOffer in parseOfferData', () => {
    expect(parseOfferData(offer)).toEqual(parsedOffer);
  });

  it('should return parsedReview in parseReviewData', () => {
    expect(parseReviewData(review)).toEqual(parsedReview);
  });

  it('should return filteredPlaces when SortingType is "Popular"', () => {
    const places = [ offer1, offer2, offer3, offer4];
    const filteredPlaces = [ offer1,  offer2, offer4];
    const type = 'Popular';
    const city = 'Paris';
    expect(sortFilteredPlaces(places, type, city)).toHaveLength(3);
    expect(sortFilteredPlaces(places, type, city)).toBeInstanceOf(Array);
    expect(sortFilteredPlaces(places, type, city)).toEqual(filteredPlaces);
  });

  it('should return filteredPlaces when SortingType is "Price: low to high"', () => {
    const places = [ offer1, offer2, offer3, offer4];
    const filteredPlaces = [ offer4, offer2,  offer1];
    const type = 'Price: low to high';
    const city = 'Paris';
    expect(sortFilteredPlaces(places, type, city)).toHaveLength(3);
    expect(sortFilteredPlaces(places, type, city)).toBeInstanceOf(Array);
    expect(sortFilteredPlaces(places, type, city)).toEqual(filteredPlaces);
  });

  it('should return filteredPlaces when SortingType is "Price: high to low"', () => {
    const places = [ offer1, offer2, offer3, offer4];
    const filteredPlaces = [ offer1,  offer2, offer4];
    const type = 'Price: high to low';
    const city = 'Paris';
    expect(sortFilteredPlaces(places, type, city)).toHaveLength(3);
    expect(sortFilteredPlaces(places, type, city)).toBeInstanceOf(Array);
    expect(sortFilteredPlaces(places, type, city)).toEqual(filteredPlaces);
  });

  it('should return filteredPlaces when SortingType is "Top rated first"', () => {
    const places = [ offer1, offer2, offer3, offer4];
    const filteredPlaces = [ offer1, offer4, offer2];
    const type = 'Top rated first';
    const city = 'Paris';
    expect(sortFilteredPlaces(places, type, city)).toHaveLength(3);
    expect(sortFilteredPlaces(places, type, city)).toBeInstanceOf(Array);
    expect(sortFilteredPlaces(places, type, city)).toEqual(filteredPlaces);
  });
});
