import {getOfferRating, getPoints, updateData} from './utils';

let offer1 = null;
let offer2 = null;
let offer3 = null;
let offer4 = null;
let point1 = null;
let point2 = null;
let point3 = null;

describe('Business Logic', () => {
  beforeAll(() => {
    offer1 = {
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
      id: 1,
      images: ['image', 'image'],
      isFavorite: false,
      isPremium: false,
      maxAdults: 0,
      previewImage: 'previewImage',
      location: {
        latitude: 52.35,
        longitude: 4.67,
        zoom: 8,
      },
      price: 0,
      rating: 4.8,
      title: 'title',
      type: 'type',
    };

    offer2 = {
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
      id: 2,
      images: ['image', 'image'],
      isFavorite: false,
      isPremium: false,
      maxAdults: 0,
      previewImage: 'previewImage',
      location: {
        latitude: 51,
        longitude: 4.5,
        zoom: 8,
      },
      price: 0,
      rating: 0,
      title: 'title',
      type: 'type',
    };

    offer3 = {
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
      id: 3,
      images: ['image', 'image'],
      isFavorite: false,
      isPremium: false,
      maxAdults: 0,
      previewImage: 'previewImage',
      location: {
        latitude: 50,
        longitude: 4.0,
        zoom: 8,
      },
      price: 0,
      rating: 0,
      title: 'title',
      type: 'type',
    };

    offer4 = {
      bedrooms: 1,
      city: {
        location: {
          latitude: 1,
          longitude: 1,
          zoom: 1,
        },
        name: 'name1',
      },
      description: 'description1',
      goods: ['good1', 'good2'],
      host: {
        avatarUrl: 'avatarUrl/1',
        isPro: false,
        id: 0,
        name: 'name1',
      },
      id: 3,
      images: ['image1', 'image2'],
      isFavorite: false,
      isPremium: false,
      maxAdults: 2,
      previewImage: 'previewImage1',
      location: {
        latitude: 50,
        longitude: 4.0,
        zoom: 8,
      },
      price: 1,
      rating: 1,
      title: 'title1',
      type: 'type1',
    };

    point1 = {
      id: 1,
      location: {
        latitude: 52.35,
        longitude: 4.67,
        zoom: 8,
      },
    };

    point2 = {
      id: 2,
      location: {
        latitude: 51,
        longitude: 4.5,
        zoom: 8,
      },
    };

    point3 = {
      id: 3,
      location: {
        latitude: 50,
        longitude: 4.0,
        zoom: 8,
      },
    };

  });
  it('should return parsed offer rating in string when rating is 4.8', () => {
    const rating = 4.8;
    const parsedRating = '100';
    expect(getOfferRating(rating)).toBe(parsedRating);
  });

  it('should return parsed offer rating in string when is 2.2', () => {
    const rating = 2.2;
    const parsedRating = '40';
    expect(getOfferRating(rating)).toBe(parsedRating);
  });

  it('should return parsed offer rating in string when is 0', () => {
    const rating = 0;
    const parsedRating = '0';
    expect(getOfferRating(rating)).toBe(parsedRating);
  });

  it('should return points', () => {
    const offers = [offer1, offer2, offer3];
    const points = [point1, point2, point3];
    expect(getPoints(offers)).toHaveLength(3);
    expect(getPoints(offers)).toBeInstanceOf(Array);
    expect(getPoints(offers)).toEqual(points);
  });

  it('should return updatedData', () => {
    const offers = [offer1, offer3];
    const updatedData = [offer1, offer4];
    expect(updateData(offers, offer4)).toHaveLength(2);
    expect(updateData(offers, offer4)).toBeInstanceOf(Array);
    expect(updateData(offers, offer4)).toEqual(updatedData);
  });

  it('should return not updated data when offers don"t includes id of new offer', () => {
    const offers = [offer1, offer2];
    expect(updateData(offers, offer4)).toHaveLength(2);
    expect(updateData(offers, offer4)).toBeInstanceOf(Array);
    expect(updateData(offers, offer4)).toEqual(offers);
  });
});
