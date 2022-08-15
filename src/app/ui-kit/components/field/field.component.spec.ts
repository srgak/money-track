import { TestBed } from "@angular/core/testing";
import { FieldComponent } from "./field.component";

describe('Компонент field', () => {
  let field;

  beforeEach(async () => {
    field = TestBed.createComponent(FieldComponent);
  });

  it('должен появиться компонент', () => {
    expect(field).toBeTruthy();
  });

  it('получен элемент поля', () => {
    const app = field.componentInstance;
    expect(app.elInput).toBeTruthy();
  });
});