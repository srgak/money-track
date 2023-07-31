"use strict";(self.webpackChunknovella=self.webpackChunknovella||[]).push([[327],{3327:(F,a,e)=>{e.r(a),e.d(a,{PageAutofocusModule:()=>M});var m=e(9808),r=e(1196),s=e(2382),t=e(1223),f=e(727);const g=["*"];let p=(()=>{class o{constructor(u){this.elRef=u,this.isSkip=!1,this.onMark=new t.vpe,this.subs=new f.w0}targetField(u="focus"){switch(u){case"focus":this.elInput.focus(),this.elInput.click();break;case"blur":this.elInput.blur()}}ngOnInit(){}ngAfterContentInit(){this.control=this.formControl.control,this.isSkip||this.subs.add(this.control.valueChanges.subscribe(u=>{u&&this.control.valid&&this.onMark.emit(this.id)}))}ngAfterViewInit(){this.elInput=this.elRef.nativeElement.querySelector("input")}ngOnDestroy(){this.subs.unsubscribe()}}return o.\u0275fac=function(u){return new(u||o)(t.Y36(t.SBq))},o.\u0275cmp=t.Xpm({type:o,selectors:[["ui-autofocus-mark"]],contentQueries:function(u,l,i){if(1&u&&t.Suo(i,s.u,5),2&u){let c;t.iGM(c=t.CRH())&&(l.formControl=c.first)}},inputs:{isSkip:"isSkip"},ngContentSelectors:g,decls:1,vars:0,template:function(u,l){1&u&&(t.F$t(),t.Hsn(0))},styles:[""],changeDetection:0}),o})();const d=["*"];let A=(()=>{class o{constructor(){this.subs=new f.w0}ngOnInit(){}ngAfterContentInit(){this.focusMarkList.forEach((u,l,i)=>{u.id=l,this.subs.add(u.onMark.subscribe(c=>{try{i[c+1].targetField()}catch(T){u.targetField("blur")}}))})}ngOnDestroy(){this.subs.unsubscribe()}}return o.\u0275fac=function(u){return new(u||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["ui-autofocus"]],contentQueries:function(u,l,i){if(1&u&&t.Suo(i,p,4),2&u){let c;t.iGM(c=t.CRH())&&(l.focusMarkList=c)}},ngContentSelectors:d,decls:1,vars:0,template:function(u,l){1&u&&(t.F$t(),t.Hsn(0))},styles:[""],changeDetection:0}),o})();var h=e(3314),C=e(2454),v=e(2297),Z=e(6304),b=e(721);const y=[{path:"",component:(()=>{class o{constructor(){this.form=new s.cw({control1:new s.NI(null),control2:new s.NI(null),control3:new s.NI(null),control4:new s.NI(null)}),this.list=[{value:1,label:"\u0424\u0442\u043e\u0440\u043e\u0433\u0440\u0430\u0444\u0438\u044f"},{value:2,label:"\u041f\u043b\u0430\u0432\u0430\u043d\u0438\u0435"},{value:3,label:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},{value:4,label:"\u0420\u0438\u0441\u043e\u0432\u0430\u043d\u0438\u0435"},{value:5,label:"\u0412\u044b\u0448\u0438\u0432\u043a\u0430 \u043a\u0440\u0435\u0441\u0442\u043e\u043c"},{value:6,label:"Disabled",disabled:!0}]}ngOnInit(){}}return o.\u0275fac=function(u){return new(u||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-page-autofocus"]],decls:21,vars:3,consts:[[1,"container"],[1,"row",3,"formGroup"],[1,"col-12"],[1,"col-md-6","col-12"],["type","text","formControlName","control1","uiInputLabel","\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f","mask","00.00.0000",3,"dropSpecialCharacters"],["input",""],["formControlName","control2",3,"list"],["type","text","uiInputLabel","\u0423\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0435","uiInputHelp","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u043e \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430"],["type","text","formControlName","control3","uiInputLabel","\u0421\u0435\u0440\u0438\u044f \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430","mask","0{4}"],["type","text","formControlName","control4","uiInputLabel","\u041d\u043e\u043c\u0435\u0440 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430","mask","0{6}"]],template:function(u,l){1&u&&(t.TgZ(0,"div",0),t.TgZ(1,"ui-autofocus",1),t.TgZ(2,"div",2),t.TgZ(3,"h2"),t._uU(4,"Autofocus component"),t.qZA(),t.qZA(),t.TgZ(5,"ui-autofocus-mark",3),t.TgZ(6,"ui-field"),t._UZ(7,"input",4,5),t.qZA(),t.qZA(),t.TgZ(9,"ui-autofocus-mark",3),t.TgZ(10,"ui-select",6),t._UZ(11,"input",7,5),t.qZA(),t.qZA(),t.TgZ(13,"ui-autofocus-mark",3),t.TgZ(14,"ui-field"),t._UZ(15,"input",8,5),t.qZA(),t.qZA(),t.TgZ(17,"ui-autofocus-mark",3),t.TgZ(18,"ui-field"),t._UZ(19,"input",9,5),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&u&&(t.xp6(1),t.Q6J("formGroup",l.form),t.xp6(6),t.Q6J("dropSpecialCharacters",!1),t.xp6(3),t.Q6J("list",l.list))},directives:[A,s.JL,s.sg,p,h.C,s.Fj,C.hx,s.JJ,s.u,v.V,Z.z,b.X],styles:[""]}),o})()}];let k=(()=>{class o{}return o.\u0275fac=function(u){return new(u||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[r.Bz.forChild(y)],r.Bz]}),o})();var I=e(9822);let M=(()=>{class o{}return o.\u0275fac=function(u){return new(u||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.ez,k,I.n]]}),o})()}}]);