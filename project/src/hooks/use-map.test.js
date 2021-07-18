import {renderHook} from '@testing-library/react-hooks';
import {useMap} from '../hooks/use-map';

const mapRef = null;

const city = {
  location: {
    latitude: 1,
    longitude: 1,
    zoom: 1,
  },
  name: 'Paris',
};

describe('Hook: useMap', () => {
  it('should be instance of object', () => {
    const {result} = renderHook(() =>
      useMap(mapRef, city),
    );

    expect(result).toBeInstanceOf(Object);
  });
});
