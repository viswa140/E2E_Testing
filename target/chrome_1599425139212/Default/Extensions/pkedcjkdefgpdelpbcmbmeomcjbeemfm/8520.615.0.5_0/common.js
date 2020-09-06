/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var k,aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ca=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");
},da=ca(this),ea=function(a,b){if(b){var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}};
ea("Symbol",function(a){if(a)return a;var b=function(e,f){this.g=e;ba(this,"description",{configurable:!0,writable:!0,value:f})};b.prototype.toString=function(){return this.g};var c=0,d=function(e){if(this instanceof d)throw new TypeError("Symbol is not a constructor");return new b("jscomp_symbol_"+(e||"")+"_"+c++,e)};return d});
ea("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
var fa=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a},l=function(a){return a.raw=a},n=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}},p=function(a){if(!(a instanceof Array)){a=n(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a},ha="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ma=ia,t=function(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Db=b.prototype},na=function(){this.o=!1;this.C=null;this.h=void 0;this.g=1;this.l=this.m=0;this.F=this.j=null},oa=function(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0};na.prototype.u=function(a){this.h=a};
var pa=function(a,b){a.j={Ic:b,Pm:!0};a.g=a.m||a.l};na.prototype.return=function(a){this.j={return:a};this.g=this.l};var v=function(a,b,c){a.g=c;return{value:b}};na.prototype.fb=function(a){this.g=a};
var qa=function(a,b,c){a.m=b;void 0!=c&&(a.l=c)},ra=function(a,b){a.g=b;a.m=0},sa=function(a){a.m=0;var b=a.j.Ic;a.j=null;return b},ta=function(a){var b=a.F.splice(0)[0];(b=a.j=a.j||b)?b.Pm?a.g=a.m||a.l:void 0!=b.fb&&a.l<b.fb?(a.g=b.fb,a.j=null):a.g=a.l:a.g=0},ua=function(a){this.g=new na;this.h=a},xa=function(a,b){oa(a.g);var c=a.g.C;if(c)return va(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);a.g.return(b);return wa(a)},va=function(a,b,c,d){try{var e=b.call(a.g.C,
c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.o=!1,e;var f=e.value}catch(g){return a.g.C=null,pa(a.g,g),wa(a)}a.g.C=null;d.call(a.g,f);return wa(a)},wa=function(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.o=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,pa(a.g,c)}a.g.o=!1;if(a.g.j){b=a.g.j;a.g.j=null;if(b.Pm)throw b.Ic;return{value:b.return,done:!0}}return{value:void 0,done:!0}},ya=function(a){this.next=function(b){oa(a.g);
a.g.C?b=va(a,a.g.C.next,b,a.g.u):(a.g.u(b),b=wa(a));return b};this.throw=function(b){oa(a.g);a.g.C?b=va(a,a.g.C["throw"],b,a.g.u):(pa(a.g,b),b=wa(a));return b};this.return=function(b){return xa(a,b)};this[Symbol.iterator]=function(){return this}},Aa=function(a){function b(d){return a.next(d)}function c(d){return a.throw(d)}return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}f(a.next())})},Ba=function(a){return Aa(new ya(new ua(a)))},Ca=Ca||
{},w=this||self,Fa=function(a){if(a&&a!=w)return Da(a.document);null===Ea&&(Ea=Da(w.document));return Ea},Ga=/^[\w+/_-]+[=]{0,2}$/,Ea=null,Da=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ga.test(a)?a:""},Ha=function(a,b){a=a.split(".");b=b||w;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b},Ia=function(){},Ja=function(a){a.rj=void 0;a.Ob=function(){return a.rj?a.rj:a.rj=new a}},Ka=function(a){var b=typeof a;return"object"!=
b?b:a?Array.isArray(a)?"array":b:"null"},La=function(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length},Ma=function(a){return"function"==Ka(a)},Na=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},Qa=function(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)},Ra=function(a){null!==a&&"removeAttribute"in a&&a.removeAttribute(Oa);try{delete a[Oa]}catch(b){}},Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0,Sa=function(a,b,c){return a.call.apply(a.bind,
arguments)},Ta=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}},x=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=Sa:x=Ta;return x.apply(null,arguments)},Ua=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=
c.slice();d.push.apply(d,arguments);return a.apply(this,d)}},Va=Date.now||function(){return+new Date},y=function(a,b){a=a.split(".");var c=w;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b},B=function(a,b){function c(){}c.prototype=b.prototype;a.Db=b.prototype;a.prototype=new c;a.prototype.constructor=a},Wa=function(a){return a};var chrome=chrome||window.chrome||{};chrome.cast=chrome.cast||{};chrome.cast.media=chrome.cast.media||{};var mojo={};var Xa=function(){return Promise.reject(Error("Not implemented"))};var Ya=function(a){this.g=a},$a=function(a){var b=Za.get(a);b||(b=new Ya(a),Za.set(a,b));return b},cb=function(a){a.level>=ab&&bb.forEach(function(b){return b(a)})};Ya.prototype.log=function(a,b,c){if(!(a<ab)){"function"==typeof b&&(b=b());b=b.replace(db,"[Redacted URL]");b=b.replace(eb,"[Redacted domain/email]");b=b.replace(fb,function(e,f,g){return f+":<"+g.substr(-4)+">"});var d={R:this.g,level:a,time:Date.now(),message:b,Ic:c};bb.forEach(function(e){return e(d)})}};
Ya.prototype.error=function(a,b){this.log(3,a,b)};Ya.prototype.K=function(a,b){this.log(2,a,b)};Ya.prototype.info=function(a,b){this.log(1,a,b)};var gb=function(a,b,c){a.log(0,b,c)},ib=function(a){a=hb.indexOf(a);return-1==a?0:a},jb=function(a){return 600>=a?0:850>=a?1:950>=a?2:3},bb=[],Za=new Map,hb=["FINE","INFO","WARNING","SEVERE"],eb=/(([\w.+-]+@)|((www|m|mail|ftp)[.]))[\w.-]+[.][\w-]{2,4}/gi,db=/(data:|https?:\/\/)\S+/gi,fb=/(dial|cast):<([a-zA-Z0-9]+)>/gi,ab=1;var kb=function(a){this.g=a;this.h=Date.now()},lb=function(a,b){null!=b&&(a+="_"+b);return a};kb.prototype.end=function(a){var b=Date.now()-this.h;mb(lb(this.g,a),b)};var mb=function(a,b){0>b&&(nb.K("Timing analytics event with negative time"),b=0);1E4<b&&(b=1E4);try{chrome.metricsPrivate.recordTime(a,b)}catch(c){nb.K("Failed to record time "+b+" in "+a)}},nb=$a("mr.Timing"),ob=function(a){kb.call(this,a)};t(ob,kb);
ob.prototype.end=function(a){var b=Date.now()-this.h;a=lb(this.g,a);if(0>b)pb.K("Timing analytics event with negative time");else{1E4>b&&(b=1E4);18E4<b&&(b=18E4);try{chrome.metricsPrivate.recordMediumTime(a,b)}catch(c){pb.K("Failed to record time "+b+" in "+a)}}};var pb=$a("mr.MediumTiming"),qb=function(a){kb.call(this,a)};t(qb,kb);
qb.prototype.end=function(a){var b=Date.now()-this.h;a=lb(this.g,a);if(0>b)rb.K("Timing analytics event with negative time");else{18E4>b&&(b=18E4);36E5<b&&(b=36E5);try{chrome.metricsPrivate.recordLongTime(a,b)}catch(c){rb.K("Failed to record time "+b+" in "+a)}}};
var rb=$a("mr.LongTiming"),sb=$a("mr.Analytics"),tb=function(a){try{chrome.metricsPrivate.recordUserAction(a)}catch(b){sb.K("Failed to record event "+a)}},ub=function(a,b,c){var d,e=0,f;for(f in c)e++,c[f]==b&&(d=f);if(d){c={metricName:a,type:"histogram-linear",min:1,max:e,buckets:e+1};try{chrome.metricsPrivate.recordValue(c,b)}catch(g){sb.K("Failed to record enum value "+d+" ("+b+") in "+a,g)}}else sb.error("Unknown analytics value, "+b+" for histogram, "+a,Error())},vb=0,wb={UNKNOWN:vb,vI:1,ON_SINKS_REMOVED:2,
ZE:3,YE:4,XE:5},xb=null,yb=function(a){null!=xb&&(clearTimeout(xb),xb=null);vb=a;xb=setTimeout(function(){},250)};var zb=function(){var a=this;this.g=new Promise(function(b,c){a.j=b;a.h=c})};zb.prototype.resolve=function(a){this.j(a)};zb.prototype.reject=function(a){this.h(a)};var Ab=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ab);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};B(Ab,Error);Ab.prototype.name="CustomError";var Bb;var Cb=function(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");Ab.call(this,c+a[d])};B(Cb,Ab);Cb.prototype.name="AssertionError";var Db=function(a,b,c){if(!a){var d="Assertion failed";if(b){d+=": "+b;var e=Array.prototype.slice.call(arguments,2)}throw new Cb(""+d,e||[]);}},Eb=function(a,b){throw new Cb("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var Fb=function(a){return a[a.length-1]},Gb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Hb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Kb=function(a,b){for(var c=
"string"===typeof a?a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},Lb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===typeof a?a.split(""):a,h=0;h<d;h++)if(h in g){var m=g[h];b.call(c,m,h,a)&&(e[f++]=m)}return e},Mb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,g=0;g<d;g++)g in
f&&(e[g]=b.call(c,f[g],g,a));return e},Nb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;Hb(a,function(e,f){d=b.call(void 0,d,e,f,a)});return d},Ob=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1},Pb=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,
c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0},Rb=function(a,b){b=Qb(a,b,void 0);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]},Qb=function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1},Sb=function(a,b){a:{for(var c="string"===typeof a?a.split(""):a,d=a.length-1;0<=d;d--)if(d in c&&b.call(void 0,c[d],d,a)){b=d;break a}b=-1}return 0>
b?null:"string"===typeof a?a.charAt(b):a[b]},Tb=function(a,b){return 0<=Gb(a,b)},Ub=function(a){if(!Array.isArray(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0},Vb=function(a,b){Tb(a,b)||a.push(b)},Xb=function(a,b,c){var d;2==arguments.length||0>(d=Gb(a,c))?a.push(b):Wb(a,d,0,b)},Zb=function(a,b){b=Gb(a,b);var c;(c=0<=b)&&Yb(a,b);return c},Yb=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length},$b=function(a,b){b=Qb(a,b,void 0);return 0<=b?(Yb(a,b),!0):!1},ac=function(a,b){var c=
0;Kb(a,function(d,e){b.call(void 0,d,e,a)&&Yb(a,e)&&c++})},bc=function(a){return Array.prototype.concat.apply([],arguments)},cc=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},dc=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}},Wb=function(a,b,c,d){Array.prototype.splice.apply(a,ec(arguments,1))},ec=function(a,b,c){return 2>=arguments.length?
Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)},fc=function(a,b){b=b||a;for(var c={},d=0,e=0;e<a.length;){var f=a[e++];var g=f;g=Na(g)?"o"+Qa(g):(typeof g).charAt(0)+g;Object.prototype.hasOwnProperty.call(c,g)||(c[g]=!0,b[d++]=f)}b.length=d},gc=function(a,b){for(var c=0,d=a.length,e;c<d;){var f=c+(d-c>>>1);var g=b.call(void 0,a[f],f,a);0<g?c=f+1:(d=f,e=!g)}return e?c:-c-1},ic=function(a,b){a.sort(b||hc)},jc=function(a,b){var c=hc;ic(a,function(d,e){return c(b(d),b(e))})},kc=function(a){jc(a,
function(b){return b.t})},mc=function(a,b,c){if(!La(a)||!La(b)||a.length!=b.length)return!1;var d=a.length;c=c||lc;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0},hc=function(a,b){return a>b?1:a<b?-1:0},lc=function(a,b){return a===b},nc=function(a,b){var c={};Hb(a,function(d,e){c[b.call(void 0,d,e,a)]=d});return c},oc=function(a,b){return bc.apply([],Mb(a,b,void 0))};var pc=function(a){return function(){return a}},qc=function(){return!0},rc=function(){return null},sc=function(a){return a},tc=function(a){return function(){throw Error(a);}},uc=function(a){var b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}},vc=function(a){return function(){return!a.apply(this,arguments)}},wc=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var xc=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)},yc=function(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c},zc=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1},Ac=function(a){var b=0,c;for(c in a)b++;return b},Bc=function(a){for(var b in a)return b},Cc=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Dc=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Ec=function(a,b){return null!==a&&b in a},Fc=function(a,b){for(var c in a)if(a[c]==
b)return!0;return!1},Gc=function(a){for(var b in a)return!1;return!0},Hc=function(a){for(var b in a)delete a[b]},Ic=function(a){var b={},c;for(c in a)b[c]=a[c];return b},Jc=function(a){var b=Ka(a);if("object"==b||"array"==b){if(Ma(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=Jc(a[c]);return b}return a},Kc=function(a){var b={},c;for(c in a)b[a[c]]=c;return b},Lc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Mc=function(a,
b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Lc.length;f++)c=Lc[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}},Nc=function(a){var b=arguments.length;if(1==b&&Array.isArray(arguments[0]))return Nc.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var Oc,Pc=function(){if(void 0===Oc){var a=null,b=w.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(c){w.console&&w.console.error(c.message)}Oc=a}else Oc=a}return Oc};var Sc=function(a,b){this.g=a===Qc&&b||"";this.h=Rc};Sc.prototype.hd=!0;Sc.prototype.Uc=function(){return this.g};Sc.prototype.toString=function(){return"Const{"+this.g+"}"};var Tc=function(a){if(a instanceof Sc&&a.constructor===Sc&&a.h===Rc)return a.g;Eb("expected object of type Const, got '"+a+"'");return"type_error:Const"},Rc={},Qc={};var Vc=function(){this.g=Uc};Vc.prototype.hd=!0;var Uc={};Vc.prototype.Uc=function(){return"".toString()};Vc.prototype.toString=function(){return"SafeScript{}"};var Wc=function(a){if(a instanceof Vc&&a.constructor===Vc&&a.g===Uc)return"";Eb("expected object of type SafeScript, got '"+a+"' of type "+Ka(a));return"type_error:SafeScript"};var Xc=/[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,Yc=/^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]/,Zc=/^http:\/\/.*/,$c=/\s+/,ad=/[\d\u06f0-\u06f9]/;var dd=function(a,b){this.g=a===bd&&b||"";this.h=cd};k=dd.prototype;k.hd=!0;k.Uc=function(){return this.g.toString()};k.qj=!0;k.jj=function(){return 1};k.toString=function(){return"TrustedResourceUrl{"+this.g+"}"};
var ed=function(a){if(a instanceof dd&&a.constructor===dd&&a.h===cd)return a.g;Eb("expected object of type TrustedResourceUrl, got '"+a+"' of type "+Ka(a));return"type_error:TrustedResourceUrl"},id=function(){var a={build:245201848},b=Tc(new Sc(Qc,"https://www.gstatic.com/hangouts_echo_detector/release/%{build}/echo_detector_v2_wasm.js"));if(!fd.test(b))throw Error("Invalid TrustedResourceUrl format: "+b);var c=b.replace(gd,function(d,e){if(!Object.prototype.hasOwnProperty.call(a,e))throw Error('Found marker, "'+
e+'", in format string, "'+b+'", but no valid label mapping found in args: '+JSON.stringify(a));d=a[e];return d instanceof Sc?Tc(d):encodeURIComponent(String(d))});return hd(c)},gd=/%{(\w+)}/g,fd=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,cd={},hd=function(a){var b=Pc();a=b?b.createScriptURL(a):a;return new dd(bd,a)},bd={};var jd=function(a,b){return 0==a.lastIndexOf(b,0)},kd=function(a,b){return a.toLowerCase()==b.toLowerCase()},ld=function(a){return/^[\s\xa0]*$/.test(a)},nd=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},od=function(a,b){a=String(a).toLowerCase();b=String(b).toLowerCase();return a<b?-1:a==b?0:1},wd=function(a,b){if(b)a=a.replace(pd,"&amp;").replace(qd,"&lt;").replace(rd,"&gt;").replace(sd,"&quot;").replace(td,"&#39;").replace(ud,"&#0;");
else{if(!vd.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(pd,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(qd,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(rd,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(sd,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(td,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ud,"&#0;"))}return a},pd=/&/g,qd=/</g,rd=/>/g,sd=/"/g,td=/'/g,ud=/\x00/g,vd=/[\x00&<>"']/,yd=function(a,b){var c=0;a=nd(String(a)).split(".");b=nd(String(b)).split(".");for(var d=Math.max(a.length,b.length),
e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=xd(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||xd(0==f[2].length,0==g[2].length)||xd(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c},xd=function(a,b){return a<b?-1:a>b?1:0};var Bd=function(a,b){this.g=a===zd&&b||"";this.h=Ad};k=Bd.prototype;k.hd=!0;k.Uc=function(){return this.g.toString()};k.qj=!0;k.jj=function(){return 1};k.toString=function(){return"SafeUrl{"+this.g+"}"};
var Cd=function(a){if(a instanceof Bd&&a.constructor===Bd&&a.h===Ad)return a.g;Eb("expected object of type SafeUrl, got '"+a+"' of type "+Ka(a));return"type_error:SafeUrl"},Dd=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Ed=function(a){if(a instanceof Bd)return a;a="object"==typeof a&&a.hd?a.Uc():String(a);Dd.test(a)||(a="about:invalid#zClosurez");return new Bd(zd,a)},Ad={},zd={};var Gd=function(){this.g="";this.h=Fd};Gd.prototype.hd=!0;var Fd={};Gd.prototype.Uc=function(){return this.g};Gd.prototype.toString=function(){return"SafeStyle{"+this.g+"}"};
var Hd=function(a){if(a instanceof Gd&&a.constructor===Gd&&a.h===Fd)return a.g;Eb("expected object of type SafeStyle, got '"+a+"' of type "+Ka(a));return"type_error:SafeStyle"},Id=function(a){var b=new Gd;b.g=a;return b},Jd=Id(""),Ld=function(a){if(a instanceof Bd)return'url("'+Cd(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';a=a instanceof Sc?Tc(a):Kd(String(a));if(/[{;}]/.test(a))throw new Cb("Value does not allow [{;}], got: %s.",[a]);return a},Kd=function(a){var b=a.replace(Md,"$1").replace(Md,
"$1").replace(Nd,"url");if(Od.test(b)){if(Pd.test(a))return Eb("String value disallows comments, got: "+a),"zClosurez";for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}if(!b||!c)return Eb("String value requires balanced quotes, got: "+a),"zClosurez";if(!Qd(a))return Eb("String value requires balanced square brackets and one identifier per pair of brackets, got: "+a),"zClosurez"}else return Eb("String value allows only [-,.\"'%_!# a-zA-Z0-9\\[\\]] and simple functions, got: "+
a),"zClosurez";return Rd(a)},Qd=function(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b},Od=/^[-,."'%_!# a-zA-Z0-9\[\]]+$/,Nd=/\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,Md=/\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,Pd=
/\/\*/,Rd=function(a){return a.replace(Nd,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(g,h,m){f=h;return m});b=Ed(d).Uc();return c+f+b+f+e})};var Td=function(){this.g="";this.h=Sd};Td.prototype.hd=!0;
var Sd={},Vd=function(a,b){if(-1!=a.indexOf("<"))throw Error("Selector does not allow '<', got: "+a);var c=a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: "+a);a:{for(var d={"(":")","[":"]"},e=[],f=0;f<c.length;f++){var g=c[f];if(d[g])e.push(d[g]);else if(Fc(d,g)&&e.pop()!=g){c=!1;break a}}c=0==e.length}if(!c)throw Error("() and [] in selector must be balanced, got: "+a);
if(!(b instanceof Gd)){c="";for(var h in b){if(!/^[-_a-zA-Z0-9]+$/.test(h))throw Error("Name allows only [-_a-zA-Z0-9], got: "+h);d=b[h];null!=d&&(d=Array.isArray(d)?Mb(d,Ld).join(" "):Ld(d),c+=h+":"+d+";")}b=c?Id(c):Jd}a=a+"{"+Hd(b).replace(/</g,"\\3C ")+"}";return Ud(a)},Xd=function(a){var b="",c=function(d){Array.isArray(d)?Hb(d,c):b+=Wd(d)};Hb(arguments,c);return Ud(b)};Td.prototype.Uc=function(){return this.g};Td.prototype.toString=function(){return"SafeStyleSheet{"+this.g+"}"};
var Wd=function(a){if(a instanceof Td&&a.constructor===Td&&a.h===Sd)return a.g;Eb("expected object of type SafeStyleSheet, got '"+a+"' of type "+Ka(a));return"type_error:SafeStyleSheet"},Ud=function(a){var b=new Td;b.g=a;return b},Yd=Ud("");var Zd;a:{var $d=w.navigator;if($d){var ae=$d.userAgent;if(ae){Zd=ae;break a}}Zd=""}var be=function(a){return-1!=Zd.indexOf(a)},ce=function(a){for(var b=/(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c};var de=function(){return be("Trident")||be("MSIE")},ee=function(){return be("Firefox")||be("FxiOS")},ge=function(){return be("Safari")&&!(fe()||be("Coast")||be("Opera")||be("Edge")||be("Edg/")||be("OPR")||ee()||be("Silk")||be("Android"))},fe=function(){return(be("Chrome")||be("CriOS"))&&!be("Edge")},ie=function(){function a(e){e=Rb(e,d);return c[e]||""}var b=Zd;if(de())return he(b);b=ce(b);var c={};Hb(b,function(e){c[e[0]]=e[1]});var d=Ua(Ec,c);return be("Opera")?a(["Version","Opera"]):be("Edge")?
a(["Edge"]):be("Edg/")?a(["Edg"]):fe()?a(["Chrome","CriOS","HeadlessChrome"]):(b=b[2])&&b[1]||""},he=function(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b};var ke=function(){this.g="";this.h=je;this.we=null};k=ke.prototype;k.qj=!0;k.jj=function(){return this.we};k.hd=!0;k.Uc=function(){return this.g.toString()};k.toString=function(){return"SafeHtml{"+this.g+"}"};
var le=function(a){if(a instanceof ke&&a.constructor===ke&&a.h===je)return a.g;Eb("expected object of type SafeHtml, got '"+a+"' of type "+Ka(a));return"type_error:SafeHtml"},ne=function(a){if(a instanceof ke)return a;var b="object"==typeof a,c=null;b&&a.qj&&(c=a.jj());a=wd(b&&a.hd?a.Uc():String(a));return me(a,c)},je={},me=function(a,b){var c=new ke,d=Pc();c.g=d?d.createHTML(a):a;c.we=b;return c},oe=new ke;oe.g=w.trustedTypes&&w.trustedTypes.emptyHTML?w.trustedTypes.emptyHTML:"";oe.we=0;var pe={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},qe=wc(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;b=a.firstChild.firstChild;a.innerHTML=le(oe);return!b.parentElement}),re=function(a,b){if(qe())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=le(b)},se=function(a,b){if(pe[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");re(a,b)},te=function(a,b){a:{try{var c=a&&a.ownerDocument,d=c&&(c.defaultView||c.parentWindow);d=d||w;if(d.Element&&d.Location){var e=d;break a}}catch(g){}e=null}if(e&&"undefined"!=typeof e.HTMLScriptElement&&(!a||!(a instanceof e.HTMLScriptElement)&&(a instanceof e.Location||a instanceof e.Element))){if(Na(a))try{var f=a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a)}catch(g){f="<object could not be stringified>"}else f=void 0===a?"undefined":null===
a?"null":typeof a;Eb("Argument is not a %s (or a non-Element, non-Location mock); got: %s","HTMLScriptElement",f)}a.src=ed(b);(b=Fa(a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)};var ue=function(a){return a=wd(a,void 0)},ve=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)},we=function(a,b){a=String(a);var c=a.indexOf(".");-1==c&&(c=a.length);return ve("0",Math.max(0,b-c))+a},xe=function(a){return null==a?"":String(a)},ye=function(a){return Array.prototype.join.call(arguments,"")},ze=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Va()).toString(36)},Ae=function(a,
b,c){a=a.split(b);for(var d=[];0<c&&a.length;)d.push(a.shift()),c--;a.length&&d.push(a.join(b));return d};var Be=function(){return be("iPhone")&&!be("iPod")&&!be("iPad")},Ce=function(){return Be()||be("iPad")||be("iPod")},De=function(){return be("Macintosh")};var Ee=function(a){Ee[" "](a);return a};Ee[" "]=Ia;var Fe=function(a,b){try{return Ee(a[b]),!0}catch(c){}return!1},He=function(a,b){var c=Ge;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Ie=function(){return w.navigator||null},Je=be("Opera"),Ke=de(),Le=be("Edge"),Me=be("Gecko")&&!(-1!=Zd.toLowerCase().indexOf("webkit")&&!be("Edge"))&&!(be("Trident")||be("MSIE"))&&!be("Edge"),Ne=-1!=Zd.toLowerCase().indexOf("webkit")&&!be("Edge"),Oe=Ne&&be("Mobile"),Pe,Qe=Ie();Pe=Qe&&Qe.platform||"";var Re=De(),Se=be("Windows"),Te=be("Linux")||be("CrOS"),Ue=be("Android"),Ve=Be(),We=be("iPad"),Xe=be("iPod"),Ye=function(){var a=w.document;return a?a.documentMode:void 0},Ze;
a:{var $e="",af=function(){var a=Zd;if(Me)return/rv:([^\);]+)(\)|;)/.exec(a);if(Le)return/Edge\/([\d\.]+)/.exec(a);if(Ke)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ne)return/WebKit\/(\S+)/.exec(a);if(Je)return/(?:Version)[ \/]?(\S+)/.exec(a)}();af&&($e=af?af[1]:"");if(Ke){var bf=Ye();if(null!=bf&&bf>parseFloat($e)){Ze=String(bf);break a}}Ze=$e}var cf=Ze,Ge={},df=function(a){return He(a,function(){return 0<=yd(cf,a)})},ef;
if(w.document&&Ke){var ff=Ye();ef=ff?ff:parseInt(cf,10)||void 0}else ef=void 0;var gf=ef;var hf=ee(),jf=Be()||be("iPod"),kf=be("iPad"),lf=be("Android")&&!(fe()||ee()||be("Opera")||be("Silk")),mf=fe(),nf=ge()&&!Ce();var of=function(a,b){return a+Math.random()*(b-a)};var pf=function(a,b,c){this.u=a;this.j=b;this.o=c;this.C=0;this.l=!1;this.g=this.h=null};pf.prototype.start=function(){if(null!=this.g)throw Error("Cannot call Retry.start more than once.");this.g=new zb;this.m();return this.g.g};pf.prototype.m=function(){var a=this;this.h=null;this.l||(this.C++,this.u().then(function(b){qf(a);a.g.resolve(b)},function(b){a.C>=a.o?(qf(a),a.g.reject(b)):(a.h=setTimeout(a.m.bind(a),a.j),a.j*=2)}))};
pf.prototype.abort=function(a){qf(this);this.g.reject(void 0===a?Error("abort"):a)};var qf=function(a){null!=a.h&&(clearTimeout(a.h),a.h=null);a.l=!0};var rf=function(a){this.j=a;this.g=0;this.h=[]};rf.prototype.send=function(a,b,c,d){var e=void 0===d?{}:d;d=void 0===e.timeoutMillis?this.j:e.timeoutMillis;var f=void 0===e.ku?1:e.ku,g=void 0===e.headers?null:e.headers;e=void 0===e.responseType?"":e.responseType;a={Bb:new zb,url:a,method:b,headers:g,responseType:e,body:c,timeoutMillis:d,zn:f};1>this.g?sf(this,a):this.h.push(a);return a.Bb.g};
var tf=function(a){if(0<a.h.length&&1>a.g){var b=a.h.shift();sf(a,b)}},sf=function(a,b){a.g++;b.zn--;uf(b).then(function(c){b.Bb.resolve(c);a.g--;tf(a)},function(c){0==b.zn?b.Bb.reject(c):a.h.push(b);a.g--;tf(a)})},uf=function(a){return new Promise(function(b,c){var d=new XMLHttpRequest;d.onreadystatechange=function(){d.readyState==XMLHttpRequest.DONE&&b(d)};d.timeout=a.timeoutMillis;d.ontimeout=function(){c(Error("Timed out"))};d.open(a.method,a.url,!0);null==a.headers?d.setRequestHeader("Content-Type",
"application/x-www-form-urlencoded;charset=utf-8"):a.headers.forEach(function(e){return d.setRequestHeader(e[0],e[1])});d.responseType=a.responseType;d.send(a.body)})};var wf=function(a,b,c){null==vf&&(vf=new rf(3E5));var d="https://crash.corp.google.com/samples?reportid=&q="+encodeURIComponent("UserComments='"+b+"'"),e="http://"+a+":8008/setup/send_log_report";vf.send(e,"POST",JSON.stringify({uuid:b}),{headers:[["Content-Type","application/json"]]}).then(function(f){200==f.status?c("ok",d):c("error","Unable to POST to "+e+", error = "+f.status)},function(f){c("error",String(f))});return d},zf=function(a){var b=new xf;if("string"!==typeof a)return Promise.resolve(b);
null==yf&&(yf=new rf(3E3));return yf.send("http://"+a+":8008/setup/eureka_info","GET",void 0,{responseType:"text"}).then(function(c){c=JSON.parse(c.responseText);"cast_build_revision"in c?b.g=String(c.cast_build_revision):"build_version"in c&&(b.g=String(c.build_version));"connected"in c&&(b.l="true"==String(c.connected));"ethernet_connected"in c&&(b.h="true"==String(c.ethernet_connected));"has_update"in c&&(b.j="true"==String(c.has_update));"uptime"in c&&(c=Number(c.uptime),Number.isFinite(c)&&(b.C=
c))}).catch(function(c){$a("mr.DongleUtils").K("Unable to fetch/parse setup info.",c)}).then(function(){return b})},xf=function(){this.C=this.j=this.h=this.l=this.g=null},vf=null,yf=null;var Af=function(a,b,c){this.source=a;this.type=b;this.message=c};var Bf=function(a){var b=[],c=[],d={},e=function(f,g){var h=g+"  ";try{if(void 0===f)b.push("undefined");else if(null===f)b.push("NULL");else if("string"===typeof f)b.push('"'+f.replace(/\n/g,"\n"+g)+'"');else if(Ma(f))b.push(String(f).replace(/\n/g,"\n"+g));else if(Na(f)){f[Oa]||c.push(f);var m=Qa(f);if(d[m])b.push("*** reference loop detected (id="+m+") ***");else{d[m]=!0;b.push("{");for(var q in f)Ma(f[q])||(b.push("\n"),b.push(h),b.push(q+" = "),e(f[q],h));b.push("\n"+g+"}");delete d[m]}}else b.push(f)}catch(r){b.push("*** "+
r+" ***")}};e(a,"");for(a=0;a<c.length;a++)Ra(c[a]);return b.join("")},Df=function(a){var b=Cf(Df);if(b)return b;b=[];for(var c=arguments.callee.caller,d=0;c&&(!a||d<a);){b.push(Ef(c));b.push("()\n");try{c=c.caller}catch(e){b.push("[exception trying to get caller]\n");break}d++;if(50<=d){b.push("[...long stack...]");break}}a&&d>=a?b.push("[...reached max depth limit...]"):b.push("[end]");return b.join("")},Cf=function(a){var b=Error();if(Error.captureStackTrace)return Error.captureStackTrace(b,a),
String(b.stack);try{throw b;}catch(c){b=c}return(a=b.stack)?String(a):null},Ff=function(a){var b;(b=Cf(a||Ff))||(b=Gf(a||arguments.callee.caller,[]));return b},Gf=function(a,b){var c=[];if(Tb(b,a))c.push("[...circular reference...]");else if(a&&50>b.length){c.push(Ef(a)+"(");for(var d=a.arguments,e=0;d&&e<d.length;e++){0<e&&c.push(", ");var f=d[e];switch(typeof f){case "object":f=f?"object":"null";break;case "string":break;case "number":f=String(f);break;case "boolean":f=f?"true":"false";break;case "function":f=
(f=Ef(f))?f:"[fn]";break;default:f=typeof f}40<f.length&&(f=f.substr(0,40)+"...");c.push(f)}b.push(a);c.push(")\n");try{c.push(Gf(a.caller,b))}catch(g){c.push("[exception trying to get caller]\n")}}else a?c.push("[...long stack...]"):c.push("[end]");return c.join("")},Ef=function(a){if(Hf[a])return Hf[a];a=String(a);if(!Hf[a]){var b=/function\s+([^\(]+)/m.exec(a);Hf[a]=b?b[1]:"[Anonymous]"}return Hf[a]},Hf={},If=Object.freeze||function(a){return a};var Jf=function(a,b,c){this.reset(a,b,c,void 0,void 0)};Jf.prototype.g=null;var Kf=0;Jf.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Kf++;this.C=d||Va();this.h=a;this.l=b;this.j=c;delete this.g};Jf.prototype.getMessage=function(){return this.l};var Lf=function(a){this.C=a;this.g=this.l=this.h=this.j=null},Mf=function(a,b){this.name=a;this.value=b};Mf.prototype.toString=function(){return this.name};var Nf=new Mf("SEVERE",1E3),Of=new Mf("WARNING",900),Pf=new Mf("INFO",800),Qf=new Mf("CONFIG",700),Rf=new Mf("FINE",500),Sf=new Mf("FINER",400),Tf=new Mf("ALL",0);Lf.prototype.getName=function(){return this.C};Lf.prototype.getChildren=function(){this.l||(this.l={});return this.l};
var Uf=function(a){if(a.h)return a.h;if(a.j)return Uf(a.j);Eb("Root logger has no level set.");return null};k=Lf.prototype;k.log=function(a,b,c){a.value>=Uf(this).value&&(Ma(b)&&(b=b()),a=new Jf(a,String(b),this.C),c&&(a.g=c),Vf(this,a))};k.Ta=function(a,b){this.log(Nf,a,b)};k.K=function(a,b){this.log(Of,a,b)};k.info=function(a,b){this.log(Pf,a,b)};k.config=function(a,b){this.log(Qf,a,b)};k.logRecord=function(a){a.h.value>=Uf(this).value&&Vf(this,a)};
var Vf=function(a,b){for(;a;){var c,d=a,e=b;if(d.g)for(var f=0;c=d.g[f];f++)c(e);a=a.j}},Wf={},Xf=null,Yf=function(){Xf||(Xf=new Lf(""),Wf[""]=Xf,Xf.h=Qf)},Zf=function(a){Yf();var b;if(!(b=Wf[a])){b=new Lf(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=Zf(a.substr(0,c));c.getChildren()[d]=b;b.j=c;Wf[a]=b}return b};var $f=function(a,b,c,d){a&&a.log(b,c,d)},ag=function(a,b,c){a&&a.Ta(b,c)},C=function(a,b,c){a&&a.K(b,c)},D=function(a,b){a&&a.info(b,void 0)},bg=function(a,b){a&&a.log(Rf,b,void 0)};try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){}var cg=!Me&&!Ke||Ke&&9<=Number(gf)||Me&&df("1.9.1");var dg=function(a,b){this.width=a;this.height=b};k=dg.prototype;k.clone=function(){return new dg(this.width,this.height)};k.toString=function(){return"("+this.width+" x "+this.height+")"};k.aspectRatio=function(){return this.width/this.height};k.zc=function(){return!(this.width*this.height)};k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var fg=function(a){return a?new eg(9==a.nodeType?a:a.ownerDocument||a.document):Bb||(Bb=new eg)},hg=function(a,b){xc(b,function(c,d){c&&"object"==typeof c&&c.hd&&(c=c.Uc());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:gg.hasOwnProperty(d)?a.setAttribute(gg[d],c):jd(d,"aria-")||jd(d,"data-")?a.setAttribute(d,c):a[d]=c})},gg={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",
role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},ig=function(a){a=a.document;a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new dg(a.clientWidth,a.clientHeight)},kg=function(a){return a?jg(a):window},jg=function(a){return a.parentWindow||a.defaultView},lg=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)},mg=function(a){for(var b;b=a.firstChild;)a.removeChild(b)},og=function(a){return a&&
a.parentNode?a.parentNode.removeChild(a):null},pg=function(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else mg(a),a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode(String(b)))},eg=function(a){this.g=a||w.document||document};eg.prototype.setProperties=hg;var qg=function(a,b){return lg(a.g,b)};k=eg.prototype;
k.appendChild=function(a,b){a.appendChild(b)};k.Ns=og;k.getChildren=function(a){return cg&&void 0!=a.children?a.children:Lb(a.childNodes,function(b){return 1==b.nodeType})};k.isElement=function(a){return Na(a)&&1==a.nodeType};k.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var rg=function(a){this.g="number"==typeof a?0<a?1:0>a?-1:null:null==a?null:a?-1:1};
