function Zw(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(n,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function e$(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var iy={exports:{}},Xl={},sy={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ts=Symbol.for("react.element"),t$=Symbol.for("react.portal"),r$=Symbol.for("react.fragment"),n$=Symbol.for("react.strict_mode"),o$=Symbol.for("react.profiler"),i$=Symbol.for("react.provider"),s$=Symbol.for("react.context"),a$=Symbol.for("react.forward_ref"),l$=Symbol.for("react.suspense"),c$=Symbol.for("react.memo"),d$=Symbol.for("react.lazy"),xp=Symbol.iterator;function u$(e){return e===null||typeof e!="object"?null:(e=xp&&e[xp]||e["@@iterator"],typeof e=="function"?e:null)}var ay={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ly=Object.assign,cy={};function ei(e,t,r){this.props=e,this.context=t,this.refs=cy,this.updater=r||ay}ei.prototype.isReactComponent={};ei.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ei.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dy(){}dy.prototype=ei.prototype;function Lh(e,t,r){this.props=e,this.context=t,this.refs=cy,this.updater=r||ay}var Rh=Lh.prototype=new dy;Rh.constructor=Lh;ly(Rh,ei.prototype);Rh.isPureReactComponent=!0;var yp=Array.isArray,uy=Object.prototype.hasOwnProperty,Ih={current:null},hy={key:!0,ref:!0,__self:!0,__source:!0};function my(e,t,r){var n,i={},s=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)uy.call(t,n)&&!hy.hasOwnProperty(n)&&(i[n]=t[n]);var c=arguments.length-2;if(c===1)i.children=r;else if(1<c){for(var d=Array(c),u=0;u<c;u++)d[u]=arguments[u+2];i.children=d}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)i[n]===void 0&&(i[n]=c[n]);return{$$typeof:Ts,type:e,key:s,ref:a,props:i,_owner:Ih.current}}function h$(e,t){return{$$typeof:Ts,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ts}function m$(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var vp=/\/+/g;function Ic(e,t){return typeof e=="object"&&e!==null&&e.key!=null?m$(""+e.key):t.toString(36)}function Ba(e,t,r,n,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ts:case t$:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+Ic(a,0):n,yp(i)?(r="",e!=null&&(r=e.replace(vp,"$&/")+"/"),Ba(i,t,r,"",function(u){return u})):i!=null&&(Fh(i)&&(i=h$(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(vp,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",yp(e))for(var c=0;c<e.length;c++){s=e[c];var d=n+Ic(s,c);a+=Ba(s,t,r,d,i)}else if(d=u$(e),typeof d=="function")for(e=d.call(e),c=0;!(s=e.next()).done;)s=s.value,d=n+Ic(s,c++),a+=Ba(s,t,r,d,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Bs(e,t,r){if(e==null)return e;var n=[],i=0;return Ba(e,n,"","",function(s){return t.call(r,s,i++)}),n}function p$(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ke={current:null},Oa={transition:null},f$={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:Oa,ReactCurrentOwner:Ih};function py(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:Bs,forEach:function(e,t,r){Bs(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Bs(e,function(){t++}),t},toArray:function(e){return Bs(e,function(t){return t})||[]},only:function(e){if(!Fh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=ei;G.Fragment=r$;G.Profiler=o$;G.PureComponent=Lh;G.StrictMode=n$;G.Suspense=l$;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f$;G.act=py;G.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=ly({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Ih.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)uy.call(t,d)&&!hy.hasOwnProperty(d)&&(n[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)n.children=r;else if(1<d){c=Array(d);for(var u=0;u<d;u++)c[u]=arguments[u+2];n.children=c}return{$$typeof:Ts,type:e.type,key:i,ref:s,props:n,_owner:a}};G.createContext=function(e){return e={$$typeof:s$,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:i$,_context:e},e.Consumer=e};G.createElement=my;G.createFactory=function(e){var t=my.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:a$,render:e}};G.isValidElement=Fh;G.lazy=function(e){return{$$typeof:d$,_payload:{_status:-1,_result:e},_init:p$}};G.memo=function(e,t){return{$$typeof:c$,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=Oa.transition;Oa.transition={};try{e()}finally{Oa.transition=t}};G.unstable_act=py;G.useCallback=function(e,t){return Ke.current.useCallback(e,t)};G.useContext=function(e){return Ke.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Ke.current.useDeferredValue(e)};G.useEffect=function(e,t){return Ke.current.useEffect(e,t)};G.useId=function(){return Ke.current.useId()};G.useImperativeHandle=function(e,t,r){return Ke.current.useImperativeHandle(e,t,r)};G.useInsertionEffect=function(e,t){return Ke.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Ke.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Ke.current.useMemo(e,t)};G.useReducer=function(e,t,r){return Ke.current.useReducer(e,t,r)};G.useRef=function(e){return Ke.current.useRef(e)};G.useState=function(e){return Ke.current.useState(e)};G.useSyncExternalStore=function(e,t,r){return Ke.current.useSyncExternalStore(e,t,r)};G.useTransition=function(){return Ke.current.useTransition()};G.version="18.3.1";sy.exports=G;var $=sy.exports;const le=e$($),g$=Zw({__proto__:null,default:le},[$]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x$=$,y$=Symbol.for("react.element"),v$=Symbol.for("react.fragment"),b$=Object.prototype.hasOwnProperty,w$=x$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$$={key:!0,ref:!0,__self:!0,__source:!0};function fy(e,t,r){var n,i={},s=null,a=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)b$.call(t,n)&&!$$.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:y$,type:e,key:s,ref:a,props:i,_owner:w$.current}}Xl.Fragment=v$;Xl.jsx=fy;Xl.jsxs=fy;iy.exports=Xl;var o=iy.exports,gy={exports:{}},pt={},xy={exports:{}},yy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,M){var B=I.length;I.push(M);e:for(;0<B;){var F=B-1>>>1,_=I[F];if(0<i(_,M))I[F]=M,I[B]=_,B=F;else break e}}function r(I){return I.length===0?null:I[0]}function n(I){if(I.length===0)return null;var M=I[0],B=I.pop();if(B!==M){I[0]=B;e:for(var F=0,_=I.length,gt=_>>>1;F<gt;){var Ne=2*(F+1)-1,it=I[Ne],ge=Ne+1,Ue=I[ge];if(0>i(it,B))ge<_&&0>i(Ue,it)?(I[F]=Ue,I[ge]=B,F=ge):(I[F]=it,I[Ne]=B,F=Ne);else if(ge<_&&0>i(Ue,B))I[F]=Ue,I[ge]=B,F=ge;else break e}}return M}function i(I,M){var B=I.sortIndex-M.sortIndex;return B!==0?B:I.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,c=a.now();e.unstable_now=function(){return a.now()-c}}var d=[],u=[],h=1,m=null,p=3,b=!1,v=!1,j=!1,P=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var M=r(u);M!==null;){if(M.callback===null)n(u);else if(M.startTime<=I)n(u),M.sortIndex=M.expirationTime,t(d,M);else break;M=r(u)}}function x(I){if(j=!1,g(I),!v)if(r(d)!==null)v=!0,Q(C);else{var M=r(u);M!==null&&ve(x,M.startTime-I)}}function C(I,M){v=!1,j&&(j=!1,y(w),w=-1),b=!0;var B=p;try{for(g(M),m=r(d);m!==null&&(!(m.expirationTime>M)||I&&!U());){var F=m.callback;if(typeof F=="function"){m.callback=null,p=m.priorityLevel;var _=F(m.expirationTime<=M);M=e.unstable_now(),typeof _=="function"?m.callback=_:m===r(d)&&n(d),g(M)}else n(d);m=r(d)}if(m!==null)var gt=!0;else{var Ne=r(u);Ne!==null&&ve(x,Ne.startTime-M),gt=!1}return gt}finally{m=null,p=B,b=!1}}var k=!1,S=null,w=-1,A=5,T=-1;function U(){return!(e.unstable_now()-T<A)}function L(){if(S!==null){var I=e.unstable_now();T=I;var M=!0;try{M=S(!0,I)}finally{M?R():(k=!1,S=null)}}else k=!1}var R;if(typeof f=="function")R=function(){f(L)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,re=V.port2;V.port1.onmessage=L,R=function(){re.postMessage(null)}}else R=function(){P(L,0)};function Q(I){S=I,k||(k=!0,R())}function ve(I,M){w=P(function(){I(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){v||b||(v=!0,Q(C))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(d)},e.unstable_next=function(I){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var B=p;p=M;try{return I()}finally{p=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,M){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var B=p;p=I;try{return M()}finally{p=B}},e.unstable_scheduleCallback=function(I,M,B){var F=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?F+B:F):B=F,I){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=B+_,I={id:h++,callback:M,priorityLevel:I,startTime:B,expirationTime:_,sortIndex:-1},B>F?(I.sortIndex=B,t(u,I),r(d)===null&&I===r(u)&&(j?(y(w),w=-1):j=!0,ve(x,B-F))):(I.sortIndex=_,t(d,I),v||b||(v=!0,Q(C))),I},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(I){var M=p;return function(){var B=p;p=M;try{return I.apply(this,arguments)}finally{p=B}}}})(yy);xy.exports=yy;var j$=xy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k$=$,ut=j$;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vy=new Set,Xi={};function Vn(e,t){Fo(e,t),Fo(e+"Capture",t)}function Fo(e,t){for(Xi[e]=t,e=0;e<t.length;e++)vy.add(t[e])}var lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=Object.prototype.hasOwnProperty,C$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bp={},wp={};function S$(e){return uu.call(wp,e)?!0:uu.call(bp,e)?!1:C$.test(e)?wp[e]=!0:(bp[e]=!0,!1)}function P$(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T$(e,t,r,n){if(t===null||typeof t>"u"||P$(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,r,n,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Nh=/[\-:]([a-z])/g;function Bh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Nh,Bh);Fe[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Nh,Bh);Fe[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Nh,Bh);Fe[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Oh(e,t,r,n){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(T$(t,r,i,n)&&(r=null),n||i===null?S$(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var xr=k$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Os=Symbol.for("react.element"),mo=Symbol.for("react.portal"),po=Symbol.for("react.fragment"),Vh=Symbol.for("react.strict_mode"),hu=Symbol.for("react.profiler"),by=Symbol.for("react.provider"),wy=Symbol.for("react.context"),_h=Symbol.for("react.forward_ref"),mu=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),Wh=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),$y=Symbol.for("react.offscreen"),$p=Symbol.iterator;function ai(e){return e===null||typeof e!="object"?null:(e=$p&&e[$p]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,Fc;function Mi(e){if(Fc===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Fc=t&&t[1]||""}return`
`+Fc+e}var Nc=!1;function Bc(e,t){if(!e||Nc)return"";Nc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=n.stack.split(`
`),a=i.length-1,c=s.length-1;1<=a&&0<=c&&i[a]!==s[c];)c--;for(;1<=a&&0<=c;a--,c--)if(i[a]!==s[c]){if(a!==1||c!==1)do if(a--,c--,0>c||i[a]!==s[c]){var d=`
`+i[a].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=a&&0<=c);break}}}finally{Nc=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Mi(e):""}function A$(e){switch(e.tag){case 5:return Mi(e.type);case 16:return Mi("Lazy");case 13:return Mi("Suspense");case 19:return Mi("SuspenseList");case 0:case 2:case 15:return e=Bc(e.type,!1),e;case 11:return e=Bc(e.type.render,!1),e;case 1:return e=Bc(e.type,!0),e;default:return""}}function fu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case po:return"Fragment";case mo:return"Portal";case hu:return"Profiler";case Vh:return"StrictMode";case mu:return"Suspense";case pu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wy:return(e.displayName||"Context")+".Consumer";case by:return(e._context.displayName||"Context")+".Provider";case _h:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wh:return t=e.displayName||null,t!==null?t:fu(e.type)||"Memo";case Ar:t=e._payload,e=e._init;try{return fu(e(t))}catch{}}return null}function M$(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fu(t);case 8:return t===Vh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function z$(e){var t=jy(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vs(e){e._valueTracker||(e._valueTracker=z$(e))}function ky(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=jy(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gu(e,t){var r=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function jp(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Qr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cy(e,t){t=t.checked,t!=null&&Oh(e,"checked",t,!1)}function xu(e,t){Cy(e,t);var r=Qr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yu(e,t.type,r):t.hasOwnProperty("defaultValue")&&yu(e,t.type,Qr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function kp(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function yu(e,t,r){(t!=="number"||il(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var zi=Array.isArray;function Mo(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Qr(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function vu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cp(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(E(92));if(zi(r)){if(1<r.length)throw Error(E(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Qr(r)}}function Sy(e,t){var r=Qr(t.value),n=Qr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Sp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Py(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Py(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _s,Ty=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_s=_s||document.createElement("div"),_s.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_s.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ji(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D$=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(e){D$.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ii[t]=Ii[e]})});function Ay(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ii.hasOwnProperty(e)&&Ii[e]?(""+t).trim():t+"px"}function My(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Ay(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var E$=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wu(e,t){if(t){if(E$[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function $u(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ju=null;function Uh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ku=null,zo=null,Do=null;function Pp(e){if(e=zs(e)){if(typeof ku!="function")throw Error(E(280));var t=e.stateNode;t&&(t=rc(t),ku(e.stateNode,e.type,t))}}function zy(e){zo?Do?Do.push(e):Do=[e]:zo=e}function Dy(){if(zo){var e=zo,t=Do;if(Do=zo=null,Pp(e),t)for(e=0;e<t.length;e++)Pp(t[e])}}function Ey(e,t){return e(t)}function Ly(){}var Oc=!1;function Ry(e,t,r){if(Oc)return e(t,r);Oc=!0;try{return Ey(e,t,r)}finally{Oc=!1,(zo!==null||Do!==null)&&(Ly(),Dy())}}function Zi(e,t){var r=e.stateNode;if(r===null)return null;var n=rc(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(E(231,t,typeof r));return r}var Cu=!1;if(lr)try{var li={};Object.defineProperty(li,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",li,li),window.removeEventListener("test",li,li)}catch{Cu=!1}function L$(e,t,r,n,i,s,a,c,d){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(h){this.onError(h)}}var Fi=!1,sl=null,al=!1,Su=null,R$={onError:function(e){Fi=!0,sl=e}};function I$(e,t,r,n,i,s,a,c,d){Fi=!1,sl=null,L$.apply(R$,arguments)}function F$(e,t,r,n,i,s,a,c,d){if(I$.apply(this,arguments),Fi){if(Fi){var u=sl;Fi=!1,sl=null}else throw Error(E(198));al||(al=!0,Su=u)}}function _n(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Iy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tp(e){if(_n(e)!==e)throw Error(E(188))}function N$(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(E(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return Tp(i),e;if(s===n)return Tp(i),t;s=s.sibling}throw Error(E(188))}if(r.return!==n.return)r=i,n=s;else{for(var a=!1,c=i.child;c;){if(c===r){a=!0,r=i,n=s;break}if(c===n){a=!0,n=i,r=s;break}c=c.sibling}if(!a){for(c=s.child;c;){if(c===r){a=!0,r=s,n=i;break}if(c===n){a=!0,n=s,r=i;break}c=c.sibling}if(!a)throw Error(E(189))}}if(r.alternate!==n)throw Error(E(190))}if(r.tag!==3)throw Error(E(188));return r.stateNode.current===r?e:t}function Fy(e){return e=N$(e),e!==null?Ny(e):null}function Ny(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ny(e);if(t!==null)return t;e=e.sibling}return null}var By=ut.unstable_scheduleCallback,Ap=ut.unstable_cancelCallback,B$=ut.unstable_shouldYield,O$=ut.unstable_requestPaint,be=ut.unstable_now,V$=ut.unstable_getCurrentPriorityLevel,Hh=ut.unstable_ImmediatePriority,Oy=ut.unstable_UserBlockingPriority,ll=ut.unstable_NormalPriority,_$=ut.unstable_LowPriority,Vy=ut.unstable_IdlePriority,Jl=null,Ut=null;function W$(e){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Jl,e,void 0,(e.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:G$,U$=Math.log,H$=Math.LN2;function G$(e){return e>>>=0,e===0?32:31-(U$(e)/H$|0)|0}var Ws=64,Us=4194304;function Di(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function cl(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes,a=r&268435455;if(a!==0){var c=a&~i;c!==0?n=Di(c):(s&=a,s!==0&&(n=Di(s)))}else a=r&~i,a!==0?n=Di(a):s!==0&&(n=Di(s));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Dt(t),i=1<<r,n|=e[r],t&=~i;return n}function Y$(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q$(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-Dt(s),c=1<<a,d=i[a];d===-1?(!(c&r)||c&n)&&(i[a]=Y$(c,t)):d<=t&&(e.expiredLanes|=c),s&=~c}}function Pu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _y(){var e=Ws;return Ws<<=1,!(Ws&4194240)&&(Ws=64),e}function Vc(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function As(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dt(t),e[t]=r}function Q$(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Dt(r),s=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~s}}function Gh(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Dt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var J=0;function Wy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Uy,Yh,Hy,Gy,Yy,Tu=!1,Hs=[],Fr=null,Nr=null,Br=null,es=new Map,ts=new Map,Dr=[],K$="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mp(e,t){switch(e){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":es.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ts.delete(t.pointerId)}}function ci(e,t,r,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=zs(t),t!==null&&Yh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function X$(e,t,r,n,i){switch(t){case"focusin":return Fr=ci(Fr,e,t,r,n,i),!0;case"dragenter":return Nr=ci(Nr,e,t,r,n,i),!0;case"mouseover":return Br=ci(Br,e,t,r,n,i),!0;case"pointerover":var s=i.pointerId;return es.set(s,ci(es.get(s)||null,e,t,r,n,i)),!0;case"gotpointercapture":return s=i.pointerId,ts.set(s,ci(ts.get(s)||null,e,t,r,n,i)),!0}return!1}function qy(e){var t=kn(e.target);if(t!==null){var r=_n(t);if(r!==null){if(t=r.tag,t===13){if(t=Iy(r),t!==null){e.blockedOn=t,Yy(e.priority,function(){Hy(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Va(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Au(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);ju=n,r.target.dispatchEvent(n),ju=null}else return t=zs(r),t!==null&&Yh(t),e.blockedOn=r,!1;t.shift()}return!0}function zp(e,t,r){Va(e)&&r.delete(t)}function J$(){Tu=!1,Fr!==null&&Va(Fr)&&(Fr=null),Nr!==null&&Va(Nr)&&(Nr=null),Br!==null&&Va(Br)&&(Br=null),es.forEach(zp),ts.forEach(zp)}function di(e,t){e.blockedOn===t&&(e.blockedOn=null,Tu||(Tu=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,J$)))}function rs(e){function t(i){return di(i,e)}if(0<Hs.length){di(Hs[0],e);for(var r=1;r<Hs.length;r++){var n=Hs[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Fr!==null&&di(Fr,e),Nr!==null&&di(Nr,e),Br!==null&&di(Br,e),es.forEach(t),ts.forEach(t),r=0;r<Dr.length;r++)n=Dr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Dr.length&&(r=Dr[0],r.blockedOn===null);)qy(r),r.blockedOn===null&&Dr.shift()}var Eo=xr.ReactCurrentBatchConfig,dl=!0;function Z$(e,t,r,n){var i=J,s=Eo.transition;Eo.transition=null;try{J=1,qh(e,t,r,n)}finally{J=i,Eo.transition=s}}function e2(e,t,r,n){var i=J,s=Eo.transition;Eo.transition=null;try{J=4,qh(e,t,r,n)}finally{J=i,Eo.transition=s}}function qh(e,t,r,n){if(dl){var i=Au(e,t,r,n);if(i===null)Xc(e,t,n,ul,r),Mp(e,n);else if(X$(i,e,t,r,n))n.stopPropagation();else if(Mp(e,n),t&4&&-1<K$.indexOf(e)){for(;i!==null;){var s=zs(i);if(s!==null&&Uy(s),s=Au(e,t,r,n),s===null&&Xc(e,t,n,ul,r),s===i)break;i=s}i!==null&&n.stopPropagation()}else Xc(e,t,n,null,r)}}var ul=null;function Au(e,t,r,n){if(ul=null,e=Uh(n),e=kn(e),e!==null)if(t=_n(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Iy(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ul=e,null}function Qy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(V$()){case Hh:return 1;case Oy:return 4;case ll:case _$:return 16;case Vy:return 536870912;default:return 16}default:return 16}}var Lr=null,Qh=null,_a=null;function Ky(){if(_a)return _a;var e,t=Qh,r=t.length,n,i="value"in Lr?Lr.value:Lr.textContent,s=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[s-n];n++);return _a=i.slice(e,1<n?1-n:void 0)}function Wa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gs(){return!0}function Dp(){return!1}function ft(e){function t(r,n,i,s,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(r=e[c],this[c]=r?r(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gs:Dp,this.isPropagationStopped=Dp,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Gs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Gs)},persist:function(){},isPersistent:Gs}),t}var ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kh=ft(ti),Ms=fe({},ti,{view:0,detail:0}),t2=ft(Ms),_c,Wc,ui,Zl=fe({},Ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ui&&(ui&&e.type==="mousemove"?(_c=e.screenX-ui.screenX,Wc=e.screenY-ui.screenY):Wc=_c=0,ui=e),_c)},movementY:function(e){return"movementY"in e?e.movementY:Wc}}),Ep=ft(Zl),r2=fe({},Zl,{dataTransfer:0}),n2=ft(r2),o2=fe({},Ms,{relatedTarget:0}),Uc=ft(o2),i2=fe({},ti,{animationName:0,elapsedTime:0,pseudoElement:0}),s2=ft(i2),a2=fe({},ti,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),l2=ft(a2),c2=fe({},ti,{data:0}),Lp=ft(c2),d2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=h2[e])?!!t[e]:!1}function Xh(){return m2}var p2=fe({},Ms,{key:function(e){if(e.key){var t=d2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?u2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xh,charCode:function(e){return e.type==="keypress"?Wa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),f2=ft(p2),g2=fe({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=ft(g2),x2=fe({},Ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xh}),y2=ft(x2),v2=fe({},ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),b2=ft(v2),w2=fe({},Zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$2=ft(w2),j2=[9,13,27,32],Jh=lr&&"CompositionEvent"in window,Ni=null;lr&&"documentMode"in document&&(Ni=document.documentMode);var k2=lr&&"TextEvent"in window&&!Ni,Xy=lr&&(!Jh||Ni&&8<Ni&&11>=Ni),Ip=" ",Fp=!1;function Jy(e,t){switch(e){case"keyup":return j2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fo=!1;function C2(e,t){switch(e){case"compositionend":return Zy(t);case"keypress":return t.which!==32?null:(Fp=!0,Ip);case"textInput":return e=t.data,e===Ip&&Fp?null:e;default:return null}}function S2(e,t){if(fo)return e==="compositionend"||!Jh&&Jy(e,t)?(e=Ky(),_a=Qh=Lr=null,fo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xy&&t.locale!=="ko"?null:t.data;default:return null}}var P2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!P2[e.type]:t==="textarea"}function e1(e,t,r,n){zy(n),t=hl(t,"onChange"),0<t.length&&(r=new Kh("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Bi=null,ns=null;function T2(e){u1(e,0)}function ec(e){var t=yo(e);if(ky(t))return e}function A2(e,t){if(e==="change")return t}var t1=!1;if(lr){var Hc;if(lr){var Gc="oninput"in document;if(!Gc){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),Gc=typeof Bp.oninput=="function"}Hc=Gc}else Hc=!1;t1=Hc&&(!document.documentMode||9<document.documentMode)}function Op(){Bi&&(Bi.detachEvent("onpropertychange",r1),ns=Bi=null)}function r1(e){if(e.propertyName==="value"&&ec(ns)){var t=[];e1(t,ns,e,Uh(e)),Ry(T2,t)}}function M2(e,t,r){e==="focusin"?(Op(),Bi=t,ns=r,Bi.attachEvent("onpropertychange",r1)):e==="focusout"&&Op()}function z2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ec(ns)}function D2(e,t){if(e==="click")return ec(t)}function E2(e,t){if(e==="input"||e==="change")return ec(t)}function L2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:L2;function os(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!uu.call(t,i)||!Rt(e[i],t[i]))return!1}return!0}function Vp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _p(e,t){var r=Vp(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Vp(r)}}function n1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?n1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function o1(){for(var e=window,t=il();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=il(e.document)}return t}function Zh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function R2(e){var t=o1(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&n1(r.ownerDocument.documentElement,r)){if(n!==null&&Zh(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!e.extend&&s>n&&(i=n,n=s,s=i),i=_p(r,s);var a=_p(r,n);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var I2=lr&&"documentMode"in document&&11>=document.documentMode,go=null,Mu=null,Oi=null,zu=!1;function Wp(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;zu||go==null||go!==il(n)||(n=go,"selectionStart"in n&&Zh(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Oi&&os(Oi,n)||(Oi=n,n=hl(Mu,"onSelect"),0<n.length&&(t=new Kh("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=go)))}function Ys(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var xo={animationend:Ys("Animation","AnimationEnd"),animationiteration:Ys("Animation","AnimationIteration"),animationstart:Ys("Animation","AnimationStart"),transitionend:Ys("Transition","TransitionEnd")},Yc={},i1={};lr&&(i1=document.createElement("div").style,"AnimationEvent"in window||(delete xo.animationend.animation,delete xo.animationiteration.animation,delete xo.animationstart.animation),"TransitionEvent"in window||delete xo.transitionend.transition);function tc(e){if(Yc[e])return Yc[e];if(!xo[e])return e;var t=xo[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in i1)return Yc[e]=t[r];return e}var s1=tc("animationend"),a1=tc("animationiteration"),l1=tc("animationstart"),c1=tc("transitionend"),d1=new Map,Up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){d1.set(e,t),Vn(t,[e])}for(var qc=0;qc<Up.length;qc++){var Qc=Up[qc],F2=Qc.toLowerCase(),N2=Qc[0].toUpperCase()+Qc.slice(1);tn(F2,"on"+N2)}tn(s1,"onAnimationEnd");tn(a1,"onAnimationIteration");tn(l1,"onAnimationStart");tn("dblclick","onDoubleClick");tn("focusin","onFocus");tn("focusout","onBlur");tn(c1,"onTransitionEnd");Fo("onMouseEnter",["mouseout","mouseover"]);Fo("onMouseLeave",["mouseout","mouseover"]);Fo("onPointerEnter",["pointerout","pointerover"]);Fo("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ei));function Hp(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,F$(n,t,void 0,e),e.currentTarget=null}function u1(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var a=n.length-1;0<=a;a--){var c=n[a],d=c.instance,u=c.currentTarget;if(c=c.listener,d!==s&&i.isPropagationStopped())break e;Hp(i,c,u),s=d}else for(a=0;a<n.length;a++){if(c=n[a],d=c.instance,u=c.currentTarget,c=c.listener,d!==s&&i.isPropagationStopped())break e;Hp(i,c,u),s=d}}}if(al)throw e=Su,al=!1,Su=null,e}function oe(e,t){var r=t[Iu];r===void 0&&(r=t[Iu]=new Set);var n=e+"__bubble";r.has(n)||(h1(t,e,2,!1),r.add(n))}function Kc(e,t,r){var n=0;t&&(n|=4),h1(r,e,n,t)}var qs="_reactListening"+Math.random().toString(36).slice(2);function is(e){if(!e[qs]){e[qs]=!0,vy.forEach(function(r){r!=="selectionchange"&&(B2.has(r)||Kc(r,!1,e),Kc(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qs]||(t[qs]=!0,Kc("selectionchange",!1,t))}}function h1(e,t,r,n){switch(Qy(t)){case 1:var i=Z$;break;case 4:i=e2;break;default:i=qh}r=i.bind(null,t,r,e),i=void 0,!Cu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Xc(e,t,r,n,i){var s=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var c=n.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var d=a.tag;if((d===3||d===4)&&(d=a.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;a=a.return}for(;c!==null;){if(a=kn(c),a===null)return;if(d=a.tag,d===5||d===6){n=s=a;continue e}c=c.parentNode}}n=n.return}Ry(function(){var u=s,h=Uh(r),m=[];e:{var p=d1.get(e);if(p!==void 0){var b=Kh,v=e;switch(e){case"keypress":if(Wa(r)===0)break e;case"keydown":case"keyup":b=f2;break;case"focusin":v="focus",b=Uc;break;case"focusout":v="blur",b=Uc;break;case"beforeblur":case"afterblur":b=Uc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=n2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=y2;break;case s1:case a1:case l1:b=s2;break;case c1:b=b2;break;case"scroll":b=t2;break;case"wheel":b=$2;break;case"copy":case"cut":case"paste":b=l2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Rp}var j=(t&4)!==0,P=!j&&e==="scroll",y=j?p!==null?p+"Capture":null:p;j=[];for(var f=u,g;f!==null;){g=f;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,y!==null&&(x=Zi(f,y),x!=null&&j.push(ss(f,x,g)))),P)break;f=f.return}0<j.length&&(p=new b(p,v,null,r,h),m.push({event:p,listeners:j}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",p&&r!==ju&&(v=r.relatedTarget||r.fromElement)&&(kn(v)||v[cr]))break e;if((b||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,b?(v=r.relatedTarget||r.toElement,b=u,v=v?kn(v):null,v!==null&&(P=_n(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(b=null,v=u),b!==v)){if(j=Ep,x="onMouseLeave",y="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(j=Rp,x="onPointerLeave",y="onPointerEnter",f="pointer"),P=b==null?p:yo(b),g=v==null?p:yo(v),p=new j(x,f+"leave",b,r,h),p.target=P,p.relatedTarget=g,x=null,kn(h)===u&&(j=new j(y,f+"enter",v,r,h),j.target=g,j.relatedTarget=P,x=j),P=x,b&&v)t:{for(j=b,y=v,f=0,g=j;g;g=Gn(g))f++;for(g=0,x=y;x;x=Gn(x))g++;for(;0<f-g;)j=Gn(j),f--;for(;0<g-f;)y=Gn(y),g--;for(;f--;){if(j===y||y!==null&&j===y.alternate)break t;j=Gn(j),y=Gn(y)}j=null}else j=null;b!==null&&Gp(m,p,b,j,!1),v!==null&&P!==null&&Gp(m,P,v,j,!0)}}e:{if(p=u?yo(u):window,b=p.nodeName&&p.nodeName.toLowerCase(),b==="select"||b==="input"&&p.type==="file")var C=A2;else if(Np(p))if(t1)C=E2;else{C=z2;var k=M2}else(b=p.nodeName)&&b.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=D2);if(C&&(C=C(e,u))){e1(m,C,r,h);break e}k&&k(e,p,u),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&yu(p,"number",p.value)}switch(k=u?yo(u):window,e){case"focusin":(Np(k)||k.contentEditable==="true")&&(go=k,Mu=u,Oi=null);break;case"focusout":Oi=Mu=go=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,Wp(m,r,h);break;case"selectionchange":if(I2)break;case"keydown":case"keyup":Wp(m,r,h)}var S;if(Jh)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else fo?Jy(e,r)&&(w="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(w="onCompositionStart");w&&(Xy&&r.locale!=="ko"&&(fo||w!=="onCompositionStart"?w==="onCompositionEnd"&&fo&&(S=Ky()):(Lr=h,Qh="value"in Lr?Lr.value:Lr.textContent,fo=!0)),k=hl(u,w),0<k.length&&(w=new Lp(w,e,null,r,h),m.push({event:w,listeners:k}),S?w.data=S:(S=Zy(r),S!==null&&(w.data=S)))),(S=k2?C2(e,r):S2(e,r))&&(u=hl(u,"onBeforeInput"),0<u.length&&(h=new Lp("onBeforeInput","beforeinput",null,r,h),m.push({event:h,listeners:u}),h.data=S))}u1(m,t)})}function ss(e,t,r){return{instance:e,listener:t,currentTarget:r}}function hl(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zi(e,r),s!=null&&n.unshift(ss(e,s,i)),s=Zi(e,t),s!=null&&n.push(ss(e,s,i))),e=e.return}return n}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gp(e,t,r,n,i){for(var s=t._reactName,a=[];r!==null&&r!==n;){var c=r,d=c.alternate,u=c.stateNode;if(d!==null&&d===n)break;c.tag===5&&u!==null&&(c=u,i?(d=Zi(r,s),d!=null&&a.unshift(ss(r,d,c))):i||(d=Zi(r,s),d!=null&&a.push(ss(r,d,c)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var O2=/\r\n?/g,V2=/\u0000|\uFFFD/g;function Yp(e){return(typeof e=="string"?e:""+e).replace(O2,`
`).replace(V2,"")}function Qs(e,t,r){if(t=Yp(t),Yp(e)!==t&&r)throw Error(E(425))}function ml(){}var Du=null,Eu=null;function Lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ru=typeof setTimeout=="function"?setTimeout:void 0,_2=typeof clearTimeout=="function"?clearTimeout:void 0,qp=typeof Promise=="function"?Promise:void 0,W2=typeof queueMicrotask=="function"?queueMicrotask:typeof qp<"u"?function(e){return qp.resolve(null).then(e).catch(U2)}:Ru;function U2(e){setTimeout(function(){throw e})}function Jc(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),rs(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);rs(t)}function Or(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ri=Math.random().toString(36).slice(2),Wt="__reactFiber$"+ri,as="__reactProps$"+ri,cr="__reactContainer$"+ri,Iu="__reactEvents$"+ri,H2="__reactListeners$"+ri,G2="__reactHandles$"+ri;function kn(e){var t=e[Wt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[cr]||r[Wt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Qp(e);e!==null;){if(r=e[Wt])return r;e=Qp(e)}return t}e=r,r=e.parentNode}return null}function zs(e){return e=e[Wt]||e[cr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function rc(e){return e[as]||null}var Fu=[],vo=-1;function rn(e){return{current:e}}function se(e){0>vo||(e.current=Fu[vo],Fu[vo]=null,vo--)}function ee(e,t){vo++,Fu[vo]=e.current,e.current=t}var Kr={},We=rn(Kr),tt=rn(!1),En=Kr;function No(e,t){var r=e.type.contextTypes;if(!r)return Kr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function rt(e){return e=e.childContextTypes,e!=null}function pl(){se(tt),se(We)}function Kp(e,t,r){if(We.current!==Kr)throw Error(E(168));ee(We,t),ee(tt,r)}function m1(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(E(108,M$(e)||"Unknown",i));return fe({},r,n)}function fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kr,En=We.current,ee(We,e),ee(tt,tt.current),!0}function Xp(e,t,r){var n=e.stateNode;if(!n)throw Error(E(169));r?(e=m1(e,t,En),n.__reactInternalMemoizedMergedChildContext=e,se(tt),se(We),ee(We,e)):se(tt),ee(tt,r)}var tr=null,nc=!1,Zc=!1;function p1(e){tr===null?tr=[e]:tr.push(e)}function Y2(e){nc=!0,p1(e)}function nn(){if(!Zc&&tr!==null){Zc=!0;var e=0,t=J;try{var r=tr;for(J=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}tr=null,nc=!1}catch(i){throw tr!==null&&(tr=tr.slice(e+1)),By(Hh,nn),i}finally{J=t,Zc=!1}}return null}var bo=[],wo=0,gl=null,xl=0,vt=[],bt=0,Ln=null,rr=1,nr="";function yn(e,t){bo[wo++]=xl,bo[wo++]=gl,gl=e,xl=t}function f1(e,t,r){vt[bt++]=rr,vt[bt++]=nr,vt[bt++]=Ln,Ln=e;var n=rr;e=nr;var i=32-Dt(n)-1;n&=~(1<<i),r+=1;var s=32-Dt(t)+i;if(30<s){var a=i-i%5;s=(n&(1<<a)-1).toString(32),n>>=a,i-=a,rr=1<<32-Dt(t)+i|r<<i|n,nr=s+e}else rr=1<<s|r<<i|n,nr=e}function em(e){e.return!==null&&(yn(e,1),f1(e,1,0))}function tm(e){for(;e===gl;)gl=bo[--wo],bo[wo]=null,xl=bo[--wo],bo[wo]=null;for(;e===Ln;)Ln=vt[--bt],vt[bt]=null,nr=vt[--bt],vt[bt]=null,rr=vt[--bt],vt[bt]=null}var ct=null,lt=null,ae=!1,zt=null;function g1(e,t){var r=wt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Jp(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,lt=Or(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ln!==null?{id:rr,overflow:nr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=wt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ct=e,lt=null,!0):!1;default:return!1}}function Nu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bu(e){if(ae){var t=lt;if(t){var r=t;if(!Jp(e,t)){if(Nu(e))throw Error(E(418));t=Or(r.nextSibling);var n=ct;t&&Jp(e,t)?g1(n,r):(e.flags=e.flags&-4097|2,ae=!1,ct=e)}}else{if(Nu(e))throw Error(E(418));e.flags=e.flags&-4097|2,ae=!1,ct=e}}}function Zp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function Ks(e){if(e!==ct)return!1;if(!ae)return Zp(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lu(e.type,e.memoizedProps)),t&&(t=lt)){if(Nu(e))throw x1(),Error(E(418));for(;t;)g1(e,t),t=Or(t.nextSibling)}if(Zp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){lt=Or(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=ct?Or(e.stateNode.nextSibling):null;return!0}function x1(){for(var e=lt;e;)e=Or(e.nextSibling)}function Bo(){lt=ct=null,ae=!1}function rm(e){zt===null?zt=[e]:zt.push(e)}var q2=xr.ReactCurrentBatchConfig;function hi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(E(309));var n=r.stateNode}if(!n)throw Error(E(147,e));var i=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var c=i.refs;a===null?delete c[s]:c[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(E(284));if(!r._owner)throw Error(E(290,e))}return e}function Xs(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ef(e){var t=e._init;return t(e._payload)}function y1(e){function t(y,f){if(e){var g=y.deletions;g===null?(y.deletions=[f],y.flags|=16):g.push(f)}}function r(y,f){if(!e)return null;for(;f!==null;)t(y,f),f=f.sibling;return null}function n(y,f){for(y=new Map;f!==null;)f.key!==null?y.set(f.key,f):y.set(f.index,f),f=f.sibling;return y}function i(y,f){return y=Ur(y,f),y.index=0,y.sibling=null,y}function s(y,f,g){return y.index=g,e?(g=y.alternate,g!==null?(g=g.index,g<f?(y.flags|=2,f):g):(y.flags|=2,f)):(y.flags|=1048576,f)}function a(y){return e&&y.alternate===null&&(y.flags|=2),y}function c(y,f,g,x){return f===null||f.tag!==6?(f=sd(g,y.mode,x),f.return=y,f):(f=i(f,g),f.return=y,f)}function d(y,f,g,x){var C=g.type;return C===po?h(y,f,g.props.children,x,g.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ar&&ef(C)===f.type)?(x=i(f,g.props),x.ref=hi(y,f,g),x.return=y,x):(x=Ka(g.type,g.key,g.props,null,y.mode,x),x.ref=hi(y,f,g),x.return=y,x)}function u(y,f,g,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=ad(g,y.mode,x),f.return=y,f):(f=i(f,g.children||[]),f.return=y,f)}function h(y,f,g,x,C){return f===null||f.tag!==7?(f=Mn(g,y.mode,x,C),f.return=y,f):(f=i(f,g),f.return=y,f)}function m(y,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=sd(""+f,y.mode,g),f.return=y,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Os:return g=Ka(f.type,f.key,f.props,null,y.mode,g),g.ref=hi(y,null,f),g.return=y,g;case mo:return f=ad(f,y.mode,g),f.return=y,f;case Ar:var x=f._init;return m(y,x(f._payload),g)}if(zi(f)||ai(f))return f=Mn(f,y.mode,g,null),f.return=y,f;Xs(y,f)}return null}function p(y,f,g,x){var C=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:c(y,f,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Os:return g.key===C?d(y,f,g,x):null;case mo:return g.key===C?u(y,f,g,x):null;case Ar:return C=g._init,p(y,f,C(g._payload),x)}if(zi(g)||ai(g))return C!==null?null:h(y,f,g,x,null);Xs(y,g)}return null}function b(y,f,g,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return y=y.get(g)||null,c(f,y,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Os:return y=y.get(x.key===null?g:x.key)||null,d(f,y,x,C);case mo:return y=y.get(x.key===null?g:x.key)||null,u(f,y,x,C);case Ar:var k=x._init;return b(y,f,g,k(x._payload),C)}if(zi(x)||ai(x))return y=y.get(g)||null,h(f,y,x,C,null);Xs(f,x)}return null}function v(y,f,g,x){for(var C=null,k=null,S=f,w=f=0,A=null;S!==null&&w<g.length;w++){S.index>w?(A=S,S=null):A=S.sibling;var T=p(y,S,g[w],x);if(T===null){S===null&&(S=A);break}e&&S&&T.alternate===null&&t(y,S),f=s(T,f,w),k===null?C=T:k.sibling=T,k=T,S=A}if(w===g.length)return r(y,S),ae&&yn(y,w),C;if(S===null){for(;w<g.length;w++)S=m(y,g[w],x),S!==null&&(f=s(S,f,w),k===null?C=S:k.sibling=S,k=S);return ae&&yn(y,w),C}for(S=n(y,S);w<g.length;w++)A=b(S,y,w,g[w],x),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?w:A.key),f=s(A,f,w),k===null?C=A:k.sibling=A,k=A);return e&&S.forEach(function(U){return t(y,U)}),ae&&yn(y,w),C}function j(y,f,g,x){var C=ai(g);if(typeof C!="function")throw Error(E(150));if(g=C.call(g),g==null)throw Error(E(151));for(var k=C=null,S=f,w=f=0,A=null,T=g.next();S!==null&&!T.done;w++,T=g.next()){S.index>w?(A=S,S=null):A=S.sibling;var U=p(y,S,T.value,x);if(U===null){S===null&&(S=A);break}e&&S&&U.alternate===null&&t(y,S),f=s(U,f,w),k===null?C=U:k.sibling=U,k=U,S=A}if(T.done)return r(y,S),ae&&yn(y,w),C;if(S===null){for(;!T.done;w++,T=g.next())T=m(y,T.value,x),T!==null&&(f=s(T,f,w),k===null?C=T:k.sibling=T,k=T);return ae&&yn(y,w),C}for(S=n(y,S);!T.done;w++,T=g.next())T=b(S,y,w,T.value,x),T!==null&&(e&&T.alternate!==null&&S.delete(T.key===null?w:T.key),f=s(T,f,w),k===null?C=T:k.sibling=T,k=T);return e&&S.forEach(function(L){return t(y,L)}),ae&&yn(y,w),C}function P(y,f,g,x){if(typeof g=="object"&&g!==null&&g.type===po&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Os:e:{for(var C=g.key,k=f;k!==null;){if(k.key===C){if(C=g.type,C===po){if(k.tag===7){r(y,k.sibling),f=i(k,g.props.children),f.return=y,y=f;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ar&&ef(C)===k.type){r(y,k.sibling),f=i(k,g.props),f.ref=hi(y,k,g),f.return=y,y=f;break e}r(y,k);break}else t(y,k);k=k.sibling}g.type===po?(f=Mn(g.props.children,y.mode,x,g.key),f.return=y,y=f):(x=Ka(g.type,g.key,g.props,null,y.mode,x),x.ref=hi(y,f,g),x.return=y,y=x)}return a(y);case mo:e:{for(k=g.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){r(y,f.sibling),f=i(f,g.children||[]),f.return=y,y=f;break e}else{r(y,f);break}else t(y,f);f=f.sibling}f=ad(g,y.mode,x),f.return=y,y=f}return a(y);case Ar:return k=g._init,P(y,f,k(g._payload),x)}if(zi(g))return v(y,f,g,x);if(ai(g))return j(y,f,g,x);Xs(y,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(r(y,f.sibling),f=i(f,g),f.return=y,y=f):(r(y,f),f=sd(g,y.mode,x),f.return=y,y=f),a(y)):r(y,f)}return P}var Oo=y1(!0),v1=y1(!1),yl=rn(null),vl=null,$o=null,nm=null;function om(){nm=$o=vl=null}function im(e){var t=yl.current;se(yl),e._currentValue=t}function Ou(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Lo(e,t){vl=e,nm=$o=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(et=!0),e.firstContext=null)}function jt(e){var t=e._currentValue;if(nm!==e)if(e={context:e,memoizedValue:t,next:null},$o===null){if(vl===null)throw Error(E(308));$o=e,vl.dependencies={lanes:0,firstContext:e}}else $o=$o.next=e;return t}var Cn=null;function sm(e){Cn===null?Cn=[e]:Cn.push(e)}function b1(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,sm(t)):(r.next=i.next,i.next=r),t.interleaved=r,dr(e,n)}function dr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Mr=!1;function am(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function w1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ir(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,q&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,dr(e,r)}return i=n.interleaved,i===null?(t.next=t,sm(n)):(t.next=i.next,i.next=t),n.interleaved=t,dr(e,r)}function Ua(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Gh(e,r)}}function tf(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=a:s=s.next=a,r=r.next}while(r!==null);s===null?i=s=t:s=s.next=t}else i=s=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function bl(e,t,r,n){var i=e.updateQueue;Mr=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var d=c,u=d.next;d.next=null,a===null?s=u:a.next=u,a=d;var h=e.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==a&&(c===null?h.firstBaseUpdate=u:c.next=u,h.lastBaseUpdate=d))}if(s!==null){var m=i.baseState;a=0,h=u=d=null,c=s;do{var p=c.lane,b=c.eventTime;if((n&p)===p){h!==null&&(h=h.next={eventTime:b,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var v=e,j=c;switch(p=t,b=r,j.tag){case 1:if(v=j.payload,typeof v=="function"){m=v.call(b,m,p);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=j.payload,p=typeof v=="function"?v.call(b,m,p):v,p==null)break e;m=fe({},m,p);break e;case 2:Mr=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[c]:p.push(c))}else b={eventTime:b,lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(u=h=b,d=m):h=h.next=b,a|=p;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;p=c,c=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(d=m),i.baseState=d,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);In|=a,e.lanes=a,e.memoizedState=m}}function rf(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(E(191,i));i.call(n)}}}var Ds={},Ht=rn(Ds),ls=rn(Ds),cs=rn(Ds);function Sn(e){if(e===Ds)throw Error(E(174));return e}function lm(e,t){switch(ee(cs,t),ee(ls,e),ee(Ht,Ds),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bu(t,e)}se(Ht),ee(Ht,t)}function Vo(){se(Ht),se(ls),se(cs)}function $1(e){Sn(cs.current);var t=Sn(Ht.current),r=bu(t,e.type);t!==r&&(ee(ls,e),ee(Ht,r))}function cm(e){ls.current===e&&(se(Ht),se(ls))}var ce=rn(0);function wl(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ed=[];function dm(){for(var e=0;e<ed.length;e++)ed[e]._workInProgressVersionPrimary=null;ed.length=0}var Ha=xr.ReactCurrentDispatcher,td=xr.ReactCurrentBatchConfig,Rn=0,me=null,Pe=null,Me=null,$l=!1,Vi=!1,ds=0,Q2=0;function Be(){throw Error(E(321))}function um(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Rt(e[r],t[r]))return!1;return!0}function hm(e,t,r,n,i,s){if(Rn=s,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ha.current=e===null||e.memoizedState===null?Z2:ej,e=r(n,i),Vi){s=0;do{if(Vi=!1,ds=0,25<=s)throw Error(E(301));s+=1,Me=Pe=null,t.updateQueue=null,Ha.current=tj,e=r(n,i)}while(Vi)}if(Ha.current=jl,t=Pe!==null&&Pe.next!==null,Rn=0,Me=Pe=me=null,$l=!1,t)throw Error(E(300));return e}function mm(){var e=ds!==0;return ds=0,e}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?me.memoizedState=Me=e:Me=Me.next=e,Me}function kt(){if(Pe===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Me===null?me.memoizedState:Me.next;if(t!==null)Me=t,Pe=e;else{if(e===null)throw Error(E(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Me===null?me.memoizedState=Me=e:Me=Me.next=e}return Me}function us(e,t){return typeof t=="function"?t(e):t}function rd(e){var t=kt(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=Pe,i=n.baseQueue,s=r.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}n.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,n=n.baseState;var c=a=null,d=null,u=s;do{var h=u.lane;if((Rn&h)===h)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var m={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(c=d=m,a=n):d=d.next=m,me.lanes|=h,In|=h}u=u.next}while(u!==null&&u!==s);d===null?a=n:d.next=c,Rt(n,t.memoizedState)||(et=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=d,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do s=i.lane,me.lanes|=s,In|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function nd(e){var t=kt(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,s=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);Rt(s,t.memoizedState)||(et=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function j1(){}function k1(e,t){var r=me,n=kt(),i=t(),s=!Rt(n.memoizedState,i);if(s&&(n.memoizedState=i,et=!0),n=n.queue,pm(P1.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||Me!==null&&Me.memoizedState.tag&1){if(r.flags|=2048,hs(9,S1.bind(null,r,n,i,t),void 0,null),Ee===null)throw Error(E(349));Rn&30||C1(r,t,i)}return i}function C1(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function S1(e,t,r,n){t.value=r,t.getSnapshot=n,T1(t)&&A1(e)}function P1(e,t,r){return r(function(){T1(t)&&A1(e)})}function T1(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Rt(e,r)}catch{return!0}}function A1(e){var t=dr(e,1);t!==null&&Et(t,e,1,-1)}function nf(e){var t=Vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:e},t.queue=e,e=e.dispatch=J2.bind(null,me,e),[t.memoizedState,e]}function hs(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function M1(){return kt().memoizedState}function Ga(e,t,r,n){var i=Vt();me.flags|=e,i.memoizedState=hs(1|t,r,void 0,n===void 0?null:n)}function oc(e,t,r,n){var i=kt();n=n===void 0?null:n;var s=void 0;if(Pe!==null){var a=Pe.memoizedState;if(s=a.destroy,n!==null&&um(n,a.deps)){i.memoizedState=hs(t,r,s,n);return}}me.flags|=e,i.memoizedState=hs(1|t,r,s,n)}function of(e,t){return Ga(8390656,8,e,t)}function pm(e,t){return oc(2048,8,e,t)}function z1(e,t){return oc(4,2,e,t)}function D1(e,t){return oc(4,4,e,t)}function E1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function L1(e,t,r){return r=r!=null?r.concat([e]):null,oc(4,4,E1.bind(null,t,e),r)}function fm(){}function R1(e,t){var r=kt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&um(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function I1(e,t){var r=kt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&um(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function F1(e,t,r){return Rn&21?(Rt(r,t)||(r=_y(),me.lanes|=r,In|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=r)}function K2(e,t){var r=J;J=r!==0&&4>r?r:4,e(!0);var n=td.transition;td.transition={};try{e(!1),t()}finally{J=r,td.transition=n}}function N1(){return kt().memoizedState}function X2(e,t,r){var n=Wr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},B1(e))O1(t,r);else if(r=b1(e,t,r,n),r!==null){var i=qe();Et(r,e,n,i),V1(r,t,n)}}function J2(e,t,r){var n=Wr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(B1(e))O1(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,c=s(a,r);if(i.hasEagerState=!0,i.eagerState=c,Rt(c,a)){var d=t.interleaved;d===null?(i.next=i,sm(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}r=b1(e,t,i,n),r!==null&&(i=qe(),Et(r,e,n,i),V1(r,t,n))}}function B1(e){var t=e.alternate;return e===me||t!==null&&t===me}function O1(e,t){Vi=$l=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function V1(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Gh(e,r)}}var jl={readContext:jt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},Z2={readContext:jt,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:of,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ga(4194308,4,E1.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ga(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ga(4,2,e,t)},useMemo:function(e,t){var r=Vt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Vt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=X2.bind(null,me,e),[n.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:nf,useDebugValue:fm,useDeferredValue:function(e){return Vt().memoizedState=e},useTransition:function(){var e=nf(!1),t=e[0];return e=K2.bind(null,e[1]),Vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=me,i=Vt();if(ae){if(r===void 0)throw Error(E(407));r=r()}else{if(r=t(),Ee===null)throw Error(E(349));Rn&30||C1(n,t,r)}i.memoizedState=r;var s={value:r,getSnapshot:t};return i.queue=s,of(P1.bind(null,n,s,e),[e]),n.flags|=2048,hs(9,S1.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=Vt(),t=Ee.identifierPrefix;if(ae){var r=nr,n=rr;r=(n&~(1<<32-Dt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=ds++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Q2++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ej={readContext:jt,useCallback:R1,useContext:jt,useEffect:pm,useImperativeHandle:L1,useInsertionEffect:z1,useLayoutEffect:D1,useMemo:I1,useReducer:rd,useRef:M1,useState:function(){return rd(us)},useDebugValue:fm,useDeferredValue:function(e){var t=kt();return F1(t,Pe.memoizedState,e)},useTransition:function(){var e=rd(us)[0],t=kt().memoizedState;return[e,t]},useMutableSource:j1,useSyncExternalStore:k1,useId:N1,unstable_isNewReconciler:!1},tj={readContext:jt,useCallback:R1,useContext:jt,useEffect:pm,useImperativeHandle:L1,useInsertionEffect:z1,useLayoutEffect:D1,useMemo:I1,useReducer:nd,useRef:M1,useState:function(){return nd(us)},useDebugValue:fm,useDeferredValue:function(e){var t=kt();return Pe===null?t.memoizedState=e:F1(t,Pe.memoizedState,e)},useTransition:function(){var e=nd(us)[0],t=kt().memoizedState;return[e,t]},useMutableSource:j1,useSyncExternalStore:k1,useId:N1,unstable_isNewReconciler:!1};function At(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Vu(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:fe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ic={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=qe(),i=Wr(e),s=ir(n,i);s.payload=t,r!=null&&(s.callback=r),t=Vr(e,s,i),t!==null&&(Et(t,e,i,n),Ua(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=qe(),i=Wr(e),s=ir(n,i);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=Vr(e,s,i),t!==null&&(Et(t,e,i,n),Ua(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=qe(),n=Wr(e),i=ir(r,n);i.tag=2,t!=null&&(i.callback=t),t=Vr(e,i,n),t!==null&&(Et(t,e,n,r),Ua(t,e,n))}};function sf(e,t,r,n,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,a):t.prototype&&t.prototype.isPureReactComponent?!os(r,n)||!os(i,s):!0}function _1(e,t,r){var n=!1,i=Kr,s=t.contextType;return typeof s=="object"&&s!==null?s=jt(s):(i=rt(t)?En:We.current,n=t.contextTypes,s=(n=n!=null)?No(e,i):Kr),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ic,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function af(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ic.enqueueReplaceState(t,t.state,null)}function _u(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},am(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=jt(s):(s=rt(t)?En:We.current,i.context=No(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Vu(e,t,s,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ic.enqueueReplaceState(i,i.state,null),bl(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function _o(e,t){try{var r="",n=t;do r+=A$(n),n=n.return;while(n);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function od(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Wu(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var rj=typeof WeakMap=="function"?WeakMap:Map;function W1(e,t,r){r=ir(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Cl||(Cl=!0,Zu=n),Wu(e,t)},r}function U1(e,t,r){r=ir(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){Wu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){Wu(e,t),typeof n!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function lf(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new rj;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=gj.bind(null,e,t,r),t.then(e,e))}function cf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function df(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=ir(-1,1),t.tag=2,Vr(r,t,1))),r.lanes|=1),e)}var nj=xr.ReactCurrentOwner,et=!1;function Ye(e,t,r,n){t.child=e===null?v1(t,null,r,n):Oo(t,e.child,r,n)}function uf(e,t,r,n,i){r=r.render;var s=t.ref;return Lo(t,i),n=hm(e,t,r,n,s,i),r=mm(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ur(e,t,i)):(ae&&r&&em(t),t.flags|=1,Ye(e,t,n,i),t.child)}function hf(e,t,r,n,i){if(e===null){var s=r.type;return typeof s=="function"&&!jm(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,H1(e,t,s,n,i)):(e=Ka(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(r=r.compare,r=r!==null?r:os,r(a,n)&&e.ref===t.ref)return ur(e,t,i)}return t.flags|=1,e=Ur(s,n),e.ref=t.ref,e.return=t,t.child=e}function H1(e,t,r,n,i){if(e!==null){var s=e.memoizedProps;if(os(s,n)&&e.ref===t.ref)if(et=!1,t.pendingProps=n=s,(e.lanes&i)!==0)e.flags&131072&&(et=!0);else return t.lanes=e.lanes,ur(e,t,i)}return Uu(e,t,r,n,i)}function G1(e,t,r){var n=t.pendingProps,i=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(ko,at),at|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(ko,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,ee(ko,at),at|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,ee(ko,at),at|=n;return Ye(e,t,i,r),t.child}function Y1(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Uu(e,t,r,n,i){var s=rt(r)?En:We.current;return s=No(t,s),Lo(t,i),r=hm(e,t,r,n,s,i),n=mm(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ur(e,t,i)):(ae&&n&&em(t),t.flags|=1,Ye(e,t,r,i),t.child)}function mf(e,t,r,n,i){if(rt(r)){var s=!0;fl(t)}else s=!1;if(Lo(t,i),t.stateNode===null)Ya(e,t),_1(t,r,n),_u(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var d=a.context,u=r.contextType;typeof u=="object"&&u!==null?u=jt(u):(u=rt(r)?En:We.current,u=No(t,u));var h=r.getDerivedStateFromProps,m=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==n||d!==u)&&af(t,a,n,u),Mr=!1;var p=t.memoizedState;a.state=p,bl(t,n,a,i),d=t.memoizedState,c!==n||p!==d||tt.current||Mr?(typeof h=="function"&&(Vu(t,r,h,n),d=t.memoizedState),(c=Mr||sf(t,r,c,n,p,d,u))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=d),a.props=n,a.state=d,a.context=u,n=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,w1(e,t),c=t.memoizedProps,u=t.type===t.elementType?c:At(t.type,c),a.props=u,m=t.pendingProps,p=a.context,d=r.contextType,typeof d=="object"&&d!==null?d=jt(d):(d=rt(r)?En:We.current,d=No(t,d));var b=r.getDerivedStateFromProps;(h=typeof b=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==m||p!==d)&&af(t,a,n,d),Mr=!1,p=t.memoizedState,a.state=p,bl(t,n,a,i);var v=t.memoizedState;c!==m||p!==v||tt.current||Mr?(typeof b=="function"&&(Vu(t,r,b,n),v=t.memoizedState),(u=Mr||sf(t,r,u,n,p,v,d)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,v,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,v,d)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),a.props=n,a.state=v,a.context=d,n=u):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return Hu(e,t,r,n,s,i)}function Hu(e,t,r,n,i,s){Y1(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&Xp(t,r,!1),ur(e,t,s);n=t.stateNode,nj.current=t;var c=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=Oo(t,e.child,null,s),t.child=Oo(t,null,c,s)):Ye(e,t,c,s),t.memoizedState=n.state,i&&Xp(t,r,!0),t.child}function q1(e){var t=e.stateNode;t.pendingContext?Kp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kp(e,t.context,!1),lm(e,t.containerInfo)}function pf(e,t,r,n,i){return Bo(),rm(i),t.flags|=256,Ye(e,t,r,n),t.child}var Gu={dehydrated:null,treeContext:null,retryLane:0};function Yu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Q1(e,t,r){var n=t.pendingProps,i=ce.current,s=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(ce,i&1),e===null)return Bu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,s?(n=t.mode,s=t.child,a={mode:"hidden",children:a},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=lc(a,n,0,null),e=Mn(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Yu(r),t.memoizedState=Gu,e):gm(t,a));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return oj(e,t,a,n,c,i,r);if(s){s=n.fallback,a=t.mode,i=e.child,c=i.sibling;var d={mode:"hidden",children:n.children};return!(a&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=d,t.deletions=null):(n=Ur(i,d),n.subtreeFlags=i.subtreeFlags&14680064),c!==null?s=Ur(c,s):(s=Mn(s,a,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,a=e.child.memoizedState,a=a===null?Yu(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~r,t.memoizedState=Gu,n}return s=e.child,e=s.sibling,n=Ur(s,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function gm(e,t){return t=lc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Js(e,t,r,n){return n!==null&&rm(n),Oo(t,e.child,null,r),e=gm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oj(e,t,r,n,i,s,a){if(r)return t.flags&256?(t.flags&=-257,n=od(Error(E(422))),Js(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,i=t.mode,n=lc({mode:"visible",children:n.children},i,0,null),s=Mn(s,i,a,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,t.mode&1&&Oo(t,e.child,null,a),t.child.memoizedState=Yu(a),t.memoizedState=Gu,s);if(!(t.mode&1))return Js(e,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var c=n.dgst;return n=c,s=Error(E(419)),n=od(s,n,void 0),Js(e,t,a,n)}if(c=(a&e.childLanes)!==0,et||c){if(n=Ee,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,dr(e,i),Et(n,e,i,-1))}return $m(),n=od(Error(E(421))),Js(e,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=xj.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,lt=Or(i.nextSibling),ct=t,ae=!0,zt=null,e!==null&&(vt[bt++]=rr,vt[bt++]=nr,vt[bt++]=Ln,rr=e.id,nr=e.overflow,Ln=t),t=gm(t,n.children),t.flags|=4096,t)}function ff(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ou(e.return,t,r)}function id(e,t,r,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=i)}function K1(e,t,r){var n=t.pendingProps,i=n.revealOrder,s=n.tail;if(Ye(e,t,n.children,r),n=ce.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ff(e,r,t);else if(e.tag===19)ff(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ee(ce,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&wl(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),id(t,!1,i,r,s);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&wl(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}id(t,!0,r,null,s);break;case"together":id(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ya(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ur(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,r=Ur(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Ur(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function ij(e,t,r){switch(t.tag){case 3:q1(t),Bo();break;case 5:$1(t);break;case 1:rt(t.type)&&fl(t);break;case 4:lm(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;ee(yl,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ee(ce,ce.current&1),t.flags|=128,null):r&t.child.childLanes?Q1(e,t,r):(ee(ce,ce.current&1),e=ur(e,t,r),e!==null?e.sibling:null);ee(ce,ce.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return K1(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ce,ce.current),n)break;return null;case 22:case 23:return t.lanes=0,G1(e,t,r)}return ur(e,t,r)}var X1,qu,J1,Z1;X1=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};qu=function(){};J1=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Sn(Ht.current);var s=null;switch(r){case"input":i=gu(e,i),n=gu(e,n),s=[];break;case"select":i=fe({},i,{value:void 0}),n=fe({},n,{value:void 0}),s=[];break;case"textarea":i=vu(e,i),n=vu(e,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ml)}wu(r,n);var a;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var c=i[u];for(a in c)c.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in n){var d=n[u];if(c=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&d!==c&&(d!=null||c!=null))if(u==="style")if(c){for(a in c)!c.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in d)d.hasOwnProperty(a)&&c[a]!==d[a]&&(r||(r={}),r[a]=d[a])}else r||(s||(s=[]),s.push(u,r)),r=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(s=s||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xi.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&oe("scroll",e),s||c===d||(s=[])):(s=s||[]).push(u,d))}r&&(s=s||[]).push("style",r);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Z1=function(e,t,r,n){r!==n&&(t.flags|=4)};function mi(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function sj(e,t,r){var n=t.pendingProps;switch(tm(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return rt(t.type)&&pl(),Oe(t),null;case 3:return n=t.stateNode,Vo(),se(tt),se(We),dm(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ks(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zt!==null&&(rh(zt),zt=null))),qu(e,t),Oe(t),null;case 5:cm(t);var i=Sn(cs.current);if(r=t.type,e!==null&&t.stateNode!=null)J1(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(E(166));return Oe(t),null}if(e=Sn(Ht.current),Ks(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[Wt]=t,n[as]=s,e=(t.mode&1)!==0,r){case"dialog":oe("cancel",n),oe("close",n);break;case"iframe":case"object":case"embed":oe("load",n);break;case"video":case"audio":for(i=0;i<Ei.length;i++)oe(Ei[i],n);break;case"source":oe("error",n);break;case"img":case"image":case"link":oe("error",n),oe("load",n);break;case"details":oe("toggle",n);break;case"input":jp(n,s),oe("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},oe("invalid",n);break;case"textarea":Cp(n,s),oe("invalid",n)}wu(r,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var c=s[a];a==="children"?typeof c=="string"?n.textContent!==c&&(s.suppressHydrationWarning!==!0&&Qs(n.textContent,c,e),i=["children",c]):typeof c=="number"&&n.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&Qs(n.textContent,c,e),i=["children",""+c]):Xi.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&oe("scroll",n)}switch(r){case"input":Vs(n),kp(n,s,!0);break;case"textarea":Vs(n),Sp(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=ml)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Py(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[Wt]=t,e[as]=n,X1(e,t,!1,!1),t.stateNode=e;e:{switch(a=$u(r,n),r){case"dialog":oe("cancel",e),oe("close",e),i=n;break;case"iframe":case"object":case"embed":oe("load",e),i=n;break;case"video":case"audio":for(i=0;i<Ei.length;i++)oe(Ei[i],e);i=n;break;case"source":oe("error",e),i=n;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=n;break;case"details":oe("toggle",e),i=n;break;case"input":jp(e,n),i=gu(e,n),oe("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=fe({},n,{value:void 0}),oe("invalid",e);break;case"textarea":Cp(e,n),i=vu(e,n),oe("invalid",e);break;default:i=n}wu(r,i),c=i;for(s in c)if(c.hasOwnProperty(s)){var d=c[s];s==="style"?My(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Ty(e,d)):s==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&Ji(e,d):typeof d=="number"&&Ji(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xi.hasOwnProperty(s)?d!=null&&s==="onScroll"&&oe("scroll",e):d!=null&&Oh(e,s,d,a))}switch(r){case"input":Vs(e),kp(e,n,!1);break;case"textarea":Vs(e),Sp(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Qr(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Mo(e,!!n.multiple,s,!1):n.defaultValue!=null&&Mo(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ml)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)Z1(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(E(166));if(r=Sn(cs.current),Sn(Ht.current),Ks(t)){if(n=t.stateNode,r=t.memoizedProps,n[Wt]=t,(s=n.nodeValue!==r)&&(e=ct,e!==null))switch(e.tag){case 3:Qs(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qs(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Wt]=t,t.stateNode=n}return Oe(t),null;case 13:if(se(ce),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&lt!==null&&t.mode&1&&!(t.flags&128))x1(),Bo(),t.flags|=98560,s=!1;else if(s=Ks(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(E(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Wt]=t}else Bo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),s=!1}else zt!==null&&(rh(zt),zt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?Te===0&&(Te=3):$m())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return Vo(),qu(e,t),e===null&&is(t.stateNode.containerInfo),Oe(t),null;case 10:return im(t.type._context),Oe(t),null;case 17:return rt(t.type)&&pl(),Oe(t),null;case 19:if(se(ce),s=t.memoizedState,s===null)return Oe(t),null;if(n=(t.flags&128)!==0,a=s.rendering,a===null)if(n)mi(s,!1);else{if(Te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=wl(e),a!==null){for(t.flags|=128,mi(s,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ee(ce,ce.current&1|2),t.child}e=e.sibling}s.tail!==null&&be()>Wo&&(t.flags|=128,n=!0,mi(s,!1),t.lanes=4194304)}else{if(!n)if(e=wl(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),mi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ae)return Oe(t),null}else 2*be()-s.renderingStartTime>Wo&&r!==1073741824&&(t.flags|=128,n=!0,mi(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(r=s.last,r!==null?r.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=be(),t.sibling=null,r=ce.current,ee(ce,n?r&1|2:r&1),t):(Oe(t),null);case 22:case 23:return wm(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?at&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function aj(e,t){switch(tm(t),t.tag){case 1:return rt(t.type)&&pl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vo(),se(tt),se(We),dm(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cm(t),null;case 13:if(se(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Bo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ce),null;case 4:return Vo(),null;case 10:return im(t.type._context),null;case 22:case 23:return wm(),null;case 24:return null;default:return null}}var Zs=!1,_e=!1,lj=typeof WeakSet=="function"?WeakSet:Set,O=null;function jo(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ye(e,t,n)}else r.current=null}function Qu(e,t,r){try{r()}catch(n){ye(e,t,n)}}var gf=!1;function cj(e,t){if(Du=dl,e=o1(),Zh(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var a=0,c=-1,d=-1,u=0,h=0,m=e,p=null;t:for(;;){for(var b;m!==r||i!==0&&m.nodeType!==3||(c=a+i),m!==s||n!==0&&m.nodeType!==3||(d=a+n),m.nodeType===3&&(a+=m.nodeValue.length),(b=m.firstChild)!==null;)p=m,m=b;for(;;){if(m===e)break t;if(p===r&&++u===i&&(c=a),p===s&&++h===n&&(d=a),(b=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=b}r=c===-1||d===-1?null:{start:c,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(Eu={focusedElem:e,selectionRange:r},dl=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var j=v.memoizedProps,P=v.memoizedState,y=t.stateNode,f=y.getSnapshotBeforeUpdate(t.elementType===t.type?j:At(t.type,j),P);y.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(x){ye(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return v=gf,gf=!1,v}function _i(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qu(t,r,s)}i=i.next}while(i!==n)}}function sc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Ku(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function ev(e){var t=e.alternate;t!==null&&(e.alternate=null,ev(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Wt],delete t[as],delete t[Iu],delete t[H2],delete t[G2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tv(e){return e.tag===5||e.tag===3||e.tag===4}function xf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xu(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ml));else if(n!==4&&(e=e.child,e!==null))for(Xu(e,t,r),e=e.sibling;e!==null;)Xu(e,t,r),e=e.sibling}function Ju(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ju(e,t,r),e=e.sibling;e!==null;)Ju(e,t,r),e=e.sibling}var Re=null,Mt=!1;function br(e,t,r){for(r=r.child;r!==null;)rv(e,t,r),r=r.sibling}function rv(e,t,r){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Jl,r)}catch{}switch(r.tag){case 5:_e||jo(r,t);case 6:var n=Re,i=Mt;Re=null,br(e,t,r),Re=n,Mt=i,Re!==null&&(Mt?(e=Re,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Re.removeChild(r.stateNode));break;case 18:Re!==null&&(Mt?(e=Re,r=r.stateNode,e.nodeType===8?Jc(e.parentNode,r):e.nodeType===1&&Jc(e,r),rs(e)):Jc(Re,r.stateNode));break;case 4:n=Re,i=Mt,Re=r.stateNode.containerInfo,Mt=!0,br(e,t,r),Re=n,Mt=i;break;case 0:case 11:case 14:case 15:if(!_e&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Qu(r,t,a),i=i.next}while(i!==n)}br(e,t,r);break;case 1:if(!_e&&(jo(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(c){ye(r,t,c)}br(e,t,r);break;case 21:br(e,t,r);break;case 22:r.mode&1?(_e=(n=_e)||r.memoizedState!==null,br(e,t,r),_e=n):br(e,t,r);break;default:br(e,t,r)}}function yf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new lj),t.forEach(function(n){var i=yj.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Tt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var s=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:Re=c.stateNode,Mt=!1;break e;case 3:Re=c.stateNode.containerInfo,Mt=!0;break e;case 4:Re=c.stateNode.containerInfo,Mt=!0;break e}c=c.return}if(Re===null)throw Error(E(160));rv(s,a,i),Re=null,Mt=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(u){ye(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nv(t,e),t=t.sibling}function nv(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Ot(e),n&4){try{_i(3,e,e.return),sc(3,e)}catch(j){ye(e,e.return,j)}try{_i(5,e,e.return)}catch(j){ye(e,e.return,j)}}break;case 1:Tt(t,e),Ot(e),n&512&&r!==null&&jo(r,r.return);break;case 5:if(Tt(t,e),Ot(e),n&512&&r!==null&&jo(r,r.return),e.flags&32){var i=e.stateNode;try{Ji(i,"")}catch(j){ye(e,e.return,j)}}if(n&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=r!==null?r.memoizedProps:s,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&Cy(i,s),$u(c,a);var u=$u(c,s);for(a=0;a<d.length;a+=2){var h=d[a],m=d[a+1];h==="style"?My(i,m):h==="dangerouslySetInnerHTML"?Ty(i,m):h==="children"?Ji(i,m):Oh(i,h,m,u)}switch(c){case"input":xu(i,s);break;case"textarea":Sy(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var b=s.value;b!=null?Mo(i,!!s.multiple,b,!1):p!==!!s.multiple&&(s.defaultValue!=null?Mo(i,!!s.multiple,s.defaultValue,!0):Mo(i,!!s.multiple,s.multiple?[]:"",!1))}i[as]=s}catch(j){ye(e,e.return,j)}}break;case 6:if(Tt(t,e),Ot(e),n&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(j){ye(e,e.return,j)}}break;case 3:if(Tt(t,e),Ot(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{rs(t.containerInfo)}catch(j){ye(e,e.return,j)}break;case 4:Tt(t,e),Ot(e);break;case 13:Tt(t,e),Ot(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vm=be())),n&4&&yf(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(_e=(u=_e)||h,Tt(t,e),_e=u):Tt(t,e),Ot(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(O=e,h=e.child;h!==null;){for(m=O=h;O!==null;){switch(p=O,b=p.child,p.tag){case 0:case 11:case 14:case 15:_i(4,p,p.return);break;case 1:jo(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(j){ye(n,r,j)}}break;case 5:jo(p,p.return);break;case 22:if(p.memoizedState!==null){bf(m);continue}}b!==null?(b.return=p,O=b):bf(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=m.stateNode,d=m.memoizedProps.style,a=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Ay("display",a))}catch(j){ye(e,e.return,j)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(j){ye(e,e.return,j)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Tt(t,e),Ot(e),n&4&&yf(e);break;case 21:break;default:Tt(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(tv(r)){var n=r;break e}r=r.return}throw Error(E(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Ji(i,""),n.flags&=-33);var s=xf(e);Ju(e,s,i);break;case 3:case 4:var a=n.stateNode.containerInfo,c=xf(e);Xu(e,c,a);break;default:throw Error(E(161))}}catch(d){ye(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dj(e,t,r){O=e,ov(e)}function ov(e,t,r){for(var n=(e.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||Zs;if(!a){var c=i.alternate,d=c!==null&&c.memoizedState!==null||_e;c=Zs;var u=_e;if(Zs=a,(_e=d)&&!u)for(O=i;O!==null;)a=O,d=a.child,a.tag===22&&a.memoizedState!==null?wf(i):d!==null?(d.return=a,O=d):wf(i);for(;s!==null;)O=s,ov(s),s=s.sibling;O=i,Zs=c,_e=u}vf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):vf(e)}}function vf(e){for(;O!==null;){var t=O;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||sc(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!_e)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:At(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&rf(t,s,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}rf(t,a,r)}break;case 5:var c=t.stateNode;if(r===null&&t.flags&4){r=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&rs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}_e||t.flags&512&&Ku(t)}catch(p){ye(t,t.return,p)}}if(t===e){O=null;break}if(r=t.sibling,r!==null){r.return=t.return,O=r;break}O=t.return}}function bf(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var r=t.sibling;if(r!==null){r.return=t.return,O=r;break}O=t.return}}function wf(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{sc(4,t)}catch(d){ye(t,r,d)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(d){ye(t,i,d)}}var s=t.return;try{Ku(t)}catch(d){ye(t,s,d)}break;case 5:var a=t.return;try{Ku(t)}catch(d){ye(t,a,d)}}}catch(d){ye(t,t.return,d)}if(t===e){O=null;break}var c=t.sibling;if(c!==null){c.return=t.return,O=c;break}O=t.return}}var uj=Math.ceil,kl=xr.ReactCurrentDispatcher,xm=xr.ReactCurrentOwner,$t=xr.ReactCurrentBatchConfig,q=0,Ee=null,ke=null,Ie=0,at=0,ko=rn(0),Te=0,ms=null,In=0,ac=0,ym=0,Wi=null,Ze=null,vm=0,Wo=1/0,Zt=null,Cl=!1,Zu=null,_r=null,ea=!1,Rr=null,Sl=0,Ui=0,eh=null,qa=-1,Qa=0;function qe(){return q&6?be():qa!==-1?qa:qa=be()}function Wr(e){return e.mode&1?q&2&&Ie!==0?Ie&-Ie:q2.transition!==null?(Qa===0&&(Qa=_y()),Qa):(e=J,e!==0||(e=window.event,e=e===void 0?16:Qy(e.type)),e):1}function Et(e,t,r,n){if(50<Ui)throw Ui=0,eh=null,Error(E(185));As(e,r,n),(!(q&2)||e!==Ee)&&(e===Ee&&(!(q&2)&&(ac|=r),Te===4&&Er(e,Ie)),nt(e,n),r===1&&q===0&&!(t.mode&1)&&(Wo=be()+500,nc&&nn()))}function nt(e,t){var r=e.callbackNode;q$(e,t);var n=cl(e,e===Ee?Ie:0);if(n===0)r!==null&&Ap(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Ap(r),t===1)e.tag===0?Y2($f.bind(null,e)):p1($f.bind(null,e)),W2(function(){!(q&6)&&nn()}),r=null;else{switch(Wy(n)){case 1:r=Hh;break;case 4:r=Oy;break;case 16:r=ll;break;case 536870912:r=Vy;break;default:r=ll}r=hv(r,iv.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function iv(e,t){if(qa=-1,Qa=0,q&6)throw Error(E(327));var r=e.callbackNode;if(Ro()&&e.callbackNode!==r)return null;var n=cl(e,e===Ee?Ie:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Pl(e,n);else{t=n;var i=q;q|=2;var s=av();(Ee!==e||Ie!==t)&&(Zt=null,Wo=be()+500,An(e,t));do try{pj();break}catch(c){sv(e,c)}while(!0);om(),kl.current=s,q=i,ke!==null?t=0:(Ee=null,Ie=0,t=Te)}if(t!==0){if(t===2&&(i=Pu(e),i!==0&&(n=i,t=th(e,i))),t===1)throw r=ms,An(e,0),Er(e,n),nt(e,be()),r;if(t===6)Er(e,n);else{if(i=e.current.alternate,!(n&30)&&!hj(i)&&(t=Pl(e,n),t===2&&(s=Pu(e),s!==0&&(n=s,t=th(e,s))),t===1))throw r=ms,An(e,0),Er(e,n),nt(e,be()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(E(345));case 2:vn(e,Ze,Zt);break;case 3:if(Er(e,n),(n&130023424)===n&&(t=vm+500-be(),10<t)){if(cl(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ru(vn.bind(null,e,Ze,Zt),t);break}vn(e,Ze,Zt);break;case 4:if(Er(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var a=31-Dt(n);s=1<<a,a=t[a],a>i&&(i=a),n&=~s}if(n=i,n=be()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*uj(n/1960))-n,10<n){e.timeoutHandle=Ru(vn.bind(null,e,Ze,Zt),n);break}vn(e,Ze,Zt);break;case 5:vn(e,Ze,Zt);break;default:throw Error(E(329))}}}return nt(e,be()),e.callbackNode===r?iv.bind(null,e):null}function th(e,t){var r=Wi;return e.current.memoizedState.isDehydrated&&(An(e,t).flags|=256),e=Pl(e,t),e!==2&&(t=Ze,Ze=r,t!==null&&rh(t)),e}function rh(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function hj(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],s=i.getSnapshot;i=i.value;try{if(!Rt(s(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Er(e,t){for(t&=~ym,t&=~ac,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Dt(t),n=1<<r;e[r]=-1,t&=~n}}function $f(e){if(q&6)throw Error(E(327));Ro();var t=cl(e,0);if(!(t&1))return nt(e,be()),null;var r=Pl(e,t);if(e.tag!==0&&r===2){var n=Pu(e);n!==0&&(t=n,r=th(e,n))}if(r===1)throw r=ms,An(e,0),Er(e,t),nt(e,be()),r;if(r===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vn(e,Ze,Zt),nt(e,be()),null}function bm(e,t){var r=q;q|=1;try{return e(t)}finally{q=r,q===0&&(Wo=be()+500,nc&&nn())}}function Fn(e){Rr!==null&&Rr.tag===0&&!(q&6)&&Ro();var t=q;q|=1;var r=$t.transition,n=J;try{if($t.transition=null,J=1,e)return e()}finally{J=n,$t.transition=r,q=t,!(q&6)&&nn()}}function wm(){at=ko.current,se(ko)}function An(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,_2(r)),ke!==null)for(r=ke.return;r!==null;){var n=r;switch(tm(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&pl();break;case 3:Vo(),se(tt),se(We),dm();break;case 5:cm(n);break;case 4:Vo();break;case 13:se(ce);break;case 19:se(ce);break;case 10:im(n.type._context);break;case 22:case 23:wm()}r=r.return}if(Ee=e,ke=e=Ur(e.current,null),Ie=at=t,Te=0,ms=null,ym=ac=In=0,Ze=Wi=null,Cn!==null){for(t=0;t<Cn.length;t++)if(r=Cn[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,s=r.pending;if(s!==null){var a=s.next;s.next=i,n.next=a}r.pending=n}Cn=null}return e}function sv(e,t){do{var r=ke;try{if(om(),Ha.current=jl,$l){for(var n=me.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}$l=!1}if(Rn=0,Me=Pe=me=null,Vi=!1,ds=0,xm.current=null,r===null||r.return===null){Te=1,ms=t,ke=null;break}e:{var s=e,a=r.return,c=r,d=t;if(t=Ie,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,h=c,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var b=cf(a);if(b!==null){b.flags&=-257,df(b,a,c,s,t),b.mode&1&&lf(s,u,t),t=b,d=u;var v=t.updateQueue;if(v===null){var j=new Set;j.add(d),t.updateQueue=j}else v.add(d);break e}else{if(!(t&1)){lf(s,u,t),$m();break e}d=Error(E(426))}}else if(ae&&c.mode&1){var P=cf(a);if(P!==null){!(P.flags&65536)&&(P.flags|=256),df(P,a,c,s,t),rm(_o(d,c));break e}}s=d=_o(d,c),Te!==4&&(Te=2),Wi===null?Wi=[s]:Wi.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var y=W1(s,d,t);tf(s,y);break e;case 1:c=d;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(_r===null||!_r.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var x=U1(s,c,t);tf(s,x);break e}}s=s.return}while(s!==null)}cv(r)}catch(C){t=C,ke===r&&r!==null&&(ke=r=r.return);continue}break}while(!0)}function av(){var e=kl.current;return kl.current=jl,e===null?jl:e}function $m(){(Te===0||Te===3||Te===2)&&(Te=4),Ee===null||!(In&268435455)&&!(ac&268435455)||Er(Ee,Ie)}function Pl(e,t){var r=q;q|=2;var n=av();(Ee!==e||Ie!==t)&&(Zt=null,An(e,t));do try{mj();break}catch(i){sv(e,i)}while(!0);if(om(),q=r,kl.current=n,ke!==null)throw Error(E(261));return Ee=null,Ie=0,Te}function mj(){for(;ke!==null;)lv(ke)}function pj(){for(;ke!==null&&!B$();)lv(ke)}function lv(e){var t=uv(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?cv(e):ke=t,xm.current=null}function cv(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=aj(r,t),r!==null){r.flags&=32767,ke=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,ke=null;return}}else if(r=sj(r,t,at),r!==null){ke=r;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Te===0&&(Te=5)}function vn(e,t,r){var n=J,i=$t.transition;try{$t.transition=null,J=1,fj(e,t,r,n)}finally{$t.transition=i,J=n}return null}function fj(e,t,r,n){do Ro();while(Rr!==null);if(q&6)throw Error(E(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(Q$(e,s),e===Ee&&(ke=Ee=null,Ie=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ea||(ea=!0,hv(ll,function(){return Ro(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var a=J;J=1;var c=q;q|=4,xm.current=null,cj(e,r),nv(r,e),R2(Eu),dl=!!Du,Eu=Du=null,e.current=r,dj(r),O$(),q=c,J=a,$t.transition=s}else e.current=r;if(ea&&(ea=!1,Rr=e,Sl=i),s=e.pendingLanes,s===0&&(_r=null),W$(r.stateNode),nt(e,be()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Cl)throw Cl=!1,e=Zu,Zu=null,e;return Sl&1&&e.tag!==0&&Ro(),s=e.pendingLanes,s&1?e===eh?Ui++:(Ui=0,eh=e):Ui=0,nn(),null}function Ro(){if(Rr!==null){var e=Wy(Sl),t=$t.transition,r=J;try{if($t.transition=null,J=16>e?16:e,Rr===null)var n=!1;else{if(e=Rr,Rr=null,Sl=0,q&6)throw Error(E(331));var i=q;for(q|=4,O=e.current;O!==null;){var s=O,a=s.child;if(O.flags&16){var c=s.deletions;if(c!==null){for(var d=0;d<c.length;d++){var u=c[d];for(O=u;O!==null;){var h=O;switch(h.tag){case 0:case 11:case 15:_i(8,h,s)}var m=h.child;if(m!==null)m.return=h,O=m;else for(;O!==null;){h=O;var p=h.sibling,b=h.return;if(ev(h),h===u){O=null;break}if(p!==null){p.return=b,O=p;break}O=b}}}var v=s.alternate;if(v!==null){var j=v.child;if(j!==null){v.child=null;do{var P=j.sibling;j.sibling=null,j=P}while(j!==null)}}O=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,O=a;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_i(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,O=y;break e}O=s.return}}var f=e.current;for(O=f;O!==null;){a=O;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,O=g;else e:for(a=f;O!==null;){if(c=O,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:sc(9,c)}}catch(C){ye(c,c.return,C)}if(c===a){O=null;break e}var x=c.sibling;if(x!==null){x.return=c.return,O=x;break e}O=c.return}}if(q=i,nn(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Jl,e)}catch{}n=!0}return n}finally{J=r,$t.transition=t}}return!1}function jf(e,t,r){t=_o(r,t),t=W1(e,t,1),e=Vr(e,t,1),t=qe(),e!==null&&(As(e,1,t),nt(e,t))}function ye(e,t,r){if(e.tag===3)jf(e,e,r);else for(;t!==null;){if(t.tag===3){jf(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(_r===null||!_r.has(n))){e=_o(r,e),e=U1(t,e,1),t=Vr(t,e,1),e=qe(),t!==null&&(As(t,1,e),nt(t,e));break}}t=t.return}}function gj(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&r,Ee===e&&(Ie&r)===r&&(Te===4||Te===3&&(Ie&130023424)===Ie&&500>be()-vm?An(e,0):ym|=r),nt(e,t)}function dv(e,t){t===0&&(e.mode&1?(t=Us,Us<<=1,!(Us&130023424)&&(Us=4194304)):t=1);var r=qe();e=dr(e,t),e!==null&&(As(e,t,r),nt(e,r))}function xj(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),dv(e,r)}function yj(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(E(314))}n!==null&&n.delete(t),dv(e,r)}var uv;uv=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)et=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return et=!1,ij(e,t,r);et=!!(e.flags&131072)}else et=!1,ae&&t.flags&1048576&&f1(t,xl,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ya(e,t),e=t.pendingProps;var i=No(t,We.current);Lo(t,r),i=hm(null,t,n,e,i,r);var s=mm();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(n)?(s=!0,fl(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,am(t),i.updater=ic,t.stateNode=i,i._reactInternals=t,_u(t,n,e,r),t=Hu(null,t,n,!0,s,r)):(t.tag=0,ae&&s&&em(t),Ye(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ya(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=bj(n),e=At(n,e),i){case 0:t=Uu(null,t,n,e,r);break e;case 1:t=mf(null,t,n,e,r);break e;case 11:t=uf(null,t,n,e,r);break e;case 14:t=hf(null,t,n,At(n.type,e),r);break e}throw Error(E(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:At(n,i),Uu(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:At(n,i),mf(e,t,n,i,r);case 3:e:{if(q1(t),e===null)throw Error(E(387));n=t.pendingProps,s=t.memoizedState,i=s.element,w1(e,t),bl(t,n,null,r);var a=t.memoizedState;if(n=a.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=_o(Error(E(423)),t),t=pf(e,t,n,r,i);break e}else if(n!==i){i=_o(Error(E(424)),t),t=pf(e,t,n,r,i);break e}else for(lt=Or(t.stateNode.containerInfo.firstChild),ct=t,ae=!0,zt=null,r=v1(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Bo(),n===i){t=ur(e,t,r);break e}Ye(e,t,n,r)}t=t.child}return t;case 5:return $1(t),e===null&&Bu(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,Lu(n,i)?a=null:s!==null&&Lu(n,s)&&(t.flags|=32),Y1(e,t),Ye(e,t,a,r),t.child;case 6:return e===null&&Bu(t),null;case 13:return Q1(e,t,r);case 4:return lm(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Oo(t,null,n,r):Ye(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:At(n,i),uf(e,t,n,i,r);case 7:return Ye(e,t,t.pendingProps,r),t.child;case 8:return Ye(e,t,t.pendingProps.children,r),t.child;case 12:return Ye(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,ee(yl,n._currentValue),n._currentValue=a,s!==null)if(Rt(s.value,a)){if(s.children===i.children&&!tt.current){t=ur(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){a=s.child;for(var d=c.firstContext;d!==null;){if(d.context===n){if(s.tag===1){d=ir(-1,r&-r),d.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?d.next=d:(d.next=h.next,h.next=d),u.pending=d}}s.lanes|=r,d=s.alternate,d!==null&&(d.lanes|=r),Ou(s.return,r,t),c.lanes|=r;break}d=d.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(E(341));a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),Ou(a,r,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Ye(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Lo(t,r),i=jt(i),n=n(i),t.flags|=1,Ye(e,t,n,r),t.child;case 14:return n=t.type,i=At(n,t.pendingProps),i=At(n.type,i),hf(e,t,n,i,r);case 15:return H1(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:At(n,i),Ya(e,t),t.tag=1,rt(n)?(e=!0,fl(t)):e=!1,Lo(t,r),_1(t,n,i),_u(t,n,i,r),Hu(null,t,n,!0,e,r);case 19:return K1(e,t,r);case 22:return G1(e,t,r)}throw Error(E(156,t.tag))};function hv(e,t){return By(e,t)}function vj(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,r,n){return new vj(e,t,r,n)}function jm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bj(e){if(typeof e=="function")return jm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_h)return 11;if(e===Wh)return 14}return 2}function Ur(e,t){var r=e.alternate;return r===null?(r=wt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ka(e,t,r,n,i,s){var a=2;if(n=e,typeof e=="function")jm(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case po:return Mn(r.children,i,s,t);case Vh:a=8,i|=8;break;case hu:return e=wt(12,r,t,i|2),e.elementType=hu,e.lanes=s,e;case mu:return e=wt(13,r,t,i),e.elementType=mu,e.lanes=s,e;case pu:return e=wt(19,r,t,i),e.elementType=pu,e.lanes=s,e;case $y:return lc(r,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case by:a=10;break e;case wy:a=9;break e;case _h:a=11;break e;case Wh:a=14;break e;case Ar:a=16,n=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=wt(a,r,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function Mn(e,t,r,n){return e=wt(7,e,n,t),e.lanes=r,e}function lc(e,t,r,n){return e=wt(22,e,n,t),e.elementType=$y,e.lanes=r,e.stateNode={isHidden:!1},e}function sd(e,t,r){return e=wt(6,e,null,t),e.lanes=r,e}function ad(e,t,r){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wj(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vc(0),this.expirationTimes=Vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vc(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function km(e,t,r,n,i,s,a,c,d){return e=new wj(e,t,r,c,d),t===1?(t=1,s===!0&&(t|=8)):t=0,s=wt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},am(s),e}function $j(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mo,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function mv(e){if(!e)return Kr;e=e._reactInternals;e:{if(_n(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var r=e.type;if(rt(r))return m1(e,r,t)}return t}function pv(e,t,r,n,i,s,a,c,d){return e=km(r,n,!0,e,i,s,a,c,d),e.context=mv(null),r=e.current,n=qe(),i=Wr(r),s=ir(n,i),s.callback=t??null,Vr(r,s,i),e.current.lanes=i,As(e,i,n),nt(e,n),e}function cc(e,t,r,n){var i=t.current,s=qe(),a=Wr(i);return r=mv(r),t.context===null?t.context=r:t.pendingContext=r,t=ir(s,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Vr(i,t,a),e!==null&&(Et(e,i,a,s),Ua(e,i,a)),a}function Tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Cm(e,t){kf(e,t),(e=e.alternate)&&kf(e,t)}function jj(){return null}var fv=typeof reportError=="function"?reportError:function(e){console.error(e)};function Sm(e){this._internalRoot=e}dc.prototype.render=Sm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));cc(e,t,null,null)};dc.prototype.unmount=Sm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){cc(null,e,null,null)}),t[cr]=null}};function dc(e){this._internalRoot=e}dc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gy();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Dr.length&&t!==0&&t<Dr[r].priority;r++);Dr.splice(r,0,e),r===0&&qy(e)}};function Pm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function uc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cf(){}function kj(e,t,r,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var u=Tl(a);s.call(u)}}var a=pv(t,n,e,0,null,!1,!1,"",Cf);return e._reactRootContainer=a,e[cr]=a.current,is(e.nodeType===8?e.parentNode:e),Fn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var c=n;n=function(){var u=Tl(d);c.call(u)}}var d=km(e,0,!1,null,null,!1,!1,"",Cf);return e._reactRootContainer=d,e[cr]=d.current,is(e.nodeType===8?e.parentNode:e),Fn(function(){cc(t,d,r,n)}),d}function hc(e,t,r,n,i){var s=r._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var c=i;i=function(){var d=Tl(a);c.call(d)}}cc(t,a,e,i)}else a=kj(r,t,e,i,n);return Tl(a)}Uy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Di(t.pendingLanes);r!==0&&(Gh(t,r|1),nt(t,be()),!(q&6)&&(Wo=be()+500,nn()))}break;case 13:Fn(function(){var n=dr(e,1);if(n!==null){var i=qe();Et(n,e,1,i)}}),Cm(e,1)}};Yh=function(e){if(e.tag===13){var t=dr(e,134217728);if(t!==null){var r=qe();Et(t,e,134217728,r)}Cm(e,134217728)}};Hy=function(e){if(e.tag===13){var t=Wr(e),r=dr(e,t);if(r!==null){var n=qe();Et(r,e,t,n)}Cm(e,t)}};Gy=function(){return J};Yy=function(e,t){var r=J;try{return J=e,t()}finally{J=r}};ku=function(e,t,r){switch(t){case"input":if(xu(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=rc(n);if(!i)throw Error(E(90));ky(n),xu(n,i)}}}break;case"textarea":Sy(e,r);break;case"select":t=r.value,t!=null&&Mo(e,!!r.multiple,t,!1)}};Ey=bm;Ly=Fn;var Cj={usingClientEntryPoint:!1,Events:[zs,yo,rc,zy,Dy,bm]},pi={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sj={bundleType:pi.bundleType,version:pi.version,rendererPackageName:pi.rendererPackageName,rendererConfig:pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fy(e),e===null?null:e.stateNode},findFiberByHostInstance:pi.findFiberByHostInstance||jj,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ta.isDisabled&&ta.supportsFiber)try{Jl=ta.inject(Sj),Ut=ta}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cj;pt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pm(t))throw Error(E(200));return $j(e,t,null,r)};pt.createRoot=function(e,t){if(!Pm(e))throw Error(E(299));var r=!1,n="",i=fv;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=km(e,1,!1,null,null,r,!1,n,i),e[cr]=t.current,is(e.nodeType===8?e.parentNode:e),new Sm(t)};pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Fy(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e){return Fn(e)};pt.hydrate=function(e,t,r){if(!uc(t))throw Error(E(200));return hc(null,e,t,!0,r)};pt.hydrateRoot=function(e,t,r){if(!Pm(e))throw Error(E(405));var n=r!=null&&r.hydratedSources||null,i=!1,s="",a=fv;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=pv(t,null,e,1,r??null,i,!1,s,a),e[cr]=t.current,is(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new dc(t)};pt.render=function(e,t,r){if(!uc(t))throw Error(E(200));return hc(null,e,t,!1,r)};pt.unmountComponentAtNode=function(e){if(!uc(e))throw Error(E(40));return e._reactRootContainer?(Fn(function(){hc(null,null,e,!1,function(){e._reactRootContainer=null,e[cr]=null})}),!0):!1};pt.unstable_batchedUpdates=bm;pt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!uc(r))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return hc(e,t,r,!1,n)};pt.version="18.3.1-next-f1338f8080-20240426";function gv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gv)}catch(e){console.error(e)}}gv(),gy.exports=pt;var Pj=gy.exports,xv,Sf=Pj;xv=Sf.createRoot,Sf.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ps(){return ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ps.apply(this,arguments)}var Ir;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ir||(Ir={}));const Pf="popstate";function Tj(e){e===void 0&&(e={});function t(n,i){let{pathname:s,search:a,hash:c}=n.location;return nh("",{pathname:s,search:a,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:Al(i)}return Mj(t,r,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function yv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Aj(){return Math.random().toString(36).substr(2,8)}function Tf(e,t){return{usr:e.state,key:e.key,idx:t}}function nh(e,t,r,n){return r===void 0&&(r=null),ps({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ni(t):t,{state:r,key:t&&t.key||n||Aj()})}function Al(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function ni(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Mj(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:s=!1}=n,a=i.history,c=Ir.Pop,d=null,u=h();u==null&&(u=0,a.replaceState(ps({},a.state,{idx:u}),""));function h(){return(a.state||{idx:null}).idx}function m(){c=Ir.Pop;let P=h(),y=P==null?null:P-u;u=P,d&&d({action:c,location:j.location,delta:y})}function p(P,y){c=Ir.Push;let f=nh(j.location,P,y);u=h()+1;let g=Tf(f,u),x=j.createHref(f);try{a.pushState(g,"",x)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(x)}s&&d&&d({action:c,location:j.location,delta:1})}function b(P,y){c=Ir.Replace;let f=nh(j.location,P,y);u=h();let g=Tf(f,u),x=j.createHref(f);a.replaceState(g,"",x),s&&d&&d({action:c,location:j.location,delta:0})}function v(P){let y=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof P=="string"?P:Al(P);return f=f.replace(/ $/,"%20"),pe(y,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,y)}let j={get action(){return c},get location(){return e(i,a)},listen(P){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(Pf,m),d=P,()=>{i.removeEventListener(Pf,m),d=null}},createHref(P){return t(i,P)},createURL:v,encodeLocation(P){let y=v(P);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:p,replace:b,go(P){return a.go(P)}};return j}var Af;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Af||(Af={}));function zj(e,t,r){return r===void 0&&(r="/"),Dj(e,t,r)}function Dj(e,t,r,n){let i=typeof t=="string"?ni(t):t,s=Uo(i.pathname||"/",r);if(s==null)return null;let a=vv(e);Ej(a);let c=null;for(let d=0;c==null&&d<a.length;++d){let u=Uj(s);c=_j(a[d],u)}return c}function vv(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(s,a,c)=>{let d={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};d.relativePath.startsWith("/")&&(pe(d.relativePath.startsWith(n),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(n.length));let u=Hr([n,d.relativePath]),h=r.concat(d);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),vv(s.children,t,h,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Oj(u,s.index),routesMeta:h})};return e.forEach((s,a)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))i(s,a);else for(let d of bv(s.path))i(s,a,d)}),t}function bv(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return i?[s,""]:[s];let a=bv(n.join("/")),c=[];return c.push(...a.map(d=>d===""?s:[s,d].join("/"))),i&&c.push(...a),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function Ej(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Vj(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Lj=/^:[\w-]+$/,Rj=3,Ij=2,Fj=1,Nj=10,Bj=-2,Mf=e=>e==="*";function Oj(e,t){let r=e.split("/"),n=r.length;return r.some(Mf)&&(n+=Bj),t&&(n+=Ij),r.filter(i=>!Mf(i)).reduce((i,s)=>i+(Lj.test(s)?Rj:s===""?Fj:Nj),n)}function Vj(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function _j(e,t,r){let{routesMeta:n}=e,i={},s="/",a=[];for(let c=0;c<n.length;++c){let d=n[c],u=c===n.length-1,h=s==="/"?t:t.slice(s.length)||"/",m=oh({path:d.relativePath,caseSensitive:d.caseSensitive,end:u},h),p=d.route;if(!m)return null;Object.assign(i,m.params),a.push({params:i,pathname:Hr([s,m.pathname]),pathnameBase:qj(Hr([s,m.pathnameBase])),route:p}),m.pathnameBase!=="/"&&(s=Hr([s,m.pathnameBase]))}return a}function oh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Wj(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:n.reduce((u,h,m)=>{let{paramName:p,isOptional:b}=h;if(p==="*"){let j=c[m]||"";a=s.slice(0,s.length-j.length).replace(/(.)\/+$/,"$1")}const v=c[m];return b&&!v?u[p]=void 0:u[p]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function Wj(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),yv(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,c,d)=>(n.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function Uj(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return yv(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Uo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Hj(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?ni(e):e;return{pathname:r?r.startsWith("/")?r:Gj(r,t):t,search:Qj(n),hash:Kj(i)}}function Gj(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function ld(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yj(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Tm(e,t){let r=Yj(e);return t?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Am(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=ni(e):(i=ps({},e),pe(!i.pathname||!i.pathname.includes("?"),ld("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),ld("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),ld("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,c;if(a==null)c=r;else{let m=t.length-1;if(!n&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),m-=1;i.pathname=p.join("/")}c=m>=0?t[m]:"/"}let d=Hj(i,c),u=a&&a!=="/"&&a.endsWith("/"),h=(s||a===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(u||h)&&(d.pathname+="/"),d}const Hr=e=>e.join("/").replace(/\/\/+/g,"/"),qj=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Qj=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Kj=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Xj(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const wv=["post","put","patch","delete"];new Set(wv);const Jj=["get",...wv];new Set(Jj);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fs(){return fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},fs.apply(this,arguments)}const mc=$.createContext(null),$v=$.createContext(null),yr=$.createContext(null),pc=$.createContext(null),vr=$.createContext({outlet:null,matches:[],isDataRoute:!1}),jv=$.createContext(null);function Zj(e,t){let{relative:r}=t===void 0?{}:t;oi()||pe(!1);let{basename:n,navigator:i}=$.useContext(yr),{hash:s,pathname:a,search:c}=fc(e,{relative:r}),d=a;return n!=="/"&&(d=a==="/"?n:Hr([n,a])),i.createHref({pathname:d,search:c,hash:s})}function oi(){return $.useContext(pc)!=null}function Kt(){return oi()||pe(!1),$.useContext(pc).location}function kv(e){$.useContext(yr).static||$.useLayoutEffect(e)}function Es(){let{isDataRoute:e}=$.useContext(vr);return e?pk():ek()}function ek(){oi()||pe(!1);let e=$.useContext(mc),{basename:t,future:r,navigator:n}=$.useContext(yr),{matches:i}=$.useContext(vr),{pathname:s}=Kt(),a=JSON.stringify(Tm(i,r.v7_relativeSplatPath)),c=$.useRef(!1);return kv(()=>{c.current=!0}),$.useCallback(function(u,h){if(h===void 0&&(h={}),!c.current)return;if(typeof u=="number"){n.go(u);return}let m=Am(u,JSON.parse(a),s,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Hr([t,m.pathname])),(h.replace?n.replace:n.push)(m,h.state,h)},[t,n,a,s,e])}const tk=$.createContext(null);function rk(e){let t=$.useContext(vr).outlet;return t&&$.createElement(tk.Provider,{value:e},t)}function fc(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=$.useContext(yr),{matches:i}=$.useContext(vr),{pathname:s}=Kt(),a=JSON.stringify(Tm(i,n.v7_relativeSplatPath));return $.useMemo(()=>Am(e,JSON.parse(a),s,r==="path"),[e,a,s,r])}function nk(e,t){return ok(e,t)}function ok(e,t,r,n){oi()||pe(!1);let{navigator:i,static:s}=$.useContext(yr),{matches:a}=$.useContext(vr),c=a[a.length-1],d=c?c.params:{};c&&c.pathname;let u=c?c.pathnameBase:"/";c&&c.route;let h=Kt(),m;if(t){var p;let y=typeof t=="string"?ni(t):t;u==="/"||(p=y.pathname)!=null&&p.startsWith(u)||pe(!1),m=y}else m=h;let b=m.pathname||"/",v=b;if(u!=="/"){let y=u.replace(/^\//,"").split("/");v="/"+b.replace(/^\//,"").split("/").slice(y.length).join("/")}let j=zj(e,{pathname:v}),P=ck(j&&j.map(y=>Object.assign({},y,{params:Object.assign({},d,y.params),pathname:Hr([u,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?u:Hr([u,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),a,r,n);return t&&P?$.createElement(pc.Provider,{value:{location:fs({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Ir.Pop}},P):P}function ik(){let e=mk(),t=Xj(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},t),r?$.createElement("pre",{style:i},r):null,null)}const sk=$.createElement(ik,null);class ak extends $.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?$.createElement(vr.Provider,{value:this.props.routeContext},$.createElement(jv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lk(e){let{routeContext:t,match:r,children:n}=e,i=$.useContext(mc);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),$.createElement(vr.Provider,{value:t},n)}function ck(e,t,r,n){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var s;if(!r)return null;if(r.errors)e=r.matches;else if((s=n)!=null&&s.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,c=(i=r)==null?void 0:i.errors;if(c!=null){let h=a.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);h>=0||pe(!1),a=a.slice(0,Math.min(a.length,h+1))}let d=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let h=0;h<a.length;h++){let m=a[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=h),m.route.id){let{loaderData:p,errors:b}=r,v=m.route.loader&&p[m.route.id]===void 0&&(!b||b[m.route.id]===void 0);if(m.route.lazy||v){d=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((h,m,p)=>{let b,v=!1,j=null,P=null;r&&(b=c&&m.route.id?c[m.route.id]:void 0,j=m.route.errorElement||sk,d&&(u<0&&p===0?(fk("route-fallback"),v=!0,P=null):u===p&&(v=!0,P=m.route.hydrateFallbackElement||null)));let y=t.concat(a.slice(0,p+1)),f=()=>{let g;return b?g=j:v?g=P:m.route.Component?g=$.createElement(m.route.Component,null):m.route.element?g=m.route.element:g=h,$.createElement(lk,{match:m,routeContext:{outlet:h,matches:y,isDataRoute:r!=null},children:g})};return r&&(m.route.ErrorBoundary||m.route.errorElement||p===0)?$.createElement(ak,{location:r.location,revalidation:r.revalidation,component:j,error:b,children:f(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):f()},null)}var Cv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Cv||{}),Sv=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Sv||{});function dk(e){let t=$.useContext(mc);return t||pe(!1),t}function uk(e){let t=$.useContext($v);return t||pe(!1),t}function hk(e){let t=$.useContext(vr);return t||pe(!1),t}function Pv(e){let t=hk(),r=t.matches[t.matches.length-1];return r.route.id||pe(!1),r.route.id}function mk(){var e;let t=$.useContext(jv),r=uk(),n=Pv();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function pk(){let{router:e}=dk(Cv.UseNavigateStable),t=Pv(Sv.UseNavigateStable),r=$.useRef(!1);return kv(()=>{r.current=!0}),$.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,fs({fromRouteId:t},s)))},[e,t])}const zf={};function fk(e,t,r){zf[e]||(zf[e]=!0)}function gk(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ml(e){let{to:t,replace:r,state:n,relative:i}=e;oi()||pe(!1);let{future:s,static:a}=$.useContext(yr),{matches:c}=$.useContext(vr),{pathname:d}=Kt(),u=Es(),h=Am(t,Tm(c,s.v7_relativeSplatPath),d,i==="path"),m=JSON.stringify(h);return $.useEffect(()=>u(JSON.parse(m),{replace:r,state:n,relative:i}),[u,m,i,r,n]),null}function Mm(e){return rk(e.context)}function Y(e){pe(!1)}function xk(e){let{basename:t="/",children:r=null,location:n,navigationType:i=Ir.Pop,navigator:s,static:a=!1,future:c}=e;oi()&&pe(!1);let d=t.replace(/^\/*/,"/"),u=$.useMemo(()=>({basename:d,navigator:s,static:a,future:fs({v7_relativeSplatPath:!1},c)}),[d,c,s,a]);typeof n=="string"&&(n=ni(n));let{pathname:h="/",search:m="",hash:p="",state:b=null,key:v="default"}=n,j=$.useMemo(()=>{let P=Uo(h,d);return P==null?null:{location:{pathname:P,search:m,hash:p,state:b,key:v},navigationType:i}},[d,h,m,p,b,v,i]);return j==null?null:$.createElement(yr.Provider,{value:u},$.createElement(pc.Provider,{children:r,value:j}))}function yk(e){let{children:t,location:r}=e;return nk(ih(t),r)}new Promise(()=>{});function ih(e,t){t===void 0&&(t=[]);let r=[];return $.Children.forEach(e,(n,i)=>{if(!$.isValidElement(n))return;let s=[...t,i];if(n.type===$.Fragment){r.push.apply(r,ih(n.props.children,s));return}n.type!==Y&&pe(!1),!n.props.index||!n.props.children||pe(!1);let a={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=ih(n.props.children,s)),r.push(a)}),r}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zl(){return zl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},zl.apply(this,arguments)}function Tv(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,s;for(s=0;s<n.length;s++)i=n[s],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function vk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function bk(e,t){return e.button===0&&(!t||t==="_self")&&!vk(e)}const wk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],$k=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],jk="6";try{window.__reactRouterVersion=jk}catch{}const kk=$.createContext({isTransitioning:!1}),Ck="startTransition",Df=g$[Ck];function Sk(e){let{basename:t,children:r,future:n,window:i}=e,s=$.useRef();s.current==null&&(s.current=Tj({window:i,v5Compat:!0}));let a=s.current,[c,d]=$.useState({action:a.action,location:a.location}),{v7_startTransition:u}=n||{},h=$.useCallback(m=>{u&&Df?Df(()=>d(m)):d(m)},[d,u]);return $.useLayoutEffect(()=>a.listen(h),[a,h]),$.useEffect(()=>gk(n),[n]),$.createElement(xk,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:a,future:n})}const Pk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Tk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gs=$.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:s,replace:a,state:c,target:d,to:u,preventScrollReset:h,viewTransition:m}=t,p=Tv(t,wk),{basename:b}=$.useContext(yr),v,j=!1;if(typeof u=="string"&&Tk.test(u)&&(v=u,Pk))try{let g=new URL(window.location.href),x=u.startsWith("//")?new URL(g.protocol+u):new URL(u),C=Uo(x.pathname,b);x.origin===g.origin&&C!=null?u=C+x.search+x.hash:j=!0}catch{}let P=Zj(u,{relative:i}),y=Mk(u,{replace:a,state:c,target:d,preventScrollReset:h,relative:i,viewTransition:m});function f(g){n&&n(g),g.defaultPrevented||y(g)}return $.createElement("a",zl({},p,{href:v||P,onClick:j||s?n:f,ref:r,target:d}))}),zm=$.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:i=!1,className:s="",end:a=!1,style:c,to:d,viewTransition:u,children:h}=t,m=Tv(t,$k),p=fc(d,{relative:m.relative}),b=Kt(),v=$.useContext($v),{navigator:j,basename:P}=$.useContext(yr),y=v!=null&&zk(p)&&u===!0,f=j.encodeLocation?j.encodeLocation(p).pathname:p.pathname,g=b.pathname,x=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(g=g.toLowerCase(),x=x?x.toLowerCase():null,f=f.toLowerCase()),x&&P&&(x=Uo(x,P)||x);const C=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let k=g===f||!a&&g.startsWith(f)&&g.charAt(C)==="/",S=x!=null&&(x===f||!a&&x.startsWith(f)&&x.charAt(f.length)==="/"),w={isActive:k,isPending:S,isTransitioning:y},A=k?n:void 0,T;typeof s=="function"?T=s(w):T=[s,k?"active":null,S?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let U=typeof c=="function"?c(w):c;return $.createElement(gs,zl({},m,{"aria-current":A,className:T,ref:r,style:U,to:d,viewTransition:u}),typeof h=="function"?h(w):h)});var sh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(sh||(sh={}));var Ef;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ef||(Ef={}));function Ak(e){let t=$.useContext(mc);return t||pe(!1),t}function Mk(e,t){let{target:r,replace:n,state:i,preventScrollReset:s,relative:a,viewTransition:c}=t===void 0?{}:t,d=Es(),u=Kt(),h=fc(e,{relative:a});return $.useCallback(m=>{if(bk(m,r)){m.preventDefault();let p=n!==void 0?n:Al(u)===Al(h);d(e,{replace:p,state:i,preventScrollReset:s,relative:a,viewTransition:c})}},[u,d,h,n,i,r,e,s,a,c])}function zk(e,t){t===void 0&&(t={});let r=$.useContext(kk);r==null&&pe(!1);let{basename:n}=Ak(sh.useViewTransitionState),i=fc(e,{relative:t.relative});if(!r.isTransitioning)return!1;let s=Uo(r.currentLocation.pathname,n)||r.currentLocation.pathname,a=Uo(r.nextLocation.pathname,n)||r.nextLocation.pathname;return oh(i.pathname,a)!=null||oh(i.pathname,s)!=null}var De=function(){return De=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},De.apply(this,arguments)};function xs(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,s;n<i;n++)(s||!(n in t))&&(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return e.concat(s||Array.prototype.slice.call(t))}var ie="-ms-",Hi="-moz-",K="-webkit-",Av="comm",gc="rule",Dm="decl",Dk="@import",Mv="@keyframes",Ek="@layer",zv=Math.abs,Em=String.fromCharCode,ah=Object.assign;function Lk(e,t){return ze(e,0)^45?(((t<<2^ze(e,0))<<2^ze(e,1))<<2^ze(e,2))<<2^ze(e,3):0}function Dv(e){return e.trim()}function er(e,t){return(e=t.exec(e))?e[0]:e}function H(e,t,r){return e.replace(t,r)}function Xa(e,t,r){return e.indexOf(t,r)}function ze(e,t){return e.charCodeAt(t)|0}function Ho(e,t,r){return e.slice(t,r)}function _t(e){return e.length}function Ev(e){return e.length}function Li(e,t){return t.push(e),e}function Rk(e,t){return e.map(t).join("")}function Lf(e,t){return e.filter(function(r){return!er(r,t)})}var xc=1,Go=1,Lv=0,Ct=0,je=0,ii="";function yc(e,t,r,n,i,s,a,c){return{value:e,root:t,parent:r,type:n,props:i,children:s,line:xc,column:Go,length:a,return:"",siblings:c}}function Pr(e,t){return ah(yc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Yn(e){for(;e.root;)e=Pr(e.root,{children:[e]});Li(e,e.siblings)}function Ik(){return je}function Fk(){return je=Ct>0?ze(ii,--Ct):0,Go--,je===10&&(Go=1,xc--),je}function Lt(){return je=Ct<Lv?ze(ii,Ct++):0,Go++,je===10&&(Go=1,xc++),je}function zn(){return ze(ii,Ct)}function Ja(){return Ct}function vc(e,t){return Ho(ii,e,t)}function lh(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Nk(e){return xc=Go=1,Lv=_t(ii=e),Ct=0,[]}function Bk(e){return ii="",e}function cd(e){return Dv(vc(Ct-1,ch(e===91?e+2:e===40?e+1:e)))}function Ok(e){for(;(je=zn())&&je<33;)Lt();return lh(e)>2||lh(je)>3?"":" "}function Vk(e,t){for(;--t&&Lt()&&!(je<48||je>102||je>57&&je<65||je>70&&je<97););return vc(e,Ja()+(t<6&&zn()==32&&Lt()==32))}function ch(e){for(;Lt();)switch(je){case e:return Ct;case 34:case 39:e!==34&&e!==39&&ch(je);break;case 40:e===41&&ch(e);break;case 92:Lt();break}return Ct}function _k(e,t){for(;Lt()&&e+je!==57;)if(e+je===84&&zn()===47)break;return"/*"+vc(t,Ct-1)+"*"+Em(e===47?e:Lt())}function Wk(e){for(;!lh(zn());)Lt();return vc(e,Ct)}function Uk(e){return Bk(Za("",null,null,null,[""],e=Nk(e),0,[0],e))}function Za(e,t,r,n,i,s,a,c,d){for(var u=0,h=0,m=a,p=0,b=0,v=0,j=1,P=1,y=1,f=0,g="",x=i,C=s,k=n,S=g;P;)switch(v=f,f=Lt()){case 40:if(v!=108&&ze(S,m-1)==58){Xa(S+=H(cd(f),"&","&\f"),"&\f",zv(u?c[u-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:S+=cd(f);break;case 9:case 10:case 13:case 32:S+=Ok(v);break;case 92:S+=Vk(Ja()-1,7);continue;case 47:switch(zn()){case 42:case 47:Li(Hk(_k(Lt(),Ja()),t,r,d),d);break;default:S+="/"}break;case 123*j:c[u++]=_t(S)*y;case 125*j:case 59:case 0:switch(f){case 0:case 125:P=0;case 59+h:y==-1&&(S=H(S,/\f/g,"")),b>0&&_t(S)-m&&Li(b>32?If(S+";",n,r,m-1,d):If(H(S," ","")+";",n,r,m-2,d),d);break;case 59:S+=";";default:if(Li(k=Rf(S,t,r,u,h,i,c,g,x=[],C=[],m,s),s),f===123)if(h===0)Za(S,t,k,k,x,s,m,c,C);else switch(p===99&&ze(S,3)===110?100:p){case 100:case 108:case 109:case 115:Za(e,k,k,n&&Li(Rf(e,k,k,0,0,i,c,g,i,x=[],m,C),C),i,C,m,c,n?x:C);break;default:Za(S,k,k,k,[""],C,0,c,C)}}u=h=b=0,j=y=1,g=S="",m=a;break;case 58:m=1+_t(S),b=v;default:if(j<1){if(f==123)--j;else if(f==125&&j++==0&&Fk()==125)continue}switch(S+=Em(f),f*j){case 38:y=h>0?1:(S+="\f",-1);break;case 44:c[u++]=(_t(S)-1)*y,y=1;break;case 64:zn()===45&&(S+=cd(Lt())),p=zn(),h=m=_t(g=S+=Wk(Ja())),f++;break;case 45:v===45&&_t(S)==2&&(j=0)}}return s}function Rf(e,t,r,n,i,s,a,c,d,u,h,m){for(var p=i-1,b=i===0?s:[""],v=Ev(b),j=0,P=0,y=0;j<n;++j)for(var f=0,g=Ho(e,p+1,p=zv(P=a[j])),x=e;f<v;++f)(x=Dv(P>0?b[f]+" "+g:H(g,/&\f/g,b[f])))&&(d[y++]=x);return yc(e,t,r,i===0?gc:c,d,u,h,m)}function Hk(e,t,r,n){return yc(e,t,r,Av,Em(Ik()),Ho(e,2,-2),0,n)}function If(e,t,r,n,i){return yc(e,t,r,Dm,Ho(e,0,n),Ho(e,n+1,-1),n,i)}function Rv(e,t,r){switch(Lk(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 4789:return Hi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+Hi+e+ie+e+e;case 5936:switch(ze(e,t+11)){case 114:return K+e+ie+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+ie+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+ie+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return K+e+ie+e+e;case 6165:return K+e+ie+"flex-"+e+e;case 5187:return K+e+H(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+ie+"flex-$1$2")+e;case 5443:return K+e+ie+"flex-item-"+H(e,/flex-|-self/g,"")+(er(e,/flex-|baseline/)?"":ie+"grid-row-"+H(e,/flex-|-self/g,""))+e;case 4675:return K+e+ie+"flex-line-pack"+H(e,/align-content|flex-|-self/g,"")+e;case 5548:return K+e+ie+H(e,"shrink","negative")+e;case 5292:return K+e+ie+H(e,"basis","preferred-size")+e;case 6060:return K+"box-"+H(e,"-grow","")+K+e+ie+H(e,"grow","positive")+e;case 4554:return K+H(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4200:if(!er(e,/flex-|baseline/))return ie+"grid-column-align"+Ho(e,t)+e;break;case 2592:case 3360:return ie+H(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,i){return t=i,er(n.props,/grid-\w+-end/)})?~Xa(e+(r=r[t].value),"span",0)?e:ie+H(e,"-start","")+e+ie+"grid-row-span:"+(~Xa(r,"span",0)?er(r,/\d+/):+er(r,/\d+/)-+er(e,/\d+/))+";":ie+H(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return er(n.props,/grid-\w+-start/)})?e:ie+H(H(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_t(e)-1-t>6)switch(ze(e,t+1)){case 109:if(ze(e,t+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+Hi+(ze(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Xa(e,"stretch",0)?Rv(H(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return H(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,s,a,c,d,u){return ie+i+":"+s+u+(a?ie+i+"-span:"+(c?d:+d-+s)+u:"")+e});case 4949:if(ze(e,t+6)===121)return H(e,":",":"+K)+e;break;case 6444:switch(ze(e,ze(e,14)===45?18:11)){case 120:return H(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+K+(ze(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+ie+"$2box$3")+e;case 100:return H(e,":",":"+ie)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return H(e,"scroll-","scroll-snap-")+e}return e}function Dl(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Gk(e,t,r,n){switch(e.type){case Ek:if(e.children.length)break;case Dk:case Dm:return e.return=e.return||e.value;case Av:return"";case Mv:return e.return=e.value+"{"+Dl(e.children,n)+"}";case gc:if(!_t(e.value=e.props.join(",")))return""}return _t(r=Dl(e.children,n))?e.return=e.value+"{"+r+"}":""}function Yk(e){var t=Ev(e);return function(r,n,i,s){for(var a="",c=0;c<t;c++)a+=e[c](r,n,i,s)||"";return a}}function qk(e){return function(t){t.root||(t=t.return)&&e(t)}}function Qk(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Dm:e.return=Rv(e.value,e.length,r);return;case Mv:return Dl([Pr(e,{value:H(e.value,"@","@"+K)})],n);case gc:if(e.length)return Rk(r=e.props,function(i){switch(er(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Yn(Pr(e,{props:[H(i,/:(read-\w+)/,":"+Hi+"$1")]})),Yn(Pr(e,{props:[i]})),ah(e,{props:Lf(r,n)});break;case"::placeholder":Yn(Pr(e,{props:[H(i,/:(plac\w+)/,":"+K+"input-$1")]})),Yn(Pr(e,{props:[H(i,/:(plac\w+)/,":"+Hi+"$1")]})),Yn(Pr(e,{props:[H(i,/:(plac\w+)/,ie+"input-$1")]})),Yn(Pr(e,{props:[i]})),ah(e,{props:Lf(r,n)});break}return""})}}var Kk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},st={},Yo=typeof process<"u"&&st!==void 0&&(st.REACT_APP_SC_ATTR||st.SC_ATTR)||"data-styled",Iv="active",Fv="data-styled-version",bc="6.1.17",Lm=`/*!sc*/
`,El=typeof window<"u"&&"HTMLElement"in window,Xk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&st!==void 0&&st.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&st.REACT_APP_SC_DISABLE_SPEEDY!==""?st.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&st.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&st!==void 0&&st.SC_DISABLE_SPEEDY!==void 0&&st.SC_DISABLE_SPEEDY!==""&&st.SC_DISABLE_SPEEDY!=="false"&&st.SC_DISABLE_SPEEDY),Jk={},wc=Object.freeze([]),qo=Object.freeze({});function Nv(e,t,r){return r===void 0&&(r=qo),e.theme!==r.theme&&e.theme||t||r.theme}var Bv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Zk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,eC=/(^-|-$)/g;function Ff(e){return e.replace(Zk,"-").replace(eC,"")}var tC=/(a)(d)/gi,ra=52,Nf=function(e){return String.fromCharCode(e+(e>25?39:97))};function dh(e){var t,r="";for(t=Math.abs(e);t>ra;t=t/ra|0)r=Nf(t%ra)+r;return(Nf(t%ra)+r).replace(tC,"$1-$2")}var dd,Ov=5381,Co=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Vv=function(e){return Co(Ov,e)};function _v(e){return dh(Vv(e)>>>0)}function rC(e){return e.displayName||e.name||"Component"}function ud(e){return typeof e=="string"&&!0}var Wv=typeof Symbol=="function"&&Symbol.for,Uv=Wv?Symbol.for("react.memo"):60115,nC=Wv?Symbol.for("react.forward_ref"):60112,oC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},iC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Hv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sC=((dd={})[nC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dd[Uv]=Hv,dd);function Bf(e){return("type"in(t=e)&&t.type.$$typeof)===Uv?Hv:"$$typeof"in e?sC[e.$$typeof]:oC;var t}var aC=Object.defineProperty,lC=Object.getOwnPropertyNames,Of=Object.getOwnPropertySymbols,cC=Object.getOwnPropertyDescriptor,dC=Object.getPrototypeOf,Vf=Object.prototype;function Gv(e,t,r){if(typeof t!="string"){if(Vf){var n=dC(t);n&&n!==Vf&&Gv(e,n,r)}var i=lC(t);Of&&(i=i.concat(Of(t)));for(var s=Bf(e),a=Bf(t),c=0;c<i.length;++c){var d=i[c];if(!(d in iC||r&&r[d]||a&&d in a||s&&d in s)){var u=cC(t,d);try{aC(e,d,u)}catch{}}}}return e}function Nn(e){return typeof e=="function"}function Rm(e){return typeof e=="object"&&"styledComponentId"in e}function Pn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function uh(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function ys(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function hh(e,t,r){if(r===void 0&&(r=!1),!r&&!ys(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=hh(e[n],t[n]);else if(ys(t))for(var n in t)e[n]=hh(e[n],t[n]);return e}function Im(e,t){Object.defineProperty(e,"toString",{value:t})}function Bn(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var uC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,s=i;t>=s;)if((s<<=1)<0)throw Bn(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var a=i;a<s;a++)this.groupSizes[a]=0}for(var c=this.indexOfGroup(t+1),d=(a=0,r.length);a<d;a++)this.tag.insertRule(c,r[a])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r;this.groupSizes[t]=0;for(var s=n;s<i;s++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],i=this.indexOfGroup(t),s=i+n,a=i;a<s;a++)r+="".concat(this.tag.getRule(a)).concat(Lm);return r},e}(),el=new Map,Ll=new Map,tl=1,na=function(e){if(el.has(e))return el.get(e);for(;Ll.has(tl);)tl++;var t=tl++;return el.set(e,t),Ll.set(t,e),t},hC=function(e,t){tl=t+1,el.set(e,t),Ll.set(t,e)},mC="style[".concat(Yo,"][").concat(Fv,'="').concat(bc,'"]'),pC=new RegExp("^".concat(Yo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),fC=function(e,t,r){for(var n,i=r.split(","),s=0,a=i.length;s<a;s++)(n=i[s])&&e.registerName(t,n)},gC=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Lm),i=[],s=0,a=n.length;s<a;s++){var c=n[s].trim();if(c){var d=c.match(pC);if(d){var u=0|parseInt(d[1],10),h=d[2];u!==0&&(hC(h,u),fC(e,h,d[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(c)}}},_f=function(e){for(var t=document.querySelectorAll(mC),r=0,n=t.length;r<n;r++){var i=t[r];i&&i.getAttribute(Yo)!==Iv&&(gC(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function xC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Yv=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(c){var d=Array.from(c.querySelectorAll("style[".concat(Yo,"]")));return d[d.length-1]}(r),s=i!==void 0?i.nextSibling:null;n.setAttribute(Yo,Iv),n.setAttribute(Fv,bc);var a=xC();return a&&n.setAttribute("nonce",a),r.insertBefore(n,s),n},yC=function(){function e(t){this.element=Yv(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,s=n.length;i<s;i++){var a=n[i];if(a.ownerNode===r)return a}throw Bn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),vC=function(){function e(t){this.element=Yv(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),bC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Wf=El,wC={isServer:!El,useCSSOMInjection:!Xk},Rl=function(){function e(t,r,n){t===void 0&&(t=qo),r===void 0&&(r={});var i=this;this.options=De(De({},wC),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&El&&Wf&&(Wf=!1,_f(this)),Im(this,function(){return function(s){for(var a=s.getTag(),c=a.length,d="",u=function(m){var p=function(y){return Ll.get(y)}(m);if(p===void 0)return"continue";var b=s.names.get(p),v=a.getGroup(m);if(b===void 0||!b.size||v.length===0)return"continue";var j="".concat(Yo,".g").concat(m,'[id="').concat(p,'"]'),P="";b!==void 0&&b.forEach(function(y){y.length>0&&(P+="".concat(y,","))}),d+="".concat(v).concat(j,'{content:"').concat(P,'"}').concat(Lm)},h=0;h<c;h++)u(h);return d}(i)})}return e.registerId=function(t){return na(t)},e.prototype.rehydrate=function(){!this.server&&El&&_f(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(De(De({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new bC(i):n?new yC(i):new vC(i)}(this.options),new uC(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(na(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(na(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(na(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),$C=/&/g,jC=/^\s*\/\/.*$/gm;function qv(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=qv(r.children,t)),r})}function kC(e){var t,r,n,i=qo,s=i.options,a=s===void 0?qo:s,c=i.plugins,d=c===void 0?wc:c,u=function(p,b,v){return v.startsWith(r)&&v.endsWith(r)&&v.replaceAll(r,"").length>0?".".concat(t):p},h=d.slice();h.push(function(p){p.type===gc&&p.value.includes("&")&&(p.props[0]=p.props[0].replace($C,r).replace(n,u))}),a.prefix&&h.push(Qk),h.push(Gk);var m=function(p,b,v,j){b===void 0&&(b=""),v===void 0&&(v=""),j===void 0&&(j="&"),t=j,r=b,n=new RegExp("\\".concat(r,"\\b"),"g");var P=p.replace(jC,""),y=Uk(v||b?"".concat(v," ").concat(b," { ").concat(P," }"):P);a.namespace&&(y=qv(y,a.namespace));var f=[];return Dl(y,Yk(h.concat(qk(function(g){return f.push(g)})))),f};return m.hash=d.length?d.reduce(function(p,b){return b.name||Bn(15),Co(p,b.name)},Ov).toString():"",m}var CC=new Rl,mh=kC(),Qv=le.createContext({shouldForwardProp:void 0,styleSheet:CC,stylis:mh});Qv.Consumer;le.createContext(void 0);function ph(){return $.useContext(Qv)}var SC=function(){function e(t,r){var n=this;this.inject=function(i,s){s===void 0&&(s=mh);var a=n.name+s.hash;i.hasNameForId(n.id,a)||i.insertRules(n.id,a,s(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Im(this,function(){throw Bn(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=mh),this.name+t.hash},e}(),PC=function(e){return e>="A"&&e<="Z"};function Uf(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;PC(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Kv=function(e){return e==null||e===!1||e===""},Xv=function(e){var t,r,n=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!Kv(s)&&(Array.isArray(s)&&s.isCss||Nn(s)?n.push("".concat(Uf(i),":"),s,";"):ys(s)?n.push.apply(n,xs(xs(["".concat(i," {")],Xv(s),!1),["}"],!1)):n.push("".concat(Uf(i),": ").concat((t=i,(r=s)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Kk||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Gr(e,t,r,n){if(Kv(e))return[];if(Rm(e))return[".".concat(e.styledComponentId)];if(Nn(e)){if(!Nn(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Gr(i,t,r,n)}var s;return e instanceof SC?r?(e.inject(r,n),[e.getName(n)]):[e]:ys(e)?Xv(e):Array.isArray(e)?Array.prototype.concat.apply(wc,e.map(function(a){return Gr(a,t,r,n)})):[e.toString()]}function Jv(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Nn(r)&&!Rm(r))return!1}return!0}var TC=Vv(bc),AC=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Jv(t),this.componentId=r,this.baseHash=Co(TC,r),this.baseStyle=n,Rl.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=Pn(i,this.staticRulesId);else{var s=uh(Gr(this.rules,t,r,n)),a=dh(Co(this.baseHash,s)>>>0);if(!r.hasNameForId(this.componentId,a)){var c=n(s,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,c)}i=Pn(i,a),this.staticRulesId=a}else{for(var d=Co(this.baseHash,n.hash),u="",h=0;h<this.rules.length;h++){var m=this.rules[h];if(typeof m=="string")u+=m;else if(m){var p=uh(Gr(m,t,r,n));d=Co(d,p+h),u+=p}}if(u){var b=dh(d>>>0);r.hasNameForId(this.componentId,b)||r.insertRules(this.componentId,b,n(u,".".concat(b),void 0,this.componentId)),i=Pn(i,b)}}return i},e}(),vs=le.createContext(void 0);vs.Consumer;function MC(e){var t=le.useContext(vs),r=$.useMemo(function(){return function(n,i){if(!n)throw Bn(14);if(Nn(n)){var s=n(i);return s}if(Array.isArray(n)||typeof n!="object")throw Bn(8);return i?De(De({},i),n):n}(e.theme,t)},[e.theme,t]);return e.children?le.createElement(vs.Provider,{value:r},e.children):null}var hd={};function zC(e,t,r){var n=Rm(e),i=e,s=!ud(e),a=t.attrs,c=a===void 0?wc:a,d=t.componentId,u=d===void 0?function(x,C){var k=typeof x!="string"?"sc":Ff(x);hd[k]=(hd[k]||0)+1;var S="".concat(k,"-").concat(_v(bc+k+hd[k]));return C?"".concat(C,"-").concat(S):S}(t.displayName,t.parentComponentId):d,h=t.displayName,m=h===void 0?function(x){return ud(x)?"styled.".concat(x):"Styled(".concat(rC(x),")")}(e):h,p=t.displayName&&t.componentId?"".concat(Ff(t.displayName),"-").concat(t.componentId):t.componentId||u,b=n&&i.attrs?i.attrs.concat(c).filter(Boolean):c,v=t.shouldForwardProp;if(n&&i.shouldForwardProp){var j=i.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;v=function(x,C){return j(x,C)&&P(x,C)}}else v=j}var y=new AC(r,p,n?i.componentStyle:void 0);function f(x,C){return function(k,S,w){var A=k.attrs,T=k.componentStyle,U=k.defaultProps,L=k.foldedComponentIds,R=k.styledComponentId,V=k.target,re=le.useContext(vs),Q=ph(),ve=k.shouldForwardProp||Q.shouldForwardProp,I=Nv(S,re,U)||qo,M=function(it,ge,Ue){for(var Bt,Je=De(De({},ge),{className:void 0,theme:Ue}),St=0;St<it.length;St+=1){var He=Nn(Bt=it[St])?Bt(Je):Bt;for(var z in He)Je[z]=z==="className"?Pn(Je[z],He[z]):z==="style"?De(De({},Je[z]),He[z]):He[z]}return ge.className&&(Je.className=Pn(Je.className,ge.className)),Je}(A,S,I),B=M.as||V,F={};for(var _ in M)M[_]===void 0||_[0]==="$"||_==="as"||_==="theme"&&M.theme===I||(_==="forwardedAs"?F.as=M.forwardedAs:ve&&!ve(_,B)||(F[_]=M[_]));var gt=function(it,ge){var Ue=ph(),Bt=it.generateAndInjectStyles(ge,Ue.styleSheet,Ue.stylis);return Bt}(T,M),Ne=Pn(L,R);return gt&&(Ne+=" "+gt),M.className&&(Ne+=" "+M.className),F[ud(B)&&!Bv.has(B)?"class":"className"]=Ne,w&&(F.ref=w),$.createElement(B,F)}(g,x,C)}f.displayName=m;var g=le.forwardRef(f);return g.attrs=b,g.componentStyle=y,g.displayName=m,g.shouldForwardProp=v,g.foldedComponentIds=n?Pn(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=p,g.target=n?i.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=n?function(C){for(var k=[],S=1;S<arguments.length;S++)k[S-1]=arguments[S];for(var w=0,A=k;w<A.length;w++)hh(C,A[w],!0);return C}({},i.defaultProps,x):x}}),Im(g,function(){return".".concat(g.styledComponentId)}),s&&Gv(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Hf(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var Gf=function(e){return Object.assign(e,{isCss:!0})};function hr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Nn(e)||ys(e))return Gf(Gr(Hf(wc,xs([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Gr(n):Gf(Gr(Hf(n,t)))}function fh(e,t,r){if(r===void 0&&(r=qo),!t)throw Bn(1,t);var n=function(i){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];return e(t,r,hr.apply(void 0,xs([i],s,!1)))};return n.attrs=function(i){return fh(e,t,De(De({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return fh(e,t,De(De({},r),i))},n}var Zv=function(e){return fh(zC,e)},l=Zv;Bv.forEach(function(e){l[e]=Zv(e)});var DC=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Jv(t),Rl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,i){var s=i(uh(Gr(this.rules,r,n,i)),""),a=this.componentId+t;n.insertRules(a,a,s)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,i){t>2&&Rl.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,i)},e}();function EC(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=hr.apply(void 0,xs([e],t,!1)),i="sc-global-".concat(_v(JSON.stringify(n))),s=new DC(n,i),a=function(d){var u=ph(),h=le.useContext(vs),m=le.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&c(m,d,u.styleSheet,h,u.stylis),le.useLayoutEffect(function(){if(!u.styleSheet.server)return c(m,d,u.styleSheet,h,u.stylis),function(){return s.removeStyles(m,u.styleSheet)}},[m,d,u.styleSheet,h,u.stylis]),null};function c(d,u,h,m,p){if(s.isStatic)s.renderStyles(d,Jk,h,p);else{var b=De(De({},u),{theme:Nv(u,m,a.defaultProps)});s.renderStyles(d,b,h,p)}}return le.memo(a)}const LC=(e="#0ea5e9")=>{const t=s=>{const a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(s);return a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},r=(s,a,c)=>"#"+[s,a,c].map(d=>{const u=Math.round(Math.max(0,Math.min(255,d))).toString(16);return u.length===1?"0"+u:u}).join(""),n=(s,a)=>{const c=t(s);return r(c[0]+(255-c[0])*a,c[1]+(255-c[1])*a,c[2]+(255-c[2])*a)},i=(s,a)=>{const c=t(s);return r(c[0]*(1-a),c[1]*(1-a),c[2]*(1-a))};return{50:n(e,.85),100:n(e,.75),200:n(e,.65),300:n(e,.5),400:n(e,.25),500:e,600:i(e,.1),700:i(e,.2),800:i(e,.3),900:i(e,.4)}},Yf={shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},borderRadius:{sm:"0.125rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem",full:"9999px"},transition:{fast:"150ms",normal:"250ms",slow:"350ms"},breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},spacing:{px:"1px",0:"0",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},RC={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},Fm=(e,t)=>{const r=t?LC(t):RC,n={primary:r,neutral:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},success:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},warning:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},danger:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},purple:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},accent:{green:"#10b981",red:"#ef4444",yellow:"#f59e0b",purple:"#8b5cf6"},background:{primary:"#f1f5f9",secondary:"#ffffff",tertiary:"#e2e8f0",lighter:"#f8fafc",light:"#f5f5f5",hover:"#f1f5f9"},text:{primary:"#0f172a",secondary:"#475569",tertiary:"#64748b",inverse:"#ffffff"},border:{light:"#e2e8f0",lighter:"#f1f5f9",dark:"#cbd5e1"},shadow:e==="light"?{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",DEFAULT:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",none:"none"}:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.4)",DEFAULT:"0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.4)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)",none:"none"},sidebar:{background:e==="light"?"#ffffff":"#1e293b",text:e==="light"?"#334155":"#e2e8f0",border:e==="light"?"#e2e8f0":"#334155",logoText:e==="light"?r[600]:r[400],sectionLabel:e==="light"?"#94a3b8":"#64748b",menuItem:e==="light"?"#475569":"#cbd5e1",activeMenuItem:e==="light"?r[600]:r[400],activeMenuItemBg:e==="light"?"#f1f5f9":"#334155",menuItemHover:e==="light"?"#f8fafc":"#334155",toggleButton:e==="light"?"#64748b":"#94a3b8",toggleButtonHover:e==="light"?"#e2e8f0":"#475569",subtleText:e==="light"?"#64748b":"#94a3b8"}},i={sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",small:"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",medium:"0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)"},s={hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800,sidebar:1e3,navButton:1100};return e==="dark"?{...Yf,colors:{...n,background:{primary:"#0f172a",secondary:"#1e293b",tertiary:"#334155",lighter:"#1e293b",light:"#334155",hover:"#475569"},text:{primary:"#f8fafc",secondary:"#e2e8f0",tertiary:"#94a3b8",inverse:"#0f172a"},border:{light:"#334155",lighter:"#475569",dark:"#1e293b"},shadow:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.07)",DEFAULT:"0 1px 3px 0 rgba(0, 0, 0, 0.7), 0 1px 2px 0 rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.07)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.7), 0 2px 4px -1px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.07)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.07)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.7), 0 10px 10px -5px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.07)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.07)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.7)",none:"none"}},shadows:i,zIndices:s}:{...Yf,colors:n,shadows:i,zIndices:s}};Fm("light");Fm("dark");const IC=EC`
  :root {
    /* Primary Colors */
    --primary-50: #f0f9ff;
    --primary-100: #e0f2fe;
    --primary-200: #bae6fd;
    --primary-300: #7dd3fc;
    --primary-400: #38bdf8;
    --primary-500: #0ea5e9;
    --primary-600: #0284c7;
    --primary-700: #0369a1;
    --primary-800: #075985;
    --primary-900: #0c4a6e;

    /* Neutral Colors */
    --neutral-50: #f8fafc;
    --neutral-100: #f1f5f9;
    --neutral-200: #e2e8f0;
    --neutral-300: #cbd5e1;
    --neutral-400: #94a3b8;
    --neutral-500: #64748b;
    --neutral-600: #475569;
    --neutral-700: #334155;
    --neutral-800: #1e293b;
    --neutral-900: #0f172a;

    /* Accent Colors */
    --accent-green: #10b981;
    --accent-red: #ef4444;
    --accent-yellow: #f59e0b;
    --accent-purple: #8b5cf6;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    
    /* Border Radius */
    --border-radius-sm: 0.125rem;
    --border-radius-md: 0.375rem;
    --border-radius-lg: 0.5rem;
    --border-radius-xl: 0.75rem;
    --border-radius-2xl: 1rem;
    --border-radius-full: 9999px;
    
    /* Animation Speed */
    --transition-fast: 150ms;
    --transition-normal: 250ms;
    --transition-slow: 350ms;
    
    /* Font Sizes */
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    
    /* Font Weights */
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${e=>e.theme.colors.background.primary};
    color: ${e=>e.theme.colors.text.primary};
    height: 100%;
    width: 100%;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  #root {
    height: 100%;
  }

  /* Ensure text selection is visible with proper contrast in all contexts */
  ::selection {
    background-color: ${e=>e.theme.colors.primary[600]};
    color: white;
  }

  ::-moz-selection {
    background-color: ${e=>e.theme.colors.primary[600]};
    color: white;
  }

  /* Ensure text selection within inputs and contentEditable elements works in dark mode */
  input::selection, 
  textarea::selection, 
  [contenteditable]::selection,
  select::selection,
  option::selection,
  td::selection,
  th::selection,
  div::selection,
  p::selection,
  span::selection,
  li::selection,
  a::selection,
  h1::selection, h2::selection, h3::selection, h4::selection, h5::selection, h6::selection {
    background-color: ${e=>e.theme.colors.primary[600]};
    color: white;
  }

  /* Fix for Firefox */
  input::-moz-selection, 
  textarea::-moz-selection, 
  [contenteditable]::-moz-selection,
  select::-moz-selection,
  option::-moz-selection,
  td::-moz-selection,
  th::-moz-selection,
  div::-moz-selection,
  p::-moz-selection,
  span::-moz-selection,
  li::-moz-selection,
  a::-moz-selection,
  h1::-moz-selection, h2::-moz-selection, h3::-moz-selection, h4::-moz-selection, h5::-moz-selection, h6::-moz-selection {
    background-color: ${e=>e.theme.colors.primary[600]};
    color: white;
  }

  /* Fix for table row selection */
  tr.selected, tr:focus-within {
    background-color: ${e=>e.theme.colors.background.primary==="#0f172a"?e.theme.colors.primary[900]+"80":e.theme.colors.primary[50]} !important;
    outline: 1px solid ${e=>e.theme.colors.primary[500]};
  }

  tr td.selected, tr td:focus-within {
    background-color: ${e=>e.theme.colors.background.primary==="#0f172a"?e.theme.colors.primary[700]+"50":e.theme.colors.primary[100]} !important;
  }

  /* Make checkboxes more visible in dark mode */
  input[type="checkbox"] {
    accent-color: ${e=>e.theme.colors.primary[600]};
    width: 16px;
    height: 16px;
    
    &:checked {
      background-color: ${e=>e.theme.colors.primary[600]};
      border-color: ${e=>e.theme.colors.primary[600]};
    }
  }

  a {
    text-decoration: none;
    color: var(--primary-600);
    transition: color var(--transition-fast) ease-in-out;
    
    &:hover {
      color: var(--primary-700);
    }
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
  }

  /* Fix for selection in inputs */
  input::selection, textarea::selection {
    background-color: ${e=>e.theme.colors.primary[400]};
    color: ${e=>e.theme.colors.text.inverse};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: var(--font-weight-semibold);
    line-height: 1.2;
    margin-bottom: 0.5em;
  }

  h1 {
    font-size: var(--font-size-4xl);
  }

  h2 {
    font-size: var(--font-size-3xl);
  }

  h3 {
    font-size: var(--font-size-2xl);
  }

  h4 {
    font-size: var(--font-size-xl);
  }

  p {
    margin-bottom: 1rem;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${e=>e.theme.colors.background.lighter};
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.colors.text.tertiary};
    border-radius: var(--border-radius-full);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${e=>e.theme.colors.text.secondary};
  }
`,eb=$.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),$c=$.createContext({}),jc=$.createContext(null),kc=typeof document<"u",Nm=kc?$.useLayoutEffect:$.useEffect,tb=$.createContext({strict:!1}),Bm=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),FC="framerAppearId",rb="data-"+Bm(FC);function NC(e,t,r,n){const{visualElement:i}=$.useContext($c),s=$.useContext(tb),a=$.useContext(jc),c=$.useContext(eb).reducedMotion,d=$.useRef();n=n||s.renderer,!d.current&&n&&(d.current=n(e,{visualState:t,parent:i,props:r,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:c}));const u=d.current;$.useInsertionEffect(()=>{u&&u.update(r,a)});const h=$.useRef(!!(r[rb]&&!window.HandoffComplete));return Nm(()=>{u&&(u.render(),h.current&&u.animationState&&u.animationState.animateChanges())}),$.useEffect(()=>{u&&(u.updateFeatures(),!h.current&&u.animationState&&u.animationState.animateChanges(),h.current&&(h.current=!1,window.HandoffComplete=!0))}),u}function So(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function BC(e,t,r){return $.useCallback(n=>{n&&e.mount&&e.mount(n),t&&(n?t.mount(n):t.unmount()),r&&(typeof r=="function"?r(n):So(r)&&(r.current=n))},[t])}function bs(e){return typeof e=="string"||Array.isArray(e)}function Cc(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Om=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Vm=["initial",...Om];function Sc(e){return Cc(e.animate)||Vm.some(t=>bs(e[t]))}function nb(e){return!!(Sc(e)||e.variants)}function OC(e,t){if(Sc(e)){const{initial:r,animate:n}=e;return{initial:r===!1||bs(r)?r:void 0,animate:bs(n)?n:void 0}}return e.inherit!==!1?t:{}}function VC(e){const{initial:t,animate:r}=OC(e,$.useContext($c));return $.useMemo(()=>({initial:t,animate:r}),[qf(t),qf(r)])}function qf(e){return Array.isArray(e)?e.join(" "):e}const Qf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ws={};for(const e in Qf)ws[e]={isEnabled:t=>Qf[e].some(r=>!!t[r])};function _C(e){for(const t in e)ws[t]={...ws[t],...e[t]}}const _m=$.createContext({}),ob=$.createContext({}),WC=Symbol.for("motionComponentSymbol");function UC({preloadedFeatures:e,createVisualElement:t,useRender:r,useVisualState:n,Component:i}){e&&_C(e);function s(c,d){let u;const h={...$.useContext(eb),...c,layoutId:HC(c)},{isStatic:m}=h,p=VC(c),b=n(c,m);if(!m&&kc){p.visualElement=NC(i,b,h,t);const v=$.useContext(ob),j=$.useContext(tb).strict;p.visualElement&&(u=p.visualElement.loadFeatures(h,j,e,v))}return $.createElement($c.Provider,{value:p},u&&p.visualElement?$.createElement(u,{visualElement:p.visualElement,...h}):null,r(i,c,BC(b,p.visualElement,d),b,m,p.visualElement))}const a=$.forwardRef(s);return a[WC]=i,a}function HC({layoutId:e}){const t=$.useContext(_m).id;return t&&e!==void 0?t+"-"+e:e}function GC(e){function t(n,i={}){return UC(e(n,i))}if(typeof Proxy>"u")return t;const r=new Map;return new Proxy(t,{get:(n,i)=>(r.has(i)||r.set(i,t(i)),r.get(i))})}const YC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Wm(e){return typeof e!="string"||e.includes("-")?!1:!!(YC.indexOf(e)>-1||/[A-Z]/.test(e))}const Il={};function qC(e){Object.assign(Il,e)}const Ls=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Wn=new Set(Ls);function ib(e,{layout:t,layoutId:r}){return Wn.has(e)||e.startsWith("origin")||(t||r!==void 0)&&(!!Il[e]||e==="opacity")}const ot=e=>!!(e&&e.getVelocity),QC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},KC=Ls.length;function XC(e,{enableHardwareAcceleration:t=!0,allowTransformNone:r=!0},n,i){let s="";for(let a=0;a<KC;a++){const c=Ls[a];if(e[c]!==void 0){const d=QC[c]||c;s+=`${d}(${e[c]}) `}}return t&&!e.z&&(s+="translateZ(0)"),s=s.trim(),i?s=i(e,n?"":s):r&&n&&(s="none"),s}const sb=e=>t=>typeof t=="string"&&t.startsWith(e),ab=sb("--"),gh=sb("var(--"),JC=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,ZC=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Xr=(e,t,r)=>Math.min(Math.max(r,e),t),Un={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Gi={...Un,transform:e=>Xr(0,1,e)},oa={...Un,default:1},Yi=e=>Math.round(e*1e5)/1e5,Pc=/(-)?([\d]*\.?[\d])+/g,lb=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,e5=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Rs(e){return typeof e=="string"}const Is=e=>({test:t=>Rs(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Tr=Is("deg"),Gt=Is("%"),W=Is("px"),t5=Is("vh"),r5=Is("vw"),Kf={...Gt,parse:e=>Gt.parse(e)/100,transform:e=>Gt.transform(e*100)},Xf={...Un,transform:Math.round},cb={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,size:W,top:W,right:W,bottom:W,left:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,rotate:Tr,rotateX:Tr,rotateY:Tr,rotateZ:Tr,scale:oa,scaleX:oa,scaleY:oa,scaleZ:oa,skew:Tr,skewX:Tr,skewY:Tr,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:Gi,originX:Kf,originY:Kf,originZ:W,zIndex:Xf,fillOpacity:Gi,strokeOpacity:Gi,numOctaves:Xf};function Um(e,t,r,n){const{style:i,vars:s,transform:a,transformOrigin:c}=e;let d=!1,u=!1,h=!0;for(const m in t){const p=t[m];if(ab(m)){s[m]=p;continue}const b=cb[m],v=ZC(p,b);if(Wn.has(m)){if(d=!0,a[m]=v,!h)continue;p!==(b.default||0)&&(h=!1)}else m.startsWith("origin")?(u=!0,c[m]=v):i[m]=v}if(t.transform||(d||n?i.transform=XC(e.transform,r,h,n):i.transform&&(i.transform="none")),u){const{originX:m="50%",originY:p="50%",originZ:b=0}=c;i.transformOrigin=`${m} ${p} ${b}`}}const Hm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function db(e,t,r){for(const n in t)!ot(t[n])&&!ib(n,r)&&(e[n]=t[n])}function n5({transformTemplate:e},t,r){return $.useMemo(()=>{const n=Hm();return Um(n,t,{enableHardwareAcceleration:!r},e),Object.assign({},n.vars,n.style)},[t])}function o5(e,t,r){const n=e.style||{},i={};return db(i,n,e),Object.assign(i,n5(e,t,r)),e.transformValues?e.transformValues(i):i}function i5(e,t,r){const n={},i=o5(e,t,r);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=i,n}const s5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Fl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||s5.has(e)}let ub=e=>!Fl(e);function a5(e){e&&(ub=t=>t.startsWith("on")?!Fl(t):e(t))}try{a5(require("@emotion/is-prop-valid").default)}catch{}function l5(e,t,r){const n={};for(const i in e)i==="values"&&typeof e.values=="object"||(ub(i)||r===!0&&Fl(i)||!t&&!Fl(i)||e.draggable&&i.startsWith("onDrag"))&&(n[i]=e[i]);return n}function Jf(e,t,r){return typeof e=="string"?e:W.transform(t+r*e)}function c5(e,t,r){const n=Jf(t,e.x,e.width),i=Jf(r,e.y,e.height);return`${n} ${i}`}const d5={offset:"stroke-dashoffset",array:"stroke-dasharray"},u5={offset:"strokeDashoffset",array:"strokeDasharray"};function h5(e,t,r=1,n=0,i=!0){e.pathLength=1;const s=i?d5:u5;e[s.offset]=W.transform(-n);const a=W.transform(t),c=W.transform(r);e[s.array]=`${a} ${c}`}function Gm(e,{attrX:t,attrY:r,attrScale:n,originX:i,originY:s,pathLength:a,pathSpacing:c=1,pathOffset:d=0,...u},h,m,p){if(Um(e,u,h,p),m){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:b,style:v,dimensions:j}=e;b.transform&&(j&&(v.transform=b.transform),delete b.transform),j&&(i!==void 0||s!==void 0||v.transform)&&(v.transformOrigin=c5(j,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(b.x=t),r!==void 0&&(b.y=r),n!==void 0&&(b.scale=n),a!==void 0&&h5(b,a,c,d,!1)}const hb=()=>({...Hm(),attrs:{}}),Ym=e=>typeof e=="string"&&e.toLowerCase()==="svg";function m5(e,t,r,n){const i=$.useMemo(()=>{const s=hb();return Gm(s,t,{enableHardwareAcceleration:!1},Ym(n),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};db(s,e.style,e),i.style={...s,...i.style}}return i}function p5(e=!1){return(r,n,i,{latestValues:s},a)=>{const d=(Wm(r)?m5:i5)(n,s,a,r),h={...l5(n,typeof r=="string",e),...d,ref:i},{children:m}=n,p=$.useMemo(()=>ot(m)?m.get():m,[m]);return $.createElement(r,{...h,children:p})}}function mb(e,{style:t,vars:r},n,i){Object.assign(e.style,t,i&&i.getProjectionStyles(n));for(const s in r)e.style.setProperty(s,r[s])}const pb=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function fb(e,t,r,n){mb(e,t,void 0,n);for(const i in t.attrs)e.setAttribute(pb.has(i)?i:Bm(i),t.attrs[i])}function qm(e,t){const{style:r}=e,n={};for(const i in r)(ot(r[i])||t.style&&ot(t.style[i])||ib(i,e))&&(n[i]=r[i]);return n}function gb(e,t){const r=qm(e,t);for(const n in e)if(ot(e[n])||ot(t[n])){const i=Ls.indexOf(n)!==-1?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n;r[i]=e[n]}return r}function Qm(e,t,r,n={},i={}){return typeof t=="function"&&(t=t(r!==void 0?r:e.custom,n,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(r!==void 0?r:e.custom,n,i)),t}function xb(e){const t=$.useRef(null);return t.current===null&&(t.current=e()),t.current}const Nl=e=>Array.isArray(e),f5=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),g5=e=>Nl(e)?e[e.length-1]||0:e;function rl(e){const t=ot(e)?e.get():e;return f5(t)?t.toValue():t}function x5({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:r},n,i,s){const a={latestValues:y5(n,i,s,e),renderState:t()};return r&&(a.mount=c=>r(n,c,a)),a}const yb=e=>(t,r)=>{const n=$.useContext($c),i=$.useContext(jc),s=()=>x5(e,t,n,i);return r?s():xb(s)};function y5(e,t,r,n){const i={},s=n(e,{});for(const p in s)i[p]=rl(s[p]);let{initial:a,animate:c}=e;const d=Sc(e),u=nb(e);t&&u&&!d&&e.inherit!==!1&&(a===void 0&&(a=t.initial),c===void 0&&(c=t.animate));let h=r?r.initial===!1:!1;h=h||a===!1;const m=h?c:a;return m&&typeof m!="boolean"&&!Cc(m)&&(Array.isArray(m)?m:[m]).forEach(b=>{const v=Qm(e,b);if(!v)return;const{transitionEnd:j,transition:P,...y}=v;for(const f in y){let g=y[f];if(Array.isArray(g)){const x=h?g.length-1:0;g=g[x]}g!==null&&(i[f]=g)}for(const f in j)i[f]=j[f]}),i}const we=e=>e;class Zf{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const r=this.order.indexOf(t);r!==-1&&(this.order.splice(r,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function v5(e){let t=new Zf,r=new Zf,n=0,i=!1,s=!1;const a=new WeakSet,c={schedule:(d,u=!1,h=!1)=>{const m=h&&i,p=m?t:r;return u&&a.add(d),p.add(d)&&m&&i&&(n=t.order.length),d},cancel:d=>{r.remove(d),a.delete(d)},process:d=>{if(i){s=!0;return}if(i=!0,[t,r]=[r,t],r.clear(),n=t.order.length,n)for(let u=0;u<n;u++){const h=t.order[u];h(d),a.has(h)&&(c.schedule(h),e())}i=!1,s&&(s=!1,c.process(d))}};return c}const ia=["prepare","read","update","preRender","render","postRender"],b5=40;function w5(e,t){let r=!1,n=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=ia.reduce((m,p)=>(m[p]=v5(()=>r=!0),m),{}),a=m=>s[m].process(i),c=()=>{const m=performance.now();r=!1,i.delta=n?1e3/60:Math.max(Math.min(m-i.timestamp,b5),1),i.timestamp=m,i.isProcessing=!0,ia.forEach(a),i.isProcessing=!1,r&&t&&(n=!1,e(c))},d=()=>{r=!0,n=!0,i.isProcessing||e(c)};return{schedule:ia.reduce((m,p)=>{const b=s[p];return m[p]=(v,j=!1,P=!1)=>(r||d(),b.schedule(v,j,P)),m},{}),cancel:m=>ia.forEach(p=>s[p].cancel(m)),state:i,steps:s}}const{schedule:te,cancel:mr,state:Ve,steps:md}=w5(typeof requestAnimationFrame<"u"?requestAnimationFrame:we,!0),$5={useVisualState:yb({scrapeMotionValuesFromProps:gb,createRenderState:hb,onMount:(e,t,{renderState:r,latestValues:n})=>{te.read(()=>{try{r.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}),te.render(()=>{Gm(r,n,{enableHardwareAcceleration:!1},Ym(t.tagName),e.transformTemplate),fb(t,r)})}})},j5={useVisualState:yb({scrapeMotionValuesFromProps:qm,createRenderState:Hm})};function k5(e,{forwardMotionProps:t=!1},r,n){return{...Wm(e)?$5:j5,preloadedFeatures:r,useRender:p5(t),createVisualElement:n,Component:e}}function or(e,t,r,n={passive:!0}){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r)}const vb=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Tc(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const C5=e=>t=>vb(t)&&e(t,Tc(t));function sr(e,t,r,n){return or(e,t,C5(r),n)}const S5=(e,t)=>r=>t(e(r)),Yr=(...e)=>e.reduce(S5);function bb(e){let t=null;return()=>{const r=()=>{t=null};return t===null?(t=e,r):!1}}const eg=bb("dragHorizontal"),tg=bb("dragVertical");function wb(e){let t=!1;if(e==="y")t=tg();else if(e==="x")t=eg();else{const r=eg(),n=tg();r&&n?t=()=>{r(),n()}:(r&&r(),n&&n())}return t}function $b(){const e=wb(!0);return e?(e(),!1):!0}class on{constructor(t){this.isMounted=!1,this.node=t}update(){}}function rg(e,t){const r="pointer"+(t?"enter":"leave"),n="onHover"+(t?"Start":"End"),i=(s,a)=>{if(s.pointerType==="touch"||$b())return;const c=e.getProps();e.animationState&&c.whileHover&&e.animationState.setActive("whileHover",t),c[n]&&te.update(()=>c[n](s,a))};return sr(e.current,r,i,{passive:!e.getProps()[n]})}class P5 extends on{mount(){this.unmount=Yr(rg(this.node,!0),rg(this.node,!1))}unmount(){}}class T5 extends on{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Yr(or(this.node.current,"focus",()=>this.onFocus()),or(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const jb=(e,t)=>t?e===t?!0:jb(e,t.parentElement):!1;function pd(e,t){if(!t)return;const r=new PointerEvent("pointer"+e);t(r,Tc(r))}class A5 extends on{constructor(){super(...arguments),this.removeStartListeners=we,this.removeEndListeners=we,this.removeAccessibleListeners=we,this.startPointerPress=(t,r)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),s=sr(window,"pointerup",(c,d)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:h,globalTapTarget:m}=this.node.getProps();te.update(()=>{!m&&!jb(this.node.current,c.target)?h&&h(c,d):u&&u(c,d)})},{passive:!(n.onTap||n.onPointerUp)}),a=sr(window,"pointercancel",(c,d)=>this.cancelPress(c,d),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=Yr(s,a),this.startPress(t,r)},this.startAccessiblePress=()=>{const t=s=>{if(s.key!=="Enter"||this.isPressing)return;const a=c=>{c.key!=="Enter"||!this.checkPressEnd()||pd("up",(d,u)=>{const{onTap:h}=this.node.getProps();h&&te.update(()=>h(d,u))})};this.removeEndListeners(),this.removeEndListeners=or(this.node.current,"keyup",a),pd("down",(c,d)=>{this.startPress(c,d)})},r=or(this.node.current,"keydown",t),n=()=>{this.isPressing&&pd("cancel",(s,a)=>this.cancelPress(s,a))},i=or(this.node.current,"blur",n);this.removeAccessibleListeners=Yr(r,i)}}startPress(t,r){this.isPressing=!0;const{onTapStart:n,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&te.update(()=>n(t,r))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!$b()}cancelPress(t,r){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&te.update(()=>n(t,r))}mount(){const t=this.node.getProps(),r=sr(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),n=or(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Yr(r,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const xh=new WeakMap,fd=new WeakMap,M5=e=>{const t=xh.get(e.target);t&&t(e)},z5=e=>{e.forEach(M5)};function D5({root:e,...t}){const r=e||document;fd.has(r)||fd.set(r,{});const n=fd.get(r),i=JSON.stringify(t);return n[i]||(n[i]=new IntersectionObserver(z5,{root:e,...t})),n[i]}function E5(e,t,r){const n=D5(t);return xh.set(e,r),n.observe(e),()=>{xh.delete(e),n.unobserve(e)}}const L5={some:0,all:1};class R5 extends on{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:r,margin:n,amount:i="some",once:s}=t,a={root:r?r.current:void 0,rootMargin:n,threshold:typeof i=="number"?i:L5[i]},c=d=>{const{isIntersecting:u}=d;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:h,onViewportLeave:m}=this.node.getProps(),p=u?h:m;p&&p(d)};return E5(this.node.current,a,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:r}=this.node;["amount","margin","root"].some(I5(t,r))&&this.startObserver()}unmount(){}}function I5({viewport:e={}},{viewport:t={}}={}){return r=>e[r]!==t[r]}const F5={inView:{Feature:R5},tap:{Feature:A5},focus:{Feature:T5},hover:{Feature:P5}};function kb(e,t){if(!Array.isArray(t))return!1;const r=t.length;if(r!==e.length)return!1;for(let n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}function N5(e){const t={};return e.values.forEach((r,n)=>t[n]=r.get()),t}function B5(e){const t={};return e.values.forEach((r,n)=>t[n]=r.getVelocity()),t}function Ac(e,t,r){const n=e.getProps();return Qm(n,t,r!==void 0?r:n.custom,N5(e),B5(e))}let Km=we;const Dn=e=>e*1e3,ar=e=>e/1e3,O5={current:!1},Cb=e=>Array.isArray(e)&&typeof e[0]=="number";function Sb(e){return!!(!e||typeof e=="string"&&Pb[e]||Cb(e)||Array.isArray(e)&&e.every(Sb))}const Ri=([e,t,r,n])=>`cubic-bezier(${e}, ${t}, ${r}, ${n})`,Pb={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ri([0,.65,.55,1]),circOut:Ri([.55,0,1,.45]),backIn:Ri([.31,.01,.66,-.59]),backOut:Ri([.33,1.53,.69,.99])};function Tb(e){if(e)return Cb(e)?Ri(e):Array.isArray(e)?e.map(Tb):Pb[e]}function V5(e,t,r,{delay:n=0,duration:i,repeat:s=0,repeatType:a="loop",ease:c,times:d}={}){const u={[t]:r};d&&(u.offset=d);const h=Tb(c);return Array.isArray(h)&&(u.easing=h),e.animate(u,{delay:n,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}function _5(e,{repeat:t,repeatType:r="loop"}){const n=t&&r!=="loop"&&t%2===1?0:e.length-1;return e[n]}const Ab=(e,t,r)=>(((1-3*r+3*t)*e+(3*r-6*t))*e+3*t)*e,W5=1e-7,U5=12;function H5(e,t,r,n,i){let s,a,c=0;do a=t+(r-t)/2,s=Ab(a,n,i)-e,s>0?r=a:t=a;while(Math.abs(s)>W5&&++c<U5);return a}function Fs(e,t,r,n){if(e===t&&r===n)return we;const i=s=>H5(s,0,1,e,r);return s=>s===0||s===1?s:Ab(i(s),t,n)}const G5=Fs(.42,0,1,1),Y5=Fs(0,0,.58,1),Mb=Fs(.42,0,.58,1),q5=e=>Array.isArray(e)&&typeof e[0]!="number",zb=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Db=e=>t=>1-e(1-t),Xm=e=>1-Math.sin(Math.acos(e)),Eb=Db(Xm),Q5=zb(Xm),Lb=Fs(.33,1.53,.69,.99),Jm=Db(Lb),K5=zb(Jm),X5=e=>(e*=2)<1?.5*Jm(e):.5*(2-Math.pow(2,-10*(e-1))),J5={linear:we,easeIn:G5,easeInOut:Mb,easeOut:Y5,circIn:Xm,circInOut:Q5,circOut:Eb,backIn:Jm,backInOut:K5,backOut:Lb,anticipate:X5},ng=e=>{if(Array.isArray(e)){Km(e.length===4);const[t,r,n,i]=e;return Fs(t,r,n,i)}else if(typeof e=="string")return J5[e];return e},Zm=(e,t)=>r=>!!(Rs(r)&&e5.test(r)&&r.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(r,t)),Rb=(e,t,r)=>n=>{if(!Rs(n))return n;const[i,s,a,c]=n.match(Pc);return{[e]:parseFloat(i),[t]:parseFloat(s),[r]:parseFloat(a),alpha:c!==void 0?parseFloat(c):1}},Z5=e=>Xr(0,255,e),gd={...Un,transform:e=>Math.round(Z5(e))},Tn={test:Zm("rgb","red"),parse:Rb("red","green","blue"),transform:({red:e,green:t,blue:r,alpha:n=1})=>"rgba("+gd.transform(e)+", "+gd.transform(t)+", "+gd.transform(r)+", "+Yi(Gi.transform(n))+")"};function eS(e){let t="",r="",n="",i="";return e.length>5?(t=e.substring(1,3),r=e.substring(3,5),n=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),r=e.substring(2,3),n=e.substring(3,4),i=e.substring(4,5),t+=t,r+=r,n+=n,i+=i),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(n,16),alpha:i?parseInt(i,16)/255:1}}const yh={test:Zm("#"),parse:eS,transform:Tn.transform},Po={test:Zm("hsl","hue"),parse:Rb("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:r,alpha:n=1})=>"hsla("+Math.round(e)+", "+Gt.transform(Yi(t))+", "+Gt.transform(Yi(r))+", "+Yi(Gi.transform(n))+")"},Ge={test:e=>Tn.test(e)||yh.test(e)||Po.test(e),parse:e=>Tn.test(e)?Tn.parse(e):Po.test(e)?Po.parse(e):yh.parse(e),transform:e=>Rs(e)?e:e.hasOwnProperty("red")?Tn.transform(e):Po.transform(e)},ue=(e,t,r)=>-r*e+r*t+e;function xd(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function tS({hue:e,saturation:t,lightness:r,alpha:n}){e/=360,t/=100,r/=100;let i=0,s=0,a=0;if(!t)i=s=a=r;else{const c=r<.5?r*(1+t):r+t-r*t,d=2*r-c;i=xd(d,c,e+1/3),s=xd(d,c,e),a=xd(d,c,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:n}}const yd=(e,t,r)=>{const n=e*e;return Math.sqrt(Math.max(0,r*(t*t-n)+n))},rS=[yh,Tn,Po],nS=e=>rS.find(t=>t.test(e));function og(e){const t=nS(e);let r=t.parse(e);return t===Po&&(r=tS(r)),r}const Ib=(e,t)=>{const r=og(e),n=og(t),i={...r};return s=>(i.red=yd(r.red,n.red,s),i.green=yd(r.green,n.green,s),i.blue=yd(r.blue,n.blue,s),i.alpha=ue(r.alpha,n.alpha,s),Tn.transform(i))};function oS(e){var t,r;return isNaN(e)&&Rs(e)&&(((t=e.match(Pc))===null||t===void 0?void 0:t.length)||0)+(((r=e.match(lb))===null||r===void 0?void 0:r.length)||0)>0}const Fb={regex:JC,countKey:"Vars",token:"${v}",parse:we},Nb={regex:lb,countKey:"Colors",token:"${c}",parse:Ge.parse},Bb={regex:Pc,countKey:"Numbers",token:"${n}",parse:Un.parse};function vd(e,{regex:t,countKey:r,token:n,parse:i}){const s=e.tokenised.match(t);s&&(e["num"+r]=s.length,e.tokenised=e.tokenised.replace(t,n),e.values.push(...s.map(i)))}function Bl(e){const t=e.toString(),r={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return r.value.includes("var(--")&&vd(r,Fb),vd(r,Nb),vd(r,Bb),r}function Ob(e){return Bl(e).values}function Vb(e){const{values:t,numColors:r,numVars:n,tokenised:i}=Bl(e),s=t.length;return a=>{let c=i;for(let d=0;d<s;d++)d<n?c=c.replace(Fb.token,a[d]):d<n+r?c=c.replace(Nb.token,Ge.transform(a[d])):c=c.replace(Bb.token,Yi(a[d]));return c}}const iS=e=>typeof e=="number"?0:e;function sS(e){const t=Ob(e);return Vb(e)(t.map(iS))}const Jr={test:oS,parse:Ob,createTransformer:Vb,getAnimatableNone:sS},_b=(e,t)=>r=>`${r>0?t:e}`;function Wb(e,t){return typeof e=="number"?r=>ue(e,t,r):Ge.test(e)?Ib(e,t):e.startsWith("var(")?_b(e,t):Hb(e,t)}const Ub=(e,t)=>{const r=[...e],n=r.length,i=e.map((s,a)=>Wb(s,t[a]));return s=>{for(let a=0;a<n;a++)r[a]=i[a](s);return r}},aS=(e,t)=>{const r={...e,...t},n={};for(const i in r)e[i]!==void 0&&t[i]!==void 0&&(n[i]=Wb(e[i],t[i]));return i=>{for(const s in n)r[s]=n[s](i);return r}},Hb=(e,t)=>{const r=Jr.createTransformer(t),n=Bl(e),i=Bl(t);return n.numVars===i.numVars&&n.numColors===i.numColors&&n.numNumbers>=i.numNumbers?Yr(Ub(n.values,i.values),r):_b(e,t)},$s=(e,t,r)=>{const n=t-e;return n===0?1:(r-e)/n},ig=(e,t)=>r=>ue(e,t,r);function lS(e){return typeof e=="number"?ig:typeof e=="string"?Ge.test(e)?Ib:Hb:Array.isArray(e)?Ub:typeof e=="object"?aS:ig}function cS(e,t,r){const n=[],i=r||lS(e[0]),s=e.length-1;for(let a=0;a<s;a++){let c=i(e[a],e[a+1]);if(t){const d=Array.isArray(t)?t[a]||we:t;c=Yr(d,c)}n.push(c)}return n}function Gb(e,t,{clamp:r=!0,ease:n,mixer:i}={}){const s=e.length;if(Km(s===t.length),s===1)return()=>t[0];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=cS(t,n,i),c=a.length,d=u=>{let h=0;if(c>1)for(;h<e.length-2&&!(u<e[h+1]);h++);const m=$s(e[h],e[h+1],u);return a[h](m)};return r?u=>d(Xr(e[0],e[s-1],u)):d}function dS(e,t){const r=e[e.length-1];for(let n=1;n<=t;n++){const i=$s(0,t,n);e.push(ue(r,1,i))}}function uS(e){const t=[0];return dS(t,e.length-1),t}function hS(e,t){return e.map(r=>r*t)}function mS(e,t){return e.map(()=>t||Mb).splice(0,e.length-1)}function Ol({duration:e=300,keyframes:t,times:r,ease:n="easeInOut"}){const i=q5(n)?n.map(ng):ng(n),s={done:!1,value:t[0]},a=hS(r&&r.length===t.length?r:uS(t),e),c=Gb(a,t,{ease:Array.isArray(i)?i:mS(t,i)});return{calculatedDuration:e,next:d=>(s.value=c(d),s.done=d>=e,s)}}function Yb(e,t){return t?e*(1e3/t):0}const pS=5;function qb(e,t,r){const n=Math.max(t-pS,0);return Yb(r-e(n),t-n)}const sg=.001,fS=.01,gS=10,xS=.05,yS=1;function vS({duration:e=800,bounce:t=.25,velocity:r=0,mass:n=1}){let i,s,a=1-t;a=Xr(xS,yS,a),e=Xr(fS,gS,ar(e)),a<1?(i=u=>{const h=u*a,m=h*e,p=h-r,b=vh(u,a),v=Math.exp(-m);return sg-p/b*v},s=u=>{const m=u*a*e,p=m*r+r,b=Math.pow(a,2)*Math.pow(u,2)*e,v=Math.exp(-m),j=vh(Math.pow(u,2),a);return(-i(u)+sg>0?-1:1)*((p-b)*v)/j}):(i=u=>{const h=Math.exp(-u*e),m=(u-r)*e+1;return-.001+h*m},s=u=>{const h=Math.exp(-u*e),m=(r-u)*(e*e);return h*m});const c=5/e,d=wS(i,s,c);if(e=Dn(e),isNaN(d))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(d,2)*n;return{stiffness:u,damping:a*2*Math.sqrt(n*u),duration:e}}}const bS=12;function wS(e,t,r){let n=r;for(let i=1;i<bS;i++)n=n-e(n)/t(n);return n}function vh(e,t){return e*Math.sqrt(1-t*t)}const $S=["duration","bounce"],jS=["stiffness","damping","mass"];function ag(e,t){return t.some(r=>e[r]!==void 0)}function kS(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!ag(e,jS)&&ag(e,$S)){const r=vS(e);t={...t,...r,mass:1},t.isResolvedFromDuration=!0}return t}function Qb({keyframes:e,restDelta:t,restSpeed:r,...n}){const i=e[0],s=e[e.length-1],a={done:!1,value:i},{stiffness:c,damping:d,mass:u,duration:h,velocity:m,isResolvedFromDuration:p}=kS({...n,velocity:-ar(n.velocity||0)}),b=m||0,v=d/(2*Math.sqrt(c*u)),j=s-i,P=ar(Math.sqrt(c/u)),y=Math.abs(j)<5;r||(r=y?.01:2),t||(t=y?.005:.5);let f;if(v<1){const g=vh(P,v);f=x=>{const C=Math.exp(-v*P*x);return s-C*((b+v*P*j)/g*Math.sin(g*x)+j*Math.cos(g*x))}}else if(v===1)f=g=>s-Math.exp(-P*g)*(j+(b+P*j)*g);else{const g=P*Math.sqrt(v*v-1);f=x=>{const C=Math.exp(-v*P*x),k=Math.min(g*x,300);return s-C*((b+v*P*j)*Math.sinh(k)+g*j*Math.cosh(k))/g}}return{calculatedDuration:p&&h||null,next:g=>{const x=f(g);if(p)a.done=g>=h;else{let C=b;g!==0&&(v<1?C=qb(f,g,x):C=0);const k=Math.abs(C)<=r,S=Math.abs(s-x)<=t;a.done=k&&S}return a.value=a.done?s:x,a}}}function lg({keyframes:e,velocity:t=0,power:r=.8,timeConstant:n=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:a,min:c,max:d,restDelta:u=.5,restSpeed:h}){const m=e[0],p={done:!1,value:m},b=w=>c!==void 0&&w<c||d!==void 0&&w>d,v=w=>c===void 0?d:d===void 0||Math.abs(c-w)<Math.abs(d-w)?c:d;let j=r*t;const P=m+j,y=a===void 0?P:a(P);y!==P&&(j=y-m);const f=w=>-j*Math.exp(-w/n),g=w=>y+f(w),x=w=>{const A=f(w),T=g(w);p.done=Math.abs(A)<=u,p.value=p.done?y:T};let C,k;const S=w=>{b(p.value)&&(C=w,k=Qb({keyframes:[p.value,v(p.value)],velocity:qb(g,w,p.value),damping:i,stiffness:s,restDelta:u,restSpeed:h}))};return S(0),{calculatedDuration:null,next:w=>{let A=!1;return!k&&C===void 0&&(A=!0,x(w),S(w)),C!==void 0&&w>C?k.next(w-C):(!A&&x(w),p)}}}const CS=e=>{const t=({timestamp:r})=>e(r);return{start:()=>te.update(t,!0),stop:()=>mr(t),now:()=>Ve.isProcessing?Ve.timestamp:performance.now()}},cg=2e4;function dg(e){let t=0;const r=50;let n=e.next(t);for(;!n.done&&t<cg;)t+=r,n=e.next(t);return t>=cg?1/0:t}const SS={decay:lg,inertia:lg,tween:Ol,keyframes:Ol,spring:Qb};function Vl({autoplay:e=!0,delay:t=0,driver:r=CS,keyframes:n,type:i="keyframes",repeat:s=0,repeatDelay:a=0,repeatType:c="loop",onPlay:d,onStop:u,onComplete:h,onUpdate:m,...p}){let b=1,v=!1,j,P;const y=()=>{P=new Promise(F=>{j=F})};y();let f;const g=SS[i]||Ol;let x;g!==Ol&&typeof n[0]!="number"&&(x=Gb([0,100],n,{clamp:!1}),n=[0,100]);const C=g({...p,keyframes:n});let k;c==="mirror"&&(k=g({...p,keyframes:[...n].reverse(),velocity:-(p.velocity||0)}));let S="idle",w=null,A=null,T=null;C.calculatedDuration===null&&s&&(C.calculatedDuration=dg(C));const{calculatedDuration:U}=C;let L=1/0,R=1/0;U!==null&&(L=U+a,R=L*(s+1)-a);let V=0;const re=F=>{if(A===null)return;b>0&&(A=Math.min(A,F)),b<0&&(A=Math.min(F-R/b,A)),w!==null?V=w:V=Math.round(F-A)*b;const _=V-t*(b>=0?1:-1),gt=b>=0?_<0:_>R;V=Math.max(_,0),S==="finished"&&w===null&&(V=R);let Ne=V,it=C;if(s){const Je=Math.min(V,R)/L;let St=Math.floor(Je),He=Je%1;!He&&Je>=1&&(He=1),He===1&&St--,St=Math.min(St,s+1),!!(St%2)&&(c==="reverse"?(He=1-He,a&&(He-=a/L)):c==="mirror"&&(it=k)),Ne=Xr(0,1,He)*L}const ge=gt?{done:!1,value:n[0]}:it.next(Ne);x&&(ge.value=x(ge.value));let{done:Ue}=ge;!gt&&U!==null&&(Ue=b>=0?V>=R:V<=0);const Bt=w===null&&(S==="finished"||S==="running"&&Ue);return m&&m(ge.value),Bt&&I(),ge},Q=()=>{f&&f.stop(),f=void 0},ve=()=>{S="idle",Q(),j(),y(),A=T=null},I=()=>{S="finished",h&&h(),Q(),j()},M=()=>{if(v)return;f||(f=r(re));const F=f.now();d&&d(),w!==null?A=F-w:(!A||S==="finished")&&(A=F),S==="finished"&&y(),T=A,w=null,S="running",f.start()};e&&M();const B={then(F,_){return P.then(F,_)},get time(){return ar(V)},set time(F){F=Dn(F),V=F,w!==null||!f||b===0?w=F:A=f.now()-F/b},get duration(){const F=C.calculatedDuration===null?dg(C):C.calculatedDuration;return ar(F)},get speed(){return b},set speed(F){F===b||!f||(b=F,B.time=ar(V))},get state(){return S},play:M,pause:()=>{S="paused",w=V},stop:()=>{v=!0,S!=="idle"&&(S="idle",u&&u(),ve())},cancel:()=>{T!==null&&re(T),ve()},complete:()=>{S="finished"},sample:F=>(A=0,re(F))};return B}function PS(e){let t;return()=>(t===void 0&&(t=e()),t)}const TS=PS(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),AS=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),sa=10,MS=2e4,zS=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Sb(t.ease);function DS(e,t,{onUpdate:r,onComplete:n,...i}){if(!(TS()&&AS.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let a=!1,c,d,u=!1;const h=()=>{d=new Promise(g=>{c=g})};h();let{keyframes:m,duration:p=300,ease:b,times:v}=i;if(zS(t,i)){const g=Vl({...i,repeat:0,delay:0});let x={done:!1,value:m[0]};const C=[];let k=0;for(;!x.done&&k<MS;)x=g.sample(k),C.push(x.value),k+=sa;v=void 0,m=C,p=k-sa,b="linear"}const j=V5(e.owner.current,t,m,{...i,duration:p,ease:b,times:v}),P=()=>{u=!1,j.cancel()},y=()=>{u=!0,te.update(P),c(),h()};return j.onfinish=()=>{u||(e.set(_5(m,i)),n&&n(),y())},{then(g,x){return d.then(g,x)},attachTimeline(g){return j.timeline=g,j.onfinish=null,we},get time(){return ar(j.currentTime||0)},set time(g){j.currentTime=Dn(g)},get speed(){return j.playbackRate},set speed(g){j.playbackRate=g},get duration(){return ar(p)},play:()=>{a||(j.play(),mr(P))},pause:()=>j.pause(),stop:()=>{if(a=!0,j.playState==="idle")return;const{currentTime:g}=j;if(g){const x=Vl({...i,autoplay:!1});e.setWithVelocity(x.sample(g-sa).value,x.sample(g).value,sa)}y()},complete:()=>{u||j.finish()},cancel:y}}function ES({keyframes:e,delay:t,onUpdate:r,onComplete:n}){const i=()=>(r&&r(e[e.length-1]),n&&n(),{time:0,speed:1,duration:0,play:we,pause:we,stop:we,then:s=>(s(),Promise.resolve()),cancel:we,complete:we});return t?Vl({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const LS={type:"spring",stiffness:500,damping:25,restSpeed:10},RS=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),IS={type:"keyframes",duration:.8},FS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},NS=(e,{keyframes:t})=>t.length>2?IS:Wn.has(e)?e.startsWith("scale")?RS(t[1]):LS:FS,bh=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Jr.test(t)||t==="0")&&!t.startsWith("url(")),BS=new Set(["brightness","contrast","saturate","opacity"]);function OS(e){const[t,r]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[n]=r.match(Pc)||[];if(!n)return e;const i=r.replace(n,"");let s=BS.has(t)?1:0;return n!==r&&(s*=100),t+"("+s+i+")"}const VS=/([a-z-]*)\(.*?\)/g,wh={...Jr,getAnimatableNone:e=>{const t=e.match(VS);return t?t.map(OS).join(" "):e}},_S={...cb,color:Ge,backgroundColor:Ge,outlineColor:Ge,fill:Ge,stroke:Ge,borderColor:Ge,borderTopColor:Ge,borderRightColor:Ge,borderBottomColor:Ge,borderLeftColor:Ge,filter:wh,WebkitFilter:wh},ep=e=>_S[e];function Kb(e,t){let r=ep(e);return r!==wh&&(r=Jr),r.getAnimatableNone?r.getAnimatableNone(t):void 0}const Xb=e=>/^0[^.\s]+$/.test(e);function WS(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||Xb(e)}function US(e,t,r,n){const i=bh(t,r);let s;Array.isArray(r)?s=[...r]:s=[null,r];const a=n.from!==void 0?n.from:e.get();let c;const d=[];for(let u=0;u<s.length;u++)s[u]===null&&(s[u]=u===0?a:s[u-1]),WS(s[u])&&d.push(u),typeof s[u]=="string"&&s[u]!=="none"&&s[u]!=="0"&&(c=s[u]);if(i&&d.length&&c)for(let u=0;u<d.length;u++){const h=d[u];s[h]=Kb(t,c)}return s}function HS({when:e,delay:t,delayChildren:r,staggerChildren:n,staggerDirection:i,repeat:s,repeatType:a,repeatDelay:c,from:d,elapsed:u,...h}){return!!Object.keys(h).length}function tp(e,t){return e[t]||e.default||e}const GS={skipAnimations:!1},rp=(e,t,r,n={})=>i=>{const s=tp(n,e)||{},a=s.delay||n.delay||0;let{elapsed:c=0}=n;c=c-Dn(a);const d=US(t,e,r,s),u=d[0],h=d[d.length-1],m=bh(e,u),p=bh(e,h);let b={keyframes:d,velocity:t.getVelocity(),ease:"easeOut",...s,delay:-c,onUpdate:v=>{t.set(v),s.onUpdate&&s.onUpdate(v)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if(HS(s)||(b={...b,...NS(e,b)}),b.duration&&(b.duration=Dn(b.duration)),b.repeatDelay&&(b.repeatDelay=Dn(b.repeatDelay)),!m||!p||O5.current||s.type===!1||GS.skipAnimations)return ES(b);if(!n.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=DS(t,e,b);if(v)return v}return Vl(b)};function _l(e){return!!(ot(e)&&e.add)}const Jb=e=>/^\-?\d*\.?\d+$/.test(e);function np(e,t){e.indexOf(t)===-1&&e.push(t)}function op(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}class ip{constructor(){this.subscriptions=[]}add(t){return np(this.subscriptions,t),()=>op(this.subscriptions,t)}notify(t,r,n){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,r,n);else for(let s=0;s<i;s++){const a=this.subscriptions[s];a&&a(t,r,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const YS=e=>!isNaN(parseFloat(e));class qS{constructor(t,r={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(n,i=!0)=>{this.prev=this.current,this.current=n;const{delta:s,timestamp:a}=Ve;this.lastUpdated!==a&&(this.timeDelta=s,this.lastUpdated=a,te.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>te.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{n!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=YS(this.current),this.owner=r.owner}onChange(t){return this.on("change",t)}on(t,r){this.events[t]||(this.events[t]=new ip);const n=this.events[t].add(r);return t==="change"?()=>{n(),te.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,r){this.passiveEffect=t,this.stopPassiveEffect=r}set(t,r=!0){!r||!this.passiveEffect?this.updateAndNotify(t,r):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,r,n){this.set(r),this.prev=t,this.timeDelta=n}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Yb(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=t(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Qo(e,t){return new qS(e,t)}const Zb=e=>t=>t.test(e),QS={test:e=>e==="auto",parse:e=>e},ew=[Un,W,Gt,Tr,r5,t5,QS],fi=e=>ew.find(Zb(e)),KS=[...ew,Ge,Jr],XS=e=>KS.find(Zb(e));function JS(e,t,r){e.hasValue(t)?e.getValue(t).set(r):e.addValue(t,Qo(r))}function ZS(e,t){const r=Ac(e,t);let{transitionEnd:n={},transition:i={},...s}=r?e.makeTargetAnimatable(r,!1):{};s={...s,...n};for(const a in s){const c=g5(s[a]);JS(e,a,c)}}function e4(e,t,r){var n,i;const s=Object.keys(t).filter(c=>!e.hasValue(c)),a=s.length;if(a)for(let c=0;c<a;c++){const d=s[c],u=t[d];let h=null;Array.isArray(u)&&(h=u[0]),h===null&&(h=(i=(n=r[d])!==null&&n!==void 0?n:e.readValue(d))!==null&&i!==void 0?i:t[d]),h!=null&&(typeof h=="string"&&(Jb(h)||Xb(h))?h=parseFloat(h):!XS(h)&&Jr.test(u)&&(h=Kb(d,u)),e.addValue(d,Qo(h,{owner:e})),r[d]===void 0&&(r[d]=h),h!==null&&e.setBaseTarget(d,h))}}function t4(e,t){return t?(t[e]||t.default||t).from:void 0}function r4(e,t,r){const n={};for(const i in e){const s=t4(i,t);if(s!==void 0)n[i]=s;else{const a=r.getValue(i);a&&(n[i]=a.get())}}return n}function n4({protectedKeys:e,needsAnimating:t},r){const n=e.hasOwnProperty(r)&&t[r]!==!0;return t[r]=!1,n}function o4(e,t){const r=e.get();if(Array.isArray(t)){for(let n=0;n<t.length;n++)if(t[n]!==r)return!0}else return r!==t}function tw(e,t,{delay:r=0,transitionOverride:n,type:i}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:a,...c}=e.makeTargetAnimatable(t);const d=e.getValue("willChange");n&&(s=n);const u=[],h=i&&e.animationState&&e.animationState.getState()[i];for(const m in c){const p=e.getValue(m),b=c[m];if(!p||b===void 0||h&&n4(h,m))continue;const v={delay:r,elapsed:0,...tp(s||{},m)};if(window.HandoffAppearAnimations){const y=e.getProps()[rb];if(y){const f=window.HandoffAppearAnimations(y,m,p,te);f!==null&&(v.elapsed=f,v.isHandoff=!0)}}let j=!v.isHandoff&&!o4(p,b);if(v.type==="spring"&&(p.getVelocity()||v.velocity)&&(j=!1),p.animation&&(j=!1),j)continue;p.start(rp(m,p,b,e.shouldReduceMotion&&Wn.has(m)?{type:!1}:v));const P=p.animation;_l(d)&&(d.add(m),P.then(()=>d.remove(m))),u.push(P)}return a&&Promise.all(u).then(()=>{a&&ZS(e,a)}),u}function $h(e,t,r={}){const n=Ac(e,t,r.custom);let{transition:i=e.getDefaultTransition()||{}}=n||{};r.transitionOverride&&(i=r.transitionOverride);const s=n?()=>Promise.all(tw(e,n,r)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:u=0,staggerChildren:h,staggerDirection:m}=i;return i4(e,t,u+d,h,m,r)}:()=>Promise.resolve(),{when:c}=i;if(c){const[d,u]=c==="beforeChildren"?[s,a]:[a,s];return d().then(()=>u())}else return Promise.all([s(),a(r.delay)])}function i4(e,t,r=0,n=0,i=1,s){const a=[],c=(e.variantChildren.size-1)*n,d=i===1?(u=0)=>u*n:(u=0)=>c-u*n;return Array.from(e.variantChildren).sort(s4).forEach((u,h)=>{u.notify("AnimationStart",t),a.push($h(u,t,{...s,delay:r+d(h)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function s4(e,t){return e.sortNodePosition(t)}function a4(e,t,r={}){e.notify("AnimationStart",t);let n;if(Array.isArray(t)){const i=t.map(s=>$h(e,s,r));n=Promise.all(i)}else if(typeof t=="string")n=$h(e,t,r);else{const i=typeof t=="function"?Ac(e,t,r.custom):t;n=Promise.all(tw(e,i,r))}return n.then(()=>e.notify("AnimationComplete",t))}const l4=[...Om].reverse(),c4=Om.length;function d4(e){return t=>Promise.all(t.map(({animation:r,options:n})=>a4(e,r,n)))}function u4(e){let t=d4(e);const r=m4();let n=!0;const i=(d,u)=>{const h=Ac(e,u);if(h){const{transition:m,transitionEnd:p,...b}=h;d={...d,...b,...p}}return d};function s(d){t=d(e)}function a(d,u){const h=e.getProps(),m=e.getVariantContext(!0)||{},p=[],b=new Set;let v={},j=1/0;for(let y=0;y<c4;y++){const f=l4[y],g=r[f],x=h[f]!==void 0?h[f]:m[f],C=bs(x),k=f===u?g.isActive:null;k===!1&&(j=y);let S=x===m[f]&&x!==h[f]&&C;if(S&&n&&e.manuallyAnimateOnMount&&(S=!1),g.protectedKeys={...v},!g.isActive&&k===null||!x&&!g.prevProp||Cc(x)||typeof x=="boolean")continue;let A=h4(g.prevProp,x)||f===u&&g.isActive&&!S&&C||y>j&&C,T=!1;const U=Array.isArray(x)?x:[x];let L=U.reduce(i,{});k===!1&&(L={});const{prevResolvedValues:R={}}=g,V={...R,...L},re=Q=>{A=!0,b.has(Q)&&(T=!0,b.delete(Q)),g.needsAnimating[Q]=!0};for(const Q in V){const ve=L[Q],I=R[Q];if(v.hasOwnProperty(Q))continue;let M=!1;Nl(ve)&&Nl(I)?M=!kb(ve,I):M=ve!==I,M?ve!==void 0?re(Q):b.add(Q):ve!==void 0&&b.has(Q)?re(Q):g.protectedKeys[Q]=!0}g.prevProp=x,g.prevResolvedValues=L,g.isActive&&(v={...v,...L}),n&&e.blockInitialAnimation&&(A=!1),A&&(!S||T)&&p.push(...U.map(Q=>({animation:Q,options:{type:f,...d}})))}if(b.size){const y={};b.forEach(f=>{const g=e.getBaseTarget(f);g!==void 0&&(y[f]=g)}),p.push({animation:y})}let P=!!p.length;return n&&(h.initial===!1||h.initial===h.animate)&&!e.manuallyAnimateOnMount&&(P=!1),n=!1,P?t(p):Promise.resolve()}function c(d,u,h){var m;if(r[d].isActive===u)return Promise.resolve();(m=e.variantChildren)===null||m===void 0||m.forEach(b=>{var v;return(v=b.animationState)===null||v===void 0?void 0:v.setActive(d,u)}),r[d].isActive=u;const p=a(h,d);for(const b in r)r[b].protectedKeys={};return p}return{animateChanges:a,setActive:c,setAnimateFunction:s,getState:()=>r}}function h4(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!kb(t,e):!1}function sn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function m4(){return{animate:sn(!0),whileInView:sn(),whileHover:sn(),whileTap:sn(),whileDrag:sn(),whileFocus:sn(),exit:sn()}}class p4 extends on{constructor(t){super(t),t.animationState||(t.animationState=u4(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Cc(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:r}=this.node.prevProps||{};t!==r&&this.updateAnimationControlsSubscription()}unmount(){}}let f4=0;class g4 extends on{constructor(){super(...arguments),this.id=f4++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:r,custom:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const s=this.node.animationState.setActive("exit",!t,{custom:n??this.node.getProps().custom});r&&!t&&s.then(()=>r(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const x4={animation:{Feature:p4},exit:{Feature:g4}},ug=(e,t)=>Math.abs(e-t);function y4(e,t){const r=ug(e.x,t.x),n=ug(e.y,t.y);return Math.sqrt(r**2+n**2)}class rw{constructor(t,r,{transformPagePoint:n,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=wd(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,b=y4(m.offset,{x:0,y:0})>=3;if(!p&&!b)return;const{point:v}=m,{timestamp:j}=Ve;this.history.push({...v,timestamp:j});const{onStart:P,onMove:y}=this.handlers;p||(P&&P(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,m)},this.handlePointerMove=(m,p)=>{this.lastMoveEvent=m,this.lastMoveEventInfo=bd(p,this.transformPagePoint),te.update(this.updatePoint,!0)},this.handlePointerUp=(m,p)=>{this.end();const{onEnd:b,onSessionEnd:v,resumeAnimation:j}=this.handlers;if(this.dragSnapToOrigin&&j&&j(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const P=wd(m.type==="pointercancel"?this.lastMoveEventInfo:bd(p,this.transformPagePoint),this.history);this.startEvent&&b&&b(m,P),v&&v(m,P)},!vb(t))return;this.dragSnapToOrigin=s,this.handlers=r,this.transformPagePoint=n,this.contextWindow=i||window;const a=Tc(t),c=bd(a,this.transformPagePoint),{point:d}=c,{timestamp:u}=Ve;this.history=[{...d,timestamp:u}];const{onSessionStart:h}=r;h&&h(t,wd(c,this.history)),this.removeListeners=Yr(sr(this.contextWindow,"pointermove",this.handlePointerMove),sr(this.contextWindow,"pointerup",this.handlePointerUp),sr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),mr(this.updatePoint)}}function bd(e,t){return t?{point:t(e.point)}:e}function hg(e,t){return{x:e.x-t.x,y:e.y-t.y}}function wd({point:e},t){return{point:e,delta:hg(e,nw(t)),offset:hg(e,v4(t)),velocity:b4(t,.1)}}function v4(e){return e[0]}function nw(e){return e[e.length-1]}function b4(e,t){if(e.length<2)return{x:0,y:0};let r=e.length-1,n=null;const i=nw(e);for(;r>=0&&(n=e[r],!(i.timestamp-n.timestamp>Dn(t)));)r--;if(!n)return{x:0,y:0};const s=ar(i.timestamp-n.timestamp);if(s===0)return{x:0,y:0};const a={x:(i.x-n.x)/s,y:(i.y-n.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function ht(e){return e.max-e.min}function jh(e,t=0,r=.01){return Math.abs(e-t)<=r}function mg(e,t,r,n=.5){e.origin=n,e.originPoint=ue(t.min,t.max,e.origin),e.scale=ht(r)/ht(t),(jh(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=ue(r.min,r.max,e.origin)-e.originPoint,(jh(e.translate)||isNaN(e.translate))&&(e.translate=0)}function qi(e,t,r,n){mg(e.x,t.x,r.x,n?n.originX:void 0),mg(e.y,t.y,r.y,n?n.originY:void 0)}function pg(e,t,r){e.min=r.min+t.min,e.max=e.min+ht(t)}function w4(e,t,r){pg(e.x,t.x,r.x),pg(e.y,t.y,r.y)}function fg(e,t,r){e.min=t.min-r.min,e.max=e.min+ht(t)}function Qi(e,t,r){fg(e.x,t.x,r.x),fg(e.y,t.y,r.y)}function $4(e,{min:t,max:r},n){return t!==void 0&&e<t?e=n?ue(t,e,n.min):Math.max(e,t):r!==void 0&&e>r&&(e=n?ue(r,e,n.max):Math.min(e,r)),e}function gg(e,t,r){return{min:t!==void 0?e.min+t:void 0,max:r!==void 0?e.max+r-(e.max-e.min):void 0}}function j4(e,{top:t,left:r,bottom:n,right:i}){return{x:gg(e.x,r,i),y:gg(e.y,t,n)}}function xg(e,t){let r=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([r,n]=[n,r]),{min:r,max:n}}function k4(e,t){return{x:xg(e.x,t.x),y:xg(e.y,t.y)}}function C4(e,t){let r=.5;const n=ht(e),i=ht(t);return i>n?r=$s(t.min,t.max-n,e.min):n>i&&(r=$s(e.min,e.max-i,t.min)),Xr(0,1,r)}function S4(e,t){const r={};return t.min!==void 0&&(r.min=t.min-e.min),t.max!==void 0&&(r.max=t.max-e.min),r}const kh=.35;function P4(e=kh){return e===!1?e=0:e===!0&&(e=kh),{x:yg(e,"left","right"),y:yg(e,"top","bottom")}}function yg(e,t,r){return{min:vg(e,t),max:vg(e,r)}}function vg(e,t){return typeof e=="number"?e:e[t]||0}const bg=()=>({translate:0,scale:1,origin:0,originPoint:0}),To=()=>({x:bg(),y:bg()}),wg=()=>({min:0,max:0}),$e=()=>({x:wg(),y:wg()});function yt(e){return[e("x"),e("y")]}function ow({top:e,left:t,right:r,bottom:n}){return{x:{min:t,max:r},y:{min:e,max:n}}}function T4({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function A4(e,t){if(!t)return e;const r=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:n.y,right:n.x}}function $d(e){return e===void 0||e===1}function Ch({scale:e,scaleX:t,scaleY:r}){return!$d(e)||!$d(t)||!$d(r)}function bn(e){return Ch(e)||iw(e)||e.z||e.rotate||e.rotateX||e.rotateY}function iw(e){return $g(e.x)||$g(e.y)}function $g(e){return e&&e!=="0%"}function Wl(e,t,r){const n=e-r,i=t*n;return r+i}function jg(e,t,r,n,i){return i!==void 0&&(e=Wl(e,i,n)),Wl(e,r,n)+t}function Sh(e,t=0,r=1,n,i){e.min=jg(e.min,t,r,n,i),e.max=jg(e.max,t,r,n,i)}function sw(e,{x:t,y:r}){Sh(e.x,t.translate,t.scale,t.originPoint),Sh(e.y,r.translate,r.scale,r.originPoint)}function M4(e,t,r,n=!1){const i=r.length;if(!i)return;t.x=t.y=1;let s,a;for(let c=0;c<i;c++){s=r[c],a=s.projectionDelta;const d=s.instance;d&&d.style&&d.style.display==="contents"||(n&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Ao(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,sw(e,a)),n&&bn(s.latestValues)&&Ao(e,s.latestValues))}t.x=kg(t.x),t.y=kg(t.y)}function kg(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function zr(e,t){e.min=e.min+t,e.max=e.max+t}function Cg(e,t,[r,n,i]){const s=t[i]!==void 0?t[i]:.5,a=ue(e.min,e.max,s);Sh(e,t[r],t[n],a,t.scale)}const z4=["x","scaleX","originX"],D4=["y","scaleY","originY"];function Ao(e,t){Cg(e.x,t,z4),Cg(e.y,t,D4)}function aw(e,t){return ow(A4(e.getBoundingClientRect(),t))}function E4(e,t,r){const n=aw(e,r),{scroll:i}=t;return i&&(zr(n.x,i.offset.x),zr(n.y,i.offset.y)),n}const lw=({current:e})=>e?e.ownerDocument.defaultView:null,L4=new WeakMap;class R4{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=$e(),this.visualElement=t}start(t,{snapToCursor:r=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const i=h=>{const{dragSnapToOrigin:m}=this.getProps();m?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(Tc(h,"page").point)},s=(h,m)=>{const{drag:p,dragPropagation:b,onDragStart:v}=this.getProps();if(p&&!b&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=wb(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),yt(P=>{let y=this.getAxisMotionValue(P).get()||0;if(Gt.test(y)){const{projection:f}=this.visualElement;if(f&&f.layout){const g=f.layout.layoutBox[P];g&&(y=ht(g)*(parseFloat(y)/100))}}this.originPoint[P]=y}),v&&te.update(()=>v(h,m),!1,!0);const{animationState:j}=this.visualElement;j&&j.setActive("whileDrag",!0)},a=(h,m)=>{const{dragPropagation:p,dragDirectionLock:b,onDirectionLock:v,onDrag:j}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:P}=m;if(b&&this.currentDirection===null){this.currentDirection=I4(P),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",m.point,P),this.updateAxis("y",m.point,P),this.visualElement.render(),j&&j(h,m)},c=(h,m)=>this.stop(h,m),d=()=>yt(h=>{var m;return this.getAnimationState(h)==="paused"&&((m=this.getAxisMotionValue(h).animation)===null||m===void 0?void 0:m.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new rw(t,{onSessionStart:i,onStart:s,onMove:a,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:lw(this.visualElement)})}stop(t,r){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:i}=r;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&te.update(()=>s(t,r))}cancel(){this.isDragging=!1;const{projection:t,animationState:r}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(t,r,n){const{drag:i}=this.getProps();if(!n||!aa(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let a=this.originPoint[t]+n[t];this.constraints&&this.constraints[t]&&(a=$4(a,this.constraints[t],this.elastic[t])),s.set(a)}resolveConstraints(){var t;const{dragConstraints:r,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;r&&So(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&i?this.constraints=j4(i.layoutBox,r):this.constraints=!1,this.elastic=P4(n),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&yt(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=S4(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!So(t))return!1;const n=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=E4(n,i.root,this.visualElement.getTransformPagePoint());let a=k4(i.layout.layoutBox,s);if(r){const c=r(T4(a));this.hasMutatedConstraints=!!c,c&&(a=ow(c))}return a}startAnimation(t){const{drag:r,dragMomentum:n,dragElastic:i,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},u=yt(h=>{if(!aa(h,r,this.currentDirection))return;let m=d&&d[h]||{};a&&(m={min:0,max:0});const p=i?200:1e6,b=i?40:1e7,v={type:"inertia",velocity:n?t[h]:0,bounceStiffness:p,bounceDamping:b,timeConstant:750,restDelta:1,restSpeed:10,...s,...m};return this.startAxisValueAnimation(h,v)});return Promise.all(u).then(c)}startAxisValueAnimation(t,r){const n=this.getAxisMotionValue(t);return n.start(rp(t,n,0,r))}stopAnimation(){yt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){yt(t=>{var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(t){var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(t){const r="_drag"+t.toUpperCase(),n=this.visualElement.getProps(),i=n[r];return i||this.visualElement.getValue(t,(n.initial?n.initial[t]:void 0)||0)}snapToCursor(t){yt(r=>{const{drag:n}=this.getProps();if(!aa(r,n,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(r);if(i&&i.layout){const{min:a,max:c}=i.layout.layoutBox[r];s.set(t[r]-ue(a,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:r}=this.getProps(),{projection:n}=this.visualElement;if(!So(r)||!n||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};yt(a=>{const c=this.getAxisMotionValue(a);if(c){const d=c.get();i[a]=C4({min:d,max:d},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),yt(a=>{if(!aa(a,t,null))return;const c=this.getAxisMotionValue(a),{min:d,max:u}=this.constraints[a];c.set(ue(d,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;L4.set(this.visualElement,this);const t=this.visualElement.current,r=sr(t,"pointerdown",d=>{const{drag:u,dragListener:h=!0}=this.getProps();u&&h&&this.start(d)}),n=()=>{const{dragConstraints:d}=this.getProps();So(d)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",n);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),n();const a=or(window,"resize",()=>this.scalePositionWithinConstraints()),c=i.addEventListener("didUpdate",({delta:d,hasLayoutChanged:u})=>{this.isDragging&&u&&(yt(h=>{const m=this.getAxisMotionValue(h);m&&(this.originPoint[h]+=d[h].translate,m.set(m.get()+d[h].translate))}),this.visualElement.render())});return()=>{a(),r(),s(),c&&c()}}getProps(){const t=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:n=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:a=kh,dragMomentum:c=!0}=t;return{...t,drag:r,dragDirectionLock:n,dragPropagation:i,dragConstraints:s,dragElastic:a,dragMomentum:c}}}function aa(e,t,r){return(t===!0||t===e)&&(r===null||r===e)}function I4(e,t=10){let r=null;return Math.abs(e.y)>t?r="y":Math.abs(e.x)>t&&(r="x"),r}class F4 extends on{constructor(t){super(t),this.removeGroupControls=we,this.removeListeners=we,this.controls=new R4(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||we}unmount(){this.removeGroupControls(),this.removeListeners()}}const Sg=e=>(t,r)=>{e&&te.update(()=>e(t,r))};class N4 extends on{constructor(){super(...arguments),this.removePointerDownListener=we}onPointerDown(t){this.session=new rw(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:lw(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:r,onPan:n,onPanEnd:i}=this.node.getProps();return{onSessionStart:Sg(t),onStart:Sg(r),onMove:n,onEnd:(s,a)=>{delete this.session,i&&te.update(()=>i(s,a))}}}mount(){this.removePointerDownListener=sr(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function B4(){const e=$.useContext(jc);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:n}=e,i=$.useId();return $.useEffect(()=>n(i),[]),!t&&r?[!1,()=>r&&r(i)]:[!0]}const nl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Pg(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const gi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(W.test(e))e=parseFloat(e);else return e;const r=Pg(e,t.target.x),n=Pg(e,t.target.y);return`${r}% ${n}%`}},O4={correct:(e,{treeScale:t,projectionDelta:r})=>{const n=e,i=Jr.parse(e);if(i.length>5)return n;const s=Jr.createTransformer(e),a=typeof i[0]!="number"?1:0,c=r.x.scale*t.x,d=r.y.scale*t.y;i[0+a]/=c,i[1+a]/=d;const u=ue(c,d,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),s(i)}};class V4 extends le.Component{componentDidMount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:n,layoutId:i}=this.props,{projection:s}=t;qC(_4),s&&(r.group&&r.group.add(s),n&&n.register&&i&&n.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),nl.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:r,visualElement:n,drag:i,isPresent:s}=this.props,a=n.projection;return a&&(a.isPresent=s,i||t.layoutDependency!==r||r===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?a.promote():a.relegate()||te.postRender(()=>{const c=a.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:n}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(i),n&&n.deregister&&n.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function cw(e){const[t,r]=B4(),n=$.useContext(_m);return le.createElement(V4,{...e,layoutGroup:n,switchLayoutGroup:$.useContext(ob),isPresent:t,safeToRemove:r})}const _4={borderRadius:{...gi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:gi,borderTopRightRadius:gi,borderBottomLeftRadius:gi,borderBottomRightRadius:gi,boxShadow:O4},dw=["TopLeft","TopRight","BottomLeft","BottomRight"],W4=dw.length,Tg=e=>typeof e=="string"?parseFloat(e):e,Ag=e=>typeof e=="number"||W.test(e);function U4(e,t,r,n,i,s){i?(e.opacity=ue(0,r.opacity!==void 0?r.opacity:1,H4(n)),e.opacityExit=ue(t.opacity!==void 0?t.opacity:1,0,G4(n))):s&&(e.opacity=ue(t.opacity!==void 0?t.opacity:1,r.opacity!==void 0?r.opacity:1,n));for(let a=0;a<W4;a++){const c=`border${dw[a]}Radius`;let d=Mg(t,c),u=Mg(r,c);if(d===void 0&&u===void 0)continue;d||(d=0),u||(u=0),d===0||u===0||Ag(d)===Ag(u)?(e[c]=Math.max(ue(Tg(d),Tg(u),n),0),(Gt.test(u)||Gt.test(d))&&(e[c]+="%")):e[c]=u}(t.rotate||r.rotate)&&(e.rotate=ue(t.rotate||0,r.rotate||0,n))}function Mg(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const H4=uw(0,.5,Eb),G4=uw(.5,.95,we);function uw(e,t,r){return n=>n<e?0:n>t?1:r($s(e,t,n))}function zg(e,t){e.min=t.min,e.max=t.max}function xt(e,t){zg(e.x,t.x),zg(e.y,t.y)}function Dg(e,t,r,n,i){return e-=t,e=Wl(e,1/r,n),i!==void 0&&(e=Wl(e,1/i,n)),e}function Y4(e,t=0,r=1,n=.5,i,s=e,a=e){if(Gt.test(t)&&(t=parseFloat(t),t=ue(a.min,a.max,t/100)-a.min),typeof t!="number")return;let c=ue(s.min,s.max,n);e===s&&(c-=t),e.min=Dg(e.min,t,r,c,i),e.max=Dg(e.max,t,r,c,i)}function Eg(e,t,[r,n,i],s,a){Y4(e,t[r],t[n],t[i],t.scale,s,a)}const q4=["x","scaleX","originX"],Q4=["y","scaleY","originY"];function Lg(e,t,r,n){Eg(e.x,t,q4,r?r.x:void 0,n?n.x:void 0),Eg(e.y,t,Q4,r?r.y:void 0,n?n.y:void 0)}function Rg(e){return e.translate===0&&e.scale===1}function hw(e){return Rg(e.x)&&Rg(e.y)}function K4(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function mw(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Ig(e){return ht(e.x)/ht(e.y)}class X4{constructor(){this.members=[]}add(t){np(this.members,t),t.scheduleRender()}remove(t){if(op(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(t){const r=this.members.findIndex(i=>t===i);if(r===0)return!1;let n;for(let i=r;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){n=s;break}}return n?(this.promote(n),!0):!1}promote(t,r){const n=this.lead;if(t!==n&&(this.prevLead=n,this.lead=t,t.show(),n)){n.instance&&n.scheduleRender(),t.scheduleRender(),t.resumeFrom=n,r&&(t.resumeFrom.preserveOpacity=!0),n.snapshot&&(t.snapshot=n.snapshot,t.snapshot.latestValues=n.animationValues||n.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:r,resumingFrom:n}=t;r.onExitComplete&&r.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Fg(e,t,r){let n="";const i=e.x.translate/t.x,s=e.y.translate/t.y;if((i||s)&&(n=`translate3d(${i}px, ${s}px, 0) `),(t.x!==1||t.y!==1)&&(n+=`scale(${1/t.x}, ${1/t.y}) `),r){const{rotate:d,rotateX:u,rotateY:h}=r;d&&(n+=`rotate(${d}deg) `),u&&(n+=`rotateX(${u}deg) `),h&&(n+=`rotateY(${h}deg) `)}const a=e.x.scale*t.x,c=e.y.scale*t.y;return(a!==1||c!==1)&&(n+=`scale(${a}, ${c})`),n||"none"}const J4=(e,t)=>e.depth-t.depth;class Z4{constructor(){this.children=[],this.isDirty=!1}add(t){np(this.children,t),this.isDirty=!0}remove(t){op(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(J4),this.isDirty=!1,this.children.forEach(t)}}function e3(e,t){const r=performance.now(),n=({timestamp:i})=>{const s=i-r;s>=t&&(mr(n),e(s-t))};return te.read(n,!0),()=>mr(n)}function t3(e){window.MotionDebug&&window.MotionDebug.record(e)}function r3(e){return e instanceof SVGElement&&e.tagName!=="svg"}function n3(e,t,r){const n=ot(e)?e:Qo(e);return n.start(rp("",n,t,r)),n.animation}const Ng=["","X","Y","Z"],o3={visibility:"hidden"},Bg=1e3;let i3=0;const wn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function pw({attachResizeListener:e,defaultParent:t,measureScroll:r,checkIsScrollRoot:n,resetTransform:i}){return class{constructor(a={},c=t==null?void 0:t()){this.id=i3++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,wn.totalNodes=wn.resolvedTargetDeltas=wn.recalculatedProjection=0,this.nodes.forEach(l3),this.nodes.forEach(m3),this.nodes.forEach(p3),this.nodes.forEach(c3),t3(wn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new Z4)}addEventListener(a,c){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new ip),this.eventHandlers.get(a).add(c)}notifyListeners(a,...c){const d=this.eventHandlers.get(a);d&&d.notify(...c)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=r3(a),this.instance=a;const{layoutId:d,layout:u,visualElement:h}=this.options;if(h&&!h.current&&h.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(u||d)&&(this.isLayoutDirty=!0),e){let m;const p=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,m&&m(),m=e3(p,250),nl.hasAnimatedSinceResize&&(nl.hasAnimatedSinceResize=!1,this.nodes.forEach(Vg))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&h&&(d||u)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:p,hasRelativeTargetChanged:b,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const j=this.options.transition||h.getDefaultTransition()||v3,{onLayoutAnimationStart:P,onLayoutAnimationComplete:y}=h.getProps(),f=!this.targetLayout||!mw(this.targetLayout,v)||b,g=!p&&b;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||p&&(f||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(m,g);const x={...tp(j,"layout"),onPlay:P,onComplete:y};(h.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x)}else p||Vg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,mr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(f3),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const m=this.path[h];m.shouldResetTransform=!0,m.updateScroll("snapshot"),m.options.layoutRoot&&m.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Og);return}this.isUpdating||this.nodes.forEach(u3),this.isUpdating=!1,this.nodes.forEach(h3),this.nodes.forEach(s3),this.nodes.forEach(a3),this.clearAllSnapshots();const c=performance.now();Ve.delta=Xr(0,1e3/60,c-Ve.timestamp),Ve.timestamp=c,Ve.isProcessing=!0,md.update.process(Ve),md.preRender.process(Ve),md.render.process(Ve),Ve.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(d3),this.sharedNodes.forEach(g3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,te.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){te.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=$e(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let c=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(c=!1),c&&(this.scroll={animationId:this.root.animationId,phase:a,isRoot:n(this.instance),offset:r(this.instance)})}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform,c=this.projectionDelta&&!hw(this.projectionDelta),d=this.getTransformTemplate(),u=d?d(this.latestValues,""):void 0,h=u!==this.prevTransformTemplateValue;a&&(c||bn(this.latestValues)||h)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return a&&(d=this.removeTransform(d)),b3(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:a}=this.options;if(!a)return $e();const c=a.measureViewportBox(),{scroll:d}=this.root;return d&&(zr(c.x,d.offset.x),zr(c.y,d.offset.y)),c}removeElementScroll(a){const c=$e();xt(c,a);for(let d=0;d<this.path.length;d++){const u=this.path[d],{scroll:h,options:m}=u;if(u!==this.root&&h&&m.layoutScroll){if(h.isRoot){xt(c,a);const{scroll:p}=this.root;p&&(zr(c.x,-p.offset.x),zr(c.y,-p.offset.y))}zr(c.x,h.offset.x),zr(c.y,h.offset.y)}}return c}applyTransform(a,c=!1){const d=$e();xt(d,a);for(let u=0;u<this.path.length;u++){const h=this.path[u];!c&&h.options.layoutScroll&&h.scroll&&h!==h.root&&Ao(d,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),bn(h.latestValues)&&Ao(d,h.latestValues)}return bn(this.latestValues)&&Ao(d,this.latestValues),d}removeTransform(a){const c=$e();xt(c,a);for(let d=0;d<this.path.length;d++){const u=this.path[d];if(!u.instance||!bn(u.latestValues))continue;Ch(u.latestValues)&&u.updateSnapshot();const h=$e(),m=u.measurePageBox();xt(h,m),Lg(c,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,h)}return bn(this.latestValues)&&Lg(c,this.latestValues),c}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ve.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var c;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==d;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:m,layoutId:p}=this.options;if(!(!this.layout||!(m||p))){if(this.resolvedRelativeTargetAt=Ve.timestamp,!this.targetDelta&&!this.relativeTarget){const b=this.getClosestProjectingParent();b&&b.layout&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$e(),this.relativeTargetOrigin=$e(),Qi(this.relativeTargetOrigin,this.layout.layoutBox,b.layout.layoutBox),xt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=$e(),this.targetWithTransforms=$e()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),w4(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):xt(this.target,this.layout.layoutBox),sw(this.target,this.targetDelta)):xt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const b=this.getClosestProjectingParent();b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$e(),this.relativeTargetOrigin=$e(),Qi(this.relativeTargetOrigin,this.target,b.target),xt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}wn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ch(this.parent.latestValues)||iw(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const c=this.getLead(),d=!!this.resumingFrom||this!==c;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Ve.timestamp&&(u=!1),u)return;const{layout:h,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||m))return;xt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,b=this.treeScale.y;M4(this.layoutCorrected,this.treeScale,this.path,d),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox);const{target:v}=c;if(!v){this.projectionTransform&&(this.projectionDelta=To(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=To(),this.projectionDeltaWithTransform=To());const j=this.projectionTransform;qi(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=Fg(this.projectionDelta,this.treeScale),(this.projectionTransform!==j||this.treeScale.x!==p||this.treeScale.y!==b)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),wn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),a){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(a,c=!1){const d=this.snapshot,u=d?d.latestValues:{},h={...this.latestValues},m=To();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const p=$e(),b=d?d.source:void 0,v=this.layout?this.layout.source:void 0,j=b!==v,P=this.getStack(),y=!P||P.members.length<=1,f=!!(j&&!y&&this.options.crossfade===!0&&!this.path.some(y3));this.animationProgress=0;let g;this.mixTargetDelta=x=>{const C=x/1e3;_g(m.x,a.x,C),_g(m.y,a.y,C),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Qi(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),x3(this.relativeTarget,this.relativeTargetOrigin,p,C),g&&K4(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=$e()),xt(g,this.relativeTarget)),j&&(this.animationValues=h,U4(h,u,this.latestValues,C,f,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(mr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=te.update(()=>{nl.hasAnimatedSinceResize=!0,this.currentAnimation=n3(0,Bg,{...a,onUpdate:c=>{this.mixTargetDelta(c),a.onUpdate&&a.onUpdate(c)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Bg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:c,target:d,layout:u,latestValues:h}=a;if(!(!c||!d||!u)){if(this!==a&&this.layout&&u&&fw(this.options.animationType,this.layout.layoutBox,u.layoutBox)){d=this.target||$e();const m=ht(this.layout.layoutBox.x);d.x.min=a.target.x.min,d.x.max=d.x.min+m;const p=ht(this.layout.layoutBox.y);d.y.min=a.target.y.min,d.y.max=d.y.min+p}xt(c,d),Ao(c,h),qi(this.projectionDeltaWithTransform,this.layoutCorrected,c,h)}}registerSharedNode(a,c){this.sharedNodes.has(a)||this.sharedNodes.set(a,new X4),this.sharedNodes.get(a).add(c);const u=c.options.initialPromotionConfig;c.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(c):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:c}=this.options;return c?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:c}=this.options;return c?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:c,preserveFollowOpacity:d}={}){const u=this.getStack();u&&u.promote(this,d),a&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetRotation(){const{visualElement:a}=this.options;if(!a)return;let c=!1;const{latestValues:d}=a;if((d.rotate||d.rotateX||d.rotateY||d.rotateZ)&&(c=!0),!c)return;const u={};for(let h=0;h<Ng.length;h++){const m="rotate"+Ng[h];d[m]&&(u[m]=d[m],a.setStaticValue(m,0))}a.render();for(const h in u)a.setStaticValue(h,u[h]);a.scheduleRender()}getProjectionStyles(a){var c,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return o3;const u={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=rl(a==null?void 0:a.pointerEvents)||"",u.transform=h?h(this.latestValues,""):"none",u;const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){const j={};return this.options.layoutId&&(j.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,j.pointerEvents=rl(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!bn(this.latestValues)&&(j.transform=h?h({},""):"none",this.hasProjected=!1),j}const p=m.animationValues||m.latestValues;this.applyTransformsToTarget(),u.transform=Fg(this.projectionDeltaWithTransform,this.treeScale,p),h&&(u.transform=h(p,u.transform));const{x:b,y:v}=this.projectionDelta;u.transformOrigin=`${b.origin*100}% ${v.origin*100}% 0`,m.animationValues?u.opacity=m===this?(d=(c=p.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=m===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const j in Il){if(p[j]===void 0)continue;const{correct:P,applyTo:y}=Il[j],f=u.transform==="none"?p[j]:P(p[j],m);if(y){const g=y.length;for(let x=0;x<g;x++)u[y[x]]=f}else u[j]=f}return this.options.layoutId&&(u.pointerEvents=m===this?rl(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var c;return(c=a.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(Og),this.root.sharedNodes.clear()}}}function s3(e){e.updateLayout()}function a3(e){var t;const r=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&r&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:i}=e.layout,{animationType:s}=e.options,a=r.source!==e.layout.source;s==="size"?yt(m=>{const p=a?r.measuredBox[m]:r.layoutBox[m],b=ht(p);p.min=n[m].min,p.max=p.min+b}):fw(s,r.layoutBox,n)&&yt(m=>{const p=a?r.measuredBox[m]:r.layoutBox[m],b=ht(n[m]);p.max=p.min+b,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[m].max=e.relativeTarget[m].min+b)});const c=To();qi(c,n,r.layoutBox);const d=To();a?qi(d,e.applyTransform(i,!0),r.measuredBox):qi(d,n,r.layoutBox);const u=!hw(c);let h=!1;if(!e.resumeFrom){const m=e.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:p,layout:b}=m;if(p&&b){const v=$e();Qi(v,r.layoutBox,p.layoutBox);const j=$e();Qi(j,n,b.layoutBox),mw(v,j)||(h=!0),m.options.layoutRoot&&(e.relativeTarget=j,e.relativeTargetOrigin=v,e.relativeParent=m)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:r,delta:d,layoutDelta:c,hasLayoutChanged:u,hasRelativeTargetChanged:h})}else if(e.isLead()){const{onExitComplete:n}=e.options;n&&n()}e.options.transition=void 0}function l3(e){wn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function c3(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function d3(e){e.clearSnapshot()}function Og(e){e.clearMeasurements()}function u3(e){e.isLayoutDirty=!1}function h3(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Vg(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function m3(e){e.resolveTargetDelta()}function p3(e){e.calcProjection()}function f3(e){e.resetRotation()}function g3(e){e.removeLeadSnapshot()}function _g(e,t,r){e.translate=ue(t.translate,0,r),e.scale=ue(t.scale,1,r),e.origin=t.origin,e.originPoint=t.originPoint}function Wg(e,t,r,n){e.min=ue(t.min,r.min,n),e.max=ue(t.max,r.max,n)}function x3(e,t,r,n){Wg(e.x,t.x,r.x,n),Wg(e.y,t.y,r.y,n)}function y3(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const v3={duration:.45,ease:[.4,0,.1,1]},Ug=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),Hg=Ug("applewebkit/")&&!Ug("chrome/")?Math.round:we;function Gg(e){e.min=Hg(e.min),e.max=Hg(e.max)}function b3(e){Gg(e.x),Gg(e.y)}function fw(e,t,r){return e==="position"||e==="preserve-aspect"&&!jh(Ig(t),Ig(r),.2)}const w3=pw({attachResizeListener:(e,t)=>or(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),jd={current:void 0},gw=pw({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!jd.current){const e=new w3({});e.mount(window),e.setOptions({layoutScroll:!0}),jd.current=e}return jd.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),$3={pan:{Feature:N4},drag:{Feature:F4,ProjectionNode:gw,MeasureLayout:cw}},j3=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function k3(e){const t=j3.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]}function Ph(e,t,r=1){const[n,i]=k3(e);if(!n)return;const s=window.getComputedStyle(t).getPropertyValue(n);if(s){const a=s.trim();return Jb(a)?parseFloat(a):a}else return gh(i)?Ph(i,t,r+1):i}function C3(e,{...t},r){const n=e.current;if(!(n instanceof Element))return{target:t,transitionEnd:r};r&&(r={...r}),e.values.forEach(i=>{const s=i.get();if(!gh(s))return;const a=Ph(s,n);a&&i.set(a)});for(const i in t){const s=t[i];if(!gh(s))continue;const a=Ph(s,n);a&&(t[i]=a,r||(r={}),r[i]===void 0&&(r[i]=s))}return{target:t,transitionEnd:r}}const S3=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),xw=e=>S3.has(e),P3=e=>Object.keys(e).some(xw),Yg=e=>e===Un||e===W,qg=(e,t)=>parseFloat(e.split(", ")[t]),Qg=(e,t)=>(r,{transform:n})=>{if(n==="none"||!n)return 0;const i=n.match(/^matrix3d\((.+)\)$/);if(i)return qg(i[1],t);{const s=n.match(/^matrix\((.+)\)$/);return s?qg(s[1],e):0}},T3=new Set(["x","y","z"]),A3=Ls.filter(e=>!T3.has(e));function M3(e){const t=[];return A3.forEach(r=>{const n=e.getValue(r);n!==void 0&&(t.push([r,n.get()]),n.set(r.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Ko={width:({x:e},{paddingLeft:t="0",paddingRight:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),height:({y:e},{paddingTop:t="0",paddingBottom:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Qg(4,13),y:Qg(5,14)};Ko.translateX=Ko.x;Ko.translateY=Ko.y;const z3=(e,t,r)=>{const n=t.measureViewportBox(),i=t.current,s=getComputedStyle(i),{display:a}=s,c={};a==="none"&&t.setStaticValue("display",e.display||"block"),r.forEach(u=>{c[u]=Ko[u](n,s)}),t.render();const d=t.measureViewportBox();return r.forEach(u=>{const h=t.getValue(u);h&&h.jump(c[u]),e[u]=Ko[u](d,s)}),e},D3=(e,t,r={},n={})=>{t={...t},n={...n};const i=Object.keys(t).filter(xw);let s=[],a=!1;const c=[];if(i.forEach(d=>{const u=e.getValue(d);if(!e.hasValue(d))return;let h=r[d],m=fi(h);const p=t[d];let b;if(Nl(p)){const v=p.length,j=p[0]===null?1:0;h=p[j],m=fi(h);for(let P=j;P<v&&p[P]!==null;P++)b?Km(fi(p[P])===b):b=fi(p[P])}else b=fi(p);if(m!==b)if(Yg(m)&&Yg(b)){const v=u.get();typeof v=="string"&&u.set(parseFloat(v)),typeof p=="string"?t[d]=parseFloat(p):Array.isArray(p)&&b===W&&(t[d]=p.map(parseFloat))}else m!=null&&m.transform&&(b!=null&&b.transform)&&(h===0||p===0)?h===0?u.set(b.transform(h)):t[d]=m.transform(p):(a||(s=M3(e),a=!0),c.push(d),n[d]=n[d]!==void 0?n[d]:t[d],u.jump(p))}),c.length){const d=c.indexOf("height")>=0?window.pageYOffset:null,u=z3(t,e,c);return s.length&&s.forEach(([h,m])=>{e.getValue(h).set(m)}),e.render(),kc&&d!==null&&window.scrollTo({top:d}),{target:u,transitionEnd:n}}else return{target:t,transitionEnd:n}};function E3(e,t,r,n){return P3(t)?D3(e,t,r,n):{target:t,transitionEnd:n}}const L3=(e,t,r,n)=>{const i=C3(e,t,n);return t=i.target,n=i.transitionEnd,E3(e,t,r,n)},Th={current:null},yw={current:!1};function R3(){if(yw.current=!0,!!kc)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Th.current=e.matches;e.addListener(t),t()}else Th.current=!1}function I3(e,t,r){const{willChange:n}=t;for(const i in t){const s=t[i],a=r[i];if(ot(s))e.addValue(i,s),_l(n)&&n.add(i);else if(ot(a))e.addValue(i,Qo(s,{owner:e})),_l(n)&&n.remove(i);else if(a!==s)if(e.hasValue(i)){const c=e.getValue(i);!c.hasAnimated&&c.set(s)}else{const c=e.getStaticValue(i);e.addValue(i,Qo(c!==void 0?c:s,{owner:e}))}}for(const i in r)t[i]===void 0&&e.removeValue(i);return t}const Kg=new WeakMap,vw=Object.keys(ws),F3=vw.length,Xg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],N3=Vm.length;class B3{constructor({parent:t,props:r,presenceContext:n,reducedMotionConfig:i,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>te.render(this.render,!1,!0);const{latestValues:c,renderState:d}=s;this.latestValues=c,this.baseTarget={...c},this.initialValues=r.initial?{...c}:{},this.renderState=d,this.parent=t,this.props=r,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.isControllingVariants=Sc(r),this.isVariantNode=nb(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...h}=this.scrapeMotionValuesFromProps(r,{});for(const m in h){const p=h[m];c[m]!==void 0&&ot(p)&&(p.set(c[m],!1),_l(u)&&u.add(m))}}scrapeMotionValuesFromProps(t,r){return{}}mount(t){this.current=t,Kg.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,n)=>this.bindToMotionValue(n,r)),yw.current||R3(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Th.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Kg.delete(this.current),this.projection&&this.projection.unmount(),mr(this.notifyUpdate),mr(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,r){const n=Wn.has(t),i=r.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&te.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)}),s=r.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),s()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...r},n,i,s){let a,c;for(let d=0;d<F3;d++){const u=vw[d],{isEnabled:h,Feature:m,ProjectionNode:p,MeasureLayout:b}=ws[u];p&&(a=p),h(r)&&(!this.features[u]&&m&&(this.features[u]=new m(this)),b&&(c=b))}if((this.type==="html"||this.type==="svg")&&!this.projection&&a){this.projection=new a(this.latestValues,this.parent&&this.parent.projection);const{layoutId:d,layout:u,drag:h,dragConstraints:m,layoutScroll:p,layoutRoot:b}=r;this.projection.setOptions({layoutId:d,layout:u,alwaysMeasureLayout:!!h||m&&So(m),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,layoutScroll:p,layoutRoot:b})}return c}updateFeatures(){for(const t in this.features){const r=this.features[t];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):$e()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,r){this.latestValues[t]=r}makeTargetAnimatable(t,r=!0){return this.makeTargetAnimatableFromInstance(t,this.props,r)}update(t,r){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let n=0;n<Xg.length;n++){const i=Xg[n];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s=t["on"+i];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=I3(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const n=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(n.initial=this.props.initial),n}const r={};for(let n=0;n<N3;n++){const i=Vm[n],s=this.props[i];(bs(s)||s===!1)&&(r[i]=s)}return r}addVariantChild(t){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(t),()=>r.variantChildren.delete(t)}addValue(t,r){r!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,r)),this.values.set(t,r),this.latestValues[t]=r.get()}removeValue(t){this.values.delete(t);const r=this.valueSubscriptions.get(t);r&&(r(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,r){if(this.props.values&&this.props.values[t])return this.props.values[t];let n=this.values.get(t);return n===void 0&&r!==void 0&&(n=Qo(r,{owner:this}),this.addValue(t,n)),n}readValue(t){var r;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,r){this.baseTarget[t]=r}getBaseTarget(t){var r;const{initial:n}=this.props,i=typeof n=="string"||typeof n=="object"?(r=Qm(this.props,n))===null||r===void 0?void 0:r[t]:void 0;if(n&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!ot(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,r){return this.events[t]||(this.events[t]=new ip),this.events[t].add(r)}notify(t,...r){this.events[t]&&this.events[t].notify(...r)}}class bw extends B3{sortInstanceNodePosition(t,r){return t.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(t,r){return t.style?t.style[r]:void 0}removeValueFromRenderState(t,{vars:r,style:n}){delete r[t],delete n[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:r,...n},{transformValues:i},s){let a=r4(n,t||{},this);if(i&&(r&&(r=i(r)),n&&(n=i(n)),a&&(a=i(a))),s){e4(this,n,a);const c=L3(this,n,a,r);r=c.transitionEnd,n=c.target}return{transition:t,transitionEnd:r,...n}}}function O3(e){return window.getComputedStyle(e)}class V3 extends bw{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,r){if(Wn.has(r)){const n=ep(r);return n&&n.default||0}else{const n=O3(t),i=(ab(r)?n.getPropertyValue(r):n[r])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:r}){return aw(t,r)}build(t,r,n,i){Um(t,r,n,i.transformTemplate)}scrapeMotionValuesFromProps(t,r){return qm(t,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;ot(t)&&(this.childSubscription=t.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}renderInstance(t,r,n,i){mb(t,r,n,i)}}class _3 extends bw{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,r){return t[r]}readValueFromInstance(t,r){if(Wn.has(r)){const n=ep(r);return n&&n.default||0}return r=pb.has(r)?r:Bm(r),t.getAttribute(r)}measureInstanceViewportBox(){return $e()}scrapeMotionValuesFromProps(t,r){return gb(t,r)}build(t,r,n,i){Gm(t,r,n,this.isSVGTag,i.transformTemplate)}renderInstance(t,r,n,i){fb(t,r,n,i)}mount(t){this.isSVGTag=Ym(t.tagName),super.mount(t)}}const W3=(e,t)=>Wm(e)?new _3(t,{enableHardwareAcceleration:!1}):new V3(t,{enableHardwareAcceleration:!0}),U3={layout:{ProjectionNode:gw,MeasureLayout:cw}},H3={...x4,...F5,...$3,...U3},D=GC((e,t)=>k5(e,t,H3,W3));function ww(){const e=$.useRef(!1);return Nm(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function G3(){const e=ww(),[t,r]=$.useState(0),n=$.useCallback(()=>{e.current&&r(t+1)},[t]);return[$.useCallback(()=>te.postRender(n),[n]),t]}class Y3 extends $.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=r.offsetHeight||0,n.width=r.offsetWidth||0,n.top=r.offsetTop,n.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function q3({children:e,isPresent:t}){const r=$.useId(),n=$.useRef(null),i=$.useRef({width:0,height:0,top:0,left:0});return $.useInsertionEffect(()=>{const{width:s,height:a,top:c,left:d}=i.current;if(t||!n.current||!s||!a)return;n.current.dataset.motionPopId=r;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${c}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),$.createElement(Y3,{isPresent:t,childRef:n,sizeRef:i},$.cloneElement(e,{ref:n}))}const kd=({children:e,initial:t,isPresent:r,onExitComplete:n,custom:i,presenceAffectsLayout:s,mode:a})=>{const c=xb(Q3),d=$.useId(),u=$.useMemo(()=>({id:d,initial:t,isPresent:r,custom:i,onExitComplete:h=>{c.set(h,!0);for(const m of c.values())if(!m)return;n&&n()},register:h=>(c.set(h,!1),()=>c.delete(h))}),s?void 0:[r]);return $.useMemo(()=>{c.forEach((h,m)=>c.set(m,!1))},[r]),$.useEffect(()=>{!r&&!c.size&&n&&n()},[r]),a==="popLayout"&&(e=$.createElement(q3,{isPresent:r},e)),$.createElement(jc.Provider,{value:u},e)};function Q3(){return new Map}function K3(e){return $.useEffect(()=>()=>e(),[])}const $n=e=>e.key||"";function X3(e,t){e.forEach(r=>{const n=$n(r);t.set(n,r)})}function J3(e){const t=[];return $.Children.forEach(e,r=>{$.isValidElement(r)&&t.push(r)}),t}const he=({children:e,custom:t,initial:r=!0,onExitComplete:n,exitBeforeEnter:i,presenceAffectsLayout:s=!0,mode:a="sync"})=>{const c=$.useContext(_m).forceRender||G3()[0],d=ww(),u=J3(e);let h=u;const m=$.useRef(new Map).current,p=$.useRef(h),b=$.useRef(new Map).current,v=$.useRef(!0);if(Nm(()=>{v.current=!1,X3(u,b),p.current=h}),K3(()=>{v.current=!0,b.clear(),m.clear()}),v.current)return $.createElement($.Fragment,null,h.map(f=>$.createElement(kd,{key:$n(f),isPresent:!0,initial:r?void 0:!1,presenceAffectsLayout:s,mode:a},f)));h=[...h];const j=p.current.map($n),P=u.map($n),y=j.length;for(let f=0;f<y;f++){const g=j[f];P.indexOf(g)===-1&&!m.has(g)&&m.set(g,void 0)}return a==="wait"&&m.size&&(h=[]),m.forEach((f,g)=>{if(P.indexOf(g)!==-1)return;const x=b.get(g);if(!x)return;const C=j.indexOf(g);let k=f;if(!k){const S=()=>{m.delete(g);const w=Array.from(b.keys()).filter(A=>!P.includes(A));if(w.forEach(A=>b.delete(A)),p.current=u.filter(A=>{const T=$n(A);return T===g||w.includes(T)}),!m.size){if(d.current===!1)return;c(),n&&n()}};k=$.createElement(kd,{key:$n(x),isPresent:!1,onExitComplete:S,custom:t,presenceAffectsLayout:s,mode:a},x),m.set(g,k)}h.splice(C,0,k)}),h=h.map(f=>{const g=f.key;return m.has(g)?f:$.createElement(kd,{key:$n(f),isPresent:!0,presenceAffectsLayout:s,mode:a},f)}),$.createElement($.Fragment,null,m.size?h:h.map(f=>$.cloneElement(f)))};var $w={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Jg=le.createContext&&le.createContext($w),qr=function(){return qr=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},qr.apply(this,arguments)},Z3=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};function jw(e){return e&&e.map(function(t,r){return le.createElement(t.tag,qr({key:r},t.attr),jw(t.child))})}function N(e){return function(t){return le.createElement(e6,qr({attr:qr({},e.attr)},t),jw(e.child))}}function e6(e){var t=function(r){var n=e.attr,i=e.size,s=e.title,a=Z3(e,["attr","size","title"]),c=i||r.size||"1em",d;return r.className&&(d=r.className),e.className&&(d=(d?d+" ":"")+e.className),le.createElement("svg",qr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,a,{className:d,style:qr(qr({color:e.color||r.color},r.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&le.createElement("title",null,s),e.children)};return Jg!==void 0?le.createElement(Jg.Consumer,null,function(r){return t(r)}):t($w)}function js(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"}}]})(e)}function t6(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"}},{tag:"polyline",attr:{points:"12 19 5 12 12 5"}}]})(e)}function r6(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}},{tag:"polyline",attr:{points:"12 5 19 12 12 19"}}]})(e)}function n6(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"}},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"}}]})(e)}function sp(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"}},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"}},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"}}]})(e)}function ks(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"}}]})(e)}function Le(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}},{tag:"path",attr:{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}}]})(e)}function kw(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}}]})(e)}function Ae(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}function Zr(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"}}]})(e)}function ap(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 11 12 14 22 4"}},{tag:"path",attr:{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"}}]})(e)}function Ul(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"}}]})(e)}function de(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(e)}function qt(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"}}]})(e)}function Yt(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(e)}function o6(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(e)}function Xo(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}},{tag:"rect",attr:{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"}}]})(e)}function Qe(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(e)}function i6(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"}},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"}},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"}},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"}},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"}},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"}},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"}},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"}},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"}},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"}}]})(e)}function Ah(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"}},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}}]})(e)}function Hn(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{points:"7 10 12 15 17 10"}},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"}}]})(e)}function Cs(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}}]})(e)}function pr(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attr:{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}}]})(e)}function lp(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}}]})(e)}function Qt(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}},{tag:"polyline",attr:{points:"14 2 14 8 20 8"}},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"}},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"}},{tag:"polyline",attr:{points:"10 9 9 9 8 9"}}]})(e)}function Mh(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}},{tag:"polyline",attr:{points:"13 2 13 9 20 9"}}]})(e)}function Nt(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}}]})(e)}function s6(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"}},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"}}]})(e)}function a6(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"}},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"}},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"}},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"}}]})(e)}function l6(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"}}]})(e)}function Hl(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"}}]})(e)}function c6(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"}},{tag:"polyline",attr:{points:"21 15 16 10 5 21"}}]})(e)}function On(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"}}]})(e)}function Cw(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"}},{tag:"polyline",attr:{points:"2 17 12 22 22 17"}},{tag:"polyline",attr:{points:"2 12 12 17 22 12"}}]})(e)}function d6(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"}}]})(e)}function Ss(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"}}]})(e)}function u6(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}},{tag:"polyline",attr:{points:"16 17 21 12 16 7"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"}}]})(e)}function Gl(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(e)}function Io(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"}}]})(e)}function cp(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function Mc(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}}]})(e)}function Zg(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"}},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"}}]})(e)}function h6(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"}},{tag:"circle",attr:{cx:"19",cy:"12",r:"1"}},{tag:"circle",attr:{cx:"5",cy:"12",r:"1"}}]})(e)}function Ns(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"}},{tag:"circle",attr:{cx:"12",cy:"5",r:"1"}},{tag:"circle",attr:{cx:"12",cy:"19",r:"1"}}]})(e)}function dp(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"}}]})(e)}function m6(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(e)}function p6(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}},{tag:"path",attr:{d:"M22 12A10 10 0 0 0 12 2v10z"}}]})(e)}function e0(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"}}]})(e)}function fr(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"}},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}}]})(e)}function Ki(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"}},{tag:"polyline",attr:{points:"1 20 1 14 7 14"}},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"}}]})(e)}function zh(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}},{tag:"polyline",attr:{points:"17 21 17 13 7 13 7 21"}},{tag:"polyline",attr:{points:"7 3 7 8 15 8"}}]})(e)}function Se(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(e)}function Sw(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"}},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"}}]})(e)}function Jo(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}}]})(e)}function Pw(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"}},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"}},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"}},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"}}]})(e)}function Zo(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}}]})(e)}function t0(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"}},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"}},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"}},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"}},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"}},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"}},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"}},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"}}]})(e)}function Tw(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"path",attr:{d:"M8 14s1.5 2 4 2 4-2 4-2"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"9.01",y2:"9"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"15.01",y2:"9"}}]})(e)}function r0(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}}]})(e)}function f6(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"5",width:"22",height:"14",rx:"7",ry:"7"}},{tag:"circle",attr:{cx:"8",cy:"12",r:"3"}}]})(e)}function It(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(e)}function g6(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{points:"17 8 12 3 7 8"}},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"}}]})(e)}function x6(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"}},{tag:"polyline",attr:{points:"17 11 19 13 23 9"}}]})(e)}function y6(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"}},{tag:"line",attr:{x1:"20",y1:"8",x2:"20",y2:"14"}},{tag:"line",attr:{x1:"23",y1:"11",x2:"17",y2:"11"}}]})(e)}function v6(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"}},{tag:"line",attr:{x1:"18",y1:"8",x2:"23",y2:"13"}},{tag:"line",attr:{x1:"23",y1:"8",x2:"18",y2:"13"}}]})(e)}function dt(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"}}]})(e)}function Ce(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"}}]})(e)}function up(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"23 7 16 12 23 17 23 7"}},{tag:"rect",attr:{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"}}]})(e)}function zc(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"}}]})(e)}function Ft(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}const Aw=$.createContext(null),Xt=()=>{const e=$.useContext(Aw);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},b6=({children:e})=>{const[t,r]=$.useState(null),n=Es();$.useEffect(()=>{const u=localStorage.getItem("lms_user");if(u)try{const h=JSON.parse(u);console.log("Loaded user from localStorage:",h),r(h)}catch(h){console.error("Failed to parse saved user",h),localStorage.removeItem("lms_user")}},[]);const i=(u,h,m)=>u===m&&h==="123456",s=(u,h,m)=>{if(console.log("Attempting login:",{username:u,role:m}),i(u,h,m)){const p=m==="admin"?"Admin User":m==="teacher"?"Teacher User":"Student User",b=`${m}@example.com`,v={username:u,role:m,fullName:p,email:b};return r(v),localStorage.setItem("lms_user",JSON.stringify(v)),console.log("Login successful, user set:",v),!0}return console.log("Login failed: Invalid credentials"),!1},a=()=>{console.log("Logout function called in AuthContext");try{r(null),console.log("User state cleared"),localStorage.removeItem("lms_user"),console.log("User removed from localStorage"),console.log("Navigating to login page"),n("/login"),console.log("Navigation completed")}catch(u){console.error("Error during logout process:",u)}},c=u=>{if(!t)return;const h={...t,...u};return h.role=t.role,r(h),localStorage.setItem("lms_user",JSON.stringify(h)),console.log("Profile updated:",h),!0},d=(u,h)=>u==="123456"?(console.log("Password updated successfully"),!0):(console.log("Password update failed: incorrect current password"),!1);return o.jsx(Aw.Provider,{value:{user:t,isAuthenticated:!!t,login:s,logout:a,updateProfile:c,updatePassword:d},children:e})},Dc=({variant:e="primary",size:t="medium",showIcon:r=!0,showText:n=!0,text:i="Logout",className:s})=>{const{logout:a}=Xt(),c=d=>{d.preventDefault(),d.stopPropagation(),console.log("LogoutButton: Logout triggered"),a()};return o.jsxs(w6,{$variant:e,$size:t,onClick:c,className:s,"data-testid":"logout-button",children:[r&&o.jsx(u6,{}),n&&o.jsx("span",{children:i})]})},w6=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  
  /* Size variations */
  padding: ${e=>{switch(e.$size){case"small":return"6px 12px";case"large":return"12px 24px";default:return"8px 16px"}}};
  
  font-size: ${e=>{switch(e.$size){case"small":return"0.75rem";case"large":return"1rem";default:return"0.875rem"}}};
  
  /* Variant styling */
  background-color: ${e=>{switch(e.$variant){case"primary":return e.theme.colors.primary[500];case"secondary":return"transparent";case"danger":return e.theme.colors.danger[500];default:return e.theme.colors.primary[500]}}};
  
  color: ${e=>{switch(e.$variant){case"primary":return"white";case"secondary":return e.theme.colors.text.primary;case"danger":return"white";default:return"white"}}};
  
  border: ${e=>e.$variant==="secondary"?`1px solid ${e.theme.colors.border.light}`:"none"};
  
  &:hover {
    background-color: ${e=>{switch(e.$variant){case"primary":return e.theme.colors.primary[600];case"secondary":return e.theme.colors.background.hover;case"danger":return e.theme.colors.danger[600];default:return e.theme.colors.primary[600]}}};
    
    border-color: ${e=>e.$variant==="secondary"?e.theme.colors.border.dark:"none"};
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  svg {
    width: ${e=>e.$size==="small"?"14px":e.$size==="large"?"20px":"16px"};
    height: ${e=>e.$size==="small"?"14px":e.$size==="large"?"20px":"16px"};
  }
`,Cd=({icon:e,label:t,to:r,isCollapsed:n})=>{const i=Kt(),s=i.pathname===r||i.pathname.startsWith(`${r}/`);return o.jsxs(E6,{to:r,$isActive:s,$isCollapsed:n,children:[o.jsx(L6,{children:e}),o.jsx(he,{children:!n&&o.jsx(R6,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},transition:{duration:.2},children:t})}),s&&o.jsx(I6,{layoutId:"activeIndicator",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}})]})},$6=({isCollapsed:e,toggleSidebar:t,onMobileToggle:r})=>{const[n,i]=$.useState(!1),[s,a]=$.useState(!1),{user:c}=Xt();$.useEffect(()=>{const j=()=>{i(window.innerWidth<1024)};return j(),window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[]);const d=()=>{const j=!s;a(j),r&&r(j)},u=()=>{if(!c||!c.username)return"U";if(c.fullName){const j=c.fullName.split(" ");return j.length===1?j[0].charAt(0).toUpperCase():(j[0].charAt(0)+j[j.length-1].charAt(0)).toUpperCase()}return c.username.charAt(0).toUpperCase()},h=()=>(c==null?void 0:c.fullName)||(c==null?void 0:c.username)||"User",p=(()=>{const j=localStorage.getItem("lms_user");if(j)try{return JSON.parse(j).role||"student"}catch(P){return console.error("Error parsing user info:",P),"student"}return(c==null?void 0:c.role)||"student"})();console.log("Detected user role:",p);const b=[{path:"/admin/dashboard",icon:o.jsx(Hl,{}),label:"Dashboard"},{path:"/admin/users",icon:o.jsx(Ce,{}),label:"User Management"},{path:"/admin/roles",icon:o.jsx(Zo,{}),label:"Role Management"},{path:"/admin/subjects",icon:o.jsx(Le,{}),label:"Subjects"},{path:"/admin/classes",icon:o.jsx(Cw,{}),label:"Classes"},{path:"/admin/timetables",icon:o.jsx(Ae,{}),label:"Timetables"},{path:"/admin/settings",icon:o.jsx(Jo,{}),label:"Settings"},{path:"/admin/profile",icon:o.jsx(dt,{}),label:"Profile"}],v=[{path:"/teacher/dashboard",icon:o.jsx(Hl,{}),label:"Dashboard"},{path:"/teacher/students",icon:o.jsx(Ce,{}),label:"Students"},{path:"/teacher/schedule",icon:o.jsx(Ae,{}),label:"Schedule"},{path:"/teacher/profile",icon:o.jsx(dt,{}),label:"Profile"}];return o.jsxs(o.Fragment,{children:[n&&o.jsx(S6,{onClick:d,children:s?o.jsx(Ft,{}):o.jsx(cp,{})}),o.jsx(he,{children:(n?s:!0)&&o.jsxs(j6,{$isCollapsed:n?!1:e,$isMobile:n,as:D.aside,initial:{x:n?-300:0},animate:{x:0},exit:{x:n?-300:0},transition:{duration:.3,ease:"easeInOut"},children:[o.jsxs(P6,{$isCollapsed:n?!1:e,children:[e&&!n?o.jsx(A6,{children:"LMS"}):o.jsx(T6,{children:o.jsx(D.span,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},children:"Learning Management System"})}),n?o.jsx(M6,{onClick:d,children:o.jsx(Ft,{})}):o.jsx(Mw,{onClick:t,children:e?o.jsx(Yt,{}):o.jsx(qt,{})})]}),o.jsxs(z6,{children:[o.jsxs(n0,{children:[p==="admin"&&o.jsx(o.Fragment,{children:b.map(j=>o.jsx(Cd,{icon:j.icon,label:j.label,to:j.path,isCollapsed:n?!1:e},j.path))}),p==="teacher"&&o.jsx(o.Fragment,{children:v.map(j=>o.jsx(Cd,{icon:j.icon,label:j.label,to:j.path,isCollapsed:n?!1:e},j.path))})]}),o.jsxs(n0,{children:[o.jsx(he,{children:(!e||n)&&o.jsx(D6,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2},children:"System"})}),o.jsx(Cd,{icon:o.jsx(Jo,{}),label:"Settings",to:`/${p}/settings`,isCollapsed:n?!1:e})]})]}),o.jsxs(F6,{$isCollapsed:n?!1:e,children:[o.jsx(N6,{children:u()}),o.jsx(he,{children:(!e||n)&&o.jsxs(B6,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[o.jsx(O6,{children:h()}),o.jsx(V6,{children:p==="admin"?"Admin":p==="teacher"?"Teacher":"Student"})]})}),o.jsx(_6,{variant:"secondary",size:"small",showText:!1})]}),n&&o.jsx(k6,{onClick:d})]})}),o.jsx(he,{children:n&&s&&o.jsx(C6,{as:D.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:d})})]})},j6=l(D.aside)`
  height: 100%;
  background: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.primary};
  box-shadow: ${e=>e.theme.shadows.lg};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${e=>e.theme.zIndices.modal};
  
  width: ${({$isCollapsed:e,$isMobile:t})=>t?"300px":e?"80px":"280px"};
  transition: width ${e=>e.theme.transition.normal} ease;
`,k6=l.div`
  display: none;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`,C6=l(D.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${e=>e.theme.zIndices.overlay};
`,S6=l.button`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  border-radius: ${e=>e.theme.borderRadius.full};
  background: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: ${e=>e.theme.spacing[5]};
  z-index: ${e=>e.theme.zIndices.sticky};
  box-shadow: ${e=>e.theme.shadows.md};
  
  &:hover {
    background: ${e=>e.theme.colors.background.tertiary};
  }
  
  @media (min-width: ${e=>e.theme.breakpoints.lg}) {
    display: none;
  }
`,P6=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>e.$isCollapsed?"0 0.5rem":"0 1rem"};
  height: 60px;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    padding: 0 1rem;
  }
`,T6=l.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.primary[600]};
  white-space: nowrap;
`,A6=l.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${e=>e.theme.colors.primary[600]};
`,Mw=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background-color: ${e=>e.theme.colors.background.tertiary};
  color: ${e=>e.theme.colors.primary[600]};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  margin-left: 0.5rem;
  position: absolute;
  right: 10px;
  z-index: 10;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[100]};
    color: ${e=>e.theme.colors.primary[700]};
  }
`,M6=l(Mw)`
  color: ${e=>e.theme.colors.text.secondary};
  
  &:hover {
    color: ${e=>e.theme.colors.accent.red};
  }
`,z6=l.div`
  flex: 1;
  overflow-y: auto;
  padding: ${e=>e.theme.spacing[4]} 0;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[4]};
`,n0=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[1]};
`,D6=l(D.div)`
  font-size: ${e=>e.theme.spacing[3]};
  font-weight: 600;
  color: ${e=>e.theme.colors.text.tertiary};
  padding: 0 ${e=>e.theme.spacing[4]};
  margin-top: ${e=>e.theme.spacing[4]};
  margin-bottom: ${e=>e.theme.spacing[2]};
`,E6=l(zm)`
  display: flex;
  align-items: center;
  padding: ${e=>e.theme.spacing[3]} ${e=>e.theme.spacing[4]};
  position: relative;
  text-decoration: none;
  color: ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.text.secondary};
  font-weight: ${e=>e.$isActive?"600":"400"};
  font-size: 1rem;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
    color: ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.text.primary};
  }
  
  ${({$isCollapsed:e})=>e&&hr`
    justify-content: center;
    padding: ${t=>t.theme.spacing[3]} 0;
  `}
`,L6=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  min-width: 24px;
`,R6=l(D.span)`
  margin-left: ${e=>e.theme.spacing[3]};
  white-space: nowrap;
  font-size: 1rem;
`,I6=l(D.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: ${e=>e.theme.colors.primary[600]};
  border-radius: 0 ${e=>e.theme.borderRadius.sm} ${e=>e.theme.borderRadius.sm} 0;
`,F6=l.div`
  display: flex;
  align-items: center;
  padding: ${e=>e.theme.spacing[4]};
  border-top: 1px solid ${e=>e.theme.colors.border};
  gap: ${e=>e.theme.spacing[3]};
  
  ${({$isCollapsed:e})=>e&&hr`
    justify-content: center;
    padding: ${t=>t.theme.spacing[3]} 0;
  `}
`,N6=l.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary[500]};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
`,B6=l(D.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`,O6=l.div`
  font-weight: 600;
  font-size: ${e=>e.theme.spacing[3.5]};
  color: ${e=>e.theme.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,V6=l.div`
  font-size: ${e=>e.theme.spacing[3]};
  color: ${e=>e.theme.colors.text.tertiary};
`,_6=l(Dc)`
  padding: 0.5rem;
  background: transparent;
  
  svg {
    color: ${e=>e.theme.colors.text.secondary};
  }
  
  &:hover {
    svg {
      color: ${e=>e.theme.colors.danger[500]};
    }
  }
`,hp=()=>{const{user:e}=Xt(),[t,r]=$.useState(!1),n=$.useRef(null);$.useEffect(()=>{const d=u=>{n.current&&!n.current.contains(u.target)&&r(!1)};return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[]);const i=()=>{r(!t)},s=()=>{r(!1)},a=()=>{if(!e)return"?";if(e.fullName){const d=e.fullName.split(" ");return d.length===1?d[0].charAt(0).toUpperCase():(d[0].charAt(0)+d[d.length-1].charAt(0)).toUpperCase()}return e.username.charAt(0).toUpperCase()},c=()=>e?`/${e.role}/profile`:"/login";return o.jsxs(W6,{children:[o.jsxs(U6,{children:[o.jsx(H6,{placeholder:"Search..."}),o.jsx(G6,{children:o.jsx(Se,{})})]}),o.jsxs(Y6,{children:[o.jsxs(q6,{children:[o.jsx(ks,{}),o.jsx(Q6,{children:"3"})]}),o.jsxs(K6,{ref:n,children:[o.jsx(J6,{onClick:i,children:o.jsx(Z6,{children:a()})}),o.jsxs(X6,{onClick:i,children:[(e==null?void 0:e.fullName)||(e==null?void 0:e.username)||"User",o.jsx(de,{style:{transform:t?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s ease"}})]}),t&&o.jsxs(eP,{children:[o.jsxs(tP,{children:[o.jsx(rP,{children:o.jsx(nP,{children:a()})}),o.jsxs(oP,{children:[o.jsx(iP,{children:(e==null?void 0:e.fullName)||(e==null?void 0:e.username)||"User"}),o.jsx(sP,{children:(e==null?void 0:e.role)||"No role"})]})]}),o.jsx(o0,{}),o.jsxs(i0,{as:gs,to:c(),onClick:s,children:[o.jsx(s0,{children:o.jsx(dt,{})}),o.jsx("span",{children:"My Profile"})]}),o.jsxs(i0,{as:gs,to:`/${e==null?void 0:e.role}/settings`,children:[o.jsx(s0,{children:o.jsx(Jo,{})}),o.jsx("span",{children:"Settings"})]}),o.jsx(o0,{}),o.jsx(aP,{variant:"secondary",size:"medium",text:"Log out"})]})]})]})]})},W6=l.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  height: 60px;
  width: 100%;
  transition: background-color 0.2s ease, border-color 0.2s ease;
`,U6=l.div`
  position: relative;
  max-width: 400px;
  width: 100%;
`,H6=l.input`
  width: 100%;
  padding: 0.5rem 2.5rem 0.5rem 0.75rem;
  border-radius: 4px;
  border: 1px solid ${e=>e.theme.colors.border.light};
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  transition: all 0.2s ease;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[500]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
`,G6=l.div`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>e.theme.colors.text.tertiary};
`,Y6=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,q6=l.button`
  position: relative;
  background: transparent;
  border: none;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 1.25rem;
  padding: 0.25rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  &:hover {
    background: ${e=>e.theme.colors.background.hover};
    color: ${e=>e.theme.colors.text.primary};
  }
`,Q6=l.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${e=>e.theme.colors.danger[500]};
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,K6=l.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,X6=l.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.25rem;
  
  &:hover {
    color: ${e=>e.theme.colors.primary[600]};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    display: none;
  }
`,J6=l.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Z6=l.span`
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
`,eP=l.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 240px;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.border.light};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: ${e=>e.theme.zIndices.dropdown};
  overflow: hidden;
`,tP=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`,rP=l.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary[500]};
  display: flex;
  align-items: center;
  justify-content: center;
`,nP=l.span`
  color: white;
  font-weight: 600;
  font-size: 1rem;
`,oP=l.div`
  display: flex;
  flex-direction: column;
`,iP=l.span`
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,sP=l.span`
  font-size: 0.75rem;
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: capitalize;
`,o0=l.div`
  height: 1px;
  background-color: ${e=>e.theme.colors.border.light};
  margin: 0.25rem 0;
`,i0=l.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.875rem;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
`,s0=l.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: ${e=>e.theme.colors.text.secondary};
`,aP=l(Dc)`
  width: 100%;
  justify-content: flex-start;
  padding: 0.75rem 1rem;
  border-radius: 0;
  
  span {
    margin-left: 0.5rem;
  }
`,mp=()=>{const e=new Date().getFullYear();return o.jsx(lP,{children:o.jsxs(cP,{children:[o.jsxs(dP,{children:["© ",e," Learning Management System. All rights reserved."]}),o.jsxs(uP,{children:[o.jsx(Sd,{href:"#",children:"Privacy Policy"}),o.jsx(Sd,{href:"#",children:"Terms of Service"}),o.jsx(Sd,{href:"#",children:"Help Center"})]})]})})},lP=l.footer`
  background-color: ${e=>e.theme.colors.background.primary};
  border-top: 1px solid ${e=>e.theme.colors.border};
  padding: ${e=>e.theme.spacing.md};
`,cP=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${e=>e.theme.spacing.sm};
  }
`,dP=l.p`
  color: ${e=>e.theme.colors.text.tertiary};
  font-size: 0.875rem;
  margin: 0;
`,uP=l.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${e=>e.theme.spacing.xs};
    align-items: center;
  }
`,Sd=l.a`
  color: ${e=>e.theme.colors.text.tertiary};
  text-decoration: none;
  font-size: 0.875rem;
  transition: color ${e=>e.theme.transition.fast};
  
  &:hover {
    color: ${e=>e.theme.colors.primary[600]};
    text-decoration: underline;
  }
`,hP=()=>{const[e,t]=$.useState(!1),[r,n]=$.useState(!1);$.useEffect(()=>{const a=()=>{window.innerWidth<1024&&t(!0)};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]);const i=()=>{t(!e)},s=a=>{n(a)};return o.jsxs(mP,{children:[o.jsx($6,{isCollapsed:e,toggleSidebar:i,onMobileToggle:s}),o.jsxs(pP,{$isCollapsed:e,$isMobileOpen:r,children:[o.jsx(hp,{}),o.jsx(fP,{children:o.jsx(Mm,{})}),o.jsx(mp,{})]})]})},mP=l.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: ${e=>e.theme.colors.background.primary};
`,pP=l.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  transition: margin-left ${e=>e.theme.transition.normal} ease, 
              filter ${e=>e.theme.transition.normal},
              opacity ${e=>e.theme.transition.normal};
  z-index: ${e=>e.theme.zIndices.base};
  position: relative;
  margin-left: ${({$isCollapsed:e})=>e?"80px":"280px"};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    margin-left: 0;
    filter: ${({$isMobileOpen:e})=>e?"blur(4px)":"none"};
    opacity: ${({$isMobileOpen:e})=>e?.7:1};
    pointer-events: ${({$isMobileOpen:e})=>e?"none":"auto"};
  }
`,fP=l.main`
  flex: 1;
  padding: 24px 32px;
  overflow-y: auto;
  background-color: ${e=>e.theme.colors.background.secondary};
`,Jt=({icon:e,label:t,to:r,isCollapsed:n})=>{const i=Kt(),s=i.pathname===r||i.pathname.startsWith(`${r}/`);return o.jsxs(PP,{to:r,$isActive:s,$isCollapsed:n,children:[o.jsx(TP,{children:e}),o.jsx(he,{children:!n&&o.jsx(AP,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},transition:{duration:.2},children:t})}),s&&o.jsx(MP,{layoutId:"activeIndicator",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}})]})},gP=({isCollapsed:e,toggleSidebar:t,onMobileToggle:r})=>{const[n,i]=$.useState(!1),[s,a]=$.useState(!1),{user:c}=Xt();$.useEffect(()=>{const p=()=>{i(window.innerWidth<1024)};return p(),window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]);const d=()=>{const p=!s;a(p),r&&r(p)},u=()=>{if(!c||!c.username)return"U";if(c.fullName){const p=c.fullName.split(" ");return p.length===1?p[0].charAt(0).toUpperCase():(p[0].charAt(0)+p[p.length-1].charAt(0)).toUpperCase()}return c.username.charAt(0).toUpperCase()},h=()=>(c==null?void 0:c.fullName)||(c==null?void 0:c.username)||"User",m=()=>(c==null?void 0:c.role)||"User";return o.jsxs(o.Fragment,{children:[n&&o.jsx(bP,{onClick:d,children:s?o.jsx(Ft,{}):o.jsx(cp,{})}),o.jsx(he,{children:(n?s:!0)&&o.jsxs(xP,{$isCollapsed:n?!1:e,$isMobile:n,as:D.aside,initial:{x:n?-300:0},animate:{x:0},exit:{x:n?-300:0},transition:{duration:.3,ease:"easeInOut"},children:[o.jsxs(wP,{$isCollapsed:n?!1:e,children:[e&&!n?o.jsx(jP,{children:"LMS"}):o.jsx($P,{children:o.jsx(D.span,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},children:"Learning Management System"})}),n?o.jsx(kP,{onClick:d,children:o.jsx(Ft,{})}):o.jsx(zw,{onClick:t,children:e?o.jsx(Yt,{}):o.jsx(qt,{})})]}),o.jsxs(CP,{children:[o.jsxs(a0,{children:[o.jsx(Jt,{icon:o.jsx(Hl,{}),label:"Dashboard",to:"/teacher/dashboard",isCollapsed:n?!1:e}),o.jsx(Jt,{icon:o.jsx(Le,{}),label:"My Courses",to:"/teacher/courses",isCollapsed:n?!1:e}),o.jsx(Jt,{icon:o.jsx(Ce,{}),label:"Students",to:"/teacher/students",isCollapsed:n?!1:e}),o.jsx(Jt,{icon:o.jsx(Xo,{}),label:"Assignments",to:"/teacher/assignments",isCollapsed:n?!1:e}),o.jsx(Jt,{icon:o.jsx(ap,{}),label:"Grades",to:"/teacher/grades",isCollapsed:n?!1:e}),o.jsx(Jt,{icon:o.jsx(Ae,{}),label:"Schedule",to:"/teacher/schedule",isCollapsed:n?!1:e}),o.jsx(Jt,{icon:o.jsx(Mc,{}),label:"Messages",to:"/teacher/messages",isCollapsed:n?!1:e})]}),o.jsx(he,{children:(!e||n)&&o.jsx(SP,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2},children:"Account"})}),o.jsxs(a0,{children:[o.jsx(Jt,{icon:o.jsx(Jo,{}),label:"Settings",to:"/teacher/settings",isCollapsed:n?!1:e}),o.jsx(Jt,{icon:o.jsx(Ce,{}),label:"Profile",to:"/teacher/profile",isCollapsed:n?!1:e})]})]}),o.jsxs(zP,{$isCollapsed:n?!1:e,children:[o.jsx(DP,{children:u()}),o.jsx(he,{children:(!e||n)&&o.jsxs(EP,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[o.jsx(LP,{children:h()}),o.jsx(RP,{children:m()})]})}),o.jsx(IP,{variant:"secondary",size:"small",showText:!1})]}),n&&o.jsx(yP,{onClick:d})]})}),o.jsx(he,{children:n&&s&&o.jsx(vP,{as:D.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:d})})]})},xP=l(D.aside)`
  height: 100%;
  background: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.primary};
  box-shadow: ${e=>e.theme.shadows.lg};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${e=>e.theme.zIndices.modal};
  
  width: ${({$isCollapsed:e,$isMobile:t})=>t?"300px":e?"80px":"280px"};
  transition: width ${e=>e.theme.transition.normal} ease;
`,yP=l.div`
  display: none;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`,vP=l(D.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${e=>e.theme.zIndices.overlay};
`,bP=l.button`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  border-radius: ${e=>e.theme.borderRadius.full};
  background: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: ${e=>e.theme.spacing[5]};
  z-index: ${e=>e.theme.zIndices.sticky};
  box-shadow: ${e=>e.theme.shadows.md};
  
  &:hover {
    background: ${e=>e.theme.colors.background.tertiary};
  }
  
  @media (min-width: ${e=>e.theme.breakpoints.lg}) {
    display: none;
  }
`,wP=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>e.$isCollapsed?"0 0.5rem":"0 1rem"};
  height: 60px;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    padding: 0 1rem;
  }
`,$P=l.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.primary[600]};
  white-space: nowrap;
`,jP=l.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${e=>e.theme.colors.primary[600]};
`,zw=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background-color: ${e=>e.theme.colors.background.tertiary};
  color: ${e=>e.theme.colors.primary[600]};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  margin-left: 0.5rem;
  position: absolute;
  right: 10px;
  z-index: 10;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[100]};
    color: ${e=>e.theme.colors.primary[700]};
  }
`,kP=l(zw)`
  color: ${e=>e.theme.colors.text.secondary};
  
  &:hover {
    color: ${e=>e.theme.colors.accent.red};
  }
`,CP=l.div`
  flex: 1;
  overflow-y: auto;
  padding: ${e=>e.theme.spacing[4]} 0;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[4]};
`,a0=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[1]};
`,SP=l(D.div)`
  font-size: ${e=>e.theme.spacing[3]};
  font-weight: 600;
  color: ${e=>e.theme.colors.text.tertiary};
  padding: 0 ${e=>e.theme.spacing[4]};
  margin-top: ${e=>e.theme.spacing[4]};
  margin-bottom: ${e=>e.theme.spacing[2]};
`,PP=l(zm)`
  display: flex;
  align-items: center;
  padding: ${e=>e.theme.spacing[3]} ${e=>e.theme.spacing[4]};
  position: relative;
  text-decoration: none;
  color: ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.text.secondary};
  font-weight: ${e=>e.$isActive?"600":"400"};
  font-size: 1rem;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
    color: ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.text.primary};
  }
  
  ${({$isCollapsed:e})=>e&&hr`
    justify-content: center;
    padding: ${t=>t.theme.spacing[3]} 0;
  `}
`,TP=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  min-width: 24px;
`,AP=l(D.span)`
  margin-left: ${e=>e.theme.spacing[3]};
  white-space: nowrap;
  font-size: 1rem;
`,MP=l(D.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: ${e=>e.theme.colors.primary[600]};
  border-radius: 0 ${e=>e.theme.borderRadius.sm} ${e=>e.theme.borderRadius.sm} 0;
`,zP=l.div`
  display: flex;
  align-items: center;
  padding: ${e=>e.theme.spacing[4]};
  border-top: 1px solid ${e=>e.theme.colors.border};
  gap: ${e=>e.theme.spacing[3]};
  
  ${({$isCollapsed:e})=>e&&hr`
    justify-content: center;
    padding: ${t=>t.theme.spacing[3]} 0;
  `}
`,DP=l.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary[500]};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
`,EP=l(D.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`,LP=l.div`
  font-weight: 600;
  font-size: ${e=>e.theme.spacing[3.5]};
  color: ${e=>e.theme.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,RP=l.div`
  font-size: ${e=>e.theme.spacing[3]};
  color: ${e=>e.theme.colors.text.tertiary};
`,IP=l(Dc)`
  padding: 0.5rem;
  background: transparent;
  
  svg {
    color: ${e=>e.theme.colors.text.secondary};
  }
  
  &:hover {
    svg {
      color: ${e=>e.theme.colors.danger[500]};
    }
  }
`,FP=()=>{const[e,t]=$.useState(!1),[r,n]=$.useState(!1);$.useEffect(()=>{const a=()=>{window.innerWidth<1024&&t(!0)};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]);const i=()=>{t(!e)},s=a=>{n(a)};return o.jsxs(NP,{children:[o.jsx(gP,{isCollapsed:e,toggleSidebar:i,onMobileToggle:s}),o.jsxs(BP,{$isCollapsed:e,$isMobileOpen:r,children:[o.jsx(hp,{}),o.jsx(OP,{children:o.jsx(Mm,{})}),o.jsx(mp,{})]})]})},NP=l.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: ${e=>e.theme.colors.background.primary};
`,BP=l.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  transition: margin-left ${e=>e.theme.transition.normal} ease, 
              filter ${e=>e.theme.transition.normal},
              opacity ${e=>e.theme.transition.normal};
  z-index: ${e=>e.theme.zIndices.base};
  position: relative;
  margin-left: ${({$isCollapsed:e})=>e?"80px":"280px"};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    margin-left: 0;
    filter: ${({$isMobileOpen:e})=>e?"blur(4px)":"none"};
    opacity: ${({$isMobileOpen:e})=>e?.7:1};
    pointer-events: ${({$isMobileOpen:e})=>e?"none":"auto"};
  }
`,OP=l.main`
  flex: 1;
  padding: 24px 32px;
  overflow-y: auto;
  background-color: ${e=>e.theme.colors.background.secondary};
`,VP=({icon:e,label:t,to:r,isCollapsed:n})=>{const i=Kt(),s=i.pathname===r||i.pathname.startsWith(`${r}/`);return o.jsxs(ZP,{to:r,$isActive:s,$isCollapsed:n,children:[o.jsx(eT,{children:e}),o.jsx(he,{children:!n&&o.jsx(tT,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},transition:{duration:.2},children:t})}),s&&o.jsx(rT,{layoutId:"activeIndicator",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}})]})},_P=({isCollapsed:e,toggleSidebar:t,onMobileToggle:r})=>{const[n,i]=$.useState(!1),[s,a]=$.useState(!1),{user:c}=Xt();$.useEffect(()=>{const p=()=>{i(window.innerWidth<1024)};return p(),window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]);const d=()=>{const p=!s;a(p),r&&r(p)},u=()=>{if(!c||!c.username)return"U";if(c.fullName){const p=c.fullName.split(" ");return p.length===1?p[0].charAt(0).toUpperCase():(p[0].charAt(0)+p[p.length-1].charAt(0)).toUpperCase()}return c.username.charAt(0).toUpperCase()},h=()=>(c==null?void 0:c.fullName)||(c==null?void 0:c.username)||"User",m=[{path:"/student/dashboard",icon:o.jsx(Hl,{}),label:"Dashboard"},{path:"/student/courses",icon:o.jsx(Le,{}),label:"My Courses"},{path:"/student/lessons",icon:o.jsx(up,{}),label:"Lessons"},{path:"/student/assignments",icon:o.jsx(Qt,{}),label:"Assignments"},{path:"/student/schedule",icon:o.jsx(Ae,{}),label:"Schedule"},{path:"/student/messages",icon:o.jsx(Mc,{}),label:"Messages"},{path:"/student/tests",icon:o.jsx(Xo,{}),label:"Tests"},{path:"/student/flashcards",icon:o.jsx(Cw,{}),label:"Flashcards"},{path:"/student/profile",icon:o.jsx(dt,{}),label:"Profile"},{path:"/student/settings",icon:o.jsx(Jo,{}),label:"Settings"}];return o.jsxs(o.Fragment,{children:[n&&o.jsx(GP,{onClick:d,children:s?o.jsx(Ft,{}):o.jsx(cp,{})}),o.jsx(he,{children:(n?s:!0)&&o.jsxs(WP,{$isCollapsed:n?!1:e,$isMobile:n,as:D.aside,initial:{x:n?-300:0},animate:{x:0},exit:{x:n?-300:0},transition:{duration:.3,ease:"easeInOut"},children:[o.jsxs(YP,{$isCollapsed:n?!1:e,children:[e&&!n?o.jsx(QP,{children:"LMS"}):o.jsx(qP,{children:o.jsx(D.span,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},children:"Learning Management System"})}),n?o.jsx(KP,{onClick:d,children:o.jsx(Ft,{})}):o.jsx(Dw,{onClick:t,children:e?o.jsx(Yt,{}):o.jsx(qt,{})})]}),o.jsx(XP,{children:o.jsx(JP,{children:m.map(p=>o.jsx(VP,{icon:p.icon,label:p.label,to:p.path,isCollapsed:n?!1:e},p.path))})}),o.jsxs(nT,{$isCollapsed:n?!1:e,children:[o.jsx(oT,{children:u()}),o.jsx(he,{children:(!e||n)&&o.jsxs(iT,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[o.jsx(sT,{children:h()}),o.jsx(aT,{children:"Student"})]})}),o.jsx(lT,{variant:"secondary",size:"small",showText:!1})]}),n&&o.jsx(UP,{onClick:d})]})}),o.jsx(he,{children:n&&s&&o.jsx(HP,{as:D.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:d})})]})},WP=l(D.aside)`
  height: 100%;
  background: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.primary};
  box-shadow: ${e=>e.theme.shadows.lg};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${e=>e.theme.zIndices.modal};
  
  width: ${({$isCollapsed:e,$isMobile:t})=>t?"300px":e?"80px":"280px"};
  transition: width ${e=>e.theme.transition.normal} ease;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    position: fixed;
  }
`,UP=l.div`
  display: none;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`,HP=l(D.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${e=>e.theme.zIndices.overlay};
`,GP=l.button`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  border-radius: ${e=>e.theme.borderRadius.full};
  background: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: ${e=>e.theme.spacing[5]};
  z-index: ${e=>e.theme.zIndices.sticky};
  box-shadow: ${e=>e.theme.shadows.md};
  
  &:hover {
    background: ${e=>e.theme.colors.background.tertiary};
  }
  
  @media (min-width: ${e=>e.theme.breakpoints.lg}) {
    display: none;
  }
`,YP=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>e.$isCollapsed?"0 0.5rem":"0 1rem"};
  height: 60px;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    padding: 0 1rem;
  }
`,qP=l.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.primary[600]};
  white-space: nowrap;
`,QP=l.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${e=>e.theme.colors.primary[600]};
`,Dw=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background-color: ${e=>e.theme.colors.background.tertiary};
  color: ${e=>e.theme.colors.primary};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  margin-left: 0.5rem;
  position: absolute;
  right: 10px;
  z-index: 10;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
`,KP=l(Dw)`
  color: ${e=>e.theme.colors.text.secondary};
  
  &:hover {
    color: ${e=>e.theme.colors.text.primary};
  }
`,XP=l.div`
  flex: 1;
  overflow-y: auto;
  padding: ${e=>e.theme.spacing[4]} 0;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[4]};
`,JP=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[1]};
`,ZP=l(zm)`
  display: flex;
  align-items: center;
  padding: ${e=>e.theme.spacing[3]} ${e=>e.theme.spacing[4]};
  position: relative;
  text-decoration: none;
  color: ${e=>e.$isActive?e.theme.colors.primary:e.theme.colors.text.secondary};
  font-weight: ${e=>e.$isActive?"600":"400"};
  font-size: 1rem;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
    color: ${e=>e.$isActive?e.theme.colors.primary:e.theme.colors.text.primary};
  }
  
  ${({$isActive:e,theme:t})=>e&&hr`
    background-color: ${t.colors.background.hover};
  `}
  
  ${({$isCollapsed:e})=>e&&hr`
    justify-content: center;
    padding: ${t=>t.theme.spacing[3]} 0;
  `}
`,eT=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  min-width: 24px;
`,tT=l(D.span)`
  margin-left: ${e=>e.theme.spacing[3]};
  white-space: nowrap;
  font-size: 1rem;
`,rT=l(D.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: ${e=>e.theme.colors.primary};
  border-radius: 0 ${e=>e.theme.borderRadius.sm} ${e=>e.theme.borderRadius.sm} 0;
  box-shadow: 0 0 4px ${e=>e.theme.colors.primary}80;
`,nT=l.div`
  display: flex;
  align-items: center;
  padding: ${e=>e.theme.spacing[4]};
  border-top: 1px solid ${e=>e.theme.colors.border};
  gap: ${e=>e.theme.spacing[3]};
  
  ${({$isCollapsed:e})=>e&&hr`
    justify-content: center;
    padding: ${t=>t.theme.spacing[3]} 0;
  `}
`,oT=l.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary[600]};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
`,iT=l(D.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`,sT=l.div`
  font-weight: 600;
  font-size: ${e=>e.theme.spacing[3.5]};
  color: ${e=>e.theme.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,aT=l.div`
  font-size: ${e=>e.theme.spacing[3]};
  color: ${e=>e.theme.colors.text.tertiary};
`,lT=l(Dc)`
  padding: 0.5rem;
  background: transparent;
  
  svg {
    color: ${e=>e.theme.colors.text.secondary};
  }
  
  &:hover {
    svg {
      color: ${e=>e.theme.colors.danger};
    }
  }
`,cT=()=>{const[e,t]=$.useState(!1),[r,n]=$.useState(!1);$.useEffect(()=>{const a=()=>{window.innerWidth<1024&&t(!0)};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]);const i=()=>{t(!e)},s=a=>{n(a)};return o.jsxs(dT,{children:[o.jsx(_P,{isCollapsed:e,toggleSidebar:i,onMobileToggle:s}),o.jsxs(uT,{$isCollapsed:e,$isMobileOpen:r,children:[o.jsx(hp,{}),o.jsx(hT,{children:o.jsx(Mm,{})}),o.jsx(mp,{})]})]})},dT=l.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: ${e=>e.theme.colors.background.primary};
`,uT=l.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  transition: margin-left ${e=>e.theme.transition.normal} ease, 
              filter ${e=>e.theme.transition.normal},
              opacity ${e=>e.theme.transition.normal};
  z-index: ${e=>e.theme.zIndices.base};
  position: relative;
  margin-left: ${({$isCollapsed:e})=>e?"80px":"280px"};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    margin-left: 0;
    filter: ${({$isMobileOpen:e})=>e?"blur(4px)":"none"};
    opacity: ${({$isMobileOpen:e})=>e?.7:1};
    pointer-events: ${({$isMobileOpen:e})=>e?"none":"auto"};
  }
`,hT=l.main`
  flex: 1;
  padding: 24px 32px;
  overflow-y: auto;
  background-color: ${e=>e.theme.colors.background.secondary};
`,Yl=(e,t)=>{switch(e){case"primary":return t.colors.primary[600];case"green":return t.colors.success[500];case"yellow":return t.colors.warning[500];case"purple":return t.colors.purple[500];case"red":return t.colors.danger[500];default:return t.colors.primary[600]}},mT=(e,t)=>{switch(e){case"primary":return t.colors.primary[50];case"green":return t.colors.success[50];case"yellow":return t.colors.warning[50];case"purple":return t.colors.purple[50];case"red":return t.colors.danger[50];default:return t.colors.primary[50]}},pT=l.div`
  display: flex;
  align-items: center;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  padding: ${e=>e.theme.spacing[5]};
  box-shadow: ${e=>e.theme.shadows.sm};
  border-left: 4px solid ${e=>Yl(e.$color,e.theme)};
  border-top: 1px solid ${e=>e.theme.colors.border.light};
  border-right: 1px solid ${e=>e.theme.colors.border.light};
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.md};
    border-color: ${e=>Yl(e.$color,e.theme)};
  }
`,fT=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${e=>e.theme.borderRadius.lg};
  background-color: ${e=>e.theme.colors.background.primary==="#0f172a"?Yl(e.$color,e.theme)+"22":mT(e.$color,e.theme)};
  color: ${e=>Yl(e.$color,e.theme)};
  font-size: 1.5rem;
  margin-right: ${e=>e.theme.spacing[4]};
`,gT=l.div`
  flex: 1;
`,xT=l.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: ${e=>e.theme.spacing[1]};
`,yT=l.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: ${e=>e.theme.spacing[2]};
`,vT=l.div`
  display: inline-flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
  font-size: 0.8rem;
  font-weight: 500;
  color: ${e=>e.$isPositive?e.theme.colors.success[500]:e.theme.colors.danger[500]};
  
  svg {
    font-size: 1rem;
  }
`,Ew=({icon:e,title:t,value:r,change:n,color:i})=>{const s=n.startsWith("+");return o.jsxs(pT,{$color:i,children:[o.jsx(fT,{$color:i,children:e}),o.jsxs(gT,{children:[o.jsx(xT,{children:r}),o.jsx(yT,{children:t}),o.jsx(vT,{$isPositive:s,children:n})]})]})},bT=()=>{const[e,t]=$.useState("week"),[r,n]=$.useState(!1),[i,s]=$.useState("overview"),a=[{id:1,title:"Total Users",value:356,change:"+12%",icon:o.jsx(Ce,{}),color:"primary"},{id:2,title:"Active Classes",value:24,change:"+5%",icon:o.jsx(kw,{}),color:"green"},{id:3,title:"Subjects",value:48,change:"+3%",icon:o.jsx(Le,{}),color:"yellow"},{id:4,title:"Upcoming Events",value:12,change:"+7%",icon:o.jsx(Ae,{}),color:"purple"}],c=[{id:5,title:"Active Students",value:256,change:"+8%",icon:o.jsx(x6,{}),color:"primary"},{id:6,title:"Inactive Students",value:32,change:"-5%",icon:o.jsx(v6,{}),color:"red"},{id:7,title:"Avg. Attendance",value:"87%",change:"+2%",icon:o.jsx(Zr,{}),color:"green"},{id:8,title:"Top Performers",value:42,change:"+15%",icon:o.jsx(r0,{}),color:"yellow"}],d=[{id:9,title:"Course Completion",value:"76%",change:"+4%",icon:o.jsx(sp,{}),color:"primary"},{id:10,title:"Assignments",value:128,change:"+12%",icon:o.jsx(Xo,{}),color:"yellow"},{id:11,title:"Avg. Score",value:"82%",change:"+3%",icon:o.jsx(n6,{}),color:"green"},{id:12,title:"Learning Hours",value:"1,240",change:"+18%",icon:o.jsx(Qe,{}),color:"purple"}],u=[{id:13,title:"System Health",value:"98%",change:"+1%",icon:o.jsx(i6,{}),color:"green"},{id:14,title:"Storage Used",value:"68%",change:"+7%",icon:o.jsx(Ah,{}),color:"yellow"},{id:15,title:"Notifications",value:18,change:"+5%",icon:o.jsx(ks,{}),color:"primary"},{id:16,title:"Support Tickets",value:7,change:"-2%",icon:o.jsx(l6,{}),color:"purple"}],h=()=>{switch(i){case"students":return c;case"courses":return d;case"system":return u;default:return a}},m=[{id:1,user:"John Doe",action:"created a new class",time:"2 hours ago"},{id:2,user:"Jane Smith",action:"added 5 new students",time:"3 hours ago"},{id:3,user:"Robert Johnson",action:"updated Biology curriculum",time:"5 hours ago"},{id:4,user:"Emily Davis",action:"scheduled a new event",time:"1 day ago"},{id:5,user:"Michael Wilson",action:"created a new assessment",time:"1 day ago"}],p=[{subject:"Mathematics",completion:78},{subject:"Science",completion:92},{subject:"Language",completion:64},{subject:"History",completion:85}],b=[{id:1,name:"Emma Johnson",grade:"A+",performance:98,subject:"Mathematics"},{id:2,name:"Noah Williams",grade:"A",performance:95,subject:"Science"},{id:3,name:"Olivia Brown",grade:"A",performance:93,subject:"Literature"},{id:4,name:"Liam Davis",grade:"A-",performance:91,subject:"History"}],v=[{id:1,title:"Mid-term Examination",date:"2023-06-15",participation:"95%",avgScore:"76%"},{id:2,title:"Biology Quiz",date:"2023-06-10",participation:"98%",avgScore:"82%"},{id:3,title:"Mathematics Test",date:"2023-06-08",participation:"92%",avgScore:"74%"},{id:4,title:"Literature Essay",date:"2023-06-05",participation:"88%",avgScore:"81%"}],j=[{day:"Monday",attendance:94},{day:"Tuesday",attendance:92},{day:"Wednesday",attendance:88},{day:"Thursday",attendance:91},{day:"Friday",attendance:85}],P=()=>{n(!0),setTimeout(()=>{n(!1)},1e3)};return o.jsxs(wT,{children:[o.jsxs($T,{children:[o.jsxs("div",{children:[o.jsx(jT,{children:"Dashboard"}),o.jsx(kT,{children:"Welcome back, Admin User!"})]}),o.jsxs(CT,{children:[o.jsxs(ST,{children:[o.jsx(Pd,{$isActive:e==="today",onClick:()=>t("today"),children:"Today"}),o.jsx(Pd,{$isActive:e==="week",onClick:()=>t("week"),children:"This Week"}),o.jsx(Pd,{$isActive:e==="month",onClick:()=>t("month"),children:"This Month"})]}),o.jsxs(TT,{onClick:P,disabled:r,children:[o.jsx(he,{mode:"wait",children:r?o.jsx(D.div,{initial:{rotate:0},animate:{rotate:360},exit:{rotate:0},transition:{repeat:1/0,duration:1,ease:"linear"},children:o.jsx(Ki,{})},"refreshing"):o.jsx(D.div,{children:o.jsx(Ki,{})},"refresh")}),o.jsx("span",{children:"Refresh"})]})]})]}),o.jsxs(PT,{children:[o.jsx(la,{$isActive:i==="overview",onClick:()=>s("overview"),children:"Overview"}),o.jsx(la,{$isActive:i==="students",onClick:()=>s("students"),children:"Students"}),o.jsx(la,{$isActive:i==="courses",onClick:()=>s("courses"),children:"Courses"}),o.jsx(la,{$isActive:i==="system",onClick:()=>s("system"),children:"System"})]}),o.jsx(AT,{children:h().map((y,f)=>o.jsx(D.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:f*.1},children:o.jsx(Ew,{icon:y.icon,title:y.title,value:y.value,change:y.change,color:y.color})},y.id))}),o.jsxs(ca,{children:[o.jsxs(wr,{as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.4},children:[o.jsxs($r,{children:[o.jsx(jr,{children:"Recent Activities"}),o.jsxs(xi,{children:["View All ",o.jsx(Qe,{})]})]}),o.jsx(zT,{children:m.map((y,f)=>o.jsxs(DT,{as:D.div,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:.5+f*.1},children:[o.jsx(ET,{}),o.jsxs(LT,{children:[o.jsx("strong",{children:y.user})," ",y.action,o.jsx(RT,{children:y.time})]})]},y.id))})]}),o.jsxs(wr,{as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.5},children:[o.jsxs($r,{children:[o.jsx(jr,{children:"Course Performance"}),o.jsxs(xi,{children:["Details ",o.jsx(p6,{})]})]}),o.jsx(IT,{children:p.map((y,f)=>o.jsxs(FT,{children:[o.jsx(NT,{children:y.subject}),o.jsx(l0,{children:o.jsx(c0,{$percentage:y.completion})}),o.jsxs(BT,{children:[y.completion,"%"]})]},f))})]})]}),o.jsxs(ca,{children:[o.jsxs(wr,{as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.6},children:[o.jsxs($r,{children:[o.jsx(jr,{children:"Top Performing Students"}),o.jsxs(xi,{children:["View All ",o.jsx(r0,{})]})]}),o.jsx(VT,{children:o.jsxs(_T,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(da,{children:"Student"}),o.jsx(da,{children:"Subject"}),o.jsx(da,{children:"Grade"}),o.jsx(da,{children:"Performance"})]})}),o.jsx("tbody",{children:b.map(y=>o.jsxs("tr",{children:[o.jsx(ua,{children:y.name}),o.jsx(ua,{children:y.subject}),o.jsx(ua,{children:o.jsx(WT,{$grade:y.grade,children:y.grade})}),o.jsxs(ua,{children:[o.jsx(l0,{small:!0,children:o.jsx(c0,{$percentage:y.performance})}),o.jsxs(OT,{children:[y.performance,"%"]})]})]},y.id))})]})})]}),o.jsxs(wr,{as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.7},children:[o.jsxs($r,{children:[o.jsx(jr,{children:"Recent Assessments"}),o.jsxs(xi,{children:["View All ",o.jsx(Xo,{})]})]}),o.jsx(UT,{children:v.map(y=>o.jsxs(HT,{children:[o.jsxs(GT,{children:[o.jsx(YT,{children:y.title}),o.jsx(qT,{children:y.date})]}),o.jsxs(QT,{children:[o.jsxs(d0,{children:[o.jsx(u0,{children:"Participation"}),o.jsx(h0,{children:y.participation})]}),o.jsxs(d0,{children:[o.jsx(u0,{children:"Average Score"}),o.jsx(h0,{children:y.avgScore})]})]})]},y.id))})]})]}),o.jsxs(ca,{children:[o.jsxs(wr,{as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.6},children:[o.jsx($r,{children:o.jsx(jr,{children:"Weekly Attendance"})}),o.jsxs(KT,{children:[o.jsx(XT,{children:j.map(y=>o.jsxs(JT,{children:[o.jsx(ZT,{$percentage:y.attendance}),o.jsxs(eA,{children:[y.attendance,"%"]}),o.jsx(tA,{children:y.day})]},y.day))}),o.jsx(rA,{children:"Weekly Average: 90%"})]})]}),o.jsxs(wr,{as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.6},children:[o.jsx($r,{children:o.jsx(jr,{children:"Quick Actions"})}),o.jsxs(nA,{children:[o.jsxs(ha,{$color:"primary",children:[o.jsx(ma,{$color:"primary",children:o.jsx(lA,{})}),o.jsx("span",{children:"Add New User"})]}),o.jsxs(ha,{$color:"green",children:[o.jsx(ma,{$color:"green",children:o.jsx(cA,{})}),o.jsx("span",{children:"Create Class"})]}),o.jsxs(ha,{$color:"yellow",children:[o.jsx(ma,{$color:"yellow",children:o.jsx(dA,{})}),o.jsx("span",{children:"Add Subject"})]}),o.jsxs(ha,{$color:"purple",children:[o.jsx(ma,{$color:"purple",children:o.jsx(uA,{})}),o.jsx("span",{children:"Schedule Event"})]})]})]})]}),o.jsxs(ca,{children:[o.jsxs(wr,{as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.7},children:[o.jsxs($r,{children:[o.jsx(jr,{children:"System Status"}),o.jsx(MT,{children:"Last updated: 5 min ago"})]}),o.jsxs(oA,{children:[o.jsxs(qn,{children:[o.jsx(Qn,{children:"System Version"}),o.jsx(pa,{children:"v1.0.0"})]}),o.jsxs(qn,{children:[o.jsx(Qn,{children:"Last Backup"}),o.jsx(pa,{children:"Today at 03:00 AM"})]}),o.jsxs(qn,{children:[o.jsx(Qn,{children:"Storage Used"}),o.jsx(iA,{children:o.jsx(sA,{$percentage:65})}),o.jsx(pa,{children:"65% of 10GB"})]}),o.jsxs(qn,{children:[o.jsx(Qn,{children:"Server Status"}),o.jsxs(m0,{children:[o.jsx(p0,{$active:!0}),o.jsx("span",{children:"Operational"})]})]}),o.jsxs(qn,{children:[o.jsx(Qn,{children:"Database Status"}),o.jsxs(m0,{children:[o.jsx(p0,{$active:!0}),o.jsx("span",{children:"Connected"})]})]}),o.jsxs(qn,{children:[o.jsx(Qn,{children:"API Response Time"}),o.jsx(pa,{children:"124ms"})]})]})]}),o.jsxs(wr,{as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.8},children:[o.jsxs($r,{children:[o.jsx(jr,{children:"Notifications"}),o.jsxs(xi,{children:["View All ",o.jsx(ks,{})]})]}),o.jsxs(aA,{children:[o.jsxs(fa,{$type:"info",children:[o.jsx(ga,{$type:"info",children:o.jsx(On,{})}),o.jsxs(xa,{children:[o.jsx(ya,{children:"System maintenance scheduled for Sunday, 2:00 AM"}),o.jsx(va,{children:"2 hours ago"})]})]}),o.jsxs(fa,{$type:"success",children:[o.jsx(ga,{$type:"success",children:o.jsx(Zr,{})}),o.jsxs(xa,{children:[o.jsx(ya,{children:"Database backup completed successfully"}),o.jsx(va,{children:"6 hours ago"})]})]}),o.jsxs(fa,{$type:"warning",children:[o.jsx(ga,{$type:"warning",children:o.jsx(js,{})}),o.jsxs(xa,{children:[o.jsx(ya,{children:"Storage space running low (25% remaining)"}),o.jsx(va,{children:"1 day ago"})]})]}),o.jsxs(fa,{$type:"info",children:[o.jsx(ga,{$type:"info",children:o.jsx(On,{})}),o.jsxs(xa,{children:[o.jsx(ya,{children:"5 new users registered this week"}),o.jsx(va,{children:"2 days ago"})]})]})]})]})]})]})},Lw=(e,t)=>{switch(e){case"primary":return t.colors.primary[600];case"green":return t.colors.success[500];case"yellow":return t.colors.warning[500];case"purple":return t.colors.purple[500];case"red":return t.colors.danger[500];default:return t.colors.primary[600]}},Rw=(e,t)=>{switch(e){case"primary":return t.colors.primary[50];case"green":return t.colors.success[50];case"yellow":return t.colors.warning[50];case"purple":return t.colors.purple[50];case"red":return t.colors.danger[50];default:return t.colors.primary[50]}},wT=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[6]};
  padding: ${e=>e.theme.spacing[6]};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    padding: ${e=>e.theme.spacing[4]};
  }
`,$T=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${e=>e.theme.spacing[4]};
  }
`,jT=l.h1`
  margin: 0;
  margin-bottom: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1.8rem;
`,kT=l.p`
  margin: 0;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 1rem;
`,CT=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    justify-content: space-between;
  }
`,ST=l.div`
  display: flex;
  align-items: center;
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.lg};
  overflow: hidden;
`,Pd=l.button`
  background-color: ${e=>e.$isActive?e.theme.colors.primary[600]:"transparent"};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.secondary};
  border: none;
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.$isActive?e.theme.colors.primary[700]:e.theme.colors.background.lighter};
    color: ${e=>e.$isActive?"white":e.theme.colors.text.primary};
  }
`,PT=l.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${e=>e.theme.spacing[4]};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.lg};
  background-color: ${e=>e.theme.colors.background.lighter};
  overflow: hidden;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    flex-wrap: wrap;
  }
`,la=l.button`
  flex: 1;
  background-color: ${e=>e.$isActive?e.theme.colors.primary[600]:"transparent"};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.secondary};
  border: none;
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.$isActive?e.theme.colors.primary[700]:e.theme.colors.background.light};
    color: ${e=>e.$isActive?"white":e.theme.colors.text.primary};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    flex-basis: 50%;
  }
`,TT=l.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  background-color: ${e=>e.theme.colors.background.light};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.lg};
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.lighter};
    color: ${e=>e.theme.colors.text.primary};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,AT=l.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${e=>e.theme.spacing[6]};
  
  @media (max-width: ${e=>e.theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,ca=l.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${e=>e.theme.spacing[6]};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,wr=l.div`
  display: flex;
  flex-direction: column;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  box-shadow: ${e=>e.theme.shadows.sm};
  border: 1px solid ${e=>e.theme.colors.border.light};
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    box-shadow: ${e=>e.theme.shadows.md};
    transform: translateY(-2px);
  }
`,$r=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>`${e.theme.spacing[4]} ${e.theme.spacing[5]}`};
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,jr=l.h2`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,xi=l.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
  background: none;
  border: none;
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.primary[600]};
  cursor: pointer;
  transition: color ${e=>e.theme.transition.fast};
  
  &:hover {
    color: ${e=>e.theme.colors.primary[800]};
  }
`,MT=l.span`
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.text.secondary};
`,zT=l.div`
  padding: ${e=>e.theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[4]};
  background-color: ${e=>e.theme.colors.background.secondary};
  height: 100%;
`,DT=l.div`
  display: flex;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing[3]};
`,ET=l.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary[500]};
  margin-top: 6px;
`,LT=l.div`
  flex: 1;
  font-size: 0.95rem;
  color: ${e=>e.theme.colors.text.primary};
`,RT=l.div`
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-top: ${e=>e.theme.spacing[1]};
`,IT=l.div`
  padding: ${e=>e.theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[4]};
  background-color: ${e=>e.theme.colors.background.secondary};
  height: 100%;
`,FT=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[4]};
`,NT=l.div`
  width: 100px;
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.primary};
`,l0=l.div`
  flex: 1;
  height: ${e=>e.small?"8px":"12px"};
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: ${e=>e.theme.borderRadius.full};
  overflow: hidden;
`,c0=l.div`
  height: 100%;
  width: ${e=>`${e.$percentage}%`};
  background-color: ${e=>e.$percentage>80?e.theme.colors.success[500]:e.$percentage>50?e.theme.colors.warning[500]:e.theme.colors.danger[500]};
  border-radius: ${e=>e.theme.borderRadius.full};
`,BT=l.div`
  width: 50px;
  text-align: right;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,OT=l.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
  margin-left: ${e=>e.theme.spacing[2]};
`,VT=l.div`
  padding: ${e=>e.theme.spacing[4]};
  background-color: ${e=>e.theme.colors.background.secondary};
  height: 100%;
`,_T=l.table`
  width: 100%;
  border-collapse: collapse;
`,da=l.th`
  text-align: left;
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
  font-size: 0.85rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.secondary};
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,ua=l.td`
  padding: ${e=>`${e.theme.spacing[3]} ${e.theme.spacing[3]}`};
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.primary};
  border-bottom: 1px solid ${e=>e.theme.colors.border.lighter};
`,WT=l.span`
  display: inline-block;
  padding: ${e=>`${e.theme.spacing[1]} ${e.theme.spacing[2]}`};
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.$grade.startsWith("A")?e.theme.colors.success[50]:e.$grade.startsWith("B")?e.theme.colors.primary[50]:e.$grade.startsWith("C")?e.theme.colors.warning[50]:e.theme.colors.danger[50]};
  color: ${e=>e.$grade.startsWith("A")?e.theme.colors.success[700]:e.$grade.startsWith("B")?e.theme.colors.primary[700]:e.$grade.startsWith("C")?e.theme.colors.warning[700]:e.theme.colors.danger[700]};
`,UT=l.div`
  padding: ${e=>e.theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[3]};
  background-color: ${e=>e.theme.colors.background.secondary};
  height: 100%;
`,HT=l.div`
  padding: ${e=>e.theme.spacing[3]};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.theme.colors.background.primary};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.sm};
  }
`,GT=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing[2]};
`,YT=l.div`
  font-weight: 600;
  font-size: 0.95rem;
  color: ${e=>e.theme.colors.text.primary};
`,qT=l.div`
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.text.secondary};
`,QT=l.div`
  display: flex;
  gap: ${e=>e.theme.spacing[4]};
`,d0=l.div`
  flex: 1;
`,u0=l.div`
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: ${e=>e.theme.spacing[1]};
`,h0=l.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,KT=l.div`
  padding: ${e=>e.theme.spacing[4]};
  background-color: ${e=>e.theme.colors.background.secondary};
  height: 100%;
`,XT=l.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 200px;
  margin-bottom: ${e=>e.theme.spacing[4]};
`,JT=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
`,ZT=l.div`
  width: 40px;
  height: ${e=>`${e.$percentage*1.5}px`};
  background-color: ${e=>e.theme.colors.primary[500]};
  border-radius: ${e=>e.theme.borderRadius.md} ${e=>e.theme.borderRadius.md} 0 0;
  margin-bottom: ${e=>e.theme.spacing[2]};
`,eA=l.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: ${e=>e.theme.spacing[1]};
`,tA=l.div`
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.text.secondary};
`,rA=l.div`
  text-align: center;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  padding-top: ${e=>e.theme.spacing[2]};
  border-top: 1px solid ${e=>e.theme.colors.border.light};
`,nA=l.div`
  padding: ${e=>e.theme.spacing[4]};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${e=>e.theme.spacing[3]};
  background-color: ${e=>e.theme.colors.background.secondary};
  height: 100%;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,ha=l.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing[3]};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>Rw(e.$color,e.theme)};
    border-color: ${e=>Lw(e.$color,e.theme)};
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.sm};
  }
`,ma=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>Rw(e.$color,e.theme)};
  color: ${e=>Lw(e.$color,e.theme)};
  font-size: 1.2rem;
`,oA=l.div`
  padding: ${e=>e.theme.spacing[4]};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${e=>e.theme.spacing[4]};
  background-color: ${e=>e.theme.colors.background.secondary};
  height: 100%;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,qn=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[2]};
`,Qn=l.div`
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.text.secondary};
`,pa=l.div`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,iA=l.div`
  height: 6px;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: ${e=>e.theme.borderRadius.full};
  overflow: hidden;
  margin: ${e=>e.theme.spacing[1]} 0;
`,sA=l.div`
  height: 100%;
  width: ${e=>`${e.$percentage}%`};
  background-color: ${e=>e.$percentage>80?e.theme.colors.danger[500]:e.$percentage>60?e.theme.colors.warning[500]:e.theme.colors.success[500]};
`,m0=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  font-size: 0.9rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.success[700]};
`,p0=l.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${e=>e.$active?e.theme.colors.success[500]:e.theme.colors.danger[500]};
`,aA=l.div`
  padding: ${e=>e.theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[3]};
  background-color: ${e=>e.theme.colors.background.secondary};
  height: 100%;
`,fa=l.div`
  display: flex;
  gap: ${e=>e.theme.spacing[3]};
  padding: ${e=>e.theme.spacing[3]};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.$type==="success"?e.theme.colors.success[400]:e.$type==="warning"?e.theme.colors.warning[400]:e.$type==="error"?e.theme.colors.danger[400]:e.theme.colors.primary[400]};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.sm};
  }
`,ga=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${e=>e.$type==="success"?e.theme.colors.success[500]:e.$type==="warning"?e.theme.colors.warning[500]:e.$type==="error"?e.theme.colors.danger[500]:e.theme.colors.primary[500]};
  color: white;
  font-size: 1rem;
  flex-shrink: 0;
`,xa=l.div`
  flex: 1;
`,ya=l.div`
  font-size: 0.95rem;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: ${e=>e.theme.spacing[1]};
`,va=l.div`
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.text.secondary};
`,lA=()=>o.jsx(Ce,{}),cA=()=>o.jsx(kw,{}),dA=()=>o.jsx(Le,{}),uA=()=>o.jsx(Ae,{}),hA=()=>{const[e,t]=$.useState("week"),{user:r}=Xt(),n=[{id:1,title:"My Courses",value:5,change:"+1",icon:o.jsx(Le,{}),color:"primary"},{id:2,title:"Students",value:87,change:"+3",icon:o.jsx(Ce,{}),color:"green"},{id:3,title:"Assignments",value:12,change:"+2",icon:o.jsx(Xo,{}),color:"yellow"},{id:4,title:"Messages",value:8,change:"+5",icon:o.jsx(Mc,{}),color:"purple"}],i=[{id:1,subject:"Mathematics",class:"10-A",time:"09:00 AM",duration:"1 hour",room:"Room 101"},{id:2,subject:"Physics",class:"11-B",time:"11:30 AM",duration:"1 hour",room:"Lab 3"},{id:3,subject:"Chemistry",class:"12-C",time:"02:15 PM",duration:"1 hour",room:"Lab 2"}],s=[{id:1,title:"Algebra Quiz",class:"10-A",dueDate:"Tomorrow",submissions:"15/24"},{id:2,title:"Physics Lab Report",class:"11-B",dueDate:"In 2 days",submissions:"8/20"},{id:3,title:"Chemistry Homework",class:"12-C",dueDate:"In 3 days",submissions:"12/22"}],a=[{id:1,title:"Mathematics Mid-term",class:"10-A",avgScore:"78%",completed:"24/24"},{id:2,title:"Physics Quiz",class:"11-B",avgScore:"82%",completed:"18/20"}];return o.jsxs(mA,{as:D.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[o.jsxs(pA,{children:[o.jsxs(fA,{children:[o.jsxs("h1",{children:["Welcome back, ",(r==null?void 0:r.fullName)||"Teacher"]}),o.jsx("p",{children:"Here's what's happening with your classes today"})]}),o.jsxs(gA,{children:[o.jsx(Td,{$isActive:e==="today",onClick:()=>t("today"),children:"Today"}),o.jsx(Td,{$isActive:e==="week",onClick:()=>t("week"),children:"This Week"}),o.jsx(Td,{$isActive:e==="month",onClick:()=>t("month"),children:"This Month"})]})]}),o.jsx(xA,{children:n.map((c,d)=>o.jsx(D.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:d*.1},children:o.jsx(Ew,{title:c.title,value:c.value,change:c.change,icon:c.icon,color:c.color})},c.id))}),o.jsxs(yA,{children:[o.jsxs(ba,{as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.3},children:[o.jsxs(wa,{children:[o.jsx($a,{children:"Today's Schedule"}),o.jsxs(ja,{as:gs,to:"/teacher/schedule",children:["View All ",o.jsx(Ae,{})]})]}),o.jsx(vA,{children:i.map(c=>o.jsxs(bA,{children:[o.jsxs(wA,{children:[o.jsx($A,{children:o.jsx(Qe,{})}),o.jsx(jA,{children:c.time}),o.jsx(kA,{children:c.duration})]}),o.jsxs(CA,{children:[o.jsx(SA,{children:c.subject}),o.jsxs(PA,{children:["Class ",c.class," • ",c.room]})]})]},c.id))})]}),o.jsxs(ba,{as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.4},children:[o.jsxs(wa,{children:[o.jsx($a,{children:"Pending Assignments"}),o.jsxs(ja,{children:["View All ",o.jsx(Xo,{})]})]}),o.jsx(TA,{children:s.map(c=>o.jsxs(AA,{children:[o.jsxs("div",{children:[o.jsx(MA,{children:c.title}),o.jsxs(zA,{children:["Class ",c.class]})]}),o.jsxs(DA,{children:[o.jsxs(EA,{children:["Due: ",c.dueDate]}),o.jsxs(LA,{children:["Submissions: ",c.submissions]})]})]},c.id))})]}),o.jsxs(ba,{as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.5},children:[o.jsxs(wa,{children:[o.jsx($a,{children:"Recent Grades"}),o.jsxs(ja,{children:["View All ",o.jsx(ap,{})]})]}),o.jsx(RA,{children:a.map(c=>o.jsxs(IA,{children:[o.jsxs("div",{children:[o.jsx(FA,{children:c.title}),o.jsxs(NA,{children:["Class ",c.class]})]}),o.jsxs(BA,{children:[o.jsxs(OA,{children:["Avg. Score: ",c.avgScore]}),o.jsxs(VA,{children:["Completed: ",c.completed]})]})]},c.id))})]}),o.jsxs(ba,{as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.6},children:[o.jsxs(wa,{children:[o.jsx($a,{children:"Class Performance"}),o.jsxs(ja,{children:["Details ",o.jsx(sp,{})]})]}),o.jsxs(_A,{children:[o.jsxs(Ad,{children:[o.jsx(Md,{children:"Class 10-A"}),o.jsx(zd,{children:o.jsx(Dd,{$percentage:78})}),o.jsx(Ed,{children:"78%"})]}),o.jsxs(Ad,{children:[o.jsx(Md,{children:"Class 11-B"}),o.jsx(zd,{children:o.jsx(Dd,{$percentage:82})}),o.jsx(Ed,{children:"82%"})]}),o.jsxs(Ad,{children:[o.jsx(Md,{children:"Class 12-C"}),o.jsx(zd,{children:o.jsx(Dd,{$percentage:75})}),o.jsx(Ed,{children:"75%"})]})]})]})]})]})},mA=l.div`
  padding: 1rem 0;
`,pA=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`,fA=l.div`
  h1 {
    font-size: 1.75rem;
    font-weight: 600;
    margin: 0;
    color: ${e=>e.theme.colors.text.primary};
  }
  
  p {
    margin: 0.5rem 0 0;
    color: ${e=>e.theme.colors.text.secondary};
  }
`,gA=l.div`
  display: flex;
  background: ${e=>e.theme.colors.background.tertiary};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: 0.25rem;
`,Td=l.button`
  padding: 0.5rem 1rem;
  border: none;
  background: ${e=>e.$isActive?e.theme.colors.background.primary:"transparent"};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.$isActive?e.theme.colors.text.primary:e.theme.colors.text.secondary};
  font-weight: ${e=>e.$isActive?"500":"400"};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${e=>e.$isActive?e.theme.shadows.sm:"none"};
  
  &:hover {
    color: ${e=>e.theme.colors.text.primary};
  }
`,xA=l.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,yA=l.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,ba=l.div`
  background: ${e=>e.theme.colors.background.primary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  box-shadow: ${e=>e.theme.shadows.sm};
  overflow: hidden;
`,wa=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,$a=l.h2`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: ${e=>e.theme.colors.text.primary};
`,ja=l.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  color: ${e=>e.theme.colors.primary[500]};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  
  svg {
    font-size: 1rem;
  }
  
  &:hover {
    color: ${e=>e.theme.colors.primary[600]};
  }
`,vA=l.div`
  padding: 1rem 1.5rem;
`,bA=l.div`
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
  }
`,wA=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  margin-right: 1rem;
`,$A=l.div`
  color: ${e=>e.theme.colors.primary[500]};
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`,jA=l.div`
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,kA=l.div`
  font-size: 0.75rem;
  color: ${e=>e.theme.colors.text.tertiary};
`,CA=l.div`
  flex: 1;
`,SA=l.div`
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 0.25rem;
`,PA=l.div`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
`,TA=l.div`
  padding: 1rem 1.5rem;
`,AA=l.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
  }
`,MA=l.div`
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 0.25rem;
`,zA=l.div`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
`,DA=l.div`
  text-align: right;
`,EA=l.div`
  color: ${e=>e.theme.colors.warning[500]};
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`,LA=l.div`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
`,RA=l.div`
  padding: 1rem 1.5rem;
`,IA=l.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
  }
`,FA=l.div`
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 0.25rem;
`,NA=l.div`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
`,BA=l.div`
  text-align: right;
`,OA=l.div`
  color: ${e=>e.theme.colors.success[500]};
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`,VA=l.div`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
`,_A=l.div`
  padding: 1.5rem;
`,Ad=l.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Md=l.div`
  min-width: 80px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,zd=l.div`
  flex: 1;
  height: 8px;
  background-color: ${e=>e.theme.colors.background.tertiary};
  border-radius: ${e=>e.theme.borderRadius.full};
  margin: 0 1rem;
  overflow: hidden;
`,Dd=l.div`
  height: 100%;
  width: ${e=>e.$percentage}%;
  background-color: ${e=>e.$percentage>=80?e.theme.colors.success[500]:e.$percentage>=70?e.theme.colors.warning[500]:e.theme.colors.danger[500]};
  border-radius: ${e=>e.theme.borderRadius.full};
`,Ed=l.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  min-width: 40px;
  text-align: right;
`,WA=l.div`
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  box-shadow: ${e=>e.theme.shadows.sm};
  border: 1px solid ${e=>e.theme.colors.border.light};
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  
  &:hover {
    box-shadow: ${e=>e.theme.shadows.md};
    transform: translateY(-2px);
    border-color: ${e=>e.theme.colors.primary[500]};
  }
`,UA=l.div`
  padding: ${e=>e.theme.spacing[4]};
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,HA=l.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,GA=l.div`
  padding: ${e=>e.theme.spacing[4]};
`,en=({children:e,title:t,className:r,onClick:n})=>o.jsxs(WA,{className:r,onClick:n,children:[t&&o.jsx(UA,{children:o.jsx(HA,{children:t})}),o.jsx(GA,{children:e})]}),YA=()=>{const e=[{id:1,title:"Math Quiz: Algebra Basics",dueDate:"2023-04-20",subject:"Mathematics",status:"pending"},{id:2,title:"Physics Lab Report",dueDate:"2023-04-22",subject:"Physics",status:"pending"},{id:3,title:"Literature Essay",dueDate:"2023-04-25",subject:"English",status:"in-progress"}],t=[{id:1,title:"Chemistry Test",grade:92,subject:"Chemistry",date:"2023-04-10"},{id:2,title:"History Essay",grade:88,subject:"History",date:"2023-04-05"},{id:3,title:"Biology Quiz",grade:95,subject:"Biology",date:"2023-04-02"}],r=[{id:1,name:"Mathematics",progress:75,teacher:"Dr. Smith",nextClass:"Tomorrow, 9:00 AM"},{id:2,name:"Physics",progress:60,teacher:"Prof. Johnson",nextClass:"Thursday, 11:30 AM"},{id:3,name:"English Literature",progress:85,teacher:"Mrs. Davis",nextClass:"Wednesday, 1:00 PM"}];return o.jsxs(qA,{children:[o.jsxs(QA,{children:[o.jsxs(KA,{children:[o.jsx(JA,{children:"Student Dashboard"}),o.jsx(ZA,{children:"Welcome to your learning dashboard"})]}),o.jsxs(XA,{children:[o.jsx(Ae,{size:16}),o.jsx("span",{children:new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]})]}),o.jsx(e8,{children:o.jsx(t8,{children:o.jsxs(r8,{children:[o.jsx(n8,{children:"Welcome back, Student!"}),o.jsx(o8,{children:"You have 3 upcoming assignments and 4 active courses. Your overall progress is doing great - keep it up!"}),o.jsxs(i8,{children:[o.jsxs(Ld,{children:[o.jsx(Rd,{children:"Overall Grade"}),o.jsx(Id,{children:"91%"}),o.jsx(Fd,{$progress:91})]}),o.jsxs(Ld,{children:[o.jsx(Rd,{children:"Attendance"}),o.jsx(Id,{children:"95%"}),o.jsx(Fd,{$progress:95})]}),o.jsxs(Ld,{children:[o.jsx(Rd,{children:"Course Completion"}),o.jsx(Id,{children:"68%"}),o.jsx(Fd,{$progress:68})]})]})]})})}),o.jsx(Nd,{children:"Upcoming Assignments"}),o.jsx(s8,{children:e.map(n=>o.jsxs(a8,{children:[o.jsxs(l8,{children:[o.jsx(c8,{children:n.subject}),o.jsx(d8,{$status:n.status,children:n.status==="pending"?"Pending":"In Progress"})]}),o.jsx(u8,{children:n.title}),o.jsxs(h8,{children:[o.jsx(Qe,{size:14}),o.jsxs("span",{children:["Due: ",new Date(n.dueDate).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]})]})]},n.id))}),o.jsxs(m8,{children:[o.jsxs(f0,{children:[o.jsx(Nd,{children:"Recent Grades"}),o.jsxs(en,{children:[o.jsx(p8,{children:t.map(n=>o.jsxs(f8,{children:[o.jsxs(g8,{children:[o.jsx(x8,{children:n.title}),o.jsxs(y8,{children:[n.subject," • ",new Date(n.date).toLocaleDateString("en-US",{month:"short",day:"numeric"})]})]}),o.jsxs(v8,{$grade:n.grade,children:[n.grade,"%"]})]},n.id))}),o.jsx(g0,{children:"View all grades"})]})]}),o.jsxs(f0,{children:[o.jsx(Nd,{children:"My Courses"}),o.jsxs(en,{children:[o.jsx(b8,{children:r.map(n=>o.jsxs(w8,{children:[o.jsx($8,{children:o.jsx(Le,{size:18})}),o.jsxs(j8,{children:[o.jsxs(k8,{children:[o.jsx(C8,{children:n.name}),o.jsxs(S8,{children:[n.progress,"%"]})]}),o.jsx(P8,{children:n.teacher}),o.jsx(T8,{$progress:n.progress}),o.jsxs(A8,{children:[o.jsx(Ae,{size:12}),o.jsx("span",{children:n.nextClass})]})]})]},n.id))}),o.jsx(g0,{children:"View all courses"})]})]})]})]})},qA=l.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,QA=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,KA=l.div`
  display: flex;
  flex-direction: column;
`,XA=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  background: ${e=>e.theme.colors.background.primary};
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.border.light};
`,JA=l.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0;
`,ZA=l.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 4px 0 0 0;
`,e8=l.div`
  margin-bottom: 12px;
`,t8=l.div`
  background: linear-gradient(135deg, ${e=>e.theme.colors.primary}20, ${e=>e.theme.colors.primary}10);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid ${e=>e.theme.colors.border.light};
`,r8=l.div`
  max-width: 900px;
`,n8=l.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: ${e=>e.theme.colors.text.primary};
`,o8=l.p`
  font-size: 15px;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 0 0 20px 0;
  line-height: 1.5;
`,i8=l.div`
  display: flex;
  gap: 24px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    gap: 16px;
  }
`,Ld=l.div`
  flex: 1;
`,Rd=l.div`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 4px;
`,Id=l.div`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 8px;
`,Fd=l.div`
  height: 6px;
  width: 100%;
  background-color: ${e=>e.theme.colors.background.hover};
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${e=>e.$progress}%;
    background-color: ${e=>e.theme.colors.primary};
    border-radius: 3px;
  }
`,Nd=l.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0 0 16px 0;
`,s8=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
`,a8=l.div`
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${e=>e.theme.colors.border.light};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.md};
  }
`,l8=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`,c8=l.div`
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${e=>e.theme.colors.background.hover};
  color: ${e=>e.theme.colors.text.secondary};
`,d8=l.div`
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${e=>e.$status==="in-progress"?"#fff8e1":"#e3f2fd"};
  color: ${e=>e.$status==="in-progress"?"#f57c00":"#1e88e5"};
`,u8=l.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${e=>e.theme.colors.text.primary};
`,h8=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
`,m8=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 16px;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,f0=l.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,p8=l.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,f8=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`,g8=l.div`
  display: flex;
  flex-direction: column;
`,x8=l.div`
  font-size: 15px;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 4px;
`,y8=l.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
`,v8=l.div`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.$grade>=90?"#2e7d32":e.$grade>=80?"#388e3c":e.$grade>=70?"#f57c00":"#d32f2f"};
`,g0=l.a`
  display: block;
  text-align: center;
  font-size: 14px;
  color: ${e=>e.theme.colors.primary};
  text-decoration: none;
  padding: 12px 0 0;
  margin-top: 12px;
  border-top: 1px solid ${e=>e.theme.colors.border.light};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`,b8=l.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,w8=l.div`
  display: flex;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`,$8=l.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${e=>`${e.theme.colors.primary}15`};
  color: ${e=>e.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,j8=l.div`
  flex: 1;
`,k8=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`,C8=l.div`
  font-size: 15px;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,S8=l.div`
  font-size: 14px;
  font-weight: 500;
  color: ${e=>e.theme.colors.primary};
`,P8=l.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 8px;
`,T8=l.div`
  height: 4px;
  width: 100%;
  background-color: ${e=>e.theme.colors.background.hover};
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  margin-bottom: 8px;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${e=>e.$progress}%;
    background-color: ${e=>e.theme.colors.primary};
    border-radius: 2px;
  }
`,A8=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
`,M8=()=>{const e=Es(),[t,r]=$.useState(""),[n,i]=$.useState("all"),[s,a]=$.useState(!1),[c,d]=$.useState(null),u=[{id:1,name:"Algebra Fundamentals",subject:"Mathematics",grade:"10-A",students:24,room:"Room 101",schedule:"Mon, Wed, Fri - 9:00 AM",progress:65,coverImage:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80"},{id:2,name:"Physics Principles",subject:"Physics",grade:"11-B",students:20,room:"Lab 3",schedule:"Tue, Thu - 11:30 AM",progress:48,coverImage:"https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80"},{id:3,name:"Chemistry Fundamentals",subject:"Chemistry",grade:"12-C",students:22,room:"Lab 2",schedule:"Mon, Wed - 2:15 PM",progress:72,coverImage:"https://images.unsplash.com/photo-1616198814651-e71f960c3180?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80"},{id:4,name:"Geometry",subject:"Mathematics",grade:"10-B",students:25,room:"Room 102",schedule:"Tue, Thu - 9:00 AM",progress:58,coverImage:"https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80"},{id:5,name:"Biology 101",subject:"Biology",grade:"11-A",students:23,room:"Lab 1",schedule:"Mon, Wed, Fri - 11:00 AM",progress:82,coverImage:"https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80"}],h=f=>{r(f.target.value)},m=f=>{i(f),a(!1)},p=u.filter(f=>{const g=f.name.toLowerCase().includes(t.toLowerCase())||f.subject.toLowerCase().includes(t.toLowerCase())||f.grade.toLowerCase().includes(t.toLowerCase());return n==="all"?g:n==="inProgress"?g&&f.progress<100&&f.progress>0:n==="notStarted"?g&&f.progress===0:n==="completed"?g&&f.progress===100:g}),b=()=>{const f=window.innerWidth;return f>=1600?4:f>=1280?3:f>=768?2:1},[v,j]=$.useState(b());le.useEffect(()=>{const f=()=>{j(b())};return window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]);const P=f=>{e(`/teacher/courses/${f}`)},y=(f,g)=>{g.stopPropagation(),d(c===f?null:f)};return o.jsxs(z8,{as:D.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[o.jsxs(D8,{children:[o.jsxs("div",{children:[o.jsx(E8,{children:"My Courses"}),o.jsx(L8,{children:"Manage your teaching subjects and classes"})]}),o.jsx(R8,{children:o.jsxs(Bd,{children:[o.jsx(fr,{}),o.jsx("span",{children:"Add Course"})]})})]}),o.jsxs(I8,{children:[o.jsxs(F8,{children:[o.jsx(N8,{children:o.jsx(Se,{})}),o.jsx(B8,{type:"text",placeholder:"Search courses...",value:t,onChange:h})]}),o.jsxs(O8,{children:[o.jsxs(V8,{onClick:()=>a(!s),children:[o.jsx(Nt,{}),o.jsx("span",{children:"Filter"})]}),s&&o.jsxs(_8,{children:[o.jsx(ka,{onClick:()=>m("all"),$isActive:n==="all",children:"All Courses"}),o.jsx(ka,{onClick:()=>m("inProgress"),$isActive:n==="inProgress",children:"In Progress"}),o.jsx(ka,{onClick:()=>m("notStarted"),$isActive:n==="notStarted",children:"Not Started"}),o.jsx(ka,{onClick:()=>m("completed"),$isActive:n==="completed",children:"Completed"})]})]})]}),p.length===0?o.jsxs(sM,{children:[o.jsx(aM,{children:o.jsx(Le,{size:48})}),o.jsx(lM,{children:"No courses found"}),o.jsx(cM,{children:t?`No results matching "${t}". Try a different search term.`:"You haven't been assigned any courses yet."})]}):o.jsx(W8,{$columns:v,children:p.map(f=>o.jsxs(U8,{onClick:()=>P(f.id),as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[o.jsxs(H8,{children:[o.jsx(G8,{$imageUrl:f.coverImage}),o.jsx(Y8,{children:f.subject}),o.jsxs(q8,{onClick:g=>y(f.id,g),children:[o.jsx(Ns,{}),c===f.id&&o.jsxs(Q8,{as:D.div,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.2},children:[o.jsxs(Od,{onClick:g=>{g.stopPropagation(),e(`/teacher/courses/${f.id}`)},children:[o.jsx(lp,{}),o.jsx("span",{children:"View Details"})]}),o.jsxs(Od,{children:[o.jsx(pr,{}),o.jsx("span",{children:"Edit Course"})]}),o.jsxs(Od,{children:[o.jsx(It,{}),o.jsx("span",{children:"Delete Course"})]})]})]})]}),o.jsxs(K8,{children:[o.jsx(X8,{children:f.name}),o.jsxs(J8,{children:["Class ",f.grade]}),o.jsxs(Z8,{children:[o.jsxs(x0,{children:[o.jsx(y0,{$type:"students",children:o.jsx(Ce,{})}),o.jsxs(v0,{children:[f.students," Students"]})]}),o.jsxs(x0,{children:[o.jsx(y0,{$type:"schedule",children:o.jsx(Ae,{})}),o.jsx(v0,{children:f.schedule.split(" - ")[0]})]})]}),o.jsxs(eM,{children:[o.jsx(tM,{children:"Course Progress"}),o.jsx(rM,{children:o.jsx(nM,{$percentage:f.progress})}),o.jsxs(oM,{children:[f.progress,"%"]})]}),o.jsxs(iM,{children:[o.jsxs(Bd,{$small:!0,children:[o.jsx(Ce,{}),o.jsx("span",{children:"Students"})]}),o.jsxs(Bd,{$small:!0,children:[o.jsx(sp,{}),o.jsx("span",{children:"Progress"})]})]})]})]},f.id))})]})},z8=l.div`
  padding: 1rem 0;
`,D8=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`,E8=l.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  color: ${e=>e.theme.colors.text.primary};
`,L8=l.p`
  margin: 0.5rem 0 0;
  color: ${e=>e.theme.colors.text.secondary};
`,R8=l.div`
  display: flex;
  gap: 1rem;
`,Bd=l.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: ${e=>e.$small?"0.5rem 0.75rem":"0.75rem 1rem"};
  background-color: ${e=>e.theme.colors.primary[500]};
  color: white;
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: ${e=>e.$small?"0.75rem":"0.875rem"};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${e=>e.theme.shadows.sm};
  
  svg {
    font-size: ${e=>e.$small?"0.875rem":"1rem"};
  }
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[600]};
  }
`,I8=l.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`,F8=l.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`,N8=l.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>e.theme.colors.text.tertiary};
`,B8=l.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: ${e=>e.theme.borderRadius.md};
  border: 1px solid ${e=>e.theme.colors.border.light};
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.875rem;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[300]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
`,O8=l.div`
  position: relative;
`,V8=l.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
  }
`,_8=l.div`
  position: absolute;
  right: 0;
  top: calc(100% + 0.5rem);
  width: 200px;
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  box-shadow: ${e=>e.theme.shadows.md};
  z-index: 10;
  overflow: hidden;
`,ka=l.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${e=>e.$isActive?e.theme.colors.background.tertiary:"transparent"};
  color: ${e=>e.$isActive?e.theme.colors.primary[500]:e.theme.colors.text.primary};
  font-weight: ${e=>e.$isActive?"500":"normal"};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
  }
`,W8=l.div`
  display: grid;
  grid-template-columns: repeat(${e=>e.$columns}, 1fr);
  gap: 2rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.xl}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,U8=l.div`
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadows.sm};
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    box-shadow: ${e=>e.theme.shadows.md};
    transform: translateY(-4px);
  }
`,H8=l.div`
  position: relative;
  height: 140px;
`,G8=l.div`
  width: 100%;
  height: 100%;
  background-image: url(${e=>e.$imageUrl});
  background-size: cover;
  background-position: center;
`,Y8=l.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.4rem 0.75rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: ${e=>e.theme.borderRadius.md};
`,q8=l.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`,Q8=l.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 160px;
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  box-shadow: ${e=>e.theme.shadows.md};
  z-index: 20;
  overflow: hidden;
  margin-top: 0.5rem;
`,Od=l.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.primary};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
  }
  
  svg {
    color: ${e=>e.theme.colors.text.secondary};
  }
`,K8=l.div`
  padding: 1.5rem;
`,X8=l.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.25rem;
  color: ${e=>e.theme.colors.text.primary};
`,J8=l.div`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 1rem;
`,Z8=l.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,x0=l.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,y0=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${e=>e.$type==="students"?e.theme.colors.primary[100]:e.theme.colors.success[100]};
  color: ${e=>e.$type==="students"?e.theme.colors.primary[500]:e.theme.colors.success[500]};
`,v0=l.div`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
`,eM=l.div`
  margin-bottom: 1.5rem;
`,tM=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${e=>e.theme.colors.text.primary};
`,rM=l.div`
  height: 6px;
  width: 100%;
  background-color: ${e=>e.theme.colors.background.tertiary};
  border-radius: ${e=>e.theme.borderRadius.full};
  overflow: hidden;
  margin-bottom: 0.5rem;
`,nM=l.div`
  height: 100%;
  width: ${e=>e.$percentage}%;
  background-color: ${e=>e.$percentage>=80?e.theme.colors.success[500]:e.$percentage>=40?e.theme.colors.warning[500]:e.theme.colors.danger[500]};
  border-radius: ${e=>e.theme.borderRadius.full};
  transition: width 0.3s ease;
`,oM=l.div`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
  text-align: right;
`,iM=l.div`
  display: flex;
  gap: 0.75rem;
`,sM=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  text-align: center;
`,aM=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.background.tertiary};
  color: ${e=>e.theme.colors.primary[500]};
  margin-bottom: 1.5rem;
`,lM=l.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: ${e=>e.theme.colors.text.primary};
`,cM=l.p`
  font-size: 1rem;
  color: ${e=>e.theme.colors.text.secondary};
  max-width: 400px;
  margin: 0;
`,dM=()=>{const[e,t]=$.useState(""),[r,n]=$.useState("all"),[i,s]=$.useState(!1),[a,c]=$.useState(null),[d,u]=$.useState(!1),[h,m]=$.useState("name"),[p,b]=$.useState("asc"),v=[{id:1,name:"John Doe",email:"john.doe@school.edu",grade:"10-A",courses:["Algebra Fundamentals","Geometry"],attendance:92,performance:85,status:"active",avatar:"https://randomuser.me/api/portraits/men/32.jpg"},{id:2,name:"Jane Smith",email:"jane.smith@school.edu",grade:"10-A",courses:["Algebra Fundamentals"],attendance:98,performance:92,status:"active",avatar:"https://randomuser.me/api/portraits/women/44.jpg"},{id:3,name:"Michael Johnson",email:"michael.j@school.edu",grade:"11-B",courses:["Physics Principles"],attendance:78,performance:65,status:"active",avatar:"https://randomuser.me/api/portraits/men/52.jpg"},{id:4,name:"Emily Davis",email:"emily.d@school.edu",grade:"10-B",courses:["Geometry"],attendance:88,performance:78,status:"active",avatar:"https://randomuser.me/api/portraits/women/67.jpg"},{id:5,name:"Robert Wilson",email:"robert.w@school.edu",grade:"12-C",courses:["Chemistry Fundamentals"],attendance:65,performance:70,status:"inactive",avatar:"https://randomuser.me/api/portraits/men/22.jpg"},{id:6,name:"Sarah Brown",email:"sarah.b@school.edu",grade:"11-A",courses:["Biology 101"],attendance:95,performance:88,status:"active",avatar:"https://randomuser.me/api/portraits/women/33.jpg"},{id:7,name:"James Miller",email:"james.m@school.edu",grade:"10-A",courses:["Algebra Fundamentals","Geometry"],attendance:89,performance:76,status:"active",avatar:"https://randomuser.me/api/portraits/men/42.jpg"},{id:8,name:"Olivia Martinez",email:"olivia.m@school.edu",grade:"12-C",courses:["Chemistry Fundamentals"],attendance:82,performance:94,status:"active",avatar:"https://randomuser.me/api/portraits/women/24.jpg"}],j=[...new Set(v.flatMap(k=>k.courses))],P=k=>{t(k.target.value)},y=k=>{n(k),s(!1)},f=k=>{c(k),u(!1)},g=k=>{h===k?b(p==="asc"?"desc":"asc"):(m(k),b("asc"))},C=[...v.filter(k=>{const S=k.name.toLowerCase().includes(e.toLowerCase())||k.email.toLowerCase().includes(e.toLowerCase())||k.grade.toLowerCase().includes(e.toLowerCase()),w=r==="all"||r==="active"&&k.status==="active"||r==="inactive"&&k.status==="inactive"||r==="highPerformers"&&k.performance>=85||r==="needsHelp"&&k.performance<70,A=!a||k.courses.includes(a);return S&&w&&A})].sort((k,S)=>{let w="",A="";switch(h){case"name":w=k.name,A=S.name;break;case"grade":w=k.grade,A=S.grade;break;case"attendance":w=k.attendance,A=S.attendance;break;case"performance":w=k.performance,A=S.performance;break;default:w=k.name,A=S.name}return typeof w=="string"&&typeof A=="string"?p==="asc"?w.localeCompare(A):A.localeCompare(w):p==="asc"?w-A:A-w});return o.jsxs(uM,{as:D.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[o.jsxs(hM,{children:[o.jsxs("div",{children:[o.jsx(mM,{children:"Students"}),o.jsx(pM,{children:"Manage and monitor student progress across your courses"})]}),o.jsx(fM,{children:o.jsxs(gM,{children:[o.jsx(Hn,{}),o.jsx("span",{children:"Export Data"})]})})]}),o.jsxs(xM,{children:[o.jsxs(yM,{children:[o.jsx(vM,{children:o.jsx(Se,{})}),o.jsx(bM,{type:"text",placeholder:"Search students...",value:e,onChange:P})]}),o.jsxs(wM,{children:[o.jsxs($M,{onClick:()=>s(!i),children:[o.jsx(Nt,{}),o.jsx("span",{children:"Filter"})]}),i&&o.jsxs(jM,{children:[o.jsx(yi,{onClick:()=>y("all"),$isActive:r==="all",children:"All Students"}),o.jsx(yi,{onClick:()=>y("active"),$isActive:r==="active",children:"Active Students"}),o.jsx(yi,{onClick:()=>y("inactive"),$isActive:r==="inactive",children:"Inactive Students"}),o.jsxs(yi,{onClick:()=>y("highPerformers"),$isActive:r==="highPerformers",children:["High Performers (",">","85%)"]}),o.jsxs(yi,{onClick:()=>y("needsHelp"),$isActive:r==="needsHelp",children:["Needs Help (","<","70%)"]})]})]}),o.jsxs(kM,{children:[o.jsxs(CM,{onClick:()=>u(!d),children:[o.jsx(Le,{}),o.jsx("span",{children:a||"All Courses"}),o.jsx(de,{style:{transform:d?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s ease"}})]}),d&&o.jsxs(SM,{children:[o.jsx(b0,{onClick:()=>f(null),$isActive:a===null,children:"All Courses"}),j.map((k,S)=>o.jsx(b0,{onClick:()=>f(k),$isActive:a===k,children:k},S))]})]})]}),o.jsxs(PM,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsxs(an,{onClick:()=>g("name"),children:[o.jsx("span",{children:"Student Name"}),h==="name"&&o.jsx(Ca,{$direction:p,children:o.jsx(de,{})})]}),o.jsxs(an,{onClick:()=>g("grade"),children:[o.jsx("span",{children:"Class"}),h==="grade"&&o.jsx(Ca,{$direction:p,children:o.jsx(de,{})})]}),o.jsx(an,{children:o.jsx("span",{children:"Courses"})}),o.jsxs(an,{onClick:()=>g("attendance"),children:[o.jsx("span",{children:"Attendance"}),h==="attendance"&&o.jsx(Ca,{$direction:p,children:o.jsx(de,{})})]}),o.jsxs(an,{onClick:()=>g("performance"),children:[o.jsx("span",{children:"Performance"}),h==="performance"&&o.jsx(Ca,{$direction:p,children:o.jsx(de,{})})]}),o.jsx(an,{children:o.jsx("span",{children:"Status"})}),o.jsx(an,{children:o.jsx("span",{children:"Actions"})})]})}),o.jsx("tbody",{children:C.length===0?o.jsx("tr",{children:o.jsx(AM,{colSpan:7,children:o.jsxs(MM,{children:[o.jsx(Ce,{size:24}),o.jsx("p",{children:"No students found matching your filters"})]})})}):C.map(k=>o.jsxs(TM,{children:[o.jsx(ln,{children:o.jsxs(zM,{children:[o.jsx(DM,{src:k.avatar||"https://via.placeholder.com/40",alt:k.name}),o.jsxs(EM,{children:[o.jsx(LM,{children:k.name}),o.jsx(RM,{children:k.email})]})]})}),o.jsx(ln,{children:k.grade}),o.jsx(ln,{children:o.jsx(IM,{children:k.courses.map((S,w)=>o.jsx(FM,{children:S},w))})}),o.jsx(ln,{children:o.jsxs(NM,{$value:k.attendance,children:[k.attendance,"%"]})}),o.jsx(ln,{children:o.jsxs(BM,{children:[o.jsx(OM,{$value:k.performance}),o.jsxs(VM,{children:[k.performance,"%"]})]})}),o.jsx(ln,{children:o.jsx(_M,{$status:k.status,children:k.status==="active"?o.jsxs(o.Fragment,{children:[o.jsx(Zr,{}),o.jsx("span",{children:"Active"})]}):o.jsxs(o.Fragment,{children:[o.jsx(zc,{}),o.jsx("span",{children:"Inactive"})]})})}),o.jsx(ln,{children:o.jsxs(WM,{children:[o.jsx(Vd,{title:"View Profile",children:o.jsx(lp,{})}),o.jsx(Vd,{title:"Email Student",children:o.jsx(Gl,{})}),o.jsx(Vd,{title:"Edit",children:o.jsx(pr,{})})]})})]},k.id))})]})]})},uM=l.div`
  padding: 1rem 0;
`,hM=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`,mM=l.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
`,pM=l.p`
  margin: 0.5rem 0 0;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
`,fM=l.div`
  display: flex;
  gap: 1rem;
`,gM=l.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f5f5f5"}};
  }
`,xM=l.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`,yM=l.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`,vM=l.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#888"}};
`,bM=l.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  font-size: 0.875rem;
  
  &::placeholder {
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#888"}};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[300])||"#007BFF"}};
    box-shadow: 0 0 0 2px ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[100])||"#e6f7ff"}};
  }
`,wM=l.div`
  position: relative;
`,$M=l.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f5f5f5"}};
  }
`,jM=l.div`
  position: absolute;
  right: 0;
  top: calc(100% + 0.5rem);
  width: 220px;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.md)||"0 4px 6px rgba(0, 0, 0, 0.1)"}};
  z-index: 10;
  overflow: hidden;
`,yi=l.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${e=>{var t,r;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0":"transparent"}};
  color: ${e=>{var t,r,n,i;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#007bff":((i=(n=e.theme.colors)==null?void 0:n.text)==null?void 0:i.primary)||"#666"}};
  font-weight: ${e=>e.$isActive?"500":"normal"};
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  }
`,kM=l.div`
  position: relative;
`,CM=l.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 180px;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  }
  
  span {
    flex: 1;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,SM=l.div`
  position: absolute;
  right: 0;
  top: calc(100% + 0.5rem);
  width: 220px;
  max-height: 300px;
  overflow-y: auto;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.md)||"0 4px 6px rgba(0, 0, 0, 0.1)"}};
  z-index: 10;
`,b0=l.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${e=>{var t,r;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0":"transparent"}};
  color: ${e=>{var t,r,n,i;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#007bff":((i=(n=e.theme.colors)==null?void 0:n.text)==null?void 0:i.primary)||"#666"}};
  font-weight: ${e=>e.$isActive?"500":"normal"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  }
`,PM=l.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.lg)||"8px"}};
  overflow: hidden;
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.sm)||"0 0 10px rgba(0, 0, 0, 0.1)"}};
`,an=l.th`
  padding: 1rem;
  text-align: left;
  font-weight: 500;
  font-size: 0.875rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  border-bottom: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  position: relative;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  
  &:hover {
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  }
  
  span {
    display: inline-flex;
    align-items: center;
  }
`,Ca=l.span`
  margin-left: 0.25rem;
  display: inline-flex;
  transform: ${e=>e.$direction==="desc"?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;
`,TM=l.tr`
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.hover)||"#f0f0f0"}};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  }
`,ln=l.td`
  padding: 1rem;
  font-size: 0.875rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  vertical-align: middle;
`,AM=l.td`
  padding: 3rem 1rem;
  text-align: center;
`,MM=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#666"}};
  
  p {
    margin: 0;
  }
`,zM=l.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,DM=l.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`,EM=l.div`
  display: flex;
  flex-direction: column;
`,LM=l.div`
  font-weight: 500;
  margin-bottom: 0.25rem;
`,RM=l.div`
  font-size: 0.75rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#666"}};
`,IM=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,FM=l.div`
  padding: 0.25rem 0.5rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[50])||"#e0f0ff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[700])||"#007bff"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  font-size: 0.75rem;
  white-space: nowrap;
`,NM=l.div`
  font-weight: 500;
  color: ${e=>{var t,r,n,i,s,a;return e.$value>=90?((r=(t=e.theme.colors)==null?void 0:t.success)==null?void 0:r[500])||"#4caf50":e.$value>=75?((i=(n=e.theme.colors)==null?void 0:n.warning)==null?void 0:i[500])||"#ff9800":((a=(s=e.theme.colors)==null?void 0:s.danger)==null?void 0:a[500])||"#f44336"}};
`,BM=l.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,OM=l.div`
  width: 80px;
  height: 6px;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.full)||"50%"}};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${e=>e.$value}%;
    background-color: ${e=>{var t,r,n,i,s,a;return e.$value>=85?((r=(t=e.theme.colors)==null?void 0:t.success)==null?void 0:r[500])||"#4caf50":e.$value>=70?((i=(n=e.theme.colors)==null?void 0:n.warning)==null?void 0:i[500])||"#ff9800":((a=(s=e.theme.colors)==null?void 0:s.danger)==null?void 0:a[500])||"#f44336"}};
    border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.full)||"50%"}};
  }
`,VM=l.div`
  font-size: 0.75rem;
  font-weight: 500;
`,_M=l.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${e=>{var t,r,n,i;return e.$status==="active"?((r=(t=e.theme.colors)==null?void 0:t.success)==null?void 0:r[50])||"#e8f5e9":((i=(n=e.theme.colors)==null?void 0:n.danger)==null?void 0:i[50])||"#ffebee"}};
  color: ${e=>{var t,r,n,i;return e.$status==="active"?((r=(t=e.theme.colors)==null?void 0:t.success)==null?void 0:r[600])||"#43a047":((i=(n=e.theme.colors)==null?void 0:n.danger)==null?void 0:i[600])||"#c62828"}};
  
  svg {
    font-size: 0.875rem;
  }
`,WM=l.div`
  display: flex;
  gap: 0.5rem;
`,Vd=l.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  background-color: transparent;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#007bff"}};
  }
`,UM=()=>{var I;const[e,t]=$.useState(""),[r,n]=$.useState("all"),[i,s]=$.useState(!1),[a,c]=$.useState(null),[d,u]=$.useState(!1),[h,m]=$.useState("dueDate"),[p,b]=$.useState("asc"),[v,j]=$.useState(!1),[P,y]=$.useState([{id:1,title:"Algebraic Equations Quiz",description:"Complete the quiz on solving basic algebraic equations.",courseId:1,courseName:"Algebra Fundamentals",dueDate:"2023-12-15T23:59:59",totalPoints:50,status:"completed",submissionsCount:28,gradedCount:28,averageScore:42,createdAt:"2023-11-30T10:00:00"},{id:2,title:"Geometry Shapes Project",description:"Create a presentation identifying shapes in the real world.",courseId:2,courseName:"Geometry",dueDate:"2023-12-20T23:59:59",totalPoints:100,status:"published",submissionsCount:15,gradedCount:0,createdAt:"2023-12-01T14:30:00"},{id:3,title:"Midterm Exam Preparation",description:"Practice questions covering all topics from the first semester.",courseId:1,courseName:"Algebra Fundamentals",dueDate:"2023-12-18T23:59:59",totalPoints:25,status:"published",submissionsCount:10,gradedCount:0,createdAt:"2023-12-05T09:15:00"},{id:4,title:"Physics Lab Report",description:"Write a lab report on the pendulum experiment.",courseId:3,courseName:"Physics Principles",dueDate:"2023-12-12T23:59:59",totalPoints:80,status:"grading",submissionsCount:25,gradedCount:18,averageScore:70,createdAt:"2023-11-28T11:20:00"},{id:5,title:"Chemical Reactions Worksheet",description:"Complete the chemical equations and identify reaction types.",courseId:4,courseName:"Chemistry Fundamentals",dueDate:"2023-12-30T23:59:59",totalPoints:40,status:"draft",submissionsCount:0,gradedCount:0,createdAt:"2023-12-07T16:45:00"}]),[f,g]=$.useState({title:"",description:"",courseId:0,dueDate:"",totalPoints:100,status:"draft"}),[x,C]=$.useState({}),k=[...new Map(P.map(M=>[M.courseId,{id:M.courseId,name:M.courseName}])).values()],S=M=>{t(M.target.value)},w=M=>{n(M),s(!1)},A=M=>{c(M),u(!1)},T=M=>{h===M?b(p==="asc"?"desc":"asc"):(m(M),b("asc"))},U=M=>{const B={year:"numeric",month:"short",day:"numeric"};return new Date(M).toLocaleDateString(void 0,B)},L=M=>{switch(M){case"draft":return"Draft";case"published":return"Published";case"grading":return"Grading";case"completed":return"Completed";default:return"Unknown"}},V=[...P.filter(M=>{const B=M.title.toLowerCase().includes(e.toLowerCase())||M.description.toLowerCase().includes(e.toLowerCase())||M.courseName.toLowerCase().includes(e.toLowerCase()),F=r==="all"||r==="published"&&M.status==="published"||r==="draft"&&M.status==="draft"||r==="grading"&&M.status==="grading"||r==="completed"&&M.status==="completed"||r==="upcoming"&&new Date(M.dueDate)>new Date&&M.status!=="completed",_=!a||M.courseId===a;return B&&F&&_})].sort((M,B)=>{let F="",_="";switch(h){case"title":F=M.title,_=B.title;break;case"dueDate":F=new Date(M.dueDate),_=new Date(B.dueDate);break;case"course":F=M.courseName,_=B.courseName;break;case"status":F=M.status,_=B.status;break;case"submissions":F=M.submissionsCount,_=B.submissionsCount;break;default:F=new Date(M.dueDate),_=new Date(B.dueDate)}return typeof F=="string"&&typeof _=="string"?p==="asc"?F.localeCompare(_):_.localeCompare(F):F instanceof Date&&_ instanceof Date?p==="asc"?F.getTime()-_.getTime():_.getTime()-F.getTime():p==="asc"?F-_:_-F}),re=M=>{const{name:B,value:F}=M.target;g(_=>({..._,[B]:B==="totalPoints"?parseInt(F)||0:F})),x[B]&&C(_=>({..._,[B]:void 0}))},Q=()=>{const M={};return f.title.trim()||(M.title="Title is required"),f.description.trim()||(M.description="Description is required"),f.courseId||(M.courseId="Please select a course"),f.dueDate?new Date(f.dueDate)<new Date&&(M.dueDate="Due date cannot be in the past"):M.dueDate="Due date is required",f.totalPoints<=0&&(M.totalPoints="Points must be greater than 0"),C(M),Object.keys(M).length===0},ve=M=>{var F;if(M.preventDefault(),!Q())return;const B={id:Math.floor(Math.random()*1e4),title:f.title,description:f.description,courseId:f.courseId,courseName:((F=k.find(_=>_.id===f.courseId))==null?void 0:F.name)||"",dueDate:f.dueDate,totalPoints:f.totalPoints,status:f.status,submissionsCount:0,gradedCount:0,createdAt:new Date().toISOString()};y(_=>[B,..._]),g({title:"",description:"",courseId:0,dueDate:"",totalPoints:100,status:"draft"}),j(!1)};return o.jsxs(GM,{as:D.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[o.jsxs(YM,{children:[o.jsxs("div",{children:[o.jsx(qM,{children:"Assignments"}),o.jsx(QM,{children:"Create and manage assignments for your courses"})]}),o.jsxs(KM,{children:[o.jsxs(XM,{children:[o.jsx(Hn,{}),o.jsx("span",{children:"Export"})]}),o.jsxs(JM,{onClick:()=>j(!0),children:[o.jsx(fr,{}),o.jsx("span",{children:"New Assignment"})]})]})]}),o.jsxs(ZM,{children:[o.jsxs(ez,{children:[o.jsx(tz,{children:o.jsx(Se,{})}),o.jsx(rz,{type:"text",placeholder:"Search assignments...",value:e,onChange:S})]}),o.jsxs(nz,{children:[o.jsxs(oz,{onClick:()=>s(!i),children:[o.jsx(Nt,{}),o.jsx("span",{children:"Filter"})]}),i&&o.jsxs(iz,{children:[o.jsx(Kn,{onClick:()=>w("all"),$isActive:r==="all",children:"All Assignments"}),o.jsx(Kn,{onClick:()=>w("upcoming"),$isActive:r==="upcoming",children:"Upcoming"}),o.jsx(Kn,{onClick:()=>w("published"),$isActive:r==="published",children:"Published"}),o.jsx(Kn,{onClick:()=>w("grading"),$isActive:r==="grading",children:"Needs Grading"}),o.jsx(Kn,{onClick:()=>w("completed"),$isActive:r==="completed",children:"Completed"}),o.jsx(Kn,{onClick:()=>w("draft"),$isActive:r==="draft",children:"Drafts"})]})]}),o.jsxs(sz,{children:[o.jsxs(az,{onClick:()=>u(!d),children:[o.jsx(Le,{}),o.jsx("span",{children:a?(I=k.find(M=>M.id===a))==null?void 0:I.name:"All Courses"}),o.jsx(de,{style:{transform:d?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s ease"}})]}),d&&o.jsxs(lz,{children:[o.jsx(w0,{onClick:()=>A(null),$isActive:a===null,children:"All Courses"}),k.map(M=>o.jsx(w0,{onClick:()=>A(M.id),$isActive:a===M.id,children:M.name},M.id))]})]})]}),o.jsxs(cz,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsxs(Xn,{onClick:()=>T("title"),children:[o.jsx("span",{children:"Assignment"}),h==="title"&&o.jsx(vi,{$direction:p,children:o.jsx(de,{})})]}),o.jsxs(Xn,{onClick:()=>T("course"),children:[o.jsx("span",{children:"Course"}),h==="course"&&o.jsx(vi,{$direction:p,children:o.jsx(de,{})})]}),o.jsxs(Xn,{onClick:()=>T("dueDate"),children:[o.jsx("span",{children:"Due Date"}),h==="dueDate"&&o.jsx(vi,{$direction:p,children:o.jsx(de,{})})]}),o.jsxs(Xn,{onClick:()=>T("submissions"),children:[o.jsx("span",{children:"Submissions"}),h==="submissions"&&o.jsx(vi,{$direction:p,children:o.jsx(de,{})})]}),o.jsxs(Xn,{onClick:()=>T("status"),children:[o.jsx("span",{children:"Status"}),h==="status"&&o.jsx(vi,{$direction:p,children:o.jsx(de,{})})]}),o.jsx(Xn,{children:o.jsx("span",{children:"Actions"})})]})}),o.jsx("tbody",{children:V.length===0?o.jsx("tr",{children:o.jsx(uz,{colSpan:6,children:o.jsxs(hz,{children:[o.jsx(Qt,{size:24}),o.jsx("p",{children:"No assignments found matching your filters"})]})})}):V.map(M=>o.jsxs(dz,{children:[o.jsx(Jn,{children:o.jsxs(mz,{children:[o.jsx(pz,{children:o.jsx(Qt,{})}),o.jsxs(fz,{children:[o.jsx(gz,{children:M.title}),o.jsx(xz,{children:M.description})]})]})}),o.jsx(Jn,{children:o.jsx(yz,{children:M.courseName})}),o.jsx(Jn,{children:o.jsxs(vz,{children:[o.jsx(bz,{children:o.jsx(Ae,{})}),o.jsx("span",{children:U(M.dueDate)})]})}),o.jsx(Jn,{children:o.jsxs(wz,{children:[o.jsxs($z,{children:[o.jsx(Ce,{size:14}),o.jsxs("span",{children:[M.submissionsCount," / ",M.gradedCount]})]}),M.averageScore!==void 0&&o.jsx(jz,{children:o.jsxs("span",{children:["Avg: ",M.averageScore,"/",M.totalPoints]})})]})}),o.jsx(Jn,{children:o.jsxs(kz,{$status:M.status,children:[HM(M.status),o.jsx("span",{children:L(M.status)})]})}),o.jsx(Jn,{children:o.jsxs(Cz,{children:[o.jsx(Sa,{title:"View Details",children:o.jsx(lp,{})}),o.jsx(Sa,{title:"Edit Assignment",children:o.jsx(pr,{})}),M.status!=="published"&&M.status!=="grading"&&o.jsx(Sa,{title:"Delete Assignment",children:o.jsx(It,{})}),M.status==="draft"&&o.jsx(Sa,{title:"Publish Assignment",children:o.jsx(Pw,{})})]})})]},M.id))})]}),v&&o.jsxs(Sz,{children:[o.jsxs(Tz,{as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[o.jsxs(Az,{children:[o.jsx(Mz,{children:"Create New Assignment"}),o.jsx(zz,{onClick:()=>j(!1),children:"×"})]}),o.jsx(Dz,{children:o.jsxs("form",{onSubmit:ve,children:[o.jsxs(Zn,{children:[o.jsx(eo,{htmlFor:"title",children:"Assignment Title"}),o.jsx(_d,{id:"title",name:"title",type:"text",placeholder:"Enter assignment title",value:f.title,onChange:re,$hasError:!!x.title}),x.title&&o.jsx(bi,{children:x.title})]}),o.jsxs(Zn,{children:[o.jsx(eo,{htmlFor:"description",children:"Description"}),o.jsx(Lz,{id:"description",name:"description",placeholder:"Enter assignment instructions",value:f.description,onChange:re,$hasError:!!x.description,rows:4}),x.description&&o.jsx(bi,{children:x.description})]}),o.jsxs($0,{children:[o.jsxs(Zn,{children:[o.jsx(eo,{htmlFor:"courseId",children:"Course"}),o.jsxs(j0,{id:"courseId",name:"courseId",value:f.courseId,onChange:re,$hasError:!!x.courseId,children:[o.jsx("option",{value:"",children:"Select a course"}),k.map(M=>o.jsx("option",{value:M.id,children:M.name},M.id))]}),x.courseId&&o.jsx(bi,{children:x.courseId})]}),o.jsxs(Zn,{children:[o.jsx(eo,{htmlFor:"dueDate",children:"Due Date"}),o.jsx(_d,{id:"dueDate",name:"dueDate",type:"datetime-local",value:f.dueDate,onChange:re,$hasError:!!x.dueDate}),x.dueDate&&o.jsx(bi,{children:x.dueDate})]})]}),o.jsxs($0,{children:[o.jsxs(Zn,{children:[o.jsx(eo,{htmlFor:"totalPoints",children:"Total Points"}),o.jsx(_d,{id:"totalPoints",name:"totalPoints",type:"number",min:"0",value:f.totalPoints,onChange:re,$hasError:!!x.totalPoints}),x.totalPoints&&o.jsx(bi,{children:x.totalPoints})]}),o.jsxs(Zn,{children:[o.jsx(eo,{htmlFor:"status",children:"Status"}),o.jsxs(j0,{id:"status",name:"status",value:f.status,onChange:re,children:[o.jsx("option",{value:"draft",children:"Save as Draft"}),o.jsx("option",{value:"published",children:"Publish Immediately"})]})]})]}),o.jsxs(Ez,{children:[o.jsx(Iz,{type:"button",onClick:()=>j(!1),children:"Cancel"}),o.jsx(Rz,{type:"submit",children:"Create Assignment"})]})]})})]}),o.jsx(Pz,{onClick:()=>j(!1)})]})]})},HM=e=>{switch(e){case"draft":return o.jsx(Qt,{});case"published":return o.jsx(js,{});case"grading":return o.jsx(Qe,{});case"completed":return o.jsx(ap,{});default:return o.jsx(Qt,{})}},GM=l.div`
  padding: 1rem 0;
`,YM=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`,qM=l.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
`,QM=l.p`
  margin: 0.5rem 0 0;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
`,KM=l.div`
  display: flex;
  gap: 1rem;
`,XM=l.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f5f5f5"}};
  }
`,JM=l.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#0ea5e9"}};
  color: #fff;
  border: none;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[600])||"#0284c7"}};
  }
`,ZM=l.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`,ez=l.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`,tz=l.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#888"}};
`,rz=l.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  font-size: 0.875rem;
  
  &::placeholder {
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#888"}};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[300])||"#7dd3fc"}};
    box-shadow: 0 0 0 2px ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[100])||"#e0f2fe"}};
  }
`,nz=l.div`
  position: relative;
`,oz=l.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f5f5f5"}};
  }
`,iz=l.div`
  position: absolute;
  right: 0;
  top: calc(100% + 0.5rem);
  width: 220px;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.md)||"0 4px 6px rgba(0, 0, 0, 0.1)"}};
  z-index: 10;
  overflow: hidden;
`,Kn=l.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${e=>{var t,r;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0":"transparent"}};
  color: ${e=>{var t,r,n,i;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#0ea5e9":((i=(n=e.theme.colors)==null?void 0:n.text)==null?void 0:i.primary)||"#000"}};
  font-weight: ${e=>e.$isActive?"500":"normal"};
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  }
`,sz=l.div`
  position: relative;
`,az=l.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 180px;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f5f5f5"}};
  }
  
  span {
    flex: 1;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,lz=l.div`
  position: absolute;
  right: 0;
  top: calc(100% + 0.5rem);
  width: 220px;
  max-height: 300px;
  overflow-y: auto;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.md)||"0 4px 6px rgba(0, 0, 0, 0.1)"}};
  z-index: 10;
`,w0=l.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${e=>{var t,r;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0":"transparent"}};
  color: ${e=>{var t,r,n,i;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#0ea5e9":((i=(n=e.theme.colors)==null?void 0:n.text)==null?void 0:i.primary)||"#000"}};
  font-weight: ${e=>e.$isActive?"500":"normal"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  }
`,cz=l.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.lg)||"8px"}};
  overflow: hidden;
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.sm)||"0 1px 3px rgba(0, 0, 0, 0.1)"}};
`,Xn=l.th`
  padding: 1rem;
  text-align: left;
  font-weight: 500;
  font-size: 0.875rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  border-bottom: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  position: relative;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  
  &:hover {
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  }
  
  span {
    display: inline-flex;
    align-items: center;
  }
`,vi=l.span`
  margin-left: 0.25rem;
  display: inline-flex;
  transform: ${e=>e.$direction==="desc"?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;
`,dz=l.tr`
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.hover)||"#f0f0f0"}};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  }
`,Jn=l.td`
  padding: 1rem;
  font-size: 0.875rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  vertical-align: middle;
`,uz=l.td`
  padding: 3rem 1rem;
  text-align: center;
`,hz=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#666"}};
  
  p {
    margin: 0;
  }
`,mz=l.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`,pz=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[50])||"#e0f2fe"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#0ea5e9"}};
  flex-shrink: 0;
  font-size: 1rem;
`,fz=l.div`
  display: flex;
  flex-direction: column;
`,gz=l.div`
  font-weight: 500;
  margin-bottom: 0.25rem;
`,xz=l.div`
  font-size: 0.75rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#666"}};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,yz=l.div`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[50])||"#e0f2fe"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[700])||"#0369a1"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
`,vz=l.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
`,bz=l.span`
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#666"}};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
`,wz=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,$z=l.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  font-size: 0.875rem;
`,jz=l.div`
  font-size: 0.75rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#666"}};
`,kz=l.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${e=>{var t,r,n,i,s,a,c,d,u,h;switch(e.$status){case"draft":return((r=(t=e.theme.colors)==null?void 0:t.neutral)==null?void 0:r[100])||"#f1f5f9";case"published":return((i=(n=e.theme.colors)==null?void 0:n.primary)==null?void 0:i[50])||"#e0f2fe";case"grading":return((a=(s=e.theme.colors)==null?void 0:s.warning)==null?void 0:a[50])||"#fffbeb";case"completed":return((d=(c=e.theme.colors)==null?void 0:c.success)==null?void 0:d[50])||"#f0fdf4";default:return((h=(u=e.theme.colors)==null?void 0:u.neutral)==null?void 0:h[100])||"#f1f5f9"}}};
  color: ${e=>{var t,r,n,i,s,a,c,d,u,h;switch(e.$status){case"draft":return((r=(t=e.theme.colors)==null?void 0:t.neutral)==null?void 0:r[700])||"#334155";case"published":return((i=(n=e.theme.colors)==null?void 0:n.primary)==null?void 0:i[700])||"#0369a1";case"grading":return((a=(s=e.theme.colors)==null?void 0:s.warning)==null?void 0:a[700])||"#b45309";case"completed":return((d=(c=e.theme.colors)==null?void 0:c.success)==null?void 0:d[700])||"#15803d";default:return((h=(u=e.theme.colors)==null?void 0:u.neutral)==null?void 0:h[700])||"#334155"}}};
  
  svg {
    font-size: 0.875rem;
  }
`,Cz=l.div`
  display: flex;
  gap: 0.5rem;
`,Sa=l.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  background-color: transparent;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#0ea5e9"}};
  }
`,Sz=l.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${e=>{var t;return((t=e.theme.zIndices)==null?void 0:t.modal)||1e3}};
`,Pz=l.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`,Tz=l.div`
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.lg)||"8px"}};
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.xl)||"0 10px 25px rgba(0, 0, 0, 0.1)"}};
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  z-index: 1;
  position: relative;
`,Az=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#eee"}};
`,Mz=l.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
`,zz=l.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#888"}};
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  }
`,Dz=l.div`
  padding: 1.5rem;
`,Ez=l.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`,Zn=l.div`
  margin-bottom: 1.25rem;
  width: 100%;
`,$0=l.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0;
  
  @media (max-width: ${e=>{var t;return((t=e.theme.breakpoints)==null?void 0:t.md)||"768px"}}) {
    flex-direction: column;
  }
`,eo=l.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
`,_d=l.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  border: 1px solid ${e=>{var t,r,n,i;return e.$hasError?((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[500])||"#ef4444":((i=(n=e.theme.colors)==null?void 0:n.border)==null?void 0:i.light)||"#ddd"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: ${e=>{var t,r,n,i;return e.$hasError?((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[500])||"#ef4444":((i=(n=e.theme.colors)==null?void 0:n.primary)==null?void 0:i[300])||"#7dd3fc"}};
    box-shadow: 0 0 0 2px ${e=>{var t,r,n,i;return e.$hasError?((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[100])||"#fee2e2":((i=(n=e.theme.colors)==null?void 0:n.primary)==null?void 0:i[100])||"#e0f2fe"}};
  }
`,Lz=l.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  border: 1px solid ${e=>{var t,r,n,i;return e.$hasError?((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[500])||"#ef4444":((i=(n=e.theme.colors)==null?void 0:n.border)==null?void 0:i.light)||"#ddd"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  font-size: 0.875rem;
  resize: vertical;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: ${e=>{var t,r,n,i;return e.$hasError?((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[500])||"#ef4444":((i=(n=e.theme.colors)==null?void 0:n.primary)==null?void 0:i[300])||"#7dd3fc"}};
    box-shadow: 0 0 0 2px ${e=>{var t,r,n,i;return e.$hasError?((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[100])||"#fee2e2":((i=(n=e.theme.colors)==null?void 0:n.primary)==null?void 0:i[100])||"#e0f2fe"}};
  }
`,j0=l.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  border: 1px solid ${e=>{var t,r,n,i;return e.$hasError?((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[500])||"#ef4444":((i=(n=e.theme.colors)==null?void 0:n.border)==null?void 0:i.light)||"#ddd"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  font-size: 0.875rem;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
  
  &:focus {
    outline: none;
    border-color: ${e=>{var t,r,n,i;return e.$hasError?((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[500])||"#ef4444":((i=(n=e.theme.colors)==null?void 0:n.primary)==null?void 0:i[300])||"#7dd3fc"}};
    box-shadow: 0 0 0 2px ${e=>{var t,r,n,i;return e.$hasError?((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[100])||"#fee2e2":((i=(n=e.theme.colors)==null?void 0:n.primary)==null?void 0:i[100])||"#e0f2fe"}};
  }
`,bi=l.div`
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[500])||"#ef4444"}};
  font-size: 0.75rem;
  margin-top: 0.25rem;
`,Rz=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#0ea5e9"}};
  color: #fff;
  border: none;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[600])||"#0284c7"}};
  }
`,Iz=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  }
`,Fz=()=>{var ge,Ue,Bt,Je,St,He;const[e,t]=$.useState(""),[r,n]=$.useState(null),[i,s]=$.useState(null),[a,c]=$.useState(!1),[d,u]=$.useState(!1),[h,m]=$.useState("all"),[p,b]=$.useState(!1),[v,j]=$.useState("name"),[P,y]=$.useState("asc"),[f,g]=$.useState(null),[x,C]=$.useState(""),k=[{id:1,name:"John Doe",email:"john.doe@school.edu",avatar:"https://randomuser.me/api/portraits/men/32.jpg"},{id:2,name:"Jane Smith",email:"jane.smith@school.edu",avatar:"https://randomuser.me/api/portraits/women/44.jpg"},{id:3,name:"Michael Johnson",email:"michael.j@school.edu",avatar:"https://randomuser.me/api/portraits/men/52.jpg"},{id:4,name:"Emily Davis",email:"emily.d@school.edu",avatar:"https://randomuser.me/api/portraits/women/67.jpg"},{id:5,name:"Robert Wilson",email:"robert.w@school.edu",avatar:"https://randomuser.me/api/portraits/men/22.jpg"},{id:6,name:"Sarah Brown",email:"sarah.b@school.edu",avatar:"https://randomuser.me/api/portraits/women/33.jpg"},{id:7,name:"James Miller",email:"james.m@school.edu",avatar:"https://randomuser.me/api/portraits/men/42.jpg"},{id:8,name:"Olivia Martinez",email:"olivia.m@school.edu",avatar:"https://randomuser.me/api/portraits/women/24.jpg"}],S=[{id:1,name:"Algebra Fundamentals",code:"MATH101",students:30},{id:2,name:"Geometry",code:"MATH102",students:25},{id:3,name:"Physics Principles",code:"PHYS101",students:28},{id:4,name:"Chemistry Fundamentals",code:"CHEM101",students:22}],w=[{id:1,title:"Algebraic Equations Quiz",dueDate:"2023-12-15",totalPoints:50,weight:10},{id:2,title:"Geometry Shapes Project",dueDate:"2023-12-20",totalPoints:100,weight:20},{id:3,title:"Midterm Exam Preparation",dueDate:"2023-12-18",totalPoints:25,weight:5},{id:4,title:"Physics Lab Report",dueDate:"2023-12-12",totalPoints:80,weight:15},{id:5,title:"Chemical Reactions Worksheet",dueDate:"2023-12-30",totalPoints:40,weight:8}],T=(()=>{const z=[];let xe=1;return S.forEach(ne=>{w.filter(Z=>ne.id===1&&[1,3].includes(Z.id)||ne.id===2&&[2].includes(Z.id)||ne.id===3&&[4].includes(Z.id)||ne.id===4&&[5].includes(Z.id)).forEach(Z=>{k.forEach(Pt=>{const si=(()=>{const Rc=Math.random();return Rc<.6?"graded":Rc<.8?"pending":Rc<.95?"missing":"excused"})(),gp=si==="graded"||si==="pending",Jw=si==="graded"?Math.floor(Math.random()*(Z.totalPoints+1)):null;z.push({id:xe++,studentId:Pt.id,student:Pt,courseId:ne.id,course:ne,assignmentId:Z.id,assignment:Z,score:Jw,submitted:gp,submittedAt:gp?"2023-12-10T15:30:00":void 0,feedback:si==="graded"?"Good work overall. Pay attention to problem 3.":void 0,status:si})})})}),z})(),L=[...T.filter(z=>{const xe=z.student.name.toLowerCase().includes(e.toLowerCase())||z.student.email.toLowerCase().includes(e.toLowerCase())||z.course.name.toLowerCase().includes(e.toLowerCase())||z.assignment.title.toLowerCase().includes(e.toLowerCase()),ne=!r||z.courseId===r,Z=!i||z.assignmentId===i,Pt=h==="all"||h==="graded"&&z.status==="graded"||h==="pending"&&z.status==="pending"||h==="missing"&&z.status==="missing"||h==="excused"&&z.status==="excused";return xe&&ne&&Z&&Pt})].sort((z,xe)=>{let ne="",Z="";switch(v){case"name":ne=z.student.name,Z=xe.student.name;break;case"course":ne=z.course.name,Z=xe.course.name;break;case"assignment":ne=z.assignment.title,Z=xe.assignment.title;break;case"score":ne=z.score,Z=xe.score;break;case"status":ne=z.status,Z=xe.status;break;default:ne=z.student.name,Z=xe.student.name}return typeof ne=="string"&&typeof Z=="string"?P==="asc"?ne.localeCompare(Z):Z.localeCompare(ne):ne===null&&Z===null?0:ne===null?P==="asc"?1:-1:Z===null?P==="asc"?-1:1:P==="asc"?ne-Z:Z-ne}),R=[...new Set(T.map(z=>z.courseId))].map(z=>S.find(xe=>xe.id===z)).filter(Boolean),V=[...new Set(T.filter(z=>!r||z.courseId===r).map(z=>z.assignmentId))].map(z=>w.find(xe=>xe.id===z)).filter(Boolean),re=z=>{t(z.target.value)},Q=z=>{n(z),c(!1),s(null)},ve=z=>{s(z),u(!1)},I=z=>{m(z),b(!1)},M=z=>{v===z?y(P==="asc"?"desc":"asc"):(j(z),y("asc"))},B=(z,xe)=>{g(z),C(xe===null?"":xe.toString())},F=z=>{g(null),C("")},_=()=>{g(null),C("")},gt=(z,xe)=>z===null?"N/A":`${Math.round(z/xe*100)}%`,Ne=z=>{switch(z){case"graded":return"Graded";case"pending":return"Pending";case"missing":return"Missing";case"excused":return"Excused";default:return"Unknown"}},it=()=>{if(!i)return"N/A";const z=T.filter(Pt=>Pt.assignmentId===i&&Pt.status==="graded");if(z.length===0)return"N/A";const ne=z.reduce((Pt,fp)=>Pt+(fp.score||0),0)/z.length,Z=w.find(Pt=>Pt.id===i);return Z?`${ne.toFixed(1)} / ${Z.totalPoints} (${Math.round(ne/Z.totalPoints*100)}%)`:"N/A"};return o.jsxs(Bz,{as:D.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[o.jsxs(Oz,{children:[o.jsxs("div",{children:[o.jsx(Vz,{children:"Grades"}),o.jsx(_z,{children:"Manage and review student grades for your courses"})]}),o.jsx(Wz,{children:o.jsxs(Uz,{children:[o.jsx(Hn,{}),o.jsx("span",{children:"Export Grades"})]})})]}),o.jsxs(Hz,{children:[o.jsxs(Gz,{children:[o.jsxs(qz,{children:[o.jsx(Qz,{children:o.jsx(Se,{})}),o.jsx(Kz,{type:"text",placeholder:"Search students or assignments...",value:e,onChange:re})]}),o.jsxs(Xz,{children:[o.jsxs(Jz,{onClick:()=>b(!p),children:[o.jsx(Nt,{}),o.jsx("span",{children:"Filter"})]}),p&&o.jsxs(Zz,{children:[o.jsx(wi,{onClick:()=>I("all"),$isActive:h==="all",children:"All Grades"}),o.jsx(wi,{onClick:()=>I("graded"),$isActive:h==="graded",children:"Graded"}),o.jsx(wi,{onClick:()=>I("pending"),$isActive:h==="pending",children:"Pending"}),o.jsx(wi,{onClick:()=>I("missing"),$isActive:h==="missing",children:"Missing"}),o.jsx(wi,{onClick:()=>I("excused"),$isActive:h==="excused",children:"Excused"})]})]})]}),o.jsxs(Yz,{children:[o.jsxs(eD,{children:[o.jsxs(Iw,{onClick:()=>c(!a),children:[o.jsx(Le,{}),o.jsx("span",{children:r?(ge=R.find(z=>z.id===r))==null?void 0:ge.name:"All Courses"}),o.jsx(de,{style:{transform:a?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s ease"}})]}),a&&o.jsxs(Fw,{children:[o.jsx(Dh,{onClick:()=>Q(null),$isActive:r===null,children:"All Courses"}),R.map(z=>o.jsxs(Dh,{onClick:()=>Q(z.id),$isActive:r===z.id,children:[z.name," (",z.code,")"]},z.id))]})]}),o.jsxs(tD,{children:[o.jsxs(rD,{onClick:()=>u(!d),children:[o.jsx(Qt,{}),o.jsx("span",{children:i?(Ue=V.find(z=>z.id===i))==null?void 0:Ue.title:"All Assignments"}),o.jsx(de,{style:{transform:d?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s ease"}})]}),d&&o.jsxs(nD,{children:[o.jsx(k0,{onClick:()=>ve(null),$isActive:i===null,children:"All Assignments"}),V.map(z=>o.jsxs(k0,{onClick:()=>ve(z.id),$isActive:i===z.id,children:[z.title," (",z.totalPoints," pts)"]},z.id))]})]})]})]}),i&&o.jsxs(oD,{children:[o.jsx(iD,{children:(Bt=V.find(z=>z.id===i))==null?void 0:Bt.title}),o.jsxs(sD,{children:[o.jsxs(Pa,{children:[o.jsx(Ta,{children:"Due Date:"}),o.jsx(Aa,{children:new Date(((Je=V.find(z=>z.id===i))==null?void 0:Je.dueDate)||"").toLocaleDateString()})]}),o.jsxs(Pa,{children:[o.jsx(Ta,{children:"Total Points:"}),o.jsx(Aa,{children:(St=V.find(z=>z.id===i))==null?void 0:St.totalPoints})]}),o.jsxs(Pa,{children:[o.jsx(Ta,{children:"Weight:"}),o.jsxs(Aa,{children:[(He=V.find(z=>z.id===i))==null?void 0:He.weight,"%"]})]}),o.jsxs(Pa,{children:[o.jsx(Ta,{children:"Class Average:"}),o.jsx(Aa,{children:it()})]})]})]}),o.jsxs(aD,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsxs(cn,{onClick:()=>M("name"),children:[o.jsx("span",{children:"Student"}),v==="name"&&o.jsx($i,{$direction:P,children:o.jsx(de,{})})]}),o.jsxs(cn,{onClick:()=>M("course"),children:[o.jsx("span",{children:"Course"}),v==="course"&&o.jsx($i,{$direction:P,children:o.jsx(de,{})})]}),o.jsxs(cn,{onClick:()=>M("assignment"),children:[o.jsx("span",{children:"Assignment"}),v==="assignment"&&o.jsx($i,{$direction:P,children:o.jsx(de,{})})]}),o.jsxs(cn,{onClick:()=>M("score"),children:[o.jsx("span",{children:"Score"}),v==="score"&&o.jsx($i,{$direction:P,children:o.jsx(de,{})})]}),o.jsx(cn,{children:o.jsx("span",{children:"Percentage"})}),o.jsxs(cn,{onClick:()=>M("status"),children:[o.jsx("span",{children:"Status"}),v==="status"&&o.jsx($i,{$direction:P,children:o.jsx(de,{})})]}),o.jsx(cn,{children:o.jsx("span",{children:"Actions"})})]})}),o.jsx("tbody",{children:L.length===0?o.jsx("tr",{children:o.jsx(cD,{colSpan:7,children:o.jsxs(dD,{children:[o.jsx(Ce,{size:24}),o.jsx("p",{children:"No grades found matching your filters"})]})})}):L.map(z=>o.jsxs(lD,{children:[o.jsx(dn,{children:o.jsxs(uD,{children:[o.jsx(hD,{src:z.student.avatar||"https://via.placeholder.com/40",alt:z.student.name}),o.jsxs(mD,{children:[o.jsx(pD,{children:z.student.name}),o.jsx(fD,{children:z.student.email})]})]})}),o.jsx(dn,{children:o.jsxs(gD,{children:[z.course.name,o.jsx(xD,{children:z.course.code})]})}),o.jsx(dn,{children:o.jsx(yD,{children:z.assignment.title})}),o.jsx(dn,{children:f===z.id?o.jsxs(kD,{children:[o.jsx(CD,{type:"number",value:x,onChange:xe=>C(xe.target.value),min:"0",max:z.assignment.totalPoints}),o.jsxs("span",{children:["/ ",z.assignment.totalPoints]}),o.jsxs(SD,{children:[o.jsx(C0,{onClick:()=>F(z.id),children:o.jsx(Zr,{})}),o.jsx(C0,{onClick:_,children:o.jsx(zc,{})})]})]}):o.jsx(vD,{children:z.score!==null?`${z.score} / ${z.assignment.totalPoints}`:"Not graded"})}),o.jsx(dn,{children:o.jsx(bD,{$value:z.score,$total:z.assignment.totalPoints,children:gt(z.score,z.assignment.totalPoints)})}),o.jsx(dn,{children:o.jsxs(wD,{$status:z.status,children:[Nz(z.status),o.jsx("span",{children:Ne(z.status)})]})}),o.jsx(dn,{children:o.jsx($D,{children:z.status!=="excused"&&o.jsx(jD,{title:"Edit Grade",onClick:()=>B(z.id,z.score),disabled:f!==null&&f!==z.id,children:o.jsx(pr,{})})})})]},z.id))})]})]})},Nz=e=>{switch(e){case"graded":return o.jsx(Zr,{});case"pending":return o.jsx(js,{});case"missing":return o.jsx(zc,{});case"excused":return o.jsx(dt,{});default:return o.jsx(js,{})}},Bz=l.div`
  padding: 1rem 0;
`,Oz=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`,Vz=l.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
`,_z=l.p`
  margin: 0.5rem 0 0;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
`,Wz=l.div`
  display: flex;
  gap: 1rem;
`,Uz=l.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f5f5f5"}};
  }
`,Hz=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`,Gz=l.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,Yz=l.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,qz=l.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`,Qz=l.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#888"}};
`,Kz=l.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  font-size: 0.875rem;
  
  &::placeholder {
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#888"}};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[300])||"#7dd3fc"}};
    box-shadow: 0 0 0 2px ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[100])||"#e0f2fe"}};
  }
`,Xz=l.div`
  position: relative;
`,Jz=l.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f5f5f5"}};
  }
`,Zz=l.div`
  position: absolute;
  right: 0;
  top: calc(100% + 0.5rem);
  width: 220px;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.md)||"0 4px 6px rgba(0, 0, 0, 0.1)"}};
  z-index: 10;
  overflow: hidden;
`,wi=l.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${e=>{var t,r;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0":"transparent"}};
  color: ${e=>{var t,r,n,i;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#0ea5e9":((i=(n=e.theme.colors)==null?void 0:n.text)==null?void 0:i.primary)||"#000"}};
  font-weight: ${e=>e.$isActive?"500":"normal"};
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  }
`,eD=l.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`,Iw=l.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f5f5f5"}};
  }
  
  span {
    flex: 1;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Fw=l.div`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 0.5rem);
  max-height: 300px;
  overflow-y: auto;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.md)||"0 4px 6px rgba(0, 0, 0, 0.1)"}};
  z-index: 10;
`,Dh=l.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${e=>{var t,r;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0":"transparent"}};
  color: ${e=>{var t,r,n,i;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#0ea5e9":((i=(n=e.theme.colors)==null?void 0:n.text)==null?void 0:i.primary)||"#000"}};
  font-weight: ${e=>e.$isActive?"500":"normal"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  }
`,tD=l.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`,rD=l(Iw)``,nD=l(Fw)``,k0=l(Dh)``,oD=l.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.lg)||"8px"}};
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.sm)||"0 1px 3px rgba(0, 0, 0, 0.1)"}};
`,iD=l.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
`,sD=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`,Pa=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Ta=l.span`
  font-size: 0.75rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#666"}};
`,Aa=l.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
`,aD=l.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.lg)||"8px"}};
  overflow: hidden;
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.sm)||"0 1px 3px rgba(0, 0, 0, 0.1)"}};
`,cn=l.th`
  padding: 1rem;
  text-align: left;
  font-weight: 500;
  font-size: 0.875rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  border-bottom: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  position: relative;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  
  &:hover {
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  }
  
  span {
    display: inline-flex;
    align-items: center;
  }
`,$i=l.span`
  margin-left: 0.25rem;
  display: inline-flex;
  transform: ${e=>e.$direction==="desc"?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;
`,lD=l.tr`
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.hover)||"#f0f0f0"}};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  }
`,dn=l.td`
  padding: 1rem;
  font-size: 0.875rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  vertical-align: middle;
`,cD=l.td`
  padding: 3rem 1rem;
  text-align: center;
`,dD=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#666"}};
  
  p {
    margin: 0;
  }
`,uD=l.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,hD=l.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`,mD=l.div`
  display: flex;
  flex-direction: column;
`,pD=l.div`
  font-weight: 500;
`,fD=l.div`
  font-size: 0.75rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#666"}};
`,gD=l.div`
  display: inline-flex;
  flex-direction: column;
  padding: 0.25rem 0.5rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[50])||"#e0f2fe"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[700])||"#0369a1"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  font-size: 0.75rem;
  font-weight: 500;
  max-width: 150px;
`,xD=l.span`
  font-size: 0.7rem;
  opacity: 0.8;
  margin-top: 0.1rem;
`,yD=l.div`
  font-size: 0.875rem;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,vD=l.div`
  font-weight: 500;
`,bD=l.div`
  font-weight: 500;
  color: ${e=>{var r,n,i,s,a,c,d,u;if(e.$value===null)return((n=(r=e.theme.colors)==null?void 0:r.text)==null?void 0:n.tertiary)||"#666";const t=e.$value/e.$total*100;return t>=90?((s=(i=e.theme.colors)==null?void 0:i.success)==null?void 0:s[600])||"#16a34a":t>=70?((c=(a=e.theme.colors)==null?void 0:a.warning)==null?void 0:c[500])||"#f59e0b":((u=(d=e.theme.colors)==null?void 0:d.danger)==null?void 0:u[500])||"#ef4444"}};
`,wD=l.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${e=>{var t,r,n,i,s,a,c,d,u,h;switch(e.$status){case"graded":return((r=(t=e.theme.colors)==null?void 0:t.success)==null?void 0:r[50])||"#f0fdf4";case"pending":return((i=(n=e.theme.colors)==null?void 0:n.warning)==null?void 0:i[50])||"#fffbeb";case"missing":return((a=(s=e.theme.colors)==null?void 0:s.danger)==null?void 0:a[50])||"#fef2f2";case"excused":return((d=(c=e.theme.colors)==null?void 0:c.neutral)==null?void 0:d[100])||"#f1f5f9";default:return((h=(u=e.theme.colors)==null?void 0:u.neutral)==null?void 0:h[100])||"#f1f5f9"}}};
  color: ${e=>{var t,r,n,i,s,a,c,d,u,h;switch(e.$status){case"graded":return((r=(t=e.theme.colors)==null?void 0:t.success)==null?void 0:r[700])||"#15803d";case"pending":return((i=(n=e.theme.colors)==null?void 0:n.warning)==null?void 0:i[700])||"#b45309";case"missing":return((a=(s=e.theme.colors)==null?void 0:s.danger)==null?void 0:a[700])||"#b91c1c";case"excused":return((d=(c=e.theme.colors)==null?void 0:c.neutral)==null?void 0:d[700])||"#334155";default:return((h=(u=e.theme.colors)==null?void 0:u.neutral)==null?void 0:h[700])||"#334155"}}};
  
  svg {
    font-size: 0.875rem;
  }
`,$D=l.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`,jD=l.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  background-color: transparent;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#0ea5e9"}};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,kD=l.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
`,CD=l.input`
  width: 50px;
  padding: 0.25rem 0.5rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[300])||"#7dd3fc"}};
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[100])||"#e0f2fe"}};
  }
`,SD=l.div`
  display: flex;
  gap: 0.25rem;
  margin-left: 0.5rem;
`,C0=l.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  background-color: transparent;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
    
    &:first-child {
      color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.success)==null?void 0:r[500])||"#22c55e"}};
    }
    
    &:last-child {
      color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[500])||"#ef4444"}};
    }
  }
`,PD=({isOpen:e,onClose:t,onSubmit:r,initialData:n,formTitle:i})=>{const[s,a]=$.useState({name:"",email:"",role:"Student",status:"active"}),[c,d]=$.useState(""),[u,h]=$.useState(""),[m,p]=$.useState({}),[b,v]=$.useState(!1);$.useEffect(()=>{n&&a({...n})},[n]);const j=x=>{const{name:C,value:k}=x.target;a(S=>({...S,[C]:k})),m[C]&&p(S=>{const w={...S};return delete w[C],w})},P=x=>{d(x.target.value),m.password&&p(C=>{const k={...C};return delete k.password,k})},y=x=>{h(x.target.value),m.confirmPassword&&p(C=>{const k={...C};return delete k.confirmPassword,k})},f=()=>{var C,k;const x={};return(C=s.name)!=null&&C.trim()||(x.name="Name is required"),(k=s.email)!=null&&k.trim()?/\S+@\S+\.\S+/.test(s.email)||(x.email="Email is invalid"):x.email="Email is required",s.role||(x.role="Role is required"),s.status||(x.status="Status is required"),n!=null&&n.id||(c?c.length<8&&(x.password="Password must be at least 8 characters"):x.password="Password is required",c!==u&&(x.confirmPassword="Passwords do not match")),p(x),Object.keys(x).length===0},g=x=>{if(x.preventDefault(),f()){v(!0);const C=n!=null&&n.id?s:{...s,password:c};r(C),n!=null&&n.id||(a({name:"",email:"",role:"Student",status:"active"}),d(""),h("")),v(!1)}};return e?o.jsx(TD,{as:D.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:o.jsxs(AD,{as:D.div,initial:{scale:.9,y:50,opacity:0},animate:{scale:1,y:0,opacity:1},exit:{scale:.9,y:50,opacity:0},transition:{type:"spring",damping:25},children:[o.jsxs(MD,{children:[o.jsx(zD,{children:i}),o.jsx(DD,{onClick:t,children:o.jsx(Ft,{})})]}),o.jsxs("form",{onSubmit:g,children:[o.jsxs(ED,{children:[o.jsxs(to,{children:[o.jsxs(ro,{htmlFor:"name",children:[o.jsx(dt,{}),o.jsx("span",{children:"Full Name"})]}),o.jsx(Ma,{id:"name",name:"name",value:s.name||"",onChange:j,placeholder:"Enter full name",$hasError:!!m.name}),m.name&&o.jsx(no,{children:m.name})]}),o.jsxs(to,{children:[o.jsxs(ro,{htmlFor:"email",children:[o.jsx(Gl,{}),o.jsx("span",{children:"Email Address"})]}),o.jsx(Ma,{id:"email",name:"email",type:"email",value:s.email||"",onChange:j,placeholder:"Enter email address",$hasError:!!m.email}),m.email&&o.jsx(no,{children:m.email})]}),!(n!=null&&n.id)&&o.jsxs(o.Fragment,{children:[o.jsxs(to,{children:[o.jsxs(ro,{htmlFor:"password",children:[o.jsx(Ss,{}),o.jsx("span",{children:"Password"})]}),o.jsx(Ma,{id:"password",name:"password",type:"password",value:c,onChange:P,placeholder:"Enter password",$hasError:!!m.password}),m.password&&o.jsx(no,{children:m.password})]}),o.jsxs(to,{children:[o.jsxs(ro,{htmlFor:"confirmPassword",children:[o.jsx(Ss,{}),o.jsx("span",{children:"Confirm Password"})]}),o.jsx(Ma,{id:"confirmPassword",name:"confirmPassword",type:"password",value:u,onChange:y,placeholder:"Confirm password",$hasError:!!m.confirmPassword}),m.confirmPassword&&o.jsx(no,{children:m.confirmPassword})]})]}),o.jsxs(to,{children:[o.jsxs(ro,{htmlFor:"role",children:[o.jsx(Zo,{}),o.jsx("span",{children:"Role"})]}),o.jsxs(S0,{id:"role",name:"role",value:s.role||"",onChange:j,$hasError:!!m.role,children:[o.jsx("option",{value:"",children:"Select a role"}),o.jsx("option",{value:"Admin",children:"Admin"}),o.jsx("option",{value:"Teacher",children:"Teacher"}),o.jsx("option",{value:"Student",children:"Student"}),o.jsx("option",{value:"Parent",children:"Parent"})]}),m.role&&o.jsx(no,{children:m.role})]}),o.jsxs(to,{children:[o.jsxs(ro,{htmlFor:"status",children:[o.jsx(Ae,{}),o.jsx("span",{children:"Status"})]}),o.jsxs(S0,{id:"status",name:"status",value:s.status||"",onChange:j,$hasError:!!m.status,children:[o.jsx("option",{value:"active",children:"Active"}),o.jsx("option",{value:"inactive",children:"Inactive"})]}),m.status&&o.jsx(no,{children:m.status})]})]}),o.jsxs(LD,{children:[o.jsx(RD,{type:"button",onClick:t,children:"Cancel"}),o.jsx(ID,{type:"submit",disabled:b,children:b?"Saving...":n!=null&&n.id?"Update User":"Create User"})]})]})]})}):null},TD=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: ${e=>e.theme.spacing[4]};
`,AD=l.div`
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  box-shadow: ${e=>e.theme.shadows.lg};
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  padding: ${e=>e.theme.spacing[6]};
`,MD=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing[6]};
`,zD=l.h2`
  margin: 0;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1.5rem;
  font-weight: 600;
`,DD=l.button`
  background: none;
  border: none;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${e=>e.theme.borderRadius.full};
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
    color: ${e=>e.theme.colors.text.primary};
  }
`,ED=l.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${e=>e.theme.spacing[5]};
  margin-bottom: ${e=>e.theme.spacing[6]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,to=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[2]};
`,ro=l.label`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
  font-weight: 500;
`,Ma=l.input`
  padding: ${e=>e.theme.spacing[3]};
  border: 1px solid ${e=>e.$hasError?e.theme.colors.accent.red:e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.95rem;
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  transition: all ${e=>e.theme.transition.fast};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.$hasError?e.theme.colors.accent.red:e.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${e=>e.$hasError?"rgba(220, 38, 38, 0.1)":e.theme.colors.primary[100]};
  }
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
`,S0=l.select`
  padding: ${e=>e.theme.spacing[3]};
  border: 1px solid ${e=>e.$hasError?e.theme.colors.accent.red:e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.95rem;
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  transition: all ${e=>e.theme.transition.fast};
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
  padding-right: 40px;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.$hasError?e.theme.colors.accent.red:e.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${e=>e.$hasError?"rgba(220, 38, 38, 0.1)":e.theme.colors.primary[100]};
  }
`,no=l.div`
  color: ${e=>e.theme.colors.accent.red};
  font-size: 0.8rem;
  margin-top: ${e=>e.theme.spacing[1]};
`,LD=l.div`
  display: flex;
  justify-content: flex-end;
  gap: ${e=>e.theme.spacing[3]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
  }
`,RD=l.button`
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  background-color: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.primary};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    order: 2;
  }
`,ID=l.button`
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  border: 1px solid ${e=>e.theme.colors.primary[600]};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  min-width: 120px;
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[700]};
    border-color: ${e=>e.theme.colors.primary[700]};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    order: 1;
    margin-bottom: ${e=>e.theme.spacing[2]};
  }
`,FD=[{id:"1",name:"John Doe",email:"john.doe@example.com",role:"Admin",status:"active",lastLogin:"2023-06-12 09:30 AM",createdAt:"2023-01-15"},{id:"2",name:"Jane Smith",email:"jane.smith@example.com",role:"Teacher",status:"active",lastLogin:"2023-06-10 02:45 PM",createdAt:"2023-02-20"},{id:"3",name:"Robert Johnson",email:"robert.johnson@example.com",role:"Teacher",status:"inactive",lastLogin:"2023-05-28 11:20 AM",createdAt:"2023-03-05"},{id:"4",name:"Emily Davis",email:"emily.davis@example.com",role:"Student",status:"active",lastLogin:"2023-06-11 10:15 AM",createdAt:"2023-01-30"},{id:"5",name:"Michael Wilson",email:"michael.wilson@example.com",role:"Student",status:"inactive",lastLogin:"2023-06-01 04:10 PM",createdAt:"2023-02-10"},{id:"6",name:"Sarah Brown",email:"sarah.brown@example.com",role:"Parent",status:"active",lastLogin:"2023-06-09 12:30 PM",createdAt:"2023-04-15"},{id:"7",name:"David Miller",email:"david.miller@example.com",role:"Admin",status:"active",lastLogin:"2023-06-12 08:45 AM",createdAt:"2023-01-05"}],ND=()=>{const[e,t]=$.useState([]),[r,n]=$.useState(!1),[i,s]=$.useState(null),[a,c]=$.useState(""),[d,u]=$.useState(""),[h,m]=$.useState(""),[p,b]=$.useState(!1),v=FD.filter(T=>{const U=T.name.toLowerCase().includes(a.toLowerCase())||T.email.toLowerCase().includes(a.toLowerCase()),L=d?T.role===d:!0,R=h?T.status===h:!0;return U&&L&&R}),j=T=>{c(T.target.value)},P=T=>{u(T.target.value)},y=T=>{m(T.target.value)},f=T=>{e.includes(T)?t(e.filter(U=>U!==T)):t([...e,T])},g=()=>{e.length===v.length?t([]):t(v.map(T=>T.id))},x=()=>{b(!p)},C=()=>{s(null),n(!0)},k=T=>{s(T),n(!0)},S=T=>{console.log(`Delete user with ID: ${T}`)},w=T=>{console.log(i?"Updating user:":"Creating new user:",T),n(!1)},A=()=>{n(!1),s(null)};return o.jsxs(BD,{as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[o.jsxs(OD,{children:[o.jsxs("div",{children:[o.jsx(VD,{children:"User Management"}),o.jsx(_D,{children:"Manage system users, roles and permissions"})]}),o.jsxs(WD,{onClick:C,children:[o.jsx(y6,{}),o.jsx("span",{children:"Add New User"})]})]}),o.jsxs(UD,{children:[o.jsxs(HD,{children:[o.jsxs(GD,{children:[o.jsx(YD,{children:o.jsx(Se,{})}),o.jsx(qD,{placeholder:"Search users...",value:a,onChange:j})]}),o.jsxs(QD,{children:[o.jsxs(KD,{children:[o.jsx(Nt,{}),o.jsx("span",{children:"Filters:"})]}),o.jsxs(P0,{value:d,onChange:P,children:[o.jsx("option",{value:"",children:"All Roles"}),o.jsx("option",{value:"Admin",children:"Admin"}),o.jsx("option",{value:"Teacher",children:"Teacher"}),o.jsx("option",{value:"Student",children:"Student"}),o.jsx("option",{value:"Parent",children:"Parent"})]}),o.jsxs(P0,{value:h,onChange:y,children:[o.jsx("option",{value:"",children:"All Status"}),o.jsx("option",{value:"active",children:"Active"}),o.jsx("option",{value:"inactive",children:"Inactive"})]})]})]}),o.jsxs(T0,{children:[e.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs(XD,{children:[e.length," selected"]}),o.jsx(A0,{onClick:x,children:o.jsx(Ns,{})}),p&&o.jsxs(JD,{children:[o.jsxs(M0,{children:[o.jsx(Cs,{}),o.jsx("span",{children:"Edit Selected"})]}),o.jsxs(M0,{children:[o.jsx(It,{}),o.jsx("span",{children:"Delete Selected"})]})]})]}),o.jsx(A0,{title:"Export to CSV",children:o.jsx(Hn,{})})]})]}),o.jsxs(ZD,{children:[o.jsx(eE,{children:o.jsxs(tE,{children:[o.jsx(un,{width:"50px",children:o.jsx(z0,{children:o.jsx(D0,{type:"checkbox",checked:e.length===v.length&&v.length>0,onChange:g})})}),o.jsx(un,{width:"25%",children:"Name"}),o.jsx(un,{width:"25%",children:"Email"}),o.jsx(un,{width:"15%",children:"Role"}),o.jsx(un,{width:"15%",children:"Status"}),o.jsx(un,{width:"20%",children:"Last Login"}),o.jsx(un,{width:"100px",children:"Actions"})]})}),o.jsx(rE,{children:v.length>0?v.map(T=>o.jsxs(nE,{children:[o.jsx(hn,{children:o.jsx(z0,{children:o.jsx(D0,{type:"checkbox",checked:e.includes(T.id),onChange:()=>f(T.id)})})}),o.jsx(hn,{children:o.jsx(oE,{children:T.name})}),o.jsx(hn,{children:T.email}),o.jsx(hn,{children:o.jsx(iE,{$role:T.role.toLowerCase(),children:T.role})}),o.jsx(hn,{children:o.jsx(sE,{$status:T.status,children:T.status==="active"?"Active":"Inactive"})}),o.jsx(hn,{children:T.lastLogin}),o.jsx(hn,{children:o.jsxs(T0,{children:[o.jsx(E0,{onClick:()=>k(T),title:"Edit user",children:o.jsx(Cs,{})}),o.jsx(E0,{onClick:()=>S(T.id),title:"Delete user",children:o.jsx(It,{})})]})})]},T.id)):o.jsx(aE,{children:o.jsx(lE,{colSpan:7,children:o.jsx(cE,{children:"No users found matching your search criteria."})})})})]}),o.jsxs(dE,{children:[o.jsxs(uE,{children:["Showing 1 to ",v.length," of ",v.length," entries"]}),o.jsxs(hE,{children:[o.jsx(za,{$isActive:!0,children:"1"}),o.jsx(za,{$isActive:!1,children:"2"}),o.jsx(za,{$isActive:!1,children:"3"}),o.jsx(mE,{children:"..."}),o.jsx(za,{$isActive:!1,children:"10"})]})]}),o.jsx(PD,{isOpen:r,onClose:A,onSubmit:w,initialData:i||void 0,formTitle:i?"Edit User":"Add New User"})]})},BD=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[6]};
`,OD=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${e=>e.theme.spacing[4]};
  }
`,VD=l.h1`
  margin: 0;
  margin-bottom: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1.8rem;
`,_D=l.p`
  margin: 0;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 1rem;
`,WD=l.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[700]};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`,UD=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${e=>e.theme.spacing[4]};
  }
`,HD=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[4]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${e=>e.theme.spacing[3]};
    width: 100%;
  }
`,GD=l.div`
  position: relative;
  width: 300px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
  }
`,YD=l.div`
  position: absolute;
  left: ${e=>e.theme.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>e.theme.colors.text.tertiary};
`,qD=l.input`
  width: 100%;
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[2]} ${e.theme.spacing[2]} ${e.theme.spacing[8]}`};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.9rem;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
`,QD=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    flex-wrap: wrap;
  }
`,KD=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
`,P0=l.select`
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-grow: 1;
  }
`,T0=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  position: relative;
`,XD=l.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
`,A0=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.secondary};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
    color: ${e=>e.theme.colors.primary[600]};
  }
`,JD=l.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: ${e=>e.theme.spacing[1]};
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  box-shadow: ${e=>e.theme.shadows.md};
  z-index: 10;
  min-width: 200px;
`,M0=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  padding: ${e=>e.theme.spacing[3]};
  color: ${e=>e.theme.colors.text.primary};
  cursor: pointer;
  transition: background-color ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>e.theme.colors.border};
  }
`,ZD=l.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadows.sm};
`,eE=l.thead`
  background-color: ${e=>e.theme.colors.background.tertiary};
`,tE=l.tr``,un=l.th`
  padding: ${e=>e.theme.spacing[4]};
  font-size: 0.9rem;
  font-weight: 600;
  text-align: left;
  color: ${e=>e.theme.colors.text.secondary};
  white-space: nowrap;
  width: ${e=>e.width||"auto"};
`,rE=l.tbody``,nE=l.tr`
  transition: background-color ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>e.theme.colors.border};
  }
`,hn=l.td`
  padding: ${e=>e.theme.spacing[4]};
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.primary};
`,oE=l.div`
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,iE=l.div`
  display: inline-block;
  padding: ${e=>`${e.theme.spacing[1]} ${e.theme.spacing[2]}`};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.8rem;
  font-weight: 500;
  background-color: ${e=>{switch(e.$role){case"admin":return"rgba(79, 70, 229, 0.1)";case"teacher":return"rgba(16, 185, 129, 0.1)";case"student":return"rgba(245, 158, 11, 0.1)";case"parent":return"rgba(139, 92, 246, 0.1)";default:return"rgba(79, 70, 229, 0.1)"}}};
  color: ${e=>{switch(e.$role){case"admin":return"rgb(79, 70, 229)";case"teacher":return"rgb(16, 185, 129)";case"student":return"rgb(245, 158, 11)";case"parent":return"rgb(139, 92, 246)";default:return"rgb(79, 70, 229)"}}};
`,sE=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
  font-size: 0.9rem;
  color: ${e=>e.$status==="active"?e.theme.colors.accent.green:e.theme.colors.text.tertiary};
`,z0=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,D0=l.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`,E0=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: transparent;
  color: ${e=>e.theme.colors.text.secondary};
  border: none;
  border-radius: ${e=>e.theme.borderRadius.sm};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
    color: ${e=>e.theme.colors.primary[600]};
  }
`,aE=l.tr``,lE=l.td`
  padding: ${e=>e.theme.spacing[6]};
  text-align: center;
  color: ${e=>e.theme.colors.text.tertiary};
  font-style: italic;
`,cE=l.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.tertiary};
`,dE=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>e.theme.spacing[4]} 0;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${e=>e.theme.spacing[3]};
  }
`,uE=l.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
`,hE=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
`,za=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 ${e=>e.theme.spacing[2]};
  background-color: ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.background.secondary};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.primary};
  border: 1px solid ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.$isActive?e.theme.colors.primary[700]:e.theme.colors.background.tertiary};
  }
`,mE=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
`,pE=[{id:"1",name:"Mathematics",code:"MATH101",department:"Science",credits:4,description:"Introduction to calculus and algebra",status:"active",createdAt:"2023-01-15"},{id:"2",name:"Physics",code:"PHYS101",department:"Science",credits:4,description:"Basic principles of physics",status:"active",createdAt:"2023-01-20"},{id:"3",name:"English Literature",code:"ENG201",department:"Humanities",credits:3,description:"Study of classic literature and composition",status:"active",createdAt:"2023-02-05"},{id:"4",name:"World History",code:"HIST101",department:"Humanities",credits:3,description:"Survey of major historical events",status:"active",createdAt:"2023-01-30"},{id:"5",name:"Computer Science",code:"CS101",department:"Technology",credits:4,description:"Introduction to programming and algorithms",status:"active",createdAt:"2023-02-10"},{id:"6",name:"Biology",code:"BIO101",department:"Science",credits:4,description:"Study of living organisms",status:"active",createdAt:"2023-02-15"},{id:"7",name:"Chemistry",code:"CHEM101",department:"Science",credits:4,description:"Fundamentals of chemical principles",status:"inactive",createdAt:"2023-01-05"}],fE=()=>{const[e,t]=$.useState(""),[r,n]=$.useState(""),[i,s]=$.useState(""),[a,c]=$.useState([]),[d,u]=$.useState(!1),[h,m]=$.useState(!1),[p,b]=$.useState(null),v=pE.filter(w=>{const A=w.name.toLowerCase().includes(e.toLowerCase())||w.code.toLowerCase().includes(e.toLowerCase())||w.description.toLowerCase().includes(e.toLowerCase()),T=r?w.department===r:!0,U=i?w.status===i:!0;return A&&T&&U}),j=w=>{t(w.target.value)},P=w=>{n(w.target.value)},y=w=>{s(w.target.value)},f=w=>{a.includes(w)?c(a.filter(A=>A!==w)):c([...a,w])},g=()=>{a.length===v.length?c([]):c(v.map(w=>w.id))},x=()=>{u(!d)},C=()=>{b(null),m(!0)},k=w=>{b(w),m(!0)},S=w=>{console.log(`Delete subject with ID: ${w}`)};return o.jsxs(gE,{as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[o.jsxs(xE,{children:[o.jsxs("div",{children:[o.jsx(yE,{children:"Subject Management"}),o.jsx(vE,{children:"Manage courses, subjects and academic content"})]}),o.jsxs(bE,{onClick:C,children:[o.jsx(Le,{}),o.jsx("span",{children:"Add New Subject"})]})]}),o.jsxs(wE,{children:[o.jsxs($E,{children:[o.jsxs(jE,{children:[o.jsx(kE,{children:o.jsx(Se,{})}),o.jsx(CE,{placeholder:"Search subjects...",value:e,onChange:j})]}),o.jsxs(SE,{children:[o.jsxs(PE,{children:[o.jsx(Nt,{}),o.jsx("span",{children:"Filters:"})]}),o.jsxs(L0,{value:r,onChange:P,children:[o.jsx("option",{value:"",children:"All Departments"}),o.jsx("option",{value:"Science",children:"Science"}),o.jsx("option",{value:"Humanities",children:"Humanities"}),o.jsx("option",{value:"Technology",children:"Technology"}),o.jsx("option",{value:"Arts",children:"Arts"}),o.jsx("option",{value:"Business",children:"Business"})]}),o.jsxs(L0,{value:i,onChange:y,children:[o.jsx("option",{value:"",children:"All Status"}),o.jsx("option",{value:"active",children:"Active"}),o.jsx("option",{value:"inactive",children:"Inactive"})]})]})]}),o.jsxs(R0,{children:[a.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs(TE,{children:[a.length," selected"]}),o.jsx(I0,{onClick:x,children:o.jsx(Ns,{})}),d&&o.jsxs(AE,{children:[o.jsxs(F0,{children:[o.jsx(Cs,{}),o.jsx("span",{children:"Edit Selected"})]}),o.jsxs(F0,{children:[o.jsx(It,{}),o.jsx("span",{children:"Delete Selected"})]})]})]}),o.jsx(I0,{title:"Export to CSV",children:o.jsx(Hn,{})})]})]}),o.jsxs(ME,{children:[o.jsx(zE,{children:o.jsxs(DE,{children:[o.jsx(kr,{width:"50px",children:o.jsx(N0,{children:o.jsx(B0,{type:"checkbox",checked:a.length===v.length&&v.length>0,onChange:g})})}),o.jsx(kr,{width:"20%",children:"Subject Name"}),o.jsx(kr,{width:"10%",children:"Code"}),o.jsx(kr,{width:"15%",children:"Department"}),o.jsx(kr,{width:"10%",children:"Credits"}),o.jsx(kr,{width:"25%",children:"Description"}),o.jsx(kr,{width:"10%",children:"Status"}),o.jsx(kr,{width:"100px",children:"Actions"})]})}),o.jsx(EE,{children:v.length>0?v.map(w=>o.jsxs(LE,{children:[o.jsx(Cr,{children:o.jsx(N0,{children:o.jsx(B0,{type:"checkbox",checked:a.includes(w.id),onChange:()=>f(w.id)})})}),o.jsx(Cr,{children:o.jsx(RE,{children:w.name})}),o.jsx(Cr,{children:w.code}),o.jsx(Cr,{children:o.jsx(IE,{$department:w.department.toLowerCase(),children:w.department})}),o.jsx(Cr,{children:w.credits}),o.jsx(Cr,{children:o.jsx(FE,{children:w.description})}),o.jsx(Cr,{children:o.jsx(NE,{$status:w.status,children:w.status==="active"?"Active":"Inactive"})}),o.jsx(Cr,{children:o.jsxs(R0,{children:[o.jsx(O0,{onClick:()=>k(w),title:"Edit subject",children:o.jsx(Cs,{})}),o.jsx(O0,{onClick:()=>S(w.id),title:"Delete subject",children:o.jsx(It,{})})]})})]},w.id)):o.jsx(BE,{children:o.jsx(OE,{colSpan:8,children:o.jsx(VE,{children:"No subjects found matching your search criteria."})})})})]}),o.jsxs(_E,{children:[o.jsxs(WE,{children:["Showing 1 to ",v.length," of ",v.length," entries"]}),o.jsxs(UE,{children:[o.jsx(Da,{$isActive:!0,children:"1"}),o.jsx(Da,{$isActive:!1,children:"2"}),o.jsx(Da,{$isActive:!1,children:"3"}),o.jsx(HE,{children:"..."}),o.jsx(Da,{$isActive:!1,children:"10"})]})]})]})},gE=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[6]};
`,xE=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${e=>e.theme.spacing[4]};
  }
`,yE=l.h1`
  margin: 0;
  margin-bottom: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1.8rem;
`,vE=l.p`
  margin: 0;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 1rem;
`,bE=l.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[700]};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`,wE=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${e=>e.theme.spacing[4]};
  }
`,$E=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[4]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${e=>e.theme.spacing[3]};
    width: 100%;
  }
`,jE=l.div`
  position: relative;
  width: 300px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
  }
`,kE=l.div`
  position: absolute;
  left: ${e=>e.theme.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>e.theme.colors.text.tertiary};
`,CE=l.input`
  width: 100%;
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[2]} ${e.theme.spacing[2]} ${e.theme.spacing[8]}`};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.9rem;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
`,SE=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    flex-wrap: wrap;
  }
`,PE=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
`,L0=l.select`
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-grow: 1;
  }
`,R0=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  position: relative;
`,TE=l.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
`,I0=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.secondary};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
    color: ${e=>e.theme.colors.primary[600]};
  }
`,AE=l.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: ${e=>e.theme.spacing[1]};
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  box-shadow: ${e=>e.theme.shadows.md};
  z-index: 10;
  min-width: 200px;
`,F0=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  padding: ${e=>e.theme.spacing[3]};
  color: ${e=>e.theme.colors.text.primary};
  cursor: pointer;
  transition: background-color ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>e.theme.colors.border};
  }
`,ME=l.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadows.sm};
`,zE=l.thead`
  background-color: ${e=>e.theme.colors.background.tertiary};
`,DE=l.tr``,kr=l.th`
  padding: ${e=>e.theme.spacing[4]};
  font-size: 0.9rem;
  font-weight: 600;
  text-align: left;
  color: ${e=>e.theme.colors.text.secondary};
  white-space: nowrap;
  width: ${e=>e.width||"auto"};
`,EE=l.tbody``,LE=l.tr`
  transition: background-color ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>e.theme.colors.border};
  }
`,Cr=l.td`
  padding: ${e=>e.theme.spacing[4]};
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.primary};
`,RE=l.div`
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,IE=l.div`
  display: inline-block;
  padding: ${e=>`${e.theme.spacing[1]} ${e.theme.spacing[2]}`};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.8rem;
  font-weight: 500;
  background-color: ${e=>{switch(e.$department){case"science":return"rgba(16, 185, 129, 0.1)";case"humanities":return"rgba(79, 70, 229, 0.1)";case"technology":return"rgba(245, 158, 11, 0.1)";case"arts":return"rgba(236, 72, 153, 0.1)";case"business":return"rgba(59, 130, 246, 0.1)";default:return"rgba(107, 114, 128, 0.1)"}}};
  color: ${e=>{switch(e.$department){case"science":return"rgb(16, 185, 129)";case"humanities":return"rgb(79, 70, 229)";case"technology":return"rgb(245, 158, 11)";case"arts":return"rgb(236, 72, 153)";case"business":return"rgb(59, 130, 246)";default:return"rgb(107, 114, 128)"}}};
`,FE=l.div`
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,NE=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
  font-size: 0.9rem;
  color: ${e=>e.$status==="active"?e.theme.colors.accent.green:e.theme.colors.text.tertiary};
`,N0=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,B0=l.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`,O0=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: transparent;
  color: ${e=>e.theme.colors.text.secondary};
  border: none;
  border-radius: ${e=>e.theme.borderRadius.sm};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
    color: ${e=>e.theme.colors.primary[600]};
  }
`,BE=l.tr``,OE=l.td`
  padding: ${e=>e.theme.spacing[6]};
  text-align: center;
  color: ${e=>e.theme.colors.text.tertiary};
  font-style: italic;
`,VE=l.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.tertiary};
`,_E=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>e.theme.spacing[4]} 0;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${e=>e.theme.spacing[3]};
  }
`,WE=l.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
`,UE=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
`,Da=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 ${e=>e.theme.spacing[2]};
  background-color: ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.background.secondary};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.primary};
  border: 1px solid ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.$isActive?e.theme.colors.primary[700]:e.theme.colors.background.tertiary};
  }
`,HE=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
`,V0=[{id:"1",name:"Advanced Mathematics",subject:"Mathematics",teacher:"John Smith",schedule:"Mon, Wed, Fri",time:"09:00 - 10:30",room:"A101",students:28,status:"active",color:"#4F46E5"},{id:"2",name:"Physics Fundamentals",subject:"Physics",teacher:"Emily Davis",schedule:"Tue, Thu",time:"11:00 - 12:30",room:"B202",students:24,status:"active",color:"#10B981"},{id:"3",name:"World Literature",subject:"English",teacher:"Sarah Wilson",schedule:"Mon, Wed",time:"13:00 - 14:30",room:"C303",students:22,status:"active",color:"#F59E0B"},{id:"4",name:"Ancient History",subject:"History",teacher:"Michael Brown",schedule:"Tue, Thu",time:"09:00 - 10:30",room:"D404",students:26,status:"active",color:"#EC4899"},{id:"5",name:"Programming 101",subject:"Computer Science",teacher:"Robert Johnson",schedule:"Wed, Fri",time:"15:00 - 16:30",room:"Lab 101",students:20,status:"active",color:"#8B5CF6"},{id:"6",name:"Biology Lab",subject:"Biology",teacher:"Jennifer Lee",schedule:"Mon, Thu",time:"14:00 - 15:30",room:"Lab 202",students:18,status:"inactive",color:"#06B6D4"},{id:"7",name:"Chemistry 101",subject:"Chemistry",teacher:"David Miller",schedule:"Tue, Fri",time:"10:00 - 11:30",room:"Lab 303",students:22,status:"active",color:"#F97316"},{id:"8",name:"Economics Basics",subject:"Economics",teacher:"Sophia Chen",schedule:"Mon, Wed",time:"11:00 - 12:30",room:"E505",students:30,status:"active",color:"#0EA5E9"}],GE=()=>{const[e,t]=$.useState(""),[r,n]=$.useState(""),[i,s]=$.useState(""),[a,c]=$.useState("grid"),[d,u]=$.useState(null),[h,m]=$.useState(null),p=V0.filter(x=>{const C=x.name.toLowerCase().includes(e.toLowerCase())||x.teacher.toLowerCase().includes(e.toLowerCase())||x.subject.toLowerCase().includes(e.toLowerCase()),k=r?x.subject===r:!0,S=i?x.status===i:!0;return C&&k&&S}),b=Array.from(new Set(V0.map(x=>x.subject))),v=x=>{t(x.target.value)},j=x=>{n(x.target.value)},P=x=>{s(x.target.value)},y=x=>{m(h===x?null:x)},f=x=>{u(x),console.log("Edit class:",x)},g=x=>{console.log(`Delete class with ID: ${x}`)};return le.useEffect(()=>{const x=()=>{m(null)};return document.addEventListener("click",x),()=>{document.removeEventListener("click",x)}},[]),o.jsxs(YE,{as:D.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.4},children:[o.jsxs(qE,{children:[o.jsxs("div",{children:[o.jsx(QE,{children:"Class Management"}),o.jsx(KE,{children:"Organize and manage your academic classes"})]}),o.jsxs(XE,{as:D.button,whileHover:{scale:1.03},whileTap:{scale:.97},children:[o.jsx(fr,{}),o.jsx("span",{children:"Create New Class"})]})]}),o.jsxs(JE,{children:[o.jsxs(ZE,{children:[o.jsxs(eL,{children:[o.jsx(tL,{children:o.jsx(Se,{})}),o.jsx(rL,{placeholder:"Search for classes...",value:e,onChange:v})]}),o.jsxs(nL,{children:[o.jsxs(_0,{value:r,onChange:j,children:[o.jsx("option",{value:"",children:"All Subjects"}),b.map(x=>o.jsx("option",{value:x,children:x},x))]}),o.jsxs(_0,{value:i,onChange:P,children:[o.jsx("option",{value:"",children:"All Status"}),o.jsx("option",{value:"active",children:"Active"}),o.jsx("option",{value:"inactive",children:"Inactive"})]})]})]}),o.jsxs(oL,{children:[o.jsx(W0,{$isActive:a==="grid",onClick:()=>c("grid"),"aria-label":"Grid view",children:o.jsx(a6,{})}),o.jsx(W0,{$isActive:a==="list",onClick:()=>c("list"),"aria-label":"List view",children:o.jsx(d6,{})})]})]}),a==="grid"?o.jsx(iL,{children:o.jsx(he,{children:p.map(x=>o.jsxs(sL,{as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,scale:.95},whileHover:{y:-5,boxShadow:"0 10px 20px rgba(0,0,0,0.1)"},transition:{duration:.2},$color:x.color,children:[o.jsxs(aL,{$color:x.color,children:[o.jsx(lL,{children:x.name}),o.jsxs(cL,{onClick:C=>{C.stopPropagation(),y(x.id)},children:[o.jsx(h6,{}),h===x.id&&o.jsxs(dL,{as:D.div,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},onClick:C=>C.stopPropagation(),children:[o.jsxs(U0,{onClick:()=>f(x),children:[o.jsx(pr,{}),o.jsx("span",{children:"Edit"})]}),o.jsxs(U0,{onClick:()=>g(x.id),children:[o.jsx(It,{}),o.jsx("span",{children:"Delete"})]})]})]})]}),o.jsxs(uL,{children:[o.jsxs(Ea,{children:[o.jsx(Le,{}),o.jsx("span",{children:x.subject})]}),o.jsxs(Ea,{children:[o.jsx(Ce,{}),o.jsx("span",{children:x.teacher})]}),o.jsxs(Ea,{children:[o.jsx(Ae,{}),o.jsx("span",{children:x.schedule})]}),o.jsxs(Ea,{children:[o.jsx(Qe,{}),o.jsx("span",{children:x.time})]})]}),o.jsxs(hL,{children:[o.jsx(H0,{$status:x.status,children:x.status==="active"?"Active":"Inactive"}),o.jsxs(G0,{children:[o.jsx(Ce,{}),o.jsxs("span",{children:[x.students," students"]})]})]})]},x.id))})}):o.jsxs(mL,{children:[o.jsxs(pL,{children:[o.jsx(mn,{width:"25%",children:"Class Name"}),o.jsx(mn,{width:"15%",children:"Subject"}),o.jsx(mn,{width:"20%",children:"Teacher"}),o.jsx(mn,{width:"15%",children:"Schedule"}),o.jsx(mn,{width:"10%",children:"Students"}),o.jsx(mn,{width:"10%",children:"Status"}),o.jsx(mn,{width:"5%",children:"Actions"})]}),o.jsx(fL,{children:o.jsx(he,{children:p.map(x=>o.jsxs(gL,{as:D.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},whileHover:{backgroundColor:"rgba(0,0,0,0.02)"},children:[o.jsx(pn,{children:o.jsxs(xL,{$color:x.color,children:[o.jsx("div",{className:"color-indicator"}),o.jsx("span",{children:x.name})]})}),o.jsx(pn,{children:x.subject}),o.jsx(pn,{children:x.teacher}),o.jsx(pn,{children:o.jsxs(yL,{children:[o.jsx("div",{children:x.schedule}),o.jsx("div",{className:"time",children:x.time})]})}),o.jsx(pn,{children:o.jsxs(G0,{children:[o.jsx(Ce,{}),o.jsx("span",{children:x.students})]})}),o.jsx(pn,{children:o.jsx(H0,{$status:x.status,children:x.status==="active"?"Active":"Inactive"})}),o.jsx(pn,{children:o.jsxs(vL,{children:[o.jsx(Y0,{onClick:()=>f(x),children:o.jsx(pr,{})}),o.jsx(Y0,{onClick:()=>g(x.id),children:o.jsx(It,{})})]})})]},x.id))})})]}),p.length===0&&o.jsx(bL,{as:D.div,initial:{opacity:0},animate:{opacity:1},children:o.jsx(wL,{children:"No classes found matching your search criteria."})})]})},YE=l.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,qE=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`,QE=l.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0;
`,KE=l.p`
  font-size: 16px;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 4px 0 0 0;
`,XE=l.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, ${e=>e.theme.colors.primary[600]}, ${e=>e.theme.colors.primary[700]});
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  svg {
    font-size: 18px;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`,JE=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
`,ZE=l.div`
  display: flex;
  gap: 16px;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
`,eL=l.div`
  position: relative;
  min-width: 300px;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    min-width: unset;
    width: 100%;
  }
`,tL=l.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>e.theme.colors.text.tertiary};
  font-size: 18px;
`,rL=l.input`
  width: 100%;
  padding: 12px 16px 12px 44px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.border};
  background-color: ${e=>e.theme.colors.background.primary};
  font-size: 15px;
  color: ${e=>e.theme.colors.text.primary};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${e=>e.theme.colors.primary[100]};
  }
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
`,nL=l.div`
  display: flex;
  gap: 12px;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`,_0=l.select`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.border};
  background-color: ${e=>e.theme.colors.background.primary};
  font-size: 15px;
  color: ${e=>e.theme.colors.text.primary};
  min-width: 150px;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${e=>e.theme.colors.primary[100]};
  }
`,oL=l.div`
  display: flex;
  gap: 8px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    align-self: flex-end;
  }
`,W0=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${e=>e.$isActive?e.theme.colors.primary[500]:e.theme.colors.border};
  background-color: ${e=>e.$isActive?e.theme.colors.primary[50]:e.theme.colors.background.primary};
  color: ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.text.secondary};
  cursor: pointer;
  
  &:hover {
    background-color: ${e=>e.$isActive?e.theme.colors.primary[100]:e.theme.colors.background.secondary};
  }
  
  svg {
    font-size: 20px;
  }
`,iL=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,sL=l.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${e=>e.theme.colors.background.primary};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  border: 1px solid ${e=>e.theme.colors.border};
  cursor: pointer;
`,aL=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: ${e=>e.$color||e.theme.colors.primary[600]};
  color: white;
  position: relative;
`,lL=l.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,cL=l.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  svg {
    font-size: 20px;
  }
`,dL=l.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
  width: 150px;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  margin-top: 8px;
`,U0=l.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 14px;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.secondary};
  }
  
  svg {
    font-size: 16px;
    color: ${e=>e.theme.colors.text.secondary};
  }
`,uL=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 20px;
  flex-grow: 1;
`,Ea=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 14px;
  
  svg {
    color: ${e=>e.theme.colors.text.secondary};
    font-size: 16px;
  }
`,hL=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-top: 1px solid ${e=>e.theme.colors.border};
`,H0=l.div`
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${e=>e.$status==="active"?"rgba(16, 185, 129, 0.1)":"rgba(107, 114, 128, 0.1)"};
  color: ${e=>e.$status==="active"?"rgb(16, 185, 129)":"rgb(107, 114, 128)"};
`,G0=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  
  svg {
    font-size: 16px;
  }
`,mL=l.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
`,pL=l.div`
  display: flex;
  padding: 16px 20px;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    display: none;
  }
`,mn=l.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.secondary};
  width: ${e=>e.width||"auto"};
`,fL=l.div`
  display: flex;
  flex-direction: column;
`,gL=l.div`
  display: flex;
  padding: 16px 20px;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-wrap: wrap;
    gap: 12px;
  }
`,pn=l.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: ${e=>e.theme.colors.text.primary};
  
  &:nth-child(1) { width: 25%; }
  &:nth-child(2) { width: 15%; }
  &:nth-child(3) { width: 20%; }
  &:nth-child(4) { width: 15%; }
  &:nth-child(5) { width: 10%; }
  &:nth-child(6) { width: 10%; }
  &:nth-child(7) { width: 5%; }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    &:nth-child(1) { width: 100%; }
    &:nth-child(2) { width: 50%; }
    &:nth-child(3) { width: 50%; }
    &:nth-child(4) { width: 50%; }
    &:nth-child(5) { width: 50%; }
    &:nth-child(6) { width: 50%; }
    &:nth-child(7) { width: 50%; justify-content: flex-end; }
  }
`,xL=l.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  
  .color-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${e=>e.$color};
  }
`,yL=l.div`
  display: flex;
  flex-direction: column;
  
  .time {
    font-size: 13px;
    color: ${e=>e.theme.colors.text.tertiary};
    margin-top: 2px;
  }
`,vL=l.div`
  display: flex;
  gap: 8px;
`,Y0=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.secondary};
    color: ${e=>e.theme.colors.primary[600]};
  }
`,bL=l.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 24px;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 12px;
  border: 1px dashed ${e=>e.theme.colors.border};
`,wL=l.p`
  font-size: 16px;
  color: ${e=>e.theme.colors.text.tertiary};
`,q0=["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],$L=["Monday","Tuesday","Wednesday","Thursday","Friday"],Q0=[{id:"1",day:"Monday",startTime:"09:00",endTime:"10:30",classId:"101",className:"Mathematics",teacher:"John Smith",room:"A101",color:"#4F46E5"},{id:"2",day:"Monday",startTime:"11:00",endTime:"12:30",classId:"102",className:"Physics",teacher:"Emily Davis",room:"B202",color:"#10B981"},{id:"3",day:"Tuesday",startTime:"09:00",endTime:"10:30",classId:"103",className:"English",teacher:"Sarah Wilson",room:"C303",color:"#F59E0B"},{id:"4",day:"Tuesday",startTime:"13:00",endTime:"14:30",classId:"104",className:"History",teacher:"Michael Brown",room:"D404",color:"#EC4899"},{id:"5",day:"Wednesday",startTime:"10:00",endTime:"11:30",classId:"105",className:"Computer Science",teacher:"Robert Johnson",room:"Lab 1",color:"#8B5CF6"},{id:"6",day:"Wednesday",startTime:"14:00",endTime:"15:30",classId:"106",className:"Biology",teacher:"Jennifer Lee",room:"Lab 2",color:"#06B6D4"},{id:"7",day:"Thursday",startTime:"11:00",endTime:"12:30",classId:"107",className:"Chemistry",teacher:"David Miller",room:"Lab 3",color:"#F97316"},{id:"8",day:"Friday",startTime:"09:00",endTime:"10:30",classId:"108",className:"Art",teacher:"Sophia Chen",room:"Art Studio",color:"#0EA5E9"},{id:"9",day:"Friday",startTime:"13:00",endTime:"16:00",classId:"109",className:"Physical Education",teacher:"James Wilson",room:"Gym",color:"#14B8A6"}],jL=e=>e.reduce((t,r)=>{const n=r.day;return t[n]||(t[n]=[]),t[n].push(r),t},{}),kL=()=>{const[e,t]=$.useState("May 20 - May 24, 2023"),[r,n]=$.useState(null),[i,s]=$.useState(""),[a,c]=$.useState(""),[d,u]=$.useState(!1),h=Q0.filter(x=>{const C=x.className.toLowerCase().includes(i.toLowerCase())||x.teacher.toLowerCase().includes(i.toLowerCase())||x.room.toLowerCase().includes(i.toLowerCase()),k=a?x.teacher===a:!0;return C&&k}),m=jL(h),p=()=>{t("May 13 - May 17, 2023")},b=()=>{t("May 27 - May 31, 2023")},v=x=>{s(x.target.value)},j=x=>{c(x.target.value)},P=Array.from(new Set(Q0.map(x=>x.teacher))),y=x=>{n(x)},f=(x,C)=>{const k=parseInt(x.split(":")[0]),S=parseInt(x.split(":")[1]),w=parseInt(C.split(":")[0]),A=parseInt(C.split(":")[1]),T=60,U=(k-8)*T+S/60*T,R=(w-k+(A-S)/60)*T;return{top:U,height:R}},g=()=>{u(!0)};return o.jsxs(CL,{as:D.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[o.jsxs(SL,{children:[o.jsxs("div",{children:[o.jsx(PL,{children:"Timetable Management"}),o.jsx(TL,{children:"Organize and schedule classes across the week"})]}),o.jsxs(AL,{onClick:g,children:[o.jsx(fr,{}),o.jsx("span",{children:"Add Class"})]})]}),o.jsxs(ML,{children:[o.jsxs(zL,{children:[o.jsx(K0,{onClick:p,children:o.jsx(qt,{})}),o.jsx(DL,{children:e}),o.jsx(K0,{onClick:b,children:o.jsx(Yt,{})})]}),o.jsxs(EL,{children:[o.jsxs(LL,{children:[o.jsx(RL,{children:o.jsx(Se,{})}),o.jsx(IL,{placeholder:"Search classes...",value:i,onChange:v})]}),o.jsxs(FL,{value:a,onChange:j,children:[o.jsx("option",{value:"",children:"All Teachers"}),P.map(x=>o.jsx("option",{value:x,children:x},x))]})]})]}),o.jsxs(NL,{children:[o.jsxs(BL,{children:[o.jsx(X0,{children:"Time"}),q0.map((x,C)=>o.jsx(VL,{children:x},x))]}),$L.map(x=>{var C;return o.jsxs(OL,{children:[o.jsx(X0,{children:x}),o.jsxs(_L,{children:[q0.map((k,S)=>o.jsx(WL,{},k)),(C=m[x])==null?void 0:C.map(k=>{const{top:S,height:w}=f(k.startTime,k.endTime);return o.jsxs(Nw,{$top:S,$height:w,$color:k.color,onClick:()=>y(k),as:D.div,whileHover:{scale:1.02},whileTap:{scale:.98},children:[o.jsx(UL,{children:k.className}),o.jsxs(Wd,{children:[o.jsx(dt,{}),o.jsx("span",{children:k.teacher})]}),o.jsxs(Wd,{children:[o.jsx(Io,{}),o.jsx("span",{children:k.room})]}),o.jsxs(Wd,{children:[o.jsx(Qe,{}),o.jsxs("span",{children:[k.startTime," - ",k.endTime]})]}),o.jsxs(HL,{children:[o.jsx(J0,{children:o.jsx(pr,{})}),o.jsx(J0,{children:o.jsx(It,{})})]})]},k.id)})]})]},x)})]}),Object.keys(m).length===0&&o.jsxs(GL,{children:[o.jsx(YL,{children:o.jsx(Ae,{})}),o.jsx(qL,{children:"No classes scheduled for this week."}),o.jsxs(QL,{onClick:g,children:[o.jsx(fr,{}),o.jsx("span",{children:"Add Class"})]})]})]})},CL=l.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,SL=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`,PL=l.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0;
`,TL=l.p`
  font-size: 16px;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 4px 0 0 0;
`,AL=l.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[700]};
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 18px;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`,ML=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    flex-direction: column;
    gap: 16px;
  }
`,zL=l.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,K0=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid ${e=>e.theme.colors.border};
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.secondary};
    color: ${e=>e.theme.colors.primary[600]};
  }
  
  svg {
    font-size: 20px;
  }
`,DL=l.div`
  font-size: 18px;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,EL=l.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    flex-direction: column;
  }
`,LL=l.div`
  position: relative;
  width: 250px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
  }
`,RL=l.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>e.theme.colors.text.tertiary};
`,IL=l.input`
  width: 100%;
  padding: 10px 10px 10px 36px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.border};
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
`,FL=l.select`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.border};
  font-size: 14px;
  min-width: 150px;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
  }
`,NL=l.div`
  display: grid;
  grid-template-columns: 80px repeat(5, 1fr);
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    overflow-x: auto;
    min-width: 100%;
  }
`,BL=l.div`
  background-color: ${e=>e.theme.colors.background.tertiary};
`,OL=l.div`
  border-left: 1px solid ${e=>e.theme.colors.border};
  min-width: 180px;
`,X0=l.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.colors.background.tertiary};
  color: ${e=>e.theme.colors.text.primary};
  font-weight: 600;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,VL=l.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,_L=l.div`
  position: relative;
  min-height: 660px; /* 11 time slots * 60px */
`,WL=l.div`
  position: relative;
  height: 60px;
  border-bottom: 1px dashed ${e=>e.theme.colors.border};
`,Nw=l.div`
  position: absolute;
  top: ${e=>e.$top}px;
  left: 4px;
  right: 4px;
  height: ${e=>e.$height}px;
  background-color: ${e=>`${e.$color}20`}; /* 20% opacity */
  border-left: 4px solid ${e=>e.$color};
  border-radius: 6px;
  padding: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 4px;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,UL=l.div`
  font-weight: 600;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Wd=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  svg {
    flex-shrink: 0;
    font-size: 12px;
  }
`,HL=l.div`
  position: absolute;
  top: 6px;
  right: 6px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.2s ease;
  
  ${Nw}:hover & {
    opacity: 1;
  }
`,J0=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: white;
  border: none;
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  
  &:hover {
    color: ${e=>e.theme.colors.primary[600]};
    background-color: ${e=>e.theme.colors.background.tertiary};
  }
`,GL=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  text-align: center;
`,YL=l.div`
  font-size: 48px;
  color: ${e=>e.theme.colors.text.tertiary};
  margin-bottom: 16px;
`,qL=l.p`
  font-size: 16px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 24px;
`,QL=l.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[700]};
  }
  
  svg {
    font-size: 18px;
  }
`,KL=({isOpen:e,onClose:t,onSubmit:r,initialData:n,formTitle:i})=>{const[s,a]=$.useState({name:"",description:""}),[c,d]=$.useState({name:"",description:""});$.useEffect(()=>{a(n?{name:n.name,description:n.description}:{name:"",description:""}),d({name:"",description:""})},[n,e]);const u=p=>{const{name:b,value:v}=p.target;a(j=>({...j,[b]:v})),c[b]&&d(j=>({...j,[b]:""}))},h=()=>{let p=!0;const b={...c};return s.name.trim()||(b.name="Role name is required",p=!1),s.description.trim()||(b.description="Description is required",p=!1),d(b),p},m=p=>{p.preventDefault(),h()&&(r({name:s.name,description:s.description}),a({name:"",description:""}))};return e?o.jsx(XL,{as:D.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:o.jsxs(JL,{as:D.div,initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},children:[o.jsxs(ZL,{children:[o.jsx(e7,{children:i}),o.jsx(t7,{onClick:t,children:o.jsx(Ft,{})})]}),o.jsxs("form",{onSubmit:m,children:[o.jsxs(r7,{children:[o.jsxs(Z0,{children:[o.jsx(ex,{htmlFor:"name",children:"Role Name"}),o.jsx(n7,{type:"text",id:"name",name:"name",value:s.name,onChange:u,$hasError:!!c.name,placeholder:"e.g., Teacher Admin, Content Manager"}),c.name&&o.jsx(tx,{children:c.name})]}),o.jsxs(Z0,{children:[o.jsx(ex,{htmlFor:"description",children:"Description"}),o.jsx(o7,{id:"description",name:"description",value:s.description,onChange:u,$hasError:!!c.description,placeholder:"Briefly describe what this role can do",rows:4}),c.description&&o.jsx(tx,{children:c.description})]}),o.jsxs(i7,{children:[o.jsx(On,{}),o.jsx(s7,{children:"After creating the role, you can assign specific permissions."})]})]}),o.jsxs(a7,{children:[o.jsx(l7,{type:"button",onClick:t,children:"Cancel"}),o.jsx(c7,{type:"submit",children:n?"Update Role":"Create Role"})]})]})]})}):null},XL=l.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,JL=l.div`
  background-color: white;
  border-radius: ${e=>e.theme.borderRadius.lg};
  width: 90%;
  max-width: 500px;
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadows.xl};
`,ZL=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>e.theme.spacing[4]};
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,e7=l.h2`
  margin: 0;
  font-size: 1.5rem;
  color: ${e=>e.theme.colors.text.primary};
`,t7=l.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${e=>e.theme.colors.text.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.theme.spacing[1]};
  border-radius: ${e=>e.theme.borderRadius.full};
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.lighter};
    color: ${e=>e.theme.colors.text.primary};
  }
`,r7=l.div`
  padding: ${e=>e.theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[4]};
`,Z0=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[1]};
`,ex=l.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,n7=l.input`
  padding: ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[3]};
  border: 1px solid ${e=>e.$hasError?e.theme.colors.danger[500]:e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.9rem;
  background-color: ${e=>e.$hasError?e.theme.colors.danger[50]:"white"};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.$hasError?e.theme.colors.danger[500]:e.theme.colors.primary[400]};
    box-shadow: 0 0 0 3px ${e=>e.$hasError?"rgba(244, 63, 94, 0.1)":"rgba(59, 130, 246, 0.1)"};
  }
`,o7=l.textarea`
  padding: ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[3]};
  border: 1px solid ${e=>e.$hasError?e.theme.colors.danger[500]:e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.9rem;
  resize: vertical;
  font-family: inherit;
  background-color: ${e=>e.$hasError?e.theme.colors.danger[50]:"white"};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.$hasError?e.theme.colors.danger[500]:e.theme.colors.primary[400]};
    box-shadow: 0 0 0 3px ${e=>e.$hasError?"rgba(244, 63, 94, 0.1)":"rgba(59, 130, 246, 0.1)"};
  }
`,tx=l.div`
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.danger[500]};
  margin-top: ${e=>e.theme.spacing[1]};
`,i7=l.div`
  display: flex;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing[2]};
  padding: ${e=>e.theme.spacing[3]};
  background-color: ${e=>e.theme.colors.primary[50]};
  border-radius: ${e=>e.theme.borderRadius.md};
  border-left: 4px solid ${e=>e.theme.colors.primary[500]};
  
  svg {
    color: ${e=>e.theme.colors.primary[500]};
    margin-top: 2px;
  }
`,s7=l.p`
  margin: 0;
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.primary[700]};
`,a7=l.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  padding: ${e=>e.theme.spacing[4]};
  border-top: 1px solid ${e=>e.theme.colors.border.light};
`,l7=l.button`
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: white;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.lighter};
    color: ${e=>e.theme.colors.text.primary};
  }
`,c7=l.button`
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[700]};
  }
`,d7=({isOpen:e,onClose:t,role:r,allPermissions:n,onSave:i})=>{const[s,a]=$.useState([]),[c,d]=$.useState(""),[u,h]=$.useState(""),m=Array.from(new Set(n.map(g=>g.name.split(":")[0])));$.useEffect(()=>{r&&r.permissions&&a(r.permissions.map(g=>g.id))},[r]);const b=n.filter(g=>{const x=g.name.toLowerCase().includes(c.toLowerCase())||g.description.toLowerCase().includes(c.toLowerCase()),C=u?g.name.startsWith(u+":"):!0;return x&&C}).reduce((g,x)=>{const C=x.name.split(":")[0];return g[C]||(g[C]=[]),g[C].push(x),g},{}),v=g=>{d(g.target.value)},j=g=>{h(g.target.value)},P=g=>{s.includes(g)?a(s.filter(x=>x!==g)):a([...s,g])},y=g=>{const x=n.filter(k=>k.name.startsWith(g+":")).map(k=>k.id);if(x.every(k=>s.includes(k)))a(s.filter(k=>!x.includes(k)));else{const k=[...s];x.forEach(S=>{k.includes(S)||k.push(S)}),a(k)}},f=()=>{i(r.id,s),t()};return e?o.jsx(u7,{as:D.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:o.jsxs(h7,{as:D.div,initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},children:[o.jsxs(m7,{children:[o.jsxs("div",{children:[o.jsx(p7,{children:"Manage Permissions"}),o.jsxs(f7,{children:["Role: ",r.name]})]}),o.jsx(g7,{onClick:t,children:o.jsx(Ft,{})})]}),o.jsxs(x7,{children:[o.jsxs(y7,{children:[o.jsx(v7,{children:o.jsx(Se,{})}),o.jsx(b7,{placeholder:"Search permissions...",value:c,onChange:v})]}),o.jsxs(w7,{children:[o.jsxs($7,{children:[o.jsx(Nt,{}),o.jsx("span",{children:"Category:"})]}),o.jsxs(j7,{value:u,onChange:j,children:[o.jsx("option",{value:"",children:"All Categories"}),m.map(g=>o.jsx("option",{value:g,children:g},g))]})]})]}),o.jsxs(k7,{children:[o.jsx(C7,{children:o.jsxs(S7,{children:[s.length," of ",n.length," permissions selected"]})}),Object.entries(b).length>0?Object.entries(b).map(([g,x])=>o.jsxs(P7,{children:[o.jsxs(T7,{children:[o.jsxs(A7,{children:[o.jsx(Zo,{})," ",g]}),o.jsx(M7,{onClick:()=>y(g),children:x.every(C=>s.includes(C.id))?"Deselect All":"Select All"})]}),o.jsx(z7,{children:x.map(C=>o.jsxs(D7,{children:[o.jsx(E7,{children:o.jsx(L7,{type:"checkbox",checked:s.includes(C.id),onChange:()=>P(C.id)})}),o.jsxs(R7,{children:[o.jsx(I7,{children:C.name}),o.jsx(F7,{children:C.description})]})]},C.id))})]},g)):o.jsxs(N7,{children:[o.jsx(js,{}),o.jsx(B7,{children:"No permissions found matching your search criteria."})]})]}),o.jsxs(O7,{children:[o.jsx(V7,{onClick:t,children:"Cancel"}),o.jsxs(_7,{onClick:f,children:[o.jsx(Ul,{}),o.jsx("span",{children:"Save Permissions"})]})]})]})}):null},u7=l.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,h7=l.div`
  background-color: white;
  border-radius: ${e=>e.theme.borderRadius.lg};
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: ${e=>e.theme.shadows.xl};
`,m7=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>e.theme.spacing[4]};
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,p7=l.h2`
  margin: 0;
  font-size: 1.5rem;
  color: ${e=>e.theme.colors.text.primary};
`,f7=l.p`
  margin: ${e=>e.theme.spacing[1]} 0 0 0;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
`,g7=l.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${e=>e.theme.colors.text.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.theme.spacing[1]};
  border-radius: ${e=>e.theme.borderRadius.full};
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.lighter};
    color: ${e=>e.theme.colors.text.primary};
  }
`,x7=l.div`
  padding: ${e=>e.theme.spacing[4]};
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  display: flex;
  gap: ${e=>e.theme.spacing[4]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${e=>e.theme.spacing[3]};
  }
`,y7=l.div`
  position: relative;
  width: 300px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
  }
`,v7=l.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>e.theme.colors.text.secondary};
`,b7=l.input`
  width: 100%;
  padding: ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[8]};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[400]};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`,w7=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
`,$7=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
`,j7=l.select`
  padding: ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[3]};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: white;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[400]};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`,k7=l.div`
  flex: 1;
  overflow-y: auto;
  padding: ${e=>e.theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[4]};
`,C7=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${e=>e.theme.spacing[2]};
  border-bottom: 1px solid ${e=>e.theme.colors.border.lighter};
`,S7=l.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
`,P7=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[3]};
`,T7=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,A7=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1rem;
  
  svg {
    color: ${e=>e.theme.colors.primary[500]};
  }
`,M7=l.button`
  background: none;
  border: none;
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.primary[600]};
  cursor: pointer;
  padding: ${e=>e.theme.spacing[1]} ${e=>e.theme.spacing[2]};
  border-radius: ${e=>e.theme.borderRadius.sm};
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[50]};
  }
`,z7=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[2]};
  padding-left: ${e=>e.theme.spacing[1]};
`,D7=l.div`
  display: flex;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing[3]};
  padding: ${e=>e.theme.spacing[2]};
  border-radius: ${e=>e.theme.borderRadius.md};
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.lighter};
  }
`,E7=l.div`
  padding-top: 2px;
`,L7=l.input`
  cursor: pointer;
`,R7=l.div`
  flex: 1;
`,I7=l.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: ${e=>e.theme.spacing[1]};
`,F7=l.div`
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.text.secondary};
`,N7=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.theme.spacing[3]};
  padding: ${e=>e.theme.spacing[8]} 0;
  color: ${e=>e.theme.colors.text.secondary};
  
  svg {
    font-size: 2rem;
  }
`,B7=l.div`
  font-size: 0.9rem;
`,O7=l.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  padding: ${e=>e.theme.spacing[4]};
  border-top: 1px solid ${e=>e.theme.colors.border.light};
`,V7=l.button`
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: white;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.lighter};
    color: ${e=>e.theme.colors.text.primary};
  }
`,_7=l.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[700]};
  }
`,ho=[{id:"1",name:"users:read",description:"View users"},{id:"2",name:"users:write",description:"Create and edit users"},{id:"3",name:"users:delete",description:"Delete users"},{id:"4",name:"roles:read",description:"View roles"},{id:"5",name:"roles:write",description:"Create and edit roles"},{id:"6",name:"roles:delete",description:"Delete roles"},{id:"7",name:"subjects:read",description:"View subjects"},{id:"8",name:"subjects:write",description:"Create and edit subjects"},{id:"9",name:"subjects:delete",description:"Delete subjects"},{id:"10",name:"classes:read",description:"View classes"},{id:"11",name:"classes:write",description:"Create and edit classes"},{id:"12",name:"classes:delete",description:"Delete classes"},{id:"13",name:"timetables:read",description:"View timetables"},{id:"14",name:"timetables:write",description:"Create and edit timetables"},{id:"15",name:"timetables:delete",description:"Delete timetables"}],W7=[{id:"1",name:"Super Admin",description:"Full system access",permissions:ho,usersCount:2,createdAt:"2023-01-15"},{id:"2",name:"School Admin",description:"School-specific administration",permissions:ho.filter(e=>!e.name.includes("delete")&&!e.name.includes("roles")),usersCount:5,createdAt:"2023-02-10"},{id:"3",name:"Teacher",description:"Teaching and content management",permissions:ho.filter(e=>e.name.includes("subjects:read")||e.name.includes("classes:read")||e.name.includes("timetables:read")),usersCount:25,createdAt:"2023-01-20"},{id:"4",name:"Student",description:"Learning and content consumption",permissions:ho.filter(e=>e.name.includes(":read")&&!e.name.includes("users:read")&&!e.name.includes("roles:read")),usersCount:150,createdAt:"2023-01-25"},{id:"5",name:"Parent",description:"Student monitoring and communication",permissions:ho.filter(e=>e.name.includes(":read")&&!e.name.includes("users:read")&&!e.name.includes("roles:read")),usersCount:120,createdAt:"2023-02-15"}],U7=()=>{const[e,t]=$.useState(""),[r,n]=$.useState([]),[i,s]=$.useState(!1),[a,c]=$.useState(null),[d,u]=$.useState(!1),[h,m]=$.useState(!1),[p,b]=$.useState(W7),[v]=$.useState(ho),j=p.filter(R=>R.name.toLowerCase().includes(e.toLowerCase())||R.description.toLowerCase().includes(e.toLowerCase())),P=R=>{t(R.target.value)},y=R=>{r.includes(R)?n(r.filter(V=>V!==R)):n([...r,R])},f=()=>{r.length===j.length?n([]):n(j.map(R=>R.id))},g=()=>{m(!h)},x=()=>{c(null),s(!0)},C=R=>{c(R),s(!0)},k=R=>{b(p.filter(V=>V.id!==R)),n(r.filter(V=>V!==R)),console.log(`Delete role with ID: ${R}`)},S=R=>{c(R),u(!0)},w=R=>{if(a)b(p.map(V=>V.id===a.id?{...V,name:R.name,description:R.description}:V)),console.log("Updating role:",{id:a.id,...R});else{const V={id:Date.now().toString(),name:R.name,description:R.description,permissions:[],usersCount:0,createdAt:new Date().toISOString().split("T")[0]};b([...p,V]),console.log("Creating new role:",V)}s(!1)},A=(R,V)=>{b(p.map(re=>re.id===R?{...re,permissions:v.filter(Q=>V.includes(Q.id))}:re)),console.log(`Updated permissions for role ${R}:`,V)},T=()=>{s(!1),c(null)},U=()=>{u(!1),c(null)},L=()=>{b(p.filter(R=>!r.includes(R.id))),n([]),m(!1),console.log("Bulk deleting roles:",r)};return o.jsxs(H7,{as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[o.jsxs(G7,{children:[o.jsxs("div",{children:[o.jsx(Y7,{children:"Role Management"}),o.jsx(q7,{children:"Manage roles and their associated permissions"})]}),o.jsxs(Q7,{onClick:x,children:[o.jsx(Zo,{}),o.jsx("span",{children:"Add New Role"})]})]}),o.jsxs(K7,{children:[o.jsx(X7,{children:o.jsxs(J7,{children:[o.jsx(Z7,{children:o.jsx(Se,{})}),o.jsx(eR,{placeholder:"Search roles...",value:e,onChange:P})]})}),o.jsxs(rx,{children:[r.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs(tR,{children:[r.length," selected"]}),o.jsx(nx,{onClick:g,children:o.jsx(Ns,{})}),h&&o.jsx(rR,{children:o.jsxs(nR,{onClick:L,children:[o.jsx(It,{}),o.jsx("span",{children:"Delete Selected"})]})})]}),o.jsx(nx,{title:"Export to CSV",children:o.jsx(Hn,{})})]})]}),o.jsxs(oR,{children:[o.jsx(iR,{children:o.jsxs(sR,{children:[o.jsx(oo,{width:"50px",children:o.jsx(ox,{children:o.jsx(ix,{type:"checkbox",checked:r.length===j.length&&j.length>0,onChange:f})})}),o.jsx(oo,{width:"20%",children:"Role Name"}),o.jsx(oo,{width:"30%",children:"Description"}),o.jsx(oo,{width:"20%",children:"Permissions"}),o.jsx(oo,{width:"10%",children:"Users"}),o.jsx(oo,{width:"150px",children:"Actions"})]})}),o.jsx(aR,{children:j.length>0?j.map(R=>o.jsxs(lR,{children:[o.jsx(io,{children:o.jsx(ox,{children:o.jsx(ix,{type:"checkbox",checked:r.includes(R.id),onChange:()=>y(R.id)})})}),o.jsx(io,{children:o.jsx(hR,{children:R.name})}),o.jsx(io,{children:R.description}),o.jsx(io,{children:o.jsxs(mR,{children:[o.jsxs(pR,{children:[R.permissions.length," permissions"]}),o.jsx(fR,{onClick:()=>S(R),children:"View/Edit"})]})}),o.jsx(io,{children:o.jsxs(gR,{children:[R.usersCount," users"]})}),o.jsx(io,{children:o.jsxs(rx,{children:[o.jsx(Ud,{onClick:()=>C(R),title:"Edit role",children:o.jsx(Cs,{})}),o.jsx(Ud,{onClick:()=>k(R.id),title:"Delete role",children:o.jsx(It,{})}),o.jsx(Ud,{onClick:()=>S(R),title:"Manage permissions",children:o.jsx(Ss,{})})]})})]},R.id)):o.jsx(cR,{children:o.jsx(dR,{colSpan:6,children:o.jsx(uR,{children:"No roles found matching your search criteria."})})})})]}),o.jsxs(xR,{children:[o.jsxs(yR,{children:["Showing 1 to ",j.length," of ",j.length," entries"]}),o.jsx(vR,{children:o.jsx(bR,{$isActive:!0,children:"1"})})]}),o.jsx(KL,{isOpen:i,onClose:T,onSubmit:w,initialData:a||void 0,formTitle:a?"Edit Role":"Add New Role"}),a&&o.jsx(d7,{isOpen:d,onClose:U,role:a,allPermissions:v,onSave:A})]})},H7=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[6]};
`,G7=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${e=>e.theme.spacing[4]};
  }
`,Y7=l.h1`
  margin: 0;
  margin-bottom: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1.8rem;
`,q7=l.p`
  margin: 0;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 1rem;
`,Q7=l.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[700]};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`,K7=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${e=>e.theme.spacing[4]};
  }
`,X7=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[4]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${e=>e.theme.spacing[3]};
    width: 100%;
  }
`,J7=l.div`
  position: relative;
  width: 300px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
  }
`,Z7=l.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>e.theme.colors.text.secondary};
`,eR=l.input`
  width: 100%;
  padding: ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[8]};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[400]};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`,rx=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  position: relative;
`,tR=l.div`
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-right: ${e=>e.theme.spacing[2]};
`,nx=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.colors.background.light};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing[2]};
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.lighter};
    color: ${e=>e.theme.colors.text.primary};
  }
`,rR=l.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: ${e=>e.theme.spacing[1]};
  background-color: white;
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  box-shadow: ${e=>e.theme.shadows.md};
  z-index: 10;
  min-width: 160px;
`,nR=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.lighter};
    color: ${e=>e.theme.colors.text.primary};
  }
`,oR=l.div`
  width: 100%;
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  overflow: hidden;
`,iR=l.div`
  background-color: ${e=>e.theme.colors.background.lighter};
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,sR=l.div`
  display: flex;
  align-items: center;
  padding: ${e=>`${e.theme.spacing[3]} ${e.theme.spacing[4]}`};
`,oo=l.div`
  flex: ${e=>e.width?"none":"1"};
  width: ${e=>e.width||"auto"};
  font-weight: 600;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
`,aR=l.div``,lR=l.div`
  display: flex;
  align-items: center;
  padding: ${e=>`${e.theme.spacing[3]} ${e.theme.spacing[4]}`};
  border-bottom: 1px solid ${e=>e.theme.colors.border.lighter};
  transition: all ${e=>e.theme.transition.fast};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
`,io=l.div`
  flex: ${e=>e.width?"none":"1"};
  width: ${e=>e.width||"auto"};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.9rem;
`,cR=l.div`
  padding: ${e=>`${e.theme.spacing[6]} ${e.theme.spacing[4]}`};
`,dR=l.div`
  text-align: center;
`,uR=l.div`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
`,ox=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,ix=l.input`
  cursor: pointer;
`,hR=l.div`
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,mR=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
`,pR=l.div`
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.text.secondary};
`,fR=l.button`
  font-size: 0.8rem;
  padding: ${e=>`${e.theme.spacing[1]} ${e.theme.spacing[2]}`};
  background-color: ${e=>e.theme.colors.primary[50]};
  color: ${e=>e.theme.colors.primary[600]};
  border: none;
  border-radius: ${e=>e.theme.borderRadius.sm};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[100]};
  }
`,gR=l.div`
  font-size: 0.85rem;
`,Ud=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: ${e=>e.theme.borderRadius.full};
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.lighter};
    color: ${e=>e.theme.colors.primary[600]};
  }
`,xR=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${e=>e.theme.spacing[3]};
  }
`,yR=l.div`
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.text.secondary};
`,vR=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
`,bR=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.85rem;
  border: 1px solid ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.border.light};
  background-color: ${e=>e.$isActive?e.theme.colors.primary[600]:"white"};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.$isActive?e.theme.colors.primary[700]:e.theme.colors.background.lighter};
    border-color: ${e=>e.$isActive?e.theme.colors.primary[700]:e.theme.colors.border.dark};
  }
`,Hd=()=>{var y;const{isDarkMode:e,toggleTheme:t,primaryColor:r,setPrimaryColor:n}=vW(),[i,s]=$.useState("general"),[a,c]=$.useState([{id:"siteName",label:"Site Name",description:"The name of your learning management system",type:"input",value:"My Learning Management System",category:"general",icon:o.jsx(s6,{})},{id:"adminEmail",label:"Admin Email",description:"Email used for system notifications",type:"input",value:"admin@example.com",category:"general",icon:o.jsx(Gl,{})},{id:"userRegistration",label:"Allow User Registration",description:"Enable self-registration for new users",type:"toggle",value:!0,category:"general",icon:o.jsx(Ce,{})},{id:"theme",label:"Color Theme",description:"Choose between light and dark mode",type:"select",value:e?"dark":"light",options:[{value:"light",label:"Light Mode"},{value:"dark",label:"Dark Mode"},{value:"system",label:"System Default"}],category:"appearance",icon:o.jsx(Zg,{})},{id:"primaryColor",label:"Primary Color",description:"Main color used throughout the application",type:"color",value:r,category:"appearance",icon:o.jsx(t0,{})},{id:"compactMode",label:"Compact Mode",description:"Use reduced spacing in the interface",type:"toggle",value:!1,category:"appearance",icon:o.jsx(f6,{})},{id:"emailNotifications",label:"Email Notifications",description:"Send system notifications via email",type:"toggle",value:!0,category:"notifications",icon:o.jsx(Gl,{})},{id:"newUserAlert",label:"New User Alerts",description:"Get notified when new users register",type:"toggle",value:!0,category:"notifications",icon:o.jsx(Ce,{})},{id:"loginAlerts",label:"Login Alerts",description:"Get notified of suspicious login attempts",type:"toggle",value:!0,category:"notifications",icon:o.jsx(ks,{})},{id:"twoFactorAuth",label:"Two-Factor Authentication",description:"Require 2FA for admin accounts",type:"toggle",value:!1,category:"security",icon:o.jsx(Zo,{})},{id:"passwordPolicy",label:"Password Policy",description:"Set minimum requirements for passwords",type:"select",value:"strong",options:[{value:"basic",label:"Basic (6+ characters)"},{value:"medium",label:"Medium (8+ chars, mixed case)"},{value:"strong",label:"Strong (8+ chars, mixed case, numbers, symbols)"}],category:"security",icon:o.jsx(Ss,{})},{id:"sessionTimeout",label:"Session Timeout",description:"Automatically log out inactive users",type:"select",value:"30",options:[{value:"15",label:"15 minutes"},{value:"30",label:"30 minutes"},{value:"60",label:"1 hour"},{value:"120",label:"2 hours"},{value:"never",label:"Never"}],category:"security",icon:o.jsx(Ki,{})},{id:"backupFrequency",label:"Backup Frequency",description:"How often the system data is backed up",type:"select",value:"daily",options:[{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"},{value:"monthly",label:"Monthly"},{value:"manual",label:"Manual Only"}],category:"system",icon:o.jsx(Ah,{})},{id:"maintenanceMode",label:"Maintenance Mode",description:"Put the system in maintenance mode",type:"toggle",value:!1,category:"system",icon:o.jsx(t0,{})},{id:"cacheClearing",label:"Clear System Cache",description:"Clear cached data to free up system resources",type:"button",value:"Clear Cache",category:"system",icon:o.jsx(Ki,{})}]);$.useEffect(()=>{c(f=>f.map(g=>g.id==="theme"?{...g,value:e?"dark":"light"}:g.id==="primaryColor"?{...g,value:r}:g))},[e,r]);const[d,u]=$.useState(!1),[h,m]=$.useState("idle"),p=[{id:"general",label:"General",icon:o.jsx(Jo,{})},{id:"appearance",label:"Appearance",icon:o.jsx(Zg,{})},{id:"notifications",label:"Notifications",icon:o.jsx(ks,{})},{id:"security",label:"Security",icon:o.jsx(Zo,{})},{id:"system",label:"System",icon:o.jsx(Ah,{})}],b=f=>{const g=a.find(x=>x.id===f);if(g){const x=!g.value;f==="theme"&&g.value==="dark"&&t(),c(a.map(C=>C.id===f?{...C,value:x}:C))}},v=(f,g)=>{f==="theme"&&(g==="dark"&&!e||g==="light"&&e)&&t(),f==="primaryColor"&&n(g),c(a.map(x=>x.id===f?{...x,value:g}:x))},j=()=>{u(!0),m("idle"),setTimeout(()=>{u(!1),m("success"),setTimeout(()=>{m("idle")},3e3)},1500)},P=a.filter(f=>f.category===i);return o.jsxs(wR,{children:[o.jsxs($R,{children:[o.jsxs("div",{children:[o.jsx(jR,{children:"Settings"}),o.jsx(kR,{children:"Configure system settings and preferences"})]}),o.jsx(CR,{onClick:j,disabled:d,children:o.jsx(he,{mode:"wait",children:d?o.jsxs(D.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[o.jsx(Ki,{className:"spin"}),o.jsx("span",{children:"Saving..."})]},"saving"):h==="success"?o.jsxs(D.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[o.jsx(Zr,{}),o.jsx("span",{children:"Saved!"})]},"success"):h==="error"?o.jsxs(D.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[o.jsx(zc,{}),o.jsx("span",{children:"Error!"})]},"error"):o.jsxs(D.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[o.jsx(zh,{}),o.jsx("span",{children:"Save Changes"})]},"save")})})]}),o.jsxs(SR,{children:[o.jsx(PR,{children:p.map(f=>o.jsxs(TR,{$isActive:i===f.id,onClick:()=>s(f.id),children:[o.jsx(AR,{children:f.icon}),o.jsx(MR,{children:f.label}),i===f.id&&o.jsx(zR,{layoutId:"activeCategoryIndicator",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}})]},f.id))}),o.jsxs(DR,{children:[o.jsxs(ER,{children:[(y=p.find(f=>f.id===i))==null?void 0:y.label," Settings"]}),o.jsx(LR,{children:o.jsx(he,{mode:"wait",children:o.jsx(D.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:P.map(f=>{var g;return o.jsxs(RR,{children:[o.jsx(IR,{children:f.icon}),o.jsxs(FR,{children:[o.jsx(NR,{children:f.label}),o.jsx(BR,{children:f.description})]}),o.jsxs(OR,{children:[f.type==="toggle"&&o.jsx(VR,{$isActive:f.value,onClick:()=>b(f.id),children:o.jsx(_R,{$isActive:f.value})}),f.type==="input"&&o.jsx(WR,{type:"text",value:f.value,onChange:x=>v(f.id,x.target.value)}),f.type==="select"&&o.jsx(UR,{value:f.value,onChange:x=>v(f.id,x.target.value),children:(g=f.options)==null?void 0:g.map(x=>o.jsx("option",{value:x.value,children:x.label},x.value))}),f.type==="color"&&o.jsxs(HR,{children:[o.jsx(GR,{$color:f.value}),o.jsx(YR,{type:"color",value:f.value,onChange:x=>v(f.id,x.target.value)})]}),f.type==="button"&&o.jsx(qR,{onClick:()=>alert(`Action: ${f.value}`),children:f.value})]})]},f.id)})},i)})})]})]})]})},wR=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[6]};
`,$R=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${e=>e.theme.spacing[4]};
  }
`,jR=l.h1`
  margin: 0;
  margin-bottom: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1.8rem;
`,kR=l.p`
  margin: 0;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 1rem;
`,CR=l.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover:not(:disabled) {
    background-color: ${e=>e.theme.colors.primary[700]};
  }
  
  &:disabled {
    background-color: ${e=>e.theme.colors.neutral[400]};
    cursor: not-allowed;
  }
  
  .spin {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  div {
    display: flex;
    align-items: center;
    gap: ${e=>e.theme.spacing[2]};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`,SR=l.div`
  display: flex;
  gap: ${e=>e.theme.spacing[6]};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    flex-direction: column;
  }
`,PR=l.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  box-shadow: ${e=>e.theme.shadows.sm};
  overflow: hidden;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    width: 100%;
    flex-direction: row;
    overflow-x: auto;
    padding: ${e=>e.theme.spacing[2]};
  }
`,TR=l.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  background-color: ${e=>e.$isActive?e.theme.colors.background.lighter:"transparent"};
  color: ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.text.secondary};
  border: none;
  padding: ${e=>`${e.theme.spacing[3]} ${e.theme.spacing[4]}`};
  font-size: 0.95rem;
  font-weight: ${e=>e.$isActive?600:400};
  text-align: left;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  position: relative;
  
  &:hover {
    background-color: ${e=>e.$isActive?e.theme.colors.background.lighter:e.theme.colors.background.hover};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
    flex-shrink: 0;
    border-radius: ${e=>e.theme.borderRadius.md};
  }
`,AR=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
`,MR=l.div`
  flex: 1;
`,zR=l(D.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 4px;
  background-color: ${e=>e.theme.colors.primary[600]};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    width: 100%;
    height: 4px;
    top: auto;
    bottom: -${e=>e.theme.spacing[1]};
  }
`,DR=l.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  box-shadow: ${e=>e.theme.shadows.sm};
  padding: ${e=>e.theme.spacing[6]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    padding: ${e=>e.theme.spacing[4]};
  }
`,ER=l.h2`
  margin: 0;
  margin-bottom: ${e=>e.theme.spacing[4]};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1.3rem;
  font-weight: 600;
`,LR=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[4]};
`,RR=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[4]};
  background-color: ${e=>e.theme.colors.background.lighter};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing[4]};
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,IR=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${e=>e.theme.borderRadius.full};
  background-color: ${e=>e.theme.colors.primary[50]};
  color: ${e=>e.theme.colors.primary[600]};
  font-size: 1.2rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    margin-bottom: ${e=>e.theme.spacing[2]};
  }
`,FR=l.div`
  flex: 1;
`,NR=l.div`
  font-weight: 500;
  margin-bottom: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.primary};
`,BR=l.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
`,OR=l.div`
  min-width: 120px;
  display: flex;
  justify-content: flex-end;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    width: 100%;
    justify-content: flex-start;
    margin-top: ${e=>e.theme.spacing[3]};
  }
`,VR=l.div`
  position: relative;
  width: 48px;
  height: 24px;
  background-color: ${e=>e.$isActive?e.theme.colors.primary[500]:e.theme.colors.neutral[300]};
  border-radius: 24px;
  cursor: pointer;
  transition: background-color ${e=>e.theme.transition.fast};
`,_R=l.div`
  position: absolute;
  top: 2px;
  left: ${e=>e.$isActive?"26px":"2px"};
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  box-shadow: ${e=>e.theme.shadows.sm};
  transition: left ${e=>e.theme.transition.fast};
`,WR=l.input`
  width: 100%;
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
  font-size: 0.95rem;
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  color: ${e=>e.theme.colors.text.primary};
  background-color: ${e=>e.theme.colors.background.secondary};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[400]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
`,UR=l.select`
  min-width: 150px;
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
  font-size: 0.95rem;
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  color: ${e=>e.theme.colors.text.primary};
  background-color: ${e=>e.theme.colors.background.secondary};
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[400]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
`,HR=l.div`
  display: flex;
  align-items: center;
  position: relative;
`,GR=l.div`
  width: 30px;
  height: 30px;
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.$color};
  border: 1px solid ${e=>e.theme.colors.border.light};
`,YR=l.input`
  position: absolute;
  opacity: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
`,qR=l.button`
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[700]};
  }
`,Gd=()=>{const{user:e,updateProfile:t,updatePassword:r}=Xt(),[n,i]=$.useState({username:"",email:"",fullName:"",role:"",currentPassword:"",newPassword:"",confirmPassword:""}),[s,a]=$.useState({}),[c,d]=$.useState("general"),[u,h]=$.useState(!1),[m,p]=$.useState(""),[b,v]=$.useState("");$.useEffect(()=>{e&&i({...n,username:e.username||"",email:e.email||"",fullName:e.fullName||"",role:e.role||""})},[e]);const j=S=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(S),P=()=>{const S={};let w=!0;return n.username.trim()?n.username.length<3&&(S.username="Username must be at least 3 characters",w=!1):(S.username="Username is required",w=!1),n.email.trim()?j(n.email)||(S.email="Please enter a valid email address",w=!1):(S.email="Email is required",w=!1),n.fullName&&n.fullName.length<2&&(S.fullName="Full name must be at least 2 characters",w=!1),a(S),w},y=()=>{const S={};let w=!0;return n.currentPassword||(S.currentPassword="Current password is required",w=!1),n.newPassword?n.newPassword.length<6?(S.newPassword="Password must be at least 6 characters",w=!1):/\d/.test(n.newPassword)?/[a-zA-Z]/.test(n.newPassword)||(S.newPassword="Password must contain at least one letter",w=!1):(S.newPassword="Password must contain at least one number",w=!1):(S.newPassword="New password is required",w=!1),n.confirmPassword?n.newPassword!==n.confirmPassword&&(S.confirmPassword="Passwords do not match",w=!1):(S.confirmPassword="Please confirm your password",w=!1),a(S),w},f=S=>{const{name:w,value:A}=S.target;i({...n,[w]:A}),s[w]&&a({...s,[w]:void 0})},g=S=>{d(S),v(""),p("")},x=()=>{h(!u),u&&(e&&i({...n,username:e.username||"",email:e.email||"",fullName:e.fullName||"",role:e.role||""}),a({}))},C=S=>{if(S.preventDefault(),p(""),v(""),!P()){v("Please correct the errors in the form");return}try{t({username:n.username,email:n.email,fullName:n.fullName}),p("Profile updated successfully!"),v(""),h(!1),setTimeout(()=>{p("")},3e3)}catch{v("Failed to update profile. Please try again."),p("")}},k=S=>{if(S.preventDefault(),p(""),v(""),!y()){v("Please correct the errors in the form");return}try{if(!r(n.currentPassword,n.newPassword)){v("Current password is incorrect"),a({...s,currentPassword:"Current password is incorrect"});return}i({...n,currentPassword:"",newPassword:"",confirmPassword:""}),p("Password changed successfully!"),v(""),setTimeout(()=>{p("")},3e3)}catch{v("Failed to change password. Please try again."),p("")}};return o.jsxs(QR,{children:[o.jsx(KR,{children:o.jsx(XR,{children:"My Profile"})}),m&&o.jsx(dI,{children:m}),b&&o.jsx(uI,{children:b}),o.jsxs(JR,{children:[o.jsxs(ZR,{children:[o.jsx(eI,{children:e!=null&&e.username?e.username.charAt(0).toUpperCase():"U"}),o.jsx(tI,{children:e==null?void 0:e.role}),o.jsxs(rI,{children:[o.jsxs(sx,{$isActive:c==="general",onClick:()=>g("general"),children:[o.jsx(dt,{}),o.jsx("span",{children:"General Information"})]}),o.jsxs(sx,{$isActive:c==="security",onClick:()=>g("security"),children:[o.jsx(Ss,{}),o.jsx("span",{children:"Password & Security"})]})]})]}),o.jsxs(nI,{children:[c==="general"&&o.jsxs("form",{onSubmit:C,children:[o.jsxs(ax,{children:[o.jsx(lx,{children:"General Information"}),o.jsx(oI,{children:u?o.jsxs(o.Fragment,{children:[o.jsxs(cx,{type:"submit",children:[o.jsx(zh,{}),"Save Changes"]}),o.jsxs(cI,{type:"button",onClick:x,children:[o.jsx(Ft,{}),"Cancel"]})]}):o.jsx(lI,{type:"button",onClick:x,children:"Edit Profile"})})]}),o.jsxs(fn,{children:[o.jsx(gn,{htmlFor:"username",children:"Username"}),o.jsx(xn,{type:"text",id:"username",name:"username",value:n.username,onChange:f,disabled:!u,$hasError:!!s.username}),s.username&&o.jsx(so,{children:s.username})]}),o.jsxs(fn,{children:[o.jsx(gn,{htmlFor:"fullName",children:"Full Name"}),o.jsx(xn,{type:"text",id:"fullName",name:"fullName",value:n.fullName,onChange:f,disabled:!u,$hasError:!!s.fullName}),s.fullName&&o.jsx(so,{children:s.fullName})]}),o.jsxs(fn,{children:[o.jsx(gn,{htmlFor:"email",children:"Email Address"}),o.jsx(xn,{type:"email",id:"email",name:"email",value:n.email,onChange:f,disabled:!u,$hasError:!!s.email}),s.email&&o.jsx(so,{children:s.email})]}),o.jsxs(fn,{children:[o.jsx(gn,{htmlFor:"role",children:"Role"}),o.jsx(xn,{type:"text",id:"role",name:"role",value:n.role,disabled:!0}),o.jsx(iI,{children:"Role cannot be changed"})]})]}),c==="security"&&o.jsxs("form",{onSubmit:k,children:[o.jsx(ax,{children:o.jsx(lx,{children:"Password & Security"})}),o.jsxs(sI,{children:[o.jsx(On,{}),o.jsxs("div",{children:[o.jsx("p",{children:"Password must:"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Be at least 6 characters long"}),o.jsx("li",{children:"Include at least one number"}),o.jsx("li",{children:"Include at least one letter"})]})]})]}),o.jsxs(fn,{children:[o.jsx(gn,{htmlFor:"currentPassword",children:"Current Password"}),o.jsx(xn,{type:"password",id:"currentPassword",name:"currentPassword",value:n.currentPassword,onChange:f,placeholder:"Enter your current password",$hasError:!!s.currentPassword}),s.currentPassword&&o.jsx(so,{children:s.currentPassword})]}),o.jsxs(fn,{children:[o.jsx(gn,{htmlFor:"newPassword",children:"New Password"}),o.jsx(aI,{children:o.jsx(xn,{type:"password",id:"newPassword",name:"newPassword",value:n.newPassword,onChange:f,placeholder:"Enter new password",$hasError:!!s.newPassword})}),s.newPassword&&o.jsx(so,{children:s.newPassword})]}),o.jsxs(fn,{children:[o.jsx(gn,{htmlFor:"confirmPassword",children:"Confirm New Password"}),o.jsx(xn,{type:"password",id:"confirmPassword",name:"confirmPassword",value:n.confirmPassword,onChange:f,placeholder:"Confirm new password",$hasError:!!s.confirmPassword}),s.confirmPassword&&o.jsx(so,{children:s.confirmPassword})]}),o.jsxs(cx,{type:"submit",children:[o.jsx(zh,{}),"Change Password"]})]})]})]})]})},QR=l.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,KR=l.div`
  margin-bottom: 2rem;
`,XR=l.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,JR=l.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
  }
`,ZR=l.div`
  width: 280px;
  flex-shrink: 0;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
  }
`,eI=l.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: 600;
  margin: 0 auto 1rem;
`,tI=l.div`
  background-color: ${e=>e.theme.colors.primary[100]};
  color: ${e=>e.theme.colors.primary[700]};
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
  margin: 0 auto;
  text-transform: capitalize;
  text-align: center;
  width: fit-content;
  display: block;
  margin-bottom: 2rem;
`,rI=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,sx=l.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: ${e=>e.$isActive?e.theme.colors.primary[50]:"transparent"};
  color: ${e=>e.$isActive?e.theme.colors.primary[700]:e.theme.colors.text.secondary};
  font-weight: ${e=>e.$isActive?"600":"400"};
  border: none;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.$isActive?e.theme.colors.primary[50]:e.theme.colors.background.hover};
    color: ${e=>e.$isActive?e.theme.colors.primary[700]:e.theme.colors.text.primary};
  }
  
  svg {
    font-size: 1.25rem;
  }
`,nI=l.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border.light};
  padding: 2rem;
`,ax=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,lx=l.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,oI=l.div`
  display: flex;
  gap: 0.75rem;
`,fn=l.div`
  margin-bottom: 1.5rem;
`,gn=l.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.875rem;
`,xn=l.input`
  width: 100%;
  padding: 0.625rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid ${e=>e.$hasError?e.theme.colors.danger[500]:e.theme.colors.border.light};
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.875rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.$hasError?e.theme.colors.danger[500]:e.theme.colors.primary[500]};
    box-shadow: 0 0 0 2px ${e=>e.$hasError?e.theme.colors.danger[100]:e.theme.colors.primary[100]};
  }
  
  &:disabled {
    background-color: ${e=>e.theme.colors.background.tertiary};
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
`,so=l.div`
  color: ${e=>e.theme.colors.danger[500]};
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &::before {
    content: "⚠";
  }
`,iI=l.p`
  margin-top: 0.5rem;
  color: ${e=>e.theme.colors.text.tertiary};
  font-size: 0.75rem;
`,sI=l.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${e=>e.theme.colors.primary[50]};
  margin-bottom: 1.5rem;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  
  svg {
    color: ${e=>e.theme.colors.primary[500]};
    font-size: 1.25rem;
    flex-shrink: 0;
    margin-top: 0.25rem;
  }
  
  p {
    font-weight: 500;
    margin-bottom: 0.25rem;
  }
  
  ul {
    margin: 0;
    padding-left: 1.25rem;
    font-size: 0.875rem;
    
    li {
      margin-bottom: 0.25rem;
    }
  }
`,aI=l.div`
  position: relative;
  width: 100%;
`,pp=l.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    font-size: 1rem;
  }
`,lI=l(pp)`
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
    border-color: ${e=>e.theme.colors.border.dark};
  }
`,cx=l(pp)`
  background-color: ${e=>e.theme.colors.primary[500]};
  color: white;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[600]};
  }
`,cI=l(pp)`
  background-color: transparent;
  color: ${e=>e.theme.colors.text.secondary};
  border: none;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
    color: ${e=>e.theme.colors.text.primary};
  }
`,Bw=l.div`
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
`,dI=l(Bw)`
  background-color: ${e=>e.theme.colors.success[50]};
  color: ${e=>e.theme.colors.success[700]};
  border: 1px solid ${e=>e.theme.colors.success[200]};
`,uI=l(Bw)`
  background-color: ${e=>e.theme.colors.danger[50]};
  color: ${e=>e.theme.colors.danger[700]};
  border: 1px solid ${e=>e.theme.colors.danger[200]};
`,Yd={admin:{username:"admin",password:"123456"},teacher:{username:"teacher",password:"123456"},student:{username:"student",password:"123456"}},hI=()=>{const e=Es(),{login:t}=Xt(),[r,n]=$.useState(null),[i,s]=$.useState(""),[a,c]=$.useState(""),[d,u]=$.useState(!1),[h,m]=$.useState(""),p=j=>{n(j),m("")},b=j=>{if(j.preventDefault(),!r)return;t(i,a,r)?e(`/${r}/dashboard`):m("Invalid username or password")},v=()=>{if(!r)return;const j=Yd[r];s(j.username),c(j.password)};return r?o.jsxs(dx,{children:[o.jsxs(ux,{children:[o.jsxs(hx,{children:[o.jsx("h1",{children:"Learning Management System"}),o.jsxs("p",{children:["Sign in as ",r.charAt(0).toUpperCase()+r.slice(1)]})]}),o.jsxs(pI,{onSubmit:b,children:[o.jsxs(fI,{onClick:()=>n(null),children:[o.jsx(t6,{})," Back to Role Selection"]}),h&&o.jsx(wI,{children:h}),o.jsxs(gx,{children:[o.jsx(xx,{htmlFor:"username",children:"Username"}),o.jsx(yx,{children:o.jsx(vx,{id:"username",type:"text",placeholder:"Enter your username",value:i,onChange:j=>s(j.target.value),required:!0})})]}),o.jsxs(gx,{children:[o.jsx(xx,{htmlFor:"password",children:"Password"}),o.jsx(yx,{children:o.jsx(vx,{id:"password",type:"password",placeholder:"Enter your password",value:a,onChange:j=>c(j.target.value),required:!0})})]}),o.jsxs(gI,{children:[o.jsxs(xI,{children:[o.jsx(yI,{type:"checkbox",id:"rememberMe",checked:d,onChange:()=>u(!d)}),o.jsx("label",{htmlFor:"rememberMe",children:"Remember me"})]}),o.jsx(vI,{to:"/forgot-password",children:"Forgot password?"})]}),o.jsx(bI,{type:"submit",children:"Sign in"})]}),o.jsxs($I,{children:[o.jsx(jI,{children:"Note: All user accounts are created by administrators"}),o.jsxs(kI,{children:[o.jsx("p",{children:"Demo credentials:"}),o.jsxs(bx,{children:[o.jsx("strong",{children:"Username:"})," ",Yd[r].username]}),o.jsxs(bx,{children:[o.jsx("strong",{children:"Password:"})," ",Yd[r].password]}),o.jsx(CI,{onClick:v,children:"Use demo account"})]})]})]}),o.jsx(mx,{children:o.jsxs(px,{children:[o.jsx("h2",{children:"Welcome to the Learning Management System"}),o.jsx("p",{children:"A comprehensive platform for educational institutions to manage learning processes and content."}),o.jsxs(fx,{children:[o.jsxs(ao,{children:[o.jsx(lo,{className:"admin",children:o.jsx(dt,{})}),o.jsxs(co,{children:[o.jsx("h3",{children:"Admin Panel"}),o.jsx("p",{children:"Manage users, roles, and system settings"})]})]}),o.jsxs(ao,{children:[o.jsx(lo,{className:"teacher",children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M12 14l9-5-9-5-9 5 9 5z"}),o.jsx("path",{d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"})]})}),o.jsxs(co,{children:[o.jsx("h3",{children:"Teacher Panel"}),o.jsx("p",{children:"Create curriculum, upload materials, and grade students"})]})]}),o.jsxs(ao,{children:[o.jsx(lo,{className:"student",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),o.jsxs(co,{children:[o.jsx("h3",{children:"Student Panel"}),o.jsx("p",{children:"Access learning materials, assignments, and track progress"})]})]})]})]})})]}):o.jsxs(dx,{children:[o.jsxs(ux,{children:[o.jsxs(hx,{children:[o.jsx("h1",{children:"Learning Management System"}),o.jsx("p",{children:"Select your role to continue"})]}),o.jsxs(mI,{children:[o.jsxs(ol,{onClick:()=>p("admin"),children:[o.jsx(qd,{className:"admin",children:o.jsx(dt,{})}),o.jsxs(Qd,{children:[o.jsx(Kd,{children:"Administrator"}),o.jsx(Xd,{children:"Manage user accounts, classes, and system settings"})]}),o.jsx(Jd,{children:o.jsx(Yt,{})})]}),o.jsxs(ol,{onClick:()=>p("teacher"),children:[o.jsx(qd,{className:"teacher",children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M12 14l9-5-9-5-9 5 9 5z"}),o.jsx("path",{d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"})]})}),o.jsxs(Qd,{children:[o.jsx(Kd,{children:"Teacher"}),o.jsx(Xd,{children:"Create and manage curriculum, materials, and assessments"})]}),o.jsx(Jd,{children:o.jsx(Yt,{})})]}),o.jsxs(ol,{onClick:()=>p("student"),children:[o.jsx(qd,{className:"student",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),o.jsxs(Qd,{children:[o.jsx(Kd,{children:"Student"}),o.jsx(Xd,{children:"Access classes, learning materials, and track progress"})]}),o.jsx(Jd,{children:o.jsx(Yt,{})})]})]})]}),o.jsx(mx,{children:o.jsxs(px,{children:[o.jsx("h2",{children:"Welcome to the Learning Management System"}),o.jsx("p",{children:"A comprehensive platform for educational institutions to manage learning processes and content."}),o.jsxs(fx,{children:[o.jsxs(ao,{children:[o.jsx(lo,{className:"admin",children:o.jsx(dt,{})}),o.jsxs(co,{children:[o.jsx("h3",{children:"Admin Panel"}),o.jsx("p",{children:"Manage users, roles, and system settings"})]})]}),o.jsxs(ao,{children:[o.jsx(lo,{className:"teacher",children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M12 14l9-5-9-5-9 5 9 5z"}),o.jsx("path",{d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"})]})}),o.jsxs(co,{children:[o.jsx("h3",{children:"Teacher Panel"}),o.jsx("p",{children:"Create curriculum, upload materials, and grade students"})]})]}),o.jsxs(ao,{children:[o.jsx(lo,{className:"student",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),o.jsxs(co,{children:[o.jsx("h3",{children:"Student Panel"}),o.jsx("p",{children:"Access learning materials, assignments, and track progress"})]})]})]})]})})]})},dx=l.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: ${e=>e.theme.colors.background.lighter};

  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    flex-direction: column-reverse;
    height: auto;
    min-height: 100vh;
  }
`,ux=l.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${e=>e.theme.spacing[8]};
  background-color: ${e=>e.theme.colors.background.secondary};
  box-shadow: ${e=>e.theme.shadows.md};
  max-width: 600px;
  overflow-y: auto;

  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    max-width: 100%;
    padding: ${e=>e.theme.spacing[6]};
  }

  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    padding: ${e=>e.theme.spacing[4]};
  }
`,hx=l.div`
  margin-bottom: ${e=>e.theme.spacing[8]};

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${e=>e.theme.colors.text.primary};
    margin-bottom: ${e=>e.theme.spacing[2]};
  }

  p {
    color: ${e=>e.theme.colors.text.secondary};
    font-size: 1rem;
  }

  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    margin-bottom: ${e=>e.theme.spacing[6]};

    h1 {
      font-size: 1.5rem;
    }
  }
`,mI=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[4]};
`,ol=l.div`
  display: flex;
  align-items: center;
  padding: ${e=>e.theme.spacing[5]};
  background-color: ${e=>e.theme.colors.background.secondary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.lg};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.normal};
  box-shadow: ${e=>e.theme.shadows.sm};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.md};
    border-color: ${e=>e.theme.colors.primary[400]};
  }
`,qd=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${e=>e.theme.borderRadius.full};
  margin-right: ${e=>e.theme.spacing[4]};
  
  &.admin {
    background-color: ${e=>e.theme.colors.purple[100]};
    color: ${e=>e.theme.colors.purple[600]};
  }
  
  &.teacher {
    background-color: ${e=>e.theme.colors.primary[100]};
    color: ${e=>e.theme.colors.primary[600]};
  }
  
  &.student {
    background-color: ${e=>e.theme.colors.success[100]};
    color: ${e=>e.theme.colors.success[600]};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`,Qd=l.div`
  flex: 1;
`,Kd=l.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.primary};
`,Xd=l.p`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
`,Jd=l.div`
  color: ${e=>e.theme.colors.text.tertiary};
  transition: transform ${e=>e.theme.transition.normal};
  
  ${ol}:hover & {
    transform: translateX(4px);
    color: ${e=>e.theme.colors.primary[500]};
  }
`,mx=l.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  padding: ${e=>e.theme.spacing[8]};

  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    padding: ${e=>e.theme.spacing[6]};
  }

  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    padding: ${e=>e.theme.spacing[4]};
  }
`,px=l.div`
  max-width: 600px;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: ${e=>e.theme.spacing[4]};
  }

  > p {
    font-size: 1.125rem;
    margin-bottom: ${e=>e.theme.spacing[8]};
    opacity: 0.9;
  }

  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    h2 {
      font-size: 1.5rem;
    }

    > p {
      font-size: 1rem;
      margin-bottom: ${e=>e.theme.spacing[6]};
    }
  }
`,fx=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[6]};
`,ao=l.div`
  display: flex;
  align-items: center;
`,lo=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${e=>e.theme.borderRadius.full};
  margin-right: ${e=>e.theme.spacing[4]};
  background-color: rgba(255, 255, 255, 0.2);
  
  svg {
    width: 20px;
    height: 20px;
    color: white;
  }
`,co=l.div`
  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: ${e=>e.theme.spacing[1]};
  }

  p {
    font-size: 0.875rem;
    opacity: 0.8;
  }
`,pI=l.form`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[5]};
`,fI=l.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  background: none;
  border: none;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.875rem;
  padding: ${e=>e.theme.spacing[2]} 0;
  cursor: pointer;
  transition: color ${e=>e.theme.transition.fast};
  width: fit-content;
  margin-bottom: ${e=>e.theme.spacing[2]};

  &:hover {
    color: ${e=>e.theme.colors.primary[600]};
  }
`,gx=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[2]};
`,xx=l.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,yx=l.div`
  position: relative;
`,vx=l.input`
  width: 100%;
  padding: ${e=>e.theme.spacing[3]};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1rem;
  transition: border-color ${e=>e.theme.transition.fast};

  &:focus {
    border-color: ${e=>e.theme.colors.primary[400]};
    outline: none;
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }

  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
`,gI=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,xI=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
`,yI=l.input`
  accent-color: ${e=>e.theme.colors.primary[500]};
  cursor: pointer;
`,vI=l(gs)`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.primary[600]};
  text-decoration: none;
  transition: color ${e=>e.theme.transition.fast};

  &:hover {
    color: ${e=>e.theme.colors.primary[700]};
    text-decoration: underline;
  }
`,bI=l.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${e=>e.theme.spacing[3]};
  background-color: ${e=>e.theme.colors.primary[500]};
  color: white;
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color ${e=>e.theme.transition.fast};

  &:hover {
    background-color: ${e=>e.theme.colors.primary[600]};
  }

  &:active {
    background-color: ${e=>e.theme.colors.primary[700]};
  }
`,wI=l.div`
  padding: ${e=>e.theme.spacing[3]};
  background-color: ${e=>e.theme.colors.danger[50]};
  color: ${e=>e.theme.colors.danger[700]};
  border: 1px solid ${e=>e.theme.colors.danger[100]};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.875rem;
`,$I=l.div`
  margin-top: ${e=>e.theme.spacing[6]};
  border-top: 1px solid ${e=>e.theme.colors.border.light};
  padding-top: ${e=>e.theme.spacing[6]};
`,jI=l.p`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: ${e=>e.theme.spacing[3]};
`,kI=l.div`
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing[4]};
  font-size: 0.875rem;

  > p {
    margin-bottom: ${e=>e.theme.spacing[2]};
    color: ${e=>e.theme.colors.text.secondary};
  }
`,bx=l.div`
  margin-bottom: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.primary};

  strong {
    font-weight: 500;
    margin-right: ${e=>e.theme.spacing[2]};
  }
`,CI=l.button`
  display: inline-flex;
  align-items: center;
  background-color: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.primary[600]};
  border: 1px solid ${e=>e.theme.colors.primary[200]};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[3]};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  margin-top: ${e=>e.theme.spacing[2]};

  &:hover {
    background-color: ${e=>e.theme.colors.primary[50]};
    border-color: ${e=>e.theme.colors.primary[300]};
  }
`,SI=e=>{const t=e.getDay(),r=e.getDate()-t+(t===0?-6:1),n=new Date(e.setDate(r)),i=[new Date(n)];for(let s=1;s<7;s++){const a=new Date(n);a.setDate(n.getDate()+s),i.push(a)}return i},Zd=e=>e.toLocaleDateString("en-US",{month:"short",day:"numeric"}),wx=e=>e.toLocaleDateString("en-US",{weekday:"short"}),ji=e=>{const t=e>=12?"PM":"AM";return`${e%12||12}:00 ${t}`},PI=()=>{const[e,t]=$.useState(new Date),[r,n]=$.useState("week"),[i,s]=$.useState(!1),[a,c]=$.useState(null),[d,u]=$.useState(null),h=SI(new Date(e)),m=Array.from({length:10},(x,C)=>C+8),p=[{id:1,title:"Algebra Fundamentals",course:"Algebra",startTime:9,endTime:11,day:0,studentCount:28,location:"Room 101",color:"#4F46E5"},{id:2,title:"Geometry Basics",course:"Geometry",startTime:12,endTime:13,day:0,studentCount:24,location:"Room 102",color:"#7C3AED"},{id:3,title:"Physics Principles",course:"Physics",startTime:9,endTime:10,day:1,studentCount:20,location:"Lab 201",color:"#06B6D4"},{id:4,title:"Chemistry Lab",course:"Chemistry",startTime:11,endTime:13,day:1,studentCount:18,location:"Lab 202",color:"#10B981"},{id:5,title:"Biology 101",course:"Biology",startTime:14,endTime:16,day:2,studentCount:26,location:"Lab 203",color:"#F59E0B"},{id:6,title:"Algebra Advanced",course:"Algebra",startTime:10,endTime:12,day:3,studentCount:22,location:"Room 103",color:"#4F46E5"},{id:7,title:"Geometry Advanced",course:"Geometry",startTime:14,endTime:16,day:4,studentCount:20,location:"Room 102",color:"#7C3AED"}],b=[...new Set(p.map(x=>x.course))],v=a?p.filter(x=>x.course===a):p,j=()=>{const x=new Date(e);r==="week"?x.setDate(x.getDate()-7):x.setMonth(x.getMonth()-1),t(x)},P=()=>{const x=new Date(e);r==="week"?x.setDate(x.getDate()+7):x.setMonth(x.getMonth()+1),t(x)},y=x=>{u(x)},f=x=>{c(x),s(!1)},g=()=>m.map(x=>o.jsxs(GI,{children:[o.jsx(YI,{children:ji(x)}),h.map((C,k)=>{const S=v.filter(w=>w.day===k&&w.startTime<=x&&w.endTime>x);return o.jsx(qI,{children:S.map(w=>{const A=w.startTime===x,T=w.endTime-w.startTime;return A?o.jsxs(QI,{$color:w.color,$duration:T,as:D.div,whileHover:{y:-2,boxShadow:"0 4px 12px rgba(0,0,0,0.1)"},onClick:()=>y(w),children:[o.jsx(KI,{children:w.title}),o.jsxs(XI,{children:[o.jsx(Qe,{size:12}),o.jsxs("span",{children:[ji(w.startTime)," - ",ji(w.endTime)]})]}),o.jsxs(JI,{children:[o.jsx(Io,{size:12}),o.jsx("span",{children:w.location})]})]},w.id):null})},`${x}-${k}`)})]},x));return o.jsxs(TI,{as:D.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[o.jsxs(AI,{children:[o.jsxs("div",{children:[o.jsx(MI,{children:"Schedule"}),o.jsx(zI,{children:"Manage your teaching schedule and classes"})]}),o.jsx(DI,{children:o.jsxs(EI,{children:[o.jsx($x,{$isActive:r==="week",onClick:()=>n("week"),children:"Week"}),o.jsx($x,{$isActive:r==="month",onClick:()=>n("month"),children:"Month"})]})})]}),o.jsxs(LI,{children:[o.jsxs(RI,{children:[o.jsx(jx,{onClick:j,children:o.jsx(qt,{})}),o.jsxs(II,{children:[o.jsx(Ae,{}),o.jsx("span",{children:r==="week"?`${Zd(h[0])} - ${Zd(h[6])}`:e.toLocaleDateString("en-US",{month:"long",year:"numeric"})})]}),o.jsx(jx,{onClick:P,children:o.jsx(Yt,{})})]}),o.jsxs(FI,{children:[o.jsxs(NI,{onClick:()=>s(!i),children:[o.jsx(Nt,{}),o.jsx("span",{children:a||"All Courses"}),o.jsx(de,{style:{transform:i?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s ease"}})]}),i&&o.jsxs(BI,{children:[o.jsx(kx,{onClick:()=>f(null),$isActive:a===null,children:"All Courses"}),b.map((x,C)=>o.jsx(kx,{onClick:()=>f(x),$isActive:a===x,children:x},C))]})]})]}),r==="week"&&o.jsxs(OI,{children:[o.jsxs(VI,{children:[o.jsx(_I,{}),h.map((x,C)=>o.jsxs(WI,{children:[o.jsx(UI,{children:wx(x)}),o.jsx(HI,{children:Zd(x)})]},C))]}),g()]}),r==="month"&&o.jsxs(ZI,{children:[o.jsx(On,{size:24}),o.jsx("p",{children:"Month view is currently under development. Please use the Week view for scheduling."})]}),d&&o.jsxs(eF,{children:[o.jsxs(rF,{children:[o.jsxs(nF,{$color:d.color,children:[o.jsx("h3",{children:d.title}),o.jsx(oF,{onClick:()=>u(null),children:"×"})]}),o.jsxs(iF,{children:[o.jsxs(ki,{children:[o.jsx(Le,{size:16}),o.jsxs("span",{children:["Course: ",d.course]})]}),o.jsxs(ki,{children:[o.jsx(Qe,{size:16}),o.jsxs("span",{children:["Time: ",ji(d.startTime)," - ",ji(d.endTime)]})]}),o.jsxs(ki,{children:[o.jsx(Ae,{size:16}),o.jsxs("span",{children:["Day: ",wx(h[d.day])]})]}),o.jsxs(ki,{children:[o.jsx(Ce,{size:16}),o.jsxs("span",{children:["Students: ",d.studentCount]})]}),o.jsxs(ki,{children:[o.jsx(Io,{size:16}),o.jsxs("span",{children:["Location: ",d.location]})]})]}),o.jsx(sF,{children:o.jsx(aF,{children:"View Class Details"})})]}),o.jsx(tF,{onClick:()=>u(null)})]})]})},TI=l.div`
  padding: 1rem 0;
`,AI=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`,MI=l.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  color: ${e=>e.theme.colors.text.primary};
`,zI=l.p`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 0.25rem 0 0;
`,DI=l.div`
  display: flex;
  gap: 1rem;
`,EI=l.div`
  display: flex;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: 0.5rem;
  overflow: hidden;
`,$x=l.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${e=>e.$isActive?e.theme.colors.primary[500]:"transparent"};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.primary};
  font-weight: ${e=>e.$isActive?600:400};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.background.hover};
  }
`,LI=l.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`,RI=l.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,jx=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  border: none;
  background-color: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.primary};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
`,II=l.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
  
  svg {
    color: ${e=>e.theme.colors.text.secondary};
  }
`,FI=l.div`
  position: relative;
`,NI=l.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${e=>e.theme.colors.background.secondary};
  border: none;
  border-radius: 0.375rem;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
  
  svg {
    color: ${e=>e.theme.colors.text.secondary};
  }
`,BI=l.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 0.375rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 12rem;
  overflow: hidden;
`,kx=l.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${e=>e.$isActive?e.theme.colors.background.hover:"transparent"};
  color: ${e=>e.$isActive?e.theme.colors.primary[500]:e.theme.colors.text.primary};
  font-weight: ${e=>e.$isActive?500:400};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
`,OI=l.div`
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,VI=l.div`
  display: grid;
  grid-template-columns: 80px repeat(7, 1fr);
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,_I=l.div`
  padding: 0.75rem;
  border-right: 1px solid ${e=>e.theme.colors.border.light};
  text-align: center;
`,WI=l.div`
  padding: 0.75rem;
  text-align: center;
  border-right: 1px solid ${e=>e.theme.colors.border.light};
  
  &:last-child {
    border-right: none;
  }
`,UI=l.div`
  font-weight: 500;
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.primary};
`,HI=l.div`
  font-size: 0.75rem;
  color: ${e=>e.theme.colors.text.secondary};
`,GI=l.div`
  display: grid;
  grid-template-columns: 80px repeat(7, 1fr);
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  min-height: 5rem;
  
  &:last-child {
    border-bottom: none;
  }
`,YI=l.div`
  padding: 0.75rem;
  font-size: 0.75rem;
  color: ${e=>e.theme.colors.text.secondary};
  border-right: 1px solid ${e=>e.theme.colors.border.light};
  display: flex;
  align-items: flex-start;
  justify-content: center;
`,qI=l.div`
  padding: 0.25rem;
  border-right: 1px solid ${e=>e.theme.colors.border.light};
  position: relative;
  
  &:last-child {
    border-right: none;
  }
`,QI=l.div`
  background-color: ${e=>`${e.$color}15`}; /* 15% opacity */
  border-left: 3px solid ${e=>e.$color};
  border-radius: 0.25rem;
  padding: 0.5rem;
  height: ${e=>`calc(${e.$duration*5}rem - 0.75rem)`};
  cursor: pointer;
  transition: all 0.2s ease;
  overflow: hidden;
  
  &:hover {
    background-color: ${e=>`${e.$color}25`}; /* 25% opacity */
  }
`,KI=l.div`
  font-weight: 500;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e=>e.theme.colors.text.primary};
`,XI=l.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 0.25rem;
`,JI=l.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: ${e=>e.theme.colors.text.secondary};
`,ZI=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 0.5rem;
  padding: 3rem;
  text-align: center;
  color: ${e=>e.theme.colors.text.secondary};
  gap: 1rem;
  
  svg {
    color: ${e=>e.theme.colors.primary[400]};
  }
  
  p {
    margin: 0;
    max-width: 30rem;
  }
`,eF=l.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,tF=l.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`,rF=l.div`
  width: 100%;
  max-width: 30rem;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 0.5rem;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`,nF=l.div`
  background-color: ${e=>e.$color};
  color: white;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }
`,oF=l.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border-radius: 9999px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`,iF=l.div`
  padding: 1.5rem;
`,ki=l.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: ${e=>e.theme.colors.text.primary};
  
  svg {
    color: ${e=>e.theme.colors.text.secondary};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`,sF=l.div`
  padding: 1rem 1.5rem;
  background-color: ${e=>e.theme.colors.background.secondary};
  display: flex;
  justify-content: flex-end;
`,aF=l.button`
  background-color: ${e=>e.theme.colors.primary[500]};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[600]};
  }
`,lF=()=>{var S;const[e,t]=$.useState(null),[r,n]=$.useState(""),[i,s]=$.useState(""),[a,c]=$.useState(!1),[d,u]=$.useState(!1),[h,m]=$.useState(!1),p=$.useRef(null),b=1,v=[{id:"1",participants:[{id:1,name:"You (Teacher)",avatar:"https://randomuser.me/api/portraits/men/32.jpg",role:"teacher",status:"online"},{id:2,name:"John Smith",avatar:"https://randomuser.me/api/portraits/men/42.jpg",role:"student",status:"online"}],lastMessage:{id:"m1",content:"I have a question about the homework assignment",timestamp:new Date(Date.now()-1e3*60*5),sender:"John Smith",senderId:2,isRead:!1},unreadCount:1},{id:"2",participants:[{id:1,name:"You (Teacher)",avatar:"https://randomuser.me/api/portraits/men/32.jpg",role:"teacher",status:"online"},{id:3,name:"Emily Johnson",avatar:"https://randomuser.me/api/portraits/women/26.jpg",role:"student",status:"offline",lastActive:new Date(Date.now()-1e3*60*30)}],lastMessage:{id:"m2",content:"Thank you for the feedback on my project!",timestamp:new Date(Date.now()-1e3*60*60*2),sender:"You (Teacher)",senderId:1,isRead:!0},unreadCount:0},{id:"3",isGroup:!0,name:"Math Class Group",participants:[{id:1,name:"You (Teacher)",avatar:"https://randomuser.me/api/portraits/men/32.jpg",role:"teacher",status:"online"},{id:2,name:"John Smith",avatar:"https://randomuser.me/api/portraits/men/42.jpg",role:"student",status:"online"},{id:3,name:"Emily Johnson",avatar:"https://randomuser.me/api/portraits/women/26.jpg",role:"student",status:"offline"},{id:4,name:"Michael Brown",avatar:"https://randomuser.me/api/portraits/men/55.jpg",role:"student",status:"away"}],lastMessage:{id:"m3",content:"Don't forget about the quiz tomorrow!",timestamp:new Date(Date.now()-1e3*60*60*24),sender:"You (Teacher)",senderId:1,isRead:!0},unreadCount:0},{id:"4",participants:[{id:1,name:"You (Teacher)",avatar:"https://randomuser.me/api/portraits/men/32.jpg",role:"teacher",status:"online"},{id:5,name:"Sarah Wilson",avatar:"https://randomuser.me/api/portraits/women/33.jpg",role:"student",status:"online"}],lastMessage:{id:"m4",content:"I'll be absent tomorrow due to a doctor's appointment",timestamp:new Date(Date.now()-1e3*60*60*4),sender:"Sarah Wilson",senderId:5,isRead:!0},unreadCount:0}],j={1:[{id:"m1-1",content:"Hello, how can I help you today?",timestamp:new Date(Date.now()-1e3*60*15),sender:"You (Teacher)",senderId:1,isRead:!0},{id:"m1-2",content:"I have a question about the homework assignment",timestamp:new Date(Date.now()-1e3*60*5),sender:"John Smith",senderId:2,isRead:!1}],2:[{id:"m2-1",content:"Hi Emily, I've reviewed your project",timestamp:new Date(Date.now()-1e3*60*60*3),sender:"You (Teacher)",senderId:1,isRead:!0},{id:"m2-2",content:"Great work on the analysis section!",timestamp:new Date(Date.now()-1e3*60*60*3+1e3*30),sender:"You (Teacher)",senderId:1,isRead:!0},{id:"m2-3",content:"Thank you for the feedback on my project!",timestamp:new Date(Date.now()-1e3*60*60*2),sender:"Emily Johnson",senderId:3,isRead:!0}],3:[{id:"m3-1",content:"Hello everyone, welcome to the Math Class Group!",timestamp:new Date(Date.now()-1e3*60*60*24*2),sender:"You (Teacher)",senderId:1,isRead:!0},{id:"m3-2",content:"We'll use this group for class announcements",timestamp:new Date(Date.now()-1e3*60*60*24*2+1e3*60),sender:"You (Teacher)",senderId:1,isRead:!0},{id:"m3-3",content:"Thanks for creating this group!",timestamp:new Date(Date.now()-1e3*60*60*24*2+1e3*60*5),sender:"John Smith",senderId:2,isRead:!0},{id:"m3-4",content:"Don't forget about the quiz tomorrow!",timestamp:new Date(Date.now()-1e3*60*60*24),sender:"You (Teacher)",senderId:1,isRead:!0}],4:[{id:"m4-1",content:"Hi Sarah, how are you doing with the assignment?",timestamp:new Date(Date.now()-1e3*60*60*5),sender:"You (Teacher)",senderId:1,isRead:!0},{id:"m4-2",content:"I'm working on it, but I have a doctor's appointment tomorrow",timestamp:new Date(Date.now()-1e3*60*60*4-1e3*60),sender:"Sarah Wilson",senderId:5,isRead:!0},{id:"m4-3",content:"I'll be absent tomorrow due to a doctor's appointment",timestamp:new Date(Date.now()-1e3*60*60*4),sender:"Sarah Wilson",senderId:5,isRead:!0}]},[P,y]=$.useState(v),[f,g]=$.useState(j);$.useEffect(()=>{P.length>0&&!e&&t(P[0].id)},[P,e]),$.useEffect(()=>{var w;(w=p.current)==null||w.scrollIntoView({behavior:"smooth"})},[e,f]);const x=P.filter(w=>{if(w.isGroup&&w.name)return w.name.toLowerCase().includes(r.toLowerCase());const A=w.participants.find(T=>T.id!==b);return A?A.name.toLowerCase().includes(r.toLowerCase()):!1}),C=()=>{if(!i.trim()||!e)return;const w={id:`m-${Date.now()}`,content:i,timestamp:new Date,sender:"You (Teacher)",senderId:b,isRead:!1};g(A=>({...A,[e]:[...A[e]||[],w]})),y(A=>A.map(T=>T.id===e?{...T,lastMessage:w,unreadCount:0}:T)),s(""),c(!1),u(!1)},k=w=>{const T=(new Date().getTime()-w.getTime())/(1e3*60*60);return T<24?w.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):T<48?"Yesterday":w.toLocaleDateString([],{month:"short",day:"numeric"})};return o.jsxs(cF,{as:D.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[o.jsxs(dF,{children:[o.jsxs("div",{children:[o.jsx(uF,{children:"Messages"}),o.jsx(hF,{children:"Chat with students and groups"})]}),o.jsx(mF,{children:o.jsxs(pF,{onClick:()=>console.log("New message"),children:[o.jsx(fr,{size:16}),o.jsx("span",{children:"New Message"})]})})]}),o.jsxs(fF,{children:[o.jsxs(gF,{className:h?"hidden":"",as:D.div,initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{duration:.3},children:[o.jsxs(xF,{children:[o.jsx(yF,{children:o.jsx(Se,{})}),o.jsx(vF,{type:"text",placeholder:"Search messages...",value:r,onChange:w=>n(w.target.value)})]}),o.jsx(bF,{children:o.jsx(he,{children:x.map(w=>{const A=w.isGroup?null:w.participants.find(T=>T.id!==b);return o.jsxs(wF,{$isActive:e===w.id,$hasUnread:w.unreadCount>0,onClick:()=>{t(w.id),m(!0)},as:D.div,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.2},whileHover:{x:3},children:[o.jsxs(Ow,{children:[w.isGroup?o.jsx(Sx,{children:o.jsx(Ce,{size:22})}):o.jsx(Cx,{src:(A==null?void 0:A.avatar)||"",alt:(A==null?void 0:A.name)||""}),(A==null?void 0:A.status)==="online"&&o.jsx(Px,{$status:"online"})]}),o.jsxs($F,{children:[o.jsx(jF,{children:w.isGroup?w.name:A==null?void 0:A.name}),o.jsx(kF,{children:w.lastMessage.content.length>35?`${w.lastMessage.content.substring(0,35)}...`:w.lastMessage.content})]}),o.jsxs(CF,{children:[o.jsx(Tx,{$isCurrentUser:!1,children:k(w.lastMessage.timestamp)}),w.unreadCount>0&&o.jsx(SF,{children:w.unreadCount})]})]},w.id)})})})]}),o.jsx(PF,{className:h?"":"hidden",children:e?o.jsxs(o.Fragment,{children:[o.jsxs(TF,{children:[h&&o.jsx(AF,{onClick:()=>m(!1),children:o.jsx(qt,{})}),(()=>{const w=P.find(T=>T.id===e);if(!w)return null;const A=w.isGroup?null:w.participants.find(T=>T.id!==b);return o.jsxs(MF,{children:[o.jsxs(zF,{children:[w.isGroup?o.jsx(Sx,{children:o.jsx(Ce,{size:22})}):o.jsx(Cx,{src:(A==null?void 0:A.avatar)||"",alt:(A==null?void 0:A.name)||""}),(A==null?void 0:A.status)==="online"&&o.jsx(Px,{$status:"online"})]}),o.jsxs(DF,{children:[o.jsx(EF,{children:w.isGroup?w.name:A==null?void 0:A.name}),o.jsx(LF,{children:w.isGroup?`${w.participants.length} participants`:(A==null?void 0:A.status)==="online"?"Online":(A==null?void 0:A.status)==="away"?"Away":"Offline"})]})]})})(),o.jsxs(RF,{children:[o.jsx(eu,{title:"Audio Call",children:o.jsx(m6,{})}),o.jsx(eu,{title:"Video Call",children:o.jsx(up,{})}),o.jsx(eu,{title:"Info",children:o.jsx(On,{})})]})]}),o.jsxs(IF,{children:[o.jsx(he,{children:e&&((S=f[e])==null?void 0:S.map((w,A)=>o.jsx(FF,{$isCurrentUser:w.senderId===b,as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:A*.05},children:o.jsxs(NF,{$isCurrentUser:w.senderId===b,children:[o.jsx(BF,{children:w.content}),o.jsxs(Tx,{$isCurrentUser:w.senderId===b,children:[k(w.timestamp),w.senderId===b&&o.jsx(OF,{children:w.isRead?o.jsx(Ul,{style:{color:"#4CAF50"}}):o.jsx(Ul,{})})]})]})},w.id)))}),o.jsx("div",{ref:p})]}),o.jsxs(VF,{children:[o.jsx(ql,{onClick:()=>u(!d),children:o.jsx(dp,{})}),d&&o.jsxs(_F,{children:[o.jsx(Ax,{title:"Send Image",children:o.jsx(c6,{})}),o.jsx(Ax,{title:"Send File",children:o.jsx(Mh,{})})]}),o.jsx(WF,{placeholder:"Type a message...",value:i,onChange:w=>s(w.target.value),onKeyPress:w=>w.key==="Enter"&&C()}),o.jsx(ql,{onClick:()=>c(!a),children:o.jsx(Tw,{})}),o.jsx(UF,{disabled:!i.trim(),onClick:C,children:o.jsx(Sw,{})})]})]}):o.jsxs(HF,{children:[o.jsx(Mc,{size:48}),o.jsx(GF,{children:"No Conversation Selected"}),o.jsx(YF,{children:"Choose a conversation from the list to start messaging"})]})})]})]})},cF=l.div`
  padding: 1rem 0;
`,dF=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`,uF=l.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  color: ${e=>e.theme.colors.text.primary};
`,hF=l.p`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 0.25rem 0 0;
`,mF=l.div`
  display: flex;
  gap: 1rem;
`,pF=l.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${e=>e.theme.colors.primary[500]};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[600]};
  }
`,fF=l.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 1rem;
  height: calc(100vh - 180px);
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    
    .hidden {
      display: none;
    }
  }
`,gF=l.div`
  background-color: ${e=>e.theme.colors.background.secondary};
  border-right: 1px solid ${e=>e.theme.colors.border.light};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,xF=l.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,yF=l.div`
  color: ${e=>e.theme.colors.text.secondary};
  margin-right: 0.5rem;
`,vF=l.input`
  flex: 1;
  border: none;
  background: transparent;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.875rem;
  outline: none;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
`,bF=l.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem 0;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${e=>e.theme.colors.border.light};
    border-radius: 3px;
  }
`,wF=l.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${e=>e.$isActive?`${e.theme.colors.primary[500]}15`:"transparent"};
  border-left: 3px solid ${e=>e.$isActive?e.theme.colors.primary[500]:"transparent"};
  
  &:hover {
    background-color: ${e=>e.$isActive?`${e.theme.colors.primary[500]}15`:e.theme.colors.background.hover};
  }
`,Ow=l.div`
  position: relative;
  margin-right: 0.75rem;
  flex-shrink: 0;
`,Cx=l.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${e=>e.theme.colors.background.primary};
`,Sx=l.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary[100]};
  color: ${e=>e.theme.colors.primary[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${e=>e.theme.colors.background.primary};
`,Px=l.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${e=>e.$status==="online"?"#4CAF50":e.$status==="away"?"#FFC107":"#9E9E9E"};
  border: 2px solid ${e=>e.theme.colors.background.primary};
`,$F=l.div`
  flex: 1;
  min-width: 0;
`,jF=l.div`
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,kF=l.div`
  font-size: 0.75rem;
  color: ${e=>e.theme.colors.text.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,CF=l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 0.5rem;
`,Tx=l.div`
  font-size: 0.7rem;
  color: ${e=>e.theme.colors.text.tertiary};
  margin-bottom: 0.25rem;
`,SF=l.div`
  background-color: ${e=>e.theme.colors.primary[500]};
  color: white;
  font-size: 0.7rem;
  font-weight: 500;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,PF=l.div`
  display: flex;
  flex-direction: column;
  background-color: ${e=>e.theme.colors.background.primary};
  overflow: hidden;
`,TF=l.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  background-color: ${e=>e.theme.colors.background.secondary};
`,AF=l.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.text.primary};
  cursor: pointer;
  padding: 0.375rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`,MF=l.div`
  display: flex;
  align-items: center;
  flex: 1;
`,zF=l(Ow)`
  margin-right: 0.75rem;
`,DF=l.div`
  flex: 1;
`,EF=l.div`
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,LF=l.div`
  font-size: 0.75rem;
  color: ${e=>e.theme.colors.text.secondary};
`,RF=l.div`
  display: flex;
  gap: 0.5rem;
`,eu=l.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  padding: 0.375rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
    color: ${e=>e.theme.colors.primary[500]};
  }
`,IF=l.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${e=>e.theme.colors.border.light};
    border-radius: 3px;
  }
`,FF=l.div`
  display: flex;
  justify-content: ${e=>e.$isCurrentUser?"flex-end":"flex-start"};
  margin-bottom: 1rem;
`,NF=l.div`
  max-width: 70%;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  border-bottom-right-radius: ${e=>e.$isCurrentUser?"0.25rem":"1rem"};
  border-bottom-left-radius: ${e=>e.$isCurrentUser?"1rem":"0.25rem"};
  background-color: ${e=>e.$isCurrentUser?e.theme.colors.primary[500]:e.theme.colors.background.secondary};
  color: ${e=>e.$isCurrentUser?"white":e.theme.colors.text.primary};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`,BF=l.div`
  font-size: 0.875rem;
  line-height: 1.5;
  word-break: break-word;
`,OF=l.div`
  display: flex;
`,VF=l.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-top: 1px solid ${e=>e.theme.colors.border.light};
  background-color: ${e=>e.theme.colors.background.secondary};
  position: relative;
`,ql=l.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${e=>e.theme.colors.primary[500]};
  }
`,_F=l.div`
  position: absolute;
  bottom: 100%;
  left: 1rem;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  z-index: 10;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 15px;
    width: 10px;
    height: 10px;
    background-color: ${e=>e.theme.colors.background.primary};
    transform: rotate(45deg);
  }
`,Ax=l(ql)`
  background-color: ${e=>e.theme.colors.background.secondary};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
`,WF=l.input`
  flex: 1;
  border: none;
  background-color: transparent;
  padding: 0.5rem 0.75rem;
  border-radius: 1.5rem;
  outline: none;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.875rem;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
`,UF=l(ql)`
  color: ${e=>e.disabled?e.theme.colors.text.tertiary:e.theme.colors.primary[500]};
  pointer-events: ${e=>e.disabled?"none":"auto"};
`,HF=l.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: ${e=>e.theme.colors.text.tertiary};
`,GF=l.h2`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 1rem 0 0.5rem;
  color: ${e=>e.theme.colors.text.primary};
`,YF=l.p`
  font-size: 0.875rem;
  text-align: center;
  max-width: 20rem;
  margin: 0;
`,qF=()=>{const[e,t]=$.useState(""),[r,n]=$.useState("all"),s=[{id:1,name:"Mathematics",teacher:"Dr. Smith",progress:75,nextClass:"Tomorrow, 9:00 AM",description:"Advanced algebra and calculus concepts for college preparation.",startDate:"2023-01-15",endDate:"2023-06-30",creditHours:4,materials:12,assignments:8,status:"active"},{id:2,name:"Physics",teacher:"Prof. Johnson",progress:60,nextClass:"Thursday, 11:30 AM",description:"Mechanics, thermodynamics, and introduction to electromagnetism.",startDate:"2023-01-15",endDate:"2023-06-30",creditHours:4,materials:15,assignments:10,status:"active"},{id:3,name:"English Literature",teacher:"Mrs. Davis",progress:85,nextClass:"Wednesday, 1:00 PM",description:"Analysis of classic and contemporary literary works with focus on critical thinking.",startDate:"2023-01-15",endDate:"2023-06-30",creditHours:3,materials:20,assignments:6,status:"active"},{id:4,name:"Chemistry",teacher:"Dr. Wilson",progress:50,nextClass:"Friday, 10:15 AM",description:"Fundamental principles of chemistry including atomic structure and chemical bonding.",startDate:"2023-01-15",endDate:"2023-06-30",creditHours:4,materials:18,assignments:9,status:"active"},{id:5,name:"World History",teacher:"Prof. Anderson",progress:65,nextClass:"Monday, 2:00 PM",description:"Survey of major historical events and civilizations from ancient times to present day.",startDate:"2023-01-15",endDate:"2023-06-30",creditHours:3,materials:22,assignments:7,status:"active"},{id:6,name:"Computer Science",teacher:"Dr. Roberts",progress:90,nextClass:"Tuesday, 3:30 PM",description:"Introduction to programming concepts, algorithms, and data structures.",startDate:"2023-01-15",endDate:"2023-06-30",creditHours:4,materials:16,assignments:12,status:"active"}].filter(a=>{const c=a.name.toLowerCase().includes(e.toLowerCase())||a.teacher.toLowerCase().includes(e.toLowerCase());return r==="all"?c:c&&a.status===r});return o.jsxs(QF,{children:[o.jsx(KF,{children:o.jsxs(XF,{children:[o.jsx(JF,{children:"My Courses"}),o.jsx(ZF,{children:"View and manage your enrolled courses"})]})}),o.jsxs(e9,{children:[o.jsxs(t9,{children:[o.jsx(r9,{children:o.jsx(Se,{size:18})}),o.jsx(n9,{type:"text",placeholder:"Search courses...",value:e,onChange:a=>t(a.target.value)})]}),o.jsxs(o9,{children:[o.jsx(La,{$isActive:r==="all",onClick:()=>n("all"),children:"All Courses"}),o.jsx(La,{$isActive:r==="active",onClick:()=>n("active"),children:"Active"}),o.jsx(La,{$isActive:r==="completed",onClick:()=>n("completed"),children:"Completed"}),o.jsx(La,{$isActive:r==="upcoming",onClick:()=>n("upcoming"),children:"Upcoming"})]})]}),o.jsx(i9,{children:s.map(a=>o.jsxs(s9,{as:D.div,whileHover:{y:-5},children:[o.jsx(a9,{$progress:a.progress,children:o.jsxs(l9,{children:[o.jsxs(c9,{children:[a.progress,"% Complete"]}),o.jsx(d9,{children:o.jsx(u9,{$progress:a.progress})})]})}),o.jsxs(h9,{children:[o.jsx(m9,{children:o.jsx(Le,{size:24})}),o.jsxs(p9,{children:[o.jsx(f9,{children:a.name}),o.jsxs(g9,{children:[o.jsx(dt,{size:14}),o.jsx("span",{children:a.teacher})]}),o.jsx(x9,{children:a.description}),o.jsxs(y9,{children:[o.jsxs(tu,{children:[o.jsx(ru,{children:"Start Date"}),o.jsx(nu,{children:new Date(a.startDate).toLocaleDateString()})]}),o.jsxs(tu,{children:[o.jsx(ru,{children:"End Date"}),o.jsx(nu,{children:new Date(a.endDate).toLocaleDateString()})]}),o.jsxs(tu,{children:[o.jsx(ru,{children:"Credit Hours"}),o.jsx(nu,{children:a.creditHours})]})]}),o.jsxs(v9,{children:[o.jsxs(Mx,{children:[o.jsx(zx,{children:a.materials}),o.jsx(Dx,{children:"Materials"})]}),o.jsxs(Mx,{children:[o.jsx(zx,{children:a.assignments}),o.jsx(Dx,{children:"Assignments"})]})]})]})]}),o.jsxs(b9,{children:[o.jsxs(w9,{children:[o.jsx(Ae,{size:14}),o.jsxs("span",{children:["Next Class: ",a.nextClass]})]}),o.jsxs($9,{children:["View Course",o.jsx(Le,{size:14})]})]})]},a.id))})]})},QF=l.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,KF=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,XF=l.div`
  display: flex;
  flex-direction: column;
`,JF=l.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0;
`,ZF=l.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 4px 0 0 0;
`,e9=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: ${e=>e.theme.shadows.sm};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,t9=l.div`
  display: flex;
  align-items: center;
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 8px;
  padding: 0 12px;
  width: 100%;
  max-width: 320px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    max-width: 100%;
  }
`,r9=l.div`
  color: ${e=>e.theme.colors.text.secondary};
  margin-right: 8px;
`,n9=l.input`
  border: none;
  background: transparent;
  height: 40px;
  width: 100%;
  color: ${e=>e.theme.colors.text.primary};
  outline: none;
  font-size: 14px;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.secondary};
  }
`,o9=l.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,La=l.button`
  background-color: ${e=>e.$isActive?e.children==="All Courses"?"#4F46E5":e.theme.colors.primary:"transparent"};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.secondary};
  border: 1px solid ${e=>e.$isActive?e.children==="All Courses"?"#4F46E5":e.theme.colors.primary:e.theme.colors.border.light};
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.$isActive?e.children==="All Courses"?"#4338CA":e.theme.colors.primary:e.theme.colors.background.hover};
  }
`,i9=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 20px;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,s9=l(en)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 12px;
  border: 1px solid ${e=>e.theme.colors.border.light};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${e=>e.theme.shadows.md};
  }
`,a9=l.div`
  background: linear-gradient(135deg, 
    ${e=>{const t=e.theme.colors.primary;return`${t}30, ${t}10`}}
  );
  padding: 16px;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,l9=l.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,c9=l.div`
  color: ${e=>e.theme.colors.text.primary};
  font-size: 14px;
  font-weight: 500;
`,d9=l.div`
  height: 6px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  overflow: hidden;
`,u9=l.div`
  height: 100%;
  width: ${e=>e.$progress}%;
  background-color: ${e=>e.theme.colors.primary};
  border-radius: 3px;
`,h9=l.div`
  padding: 20px;
  display: flex;
  gap: 16px;
  flex: 1;
  background-color: ${e=>e.theme.colors.background.secondary};
`,m9=l.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: ${e=>`${e.theme.colors.primary}20`};
  color: ${e=>e.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,p9=l.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,f9=l.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,g9=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-top: -8px;
`,x9=l.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  line-height: 1.5;
  margin-bottom: 8px;
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,y9=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 12px;
  background-color: ${e=>e.theme.colors.background.hover};
  border-radius: 8px;
  padding: 12px;
`,tu=l.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ru=l.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
`,nu=l.div`
  font-size: 14px;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,v9=l.div`
  display: flex;
  gap: 24px;
  margin-top: 8px;
`,Mx=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,zx=l.div`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.colors.primary};
`,Dx=l.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
`,b9=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-top: 1px solid ${e=>e.theme.colors.border.light};
  background-color: ${e=>e.theme.colors.background.primary};
`,w9=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 14px;
`,$9=l.button`
  background-color: #4F46E5;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    background-color: #4338CA;
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.sm};
  }
  
  &:active {
    transform: translateY(0);
  }
`,j9=()=>{const[e,t]=$.useState(""),[r,n]=$.useState(null),[i,s]=$.useState(!1),[a,c]=$.useState("all"),d=[{id:1,name:"Mathematics",teacher:"Dr. Smith"},{id:2,name:"Physics",teacher:"Prof. Johnson"},{id:3,name:"English Literature",teacher:"Mrs. Davis"},{id:4,name:"Chemistry",teacher:"Dr. Wilson"},{id:5,name:"World History",teacher:"Prof. Anderson"},{id:6,name:"Computer Science",teacher:"Dr. Roberts"}],h=[{id:1,title:"Introduction to Algebra",courseId:1,courseName:"Mathematics",type:"video",duration:"45 min",thumbnail:"https://img.youtube.com/vi/NybHckSEQBI/hqdefault.jpg",description:"Learn the fundamentals of algebraic expressions and equations.",dateAdded:"2023-04-05",completed:!0,materials:[{id:1,name:"Algebra Cheat Sheet",type:"pdf",size:"2.3 MB"},{id:2,name:"Practice Problems",type:"doc",size:"1.5 MB"}]},{id:2,title:"Quadratic Functions",courseId:1,courseName:"Mathematics",type:"video",duration:"52 min",thumbnail:"https://img.youtube.com/vi/2ZzuZvz33X0/hqdefault.jpg",description:"Understanding quadratic functions and their graphs.",dateAdded:"2023-04-10",completed:!0,materials:[{id:3,name:"Quadratic Functions Slides",type:"ppt",size:"3.1 MB"},{id:4,name:"Example Problems",type:"pdf",size:"1.8 MB"}]},{id:3,title:"Newton's Laws of Motion",courseId:2,courseName:"Physics",type:"video",duration:"63 min",thumbnail:"https://img.youtube.com/vi/kKKM8Y-u7ds/hqdefault.jpg",description:"Comprehensive explanation of Newton's three laws of motion.",dateAdded:"2023-04-12",completed:!1,materials:[{id:5,name:"Newton's Laws Summary",type:"pdf",size:"1.2 MB"},{id:6,name:"Physics Lab Instructions",type:"docx",size:"1.7 MB"}]},{id:4,title:"Shakespeare's Macbeth: Analysis",courseId:3,courseName:"English Literature",type:"reading",duration:"30 min",thumbnail:"https://www.folger.edu/sites/default/files/styles/hero_tablet_modern_1x/public/2022-12/Macbeth-FC-header.jpg",description:"Critical analysis of themes and motifs in Macbeth.",dateAdded:"2023-04-15",completed:!1,materials:[{id:7,name:"Macbeth Full Text",type:"pdf",size:"4.5 MB"},{id:8,name:"Character Analysis Guide",type:"pdf",size:"2.2 MB"}]},{id:5,title:"Periodic Table Overview",courseId:4,courseName:"Chemistry",type:"interactive",duration:"40 min",thumbnail:"https://sciencenotes.org/wp-content/uploads/2023/01/Colorful-Periodic-Table-Trends.png",description:"Interactive exploration of the periodic table elements.",dateAdded:"2023-04-18",completed:!1,materials:[{id:9,name:"Periodic Table Guide",type:"pdf",size:"3.5 MB"},{id:10,name:"Element Properties Worksheet",type:"docx",size:"1.3 MB"}]},{id:6,title:"World War II: Causes and Effects",courseId:5,courseName:"World History",type:"video",duration:"55 min",thumbnail:"https://www.nationalww2museum.org/sites/default/files/styles/wide_medium/public/2017-07/battle%20of%20midway.jpg",description:"Detailed analysis of the causes and global impact of World War II.",dateAdded:"2023-04-20",completed:!1,materials:[{id:11,name:"WWII Timeline",type:"pdf",size:"2.8 MB"},{id:12,name:"Historical Documents",type:"zip",size:"5.2 MB"}]},{id:7,title:"Introduction to Python Programming",courseId:6,courseName:"Computer Science",type:"interactive",duration:"50 min",thumbnail:"https://www.python.org/static/community_logos/python-logo.png",description:"Learn the basics of Python programming with interactive exercises.",dateAdded:"2023-04-22",completed:!1,materials:[{id:13,name:"Python Basics Handbook",type:"pdf",size:"4.1 MB"},{id:14,name:"Sample Code Files",type:"zip",size:"3.7 MB"}]}].filter(v=>{const j=v.title.toLowerCase().includes(e.toLowerCase())||v.description.toLowerCase().includes(e.toLowerCase()),P=r?v.courseId===parseInt(r):!0,y=a==="all"?!0:a==="completed"?v.completed:!v.completed;return j&&P&&y}),m=v=>{n(v),s(!1)},p=v=>{switch(v){case"video":return o.jsx(e0,{size:16});case"reading":return o.jsx(Qt,{size:16});case"interactive":return o.jsx(Le,{size:16});default:return o.jsx(Mh,{size:16})}},b=v=>{if(!v)return"All Courses";const j=d.find(P=>P.id===parseInt(v));return j?j.name:"All Courses"};return o.jsxs(k9,{children:[o.jsx(C9,{children:o.jsxs(S9,{children:[o.jsx(P9,{children:"Lessons"}),o.jsx(T9,{children:"Access your course lessons and materials"})]})}),o.jsxs(A9,{children:[o.jsxs(M9,{children:[o.jsx(z9,{children:o.jsx(Se,{size:18})}),o.jsx(D9,{type:"text",placeholder:"Search lessons...",value:e,onChange:v=>t(v.target.value)})]}),o.jsxs(E9,{children:[o.jsxs(L9,{children:[o.jsxs(R9,{onClick:()=>s(!i),children:[o.jsx("span",{children:b(r)}),o.jsx(de,{size:16})]}),i&&o.jsxs(I9,{children:[o.jsx(Ex,{onClick:()=>m(null),$isSelected:r===null,children:"All Courses"}),d.map(v=>o.jsx(Ex,{onClick:()=>m(v.id.toString()),$isSelected:r===v.id.toString(),children:v.name},v.id))]})]}),o.jsxs(F9,{children:[o.jsx(ou,{$isActive:a==="all",onClick:()=>c("all"),children:"All"}),o.jsx(ou,{$isActive:a==="in-progress",onClick:()=>c("in-progress"),children:"In Progress"}),o.jsx(ou,{$isActive:a==="completed",onClick:()=>c("completed"),children:"Completed"})]})]})]}),o.jsx(N9,{children:h.map(v=>o.jsxs(B9,{as:D.div,whileHover:{y:-5},children:[o.jsxs(O9,{$completed:v.completed,children:[o.jsxs(_9,{children:[p(v.type),o.jsx("span",{children:v.type.charAt(0).toUpperCase()+v.type.slice(1)})]}),o.jsx(V9,{src:v.thumbnail,alt:v.title}),o.jsxs(W9,{children:[o.jsx(Qe,{size:14}),o.jsx("span",{children:v.duration})]}),v.completed&&o.jsxs(U9,{children:[o.jsx(Zr,{size:16}),o.jsx("span",{children:"Completed"})]}),o.jsx(H9,{className:"play-overlay",children:o.jsx(G9,{children:o.jsx(e0,{size:24})})})]}),o.jsxs(Y9,{children:[o.jsxs(q9,{children:[o.jsx(Q9,{children:v.courseName}),o.jsx(K9,{children:v.title}),o.jsx(X9,{children:v.description})]}),o.jsxs(J9,{children:[o.jsx(Z9,{children:"Materials"}),o.jsx(eN,{children:v.materials.map(j=>o.jsxs(tN,{children:[o.jsxs(rN,{children:[o.jsx(nN,{children:o.jsx(Mh,{size:14})}),o.jsx(oN,{children:j.name})]}),o.jsxs(iN,{children:[o.jsx(sN,{children:j.size}),o.jsx(aN,{children:o.jsx(Hn,{size:14})})]})]},j.id))})]})]}),o.jsxs(lN,{children:[o.jsxs(cN,{children:["Added ",new Date(v.dateAdded).toLocaleDateString()]}),o.jsx(dN,{children:v.completed?"Review Again":"Start Lesson"})]})]},v.id))}),h.length===0&&o.jsxs(uN,{children:[o.jsx(up,{size:40}),o.jsx("h3",{children:"No lessons found"}),o.jsx("p",{children:"Try adjusting your search or filters to find lessons"})]})]})},k9=l.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,C9=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,S9=l.div`
  display: flex;
  flex-direction: column;
`,P9=l.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0;
`,T9=l.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 4px 0 0 0;
`,A9=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: ${e=>e.theme.shadows.sm};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,M9=l.div`
  display: flex;
  align-items: center;
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 8px;
  padding: 0 12px;
  width: 100%;
  max-width: 320px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    max-width: 100%;
  }
`,z9=l.div`
  color: ${e=>e.theme.colors.text.secondary};
  margin-right: 8px;
`,D9=l.input`
  border: none;
  background: transparent;
  height: 40px;
  width: 100%;
  color: ${e=>e.theme.colors.text.primary};
  outline: none;
  font-size: 14px;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.secondary};
  }
`,E9=l.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    justify-content: space-between;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,L9=l.div`
  position: relative;
`,R9=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.primary};
  background-color: ${e=>e.theme.colors.background.secondary};
  min-width: 180px;
  justify-content: space-between;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
`,I9=l.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 8px;
  box-shadow: ${e=>e.theme.shadows.md};
  z-index: 10;
  max-height: 300px;
  overflow-y: auto;
`,Ex=l.div`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: ${e=>e.$isSelected?e.theme.colors.primary:e.theme.colors.text.primary};
  background-color: ${e=>e.$isSelected?`${e.theme.colors.primary}10`:"transparent"};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
  
  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`,F9=l.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,ou=l.button`
  background-color: ${e=>e.$isActive?e.children==="All"?"#4F46E5":e.theme.colors.primary:"transparent"};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.secondary};
  border: 1px solid ${e=>e.$isActive?e.children==="All"?"#4F46E5":e.theme.colors.primary:e.theme.colors.border.light};
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.$isActive?e.children==="All"?"#4338CA":e.theme.colors.primary:e.theme.colors.background.hover};
  }
`,N9=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,B9=l(en)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 12px;
  border: 1px solid ${e=>e.theme.colors.border.light};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${e=>e.theme.shadows.md};
    
    .play-overlay {
      opacity: 1;
    }
  }
`,O9=l.div`
  position: relative;
  height: 180px;
  overflow: hidden;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6));
    pointer-events: none;
  }
  
  ${e=>e.$completed&&`
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 1;
    }
  `}
`,V9=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,_9=l.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 6px 8px;
  color: white;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
`,W9=l.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 6px 8px;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
`,U9=l.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: rgba(46, 125, 50, 0.9);
  border-radius: 4px;
  padding: 6px 8px;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
`,H9=l.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: 3;
`,G9=l.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  color: #4F46E5;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`,Y9=l.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  flex: 1;
  background-color: ${e=>e.theme.colors.background.secondary};
`,q9=l.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Q9=l.div`
  font-size: 12px;
  font-weight: 500;
  color: ${e=>e.theme.colors.primary};
  text-transform: uppercase;
`,K9=l.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,X9=l.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  line-height: 1.5;
`,J9=l.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
  padding-top: 16px;
  border-top: 1px solid ${e=>e.theme.colors.border.light};
`,Z9=l.h4`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,eN=l.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,tN=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.background.hover};
  
  &:hover {
    background-color: ${e=>`${e.theme.colors.primary}10`};
  }
`,rN=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,nN=l.div`
  color: ${e=>e.theme.colors.text.secondary};
`,oN=l.div`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,iN=l.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,sN=l.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
`,aN=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.primary};
    color: ${e=>e.theme.colors.primary};
  }
`,lN=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-top: 1px solid ${e=>e.theme.colors.border.light};
  background-color: ${e=>e.theme.colors.background.primary};
`,cN=l.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
`,dN=l.button`
  background-color: #4F46E5;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #4338CA;
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.sm};
  }
  
  &:active {
    transform: translateY(0);
  }
`,uN=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  color: ${e=>e.theme.colors.text.secondary};
  text-align: center;
  
  h3 {
    margin: 16px 0 8px 0;
    font-size: 18px;
    font-weight: 600;
    color: ${e=>e.theme.colors.text.primary};
  }
  
  p {
    margin: 0;
    font-size: 14px;
  }
`,Eh=e=>{switch(e){case"completed":return"#4caf50";case"in-progress":return"#2196f3";case"overdue":return"#f44336";case"upcoming":return"#ff9800";default:return"#9e9e9e"}},hN=()=>{const[e,t]=$.useState(""),[r,n]=$.useState(null),[i,s]=$.useState(!1),[a,c]=$.useState("all"),d=[{id:1,name:"Mathematics",teacher:"Dr. Smith"},{id:2,name:"Physics",teacher:"Prof. Johnson"},{id:3,name:"English Literature",teacher:"Mrs. Davis"},{id:4,name:"Chemistry",teacher:"Dr. Wilson"},{id:5,name:"World History",teacher:"Prof. Anderson"},{id:6,name:"Computer Science",teacher:"Dr. Roberts"}],u=[{id:1,title:"Quadratic Equations Problem Set",courseId:1,courseName:"Mathematics",dueDate:"2023-05-15T23:59:59",assignedDate:"2023-04-28",description:"Complete the problem set on quadratic equations including word problems and applications.",status:"completed",grade:92,submissionDate:"2023-05-14T14:25:00",attachments:[{id:1,name:"Problem_Set.pdf",size:"1.2 MB"}],feedbackProvided:!0},{id:2,title:"Physics Lab Report: Forces and Motion",courseId:2,courseName:"Physics",dueDate:"2023-05-22T23:59:59",assignedDate:"2023-05-01",description:"Write a lab report based on the experiments conducted on forces and motion. Include all data tables and analysis.",status:"in-progress",grade:null,submissionDate:null,attachments:[{id:2,name:"Lab_Instructions.pdf",size:"2.4 MB"},{id:3,name:"Data_Collection_Template.xlsx",size:"0.8 MB"}],feedbackProvided:!1},{id:3,title:"Macbeth Character Analysis Essay",courseId:3,courseName:"English Literature",dueDate:"2023-05-10T23:59:59",assignedDate:"2023-04-25",description:"Write a 1500-word essay analyzing the character development of Macbeth throughout the play.",status:"overdue",grade:null,submissionDate:null,attachments:[{id:4,name:"Essay_Guidelines.pdf",size:"1.1 MB"}],feedbackProvided:!1},{id:4,title:"Chemical Reactions Worksheet",courseId:4,courseName:"Chemistry",dueDate:"2023-05-18T23:59:59",assignedDate:"2023-05-04",description:"Complete the worksheet on balancing chemical equations and identifying reaction types.",status:"in-progress",grade:null,submissionDate:null,attachments:[{id:5,name:"Chemical_Reactions_Worksheet.pdf",size:"1.5 MB"}],feedbackProvided:!1},{id:5,title:"World War II Research Project",courseId:5,courseName:"World History",dueDate:"2023-06-05T23:59:59",assignedDate:"2023-05-02",description:"Research and create a presentation on a specific aspect of World War II. Topics must be approved by the teacher.",status:"upcoming",grade:null,submissionDate:null,attachments:[{id:6,name:"Research_Project_Guidelines.pdf",size:"1.7 MB"}],feedbackProvided:!1},{id:6,title:"Python Programming Assignment",courseId:6,courseName:"Computer Science",dueDate:"2023-05-20T23:59:59",assignedDate:"2023-05-06",description:"Create a Python program that implements the specified algorithms and data structures.",status:"in-progress",grade:null,submissionDate:null,attachments:[{id:7,name:"Programming_Assignment_Details.pdf",size:"1.3 MB"},{id:8,name:"Starter_Code.zip",size:"0.5 MB"}],feedbackProvided:!1},{id:7,title:"Linear Algebra Quiz",courseId:1,courseName:"Mathematics",dueDate:"2023-05-08T23:59:59",assignedDate:"2023-05-01",description:"Complete the online quiz on linear algebra concepts including matrices and determinants.",status:"completed",grade:88,submissionDate:"2023-05-07T15:30:00",attachments:[{id:9,name:"Study_Guide.pdf",size:"1.0 MB"}],feedbackProvided:!0},{id:8,title:"Energy Conservation Analysis",courseId:2,courseName:"Physics",dueDate:"2023-05-30T23:59:59",assignedDate:"2023-05-10",description:"Analyze the given scenarios and apply energy conservation principles to solve the problems.",status:"upcoming",grade:null,submissionDate:null,attachments:[{id:10,name:"Energy_Problems.pdf",size:"1.8 MB"}],feedbackProvided:!1}],h=y=>new Date(y).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),m=y=>new Date(y).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),p=y=>{const f=new Date(y),g=new Date;g.setHours(0,0,0,0),f.setHours(0,0,0,0);const x=f.getTime()-g.getTime();return Math.ceil(x/(1e3*3600*24))},b=u.filter(y=>{const f=y.title.toLowerCase().includes(e.toLowerCase())||y.description.toLowerCase().includes(e.toLowerCase()),g=r?y.courseId===parseInt(r):!0,x=a==="all"?!0:a===y.status;return f&&g&&x}),v=y=>{n(y),s(!1)},j=(y,f)=>{switch(y){case"completed":return"Completed";case"in-progress":{const g=p(f);return g<=0?"Due Today":g===1?"Due Tomorrow":`Due in ${g} days`}case"overdue":return"Overdue";case"upcoming":return"Upcoming";default:return y}},P=y=>{if(!y)return"All Courses";const f=d.find(g=>g.id===parseInt(y));return f?f.name:"All Courses"};return o.jsxs(mN,{children:[o.jsx(pN,{children:o.jsxs(fN,{children:[o.jsx(gN,{children:"Assignments"}),o.jsx(xN,{children:"View and manage your course assignments"})]})}),o.jsxs(yN,{children:[o.jsxs(vN,{children:[o.jsx(bN,{children:o.jsx(Se,{size:18})}),o.jsx(wN,{type:"text",placeholder:"Search assignments...",value:e,onChange:y=>t(y.target.value)})]}),o.jsxs($N,{children:[o.jsxs(jN,{children:[o.jsxs(kN,{onClick:()=>s(!i),children:[o.jsx("span",{children:P(r)}),o.jsx(de,{size:16})]}),i&&o.jsxs(CN,{children:[o.jsx(Lx,{onClick:()=>v(null),$isSelected:r===null,children:"All Courses"}),d.map(y=>o.jsx(Lx,{onClick:()=>v(y.id.toString()),$isSelected:r===y.id.toString(),children:y.name},y.id))]})]}),o.jsxs(SN,{children:[o.jsx(Ci,{$isActive:a==="all",onClick:()=>c("all"),children:"All"}),o.jsx(Ci,{$isActive:a==="in-progress",onClick:()=>c("in-progress"),children:"In Progress"}),o.jsx(Ci,{$isActive:a==="upcoming",onClick:()=>c("upcoming"),children:"Upcoming"}),o.jsx(Ci,{$isActive:a==="completed",onClick:()=>c("completed"),children:"Completed"}),o.jsx(Ci,{$isActive:a==="overdue",onClick:()=>c("overdue"),children:"Overdue"})]})]})]}),o.jsx(PN,{children:b.map(y=>o.jsxs(TN,{as:D.div,whileHover:{y:-4},children:[o.jsxs(AN,{children:[o.jsx(MN,{children:y.courseName}),o.jsxs(zN,{$status:y.status,children:[o.jsx(DN,{$status:y.status}),o.jsx("span",{children:j(y.status,y.dueDate)})]})]}),o.jsx(EN,{children:y.title}),o.jsx(LN,{children:y.description}),o.jsxs(RN,{children:[o.jsxs(Rx,{children:[o.jsx(Ae,{size:14}),o.jsxs("span",{children:["Assigned: ",h(y.assignedDate)]})]}),o.jsxs(Rx,{children:[o.jsx(Qe,{size:14}),o.jsxs("span",{children:["Due: ",h(y.dueDate)," at ",m(y.dueDate)]})]})]}),y.attachments.length>0&&o.jsxs(IN,{children:[o.jsxs(FN,{children:[o.jsx(dp,{size:14}),o.jsx("span",{children:"Attachments"})]}),o.jsx(NN,{children:y.attachments.map(f=>o.jsxs(BN,{children:[o.jsxs(ON,{children:[o.jsx(Qt,{size:14}),o.jsx("span",{children:f.name})]}),o.jsx(VN,{children:f.size})]},f.id))})]}),y.status==="completed"&&o.jsxs(_N,{children:[o.jsxs(WN,{children:[o.jsx(Zr,{size:14,color:"#4caf50"}),o.jsxs("span",{children:["Completed on ",h(y.submissionDate)]})]}),y.grade!==null&&o.jsxs(UN,{$grade:y.grade,children:[o.jsx(HN,{children:"Grade:"}),o.jsxs(GN,{$grade:y.grade,children:[y.grade,"%"]})]})]}),o.jsxs(YN,{children:[y.status==="completed"?o.jsx(QN,{children:"View Feedback"}):o.jsxs(KN,{$status:y.status,children:[o.jsx(g6,{size:16}),o.jsx("span",{children:y.status==="overdue"?"Submit Late":"Submit Assignment"})]}),o.jsx(qN,{children:"View Details"})]})]},y.id))}),b.length===0&&o.jsxs(XN,{children:[o.jsx(Qt,{size:40}),o.jsx("h3",{children:"No assignments found"}),o.jsx("p",{children:"Try adjusting your search or filters to find assignments"})]})]})},mN=l.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,pN=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,fN=l.div`
  display: flex;
  flex-direction: column;
`,gN=l.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0;
`,xN=l.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 4px 0 0 0;
`,yN=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: ${e=>e.theme.shadows.sm};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,vN=l.div`
  display: flex;
  align-items: center;
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 8px;
  padding: 0 12px;
  width: 100%;
  max-width: 320px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    max-width: 100%;
  }
`,bN=l.div`
  color: ${e=>e.theme.colors.text.secondary};
  margin-right: 8px;
`,wN=l.input`
  border: none;
  background: transparent;
  height: 40px;
  width: 100%;
  color: ${e=>e.theme.colors.text.primary};
  outline: none;
  font-size: 14px;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.secondary};
  }
`,$N=l.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    justify-content: space-between;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,jN=l.div`
  position: relative;
`,kN=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.primary};
  background-color: ${e=>e.theme.colors.background.secondary};
  min-width: 180px;
  justify-content: space-between;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
`,CN=l.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 8px;
  box-shadow: ${e=>e.theme.shadows.md};
  z-index: 10;
  max-height: 300px;
  overflow-y: auto;
`,Lx=l.div`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: ${e=>e.$isSelected?e.theme.colors.primary:e.theme.colors.text.primary};
  background-color: ${e=>e.$isSelected?`${e.theme.colors.primary}10`:"transparent"};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
  
  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`,SN=l.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    width: 100%;
  }
`,Ci=l.button`
  background-color: ${e=>e.$isActive?e.children==="All"?"#4F46E5":e.theme.colors.primary:"transparent"};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.secondary};
  border: 1px solid ${e=>e.$isActive?e.children==="All"?"#4F46E5":e.theme.colors.primary:e.theme.colors.border.light};
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.$isActive?e.children==="All"?"#4338CA":e.theme.colors.primary:e.theme.colors.background.hover};
  }
`,PN=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,TN=l(en)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 16px;
  border-radius: 12px;
  border: 1px solid ${e=>e.theme.colors.border.light};
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  
  &:hover {
    box-shadow: ${e=>e.theme.shadows.md};
  }
`,AN=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,MN=l.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.colors.primary};
  text-transform: uppercase;
`,zN=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  color: ${e=>Eh(e.$status)};
  background-color: ${e=>`${Eh(e.$status)}15`};
`,DN=l.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${e=>Eh(e.$status)};
`,EN=l.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,LN=l.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  line-height: 1.5;
`,RN=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`,Rx=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${e=>e.theme.colors.text.secondary};
`,IN=l.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
  border-top: 1px solid ${e=>e.theme.colors.border.light};
`,FN=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,NN=l.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,BN=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px;
  background-color: ${e=>e.theme.colors.background.hover};
  border-radius: 6px;
  font-size: 13px;
  
  &:hover {
    background-color: ${e=>`${e.theme.colors.primary}10`};
  }
`,ON=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${e=>e.theme.colors.text.primary};
`,VN=l.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
`,_N=l.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
  border-top: 1px solid ${e=>e.theme.colors.border.light};
`,WN=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${e=>e.theme.colors.text.secondary};
`,UN=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,HN=l.div`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,GN=l.div`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.$grade>=90?"#4caf50":e.$grade>=80?"#8bc34a":e.$grade>=70?"#ff9800":"#f44336"};
`,YN=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 16px;
`,qN=l.button`
  background-color: transparent;
  color: ${e=>e.theme.colors.primary};
  border: 1px solid ${e=>e.theme.colors.primary};
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>`${e.theme.colors.primary}10`};
  }
`,QN=l.button`
  background-color: #4F46E5;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #4338CA;
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.sm};
  }
  
  &:active {
    transform: translateY(0);
  }
`,KN=l.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: ${e=>e.$status==="overdue"?"#f44336":"#4F46E5"};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>e.$status==="overdue"?"#d32f2f":"#4338CA"};
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.sm};
  }
  
  &:active {
    transform: translateY(0);
  }
`,XN=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  color: ${e=>e.theme.colors.text.secondary};
  text-align: center;
  
  h3 {
    margin: 16px 0 8px 0;
    font-size: 18px;
    font-weight: 600;
    color: ${e=>e.theme.colors.text.primary};
  }
  
  p {
    margin: 0;
    font-size: 14px;
  }
`,JN=()=>{const[e,t]=$.useState(new Date),[r,n]=$.useState("week"),[i,s]=$.useState(""),c=(()=>{const w=[],A=new Date(e),T=new Date(A),U=A.getDay();T.setDate(A.getDate()-U);for(let L=0;L<7;L++){const R=new Date(T);R.setDate(T.getDate()+L),w.push(R)}return w})(),d=w=>w.toLocaleDateString("en-US",{weekday:"short"}),u=w=>w.toLocaleDateString("en-US",{month:"short",day:"numeric"}),h=w=>{const[A,T]=w.split(":"),U=parseInt(A),L=U>=12?"PM":"AM";return`${U>12?U-12:U===0?12:U}:${T} ${L}`},m=()=>{const w=new Date(e);w.setDate(e.getDate()-7),t(w)},p=()=>{const w=new Date(e);w.setDate(e.getDate()+7),t(w)},b=w=>{t(w),n("day")},v=new Date,j=w=>w.toDateString()===v.toDateString(),P=w=>w.toDateString()===e.toDateString(),y=()=>{const w=c[0].toLocaleDateString("en-US",{month:"long"}),A=c[6].toLocaleDateString("en-US",{month:"long"}),T=c[0].getFullYear();return w===A?`${w} ${T}`:`${w} - ${A} ${T}`},f=[{id:1,courseId:1,courseName:"Mathematics",teacher:"Dr. Smith",day:"Monday",startTime:"09:00",endTime:"10:30",location:"Room 101",color:"#4F46E5"},{id:2,courseId:2,courseName:"Physics",teacher:"Prof. Johnson",day:"Monday",startTime:"11:00",endTime:"12:30",location:"Lab 3",color:"#2563EB"},{id:3,courseId:3,courseName:"English Literature",teacher:"Mrs. Davis",day:"Tuesday",startTime:"13:00",endTime:"14:30",location:"Room 205",color:"#9333EA"},{id:4,courseId:4,courseName:"Chemistry",teacher:"Dr. Wilson",day:"Wednesday",startTime:"10:15",endTime:"11:45",location:"Lab 2",color:"#16A34A"},{id:5,courseId:5,courseName:"World History",teacher:"Prof. Anderson",day:"Thursday",startTime:"14:00",endTime:"15:30",location:"Room 304",color:"#EA580C"},{id:6,courseId:6,courseName:"Computer Science",teacher:"Dr. Roberts",day:"Friday",startTime:"15:30",endTime:"17:00",location:"Computer Lab",color:"#DC2626"},{id:7,courseId:1,courseName:"Mathematics",teacher:"Dr. Smith",day:"Wednesday",startTime:"09:00",endTime:"10:30",location:"Room 101",color:"#4F46E5"},{id:8,courseId:3,courseName:"English Literature",teacher:"Mrs. Davis",day:"Friday",startTime:"09:00",endTime:"10:30",location:"Room 205",color:"#9333EA"}],g={Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6},x=w=>{const A=w.toLocaleDateString("en-US",{weekday:"long"});return f.filter(T=>T.day===A&&(i===""||T.courseName.toLowerCase().includes(i.toLowerCase())||T.teacher.toLowerCase().includes(i.toLowerCase())||T.location.toLowerCase().includes(i.toLowerCase())))},C=x(v),k=f.filter(w=>{const A=g[w.day],T=v.getDay();return A>=T}).sort((w,A)=>{const T=g[w.day]-g[A.day];return T!==0?T:w.startTime.localeCompare(A.startTime)}).slice(0,3),S=x(e);return o.jsxs(ZN,{children:[o.jsx(eB,{children:o.jsxs(tB,{children:[o.jsx(rB,{children:"Class Schedule"}),o.jsx(nB,{children:"View and manage your weekly class timetable"})]})}),o.jsxs(oB,{children:[o.jsxs(iB,{children:[o.jsx(Se,{size:18}),o.jsx(sB,{type:"text",placeholder:"Search classes...",value:i,onChange:w=>s(w.target.value)})]}),o.jsxs(aB,{children:[o.jsx(Ix,{$isActive:r==="day",onClick:()=>n("day"),children:"Day"}),o.jsx(Ix,{$isActive:r==="week",onClick:()=>n("week"),children:"Week"})]})]}),o.jsxs(lB,{children:[o.jsx(Fx,{onClick:m,children:o.jsx(qt,{size:20})}),o.jsxs(cB,{children:[o.jsx(dB,{children:y()}),r==="day"&&o.jsx(uB,{children:e.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})})]}),o.jsx(Fx,{onClick:p,children:o.jsx(Yt,{size:20})})]}),o.jsx(hB,{children:c.map(w=>o.jsxs(Ql,{onClick:()=>b(w),$isToday:j(w),$isSelected:P(w),children:[o.jsx(mB,{children:d(w)}),o.jsx(pB,{children:w.getDate()}),o.jsx(fB,{children:x(w).slice(0,3).map((A,T)=>o.jsx(gB,{},T))})]},w.toISOString()))}),o.jsxs(xB,{children:[o.jsx(yB,{children:r==="day"?o.jsxs(o.Fragment,{children:[o.jsxs(Ra,{children:[o.jsxs(Ia,{children:[e.toLocaleDateString("en-US",{weekday:"long"})," Classes"]}),S.length===0&&o.jsx(Ox,{children:"No classes scheduled"})]}),o.jsx(wB,{children:S.map(w=>o.jsxs($B,{as:D.div,whileHover:{y:-4},children:[o.jsx(jB,{$color:w.color}),o.jsxs(kB,{children:[o.jsxs(CB,{children:[o.jsx(Qe,{size:14}),o.jsxs("span",{children:[h(w.startTime)," - ",h(w.endTime)]})]}),o.jsx(SB,{children:w.courseName}),o.jsxs(PB,{children:[o.jsxs(Nx,{children:[o.jsx(dt,{size:14}),o.jsx("span",{children:w.teacher})]}),o.jsxs(Nx,{children:[o.jsx(Io,{size:14}),o.jsx("span",{children:w.location})]})]}),o.jsxs(TB,{children:[o.jsx(Bx,{children:"Course Materials"}),o.jsx(Bx,{children:"Assignments"})]})]})]},w.id))})]}):o.jsxs(o.Fragment,{children:[o.jsx(Ra,{children:o.jsx(Ia,{children:"Weekly Schedule"})}),o.jsxs(AB,{children:[o.jsx(MB,{children:Array.from({length:12}).map((w,A)=>{const T=A+8;return o.jsxs(zB,{children:[T>12?T-12:T," ",T>=12?"PM":"AM"]},T)})}),o.jsx(DB,{children:c.map(w=>{const A=x(w);return o.jsxs(EB,{$isToday:j(w),children:[o.jsxs(LB,{children:[d(w),", ",u(w)]}),o.jsx(RB,{children:A.map(T=>{const U=parseInt(T.startTime.split(":")[0]),L=parseInt(T.startTime.split(":")[1]),R=parseInt(T.endTime.split(":")[0]),V=parseInt(T.endTime.split(":")[1]),re=(U-8)*60+L,Q=(R-U)*60+(V-L);return o.jsx(IB,{$top:re,$height:Q,$color:T.color,onClick:()=>b(w),children:o.jsxs(FB,{children:[o.jsx(NB,{children:T.courseName}),o.jsxs(BB,{children:[h(T.startTime)," - ",h(T.endTime)]}),o.jsx(OB,{children:T.location})]})},T.id)})})]},w.toISOString())})})]})]})}),o.jsxs(vB,{children:[o.jsx(en,{children:o.jsxs(VB,{children:[o.jsxs(Ra,{children:[o.jsx(Ia,{children:"Today's Classes"}),o.jsx(bB,{children:v.toLocaleDateString("en-US",{weekday:"long",month:"short",day:"numeric"})})]}),C.length===0?o.jsx(Ox,{children:"No classes scheduled for today"}):o.jsx(_B,{children:C.map(w=>o.jsxs(WB,{children:[o.jsx(UB,{$color:w.color}),o.jsxs(HB,{children:[o.jsx(GB,{children:w.courseName}),o.jsxs(YB,{children:[o.jsx(Qe,{size:12}),o.jsxs("span",{children:[h(w.startTime)," - ",h(w.endTime)]})]}),o.jsxs(qB,{children:[o.jsx(Io,{size:12}),o.jsx("span",{children:w.location})]})]})]},w.id))})]})}),o.jsx(en,{children:o.jsxs(QB,{children:[o.jsx(Ra,{children:o.jsx(Ia,{children:"Upcoming Classes"})}),o.jsx(KB,{children:k.map(w=>o.jsxs(XB,{children:[o.jsx(JB,{children:w.day}),o.jsxs(ZB,{children:[o.jsxs(eO,{children:[o.jsx(Le,{size:14}),o.jsx("span",{children:w.courseName})]}),o.jsxs(tO,{children:[o.jsx(Qe,{size:12}),o.jsxs("span",{children:[h(w.startTime)," - ",h(w.endTime)]}),o.jsx(Io,{size:12}),o.jsx("span",{children:w.location})]})]}),o.jsx(rO,{children:o.jsx(r6,{size:16})})]},w.id))}),o.jsx(nO,{children:"View All Classes"})]})})]})]})]})},ZN=l.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,eB=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,tB=l.div`
  display: flex;
  flex-direction: column;
`,rB=l.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0;
`,nB=l.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 4px 0 0 0;
`,oB=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,iB=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 8px;
  padding: 0 12px;
  width: 100%;
  max-width: 320px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    max-width: 100%;
  }
`,sB=l.input`
  flex: 1;
  height: 36px;
  border: none;
  background: transparent;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.primary};
  outline: none;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.secondary};
  }
`,aB=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Ix=l.button`
  background-color: ${e=>e.$isActive?"#4F46E5":"transparent"};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.secondary};
  border: 1px solid ${e=>e.$isActive?"#4F46E5":e.theme.colors.border.light};
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>e.$isActive?"#4338CA":e.theme.colors.background.hover};
  }
`,lB=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 0;
`,Fx=l.button`
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
    transform: translateY(-2px);
  }
`,cB=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,dB=l.div`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,uB=l.div`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
`,hB=l.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Ql=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${e=>e.$isSelected?"#4F46E5":e.$isToday?`${e.theme.colors.primary}15`:e.theme.colors.background.primary};
  border: 1px solid ${e=>e.$isSelected?"#4F46E5":e.$isToday?e.theme.colors.primary:e.theme.colors.border.light};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.sm};
  }
`,mB=l.div`
  font-size: 12px;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.secondary};
`,pB=l.div`
  font-size: 18px;
  font-weight: 600;
  margin: 4px 0;
  color: ${e=>e.theme.colors.text.primary};
  
  ${Ql}:hover & {
    color: #4F46E5;
  }
  
  ${Ql}[data-is-selected="true"] & {
    color: white;
  }
`,fB=l.div`
  display: flex;
  gap: 4px;
  margin-top: 4px;
`,gB=l.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary};
  
  ${Ql}[data-is-selected="true"] & {
    background-color: white;
  }
`,xB=l.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,yB=l.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,vB=l.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Ra=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,Ia=l.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0;
`,bB=l.div`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
`,wB=l.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,$B=l(en)`
  display: flex;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: ${e=>e.theme.shadows.sm};
  border: 1px solid ${e=>e.theme.colors.border.light};
  
  &:hover {
    box-shadow: ${e=>e.theme.shadows.md};
  }
`,jB=l.div`
  width: 6px;
  background-color: ${e=>e.$color};
`,kB=l.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,CB=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
`,SB=l.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,PB=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,Nx=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
`,TB=l.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`,Bx=l.button`
  background-color: transparent;
  color: #4F46E5;
  border: none;
  font-size: 14px;
  padding: 4px 0;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`,AB=l.div`
  display: flex;
  overflow-x: auto;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.colors.border.light};
`,MB=l.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  min-width: 60px;
  border-right: 1px solid ${e=>e.theme.colors.border.light};
`,zB=l.div`
  height: 60px;
  padding: 4px 8px;
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,DB=l.div`
  display: flex;
  flex: 1;
  min-width: 500px;
`,EB=l.div`
  flex: 1;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${e=>e.theme.colors.border.light};
  background-color: ${e=>e.$isToday?`${e.theme.colors.primary}05`:"transparent"};
  
  &:last-child {
    border-right: none;
  }
`,LB=l.div`
  padding: 8px;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  color: ${e=>e.theme.colors.text.primary};
`,RB=l.div`
  flex: 1;
  position: relative;
  height: 720px; // 12 hours * 60px
`,IB=l.div`
  position: absolute;
  top: ${e=>e.$top}px;
  left: 4px;
  right: 4px;
  height: ${e=>e.$height}px;
  background-color: ${e=>`${e.$color}15`};
  border-left: 3px solid ${e=>e.$color};
  border-radius: 6px;
  padding: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateX(2px);
    box-shadow: ${e=>e.theme.shadows.sm};
    z-index: 10;
  }
`,FB=l.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,NB=l.div`
  font-size: 12px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,BB=l.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-top: 2px;
`,OB=l.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-top: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,VB=l.div`
  padding: 16px;
`,_B=l.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,WB=l.div`
  display: flex;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: 8px;
  overflow: hidden;
`,UB=l.div`
  width: 6px;
  background-color: ${e=>e.$color};
`,HB=l.div`
  padding: 12px;
  flex: 1;
`,GB=l.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 6px;
`,YB=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 4px;
`,qB=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
`,QB=l.div`
  padding: 16px;
`,KB=l.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,XB=l.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateX(4px);
  }
`,JB=l.div`
  width: 40px;
  font-size: 12px;
  font-weight: 600;
  color: #4F46E5;
`,ZB=l.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eO=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,tO=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
`,rO=l.div`
  color: #4F46E5;
`,nO=l.a`
  display: block;
  text-align: center;
  font-size: 14px;
  color: #4F46E5;
  text-decoration: none;
  padding: 12px 0 0;
  margin-top: 16px;
  border-top: 1px solid ${e=>e.theme.colors.border.light};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`,Ox=l.div`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  text-align: center;
  padding: 24px 0;
`,oO=()=>{const[e,t]=$.useState(null),[r,n]=$.useState(""),[i,s]=$.useState(""),[a,c]=$.useState(!1),d=$.useRef(null),u=$.useRef(null),{user:h}=Xt(),m=[{id:"1",recipient:{id:"teacher1",name:"Dr. Smith",role:"Math Teacher",status:"online"},lastMessage:{content:"Don't forget about the quiz tomorrow!",timestamp:new Date(Date.now()-15*60*1e3),read:!1},unreadCount:1},{id:"2",recipient:{id:"teacher2",name:"Mrs. Johnson",role:"English Professor",status:"away",lastSeen:new Date(Date.now()-45*60*1e3)},lastMessage:{content:"The essay deadline has been extended by three days.",timestamp:new Date(Date.now()-3*60*60*1e3),read:!0},unreadCount:0},{id:"3",recipient:{id:"admin1",name:"Admin Office",role:"Administrative Staff",status:"online"},lastMessage:{content:"Your student ID card is ready for pickup.",timestamp:new Date(Date.now()-6*60*60*1e3),read:!1},unreadCount:1},{id:"4",recipient:{id:"student1",name:"Alex Barnes",role:"Classmate",status:"offline",lastSeen:new Date(Date.now()-12*60*60*1e3)},lastMessage:{content:"Did you understand the homework for today?",timestamp:new Date(Date.now()-1*24*60*60*1e3),read:!0},unreadCount:0},{id:"5",recipient:{id:"teacher3",name:"Prof. Wilson",role:"Chemistry Department",status:"offline",lastSeen:new Date(Date.now()-2*24*60*60*1e3)},lastMessage:{content:"Please bring your lab coat for tomorrow's experiment.",timestamp:new Date(Date.now()-3*24*60*60*1e3),read:!0},unreadCount:0}],p=g=>{var k,S,w;const x=m.find(A=>A.id===g);if(!x)return[];const C=x.recipient;return[{id:`${g}-1`,content:"Hello! How can I help you with your studies?",sender:{id:C.id,name:C.name},timestamp:new Date(Date.now()-3*60*60*1e3),read:!0,isIncoming:!0},{id:`${g}-2`,content:`Hi ${C.name}, I have a question about the recent assignment.`,sender:{id:(h==null?void 0:h.username)||"current-user",name:(h==null?void 0:h.fullName)||"You"},timestamp:new Date(Date.now()-2.9*60*60*1e3),read:!0,isIncoming:!1},{id:`${g}-3`,content:"Sure, what do you need help with?",sender:{id:C.id,name:C.name},timestamp:new Date(Date.now()-2.8*60*60*1e3),read:!0,isIncoming:!0},{id:`${g}-4`,content:"I'm not sure how to approach problem number 5.",sender:{id:(h==null?void 0:h.username)||"current-user",name:(h==null?void 0:h.fullName)||"You"},timestamp:new Date(Date.now()-2.7*60*60*1e3),read:!0,isIncoming:!1},{id:`${g}-5`,content:((k=x.lastMessage)==null?void 0:k.content)||"Let me know if you need any other assistance.",sender:{id:C.id,name:C.name},timestamp:((S=x.lastMessage)==null?void 0:S.timestamp)||new Date,read:((w=x.lastMessage)==null?void 0:w.read)||!1,isIncoming:!0}]};$.useEffect(()=>{const g=()=>{c(window.innerWidth<768)};return g(),window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)}},[]),$.useEffect(()=>{d.current&&d.current.scrollIntoView({behavior:"smooth"})},[e]);const b=m.filter(g=>{var x;return g.recipient.name.toLowerCase().includes(r.toLowerCase())||((x=g.lastMessage)==null?void 0:x.content.toLowerCase().includes(r.toLowerCase()))}),v=()=>{i.trim()!==""&&(console.log("Sending message:",i),s(""),u.current&&u.current.focus())},j=g=>g.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),P=g=>{if(!g)return"Unknown";const C=new Date().getTime()-g.getTime(),k=Math.floor(C/6e4),S=Math.floor(k/60),w=Math.floor(S/24);return k<1?"Just now":k<60?`${k} min ago`:S<24?`${S} hr ago`:`${w} day${w>1?"s":""} ago`},y=m.find(g=>g.id===e),f=e?p(e):[];return o.jsxs(iO,{children:[o.jsx(sO,{children:o.jsxs(aO,{children:[o.jsx(lO,{children:"Messages"}),o.jsx(cO,{children:"Chat with teachers, classmates, and staff"})]})}),o.jsx(dO,{children:o.jsxs(he,{mode:"wait",children:[a&&e?null:o.jsxs(uO,{as:D.div,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.2},children:[o.jsxs(hO,{children:[o.jsxs(mO,{children:[o.jsx(pO,{children:o.jsx(Se,{})}),o.jsx(fO,{type:"text",placeholder:"Search messages...",value:r,onChange:g=>n(g.target.value)})]}),o.jsx(Ec,{"aria-label":"Filter messages",children:o.jsx(Nt,{})}),o.jsx(gO,{"aria-label":"New message",children:o.jsx(fr,{})})]}),o.jsx(xO,{children:b.map(g=>o.jsxs(yO,{$hasUnread:g.unreadCount>0,$isActive:e===g.id,onClick:()=>t(g.id),as:D.div,whileHover:{x:2},whileTap:{scale:.98},children:[o.jsxs(Vx,{children:[g.recipient.avatar?o.jsx(_x,{src:g.recipient.avatar,alt:g.recipient.name}):o.jsx(Wx,{children:g.recipient.name.charAt(0)}),o.jsx(Ux,{$status:g.recipient.status||"offline"})]}),o.jsxs(vO,{children:[o.jsxs(bO,{children:[o.jsx(Hx,{children:g.recipient.name}),g.lastMessage&&o.jsx(wO,{children:P(g.lastMessage.timestamp)})]}),o.jsx($O,{children:g.recipient.role}),g.lastMessage&&o.jsx(jO,{$read:g.lastMessage.read,children:g.lastMessage.content})]}),g.unreadCount>0&&o.jsx(kO,{children:g.unreadCount})]},g.id))})]},"conversations"),e?o.jsx(CO,{as:D.div,initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.2},children:y&&o.jsxs(o.Fragment,{children:[o.jsxs(SO,{children:[a&&o.jsx(PO,{onClick:()=>t(null),children:o.jsx(qt,{})}),o.jsxs(Vx,{children:[y.recipient.avatar?o.jsx(_x,{src:y.recipient.avatar,alt:y.recipient.name}):o.jsx(Wx,{children:y.recipient.name.charAt(0)}),o.jsx(Ux,{$status:y.recipient.status||"offline"})]}),o.jsxs(TO,{children:[o.jsx(Hx,{children:y.recipient.name}),o.jsx(AO,{children:y.recipient.status==="online"?"Online":`Last seen ${P(y.recipient.lastSeen)}`})]}),o.jsxs(MO,{children:[o.jsx(zO,{children:o.jsx(On,{})}),o.jsx(DO,{children:o.jsx(Ns,{})})]})]}),o.jsxs(EO,{children:[f.map((g,x)=>o.jsxs(LO,{$isMine:!g.isIncoming,as:D.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.2,delay:x*.05},children:[o.jsx(RO,{$isMine:!g.isIncoming,children:g.content}),o.jsxs(IO,{children:[j(g.timestamp),!g.isIncoming&&o.jsx(FO,{children:g.read?"Read":"Sent"})]})]},g.id)),o.jsx("div",{ref:d})]}),o.jsxs(NO,{children:[o.jsx(Vw,{children:o.jsx(dp,{})}),o.jsx(BO,{ref:u,type:"text",placeholder:"Type a message...",value:i,onChange:g=>s(g.target.value),onKeyPress:g=>g.key==="Enter"&&v()}),o.jsx(OO,{children:o.jsx(Tw,{})}),o.jsx(VO,{onClick:v,disabled:i.trim()==="",$hasContent:i.trim()!=="",as:D.button,whileHover:{scale:1.05},whileTap:{scale:.95},children:o.jsx(Sw,{})})]})]})},"chat"):!a&&o.jsxs(_O,{as:D.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[o.jsx(WO,{children:o.jsx(GO,{size:60})}),o.jsx(UO,{children:"No Conversation Selected"}),o.jsx(HO,{children:"Select a conversation from the list to start chatting"})]},"empty-state")]})})]})},iO=l.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 100%;
`,sO=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,aO=l.div`
  display: flex;
  flex-direction: column;
`,lO=l.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0;
`,cO=l.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 4px 0 0 0;
`,dO=l.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 24px;
  height: calc(100vh - 180px);
  min-height: 500px;
  background: ${e=>e.theme.colors.background.primary};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadows.sm};
  border: 1px solid ${e=>e.theme.colors.border.light};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,uO=l(D.div)`
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${e=>e.theme.colors.border.light};
  height: 100%;
`,hO=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,mO=l.div`
  display: flex;
  align-items: center;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: 8px;
  padding: 0 12px;
  flex: 1;
`,pO=l.div`
  color: ${e=>e.theme.colors.text.secondary};
  margin-right: 8px;
`,fO=l.input`
  flex: 1;
  height: 36px;
  border: none;
  background: transparent;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.primary};
  outline: none;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
`,Ec=l.button`
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.secondary};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
    color: ${e=>e.theme.colors.text.primary};
  }
`,gO=l(Ec)`
  background-color: ${e=>e.theme.colors.primary};
  color: white;
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary}e0;
    color: white;
  }
`,xO=l.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px;
`,yO=l(D.div)`
  display: flex;
  padding: 12px;
  margin-bottom: 4px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  
  background-color: ${e=>e.$isActive?e.theme.colors.background.hover:"transparent"};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
`,Vx=l.div`
  position: relative;
  margin-right: 12px;
`,_x=l.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`,Wx=l.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary[100]};
  color: ${e=>e.theme.colors.primary[600]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
`,Ux=l.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid ${e=>e.theme.colors.background.primary};
  
  background-color: ${e=>{switch(e.$status){case"online":return e.theme.colors.success;case"away":return e.theme.colors.warning;default:return e.theme.colors.text.tertiary}}};
`,vO=l.div`
  flex: 1;
  min-width: 0;
`,bO=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
`,Hx=l.div`
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,wO=l.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.tertiary};
  white-space: nowrap;
`,$O=l.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.tertiary};
  margin-bottom: 4px;
`,jO=l.div`
  font-size: 13px;
  color: ${e=>e.$read?e.theme.colors.text.secondary:e.theme.colors.text.primary};
  font-weight: ${e=>e.$read?"400":"500"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 220px;
`,kO=l.div`
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  border-radius: 9px;
  background-color: ${e=>e.theme.colors.primary};
  color: white;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin-top: 4px;
`,CO=l(D.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
`,SO=l.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,PO=l.button`
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.text.secondary};
  border-radius: 8px;
  cursor: pointer;
  margin-right: 8px;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
    color: ${e=>e.theme.colors.text.primary};
  }
`,TO=l.div`
  flex: 1;
  min-width: 0;
`,AO=l.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.tertiary};
`,MO=l.div`
  display: flex;
  gap: 8px;
`,zO=l(Ec)``,DO=l(Ec)``,EO=l.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,LO=l(D.div)`
  display: flex;
  flex-direction: column;
  align-self: ${e=>e.$isMine?"flex-end":"flex-start"};
  max-width: 70%;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    max-width: 85%;
  }
`,RO=l.div`
  padding: 12px 16px;
  border-radius: 16px;
  border-bottom-right-radius: ${e=>e.$isMine?"4px":"16px"};
  border-bottom-left-radius: ${e=>e.$isMine?"16px":"4px"};
  color: ${e=>e.$isMine?"white":e.theme.colors.text.primary};
  background-color: ${e=>e.$isMine?e.theme.colors.primary:e.theme.colors.background.secondary};
  font-size: 14px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`,IO=l.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.text.tertiary};
  margin-top: 4px;
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 4px;
`,FO=l.span`
  font-size: 11px;
  color: ${e=>e.theme.colors.text.tertiary};
`,NO=l.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 12px;
  border-top: 1px solid ${e=>e.theme.colors.border.light};
`,Vw=l.button`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.text.secondary};
  border-radius: 50%;
  cursor: pointer;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
    color: ${e=>e.theme.colors.text.primary};
  }
`,BO=l.input`
  flex: 1;
  height: 40px;
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 20px;
  padding: 0 16px;
  background-color: ${e=>e.theme.colors.background.secondary};
  font-size: 14px;
  color: ${e=>e.theme.colors.text.primary};
  outline: none;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
  
  &:focus {
    border-color: ${e=>e.theme.colors.primary};
  }
`,OO=l(Vw)``,VO=l.button`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${e=>e.$hasContent?e.theme.colors.primary:e.theme.colors.background.secondary};
  color: ${e=>e.$hasContent?"white":e.theme.colors.text.secondary};
  border-radius: 50%;
  cursor: ${e=>e.$hasContent?"pointer":"default"};
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>e.$hasContent?`${e.theme.colors.primary}e0`:e.theme.colors.background.secondary};
  }
`,_O=l(D.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 24px;
  text-align: center;
`,WO=l.div`
  color: ${e=>e.theme.colors.text.tertiary};
  margin-bottom: 16px;
`,UO=l.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0 0 8px 0;
`,HO=l.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  max-width: 300px;
  margin: 0;
`,GO=l(Se)`
  /* This is just to use the correct import */
`,_w=6048e5,YO=864e5,Ww=6e4,Uw=36e5,Gx=Symbol.for("constructDateFrom");function gr(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&Gx in e?e[Gx](t):e instanceof Date?new e.constructor(t):new Date(t)}function mt(e,t){return gr(t||e,e)}let qO={};function Lc(){return qO}function Ps(e,t){var c,d,u,h;const r=Lc(),n=(t==null?void 0:t.weekStartsOn)??((d=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:d.weekStartsOn)??r.weekStartsOn??((h=(u=r.locale)==null?void 0:u.options)==null?void 0:h.weekStartsOn)??0,i=mt(e,t==null?void 0:t.in),s=i.getDay(),a=(s<n?7:0)+s-n;return i.setDate(i.getDate()-a),i.setHours(0,0,0,0),i}function Kl(e,t){return Ps(e,{...t,weekStartsOn:1})}function Hw(e,t){const r=mt(e,t==null?void 0:t.in),n=r.getFullYear(),i=gr(r,0);i.setFullYear(n+1,0,4),i.setHours(0,0,0,0);const s=Kl(i),a=gr(r,0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);const c=Kl(a);return r.getTime()>=s.getTime()?n+1:r.getTime()>=c.getTime()?n:n-1}function Yx(e){const t=mt(e),r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return r.setUTCFullYear(t.getFullYear()),+e-+r}function QO(e,...t){const r=gr.bind(null,t.find(n=>typeof n=="object"));return t.map(r)}function qx(e,t){const r=mt(e,t==null?void 0:t.in);return r.setHours(0,0,0,0),r}function KO(e,t,r){const[n,i]=QO(r==null?void 0:r.in,e,t),s=qx(n),a=qx(i),c=+s-Yx(s),d=+a-Yx(a);return Math.round((c-d)/YO)}function XO(e,t){const r=Hw(e,t),n=gr(e,0);return n.setFullYear(r,0,4),n.setHours(0,0,0,0),Kl(n)}function JO(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function ZO(e){return!(!JO(e)&&typeof e!="number"||isNaN(+mt(e)))}function eV(e,t){const r=mt(e,t==null?void 0:t.in);return r.setFullYear(r.getFullYear(),0,1),r.setHours(0,0,0,0),r}const tV={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},rV=(e,t,r)=>{let n;const i=tV[e];return typeof i=="string"?n=i:t===1?n=i.one:n=i.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n};function iu(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}const nV={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},oV={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},iV={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},sV={date:iu({formats:nV,defaultWidth:"full"}),time:iu({formats:oV,defaultWidth:"full"}),dateTime:iu({formats:iV,defaultWidth:"full"})},aV={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},lV=(e,t,r,n)=>aV[e];function Si(e){return(t,r)=>{const n=r!=null&&r.context?String(r.context):"standalone";let i;if(n==="formatting"&&e.formattingValues){const a=e.defaultFormattingWidth||e.defaultWidth,c=r!=null&&r.width?String(r.width):a;i=e.formattingValues[c]||e.formattingValues[a]}else{const a=e.defaultWidth,c=r!=null&&r.width?String(r.width):e.defaultWidth;i=e.values[c]||e.values[a]}const s=e.argumentCallback?e.argumentCallback(t):t;return i[s]}}const cV={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},dV={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},uV={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},hV={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},mV={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},pV={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},fV=(e,t)=>{const r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},gV={ordinalNumber:fV,era:Si({values:cV,defaultWidth:"wide"}),quarter:Si({values:dV,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Si({values:uV,defaultWidth:"wide"}),day:Si({values:hV,defaultWidth:"wide"}),dayPeriod:Si({values:mV,defaultWidth:"wide",formattingValues:pV,defaultFormattingWidth:"wide"})};function Pi(e){return(t,r={})=>{const n=r.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],s=t.match(i);if(!s)return null;const a=s[0],c=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(c)?yV(c,m=>m.test(a)):xV(c,m=>m.test(a));let u;u=e.valueCallback?e.valueCallback(d):d,u=r.valueCallback?r.valueCallback(u):u;const h=t.slice(a.length);return{value:u,rest:h}}}function xV(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function yV(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function vV(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const i=n[0],s=t.match(e.parsePattern);if(!s)return null;let a=e.valueCallback?e.valueCallback(s[0]):s[0];a=r.valueCallback?r.valueCallback(a):a;const c=t.slice(i.length);return{value:a,rest:c}}}const bV=/^(\d+)(th|st|nd|rd)?/i,wV=/\d+/i,$V={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},jV={any:[/^b/i,/^(a|c)/i]},kV={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},CV={any:[/1/i,/2/i,/3/i,/4/i]},SV={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},PV={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},TV={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},AV={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},MV={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},zV={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},DV={ordinalNumber:vV({matchPattern:bV,parsePattern:wV,valueCallback:e=>parseInt(e,10)}),era:Pi({matchPatterns:$V,defaultMatchWidth:"wide",parsePatterns:jV,defaultParseWidth:"any"}),quarter:Pi({matchPatterns:kV,defaultMatchWidth:"wide",parsePatterns:CV,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Pi({matchPatterns:SV,defaultMatchWidth:"wide",parsePatterns:PV,defaultParseWidth:"any"}),day:Pi({matchPatterns:TV,defaultMatchWidth:"wide",parsePatterns:AV,defaultParseWidth:"any"}),dayPeriod:Pi({matchPatterns:MV,defaultMatchWidth:"any",parsePatterns:zV,defaultParseWidth:"any"})},EV={code:"en-US",formatDistance:rV,formatLong:sV,formatRelative:lV,localize:gV,match:DV,options:{weekStartsOn:0,firstWeekContainsDate:1}};function LV(e,t){const r=mt(e,t==null?void 0:t.in);return KO(r,eV(r))+1}function RV(e,t){const r=mt(e,t==null?void 0:t.in),n=+Kl(r)-+XO(r);return Math.round(n/_w)+1}function Gw(e,t){var h,m,p,b;const r=mt(e,t==null?void 0:t.in),n=r.getFullYear(),i=Lc(),s=(t==null?void 0:t.firstWeekContainsDate)??((m=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??i.firstWeekContainsDate??((b=(p=i.locale)==null?void 0:p.options)==null?void 0:b.firstWeekContainsDate)??1,a=gr((t==null?void 0:t.in)||e,0);a.setFullYear(n+1,0,s),a.setHours(0,0,0,0);const c=Ps(a,t),d=gr((t==null?void 0:t.in)||e,0);d.setFullYear(n,0,s),d.setHours(0,0,0,0);const u=Ps(d,t);return+r>=+c?n+1:+r>=+u?n:n-1}function IV(e,t){var c,d,u,h;const r=Lc(),n=(t==null?void 0:t.firstWeekContainsDate)??((d=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:d.firstWeekContainsDate)??r.firstWeekContainsDate??((h=(u=r.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??1,i=Gw(e,t),s=gr((t==null?void 0:t.in)||e,0);return s.setFullYear(i,0,n),s.setHours(0,0,0,0),Ps(s,t)}function FV(e,t){const r=mt(e,t==null?void 0:t.in),n=+Ps(r,t)-+IV(r,t);return Math.round(n/_w)+1}function X(e,t){const r=e<0?"-":"",n=Math.abs(e).toString().padStart(t,"0");return r+n}const Sr={y(e,t){const r=e.getFullYear(),n=r>0?r:1-r;return X(t==="yy"?n%100:n,t.length)},M(e,t){const r=e.getMonth();return t==="M"?String(r+1):X(r+1,2)},d(e,t){return X(e.getDate(),t.length)},a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,t){return X(e.getHours()%12||12,t.length)},H(e,t){return X(e.getHours(),t.length)},m(e,t){return X(e.getMinutes(),t.length)},s(e,t){return X(e.getSeconds(),t.length)},S(e,t){const r=t.length,n=e.getMilliseconds(),i=Math.trunc(n*Math.pow(10,r-3));return X(i,t.length)}},uo={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Qx={G:function(e,t,r){const n=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){const n=e.getFullYear(),i=n>0?n:1-n;return r.ordinalNumber(i,{unit:"year"})}return Sr.y(e,t)},Y:function(e,t,r,n){const i=Gw(e,n),s=i>0?i:1-i;if(t==="YY"){const a=s%100;return X(a,2)}return t==="Yo"?r.ordinalNumber(s,{unit:"year"}):X(s,t.length)},R:function(e,t){const r=Hw(e);return X(r,t.length)},u:function(e,t){const r=e.getFullYear();return X(r,t.length)},Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return X(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return X(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return Sr.M(e,t);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,r){const n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return X(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){const i=FV(e,n);return t==="wo"?r.ordinalNumber(i,{unit:"week"}):X(i,t.length)},I:function(e,t,r){const n=RV(e);return t==="Io"?r.ordinalNumber(n,{unit:"week"}):X(n,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):Sr.d(e,t)},D:function(e,t,r){const n=LV(e);return t==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):X(n,t.length)},E:function(e,t,r){const n=e.getDay();switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){const i=e.getDay(),s=(i-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return X(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){const i=e.getDay(),s=(i-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return X(s,t.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,r){const n=e.getDay(),i=n===0?7:n;switch(t){case"i":return String(i);case"ii":return X(i,t.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,r){const i=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,r){const n=e.getHours();let i;switch(n===12?i=uo.noon:n===0?i=uo.midnight:i=n/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,r){const n=e.getHours();let i;switch(n>=17?i=uo.evening:n>=12?i=uo.afternoon:n>=4?i=uo.morning:i=uo.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){let n=e.getHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return Sr.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):Sr.H(e,t)},K:function(e,t,r){const n=e.getHours()%12;return t==="Ko"?r.ordinalNumber(n,{unit:"hour"}):X(n,t.length)},k:function(e,t,r){let n=e.getHours();return n===0&&(n=24),t==="ko"?r.ordinalNumber(n,{unit:"hour"}):X(n,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):Sr.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):Sr.s(e,t)},S:function(e,t){return Sr.S(e,t)},X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(t){case"X":return Xx(n);case"XXXX":case"XX":return jn(n);case"XXXXX":case"XXX":default:return jn(n,":")}},x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"x":return Xx(n);case"xxxx":case"xx":return jn(n);case"xxxxx":case"xxx":default:return jn(n,":")}},O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Kx(n,":");case"OOOO":default:return"GMT"+jn(n,":")}},z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Kx(n,":");case"zzzz":default:return"GMT"+jn(n,":")}},t:function(e,t,r){const n=Math.trunc(+e/1e3);return X(n,t.length)},T:function(e,t,r){return X(+e,t.length)}};function Kx(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),i=Math.trunc(n/60),s=n%60;return s===0?r+String(i):r+String(i)+t+X(s,2)}function Xx(e,t){return e%60===0?(e>0?"-":"+")+X(Math.abs(e)/60,2):jn(e,t)}function jn(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),i=X(Math.trunc(n/60),2),s=X(n%60,2);return r+i+t+s}const Jx=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Yw=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},NV=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[],n=r[1],i=r[2];if(!i)return Jx(e,t);let s;switch(n){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",Jx(n,t)).replace("{{time}}",Yw(i,t))},BV={p:Yw,P:NV},OV=/^D+$/,VV=/^Y+$/,_V=["D","DD","YY","YYYY"];function WV(e){return OV.test(e)}function UV(e){return VV.test(e)}function HV(e,t,r){const n=GV(e,t,r);if(console.warn(n),_V.includes(e))throw new RangeError(n)}function GV(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const YV=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,qV=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,QV=/^'([^]*?)'?$/,KV=/''/g,XV=/[a-zA-Z]/;function JV(e,t,r){var h,m,p,b;const n=Lc(),i=n.locale??EV,s=n.firstWeekContainsDate??((m=(h=n.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??1,a=n.weekStartsOn??((b=(p=n.locale)==null?void 0:p.options)==null?void 0:b.weekStartsOn)??0,c=mt(e,r==null?void 0:r.in);if(!ZO(c))throw new RangeError("Invalid time value");let d=t.match(qV).map(v=>{const j=v[0];if(j==="p"||j==="P"){const P=BV[j];return P(v,i.formatLong)}return v}).join("").match(YV).map(v=>{if(v==="''")return{isToken:!1,value:"'"};const j=v[0];if(j==="'")return{isToken:!1,value:ZV(v)};if(Qx[j])return{isToken:!0,value:v};if(j.match(XV))throw new RangeError("Format string contains an unescaped latin alphabet character `"+j+"`");return{isToken:!1,value:v}});i.localize.preprocessor&&(d=i.localize.preprocessor(c,d));const u={firstWeekContainsDate:s,weekStartsOn:a,locale:i};return d.map(v=>{if(!v.isToken)return v.value;const j=v.value;(UV(j)||WV(j))&&HV(j,t,String(e));const P=Qx[j[0]];return P(c,j,i.localize,u)}).join("")}function ZV(e){const t=e.match(QV);return t?t[1].replace(KV,"'"):e}function e_(e,t){const r=()=>gr(t==null?void 0:t.in,NaN),i=o_(e);let s;if(i.date){const u=i_(i.date,2);s=s_(u.restDateString,u.year)}if(!s||isNaN(+s))return r();const a=+s;let c=0,d;if(i.time&&(c=a_(i.time),isNaN(c)))return r();if(i.timezone){if(d=l_(i.timezone),isNaN(d))return r()}else{const u=new Date(a+c),h=mt(0,t==null?void 0:t.in);return h.setFullYear(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()),h.setHours(u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds()),h}return mt(a+c+d,t==null?void 0:t.in)}const Fa={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},t_=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,r_=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,n_=/^([+-])(\d{2})(?::?(\d{2}))?$/;function o_(e){const t={},r=e.split(Fa.dateTimeDelimiter);let n;if(r.length>2)return t;if(/:/.test(r[0])?n=r[0]:(t.date=r[0],n=r[1],Fa.timeZoneDelimiter.test(t.date)&&(t.date=e.split(Fa.timeZoneDelimiter)[0],n=e.substr(t.date.length,e.length))),n){const i=Fa.timezone.exec(n);i?(t.time=n.replace(i[1],""),t.timezone=i[1]):t.time=n}return t}function i_(e,t){const r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=e.match(r);if(!n)return{year:NaN,restDateString:""};const i=n[1]?parseInt(n[1]):null,s=n[2]?parseInt(n[2]):null;return{year:s===null?i:s*100,restDateString:e.slice((n[1]||n[2]).length)}}function s_(e,t){if(t===null)return new Date(NaN);const r=e.match(t_);if(!r)return new Date(NaN);const n=!!r[4],i=Ti(r[1]),s=Ti(r[2])-1,a=Ti(r[3]),c=Ti(r[4]),d=Ti(r[5])-1;if(n)return m_(t,c,d)?c_(t,c,d):new Date(NaN);{const u=new Date(0);return!u_(t,s,a)||!h_(t,i)?new Date(NaN):(u.setUTCFullYear(t,s,Math.max(i,a)),u)}}function Ti(e){return e?parseInt(e):1}function a_(e){const t=e.match(r_);if(!t)return NaN;const r=su(t[1]),n=su(t[2]),i=su(t[3]);return p_(r,n,i)?r*Uw+n*Ww+i*1e3:NaN}function su(e){return e&&parseFloat(e.replace(",","."))||0}function l_(e){if(e==="Z")return 0;const t=e.match(n_);if(!t)return 0;const r=t[1]==="+"?-1:1,n=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return f_(n,i)?r*(n*Uw+i*Ww):NaN}function c_(e,t,r){const n=new Date(0);n.setUTCFullYear(e,0,4);const i=n.getUTCDay()||7,s=(t-1)*7+r+1-i;return n.setUTCDate(n.getUTCDate()+s),n}const d_=[31,null,31,30,31,30,31,31,30,31,30,31];function qw(e){return e%400===0||e%4===0&&e%100!==0}function u_(e,t,r){return t>=0&&t<=11&&r>=1&&r<=(d_[t]||(qw(e)?29:28))}function h_(e,t){return t>=1&&t<=(qw(e)?366:365)}function m_(e,t,r){return t>=1&&t<=53&&r>=0&&r<=6}function p_(e,t,r){return e===24?t===0&&r===0:r>=0&&r<60&&t>=0&&t<60&&e>=0&&e<25}function f_(e,t){return t>=0&&t<=59}const g_=()=>{const[e,t]=$.useState("all"),[r,n]=$.useState(""),[i,s]=$.useState([]),[a,c]=$.useState("all"),d=[{id:"1",title:"Midterm Examination",subject:"Mathematics",date:"2023-11-15T09:00:00",duration:120,status:"upcoming",type:"exam",description:"This exam covers chapters 1-5 from the textbook. Focus on calculus and linear algebra concepts.",maxScore:100,location:"Room 301",instructions:"No calculators allowed. Bring two #2 pencils and an eraser."},{id:"2",title:"Weekly Quiz",subject:"Physics",date:"2023-11-10T14:30:00",duration:30,status:"upcoming",type:"quiz",description:"Quiz on mechanics and thermodynamics concepts covered in the last two weeks.",maxScore:20,location:"Online",instructions:"Open book quiz. You can use your notes and textbook."},{id:"3",title:"Final Project Submission",subject:"Computer Science",date:"2023-12-05T23:59:00",duration:0,status:"upcoming",type:"assignment",description:"Submit your final project including source code and documentation.",maxScore:50,instructions:"Submit through the online portal as a single ZIP file. Include a README file."},{id:"4",title:"Literature Review",subject:"English",date:"2023-10-25T10:00:00",duration:90,status:"completed",type:"exam",description:"Essay-based examination on 19th century American literature.",score:88,maxScore:100,location:"Room 205"},{id:"5",title:"Pop Quiz",subject:"Chemistry",date:"2023-10-20T13:15:00",duration:15,status:"completed",type:"quiz",description:"Surprise quiz on chemical reactions and formulas.",score:18,maxScore:20,location:"Lab 3"},{id:"6",title:"Research Paper",subject:"History",date:"2023-10-15T23:59:00",duration:0,status:"missed",type:"assignment",description:"Research paper on a historical event of your choice from the 20th century.",maxScore:40,instructions:"APA format, 8-10 pages double-spaced, minimum 5 academic sources."}],u=$.useMemo(()=>["all",...[...new Set(d.map(b=>b.subject))]],[d]),h=p=>{s(b=>b.includes(p)?b.filter(v=>v!==p):[...b,p])},m=$.useMemo(()=>d.filter(p=>!(e!=="all"&&p.status!==e||r&&!p.title.toLowerCase().includes(r.toLowerCase())&&!p.subject.toLowerCase().includes(r.toLowerCase())||a!=="all"&&p.subject!==a)).sort((p,b)=>new Date(p.date).getTime()-new Date(b.date).getTime()),[d,e,r,a]);return o.jsxs(x_,{children:[o.jsxs(y_,{children:[o.jsx("h1",{children:"Tests & Assessments"}),o.jsx("p",{children:"View and prepare for your upcoming tests and assessments."})]}),o.jsxs(v_,{children:[o.jsxs(b_,{children:[o.jsx(Se,{}),o.jsx(w_,{type:"text",placeholder:"Search tests by title or subject...",value:r,onChange:p=>n(p.target.value)})]}),o.jsxs($_,{children:[o.jsx(Nt,{}),o.jsx(j_,{value:a,onChange:p=>c(p.target.value),children:u.map(p=>o.jsx("option",{value:p,children:p==="all"?"All Subjects":p},p))})]})]}),o.jsxs(k_,{children:[o.jsx(Na,{isActive:e==="all",onClick:()=>t("all"),children:"All"}),o.jsx(Na,{isActive:e==="upcoming",onClick:()=>t("upcoming"),children:"Upcoming"}),o.jsx(Na,{isActive:e==="completed",onClick:()=>t("completed"),children:"Completed"}),o.jsx(Na,{isActive:e==="missed",onClick:()=>t("missed"),children:"Missed"})]}),o.jsx(C_,{children:m.length===0?o.jsx(F_,{children:"No tests found matching your criteria."}):m.map(p=>o.jsxs(S_,{status:p.status,onClick:()=>h(p.id),children:[o.jsxs(P_,{children:[o.jsxs("div",{children:[o.jsx(T_,{type:p.type,children:p.type.charAt(0).toUpperCase()+p.type.slice(1)}),o.jsx(A_,{children:p.title}),o.jsx(M_,{children:p.subject})]}),o.jsxs(z_,{children:[o.jsxs(D_,{children:[o.jsx(Ae,{}),JV(e_(p.date),"MMM d, yyyy • h:mm a")]}),p.duration>0&&o.jsxs(E_,{children:[o.jsx(Qe,{}),p.duration," minutes"]}),p.status==="completed"&&p.score!==void 0&&o.jsxs(L_,{score:p.score/p.maxScore*100,children:[p.score," / ",p.maxScore]}),o.jsx(R_,{children:i.includes(p.id)?o.jsx(o6,{}):o.jsx(de,{})})]})]}),o.jsx(he,{children:i.includes(p.id)&&o.jsxs(I_,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},children:[p.description&&o.jsxs(au,{children:[o.jsxs(lu,{children:[o.jsx(Qt,{})," Description"]}),o.jsx(cu,{children:p.description})]}),p.location&&o.jsxs(au,{children:[o.jsx(lu,{children:"Location"}),o.jsx(cu,{children:p.location})]}),p.instructions&&o.jsxs(au,{children:[o.jsx(lu,{children:"Instructions"}),o.jsx(cu,{children:p.instructions})]}),p.status==="upcoming"&&o.jsx(Zx,{children:"Prepare for Test"}),p.status==="completed"&&o.jsx(Zx,{children:"View Detailed Results"})]})})]},p.id))})]})},x_=l.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`,y_=l.div`
  margin-bottom: 24px;
  
  h1 {
    font-size: 28px;
    font-weight: 700;
    margin: 0 0 8px 0;
    color: ${({theme:e})=>e.colors.text.primary};
  }
  
  p {
    font-size: 16px;
    color: ${({theme:e})=>e.colors.text.secondary};
    margin: 0;
  }
`,v_=l.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`,b_=l.div`
  position: relative;
  flex-grow: 1;
  
  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.colors.text.secondary};
  }
`,w_=l.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  font-size: 14px;
  background: ${({theme:e})=>e.colors.background.secondary};
  color: ${({theme:e})=>e.colors.text.primary};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
  }
`,$_=l.div`
  position: relative;
  
  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.colors.text.secondary};
  }
`,j_=l.select`
  padding: 12px 12px 12px 40px;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  font-size: 14px;
  background: ${({theme:e})=>e.colors.background.secondary};
  color: ${({theme:e})=>e.colors.text.primary};
  min-width: 200px;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
  }
`,k_=l.div`
  display: flex;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  margin-bottom: 24px;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    height: 0;
    width: 0;
  }
`,Na=l.button`
  padding: 12px 24px;
  background: none;
  border: none;
  font-size: 15px;
  font-weight: ${({isActive:e})=>e?"600":"400"};
  color: ${({isActive:e,theme:t})=>e?t.colors.primary:t.colors.text.secondary};
  cursor: pointer;
  border-bottom: 3px solid ${({isActive:e,theme:t})=>e?t.colors.primary:"transparent"};
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
  }
  
  &:focus {
    outline: none;
  }
`,C_=l.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,S_=l.div`
  background: ${({theme:e})=>e.colors.background.secondary};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid ${({status:e,theme:t})=>{switch(e){case"upcoming":return t.colors.primary;case"completed":return t.colors.success;case"missed":return t.colors.danger[500];default:return t.colors.border}}};
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`,P_=l.div`
  padding: 16px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`,T_=l.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
  background: ${({type:e,theme:t})=>{switch(e){case"quiz":return`${t.colors.warning}20`;case"exam":return`${t.colors.danger[500]}20`;case"assignment":return`${t.colors.primary}20`;default:return t.colors.border}}};
  color: ${({type:e,theme:t})=>{switch(e){case"quiz":return t.colors.warning;case"exam":return t.colors.danger[500];case"assignment":return t.colors.primary;default:return t.colors.text.primary}}};
`,A_=l.h3`
  margin: 0 0 4px 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
`,M_=l.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.secondary};
`,z_=l.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`,D_=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.secondary};
  
  svg {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`,E_=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.secondary};
  
  svg {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`,L_=l.div`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  background: ${({score:e,theme:t})=>e>=80?`${t.colors.success}20`:e>=60?`${t.colors.warning}20`:`${t.colors.danger[500]}20`};
  color: ${({score:e,theme:t})=>e>=80?t.colors.success:e>=60?t.colors.warning:t.colors.danger[500]};
`,R_=l.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 20px;
  padding: 4px;
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
  }
`,I_=l(D.div)`
  padding: 0 20px 20px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  display: flex;
  flex-direction: column;
  gap: 16px;
`,au=l.div`
  margin-top: 16px;
`,lu=l.div`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
  color: ${({theme:e})=>e.colors.text.primary};
  display: flex;
  align-items: center;
  gap: 6px;
  
  svg {
    font-size: 16px;
  }
`,cu=l.div`
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: 1.5;
`,Zx=l.button`
  background: ${({theme:e})=>e.colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 8px;
  align-self: flex-start;
  
  &:hover {
    background: ${({theme:e})=>e.colors.primary}dd;
  }
`,F_=l.div`
  text-align: center;
  padding: 40px 0;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 16px;
`,N_=()=>{const[e,t]=$.useState("sets"),[r,n]=$.useState(null),[i,s]=$.useState(""),[a,c]=$.useState(0),[d,u]=$.useState(new Set),[h,m]=$.useState(new Set),[p,b]=$.useState(null),v=[{id:"set1",title:"Biology - Cell Structure",subject:"Biology",totalCards:15,masteredCards:8,lastStudied:new Date(Date.now()-2*24*60*60*1e3),tags:["science","biology","cells"]},{id:"set2",title:"Math - Calculus Fundamentals",subject:"Mathematics",totalCards:24,masteredCards:12,lastStudied:new Date(Date.now()-5*24*60*60*1e3),tags:["math","calculus"]},{id:"set3",title:"History - World War II",subject:"History",totalCards:20,masteredCards:15,lastStudied:new Date(Date.now()-1*24*60*60*1e3),tags:["history","world wars"]},{id:"set4",title:"Programming - JavaScript Basics",subject:"Computer Science",totalCards:30,masteredCards:20,lastStudied:new Date(Date.now()-3*24*60*60*1e3),tags:["programming","javascript","web development"]},{id:"set5",title:"Chemistry - Periodic Table",subject:"Chemistry",totalCards:18,masteredCards:5,tags:["science","chemistry","elements"]}],j={set1:[{id:"card1_1",question:"What is a cell?",answer:"The basic structural and functional unit of all living organisms.",mastered:!0},{id:"card1_2",question:"What is the function of mitochondria?",answer:"Powerhouse of the cell, responsible for cellular respiration and producing energy in the form of ATP.",mastered:!0},{id:"card1_3",question:"What is the function of the nucleus?",answer:"Control center of the cell, contains genetic material (DNA) and directs cell activities.",mastered:!1},{id:"card1_4",question:"What is the endoplasmic reticulum?",answer:"A network of membranous tubules within the cytoplasm involved in protein and lipid synthesis.",mastered:!1},{id:"card1_5",question:"What are lysosomes?",answer:"Membrane-bound vesicles containing digestive enzymes that break down waste materials and cellular debris.",mastered:!0}],set2:[{id:"card2_1",question:"What is a derivative?",answer:"A rate of change of a function with respect to a variable.",mastered:!0},{id:"card2_2",question:"What is an integral?",answer:"The area under a curve, representing the accumulation of quantities.",mastered:!1},{id:"card2_3",question:"What is the chain rule?",answer:"A formula for computing the derivative of a composite function.",mastered:!0}],set3:[{id:"card3_1",question:"When did World War II begin?",answer:"September 1, 1939, with Germany's invasion of Poland.",mastered:!0},{id:"card3_2",question:"When did World War II end?",answer:"September 2, 1945, with Japan's formal surrender.",mastered:!0},{id:"card3_3",question:"Who were the Allied Powers?",answer:"Primarily the United States, Great Britain, France, and the Soviet Union.",mastered:!1}],set4:[{id:"card4_1",question:"What is a variable in JavaScript?",answer:"A named storage for data that can be modified during program execution.",mastered:!0},{id:"card4_2",question:"What is the difference between let and const?",answer:"let declares a block-scoped variable that can be reassigned, while const declares a block-scoped variable that cannot be reassigned.",mastered:!1},{id:"card4_3",question:"What is a function in JavaScript?",answer:"A reusable block of code designed to perform a particular task.",mastered:!0},{id:"card4_4",question:"What are JavaScript promises?",answer:"Objects representing the eventual completion or failure of an asynchronous operation.",mastered:!1}],set5:[{id:"card5_1",question:"What is the atomic number?",answer:"The number of protons in an atom's nucleus, which determines the chemical element.",mastered:!0},{id:"card5_2",question:"What are isotopes?",answer:"Variants of a particular chemical element that have the same number of protons but different numbers of neutrons.",mastered:!1},{id:"card5_3",question:"What is a noble gas?",answer:"Elements in group 18 of the periodic table that are colorless, odorless, and generally non-reactive.",mastered:!1}]};$.useEffect(()=>{if(r&&j[r]){const L=new Set;j[r].forEach(R=>{R.mastered&&L.add(R.id)}),m(L)}},[r]);const P=Array.from(new Set(v.flatMap(L=>L.tags))),y=v.filter(L=>{const R=i===""||L.title.toLowerCase().includes(i.toLowerCase())||L.subject.toLowerCase().includes(i.toLowerCase()),V=p===null||L.tags.includes(p);return R&&V}),f=r?v.find(L=>L.id===r):null,g=r?j[r]||[]:[],x=L=>{u(R=>{const V=new Set(R);return V.has(L)?V.delete(L):V.add(L),V})},C=L=>{m(R=>{const V=new Set(R);return V.has(L)?V.delete(L):V.add(L),V})},k=L=>{n(L),c(0),u(new Set),t("study")},S=()=>{a>0&&(c(L=>L-1),u(new Set))},w=()=>{a<g.length-1&&(c(L=>L+1),u(new Set))},A=()=>{t("sets"),n(null)},T=L=>{if(!L)return"Never";const V=Math.floor((new Date().getTime()-L.getTime())/(1e3*60*60*24));return V===0?"Today":V===1?"Yesterday":V<7?`${V} days ago`:L.toLocaleDateString()},U=(L,R)=>Math.round(R/L*100);return o.jsx(B_,{children:e==="sets"?o.jsxs(o.Fragment,{children:[o.jsxs(O_,{children:[o.jsx("h1",{children:"Flashcards"}),o.jsx("p",{children:"Review and master your coursework with flashcards"})]}),o.jsxs(V_,{children:[o.jsxs(__,{children:[o.jsx(W_,{children:o.jsx(Se,{})}),o.jsx(U_,{type:"text",placeholder:"Search sets...",value:i,onChange:L=>s(L.target.value)})]}),o.jsxs(H_,{children:[o.jsx(Nt,{}),o.jsxs(G_,{value:p||"",onChange:L=>b(L.target.value||null),children:[o.jsx("option",{value:"",children:"All Tags"}),P.map(L=>o.jsx("option",{value:L,children:L},L))]})]}),o.jsxs(Qw,{children:[o.jsx(fr,{}),o.jsx("span",{children:"Create New Set"})]})]}),o.jsx(Y_,{children:y.length===0?o.jsxs(aW,{children:[o.jsx("p",{children:"No flashcard sets found matching your criteria."}),o.jsxs(lW,{children:[o.jsx(fr,{}),o.jsx("span",{children:"Create your first set"})]})]}):y.map(L=>o.jsxs(q_,{children:[o.jsx(Q_,{children:L.title}),o.jsx(K_,{children:L.subject}),o.jsxs(X_,{children:[o.jsxs(J_,{children:[o.jsx("span",{children:L.totalCards})," cards"]}),o.jsxs(Z_,{children:["Last studied: ",T(L.lastStudied)]})]}),o.jsxs(eW,{children:[o.jsxs(tW,{children:[o.jsx("span",{children:"Progress"}),o.jsxs("span",{children:[L.masteredCards,"/",L.totalCards]})]}),o.jsx(rW,{children:o.jsx(nW,{width:U(L.totalCards,L.masteredCards)})})]}),o.jsx(oW,{children:L.tags.map(R=>o.jsx(iW,{children:R},R))}),o.jsxs(sW,{children:[o.jsx(Ai,{onClick:()=>k(L.id),$primary:!0,children:"Study Now"}),o.jsx(Ai,{children:o.jsx(pr,{})}),o.jsx(Ai,{children:o.jsx(Pw,{})})]})]},L.id))})]}):o.jsxs(o.Fragment,{children:[o.jsxs(cW,{children:[o.jsxs(dW,{onClick:A,children:[o.jsx(qt,{}),o.jsx("span",{children:"Back to Sets"})]}),o.jsx(uW,{children:f==null?void 0:f.title}),o.jsxs(hW,{children:["Card ",a+1," of ",g.length]})]}),o.jsxs(mW,{children:[o.jsxs(pW,{children:[h.size," of ",g.length," mastered (",Math.round(h.size/g.length*100),"%)"]}),o.jsxs(fW,{children:[o.jsxs(ey,{onClick:S,disabled:a===0,children:[o.jsx(qt,{}),o.jsx("span",{children:"Previous"})]}),o.jsxs(ey,{onClick:w,disabled:a===g.length-1,children:[o.jsx("span",{children:"Next"}),o.jsx(Yt,{})]})]})]}),g.length>0&&o.jsxs(gW,{children:[o.jsxs(xW,{onClick:()=>x(g[a].id),layout:!0,children:[o.jsx(ty,{initial:{rotateY:0},animate:{rotateY:d.has(g[a].id)?180:0},transition:{duration:.6},children:o.jsxs(ry,{children:[o.jsx(ny,{children:g[a].question}),o.jsx(oy,{children:"Click to flip"})]})}),o.jsx(ty,{initial:{rotateY:180},animate:{rotateY:d.has(g[a].id)?360:180},transition:{duration:.6},children:o.jsxs(ry,{children:[o.jsx(ny,{children:g[a].answer}),o.jsx(oy,{children:"Click to flip"})]})})]}),o.jsxs(yW,{children:[o.jsx(Ai,{onClick:()=>C(g[a].id),$primary:h.has(g[a].id),children:h.has(g[a].id)?o.jsxs(o.Fragment,{children:[o.jsx(Ft,{}),o.jsx("span",{children:"Unmark as Mastered"})]}):o.jsxs(o.Fragment,{children:[o.jsx(Ul,{}),o.jsx("span",{children:"Mark as Mastered"})]})}),o.jsxs(Ai,{children:[o.jsx(pr,{}),o.jsx("span",{children:"Edit Card"})]})]})]})]})})},B_=l.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`,O_=l.div`
  margin-bottom: 24px;
  
  h1 {
    font-size: 28px;
    font-weight: 700;
    margin: 0 0 8px 0;
    color: ${({theme:e})=>e.colors.text.primary};
  }
  
  p {
    font-size: 16px;
    color: ${({theme:e})=>e.colors.text.secondary};
    margin: 0;
  }
`,V_=l.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,__=l.div`
  position: relative;
  flex-grow: 1;
`,W_=l.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors.text.secondary};
`,U_=l.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  font-size: 14px;
  background: ${({theme:e})=>e.colors.background.secondary};
  color: ${({theme:e})=>e.colors.text.primary};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
  }
`,H_=l.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  background: ${({theme:e})=>e.colors.background.secondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 8px;
  
  svg {
    color: ${({theme:e})=>e.colors.text.secondary};
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,G_=l.select`
  padding: 12px 0;
  border: none;
  background: transparent;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.primary};
  appearance: none;
  outline: none;
  cursor: pointer;
  min-width: 120px;
  width: 100%;
`,Qw=l.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 20px;
  height: 42px;
  background: ${({theme:e})=>e.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({theme:e})=>e.colors.primary}dd;
  }
  
  svg {
    font-size: 18px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`,Y_=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`,q_=l.div`
  padding: 20px;
  background: ${({theme:e})=>e.colors.background.secondary};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,Q_=l.h3`
  margin: 0 0 4px 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
`,K_=l.p`
  margin: 0 0 16px 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.secondary};
`,X_=l.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`,J_=l.span`
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.secondary};
  
  span {
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,Z_=l.span`
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.secondary};
`,eW=l.div`
  margin-bottom: 16px;
`,tW=l.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.secondary};
`,rW=l.div`
  height: 6px;
  width: 100%;
  background: ${({theme:e})=>e.colors.background.hover};
  border-radius: 3px;
  overflow: hidden;
`,nW=l.div`
  height: 100%;
  width: ${e=>e.width}%;
  background: ${({theme:e})=>e.colors.primary};
  border-radius: 3px;
  transition: width 0.3s ease;
`,oW=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`,iW=l.span`
  padding: 4px 8px;
  background: ${({theme:e})=>e.colors.background.hover};
  color: ${({theme:e})=>e.colors.text.secondary};
  border-radius: 4px;
  font-size: 12px;
`,sW=l.div`
  display: flex;
  gap: 8px;
`,Ai=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: ${e=>e.$primary?"8px 16px":"8px"};
  background: ${e=>e.$primary?e.theme.colors.primary:e.theme.colors.background.hover};
  color: ${e=>e.$primary?"white":e.theme.colors.text.primary};
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: ${e=>e.$primary?"600":"400"};
  cursor: pointer;
  transition: all 0.2s ease;
  flex: ${e=>e.$primary?"1":"none"};
  
  &:hover {
    background: ${e=>e.$primary?`${e.theme.colors.primary}dd`:e.theme.colors.border};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,aW=l.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px;
  background: ${({theme:e})=>e.colors.background.secondary};
  border-radius: 12px;
  
  p {
    margin-bottom: 20px;
    color: ${({theme:e})=>e.colors.text.secondary};
  }
`,lW=l(Qw)`
  margin: 0 auto;
`,cW=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,dW=l.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 14px;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
  }
`,uW=l.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`,hW=l.div`
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.secondary};
`,mW=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,pW=l.div`
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.secondary};
`,fW=l.div`
  display: flex;
  gap: 12px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,ey=l.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: ${({theme:e})=>e.colors.background.secondary};
  color: ${({theme:e})=>e.colors.text.primary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.background.hover};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    flex: 1;
    justify-content: center;
  }
`,gW=l.div`
  margin-bottom: 24px;
`,xW=l(D.div)`
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 24px;
  perspective: 1000px;
  cursor: pointer;
`,ty=l(D.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.background.secondary};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 24px;
  will-change: transform;
`,ry=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
`,ny=l.div`
  font-size: 20px;
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: 20px;
  flex: 1;
  display: flex;
  align-items: center;
  overflow-y: auto;
  padding: 10px;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`,oy=l.div`
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.tertiary};
`,yW=l.div`
  display: flex;
  gap: 12px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Kw=$.createContext(null),vW=()=>{const e=$.useContext(Kw);if(!e)throw new Error("useThemeContext must be used within a ThemeProvider");return e},du=({children:e,requiredRole:t})=>{const{isAuthenticated:r,user:n}=Xt(),i=Kt();return r?t&&(n==null?void 0:n.role)!==t?o.jsx(Ml,{to:`/${n==null?void 0:n.role}/dashboard`,replace:!0}):e:o.jsx(Ml,{to:"/login",state:{from:i},replace:!0})};function bW(){const[e,t]=$.useState(!1),[r,n]=$.useState("#0ea5e9"),i=()=>{t(!e)},s=Fm(e?"dark":"light",r),a={isDarkMode:e,toggleTheme:i,primaryColor:r,setPrimaryColor:n};return o.jsx(Kw.Provider,{value:a,children:o.jsxs(MC,{theme:s,children:[o.jsx(IC,{}),o.jsxs(yk,{children:[o.jsx(Y,{path:"/",element:o.jsx(Ml,{to:"/login",replace:!0})}),o.jsx(Y,{path:"/login",element:o.jsx(hI,{})}),o.jsxs(Y,{path:"/admin",element:o.jsx(du,{requiredRole:"admin",children:o.jsx(hP,{})}),children:[o.jsx(Y,{path:"dashboard",element:o.jsx(bT,{})}),o.jsx(Y,{path:"users",element:o.jsx(ND,{})}),o.jsx(Y,{path:"roles",element:o.jsx(U7,{})}),o.jsx(Y,{path:"subjects",element:o.jsx(fE,{})}),o.jsx(Y,{path:"classes",element:o.jsx(GE,{})}),o.jsx(Y,{path:"timetables",element:o.jsx(kL,{})}),o.jsx(Y,{path:"settings",element:o.jsx(Hd,{})}),o.jsx(Y,{path:"profile",element:o.jsx(Gd,{})})]}),o.jsxs(Y,{path:"/teacher",element:o.jsx(du,{requiredRole:"teacher",children:o.jsx(FP,{})}),children:[o.jsx(Y,{path:"dashboard",element:o.jsx(hA,{})}),o.jsx(Y,{path:"profile",element:o.jsx(Gd,{})}),o.jsx(Y,{path:"courses",element:o.jsx(M8,{})}),o.jsx(Y,{path:"courses/:courseId",element:o.jsx("div",{children:"Course Details (Coming Soon)"})}),o.jsx(Y,{path:"students",element:o.jsx(dM,{})}),o.jsx(Y,{path:"assignments",element:o.jsx(UM,{})}),o.jsx(Y,{path:"grades",element:o.jsx(Fz,{})}),o.jsx(Y,{path:"schedule",element:o.jsx(PI,{})}),o.jsx(Y,{path:"messages",element:o.jsx(lF,{})}),o.jsx(Y,{path:"settings",element:o.jsx(Hd,{})})]}),o.jsxs(Y,{path:"/student",element:o.jsx(du,{requiredRole:"student",children:o.jsx(cT,{})}),children:[o.jsx(Y,{index:!0,element:o.jsx(Ml,{to:"/student/dashboard",replace:!0})}),o.jsx(Y,{path:"dashboard",element:o.jsx(YA,{})}),o.jsx(Y,{path:"courses",element:o.jsx(qF,{})}),o.jsx(Y,{path:"lessons",element:o.jsx(j9,{})}),o.jsx(Y,{path:"assignments",element:o.jsx(hN,{})}),o.jsx(Y,{path:"schedule",element:o.jsx(JN,{})}),o.jsx(Y,{path:"messages",element:o.jsx(oO,{})}),o.jsx(Y,{path:"tests",element:o.jsx(g_,{})}),o.jsx(Y,{path:"flashcards",element:o.jsx(N_,{})}),o.jsx(Y,{path:"profile",element:o.jsx(Gd,{})}),o.jsx(Y,{path:"settings",element:o.jsx(Hd,{})})]})]})]})})}function wW(){return o.jsx(Sk,{children:o.jsx(b6,{children:o.jsx(bW,{})})})}const Xw=document.getElementById("root");if(!Xw)throw new Error("Failed to find the root element");const $W=xv(Xw);$W.render(o.jsx(le.StrictMode,{children:o.jsx(wW,{})}));
