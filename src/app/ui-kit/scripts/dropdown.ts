import { BehaviorSubject } from "rxjs";

export class Dropdown {
  private readonly elInput: HTMLInputElement;
  public readonly activeFlag$: BehaviorSubject<boolean>;
  private readonly closestString: string;

  constructor(elInput: HTMLInputElement, closestString?: string) {
    this.elInput = elInput;
    this.activeFlag$ = new BehaviorSubject<boolean>(false);
    this.closestString = closestString || '';
    this.init();
  }

  private init(): void {
    this.elInput.addEventListener('click', () => {
      addEventListener('click', this.boundClickHandler);
    })
  }

  private clickHandler(event: any): void {
    const el = event.target;

    if(this.closestString) {
      if(!el.closest(this.closestString) && el !== this.elInput) this.activeFlag$.next(false);
    } else {
      if(el !== this.elInput) this.activeFlag$.next(false);
    }
    if(el === this.elInput) this.activeFlag$.next(!this.activeFlag$.value);
    if(!this.activeFlag$.value) {
      this.elInput.blur();
      removeEventListener('click', this.boundClickHandler);
    }
  }

  private boundClickHandler = this.clickHandler.bind(this);
}