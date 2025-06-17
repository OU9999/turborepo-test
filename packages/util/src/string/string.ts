import { escape } from 'es-toolkit/string';

/**
 * 문자열을 엔티티티 문자열로 바꿈
 * @param str 문자열
 * @returns HTML에서 쓰기 안전하게 바꾼 문자열
 */
const escapeFn = (str: string): string => {
  return escape(str);
};

export const stringUtil = {
  escape: escapeFn,
};
