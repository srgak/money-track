"use strict";(self.webpackChunknovella=self.webpackChunknovella||[]).push([[823],{2823:(Z,s,l)=>{l.r(s),l.d(s,{PageSliderModule:()=>v});var d=l(9808),u=l(859),o=l(2382),e=l(4893);const g=["input"],p=["*"];let h=(()=>{class n{constructor(t,i){this.renderer2=t,this.elRef=i,this.el=i.nativeElement}setValueRange(t){this.renderer2.setProperty(this.elInputRange,"value",t||0);const i=(+t-this.rangeMin)/(this.rangeMax-this.rangeMin)*100;this.renderer2.setStyle(this.elStatusBar,"width",(i>100?100:i)+"%")}correctValue(t){t>this.rangeMax&&this.control.setValue(this.rangeMax),t<this.rangeMin&&this.control.setValue(this.rangeMin)}ngAfterContentInit(){this.elInput=this.inputRef.nativeElement,this.elInputRange=this.el.querySelector(".field-range__input"),this.elStatusBar=this.el.querySelector(".field-range__status-bar"),this.control=this.formControl.control,this.renderer2.setAttribute(this.elInput,"inputmode","numeric"),this.renderer2.addClass(this.elInput,"field__input"),setTimeout(()=>{this.setValueRange(this.control.value)}),this.renderer2.listen(this.elInputRange,"input",()=>{this.control.setValue(this.elInputRange.value)}),this.renderer2.listen(this.elInput,"blur",()=>{this.correctValue(this.control.value)}),this.renderer2.listen(this.elInput,"focus",()=>{this.correctValue(this.control.value)}),this.control.valueChanges.subscribe(t=>{this.setValueRange(t)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.Qsj),e.Y36(e.SBq))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ui-slider"]],contentQueries:function(t,i,c){if(1&t&&(e.Suo(c,g,5),e.Suo(c,o.u,5)),2&t){let a;e.iGM(a=e.CRH())&&(i.inputRef=a.first),e.iGM(a=e.CRH())&&(i.formControl=a.first)}},inputs:{rangeMin:"rangeMin",rangeMax:"rangeMax",labelMin:"labelMin",labelMax:"labelMax"},ngContentSelectors:p,decls:11,vars:4,consts:[[1,"field"],[1,"field__container"],[1,"field-range"],["type","range",1,"field-range__input",3,"min","max"],[1,"field-range__status-bar"],[1,"field-range-label"]],template:function(t,i){1&t&&(e.F$t(),e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.Hsn(2),e.TgZ(3,"div",2),e._UZ(4,"input",3),e._UZ(5,"span",4),e.qZA(),e.qZA(),e.TgZ(6,"div",5),e.TgZ(7,"span"),e._uU(8),e.qZA(),e.TgZ(9,"span"),e._uU(10),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("min",i.rangeMin)("max",i.rangeMax),e.xp6(4),e.hij(" ",i.labelMin," "),e.xp6(2),e.hij(" ",i.labelMax," "))},styles:[""]}),n})();var m=l(2454),f=l(2297);const M=[{path:"",component:(()=>{class n{constructor(){this.form=new o.cw({control1:new o.NI(5e5)})}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-page-slider"]],decls:6,vars:3,consts:[[1,"container",3,"formGroup"],[1,"row"],[1,"col-12"],["labelMin","\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e 50 000","labelMax","\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e 1 400 000",3,"rangeMin","rangeMax"],["type","text","mask","separator","thousandSeparator"," ","formControlName","control1","uiInputLabel","\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"],["input",""]],template:function(t,i){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"ui-slider",3),e._UZ(4,"input",4,5),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",i.form),e.xp6(3),e.Q6J("rangeMin",5e4)("rangeMax",14e5))},directives:[o._Y,o.JL,o.sg,h,m.hx,o.Fj,o.JJ,o.u,f.V],styles:[""]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.Bz.forChild(M)],u.Bz]}),n})();var S=l(9822);let v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.ez,C,S.n]]}),n})()}}]);