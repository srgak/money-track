import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControlName } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ui-autofocus-mark',
  templateUrl: './autofocus-mark.component.html',
  styleUrls: ['./autofocus-mark.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutofocusMarkComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
  @ContentChild(FormControlName) private formControl: FormControlName;
  @Input() isSkip: boolean = false;

  public id: number;
  private control: AbstractControl;
  private elInput: HTMLInputElement;
  public onMark: EventEmitter<number> = new EventEmitter();
  private subs: Subscription = new Subscription();

  constructor(
    private elRef: ElementRef
  ) {}

  public targetField(action: 'blur' | 'focus' = 'focus'): void {
    switch(action) {
      case 'focus':
        this.elInput.focus();
        this.elInput.click();
        break;
      case 'blur':
        this.elInput.blur();
        break;
    }
  }

  ngOnInit(): void {

  }
  ngAfterContentInit(): void {
    this.control = this.formControl.control;
    
    if(!this.isSkip) {
      this.subs.add(
        this.control.valueChanges.subscribe(val => {
          if(val && this.control.valid) {
            this.onMark.emit(this.id);
          }
        })
      );
    }
  }
  ngAfterViewInit(): void {
    this.elInput = this.elRef.nativeElement.querySelector('input');
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
