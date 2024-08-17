import{a as se,c as le,d as de,e as me,f as pe}from"./chunk-4BHIFCYS.js";import{a as te,b as re,c as oe,e as ie,f as ne,h as ae}from"./chunk-DOUGEFPZ.js";import{a as V,b as j,e as U,g as z,h as g,j as H,k as Z,n as W,o as X,p as Y,q as J,r as K,t as Q}from"./chunk-Q5MXISZW.js";import{b as k,c as B}from"./chunk-UUPB4Z4P.js";import{G as $,K as ee}from"./chunk-MXE44QMB.js";import"./chunk-WXI33M2S.js";import{Ba as w,Kb as m,Mb as D,Qa as d,Ra as y,Rb as f,Sa as I,Tb as P,U as C,Ua as A,Ub as x,W as M,Wa as E,Ya as S,aa as F,ac as T,ea as h,ha as b,hb as R,jb as p,mc as L,rb as s,sb as l,ta as _,tb as u,tc as G,vc as O,wc as q,xb as N}from"./chunk-PNNLBR3S.js";function Ce(i,e){i&1&&(s(0,"mat-error")(1,"strong"),m(2," Email is required "),l()())}function Me(i,e){i&1&&(s(0,"mat-error")(1,"strong"),m(2," Invalid email address "),l()())}var ce=(()=>{class i{_fb;_router;loginFormGroup;constructor(t,r){this._fb=t,this._router=r,this.loginFormGroup=this._fb.group({email:["",[g.required,g.email]],password:["",[g.required]]})}hasError(t,r){return this.loginFormGroup.controls[t].hasError(r)}login(){this._router.navigate(["shell/home"])}static \u0275fac=function(r){return new(r||i)(y(K),y(j))};static \u0275cmp=h({type:i,selectors:[["poc-login"]],standalone:!0,features:[f],decls:22,vars:7,consts:[[1,"h-full","justify-center","items-center","flex"],[1,"w-full","sm:w-11/12","md:w-1/2","lg:w-1/3"],[1,"bg-[#d7e3ff]","rounded-tl-lg","rounded-tr-lg"],[1,"mt-3"],[3,"formGroup"],["appearance","outline",1,"w-full","mb-3"],["matInput","","placeholder","Email","formControlName","email","required",""],[4,"ngIf"],["matInput","","placeholder","Password","formControlName","password","required",""],["align","end",1,"me-3","mb-4"],["mat-flat-button","",3,"click","disabled"]],template:function(r,o){r&1&&(s(0,"main",0)(1,"div",1)(2,"mat-card")(3,"mat-card-header",2)(4,"mat-card-title")(5,"h4"),m(6),P(7,"uppercase"),l()()(),s(8,"mat-card-content",3)(9,"form",4)(10,"mat-form-field",5),u(11,"input",6),R(12,Ce,3,0,"mat-error",7)(13,Me,3,0,"mat-error",7),l(),s(14,"mat-form-field",5),u(15,"input",8),s(16,"mat-error")(17,"strong"),m(18," Password is required "),l()()()()(),s(19,"mat-card-actions",9)(20,"button",10),N("click",function(){return o.login()}),m(21," Login "),l()()()()()),r&2&&(d(6),D(" ",x(7,5,"Login")," "),d(3),p("formGroup",o.loginFormGroup),d(3),p("ngIf",o.hasError("email","required")),d(),p("ngIf",o.hasError("email","email")),d(7),p("disabled",o.loginFormGroup.invalid))},dependencies:[ae,te,ie,oe,ne,re,ee,$,pe,me,le,se,Q,W,z,H,Z,J,X,Y,de,q,G,O]})}return i})();var he=[{path:"login",component:ce},{path:"shell",loadChildren:()=>import("./chunk-ORDFGU6V.js").then(i=>i.SHELL_ROUTES)},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"login",pathMatch:"full"}];var Fe="@",be=(()=>{let e=class e{constructor(r,o,n,a,c){this.doc=r,this.delegate=o,this.zone=n,this.animationType=a,this.moduleImpl=c,this._rendererFactoryPromise=null,this.scheduler=F(A,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-PSSY4LEX.js").then(o=>o)).catch(o=>{throw new C(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:n})=>{this._engine=o(this.animationType,this.doc);let a=new n(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(r,o){let n=this.delegate.createRenderer(r,o);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let a=new v(n);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(c=>{let ve=c.createRenderer(r,o);a.use(ve),this.scheduler?.notify(9)}).catch(c=>{a.use(n)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){I()},e.\u0275prov=M({token:e,factory:e.\u0275fac});let i=e;return i})(),v=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,o){this.delegate.insertBefore(e,t,r,o)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,o){this.delegate.setAttribute(e,t,r,o)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,o){this.delegate.setStyle(e,t,r,o)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(Fe)}};function fe(i="animations"){return S("NgAsyncAnimations"),b([{provide:E,useFactory:(e,t,r)=>new be(e,t,r,i),deps:[L,k,_]},{provide:w,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ge={providers:[T({eventCoalescing:!0}),U(he),fe()]};var ye=(()=>{class i{title="power-poc";static \u0275fac=function(r){return new(r||i)};static \u0275cmp=h({type:i,selectors:[["app-root"]],standalone:!0,features:[f],decls:1,vars:0,template:function(r,o){r&1&&u(0,"router-outlet")},dependencies:[V]})}return i})();B(ye,ge).catch(i=>console.error(i));
