export class Pagination {
  el: Element;
  elBtnList: NodeListOf<HTMLElement>;
  elBtnNext: HTMLElement;
  elBtnLast: HTMLElement;
  elInterval: HTMLElement;
  countPage: number;
  countTotal: number;
  countMaxVisible: number;
  countCentered: number;
  countStart: number;
  countEnd: number;
  listPageStart: number[];
  listPageEnd: number[];
  listPageCurrent: number[];
  eventChange: Event;

  constructor(countCentered) {
    this.el = document.querySelector('.pagination');
    this.elBtnList = this.el.querySelectorAll('.pagination__page');
    this.elBtnNext = this.el.querySelector('.pagination__next');
    this.elBtnLast = this.el.querySelector('.pagination__last');
    this.elInterval = this.el.querySelector('.pagination__interval');

    this.countPage = 1;
    this.countTotal = +this.el.getAttribute('data-total');
    this.countMaxVisible = this.elBtnList.length;
    this.countCentered = countCentered;
    this.countStart = Math.ceil((this.countMaxVisible - countCentered) / 2);
    this.countEnd = Math.ceil((this.countMaxVisible + countCentered) / 2) - 1;

    this.listPageStart = Array.from({length: this.countMaxVisible}, (_, i) => i + 1);
    this.listPageEnd = Array.from({length: this.countMaxVisible}, (_, i) => this.countTotal - i).reverse();
    this.listPageCurrent = this.listPageStart;

    this.eventChange = new Event('changePage');

    this.init();
  }

  get isStart() {
    return this.listPageCurrent.some(item => item < 1);
  }
  get isEnd() {
    return this.listPageCurrent.some(item => item >= this.countTotal);
  }

  markPageBtn() {
    const btn = this.elBtnList[
      Array.from(this.elBtnList)
        .findIndex(item => +item.getAttribute('data-page') === this.countPage)
    ];

    this.elBtnList.forEach(item => {
      item.classList.remove('active');
    });
    btn.classList.add('active');
  }

  updatePrev(index) {
    const substract = this.countStart - index;

    this.listPageCurrent = Array.from({length: this.countMaxVisible}, (_, i) => this.listPageCurrent[i] - substract);
    if(this.isStart) this.listPageCurrent = this.listPageStart;
  }

  updateNext(index) {
    const substract = index - this.countEnd;

    this.listPageCurrent = Array.from({length: this.countMaxVisible}, (_, i) => this.listPageCurrent[i] + substract);
    if(this.isEnd) this.listPageCurrent = this.listPageEnd;
  }

  updatePage(index) {
    if(index < this.countStart) {
      this.updatePrev(index);
    }
    if(index > this.countEnd) {
      this.updateNext(index);
    }
  }

  renderPages(): void {
    this.elBtnList.forEach((item, index) => {
      item.innerText = `${this.listPageCurrent[index]}`;
      item.setAttribute('data-page', `${this.listPageCurrent[index]}`);
    });
  }

  changeNavigation(): void {
    this.elBtnNext.style.display = this.countPage === this.countTotal ? 'none' : 'block';

    if(this.isEnd) {
      if(this.elInterval) this.elInterval.style.display = 'none';
      if(this.elBtnLast) this.elBtnLast.style.display = 'none';
    } else {
      if(this.elInterval) this.elInterval.style.display = 'block';
      if(this.elBtnLast) this.elBtnLast.style.display = 'block';
    }
  }

  changePage(index, isReset = false) {
    if(this.countTotal > this.countMaxVisible) {
      this.updatePage(index);
      if(isReset) this.listPageCurrent = this.listPageStart;
    }
    
    this.renderPages();
    this.changeNavigation();
    this.markPageBtn();
    this.el.dispatchEvent(this.eventChange);
  }

  init() {
    this.elBtnList.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.countPage = +btn.getAttribute('data-page');

        this.changePage(index);
      });
    });

    this.elBtnNext.addEventListener('click', () => {
      this.countPage++;
      const index = Array.from(this.elBtnList).findIndex(item => +item.getAttribute('data-page') === this.countPage);

      this.changePage(index);
    });

    this.elBtnLast?.addEventListener('click', () => {
      this.countPage = this.countTotal;

      this.changePage(this.countPage);
    });
  }

  reset() {
    this.countPage = 1;
    this.changePage(0, true);
  }
}