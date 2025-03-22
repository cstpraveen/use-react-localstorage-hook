import { renderHook, act } from '@testing-library/react-hooks';
import useLocalStorage from '../src/useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return initial value', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));
    expect(result.current[0]).toBe('initialValue');
  });

  it('should store and retrieve value', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));

    act(() => {
      result.current[1]('newValue');
    });

    expect(result.current[0]).toBe('newValue');
    expect(localStorage.getItem('testKey')).toBe(JSON.stringify('newValue'));
  });

  it('should update value when localStorage changes', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));

    act(() => {
      localStorage.setItem('testKey', JSON.stringify('updatedValue')));
      window.dispatchEvent(new Event('storage'));
    });

    expect(result.current[0]).toBe('updatedValue');
  });
});