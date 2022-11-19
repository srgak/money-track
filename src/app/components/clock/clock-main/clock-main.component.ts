import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { DataClockCircle, DataClock, clockValuesHours, clockValuesMinute } from 'src/app/models/interfaces';
import { makeArray } from 'src/app/ui-kit/scripts/array';
import { Timer } from 'src/app/ui-kit/scripts/timer';
import { ClockArrowComponent } from '../clock-arrow/clock-arrow.component';

@Component({
  selector: 'app-clock-main',
  templateUrl: './clock-main.component.html',
  styleUrls: ['./clock-main.component.less']
})
export class ClockMainComponent implements OnInit, AfterViewInit {
  @ViewChild('clockCap') public clockCap: ElementRef;
  @ViewChild('arrowSecond') public arrowSecond: ClockArrowComponent;
  @ViewChild('gearHour') public gearHour: ElementRef;
  @ViewChildren('chain') public chainList: QueryList<ElementRef>;
  @HostListener('window:resize') private resizeClock(): void {
    const width = this.document.documentElement.clientWidth;
    const height = this.document.documentElement.clientHeight;
    if(width < height) {
      this.renderer2.setStyle(this.elRef.nativeElement, 'transform', `translate(-50%, -50%) scale(${width / (900 + 100)})`);
    } else {
      this.renderer2.setStyle(this.elRef.nativeElement, 'transform', `translate(-50%, -50%) scale(${height / (900 + 100)})`);
    }
  }

  public second$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public minute$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public hour$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private readonly listHourCount: DataClockCircle[] = makeArray(12, (_, i): DataClockCircle => {
    return {
      angle: i * 30,
      value: clockValuesHours[`val${i}`],
      type: clockValuesHours[`val${i}`] ? 'number' : 'dash'
    }
  });
  private readonly listMinuteCount: DataClockCircle[] = makeArray(60, (_, i): DataClockCircle => {
    return {
      angle: i * 6,
      value: clockValuesMinute[`val${i}`],
      type: clockValuesMinute[`val${i}`] ? 'number' : 'dash'
    }
  });
  private readonly listSecondCount: DataClockCircle[] = makeArray(60, (_, i): DataClockCircle => {
    return {
      angle: i * 6,
      value: '',
      type: 'dash'
    }
  });
  public readonly dataClock: DataClock[] = [
    {
      items: this.listHourCount,
      type: 'hour'
    },
    {
      items: this.listMinuteCount,
      type: 'minute'
    },
    {
      items: this.listSecondCount,
      type: 'second'
    }
  ];
  public readonly listMinuteDetail: number[] = makeArray(60, (_, i) => (i + 1) * 6);
  public timer: Timer = new Timer();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private readonly renderer2: Renderer2,
    private elRef: ElementRef
  ) { }

  private activateElements(timing: number = 1000, ...elements: Element[]): void {
    elements.forEach(el => {
      this.renderer2.addClass(el, 'active');
      setTimeout(() => {
        this.renderer2.removeClass(el, 'active');
      }, timing);
    });
  }

  public changeSecond(): void {
    this.second$.next(this.second$.value + 1);
    this.activateElements(
      600,
      this.arrowSecond.elRef.nativeElement
    );
  }

  public changeMinute(val: number = this.minute$.value): void {
    const activeChain = Array.from(this.chainList)[59 - val];
    this.minute$.next(val >= 59 ? 0 : val + 1);
    this.activateElements(
      1000,
      activeChain.nativeElement
    );
  }

  public changeHour(val: number = this.hour$.value): void {
    this.hour$.next(val + 1);
    this.activateElements(
      2500,
      this.gearHour.nativeElement
    );
  }

  private updateTime(): void {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    this.renderer2.setStyle(this.clockCap.nativeElement, 'transform', `rotateX(0deg)`);
    this.changeMinute(minutes - 1);
    this.changeHour((hours > 12 ? hours - 12 : hours) - 1);
    this.timer.stop();
    this.timer.start(seconds);
    setTimeout(() => {
      this.renderer2.addClass(this.clockCap.nativeElement, 'open');
    }, 3000);
  }

  ngOnInit(): void {
    this.resizeClock();
  }
  ngAfterViewInit(): void {
    this.updateTime();
  }
}
