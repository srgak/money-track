import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'input-additional',
  templateUrl: './additional.component.html',
  styles: []
})
export class AdditionalComponent implements OnInit {

  @Input() label: string;
  @Input() isReverse: boolean = false;
  @Input() controlsGroup: AbstractControl;

  constructor() { }

  public isOpen: boolean = false;
  public isChecked: boolean;

  public change(): void {
    this.isOpen = !this.isOpen;
    if(!this.isOpen) this.controlsGroup.reset();
  }

  ngOnInit(): void {
    this.isChecked = this.isReverse;
  }

}
