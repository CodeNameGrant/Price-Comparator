import DayJS, { Dayjs } from 'dayjs';
import minMaxPlugin from 'dayjs/plugin/minMax';
import relativeTimePlugin from 'dayjs/plugin/relativeTime';

DayJS.extend(minMaxPlugin);
DayJS.extend(relativeTimePlugin);

export const dayjs = DayJS;
export type InputDate = Date | Dayjs | string;

export function format(date: InputDate, format: string) {
  return dayjs(date).format(format);
}

export function max(...dates: InputDate[]) {
  if (dates.length === 0) {
    return null;
  }

  const dayjsDates = dates.filter((item) => item !== null).map((item) => dayjs(item));

  return dayjsDates.length > 0 ? dayjs.max(...dayjsDates).toDate() : null;
}
