import { Injectable } from '@angular/core';
import { RandomUtils } from './random.utils';

@Injectable({
  providedIn: 'root'
})
export class DateTimeUtils {
  toUtcDate(baseDate: Date | string, defaultValue: Date = null): Date {
    const localDate = baseDate instanceof Date ? baseDate : baseDate ? new Date(baseDate) : null;
    if (localDate) {
      const utc = Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate());
      const utcDate = new Date(utc);
      return utcDate;
    }
    return defaultValue;
  }

  /**
   *
   */
  utcNow(): Date {
    return this.toUtcDate(new Date());
  }

  /**
   * Get a random DateTime
   */
  randomDateTime(): Date {
    const today = this.utcNow();
    const year = this.randomUtils.random(today.getFullYear(), today.getFullYear() - 2);
    const month = this.randomUtils.random(11);
    const day = this.randomUtils.random(28, 1);
    const hour = this.randomUtils.random(20, 9);
    const min = this.randomUtils.random(59);
    const sec = this.randomUtils.random(59);

    const date = new Date(year, month, day, hour, min, sec);
    return date;
  }


  addDays(baseDate: Date, days: number): Date {
    if (!baseDate) {
      return null;
    }

    const oneDay = 24 * 60 * 60 * 1000;
    const time = baseDate.getTime() + oneDay * days;
    return this.toUtcDate(new Date(time));
  }

  addWeeks(baseDate: Date, weeks: number): Date {
    const days = weeks * 7;
    const date = this.addDays(baseDate, days);
    return this.toUtcDate(date);
  }

  addMonths(baseDate: Date, months: number): Date {
    if (!baseDate) {
      return null;
    }

    if (months === 0) {
      return baseDate;
    }

    const offYears = (months >= 0 ? 1 : -1) * Math.floor(Math.abs(months) / 12);
    const offMonths = months % 12;

    const newDate = new Date(
      baseDate.getFullYear() + offYears,
      baseDate.getMonth() + offMonths,
      baseDate.getDate(), baseDate.getHours(), baseDate.getMinutes());

    return this.toUtcDate(newDate);
  }

  addYears(baseDate: Date, years: number): Date {
    const months = years * 12;
    const date = this.addMonths(baseDate, months);
    return this.toUtcDate(date);
  }

  constructor(
    private randomUtils: RandomUtils,
  ) {}
}
