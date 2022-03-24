import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

enum keyListRu {
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
enum keyListEn {
  й = 'q',
  ц = 'w',
  у = 'e',
  к = 'r',
  е = 't',
  н = 'y',
  г = 'u',
  ш = 'i',
  щ = 'o',
  з = 'p',
  х = '[',
  ъ = ']',
  ф = 'a',
  ы = 's',
  в = 'd',
  а = 'f',
  п = 'g',
  р = 'h',
  о = 'j',
  л = 'k',
  д = 'l',
  ж = ';',
  э = '\'',
  я = 'z',
  ч = 'x',
  с = 'c',
  м = 'v',
  и = 'b',
  т = 'n',
  ь = 'm',
  б = '\,',
  ю = '\.',
  ё = '`'
};
@Directive({
  selector: '[transliteration]'
})
export class TransliterationDirective {
  constructor(private el: ElementRef, private control: NgControl) {}

  private input = this.el.nativeElement;

  @Input('transliteration') public lang: string = 'ru';
  @HostListener('input', ['$event'])
  change(event) {
    this.control.control.setValue(this.translate(this.input.value, event.data));
  }

  private translate(value: string, key: string) {
    return key 
      ? value.substring(0, value.length - 1) + ((this.lang === 'en' ? keyListEn[key] : keyListRu[key]) || key)
      : value;
  }
}