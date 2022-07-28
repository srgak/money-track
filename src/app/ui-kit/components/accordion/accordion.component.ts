import { Component, Input, OnInit} from '@angular/core';
import { accordionAnimationList } from './accordion-animation';

@Component({
  selector: 'ui-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.less'],
  animations: accordionAnimationList
})
export class AccordionComponent implements OnInit {
  constructor() { }

  @Input() 
  public title: string;
  public isShowContent: boolean = false;

  public toggle = (): void => {
    this.isShowContent = !this.isShowContent;
  };

  

  ngOnInit(): void {
  }

}
