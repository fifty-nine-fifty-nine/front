import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const birthFomatter = (input: string): string => {
  // 입력된 8자리 숫자를 문자열로 변환하여 처리합니다.
  const dateStr = input.toString();

  // 년, 월, 일 부분을 추출합니다.
  const year = dateStr.slice(0, 4);
  const month = dateStr.slice(4, 6);
  const day = dateStr.slice(6, 8);

  // 포맷된 문자열을 반환합니다.
  return `${year}년 ${month}월 ${day}일`;
};

export const isBeforeToday = (dateStr: string) => {
  const currentDate = dayjs().tz('Asia/Seoul');

  const date = dayjs(dateStr, { format: "YYYYMMDD" });

  return currentDate.isBefore(date, 'day')
}

export const calculateAge = (birthdayString: string): string => {
  const currentDate = dayjs().tz('Asia/Seoul');

  const birthday = dayjs(birthdayString, { format: "YYYYMMDD" });

  const age = currentDate.diff(birthday, 'year');

  return String(age)
}