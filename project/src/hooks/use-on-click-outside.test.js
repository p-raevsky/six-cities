import {renderHook} from '@testing-library/react-hooks';
import {useOnClickOutside} from '../hooks/use-on-click-outside';

const ref = null;

describe('Hook: useOnClickOutside', () => {
  it('should be instance of object', () => {
    const handler = jest.fn();

    const {result} = renderHook(() =>
      useOnClickOutside(ref, handler),
    );

    expect(result).toBeInstanceOf(Object);
  });
});
