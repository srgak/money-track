export class DateExtra extends Date {
  public locale: string;

  constructor(date: string | Date) {
    super(date);
    this.locale = 'default';
  }

  public get year(): string {
    return `${this.getFullYear()}`;
  }

  public get month(): string {
    return this.toLocaleDateString('en', {month: '2-digit'});
  }

  public get day(): string {
    return this.toLocaleDateString('en', {day: '2-digit'});
  }
  
  //день недели
  public get dayOfWeek(): number {
    return !this.getDay() ? 7 : this.getDay();
  }
  
  //количество дней в месяце
  public get daysInMonth(): number {
    const date = new Date(this.year + '-' + this.month + '-' + this.day);
    date.setDate(33);
    date.setMonth(+this.month - 1);

    return 33 - date.getDate();
  }

  //корректная ли дата
  public get isIncorrect(): boolean {
    return isNaN(this.getDay());
  }

  //возраст
  public get age(): number {
    const date = new Date(this.year + '-' + this.month + '-' + this.day);
    const dateNow = new Date();
    const age = dateNow.getFullYear() - date.getFullYear();

    return dateNow.setFullYear(1972) < date.setFullYear(1972) ? age - 1 : age;
  }

  //название месяца
  public get nameMonth(): string {
    return this.toLocaleDateString(this.locale, {month: 'long'});
  }

  //название дня недели
  public get nameWeekDay(): string {
    return this.toLocaleDateString(this.locale, {weekday: 'short'});
  }

  public resetTime(): void {
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    this.setMilliseconds(0);
  }

  //находиться ли созданная дата до переданной
  public isBefore(date: Date): boolean {
    const timeOur: number = this.getTime();
    const timeInput: number = date.getTime();

    return timeOur < timeInput;
  }

  //находиться ли созданная дата после переданной
  public isAfter(date: Date): boolean {
    const timeOur: number = this.getTime();
    const timeInput: number = date.getTime();

    return timeOur > timeInput;
  }

  //находится ли созданная дата между переданными
  public isBetween(date1: Date, date2: Date): boolean {
    const timeOur: number = this.getTime();
    const timeInput1: number = date1.getTime();
    const timeInput2: number = date2.getTime();

    return timeInput1 < timeOur && timeOur < timeInput2;
  }

  isSame(date: Date): boolean {
    const timeOur: number = this.getTime();
    const timeInput: number = date.getTime();

    return timeOur === timeInput;
  }

  //переключить на следующий год
  public nextYear(): void {
    this.setFullYear(+this.year + 1);
  }

  //переключить на следующий гмесяц
  public nextMonth(): void {
    this.setMonth(+this.month);
  }

  //переключение на предыдущий год
  public previousYear(): void {
    this.setFullYear(+this.year - 1);
  }

  //переключение на предыдущий год
  public previousMonth(): void {
    this.setMonth(+this.month - 2);
  }
}

export function copyDate(date: DateExtra): DateExtra {
  return new DateExtra(`${date.year}-${date.month}-${date.day}`);
}