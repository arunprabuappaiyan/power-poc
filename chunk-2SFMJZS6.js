import{$ as I,$a as P,Ea as ie,Gb as L,Hb as A,V as q,Va as C,W as X,Xa as re,Y as g,Z as Q,ba as y,ca as E,eb as k,ha as J,ia as M,ja as ee,nc as se,oa as te,oc as oe,wa as ne,za as T}from"./chunk-Q3WKJ6XV.js";var ge=null;function N(){return ge}function Pt(t){ge??=t}var ue=class{};var G=new I(""),H=(()=>{let e=class e{historyGo(n){throw new Error("")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=g({token:e,factory:()=>E(we),providedIn:"platform"});let t=e;return t})(),kt=new I(""),we=(()=>{let e=class e extends H{constructor(){super(),this._doc=E(G),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return N().getBaseHref(this._doc)}onPopState(n){let i=N().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=N().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,r){this._history.pushState(n,i,r)}replaceState(n,i,r){this._history.replaceState(n,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=g({token:e,factory:()=>new e,providedIn:"platform"});let t=e;return t})();function Y(t,e){if(t.length==0)return e;if(e.length==0)return t;let s=0;return t.endsWith("/")&&s++,e.startsWith("/")&&s++,s==2?t+e.substring(1):s==1?t+e:t+"/"+e}function ae(t){let e=t.match(/#|\?|$/),s=e&&e.index||t.length,n=s-(t[s-1]==="/"?1:0);return t.slice(0,n)+t.slice(s)}function p(t){return t&&t[0]!=="?"?"?"+t:t}var R=(()=>{let e=class e{historyGo(n){throw new Error("")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=g({token:e,factory:()=>E(Ae),providedIn:"root"});let t=e;return t})(),pe=new I(""),Ae=(()=>{let e=class e extends R{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??E(G).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Y(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+p(this._platformLocation.search),r=this._platformLocation.hash;return r&&n?`${i}${r}`:i}pushState(n,i,r,o){let u=this.prepareExternalUrl(r+p(o));this._platformLocation.pushState(n,i,u)}replaceState(n,i,r,o){let u=this.prepareExternalUrl(r+p(o));this._platformLocation.replaceState(n,i,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};e.\u0275fac=function(i){return new(i||e)(y(H),y(pe,8))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Nt=(()=>{let e=class e extends R{constructor(n,i){super(),this._platformLocation=n,this._baseHref="",this._removeListenerFns=[],i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}path(n=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(n){let i=Y(this._baseHref,n);return i.length>0?"#"+i:i}pushState(n,i,r,o){let u=this.prepareExternalUrl(r+p(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.pushState(n,i,u)}replaceState(n,i,r,o){let u=this.prepareExternalUrl(r+p(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.replaceState(n,i,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};e.\u0275fac=function(i){return new(i||e)(y(H),y(pe,8))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),Se=(()=>{let e=class e{constructor(n){this._subject=new ne,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=ve(ae(ce(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+p(i))}normalize(n){return e.stripTrailingSlash(_e(this._basePath,ce(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",r=null){this._locationStrategy.pushState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+p(i)),r)}replaceState(n,i="",r=null){this._locationStrategy.replaceState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+p(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(r=>r(n,i))}subscribe(n,i,r){return this._subject.subscribe({next:n,error:i,complete:r})}};e.normalizeQueryParams=p,e.joinWithSlash=Y,e.stripTrailingSlash=ae,e.\u0275fac=function(i){return new(i||e)(y(R))},e.\u0275prov=g({token:e,factory:()=>be(),providedIn:"root"});let t=e;return t})();function be(){return new Se(y(R))}function _e(t,e){if(!t||!e.startsWith(t))return e;let s=e.substring(t.length);return s===""||["/",";","?","#"].includes(s[0])?s:e}function ce(t){return t.replace(/\/index.html$/,"")}function ve(t){if(new RegExp("^(https?:)?//").test(t)){let[,s]=t.split(/\/\/[^\/]+/);return s}return t}var me={ADP:[void 0,void 0,0],AFN:[void 0,"\u060B",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058F",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20BC"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09F3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xA5","\xA5"],COP:[void 0,"$",2],CRC:[void 0,"\u20A1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010D",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xA3"],ESP:[void 0,"\u20A7",0],EUR:["\u20AC"],FJD:[void 0,"$"],FKP:[void 0,"\xA3"],GBP:["\xA3"],GEL:[void 0,"\u20BE"],GHS:[void 0,"GH\u20B5"],GIP:[void 0,"\xA3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20AA"],INR:["\u20B9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xA5",void 0,0],KHR:[void 0,"\u17DB"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20A9",0],KRW:["\u20A9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20B8"],LAK:[void 0,"\u20AD",0],LBP:[void 0,"L\xA3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20AE",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20A6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20B1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20B2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20BD"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xA3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xA3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xA3",0],THB:[void 0,"\u0E3F"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20BA"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20B4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20AB",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["F\u202FCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xA4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},Fe=function(t){return t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific",t}(Fe||{});var m={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function S(t,e){let s=L(t),n=s[A.NumberSymbols][e];if(typeof n>"u"){if(e===m.CurrencyDecimal)return s[A.NumberSymbols][m.Decimal];if(e===m.CurrencyGroup)return s[A.NumberSymbols][m.Group]}return n}function Ie(t,e){return L(t)[A.NumberFormats][e]}function Me(t){return L(t)[A.Currencies]}function Le(t,e,s="en"){let n=Me(s)[t]||me[t]||[],i=n[1];return e==="narrow"&&typeof i=="string"?i:n[0]||t}var Be=2;function Re(t){let e,s=me[t];return s&&(e=s[2]),typeof e=="number"?e:Be}var Oe=/^(\d+)?\.((\d+)(-(\d+))?)?$/,de=22,B=".",b="0",Te=";",Pe=",",$="#",le="\xA4";function ke(t,e,s,n,i,r,o=!1){let u="",l=!1;if(!isFinite(t))u=S(s,m.Infinity);else{let c=Ue(t);o&&(c=xe(c));let h=e.minInt,a=e.minFrac,f=e.maxFrac;if(r){let w=r.match(Oe);if(w===null)throw new Error(`${r} is not a valid digit info`);let W=w[1],O=w[3],K=w[5];W!=null&&(h=x(W)),O!=null&&(a=x(O)),K!=null?f=x(K):O!=null&&a>f&&(f=a)}ze(c,a,f);let d=c.digits,D=c.integerLen,Z=c.exponent,_=[];for(l=d.every(w=>!w);D<h;D++)d.unshift(0);for(;D<0;D++)d.unshift(0);D>0?_=d.splice(D,d.length):(_=d,d=[0]);let v=[];for(d.length>=e.lgSize&&v.unshift(d.splice(-e.lgSize,d.length).join(""));d.length>e.gSize;)v.unshift(d.splice(-e.gSize,d.length).join(""));d.length&&v.unshift(d.join("")),u=v.join(S(s,n)),_.length&&(u+=S(s,i)+_.join("")),Z&&(u+=S(s,m.Exponential)+"+"+Z)}return t<0&&!l?u=e.negPre+u+e.negSuf:u=e.posPre+u+e.posSuf,u}function Ne(t,e,s,n,i){let r=Ie(e,Fe.Currency),o=$e(r,S(e,m.MinusSign));return o.minFrac=Re(n),o.maxFrac=o.minFrac,ke(t,o,e,m.CurrencyGroup,m.CurrencyDecimal,i).replace(le,s).replace(le,"").trim()}function $e(t,e="-"){let s={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=t.split(Te),i=n[0],r=n[1],o=i.indexOf(B)!==-1?i.split(B):[i.substring(0,i.lastIndexOf(b)+1),i.substring(i.lastIndexOf(b)+1)],u=o[0],l=o[1]||"";s.posPre=u.substring(0,u.indexOf($));for(let h=0;h<l.length;h++){let a=l.charAt(h);a===b?s.minFrac=s.maxFrac=h+1:a===$?s.maxFrac=h+1:s.posSuf+=a}let c=u.split(Pe);if(s.gSize=c[1]?c[1].length:0,s.lgSize=c[2]||c[1]?(c[2]||c[1]).length:0,r){let h=i.length-s.posPre.length-s.posSuf.length,a=r.indexOf($);s.negPre=r.substring(0,a).replace(/'/g,""),s.negSuf=r.slice(a+h).replace(/'/g,"")}else s.negPre=e+s.posPre,s.negSuf=s.posSuf;return s}function xe(t){if(t.digits[0]===0)return t;let e=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(e===0?t.digits.push(0,0):e===1&&t.digits.push(0),t.integerLen+=2),t}function Ue(t){let e=Math.abs(t)+"",s=0,n,i,r,o,u;for((i=e.indexOf(B))>-1&&(e=e.replace(B,"")),(r=e.search(/e/i))>0?(i<0&&(i=r),i+=+e.slice(r+1),e=e.substring(0,r)):i<0&&(i=e.length),r=0;e.charAt(r)===b;r++);if(r===(u=e.length))n=[0],i=1;else{for(u--;e.charAt(u)===b;)u--;for(i-=r,n=[],o=0;r<=u;r++,o++)n[o]=Number(e.charAt(r))}return i>de&&(n=n.splice(0,de-1),s=i-1,i=1),{digits:n,exponent:s,integerLen:i}}function ze(t,e,s){if(e>s)throw new Error(`The minimum number of digits after fraction (${e}) is higher than the maximum (${s}).`);let n=t.digits,i=n.length-t.integerLen,r=Math.min(Math.max(e,i),s),o=r+t.integerLen,u=n[o];if(o>0){n.splice(Math.max(t.integerLen,o));for(let a=o;a<n.length;a++)n[a]=0}else{i=Math.max(0,i),t.integerLen=1,n.length=Math.max(1,o=r+1),n[0]=0;for(let a=1;a<o;a++)n[a]=0}if(u>=5)if(o-1<0){for(let a=0;a>o;a--)n.unshift(0),t.integerLen++;n.unshift(1),t.integerLen++}else n[o-1]++;for(;i<Math.max(0,r);i++)n.push(0);let l=r!==0,c=e+t.integerLen,h=n.reduceRight(function(a,f,d,D){return f=f+a,D[d]=f<10?f:f-10,l&&(D[d]===0&&d>=c?D.pop():l=!1),f>=10?1:0},0);h&&(n.unshift(h),t.integerLen++)}function x(t){let e=parseInt(t);if(isNaN(e))throw new Error("Invalid integer literal when parsing "+t);return e}function $t(t,e){e=encodeURIComponent(e);for(let s of t.split(";")){let n=s.indexOf("="),[i,r]=n==-1?[s,""]:[s.slice(0,n),s.slice(n+1)];if(i.trim()===e)return decodeURIComponent(r)}return null}var U=/\s+/,he=[],xt=(()=>{let e=class e{constructor(n,i){this._ngEl=n,this._renderer=i,this.initialClasses=he,this.stateMap=new Map}set klass(n){this.initialClasses=n!=null?n.trim().split(U):he}set ngClass(n){this.rawClass=typeof n=="string"?n.trim().split(U):n}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let n=this.rawClass;if(Array.isArray(n)||n instanceof Set)for(let i of n)this._updateState(i,!0);else if(n!=null)for(let i of Object.keys(n))this._updateState(i,!!n[i]);this._applyStateDiff()}_updateState(n,i){let r=this.stateMap.get(n);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(n,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let n of this.stateMap){let i=n[0],r=n[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(n,i){n=n.trim(),n.length>0&&n.split(U).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}};e.\u0275fac=function(i){return new(i||e)(C(T),C(P))},e.\u0275dir=M({type:e,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"},standalone:!0});let t=e;return t})();var Ut=(()=>{let e=class e{constructor(n,i){this._viewContainer=n,this._context=new z,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){fe("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){fe("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,i){return!0}};e.\u0275fac=function(i){return new(i||e)(C(k),C(re))},e.\u0275dir=M({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let t=e;return t})(),z=class{constructor(){this.$implicit=null,this.ngIf=null}};function fe(t,e){if(!!!(!e||e.createEmbeddedView))throw new Error(`${t} must be a TemplateRef, but received '${X(e)}'.`)}var zt=(()=>{let e=class e{constructor(n){this._viewContainerRef=n,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(n){if(this._shouldRecreateView(n)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(n){return!!n.ngTemplateOutlet||!!n.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(n,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(n,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}};e.\u0275fac=function(i){return new(i||e)(C(k))},e.\u0275dir=M({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[te]});let t=e;return t})();function je(t,e){return new q(2100,!1)}var jt=(()=>{let e=class e{constructor(n,i="USD"){this._locale=n,this._defaultCurrencyCode=i}transform(n,i=this._defaultCurrencyCode,r="symbol",o,u){if(!Ve(n))return null;u||=this._locale,typeof r=="boolean"&&(r=r?"symbol":"code");let l=i||this._defaultCurrencyCode;r!=="code"&&(r==="symbol"||r==="symbol-narrow"?l=Le(l,r==="symbol"?"wide":"narrow",u):l=r);try{let c=Ge(n);return Ne(c,u,l,i,o)}catch(c){throw je(e,c.message)}}};e.\u0275fac=function(i){return new(i||e)(C(se,16),C(oe,16))},e.\u0275pipe=ee({name:"currency",type:e,pure:!0,standalone:!0});let t=e;return t})();function Ve(t){return!(t==null||t===""||t!==t)}function Ge(t){if(typeof t=="string"&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if(typeof t!="number")throw new Error(`${t} is not a number`);return t}var Vt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=J({type:e}),e.\u0275inj=Q({});let t=e;return t})(),He="browser",Ye="server";function Ze(t){return t===He}function Gt(t){return t===Ye}var Ht=(()=>{let e=class e{};e.\u0275prov=g({token:e,providedIn:"root",factory:()=>Ze(E(ie))?new j(E(G),window):new V});let t=e;return t})(),j=class{constructor(e,s){this.document=e,this.window=s,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let s=We(this.document,e);s&&(this.scrollToElement(s),s.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let s=e.getBoundingClientRect(),n=s.left+this.window.pageXOffset,i=s.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(n-r[0],i-r[1])}};function We(t,e){let s=t.getElementById(e)||t.getElementsByName(e)[0];if(s)return s;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let r=i.shadowRoot;if(r){let o=r.getElementById(e)||r.querySelector(`[name="${e}"]`);if(o)return o}i=n.nextNode()}}return null}var V=class{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}},De=class{};var F=function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t}(F||{}),Wt="*";function Kt(t,e){return{type:F.Trigger,name:t,definitions:e,options:{}}}function qt(t,e=null){return{type:F.Animate,styles:e,timings:t}}function Xt(t,e=null){return{type:F.Sequence,steps:t,options:e}}function Qt(t){return{type:F.Style,styles:t,offset:null}}function Jt(t,e,s){return{type:F.State,name:t,styles:e,options:s}}function en(t,e,s=null){return{type:F.Transition,expr:t,animation:e,options:s}}function tn(t=null){return{type:F.AnimateChild,options:t}}function nn(t,e,s=null){return{type:F.Query,selector:t,animation:e,options:s}}var ye=class{constructor(e=0,s=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=e+s}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){let s=e=="start"?this._onStartFns:this._onDoneFns;s.forEach(n=>n()),s.length=0}},Ce=class{constructor(e){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=e;let s=0,n=0,i=0,r=this.players.length;r==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++s==r&&this._onFinish()}),o.onDestroy(()=>{++n==r&&this._onDestroy()}),o.onStart(()=>{++i==r&&this._onStart()})}),this.totalTime=this.players.reduce((o,u)=>Math.max(o,u.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){let s=e*this.totalTime;this.players.forEach(n=>{let i=n.totalTime?Math.min(1,s/n.totalTime):1;n.setPosition(i)})}getPosition(){let e=this.players.reduce((s,n)=>s===null||n.totalTime>s.totalTime?n:s,null);return e!=null?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){let s=e=="start"?this._onStartFns:this._onDoneFns;s.forEach(n=>n()),s.length=0}},rn="!";export{N as a,Pt as b,ue as c,G as d,kt as e,R as f,Ae as g,Nt as h,Se as i,$t as j,xt as k,Ut as l,zt as m,jt as n,Vt as o,He as p,Ze as q,Gt as r,Ht as s,De as t,F as u,Wt as v,Kt as w,qt as x,Xt as y,Qt as z,Jt as A,en as B,tn as C,nn as D,ye as E,Ce as F,rn as G};
