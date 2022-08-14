import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, OnDestroy, OnInit, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';
import { AutofocusMarkComponent } from '../autofocus-mark/autofocus-mark.component';

@Component({
  selector: 'ui-autofocus',
  templateUrl: './autofocus.component.html',
  styleUrls: ['./autofocus.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutofocusComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChildren(AutofocusMarkComponent) private focusMarkList: QueryList<AutofocusMarkComponent>;

  private subs: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    this.focusMarkList.forEach((item: AutofocusMarkComponent, index: number, arr: AutofocusMarkComponent[]) => {
      item.id = index;
      this.subs.add(
        item.onMark.subscribe(val => {
          try {
            arr[val + 1].targetField();
          } catch {
            item.targetField('blur');
          }
        })
      ); 
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
