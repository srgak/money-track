import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { PaginationInfo, PaginationItem } from '../../../models/models';
import { makeArray } from '../../../scripts/array';

@Component({
  selector: 'ui-pagination',
  templateUrl: './pagination-main.component.html',
  styleUrls: ['./pagination-main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationMainComponent implements OnInit {
  @Input() public total!: number; //всего страниц
  @Input() public textPrev!: string; //текст для предыдущей стрелки
  @Input() public textNext!: string; //текст для следующей стрелки
  @Input() public interval: boolean = true; //наличие многоточий
  @Input() public extreme: boolean = true; //наличие кнопок крайних страниц
  @Input() public countVisible: number = 5; //количество видимых страниц
  @Input() public countCentered: number = 1; //количество центральных страниц
  @Output() public onChangePage: EventEmitter<number> = new EventEmitter();
  
  private getPageItem = (item: number): PaginationItem => {
    return {
      num: item,
      isActive: false
    }
  }; //получить страницу
  private countPageBegin: number = Math.ceil((this.countVisible - this.countCentered) / 2); //страницы для переключения назад
  private countPageLast: number = Math.ceil((this.countVisible + this.countCentered) / 2) - 1; //страницы для переключения вперёд
  private listVisibleStart: PaginationItem[] = makeArray(this.countVisible, (_, i) => i + 1)
    .map(this.getPageItem); //начальные страницы
  private listVisibleEnd!: PaginationItem[]; //последние страницы
  public listVisible: PaginationItem[] = this.listVisibleStart; //текущи1 список страниц
  private currentPage: number = 1; //текущая страница
  //находимся ли в начале списка
  private isBegin = (shift: number = 1): boolean => this.listVisible.some(item => item.num <= shift);
  //находимся ли в конце списка
  private isLast = (shift: number = 0): boolean => this.listVisible.some(item => item.num >= this.total - shift);
  //показать кнопку назад
  public get isShowBtnPrev(): boolean {
    return !!(this.textPrev && this.currentPage > 1);
  }
  //показать конпку далее
  public get isShowBtnNext(): boolean {
    return !!(this.textNext && this.currentPage < this.total);
  }
  //показать кнопку первой страницы
  public get isShowStart(): boolean {
    return this.extreme && !this.isBegin();
  }
  //показать конпку последней страницы
  public get isShowEnd(): boolean {
    return this.extreme && !this.isLast();
  }
  //показать начальное многоточие
  public get isShowIntervalPrev(): boolean {
    return this.interval && !this.isBegin(2);
  }
  //показать последнее многоточие
  public get isSwhoIntervalNext(): boolean {
    return this.interval && !this.isLast(1);
  }
  //индекс кнопки
  private get btnIndex(): number {
    return this.listVisible
     .findIndex(item => item.num === this.currentPage);
  }
  //обновить страницы назад
  private updatePagePrev(index: number): void {
    const subtract = this.countPageBegin - index;

    this.listVisible = makeArray(this.countVisible, (_, i) => this.listVisible[i].num - subtract)
      .map(this.getPageItem);
    if(this.isBegin()) this.listVisible = this.listVisibleStart;
  }

  //обновить страницы вперёд
  private updatePageNext(index: number): void {
    const subtract = index - this.countPageLast;

    this.listVisible = makeArray(this.countVisible, (_, i) => this.listVisible[i].num + subtract)
      .map(this.getPageItem);
    if(this.isLast()) this.listVisible = this.listVisibleEnd;
  }

  //обновить страницы
  private updatePage(index: number): void {
    if(index < this.countPageBegin) {
      this.updatePagePrev(index);
    }
    if(index > this.countPageLast) {
      this.updatePageNext(index);
    }
  }

  //пометить активную страницу
  private markPageBtn(): void {
    this.listVisible.forEach(item => {
      item.isActive = false;
    });
    this.listVisible[this.btnIndex].isActive = true;
  }
  
  //поменять страницу
  private changePage(index: number, isReset: boolean = false): void {
    if(this.total > this.countVisible) {
      this.updatePage(index);
      if(isReset) this.listVisible = this.listVisibleStart;
    }
    this.markPageBtn();
  }

  //поменять страницу при нажатии на навигацию
  public changeNavPage(action: 'prev' | 'next' = 'prev'): void {
    this.currentPage = action === 'next' ? ++this.currentPage : --this.currentPage;
    this.changePage(this.btnIndex);
  };

  //поменять страницу при нажатии на номер
  public changeNumPage(data: PaginationInfo): void {
    this.currentPage = data.num;
    this.changePage(data.type === 'num' ? this.btnIndex : this.currentPage, this.currentPage <= 1);
  }

  //сброс
  public resetPage(): void {
    this.currentPage = 1;
    this.changePage(0, true);
  }

  constructor() {}

  ngOnInit(): void {
    this.listVisible[0].isActive = true;
    this.listVisibleEnd = makeArray(this.countVisible, (_, i) => this.total - i)
      .reverse()
      .map(this.getPageItem);
  }
}
