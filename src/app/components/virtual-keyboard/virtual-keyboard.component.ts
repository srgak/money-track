import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "app-virtual-keyboard",
  templateUrl: "./virtual-keyboard.component.html",
  styleUrls: ["./virtual-keyboard.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualKeyboardComponent implements OnInit {
  @Output() public pressedKey = new EventEmitter<number | string>();

  public keys = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["empty", 0, "backspace"],
  ];

  constructor() {}

  ngOnInit(): void {}
}
