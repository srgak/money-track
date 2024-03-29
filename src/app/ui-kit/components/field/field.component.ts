import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'ui-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.less']
})
export class FieldComponent implements OnInit, AfterContentInit {
  @ContentChild('input') private inputRef!: ElementRef;

  private elInput!: Element;
  
  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
    
  }
  ngAfterContentInit(): void {
    this.elInput = this.inputRef.nativeElement;
    this.renderer2.addClass(this.elInput, 'field__input');
  }

}
