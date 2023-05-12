"use strict";(self.webpackChunknovella=self.webpackChunknovella||[]).push([[358],{3358:(S,r,s)=>{s.r(r),s.d(r,{PageAutofocusModule:()=>T});var m=s(9808),a=s(859),i=s(2382),t=s(4893),f=s(727);const d=["*"];let p=(()=>{class u{constructor(o){this.elRef=o,this.isSkip=!1,this.onMark=new t.vpe,this.subs=new f.w0}targetField(o="focus"){switch(o){case"focus":this.elInput.focus(),this.elInput.click();break;case"blur":this.elInput.blur()}}ngOnInit(){}ngAfterContentInit(){this.control=this.formControl.control,this.isSkip||this.subs.add(this.control.valueChanges.subscribe(o=>{o&&this.control.valid&&this.onMark.emit(this.id)}))}ngAfterViewInit(){this.elInput=this.elRef.nativeElement.querySelector("input")}ngOnDestroy(){this.subs.unsubscribe()}}return u.\u0275fac=function(o){return new(o||u)(t.Y36(t.SBq))},u.\u0275cmp=t.Xpm({type:u,selectors:[["ui-autofocus-mark"]],contentQueries:function(o,n,c){if(1&o&&t.Suo(c,i.u,5),2&o){let l;t.iGM(l=t.CRH())&&(n.formControl=l.first)}},inputs:{isSkip:"isSkip"},ngContentSelectors:d,decls:1,vars:0,template:function(o,n){1&o&&(t.F$t(),t.Hsn(0))},styles:[""],changeDetection:0}),u})();const g=["*"];let C=(()=>{class u{constructor(){this.subs=new f.w0}ngOnInit(){}ngAfterContentInit(){this.focusMarkList.forEach((o,n,c)=>{o.id=n,this.subs.add(o.onMark.subscribe(l=>{try{c[l+1].targetField()}catch(w){o.targetField("blur")}}))})}ngOnDestroy(){this.subs.unsubscribe()}}return u.\u0275fac=function(o){return new(o||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["ui-autofocus"]],contentQueries:function(o,n,c){if(1&o&&t.Suo(c,p,4),2&o){let l;t.iGM(l=t.CRH())&&(n.focusMarkList=l)}},ngContentSelectors:g,decls:1,vars:0,template:function(o,n){1&o&&(t.F$t(),t.Hsn(0))},styles:[""],changeDetection:0}),u})();const h=["input"],A=["*"];let v=(()=>{class u{constructor(o){this.renderer2=o}ngOnInit(){}ngAfterContentInit(){this.elInput=this.inputRef.nativeElement,this.renderer2.addClass(this.elInput,"field__input")}}return u.\u0275fac=function(o){return new(o||u)(t.Y36(t.Qsj))},u.\u0275cmp=t.Xpm({type:u,selectors:[["ui-field"]],contentQueries:function(o,n,c){if(1&o&&t.Suo(c,h,5),2&o){let l;t.iGM(l=t.CRH())&&(n.inputRef=l.first)}},ngContentSelectors:A,decls:3,vars:0,consts:[[1,"field"],[1,"field__container"]],template:function(o,n){1&o&&(t.F$t(),t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.Hsn(2),t.qZA(),t.qZA())},styles:[""]}),u})();var Z=s(2454),F=s(2297),b=s(6304),y=s(721);const I=[{path:"",component:(()=>{class u{constructor(){this.form=new i.cw({control1:new i.NI(null),control2:new i.NI(null),control3:new i.NI(null),control4:new i.NI(null)}),this.list=[{value:1,label:"\u0424\u0442\u043e\u0440\u043e\u0433\u0440\u0430\u0444\u0438\u044f"},{value:2,label:"\u041f\u043b\u0430\u0432\u0430\u043d\u0438\u0435"},{value:3,label:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},{value:4,label:"\u0420\u0438\u0441\u043e\u0432\u0430\u043d\u0438\u0435"},{value:5,label:"\u0412\u044b\u0448\u0438\u0432\u043a\u0430 \u043a\u0440\u0435\u0441\u0442\u043e\u043c"},{value:6,label:"Disabled",disabled:!0}]}ngOnInit(){}}return u.\u0275fac=function(o){return new(o||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-page-autofocus"]],decls:21,vars:3,consts:[[1,"container"],[1,"row",3,"formGroup"],[1,"col-12"],[1,"col-md-6","col-12"],["type","text","formControlName","control1","uiInputLabel","\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f","mask","00.00.0000",3,"dropSpecialCharacters"],["input",""],["formControlName","control2",3,"list"],["type","text","uiInputLabel","\u0423\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0435","uiInputHelp","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u043e \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430"],["type","text","formControlName","control3","uiInputLabel","\u0421\u0435\u0440\u0438\u044f \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430","mask","0{4}"],["type","text","formControlName","control4","uiInputLabel","\u041d\u043e\u043c\u0435\u0440 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430","mask","0{6}"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"ui-autofocus",1),t.TgZ(2,"div",2),t.TgZ(3,"h2"),t._uU(4,"Autofocus component"),t.qZA(),t.qZA(),t.TgZ(5,"ui-autofocus-mark",3),t.TgZ(6,"ui-field"),t._UZ(7,"input",4,5),t.qZA(),t.qZA(),t.TgZ(9,"ui-autofocus-mark",3),t.TgZ(10,"ui-select",6),t._UZ(11,"input",7,5),t.qZA(),t.qZA(),t.TgZ(13,"ui-autofocus-mark",3),t.TgZ(14,"ui-field"),t._UZ(15,"input",8,5),t.qZA(),t.qZA(),t.TgZ(17,"ui-autofocus-mark",3),t.TgZ(18,"ui-field"),t._UZ(19,"input",9,5),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(1),t.Q6J("formGroup",n.form),t.xp6(6),t.Q6J("dropSpecialCharacters",!1),t.xp6(3),t.Q6J("list",n.list))},directives:[C,i.JL,i.sg,p,v,i.Fj,Z.hx,i.JJ,i.u,F.V,b.z,y.X],styles:[""]}),u})()}];let k=(()=>{class u{}return u.\u0275fac=function(o){return new(o||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[[a.Bz.forChild(I)],a.Bz]}),u})();var M=s(9822);let T=(()=>{class u{}return u.\u0275fac=function(o){return new(o||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[[m.ez,k,M.n]]}),u})()}}]);