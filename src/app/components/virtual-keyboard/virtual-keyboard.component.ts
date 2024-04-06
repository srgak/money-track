import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from "@angular/core";

export interface KeyboardKeyData {
  action: "print" | "backspace" | null;
  value?: number;
}

@Component({
  selector: "app-virtual-keyboard",
  templateUrl: "./virtual-keyboard.component.html",
  styleUrls: ["./virtual-keyboard.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualKeyboardComponent implements OnInit {
  @Output() public pressedKey = new EventEmitter<KeyboardKeyData>();

  public keys: KeyboardKeyData[][] = [
    [
      {
        action: "print",
        value: 1,
      },
      {
        action: "print",
        value: 2,
      },
      {
        action: "print",
        value: 3,
      },
    ],
    [
      {
        action: "print",
        value: 4,
      },
      {
        action: "print",
        value: 5,
      },
      {
        action: "print",
        value: 6,
      },
    ],
    [
      {
        action: "print",
        value: 7,
      },
      {
        action: "print",
        value: 8,
      },
      {
        action: "print",
        value: 9,
      },
    ],
    [
      {
        action: null,
      },
      {
        action: "print",
        value: 0,
      },
      {
        action: "backspace",
      },
    ],
  ];

  constructor() {}

  ngOnInit(): void {}
}
