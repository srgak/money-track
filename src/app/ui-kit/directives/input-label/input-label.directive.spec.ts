import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { FieldComponent } from "../../components/field/field.component";
import { InputLabelDirective } from "./input-label.directive";

fdescribe('Тестирование директивы input-label', () => {
  @Component({
    template: `
      <ui-field>
        <input type="text"
          #input
          [formControl]="control"
          uiInputLabel="Название поля">
      </ui-field>
      <ui-field>
        <input type="text"
          #input
          [formControl]="control2"
          required
          uiInputLabel="Обязательное поле">
      </ui-field>
    `
  })
  class TestComponent {
    public control: FormControl = new FormControl();
    public control2: FormControl = new FormControl();
  }

  let fixtureTest: ComponentFixture<TestComponent>;
  let directiveList: DebugElement[];
  let elField: DebugElement;
  let elInput: DebugElement;
  let elLabel: DebugElement[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputLabelDirective, TestComponent, FieldComponent],
      imports: [ReactiveFormsModule]
    });

    fixtureTest = TestBed.createComponent(TestComponent);
    directiveList = fixtureTest.debugElement.queryAll(By.directive(InputLabelDirective));
    elField = fixtureTest.debugElement.query(By.css('.field'));
    elInput = fixtureTest.debugElement.query(By.css('input'));

    fixtureTest.detectChanges();
    elLabel = fixtureTest.debugElement.queryAll(By.css('label'));
  });

  it('Создалось', () => {
    expect(directiveList).toBeTruthy();
  });

  it('Наличие обязательного поля', () => {
    const requField = directiveList[1].injector.get(InputLabelDirective) as InputLabelDirective;

    expect(requField.required).toBeDefined();
  });

  it('У каждого поля есть свой label', () => {
    directiveList.forEach((item, index) => {
      const label = elLabel[index];
      const itemDir = item.injector.get(InputLabelDirective) as InputLabelDirective;

      expect(label).toBeDefined();
      expect(label.nativeElement.innerHTML).toBe(itemDir.labelText);
    });
  });

  it('Работает фокус и добавлен класс active', () => {
    elInput.triggerEventHandler('focus', null);
    expect(elField.nativeElement).toHaveClass('active');
  });

  it('Работает блюр и убран класс active', () => {
    elInput.triggerEventHandler('blur', null);
    expect(elField.nativeElement).not.toHaveClass('active');
  });
});