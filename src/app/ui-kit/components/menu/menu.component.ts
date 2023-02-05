import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { MenuMain } from '../../models/models';

@Component({
  selector: 'ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit, OnDestroy {
  @Input() public list!: MenuMain[];

  public isActive: boolean = false;
  private subs: Subscription = new Subscription();

  public toggleMenu(): void {
    this.isActive = !this.isActive;
  }

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subs.add(
      this.router.events.pipe(
        filter(event => event instanceof NavigationStart)
      )
      .subscribe(() => {
        this.isActive = false;
      })
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
