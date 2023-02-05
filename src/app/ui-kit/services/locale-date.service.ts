import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleDateService {

  public dayName: any = {
    en: [
      'Mon', 'Tue', 'Wed',
      'Thu', 'Fri', 'Sat', 'Sun'
    ],
    ru: [
      'Пн', 'Вт', 'Ср',
      'Чт', 'Пт', 'Сб', 'Вс'
    ],
    ja: [
      '月', '火', '水',
      '木', '金', '土', '日'
    ]
  };
  public currentDayName: any = {
    en: 'Today',
    ru: 'Сегодня',
    ja: '今日'
  };

  constructor() { }
}
