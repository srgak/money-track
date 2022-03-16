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
    <input-select formControlName="periodicity"
      placeholder="Выберите из списка"
      label="Периодичность"
      [list]="data.depositPeriodicity"></input-select>
    <val-errors controlName="periodicity"></val-errors>
  </div>
</input-additional>
```

### autocomplete
Текстовое поле с возможностью автозаполнения. Список для выбора вариантов в качетсве заполнения приходит от бэк, а запрос отправляется при вводе в поле текста. Если ввести что-то своё и не выбрать вариант из предложенного - при блюре поля оно очистится. Из сторонних библиотек использует `rise-input`, `NzSelect`.
Параметры для передачи:
|Название|Описание|
| ----------- | ----------- |
|formControl|Название контрола|
|placeholder|Надпись плейсхолдера для инпута|
|label|Название поля|
|reqLink|Ссылка запроса на бэк|
Примеры использования:
1. Поле с вводом имени
```html
<input-autocomplete formControlName="firstName"
  placeholder="Иван"
  label="Имя"
  [reqLink]="reqLinkList.firstName"></input-autocomplete>
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
<input-date-picker formControlName="date"
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
<lib-field formControlName="login"
  placeholder="loginName"
  mask="S*"
  label="Логин"></lib-field>
```

2. Можно вводить только числа, опционально с двумя знаками после запятой. Каждые 3 разряда отделяются пробелом.
```html
<lib-field formControlName="price"
  placeholder="1000"
  mask="separator.2"
  maskThousand=" "
  label="Начальная сумма"></lib-field>
```

3. Можно вводить только кириллические символы. Для этого передаётся паттерн с регулярным выражением.
```html
<lib-field formControlName="comment"
  placeholder="Цитирую известного философа"
  mask="c*"
  [patterns]="data.customPatternList[0]"
  label="Описание"></lib-field>
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
<input-password formControlName="password"
  placeholder="123"
  label="Пароль"></input-password>
```

### select
Выпадающий список с выбором одонго из предложенных вариантов. Из сторонних библиотек использует `rise-input`, `NzSelect`.
Параметры для передачи:
|Название|Описание|
| ----------- | ----------- |
|formControl|Название контрола|
|placeholder|Надпись плейсхолдера для инпута|
|label|Название поля|
|list|Сам список, представляющий массив объектов со свойствами value и name строкового типа|
Примеры использования:
1. Список с выбром
```html
<input-select formControlName="type"
  placeholder="Выберите из списка"
  label="Вид счёта"
  [list]="data.moneBoxList"></input-select>
```

### rise-input
Директива для поднятия названия поля формы. Используется только в других библиотеках с инпутами.
Параметры для передачи:
|Название|Описание|
| ----------- | ----------- |
|activeInput|Формулировка плейсхолдера|
