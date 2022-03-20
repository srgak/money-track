import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

enum keyList {
  q = 'й',
  w = 'ц',
  e = 'у',
  r = 'к',
  t = 'е',
  y = 'н',
  u = 'г',
  i = 'ш',
  o = 'щ',
  p = 'з',
  '[' = 'х',
  ']' = 'ъ',
  a = 'ф',
  s = 'ы',
  d = 'в',
  f = 'а',
  g = 'п',
  h = 'р',
  j = 'о',
  k = 'л',
  l = 'д',
  ';' = 'ж',
  '\'' = 'э',
  z = 'я',
  x = 'ч',
  c = 'с',
  v = 'м',
  b = 'и',
  n = 'т',
  m = 'ь',
  '\,' = 'б',
  '\.' = 'ю',
  '`' = 'ё',
  '\\' = 'ё'
};
@Directive({
  selector: '[transliteration]'
})
export class TransliterationDirective implements AfterViewInit {
  constructor(private el: ElementRef, private control: NgControl) {}

  private input = this.el.nativeElement;

  @HostListener('input', ['$event'])
  change(event) {
    this.input.value = this.translate(this.input.value, event.data);
    this.control.control.setValue(this.input.value);
  }

  private translate(value: string, key: string) {
    return key 
      ? value.substring(0, value.length - 1) + (keyList[key] || '')
      : value;
  }

  ngAfterViewInit(): void {
    this.input = this.input.children.length ? this.input.querySelector('input') : this.input;
  }
}