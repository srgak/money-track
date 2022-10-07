"use strict";(self.webpackChunknovella=self.webpackChunknovella||[]).push([[318],{3318:(q,u,r)=>{r.r(u),r.d(u,{PageDropdownDateModule:()=>J});var c=r(9808),m=r(9822),h=r(1196),d=r(2382),e=r(1223),D=r(727),g=r(1691),l=r(7405),y=r(9555);let f=(()=>{class n{constructor(){this.dayName={en:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ru:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u0412\u0441"],ja:["\u6708","\u706b","\u6c34","\u6728","\u91d1","\u571f","\u65e5"]},this.currentDayName={en:"Today",ru:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f",ja:"\u4eca\u65e5"}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),v=(()=>{class n{constructor(){this.onChange=new e.vpe}changeYear(t="prev"){switch(t){case"prev":this.date.previousYear();break;case"next":this.date.nextYear()}this.onChange.emit()}changeMonth(t="prev"){switch(t){case"prev":this.date.previousMonth();break;case"next":this.date.nextMonth()}this.onChange.emit()}ngOnInit(){}ngDoCheck(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ui-date-header"]],inputs:{date:"date"},outputs:{onChange:"onChange"},decls:16,vars:2,consts:[[1,"field-calendar__header"],[1,"field-calendar__change","field-calendar__change_prev"],[1,"field-calendar__change-year",3,"click"],[1,"field-calendar__change-month",3,"click"],[1,"field-calendar__info"],[1,"field-calendar__change","field-calendar__change_next"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"button",2),e.NdJ("click",function(){return a.changeYear()}),e._uU(3," << "),e.qZA(),e.TgZ(4,"button",3),e.NdJ("click",function(){return a.changeMonth()}),e._uU(5," < "),e.qZA(),e.qZA(),e.TgZ(6,"div",4),e.TgZ(7,"span"),e._uU(8),e.qZA(),e.TgZ(9,"span"),e._uU(10),e.qZA(),e.qZA(),e.TgZ(11,"div",5),e.TgZ(12,"button",3),e.NdJ("click",function(){return a.changeMonth("next")}),e._uU(13," > "),e.qZA(),e.TgZ(14,"button",2),e.NdJ("click",function(){return a.changeYear("next")}),e._uU(15," >> "),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(8),e.Oqu(a.date.nameMonth),e.xp6(2),e.Oqu(a.date.year))},styles:[""]}),n})();function C(n,o){if(1&n&&(e.TgZ(0,"div",5),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.hij(" ",t," ")}}const _=function(n){return{active:n}};function Z(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().chooseDay(s.value)}),e._uU(1),e.qZA()}if(2&n){const t=o.$implicit;e.Q6J("ngClass",e.VKq(3,_,t.active))("disabled",t.disabled),e.xp6(1),e.hij(" ",t.value," ")}}let T=(()=>{class n{constructor(){this.onChangeDay=new e.vpe}chooseDay(t){this.dayList.forEach(a=>a.active=!1),this.dayList.find(a=>a.value===t).active=!0,this.onChangeDay.emit(t)}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ui-date-body"]],inputs:{dayNameList:"dayNameList",dayList:"dayList"},outputs:{onChangeDay:"onChangeDay"},decls:5,vars:2,consts:[[1,"field-calendar__body"],[1,"field-calendar-week"],["class","field-calendar-week__day",4,"ngFor","ngForOf"],[1,"field-calendar-days"],["class","field-calendar-days__btn","type","button",3,"ngClass","disabled","click",4,"ngFor","ngForOf"],[1,"field-calendar-week__day"],["type","button",1,"field-calendar-days__btn",3,"ngClass","disabled","click"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.YNc(2,C,2,1,"div",2),e.qZA(),e.TgZ(3,"div",3),e.YNc(4,Z,2,5,"button",4),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngForOf",a.dayNameList),e.xp6(2),e.Q6J("ngForOf",a.dayList))},directives:[c.sg,c.mk],styles:[""]}),n})(),M=(()=>{class n{constructor(){this.onChange=new e.vpe}chooseDate(){this.onChange.emit()}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ui-date-footer"]],inputs:{currentDayName:"currentDayName"},outputs:{onChange:"onChange"},decls:3,vars:1,consts:[[1,"field-calendar__footer"],["type","button",1,"field-calendar__today-btn",3,"click"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"button",1),e.NdJ("click",function(){return a.chooseDate()}),e._uU(2),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Oqu(a.currentDayName))},styles:[""]}),n})();const p=["input"],b=[[["input"]]],w=function(n){return{active:n}};let N=(()=>{class n{constructor(t,a,i,s){this.locale=t,this.localeData=a,this.renderer2=i,this.datePipe=s,this.format="dd.MM.yyyy",this.viewNum=1,this.dayList=[],this.dayCurrMonthList=[],this.dayPrevMonthList=[],this.dayNextMonthList=[],this.control=new d.NI,this.subs=new D.w0,this.onTouched=()=>{},this.onChange=P=>{}}updateChanges(t){this.onChange(t)}registerOnChange(t){this.subs.add(this.control.valueChanges.subscribe(t))}registerOnTouched(t){this.onTouched=t}writeValue(t){this.control.setValue(t)}saveDate(){this.savedDate=new Date(+this.mainDate.year,+this.mainDate.month-1,+this.mainDate.day)}changeDay(t){this.mainDate.setDate(t||+this.mainDate.day),this.renderer2.setProperty(this.elInput,"value",this.datePipe.transform(this.mainDate,this.format)),this.control.setValue(this.mainDate),this.dropdown.activeFlag$.next(!1),this.saveDate()}getNextMonthDays(t){const a=(0,l.s)(this.mainDate);return a.nextMonth(),a.setDate(t),+a.day}getPrevMonthDay(t){const a=(0,l.s)(this.mainDate);return a.previousMonth(),a.setDate(a.daysInMonth-(t-1)),+a.day}getDays(t,a){const i=[];for(let s=1;s<=t;s++)switch(a){case"prev":i.push({value:this.getPrevMonthDay(s),disabled:!0});break;case"curr":i.push({value:s,disabled:!1,active:this.mainDate.isSame(this.savedDate)&&s===this.savedDate.getDate()});break;case"next":i.push({value:this.getNextMonthDays(s),disabled:!0})}return"prev"===a?i.reverse():i}setToday(){const t=new Date;this.mainDate.setFullYear(t.getFullYear()),this.mainDate.setMonth(t.getMonth()),this.mainDate.setDate(t.getDate()),this.changeDay(),this.renderDays()}renderDays(){const t=(0,l.s)(this.mainDate);this.dayCurrMonthList=this.getDays(this.mainDate.daysInMonth,"curr"),t.setDate(1),this.dayPrevMonthList=t.dayOfWeek>1?this.getDays(t.dayOfWeek-1,"prev"):[],t.setDate(t.daysInMonth),this.dayNextMonthList=t.dayOfWeek<7?this.getDays(7-t.dayOfWeek,"next"):[],this.dayList=[],this.dayList=this.dayList.concat(this.dayPrevMonthList).concat(this.dayCurrMonthList).concat(this.dayNextMonthList)}initDate(){this.mainDate=new l.M(this.control.value||new Date),this.mainDate.locale=this.locale,this.mainDate.resetTime(),this.saveDate(),this.renderDays()}ngOnInit(){}ngAfterContentInit(){this.initDate(),this.elInput=this.inputRef.nativeElement,this.dropdown=new y.L(this.elInput,".field-calendar"),this.renderer2.addClass(this.elInput,"field__input"),this.control.value&&setTimeout(()=>{this.renderer2.setProperty(this.elInput,"value",this.datePipe.transform(this.control.value,this.format))})}ngOnDestroy(){this.subs.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.y),e.Y36(f),e.Y36(e.Qsj),e.Y36(c.uU))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ui-date-main"]],contentQueries:function(t,a,i){if(1&t&&e.Suo(i,p,5),2&t){let s;e.iGM(s=e.CRH())&&(a.inputRef=s.first)}},inputs:{format:"format"},features:[e._Bn([{provide:d.JU,useExisting:(0,e.Gpc)(()=>n),multi:!0},{provide:c.uU}])],ngContentSelectors:p,decls:8,vars:9,consts:[[1,"field"],[1,"field__container"],[1,"field-calendar",3,"ngClass"],[3,"date","onChange"],[3,"dayNameList","dayList","onChangeDay"],[3,"currentDayName","onChange"]],template:function(t,a){1&t&&(e.F$t(b),e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.Hsn(2),e.qZA(),e.TgZ(3,"div",2),e.ALo(4,"async"),e.TgZ(5,"ui-date-header",3),e.NdJ("onChange",function(){return a.renderDays()}),e.qZA(),e.TgZ(6,"ui-date-body",4),e.NdJ("onChangeDay",function(s){return a.changeDay(s)}),e.qZA(),e.TgZ(7,"ui-date-footer",5),e.NdJ("onChange",function(){return a.setToday()}),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngClass",e.VKq(7,w,e.lcZ(4,5,a.dropdown.activeFlag$))),e.xp6(2),e.Q6J("date",a.mainDate),e.xp6(1),e.Q6J("dayNameList",a.localeData.dayName[a.locale])("dayList",a.dayList),e.xp6(1),e.Q6J("currentDayName",a.localeData.currentDayName[a.locale]))},directives:[c.mk,v,T,M],pipes:[c.Ov],styles:[""],changeDetection:0}),n})();var L=r(2454),A=r(2297);const k=[{path:"",component:(()=>{class n{constructor(){this.form=new d.cw({control1:new d.NI(null)})}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-page-dropdown-date"]],decls:6,vars:1,consts:[[1,"container",3,"formGroup"],[1,"row"],[1,"col-md-6","col-12"],["formControlName","control1"],["type","text","readonly","","mask","00.00.0000","uiInputLabel","\u0414\u0430\u0442\u0430"],["input",""]],template:function(t,a){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"ui-date-main",3),e._UZ(4,"input",4,5),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&e.Q6J("formGroup",a.form)},directives:[d._Y,d.JL,d.sg,N,d.JJ,d.u,L.hx,A.V],styles:[""]}),n})()}];let F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[h.Bz.forChild(k)],h.Bz]}),n})(),J=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[c.ez,F,m.n]]}),n})()}}]);