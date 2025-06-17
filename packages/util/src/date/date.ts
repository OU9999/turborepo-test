import { format, parseISO } from 'date-fns';

/**
 * 날짜를 'yyyy-MM-dd' 형식으로 반환
 * @param date 날짜 (ISO 형식)
 * @returns 날짜 (문자열 형식: 'yyyy-MM-dd')
 */
const formatDate = (date?: string): string => {
  if (!date) return '-';
  return format(parseISO(date), 'yyyy-MM-dd');
};

export const dateUtil = {
  formatDate,
};
