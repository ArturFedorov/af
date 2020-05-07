import {ITimestamp} from '@/shared/interfaces/IProject';

export class CalendarService {
  static convertDateToDurationString(start: ITimestamp, end?: ITimestamp) {
    const startDate = new Date(this.multiplyTimestampSeconds(start.seconds));
    const endDate = end ? new Date(this.multiplyTimestampSeconds(end.seconds)) : 'Present';
    const startMonth = this.extractStringMonth(startDate);
    const endMonth = endDate !== 'Present'
      ? this.extractStringMonth(endDate)
      : 'Present';

    return `${startMonth} - ${endMonth}`;
  }

  static extractStringMonth (date: Date) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  }

  static multiplyTimestampSeconds(seconds: number, multiplier = 1000) {
    return seconds * multiplier;
  }
}
