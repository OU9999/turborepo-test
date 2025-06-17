import { debounce } from 'es-toolkit/function';

/**
 * 함수를 디바운스 처리
 * @param fn 디바운스 처리할 함수
 * @param debounceMs 디바운스 시간 (밀리초)
 * @returns 디바운스 처리된 함수
 */
const debounceFn = (fn: (...args: any[]) => any, debounceMs: number) => {
  return debounce(fn, debounceMs);
};

export const functionUtil = {
  debounce: debounceFn,
};
