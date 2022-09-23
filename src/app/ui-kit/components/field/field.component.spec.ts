import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FieldComponent } from "./field.component";

describe('Тестирование компонента field', () => {
  @Component({
    template: `
      <ui-field>
        <input type="text"
          #input
          placeholder="Пример">
      </ui-field>
    `
  })
  class TestComponent {}

  let componentTest: TestComponent;
  let componentField: FieldComponent;
  let fixtureTest: ComponentFixture<TestComponent>;
  let elInput: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldComponent, TestComponent]
    });

    fixtureTest = TestBed.createComponent(TestComponent);
    componentField = fixtureTest.debugElement.query(By.css('ui-field')).componentInstance;
    componentTest = fixtureTest.componentInstance;
    elInput = fixtureTest.debugElement.query(By.css('input'));
    
    fixtureTest.detectChanges();
  });

  it('Создалось', () => {
    expect(componentField).toBeTruthy();
  });

  it('Есть элемент поля', () => {
    expect(elInput).toBeDefined();
  });

  it('Есть класс для элемента поля', () => {
    expect(elInput.nativeElement).toHaveClass('field__input');
  });
});