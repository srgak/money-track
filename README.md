# Money-track
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

## Библиотеки

### additional
Состоит из чекбокса и дополнительного контента. Последний описывается внутри тегов компонента и показывается при значении checked у чекбокса. В случае если дополнительным контентом являются поля реактивной формы, то в тег компонента можно прописывать formGroupName, чтобы обернуть дополнительные контролы в отдельную группу. Из сторонних библиотек использует `NzCheckboxModule`.
Параметры для передачи отсутствуют.
Примеры использования:
1. При нажатии на чекбокс появляется/скрывается дополнительное поле с выпадающим списком
```html
<input-additional class="row align-items-center"
  formGroupName="capitalization"
  (onResetControls)="resetControls($event, 'capitalization')">
  <div class="col-6">
    <input-select class="row input"
      formControlName="periodicity"
      placeholder="Выберите из списка"
      label="Периодичность"
      [list]="data.depositPeriodicity"></input-select>
    <val-errors controlName="periodicity"></val-errors>
  </div>
</input-additional>
```

### autocomplete
Текстовое поле с возможностью автозаполнения. Список для выбора вариантов в качетсве заполнения приходит от бэк, а запрос отправляется при вводе в поле текста. Также можно ввести что-то своё, если нет преложенных вариантов. Из сторонних библиотек использует `rise-input`, `transliteration`, `NzInputModule`, `NzAutocompleteModule`.
Параметры для передачи:
|Название|Описание|
| ----------- | ----------- |
|formControl|Название контрола|
|placeholder|Надпись плейсхолдера для инпута|
|label|Название поля|
|reqLink|Ссылка запроса на бэк|
|lang|Наименование языка для транслитерации|
Примеры использования:
1. Поле с вводом имени
```html
<input-autocomplete class="input"
  formControlName="firstName"
  placeholder="Иван"
  label="Имя"
  [reqLink]="ссылка-для-формрования-списка"></input-autocomplete>
```
2. Поле с установкой языка транслитерации
```html
<input-autocomplete class="input"
  formControlName="email"
  placeholder="ya@ya.ru"
  label="Электронная почта"
  lang="en"
  [reqLink]="ссылка-для-формрования-списка"></input-autocomplete>
```

### chart
Библиотека для построения графиков/диаграмм. Из сторонних библиотек использует `chart.js`.
Параметры/методы для передачи:
|Название|Описание|
| ----------- | ----------- |
|settings|Параметры для построения графика/диграммы. Подробнее о самих параметрах можго узнать в документации cahrt.js|
|update|Метод для обновления графика/диаграммы. Следует вызывать при изменении settings|
Примеры использования:
1. Круговая диаграмма
* разметка
```html
<lib-chart #chart
  [settings]="chartSettings"></lib-chart>
```
* логика
```typescript
//занести данные компонента в локальное свойство
@ViewChild('chart', { static: false }) chart: ChartComponent;
//задать настройки
public chartSettings = {
  type: 'doughnut',
  data: {
    //остальные данные
  }
};
//вызов методов
this.chart.update();
```

### date-picker
Поле с выбором даты. Из сторонних библиотек использует `rise-input`, `NzDatePicker`.
Параметры для передачи:
|Название|Описание|
| ----------- | ----------- |
|formControl|Название контрола|
|placeholder|Надпись плейсхолдера для инпута|
|label|Название поля|
|disabledDate|Функция, указывающая дату, которую нельзя выбрать|
Примеры использования:
1. Выбор даты
```html
<input-date-picker class="input"
  formControlName="date"
  [disabledDate]="disableNextDate"
  label="Выберите дату"
  placeholder="02.02.2022"></input-date-picker>
```

### field
Обычное текстовое поле. Из сторонних библиотек использует `rise-input`, `NzInput`, `ngx-mask`. 
Параметры для передачи:
|Название|Описание|
| ----------- | ----------- |
|formControl|Название контрола|
|placeholder|Надпись плейсхолдера для инпута|
|mask|Маска для ограничения ввода определённых символов|
|label|Название поля|
|patterns|Паттерн(шаблон) для маски|
|maskSuffix|Строка, отображающееся после введённого значения|
|maskThousand|Разделить между разрядами числа каждые 3 разпяда|
|readonly|Установка инпута в положение только для чтения|
Примеры использования:
1. Можно вводить только латинские символы
```html
<lib-field class="input"
  formControlName="login"
  placeholder="loginName"
  mask="S*"
  label="Логин"></lib-field>
```

2. Можно вводить только числа, опционально с двумя знаками после запятой. Каждые 3 разряда отделяются пробелом.
```html
<lib-field class="input"
  formControlName="price"
  placeholder="1000"
  mask="separator.2"
  maskThousand=" "
  label="Начальная сумма"></lib-field>
```

3. Можно вводить только кириллические символы. Для этого передаётся паттерн с регулярным выражением.
* разметка
```html
<lib-field class="input"
  formControlName="comment"
  placeholder="Цитирую известного философа"
  mask="c*"
  [patterns]="customPatternList[0]"
  label="Описание"></lib-field>
```
* логика
```typescript
public customPatternList: any[] = [
  {
    c: {pattern: new RegExp(/[а-яА-Я\s-]/)}
  }
];
```

### password
Текстовое поле, предназначенное для ввода пароля. При вводе текст маскируется точками, но, используя кнопку на поле, можно по желанию показывать/скрывать символы. Из сторонних библиотек использует `rise-input`, `NzInput`.
Параметры для передачи:
|Название|Описание|
| ----------- | ----------- |
|formControl|Название контрола|
|placeholder|Надпись плейсхолдера для инпута|
|label|Название поля|
Примеры использования:
1. Ввод пароля
```html
<input-password class="input"
  formControlName="password"
  placeholder="123"
  label="Пароль"></input-password>
```

### select
Выпадающий список с выбором одонго из предложенных вариантов. Допускается выбор одного или нескольких особых вариантов, показывающий(-ие) дополнительные поля. В таком случае элемент списка должен иметь свойство otherBlock с определённым значением. Из сторонних библиотек использует `rise-input`, `NzSelect`.
Параметры и события для передачи:
|Название|Описание|
| ----------- | ----------- |
|formControl|Название контрола|
|placeholder|Надпись плейсхолдера для инпута|
|label|Название поля|
|list|Сам список, представляющий массив объектов со свойствами value и name строкового типа|
|onChangeTemplate|Событие, вызывающееся при смене элемента селекта. При наличии у выбранного элемента свойства otherBlock, его значение передаётся в родительский компонент|
Примеры использования:
1. Список с выбром
* разметка
```html
<input-select class="row input"
  formControlName="currency"
  placeholder="Выберите из списка"
  label="Валюта"
  [list]="list">
</input-select>
```
* логика
```typescript
public list = [
  {
    name: 'Российский рубль (₽)',
    value: '₽'
  },
  {
    name: 'Американский доллар ($)',
    value: '$'
  }
];
```

2. Список со специальными вариантами. При определённом выборе добавляется то или иное поле.
* разметка
```html
<input-select class="row input"
  formGroupName="contact"
  placeholder="Выберите из списка"
  label="Обратная связь"
  [list]="list"
  (onChangeTemplate)="setTemplate($event)">
  <ng-container [ngSwitch]="currentTemplate">
    <div class="col-12"
      *ngSwitchCase="'contactPhone'">
      <lib-field class="input"
        formControlName="phone"
        placeholder="+7 (000) 000-00-00"
        mask="(000) 000-00-00"
        maskPrefix="+7"
        label="Номер телефона"></lib-field>
    </div>
    <div class="col-12"
      *ngSwitchCase="'contactVK'">
      <lib-field class="input"
        formControlName="vk"
        placeholder="id123"
        mask="A*"
        label="Id во вконтакте"></lib-field>
    </div>
  </ng-container>
</input-select>
```
* логика
```typescript
public currentTemplate: string; //наименование отображаемого шаблона
public setTemplate(name: string) {
  this.formGroup.get('contact').reset(); //очистить форм-группу/контрол
  this.currentTemplate = name;
}
public list = [
  {
    name: 'Не указывать',
    value: 'none'
  },
  {
    name: 'Мобильный телефон',
    value: 'phone',
    otherBlock: 'contactPhone'
  },
  {
    name: 'ВК',
    value: 'vk',
    otherBlock: 'contactVK'
  }
];
```

### rise-input
Директива для поднятия названия поля формы. Используется только в других библиотеках с инпутами. Подключается через html-атрибут activeInput.
Параметры для передачи:
|Название|Описание|
| ----------- | ----------- |
|activeInput|Формулировка плейсхолдера|
Примеры использования:
1. Подключение директивы с установкой своего плейсхолдера
```html
<div class="input__field">
  <input activeInput="placeholder">
  <label>label name</label>
</div>
```

### transliteration
Транслитерация символов при вводе в поле. Работает по принципу замены символа на клавиатуре с английскую на противополжную раскладку. Например, если ввести "cthutq", то при вводе символы преобразуются в "сергей". Или "руддщ", то в "hello". Подключается через html-атрибут transliteration.
Параметры для передачи:
|Название|Описание|
| ----------- | ----------- |
|transliteration|Именование языка, в который необходимо преобразовывать вводимые символы. По умолчанию стоит значение `ru`|
Примеры использования:
1. Подключение директивы
```html
<div class="input__field">
  <input transliteration>
  <label>label name</label>
</div>
```
2. Подключение директивы с установкой языка
```html
<div class="input__field">
  <input transliteration="en">
  <label>label name</label>
</div>
```