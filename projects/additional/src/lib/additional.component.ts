import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-additional',
  templateUrl: './additional.component.html',
  styles: []
})
export class AdditionalComponent implements OnInit {

  @Output() onResetControls = new EventEmitter<boolean>();

  constructor() { }

  public isOpen: boolean = false;

  public change(): void {
    this.onResetControls.emit(this.isOpen);
  }

  ngOnInit(): void {
  }

}
