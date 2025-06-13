import { format, parseISO } from 'date-fns';

export class DateUtil {
  /**
   * 날짜를 'yyyy-MM-dd' 형식으로 반환합니다.
   * @param date 날짜 (ISO 형식)
   * @returns 날짜 (문자열 형식: 'yyyy-MM-dd')
   */
  static formatDate(date?: string) {
    if (!date) return '-';
    return format(parseISO(date), 'yyyy-MM-dd');
  }
}
