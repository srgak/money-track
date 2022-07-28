export class ExtraDate {
  public readonly info: Date;
  public readonly year: string;
  public readonly month: string;
  public readonly day: string;

  constructor(date: string) {
    this.year = date.slice(6, 10);
    this.month = date.slice(3, 5);
    this.day = date.slice(0, 2);
    this.info = new Date(this.year + '-' + this.month + '-' + this.day);
  }

  public get dayOfWeek(): number {
    return !this.info.getDay() ? 7 : this.info.getDay();
  }
  
  public get daysInMonth(): number {
    const date = new Date(this.year + '-' + this.month + '-' + this.day);
    date.setDate(33);
    date.setMonth(+this.month - 1);

    return 33 - date.getDate();
  }

  public get isIncorrect(): boolean {
    return isNaN(this.info.getDay());
  }

  public get age(): number {
    const date = new Date(this.year + '-' + this.month + '-' + this.day);
    const dateNow = new Date();
    const age = dateNow.getFullYear() - date.getFullYear();

    return dateNow.setFullYear(1972) < date.setFullYear(1972) ? age - 1 : age;
  }

  public getDateString(separator: string = '.'): string {
    return this.day + separator + this.month + separator + this.year;
  }

  public isBefore(date: Date): boolean {
    const timeOur: number = this.info.getTime();
    const timeInput: number = date.getTime();

    return timeOur < timeInput;
  }

  public isAfter(date: Date): boolean {
    const timeOur: number = this.info.getTime();
    const timeInput: number = date.getTime();

    return timeOur > timeInput;
  }

  public isBetween(date1: Date, date2: Date): boolean {
    const timeOur: number = this.info.getTime();
    const timeInput1: number = date1.getTime();
    const timeInput2: number = date2.getTime();

    return timeInput1 < timeOur && timeOur < timeInput2;
  }
}