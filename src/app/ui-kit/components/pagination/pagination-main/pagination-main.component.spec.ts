import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationMainComponent } from './pagination-main.component';

describe('PaginationComponent', () => {
  let component: PaginationMainComponent;
  let fixture: ComponentFixture<PaginationMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
