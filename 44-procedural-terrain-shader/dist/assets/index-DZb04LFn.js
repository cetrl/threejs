(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="166",Qn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lc=0,ka=1,cc=2,fa=1,uc=2,cn=3,Nn=0,Pt=1,un=2,In=0,Si=1,Va=2,Ga=3,Wa=4,hc=5,jn=100,dc=101,fc=102,pc=103,mc=104,gc=200,_c=201,vc=202,xc=203,Ls=204,Ds=205,Mc=206,yc=207,Sc=208,Ec=209,bc=210,Ac=211,wc=212,Tc=213,Cc=214,Rc=0,Pc=1,Lc=2,Dr=3,Dc=4,Ic=5,Uc=6,Nc=7,ul=0,Fc=1,Oc=2,Un=0,Bc=1,zc=2,Hc=3,hl=4,kc=5,Vc=6,Gc=7,dl=300,wi=301,Ti=302,Ir=303,Is=304,Hr=306,Us=1e3,dn=1001,Ns=1002,At=1003,Wc=1004,Ji=1005,vt=1006,Qr=1007,Dn=1008,mn=1009,fl=1010,pl=1011,Wi=1012,pa=1013,$n=1014,Ht=1015,fn=1016,ma=1017,ga=1018,Ci=1020,ml=35902,gl=1021,_l=1022,kt=1023,vl=1024,xl=1025,Ei=1026,Ri=1027,Ml=1028,_a=1029,yl=1030,va=1031,xa=1033,Ar=33776,wr=33777,Tr=33778,Cr=33779,Fs=35840,Os=35841,Bs=35842,zs=35843,Hs=36196,ks=37492,Vs=37496,Gs=37808,Ws=37809,Xs=37810,Ys=37811,js=37812,qs=37813,$s=37814,Ks=37815,Zs=37816,Js=37817,Qs=37818,ea=37819,ta=37820,na=37821,Rr=36492,ia=36494,ra=36495,Sl=36283,sa=36284,aa=36285,oa=36286,Xc=3200,El=3201,bl=0,Yc=1,Ln="",jt="srgb",Mn="srgb-linear",Ma="display-p3",kr="display-p3-linear",Ur="linear",Qe="srgb",Nr="rec709",Fr="p3",ti=7680,Xa=519,jc=512,qc=513,$c=514,Al=515,Kc=516,Zc=517,Jc=518,Qc=519,Ya=35044,ja="300 es",pn=2e3,Or=2001;class Zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qa=1234567;const bi=Math.PI/180,Xi=180/Math.PI;function Li(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function ya(i,e){return(i%e+e)%e}function eu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function tu(i,e,t){return i!==e?(t-i)/(e-i):0}function Gi(i,e,t){return(1-t)*i+t*e}function nu(i,e,t,n){return Gi(i,e,1-Math.exp(-t*n))}function iu(i,e=1){return e-Math.abs(ya(i,e*2)-e)}function ru(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function su(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function au(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ou(i,e){return i+Math.random()*(e-i)}function lu(i){return i*(.5-Math.random())}function cu(i){i!==void 0&&(qa=i);let e=qa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uu(i){return i*bi}function hu(i){return i*Xi}function du(i){return(i&i-1)===0&&i!==0}function fu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mu(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),p=s((e-n)/2),m=a((e-n)/2),_=s((n-e)/2),x=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*p,l*m,o*c);break;case"YZY":i.set(l*m,o*h,l*p,o*c);break;case"ZXZ":i.set(l*p,l*m,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*_,o*c);break;case"YXY":i.set(l*_,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*_,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const wl={DEG2RAD:bi,RAD2DEG:Xi,generateUUID:Li,clamp:pt,euclideanModulo:ya,mapLinear:eu,inverseLerp:tu,lerp:Gi,damp:nu,pingpong:iu,smoothstep:ru,smootherstep:su,randInt:au,randFloat:ou,randFloatSpread:lu,seededRandom:cu,degToRad:uu,radToDeg:hu,isPowerOfTwo:du,ceilPowerOfTwo:fu,floorPowerOfTwo:pu,setQuaternionFromProperEuler:mu,normalize:St,denormalize:Mi};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,r,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],m=n[2],_=n[5],x=n[8],S=r[0],f=r[3],u=r[6],T=r[1],y=r[4],R=r[7],F=r[2],b=r[5],C=r[8];return s[0]=a*S+o*T+l*F,s[3]=a*f+o*y+l*b,s[6]=a*u+o*R+l*C,s[1]=c*S+h*T+p*F,s[4]=c*f+h*y+p*b,s[7]=c*u+h*R+p*C,s[2]=m*S+_*T+x*F,s[5]=m*f+_*y+x*b,s[8]=m*u+_*R+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,m=o*l-h*s,_=c*s-a*l,x=t*p+n*m+r*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=p*S,e[1]=(r*c-h*n)*S,e[2]=(o*n-r*a)*S,e[3]=m*S,e[4]=(h*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=_*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(es.makeScale(e,t)),this}rotate(e){return this.premultiply(es.makeRotation(-e)),this}translate(e,t){return this.premultiply(es.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const es=new Ge;function Tl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gu(){const i=Br("canvas");return i.style.display="block",i}const $a={};function Cl(i){i in $a||($a[i]=!0,console.warn(i))}function _u(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Ka=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Za=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qi={[Mn]:{transfer:Ur,primaries:Nr,toReference:i=>i,fromReference:i=>i},[jt]:{transfer:Qe,primaries:Nr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[kr]:{transfer:Ur,primaries:Fr,toReference:i=>i.applyMatrix3(Za),fromReference:i=>i.applyMatrix3(Ka)},[Ma]:{transfer:Qe,primaries:Fr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Za),fromReference:i=>i.applyMatrix3(Ka).convertLinearToSRGB()}},vu=new Set([Mn,kr]),Ze={enabled:!0,_workingColorSpace:Mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!vu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Qi[e].toReference,r=Qi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Qi[i].primaries},getTransfer:function(i){return i===Ln?Ur:Qi[i].transfer}};function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ni;class xu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ni===void 0&&(ni=Br("canvas")),ni.width=e.width,ni.height=e.height;const n=ni.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ai(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ai(t[n]/255)*255):t[n]=Ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mu=0;class Rl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ns(r[a].image)):s.push(ns(r[a]))}else s=ns(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ns(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yu=0;class wt extends Zn{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=dn,r=dn,s=vt,a=Dn,o=kt,l=mn,c=wt.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Li(),this.name="",this.source=new Rl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Us:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case Ns:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Us:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case Ns:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=dl;wt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,r=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],m=l[1],_=l[5],x=l[9],S=l[2],f=l[6],u=l[10];if(Math.abs(h-m)<.01&&Math.abs(p-S)<.01&&Math.abs(x-f)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+S)<.1&&Math.abs(x+f)<.1&&Math.abs(c+_+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,R=(_+1)/2,F=(u+1)/2,b=(h+m)/4,C=(p+S)/4,v=(x+f)/4;return y>R&&y>F?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=b/n,s=C/n):R>F?R<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),n=b/r,s=v/r):F<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),n=C/s,r=v/s),this.set(n,r,s,t),this}let T=Math.sqrt((f-x)*(f-x)+(p-S)*(p-S)+(m-h)*(m-h));return Math.abs(T)<.001&&(T=1),this.x=(f-x)/T,this.y=(p-S)/T,this.z=(m-h)/T,this.w=Math.acos((c+_+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Su extends Zn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new wt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends Su{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pl extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Eu extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],p=n[r+3];const m=s[a+0],_=s[a+1],x=s[a+2],S=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p;return}if(o===1){e[t+0]=m,e[t+1]=_,e[t+2]=x,e[t+3]=S;return}if(p!==S||l!==m||c!==_||h!==x){let f=1-o;const u=l*m+c*_+h*x+p*S,T=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const F=Math.sqrt(y),b=Math.atan2(F,u*T);f=Math.sin(f*b)/F,o=Math.sin(o*b)/F}const R=o*T;if(l=l*f+m*R,c=c*f+_*R,h=h*f+x*R,p=p*f+S*R,f===1-o){const F=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=F,c*=F,h*=F,p*=F}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],p=s[a],m=s[a+1],_=s[a+2],x=s[a+3];return e[t]=o*x+h*p+l*_-c*m,e[t+1]=l*x+h*m+c*p-o*_,e[t+2]=c*x+h*_+o*m-l*p,e[t+3]=h*x-o*p-l*m-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),p=o(s/2),m=l(n/2),_=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=m*h*p+c*_*x,this._y=c*_*p-m*h*x,this._z=c*h*x+m*_*p,this._w=c*h*p-m*_*x;break;case"YXZ":this._x=m*h*p+c*_*x,this._y=c*_*p-m*h*x,this._z=c*h*x-m*_*p,this._w=c*h*p+m*_*x;break;case"ZXY":this._x=m*h*p-c*_*x,this._y=c*_*p+m*h*x,this._z=c*h*x+m*_*p,this._w=c*h*p-m*_*x;break;case"ZYX":this._x=m*h*p-c*_*x,this._y=c*_*p+m*h*x,this._z=c*h*x-m*_*p,this._w=c*h*p+m*_*x;break;case"YZX":this._x=m*h*p+c*_*x,this._y=c*_*p+m*h*x,this._z=c*h*x-m*_*p,this._w=c*h*p-m*_*x;break;case"XZY":this._x=m*h*p-c*_*x,this._y=c*_*p-m*h*x,this._z=c*h*x+m*_*p,this._w=c*h*p+m*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],p=t[10],m=n+o+p;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(h-l)*_,this._y=(s-c)*_,this._z=(a-r)*_}else if(n>o&&n>p){const _=2*Math.sqrt(1+n-o-p);this._w=(h-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+c)/_}else if(o>p){const _=2*Math.sqrt(1+o-n-p);this._w=(s-c)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+h)/_}else{const _=2*Math.sqrt(1+p-n-o);this._w=(a-r)/_,this._x=(s+c)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const _=1-t;return this._w=_*a+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),p=Math.sin((1-t)*h)/c,m=Math.sin(t*h)/c;return this._w=a*p+this._w*m,this._x=n*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ja.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ja.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+l*c+a*p-o*h,this.y=n+l*h+o*c-s*p,this.z=r+l*p+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return is.copy(this).projectOnVector(e),this.sub(is)}reflect(e){return this.sub(is.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const is=new k,Ja=new Kn;class ji{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gt):Gt.fromBufferAttribute(s,a),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)),er.applyMatrix4(e.matrixWorld),this.union(er)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ni),tr.subVectors(this.max,Ni),ii.subVectors(e.a,Ni),ri.subVectors(e.b,Ni),si.subVectors(e.c,Ni),En.subVectors(ri,ii),bn.subVectors(si,ri),zn.subVectors(ii,si);let t=[0,-En.z,En.y,0,-bn.z,bn.y,0,-zn.z,zn.y,En.z,0,-En.x,bn.z,0,-bn.x,zn.z,0,-zn.x,-En.y,En.x,0,-bn.y,bn.x,0,-zn.y,zn.x,0];return!rs(t,ii,ri,si,tr)||(t=[1,0,0,0,1,0,0,0,1],!rs(t,ii,ri,si,tr))?!1:(nr.crossVectors(En,bn),t=[nr.x,nr.y,nr.z],rs(t,ii,ri,si,tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nn=[new k,new k,new k,new k,new k,new k,new k,new k],Gt=new k,er=new ji,ii=new k,ri=new k,si=new k,En=new k,bn=new k,zn=new k,Ni=new k,tr=new k,nr=new k,Hn=new k;function rs(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Hn.fromArray(i,s);const o=r.x*Math.abs(Hn.x)+r.y*Math.abs(Hn.y)+r.z*Math.abs(Hn.z),l=e.dot(Hn),c=t.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const bu=new ji,Fi=new k,ss=new k;class Sa{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);const t=Fi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Fi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ss.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add(ss)),this.expandByPoint(Fi.copy(e.center).sub(ss))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rn=new k,as=new k,ir=new k,An=new k,os=new k,rr=new k,ls=new k;class Ll{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){as.copy(e).add(t).multiplyScalar(.5),ir.copy(t).sub(e).normalize(),An.copy(this.origin).sub(as);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ir),o=An.dot(this.direction),l=-An.dot(ir),c=An.lengthSq(),h=Math.abs(1-a*a);let p,m,_,x;if(h>0)if(p=a*l-o,m=a*o-l,x=s*h,p>=0)if(m>=-x)if(m<=x){const S=1/h;p*=S,m*=S,_=p*(p+a*m+2*o)+m*(a*p+m+2*l)+c}else m=s,p=Math.max(0,-(a*m+o)),_=-p*p+m*(m+2*l)+c;else m=-s,p=Math.max(0,-(a*m+o)),_=-p*p+m*(m+2*l)+c;else m<=-x?(p=Math.max(0,-(-a*s+o)),m=p>0?-s:Math.min(Math.max(-s,-l),s),_=-p*p+m*(m+2*l)+c):m<=x?(p=0,m=Math.min(Math.max(-s,-l),s),_=m*(m+2*l)+c):(p=Math.max(0,-(a*s+o)),m=p>0?s:Math.min(Math.max(-s,-l),s),_=-p*p+m*(m+2*l)+c);else m=a>0?-s:s,p=Math.max(0,-(a*m+o)),_=-p*p+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(as).addScaledVector(ir,m),_}intersectSphere(e,t){rn.subVectors(e.center,this.origin);const n=rn.dot(this.direction),r=rn.dot(rn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return c>=0?(n=(e.min.x-m.x)*c,r=(e.max.x-m.x)*c):(n=(e.max.x-m.x)*c,r=(e.min.x-m.x)*c),h>=0?(s=(e.min.y-m.y)*h,a=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,a=(e.min.y-m.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-m.z)*p,l=(e.max.z-m.z)*p):(o=(e.max.z-m.z)*p,l=(e.min.z-m.z)*p),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,n,r,s){os.subVectors(t,e),rr.subVectors(n,e),ls.crossVectors(os,rr);let a=this.direction.dot(ls),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,e);const l=o*this.direction.dot(rr.crossVectors(An,rr));if(l<0)return null;const c=o*this.direction.dot(os.cross(An));if(c<0||l+c>a)return null;const h=-o*An.dot(ls);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,r,s,a,o,l,c,h,p,m,_,x,S,f){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,p,m,_,x,S,f)}set(e,t,n,r,s,a,o,l,c,h,p,m,_,x,S,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=m,u[3]=_,u[7]=x,u[11]=S,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ai.setFromMatrixColumn(e,0).length(),s=1/ai.setFromMatrixColumn(e,1).length(),a=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=a*h,_=a*p,x=o*h,S=o*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=_+x*c,t[5]=m-S*c,t[9]=-o*l,t[2]=S-m*c,t[6]=x+_*c,t[10]=a*l}else if(e.order==="YXZ"){const m=l*h,_=l*p,x=c*h,S=c*p;t[0]=m+S*o,t[4]=x*o-_,t[8]=a*c,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=_*o-x,t[6]=S+m*o,t[10]=a*l}else if(e.order==="ZXY"){const m=l*h,_=l*p,x=c*h,S=c*p;t[0]=m-S*o,t[4]=-a*p,t[8]=x+_*o,t[1]=_+x*o,t[5]=a*h,t[9]=S-m*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const m=a*h,_=a*p,x=o*h,S=o*p;t[0]=l*h,t[4]=x*c-_,t[8]=m*c+S,t[1]=l*p,t[5]=S*c+m,t[9]=_*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const m=a*l,_=a*c,x=o*l,S=o*c;t[0]=l*h,t[4]=S-m*p,t[8]=x*p+_,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=_*p+x,t[10]=m-S*p}else if(e.order==="XZY"){const m=a*l,_=a*c,x=o*l,S=o*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=m*p+S,t[5]=a*h,t[9]=_*p-x,t[2]=x*p-_,t[6]=o*h,t[10]=S*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Au,e,wu)}lookAt(e,t,n){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),wn.crossVectors(n,It),wn.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),wn.crossVectors(n,It)),wn.normalize(),sr.crossVectors(It,wn),r[0]=wn.x,r[4]=sr.x,r[8]=It.x,r[1]=wn.y,r[5]=sr.y,r[9]=It.y,r[2]=wn.z,r[6]=sr.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],m=n[9],_=n[13],x=n[2],S=n[6],f=n[10],u=n[14],T=n[3],y=n[7],R=n[11],F=n[15],b=r[0],C=r[4],v=r[8],g=r[12],d=r[1],E=r[5],D=r[9],B=r[13],z=r[2],V=r[6],N=r[10],X=r[14],j=r[3],se=r[7],te=r[11],pe=r[15];return s[0]=a*b+o*d+l*z+c*j,s[4]=a*C+o*E+l*V+c*se,s[8]=a*v+o*D+l*N+c*te,s[12]=a*g+o*B+l*X+c*pe,s[1]=h*b+p*d+m*z+_*j,s[5]=h*C+p*E+m*V+_*se,s[9]=h*v+p*D+m*N+_*te,s[13]=h*g+p*B+m*X+_*pe,s[2]=x*b+S*d+f*z+u*j,s[6]=x*C+S*E+f*V+u*se,s[10]=x*v+S*D+f*N+u*te,s[14]=x*g+S*B+f*X+u*pe,s[3]=T*b+y*d+R*z+F*j,s[7]=T*C+y*E+R*V+F*se,s[11]=T*v+y*D+R*N+F*te,s[15]=T*g+y*B+R*X+F*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],m=e[10],_=e[14],x=e[3],S=e[7],f=e[11],u=e[15];return x*(+s*l*p-r*c*p-s*o*m+n*c*m+r*o*_-n*l*_)+S*(+t*l*_-t*c*m+s*a*m-r*a*_+r*c*h-s*l*h)+f*(+t*c*p-t*o*_-s*a*p+n*a*_+s*o*h-n*c*h)+u*(-r*o*h-t*l*p+t*o*m+r*a*p-n*a*m+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],m=e[10],_=e[11],x=e[12],S=e[13],f=e[14],u=e[15],T=p*f*c-S*m*c+S*l*_-o*f*_-p*l*u+o*m*u,y=x*m*c-h*f*c-x*l*_+a*f*_+h*l*u-a*m*u,R=h*S*c-x*p*c+x*o*_-a*S*_-h*o*u+a*p*u,F=x*p*l-h*S*l-x*o*m+a*S*m+h*o*f-a*p*f,b=t*T+n*y+r*R+s*F;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=T*C,e[1]=(S*m*s-p*f*s-S*r*_+n*f*_+p*r*u-n*m*u)*C,e[2]=(o*f*s-S*l*s+S*r*c-n*f*c-o*r*u+n*l*u)*C,e[3]=(p*l*s-o*m*s-p*r*c+n*m*c+o*r*_-n*l*_)*C,e[4]=y*C,e[5]=(h*f*s-x*m*s+x*r*_-t*f*_-h*r*u+t*m*u)*C,e[6]=(x*l*s-a*f*s-x*r*c+t*f*c+a*r*u-t*l*u)*C,e[7]=(a*m*s-h*l*s+h*r*c-t*m*c-a*r*_+t*l*_)*C,e[8]=R*C,e[9]=(x*p*s-h*S*s-x*n*_+t*S*_+h*n*u-t*p*u)*C,e[10]=(a*S*s-x*o*s+x*n*c-t*S*c-a*n*u+t*o*u)*C,e[11]=(h*o*s-a*p*s-h*n*c+t*p*c+a*n*_-t*o*_)*C,e[12]=F*C,e[13]=(h*S*r-x*p*r+x*n*m-t*S*m-h*n*f+t*p*f)*C,e[14]=(x*o*r-a*S*r-x*n*l+t*S*l+a*n*f-t*o*f)*C,e[15]=(a*p*r-h*o*r+h*n*l-t*p*l-a*n*m+t*o*m)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,p=o+o,m=s*c,_=s*h,x=s*p,S=a*h,f=a*p,u=o*p,T=l*c,y=l*h,R=l*p,F=n.x,b=n.y,C=n.z;return r[0]=(1-(S+u))*F,r[1]=(_+R)*F,r[2]=(x-y)*F,r[3]=0,r[4]=(_-R)*b,r[5]=(1-(m+u))*b,r[6]=(f+T)*b,r[7]=0,r[8]=(x+y)*C,r[9]=(f-T)*C,r[10]=(1-(m+S))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ai.set(r[0],r[1],r[2]).length();const a=ai.set(r[4],r[5],r[6]).length(),o=ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wt.copy(this);const c=1/s,h=1/a,p=1/o;return Wt.elements[0]*=c,Wt.elements[1]*=c,Wt.elements[2]*=c,Wt.elements[4]*=h,Wt.elements[5]*=h,Wt.elements[6]*=h,Wt.elements[8]*=p,Wt.elements[9]*=p,Wt.elements[10]*=p,t.setFromRotationMatrix(Wt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=pn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),p=(t+e)/(t-e),m=(n+r)/(n-r);let _,x;if(o===pn)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Or)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=pn){const l=this.elements,c=1/(t-e),h=1/(n-r),p=1/(a-s),m=(t+e)*c,_=(n+r)*h;let x,S;if(o===pn)x=(a+s)*p,S=-2*p;else if(o===Or)x=s*p,S=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=S,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ai=new k,Wt=new Je,Au=new k(0,0,0),wu=new k(1,1,1),wn=new k,sr=new k,It=new k,Qa=new Je,eo=new Kn;class Qt{constructor(e=0,t=0,n=0,r=Qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],p=r[2],m=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eo.setFromEuler(this),this.setFromQuaternion(eo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qt.DEFAULT_ORDER="XYZ";class Dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tu=0;const to=new k,oi=new Kn,sn=new Je,ar=new k,Oi=new k,Cu=new k,Ru=new Kn,no=new k(1,0,0),io=new k(0,1,0),ro=new k(0,0,1),so={type:"added"},Pu={type:"removed"},li={type:"childadded",child:null},cs={type:"childremoved",child:null};class Tt extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new k,t=new Qt,n=new Kn,r=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ge}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(no,e)}rotateY(e){return this.rotateOnAxis(io,e)}rotateZ(e){return this.rotateOnAxis(ro,e)}translateOnAxis(e,t){return to.copy(e).applyQuaternion(this.quaternion),this.position.add(to.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(no,e)}translateY(e){return this.translateOnAxis(io,e)}translateZ(e){return this.translateOnAxis(ro,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ar.copy(e):ar.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Oi,ar,this.up):sn.lookAt(ar,Oi,this.up),this.quaternion.setFromRotationMatrix(sn),r&&(sn.extractRotation(r.matrixWorld),oi.setFromRotationMatrix(sn),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(so),li.child=e,this.dispatchEvent(li),li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pu),cs.child=e,this.dispatchEvent(cs),cs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(so),li.child=e,this.dispatchEvent(li),li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,e,Cu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,Ru,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),m=a(e.skeletons),_=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),_.length>0&&(n.animations=_),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new k(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new k,an=new k,us=new k,on=new k,ci=new k,ui=new k,ao=new k,hs=new k,ds=new k,fs=new k;class $t{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xt.subVectors(e,t),r.cross(Xt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Xt.subVectors(r,t),an.subVectors(n,t),us.subVectors(e,t);const a=Xt.dot(Xt),o=Xt.dot(an),l=Xt.dot(us),c=an.dot(an),h=an.dot(us),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const m=1/p,_=(c*l-o*h)*m,x=(a*h-o*l)*m;return s.set(1-_-x,x,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,on)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,on.x),l.addScaledVector(a,on.y),l.addScaledVector(o,on.z),l)}static isFrontFacing(e,t,n,r){return Xt.subVectors(n,t),an.subVectors(e,t),Xt.cross(an).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Xt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ci.subVectors(r,n),ui.subVectors(s,n),hs.subVectors(e,n);const l=ci.dot(hs),c=ui.dot(hs);if(l<=0&&c<=0)return t.copy(n);ds.subVectors(e,r);const h=ci.dot(ds),p=ui.dot(ds);if(h>=0&&p<=h)return t.copy(r);const m=l*p-h*c;if(m<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ci,a);fs.subVectors(e,s);const _=ci.dot(fs),x=ui.dot(fs);if(x>=0&&_<=x)return t.copy(s);const S=_*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(ui,o);const f=h*x-_*p;if(f<=0&&p-h>=0&&_-x>=0)return ao.subVectors(s,r),o=(p-h)/(p-h+(_-x)),t.copy(r).addScaledVector(ao,o);const u=1/(f+S+m);return a=S*u,o=m*u,t.copy(n).addScaledVector(ci,a).addScaledVector(ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},or={h:0,s:0,l:0};function ps(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ze.workingColorSpace){if(e=ya(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ps(a,s,e+1/3),this.g=ps(a,s,e),this.b=ps(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=jt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=Il[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return Ze.fromWorkingColorSpace(Mt.copy(this),e),Math.round(pt(Mt.r*255,0,255))*65536+Math.round(pt(Mt.g*255,0,255))*256+Math.round(pt(Mt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,r=Mt.g,s=Mt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=jt){Ze.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,r=Mt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(or);const n=Gi(Tn.h,or.h,t),r=Gi(Tn.s,or.s,t),s=Gi(Tn.l,or.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new We;We.NAMES=Il;let Lu=0;class Di extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=Si,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ls,this.blendDst=Ds,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ls&&(n.blendSrc=this.blendSrc),this.blendDst!==Ds&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Ea extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=Du();function Du(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function Iu(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=pt(i,-65504,65504),hn.floatView[0]=i;const e=hn.uint32View[0],t=e>>23&511;return hn.baseTable[t]+((e&8388607)>>hn.shiftTable[t])}function Uu(i){const e=i>>10;return hn.uint32View[0]=hn.mantissaTable[hn.offsetTable[e]+(i&1023)]+hn.exponentTable[e],hn.floatView[0]}const lr={toHalfFloat:Iu,fromHalfFloat:Uu},lt=new k,cr=new Be;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ya,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ht,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Cl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix3(e),this.setXY(t,cr.x,cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ya&&(e.usage=this.usage),e}}class Ul extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nl extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zt extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nu=0;const Bt=new Je,ms=new Tt,hi=new k,Ut=new ji,Bi=new ji,ft=new k;class Fn extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tl(e)?Nl:Ul)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return ms.lookAt(e),ms.updateMatrix(),this.applyMatrix4(ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Bi.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(Ut.min,Bi.min),Ut.expandByPoint(ft),ft.addVectors(Ut.max,Bi.max),Ut.expandByPoint(ft)):(Ut.expandByPoint(Bi.min),Ut.expandByPoint(Bi.max))}Ut.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ft));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ft.fromBufferAttribute(o,c),l&&(hi.fromBufferAttribute(e,c),ft.add(hi)),r=Math.max(r,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new k,l[v]=new k;const c=new k,h=new k,p=new k,m=new Be,_=new Be,x=new Be,S=new k,f=new k;function u(v,g,d){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),p.fromBufferAttribute(n,d),m.fromBufferAttribute(s,v),_.fromBufferAttribute(s,g),x.fromBufferAttribute(s,d),h.sub(c),p.sub(c),_.sub(m),x.sub(m);const E=1/(_.x*x.y-x.x*_.y);isFinite(E)&&(S.copy(h).multiplyScalar(x.y).addScaledVector(p,-_.y).multiplyScalar(E),f.copy(p).multiplyScalar(_.x).addScaledVector(h,-x.x).multiplyScalar(E),o[v].add(S),o[g].add(S),o[d].add(S),l[v].add(f),l[g].add(f),l[d].add(f))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let v=0,g=T.length;v<g;++v){const d=T[v],E=d.start,D=d.count;for(let B=E,z=E+D;B<z;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new k,R=new k,F=new k,b=new k;function C(v){F.fromBufferAttribute(r,v),b.copy(F);const g=o[v];y.copy(g),y.sub(F.multiplyScalar(F.dot(g))).normalize(),R.crossVectors(b,g);const E=R.dot(l[v])<0?-1:1;a.setXYZW(v,y.x,y.y,y.z,E)}for(let v=0,g=T.length;v<g;++v){const d=T[v],E=d.start,D=d.count;for(let B=E,z=E+D;B<z;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,h=new k,p=new k;if(e)for(let m=0,_=e.count;m<_;m+=3){const x=e.getX(m+0),S=e.getX(m+1),f=e.getX(m+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,f),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let m=0,_=t.count;m<_;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,m=new c.constructor(l.length*h);let _=0,x=0;for(let S=0,f=l.length;S<f;S++){o.isInterleavedBufferAttribute?_=l[S]*o.data.stride+o.offset:_=l[S]*h;for(let u=0;u<h;u++)m[x++]=c[_++]}return new Kt(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const m=c[h],_=e(m,n);l.push(_)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,m=c.length;p<m;p++){const _=c[p];h.push(_.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let m=0,_=p.length;m<_;m++)h.push(p[m].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oo=new Je,kn=new Ll,ur=new Sa,lo=new k,di=new k,fi=new k,pi=new k,gs=new k,hr=new k,dr=new Be,fr=new Be,pr=new Be,co=new k,uo=new k,ho=new k,mr=new k,gr=new k;class yt extends Tt{constructor(e=new Fn,t=new Ea){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){hr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(gs.fromBufferAttribute(p,e),a?hr.addScaledVector(gs,h):hr.addScaledVector(gs.sub(t),h))}t.add(hr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(s),kn.copy(e.ray).recast(e.near),!(ur.containsPoint(kn.origin)===!1&&(kn.intersectSphere(ur,lo)===null||kn.origin.distanceToSquared(lo)>(e.far-e.near)**2))&&(oo.copy(s).invert(),kn.copy(e.ray).applyMatrix4(oo),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,m=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=m.length;x<S;x++){const f=m[x],u=a[f.materialIndex],T=Math.max(f.start,_.start),y=Math.min(o.count,Math.min(f.start+f.count,_.start+_.count));for(let R=T,F=y;R<F;R+=3){const b=o.getX(R),C=o.getX(R+1),v=o.getX(R+2);r=_r(this,u,e,n,c,h,p,b,C,v),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const x=Math.max(0,_.start),S=Math.min(o.count,_.start+_.count);for(let f=x,u=S;f<u;f+=3){const T=o.getX(f),y=o.getX(f+1),R=o.getX(f+2);r=_r(this,a,e,n,c,h,p,T,y,R),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=m.length;x<S;x++){const f=m[x],u=a[f.materialIndex],T=Math.max(f.start,_.start),y=Math.min(l.count,Math.min(f.start+f.count,_.start+_.count));for(let R=T,F=y;R<F;R+=3){const b=R,C=R+1,v=R+2;r=_r(this,u,e,n,c,h,p,b,C,v),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const x=Math.max(0,_.start),S=Math.min(l.count,_.start+_.count);for(let f=x,u=S;f<u;f+=3){const T=f,y=f+1,R=f+2;r=_r(this,a,e,n,c,h,p,T,y,R),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function Fu(i,e,t,n,r,s,a,o){let l;if(e.side===Pt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Nn,o),l===null)return null;gr.copy(o),gr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(gr);return c<t.near||c>t.far?null:{distance:c,point:gr.clone(),object:i}}function _r(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,di),i.getVertexPosition(l,fi),i.getVertexPosition(c,pi);const h=Fu(i,e,t,n,di,fi,pi,mr);if(h){r&&(dr.fromBufferAttribute(r,o),fr.fromBufferAttribute(r,l),pr.fromBufferAttribute(r,c),h.uv=$t.getInterpolation(mr,di,fi,pi,dr,fr,pr,new Be)),s&&(dr.fromBufferAttribute(s,o),fr.fromBufferAttribute(s,l),pr.fromBufferAttribute(s,c),h.uv1=$t.getInterpolation(mr,di,fi,pi,dr,fr,pr,new Be)),a&&(co.fromBufferAttribute(a,o),uo.fromBufferAttribute(a,l),ho.fromBufferAttribute(a,c),h.normal=$t.getInterpolation(mr,di,fi,pi,co,uo,ho,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new k,materialIndex:0};$t.getNormal(di,fi,pi,p.normal),h.face=p}return h}class qi extends Fn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],p=[];let m=0,_=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(p,2));function x(S,f,u,T,y,R,F,b,C,v,g){const d=R/C,E=F/v,D=R/2,B=F/2,z=b/2,V=C+1,N=v+1;let X=0,j=0;const se=new k;for(let te=0;te<N;te++){const pe=te*E-B;for(let Pe=0;Pe<V;Pe++){const Ie=Pe*d-D;se[S]=Ie*T,se[f]=pe*y,se[u]=z,c.push(se.x,se.y,se.z),se[S]=0,se[f]=0,se[u]=b>0?1:-1,h.push(se.x,se.y,se.z),p.push(Pe/C),p.push(1-te/v),X+=1}}for(let te=0;te<v;te++)for(let pe=0;pe<C;pe++){const Pe=m+pe+V*te,Ie=m+pe+V*(te+1),J=m+(pe+1)+V*(te+1),le=m+(pe+1)+V*te;l.push(Pe,Ie,le),l.push(Ie,J,le),j+=6}o.addGroup(_,j,g),_+=j,m+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Et(i){const e={};for(let t=0;t<i.length;t++){const n=Pi(i[t]);for(const r in n)e[r]=n[r]}return e}function Ou(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Bu={clone:Pi,merge:Et};var zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zu,this.fragmentShader=Hu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pi(e.uniforms),this.uniformsGroups=Ou(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ol extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new k,fo=new Be,po=new Be;class bt extends Ol{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z)}getViewSize(e,t){return this.getViewBounds(e,fo,po),t.subVectors(po,fo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mi=-90,gi=1;class ku extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bt(mi,gi,e,t);r.layers=this.layers,this.add(r);const s=new bt(mi,gi,e,t);s.layers=this.layers,this.add(s);const a=new bt(mi,gi,e,t);a.layers=this.layers,this.add(a);const o=new bt(mi,gi,e,t);o.layers=this.layers,this.add(o);const l=new bt(mi,gi,e,t);l.layers=this.layers,this.add(l);const c=new bt(mi,gi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(p,m,_),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Bl extends wt{constructor(e,t,n,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:wi,super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vu extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Bl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qi(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:In});s.uniforms.tEquirect.value=t;const a=new yt(r,s),o=t.minFilter;return t.minFilter===Dn&&(t.minFilter=vt),new ku(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const _s=new k,Gu=new k,Wu=new Ge;class Pn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=_s.subVectors(n,t).cross(Gu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_s),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wu.getNormalMatrix(e),r=this.coplanarPoint(_s).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new Sa,vr=new k;class Vr{constructor(e=new Pn,t=new Pn,n=new Pn,r=new Pn,s=new Pn,a=new Pn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],p=r[6],m=r[7],_=r[8],x=r[9],S=r[10],f=r[11],u=r[12],T=r[13],y=r[14],R=r[15];if(n[0].setComponents(l-s,m-c,f-_,R-u).normalize(),n[1].setComponents(l+s,m+c,f+_,R+u).normalize(),n[2].setComponents(l+a,m+h,f+x,R+T).normalize(),n[3].setComponents(l-a,m-h,f-x,R-T).normalize(),n[4].setComponents(l-o,m-p,f-S,R-y).normalize(),t===pn)n[5].setComponents(l+o,m+p,f+S,R+y).normalize();else if(t===Or)n[5].setComponents(o,p,S,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(vr.x=r.normal.x>0?e.max.x:e.min.x,vr.y=r.normal.y>0?e.max.y:e.min.y,vr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zl(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Xu(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,p=c.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,c,h),o.onUploadCallback();let _;if(c instanceof Float32Array)_=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=i.SHORT;else if(c instanceof Uint32Array)_=i.UNSIGNED_INT;else if(c instanceof Int32Array)_=i.INT;else if(c instanceof Int8Array)_=i.BYTE;else if(c instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){const h=l.array,p=l._updateRange,m=l.updateRanges;if(i.bindBuffer(c,o),p.count===-1&&m.length===0&&i.bufferSubData(c,0,h),m.length!==0){for(let _=0,x=m.length;_<x;_++){const S=m[_];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}p.count!==-1&&(i.bufferSubData(c,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count),p.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class On extends Fn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,p=e/o,m=t/l,_=[],x=[],S=[],f=[];for(let u=0;u<h;u++){const T=u*m-a;for(let y=0;y<c;y++){const R=y*p-s;x.push(R,-T,0),S.push(0,0,1),f.push(y/o),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<o;T++){const y=T+c*u,R=T+c*(u+1),F=T+1+c*(u+1),b=T+1+c*u;_.push(y,R,b),_.push(R,F,b)}this.setIndex(_),this.setAttribute("position",new Zt(x,3)),this.setAttribute("normal",new Zt(S,3)),this.setAttribute("uv",new Zt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ju=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$u=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ku=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ju=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,th=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ih=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ah=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_h=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,bh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ah=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Th=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ch=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ph=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ih=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Oh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$h=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,td=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,od=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Md=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ld=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ud=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Od=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Qd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ef=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,af=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,of=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ff=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_f=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ef=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Yu,alphahash_pars_fragment:ju,alphamap_fragment:qu,alphamap_pars_fragment:$u,alphatest_fragment:Ku,alphatest_pars_fragment:Zu,aomap_fragment:Ju,aomap_pars_fragment:Qu,batching_pars_vertex:eh,batching_vertex:th,begin_vertex:nh,beginnormal_vertex:ih,bsdfs:rh,iridescence_fragment:sh,bumpmap_pars_fragment:ah,clipping_planes_fragment:oh,clipping_planes_pars_fragment:lh,clipping_planes_pars_vertex:ch,clipping_planes_vertex:uh,color_fragment:hh,color_pars_fragment:dh,color_pars_vertex:fh,color_vertex:ph,common:mh,cube_uv_reflection_fragment:gh,defaultnormal_vertex:_h,displacementmap_pars_vertex:vh,displacementmap_vertex:xh,emissivemap_fragment:Mh,emissivemap_pars_fragment:yh,colorspace_fragment:Sh,colorspace_pars_fragment:Eh,envmap_fragment:bh,envmap_common_pars_fragment:Ah,envmap_pars_fragment:wh,envmap_pars_vertex:Th,envmap_physical_pars_fragment:Bh,envmap_vertex:Ch,fog_vertex:Rh,fog_pars_vertex:Ph,fog_fragment:Lh,fog_pars_fragment:Dh,gradientmap_pars_fragment:Ih,lightmap_pars_fragment:Uh,lights_lambert_fragment:Nh,lights_lambert_pars_fragment:Fh,lights_pars_begin:Oh,lights_toon_fragment:zh,lights_toon_pars_fragment:Hh,lights_phong_fragment:kh,lights_phong_pars_fragment:Vh,lights_physical_fragment:Gh,lights_physical_pars_fragment:Wh,lights_fragment_begin:Xh,lights_fragment_maps:Yh,lights_fragment_end:jh,logdepthbuf_fragment:qh,logdepthbuf_pars_fragment:$h,logdepthbuf_pars_vertex:Kh,logdepthbuf_vertex:Zh,map_fragment:Jh,map_pars_fragment:Qh,map_particle_fragment:ed,map_particle_pars_fragment:td,metalnessmap_fragment:nd,metalnessmap_pars_fragment:id,morphinstance_vertex:rd,morphcolor_vertex:sd,morphnormal_vertex:ad,morphtarget_pars_vertex:od,morphtarget_vertex:ld,normal_fragment_begin:cd,normal_fragment_maps:ud,normal_pars_fragment:hd,normal_pars_vertex:dd,normal_vertex:fd,normalmap_pars_fragment:pd,clearcoat_normal_fragment_begin:md,clearcoat_normal_fragment_maps:gd,clearcoat_pars_fragment:_d,iridescence_pars_fragment:vd,opaque_fragment:xd,packing:Md,premultiplied_alpha_fragment:yd,project_vertex:Sd,dithering_fragment:Ed,dithering_pars_fragment:bd,roughnessmap_fragment:Ad,roughnessmap_pars_fragment:wd,shadowmap_pars_fragment:Td,shadowmap_pars_vertex:Cd,shadowmap_vertex:Rd,shadowmask_pars_fragment:Pd,skinbase_vertex:Ld,skinning_pars_vertex:Dd,skinning_vertex:Id,skinnormal_vertex:Ud,specularmap_fragment:Nd,specularmap_pars_fragment:Fd,tonemapping_fragment:Od,tonemapping_pars_fragment:Bd,transmission_fragment:zd,transmission_pars_fragment:Hd,uv_pars_fragment:kd,uv_pars_vertex:Vd,uv_vertex:Gd,worldpos_vertex:Wd,background_vert:Xd,background_frag:Yd,backgroundCube_vert:jd,backgroundCube_frag:qd,cube_vert:$d,cube_frag:Kd,depth_vert:Zd,depth_frag:Jd,distanceRGBA_vert:Qd,distanceRGBA_frag:ef,equirect_vert:tf,equirect_frag:nf,linedashed_vert:rf,linedashed_frag:sf,meshbasic_vert:af,meshbasic_frag:of,meshlambert_vert:lf,meshlambert_frag:cf,meshmatcap_vert:uf,meshmatcap_frag:hf,meshnormal_vert:df,meshnormal_frag:ff,meshphong_vert:pf,meshphong_frag:mf,meshphysical_vert:gf,meshphysical_frag:_f,meshtoon_vert:vf,meshtoon_frag:xf,points_vert:Mf,points_frag:yf,shadow_vert:Sf,shadow_frag:Ef,sprite_vert:bf,sprite_frag:Af},fe={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},qt={basic:{uniforms:Et([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Et([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Et([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Et([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Et([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Et([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Et([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Et([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Et([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Et([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Et([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Et([fe.common,fe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Et([fe.lights,fe.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};qt.physical={uniforms:Et([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const xr={r:0,b:0,g:0},Gn=new Qt,wf=new Je;function Tf(i,e,t,n,r,s,a){const o=new We(0);let l=s===!0?0:1,c,h,p=null,m=0,_=null;function x(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function S(T){let y=!1;const R=x(T);R===null?u(o,l):R&&R.isColor&&(u(R,1),y=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(T,y){const R=x(y);R&&(R.isCubeTexture||R.mapping===Hr)?(h===void 0&&(h=new yt(new qi(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Pi(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Gn.copy(y.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wf.makeRotationFromEuler(Gn)),h.material.toneMapped=Ze.getTransfer(R.colorSpace)!==Qe,(p!==R||m!==R.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,p=R,m=R.version,_=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new yt(new On(2,2),new _n({name:"BackgroundMaterial",uniforms:Pi(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(R.colorSpace)!==Qe,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(p!==R||m!==R.version||_!==i.toneMapping)&&(c.material.needsUpdate=!0,p=R,m=R.version,_=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function u(T,y){T.getRGB(xr,Fl(i)),n.buffers.color.setClear(xr.r,xr.g,xr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,u(o,l)},render:S,addToRenderList:f}}function Cf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let s=r,a=!1;function o(d,E,D,B,z){let V=!1;const N=p(B,D,E);s!==N&&(s=N,c(s.object)),V=_(d,B,D,z),V&&x(d,B,D,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,R(d,E,D,B),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(d){return i.bindVertexArray(d)}function h(d){return i.deleteVertexArray(d)}function p(d,E,D){const B=D.wireframe===!0;let z=n[d.id];z===void 0&&(z={},n[d.id]=z);let V=z[E.id];V===void 0&&(V={},z[E.id]=V);let N=V[B];return N===void 0&&(N=m(l()),V[B]=N),N}function m(d){const E=[],D=[],B=[];for(let z=0;z<t;z++)E[z]=0,D[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:D,attributeDivisors:B,object:d,attributes:{},index:null}}function _(d,E,D,B){const z=s.attributes,V=E.attributes;let N=0;const X=D.getAttributes();for(const j in X)if(X[j].location>=0){const te=z[j];let pe=V[j];if(pe===void 0&&(j==="instanceMatrix"&&d.instanceMatrix&&(pe=d.instanceMatrix),j==="instanceColor"&&d.instanceColor&&(pe=d.instanceColor)),te===void 0||te.attribute!==pe||pe&&te.data!==pe.data)return!0;N++}return s.attributesNum!==N||s.index!==B}function x(d,E,D,B){const z={},V=E.attributes;let N=0;const X=D.getAttributes();for(const j in X)if(X[j].location>=0){let te=V[j];te===void 0&&(j==="instanceMatrix"&&d.instanceMatrix&&(te=d.instanceMatrix),j==="instanceColor"&&d.instanceColor&&(te=d.instanceColor));const pe={};pe.attribute=te,te&&te.data&&(pe.data=te.data),z[j]=pe,N++}s.attributes=z,s.attributesNum=N,s.index=B}function S(){const d=s.newAttributes;for(let E=0,D=d.length;E<D;E++)d[E]=0}function f(d){u(d,0)}function u(d,E){const D=s.newAttributes,B=s.enabledAttributes,z=s.attributeDivisors;D[d]=1,B[d]===0&&(i.enableVertexAttribArray(d),B[d]=1),z[d]!==E&&(i.vertexAttribDivisor(d,E),z[d]=E)}function T(){const d=s.newAttributes,E=s.enabledAttributes;for(let D=0,B=E.length;D<B;D++)E[D]!==d[D]&&(i.disableVertexAttribArray(D),E[D]=0)}function y(d,E,D,B,z,V,N){N===!0?i.vertexAttribIPointer(d,E,D,z,V):i.vertexAttribPointer(d,E,D,B,z,V)}function R(d,E,D,B){S();const z=B.attributes,V=D.getAttributes(),N=E.defaultAttributeValues;for(const X in V){const j=V[X];if(j.location>=0){let se=z[X];if(se===void 0&&(X==="instanceMatrix"&&d.instanceMatrix&&(se=d.instanceMatrix),X==="instanceColor"&&d.instanceColor&&(se=d.instanceColor)),se!==void 0){const te=se.normalized,pe=se.itemSize,Pe=e.get(se);if(Pe===void 0)continue;const Ie=Pe.buffer,J=Pe.type,le=Pe.bytesPerElement,xe=J===i.INT||J===i.UNSIGNED_INT||se.gpuType===pa;if(se.isInterleavedBufferAttribute){const me=se.data,Q=me.stride,w=se.offset;if(me.isInstancedInterleavedBuffer){for(let I=0;I<j.locationSize;I++)u(j.location+I,me.meshPerAttribute);d.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let I=0;I<j.locationSize;I++)f(j.location+I);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let I=0;I<j.locationSize;I++)y(j.location+I,pe/j.locationSize,J,te,Q*le,(w+pe/j.locationSize*I)*le,xe)}else{if(se.isInstancedBufferAttribute){for(let me=0;me<j.locationSize;me++)u(j.location+me,se.meshPerAttribute);d.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let me=0;me<j.locationSize;me++)f(j.location+me);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let me=0;me<j.locationSize;me++)y(j.location+me,pe/j.locationSize,J,te,pe*le,pe/j.locationSize*me*le,xe)}}else if(N!==void 0){const te=N[X];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(j.location,te);break;case 3:i.vertexAttrib3fv(j.location,te);break;case 4:i.vertexAttrib4fv(j.location,te);break;default:i.vertexAttrib1fv(j.location,te)}}}}T()}function F(){v();for(const d in n){const E=n[d];for(const D in E){const B=E[D];for(const z in B)h(B[z].object),delete B[z];delete E[D]}delete n[d]}}function b(d){if(n[d.id]===void 0)return;const E=n[d.id];for(const D in E){const B=E[D];for(const z in B)h(B[z].object),delete B[z];delete E[D]}delete n[d.id]}function C(d){for(const E in n){const D=n[E];if(D[d.id]===void 0)continue;const B=D[d.id];for(const z in B)h(B[z].object),delete B[z];delete D[d.id]}}function v(){g(),a=!0,s!==r&&(s=r,c(s.object))}function g(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:v,resetDefaultState:g,dispose:F,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:f,disableUnusedAttributes:T}}function Rf(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,p){p!==0&&(i.drawArraysInstanced(n,c,h,p),t.update(h,n,p))}function o(c,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,p);let _=0;for(let x=0;x<p;x++)_+=h[x];t.update(_,n,1)}function l(c,h,p,m){if(p===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<c.length;x++)a(c[x],h[x],m[x]);else{_.multiDrawArraysInstancedWEBGL(n,c,0,h,0,m,0,p);let x=0;for(let S=0;S<p;S++)x+=h[S];for(let S=0;S<m.length;S++)t.update(x,n,m[S])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Pf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==kt&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const C=b===fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==mn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ht&&!C)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=t.logarithmicDepthBuffer===!0,m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),u=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:S,maxAttributes:f,maxVertexUniforms:u,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:R,maxSamples:F}}function Lf(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Pn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const _=p.length!==0||m||n!==0||r;return r=m,n=p.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=h(p,m,0)},this.setState=function(p,m,_){const x=p.clippingPlanes,S=p.clipIntersection,f=p.clipShadows,u=i.get(p);if(!r||x===null||x.length===0||s&&!f)s?h(null):c();else{const T=s?0:n,y=T*4;let R=u.clippingState||null;l.value=R,R=h(x,m,y,_);for(let F=0;F!==y;++F)R[F]=t[F];u.clippingState=R,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,m,_,x){const S=p!==null?p.length:0;let f=null;if(S!==0){if(f=l.value,x!==!0||f===null){const u=_+S*4,T=m.matrixWorldInverse;o.getNormalMatrix(T),(f===null||f.length<u)&&(f=new Float32Array(u));for(let y=0,R=_;y!==S;++y,R+=4)a.copy(p[y]).applyMatrix4(T,o),a.normal.toArray(f,R),f[R+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,f}}function Df(i){let e=new WeakMap;function t(a,o){return o===Ir?a.mapping=wi:o===Is&&(a.mapping=Ti),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ir||o===Is)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Vu(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Hl extends Ol{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yi=4,mo=[.125,.215,.35,.446,.526,.582],qn=20,vs=new Hl,go=new We;let xs=null,Ms=0,ys=0,Ss=!1;const Yn=(1+Math.sqrt(5))/2,_i=1/Yn,_o=[new k(-Yn,_i,0),new k(Yn,_i,0),new k(-_i,0,Yn),new k(_i,0,Yn),new k(0,Yn,-_i),new k(0,Yn,_i),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class vo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){xs=this._renderer.getRenderTarget(),Ms=this._renderer.getActiveCubeFace(),ys=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xs,Ms,ys),this._renderer.xr.enabled=Ss,e.scissorTest=!1,Mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xs=this._renderer.getRenderTarget(),Ms=this._renderer.getActiveCubeFace(),ys=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:fn,format:kt,colorSpace:Mn,depthBuffer:!1},r=xo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=If(s)),this._blurMaterial=Uf(s,e,t)}return r}_compileMaterial(e){const t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,vs)}_sceneToCubeUV(e,t,n,r){const o=new bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(go),h.toneMapping=Un,h.autoClear=!1;const _=new Ea({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),x=new yt(new qi,_);let S=!1;const f=e.background;f?f.isColor&&(_.color.copy(f),e.background=null,S=!0):(_.color.copy(go),S=!0);for(let u=0;u<6;u++){const T=u%3;T===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):T===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const y=this._cubeSize;Mr(r,T*y,u>2?y:0,y,y),h.setRenderTarget(r),S&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=m,h.autoClear=p,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===wi||e.mapping===Ti;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new yt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Mr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_o[(r-s-1)%_o.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new yt(this._lodPlanes[r],c),m=c.uniforms,_=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*qn-1),S=s/x,f=isFinite(s)?1+Math.floor(h*S):qn;f>qn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${qn}`);const u=[];let T=0;for(let C=0;C<qn;++C){const v=C/S,g=Math.exp(-v*v/2);u.push(g),C===0?T+=g:C<f&&(T+=2*g)}for(let C=0;C<u.length;C++)u[C]=u[C]/T;m.envMap.value=e.texture,m.samples.value=f,m.weights.value=u,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:y}=this;m.dTheta.value=x,m.mipInt.value=y-n;const R=this._sizeLods[r],F=3*R*(r>y-yi?r-y+yi:0),b=4*(this._cubeSize-R);Mr(t,F,b,3*R,2*R),l.setRenderTarget(t),l.render(p,vs)}}function If(i){const e=[],t=[],n=[];let r=i;const s=i-yi+1+mo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-yi?l=mo[a-i+yi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,p=1+c,m=[h,h,p,h,p,p,h,h,p,p,h,p],_=6,x=6,S=3,f=2,u=1,T=new Float32Array(S*x*_),y=new Float32Array(f*x*_),R=new Float32Array(u*x*_);for(let b=0;b<_;b++){const C=b%3*2/3-1,v=b>2?0:-1,g=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];T.set(g,S*x*b),y.set(m,f*x*b);const d=[b,b,b,b,b,b];R.set(d,u*x*b)}const F=new Fn;F.setAttribute("position",new Kt(T,S)),F.setAttribute("uv",new Kt(y,f)),F.setAttribute("faceIndex",new Kt(R,u)),e.push(F),r>yi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xo(i,e,t){const n=new gn(i,e,t);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Uf(i,e,t){const n=new Float32Array(qn),r=new k(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Mo(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function yo(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function ba(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ir||l===Is,h=l===wi||l===Ti;if(c||h){let p=e.get(o);const m=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return t===null&&(t=new vo(i)),p=c?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const _=o.image;return c&&_&&_.height>0||h&&_&&r(_)?(t===null&&(t=new vo(i)),p=c?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ff(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Cl("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Of(i,e,t,n){const r={},s=new WeakMap;function a(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const x in m.attributes)e.remove(m.attributes[x]);for(const x in m.morphAttributes){const S=m.morphAttributes[x];for(let f=0,u=S.length;f<u;f++)e.remove(S[f])}m.removeEventListener("dispose",a),delete r[m.id];const _=s.get(m);_&&(e.remove(_),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(p,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,t.memory.geometries++),m}function l(p){const m=p.attributes;for(const x in m)e.update(m[x],i.ARRAY_BUFFER);const _=p.morphAttributes;for(const x in _){const S=_[x];for(let f=0,u=S.length;f<u;f++)e.update(S[f],i.ARRAY_BUFFER)}}function c(p){const m=[],_=p.index,x=p.attributes.position;let S=0;if(_!==null){const T=_.array;S=_.version;for(let y=0,R=T.length;y<R;y+=3){const F=T[y+0],b=T[y+1],C=T[y+2];m.push(F,b,b,C,C,F)}}else if(x!==void 0){const T=x.array;S=x.version;for(let y=0,R=T.length/3-1;y<R;y+=3){const F=y+0,b=y+1,C=y+2;m.push(F,b,b,C,C,F)}}else return;const f=new(Tl(m)?Nl:Ul)(m,1);f.version=S;const u=s.get(p);u&&e.remove(u),s.set(p,f)}function h(p){const m=s.get(p);if(m){const _=p.index;_!==null&&m.version<_.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function Bf(i,e,t){let n;function r(m){n=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,_){i.drawElements(n,_,s,m*a),t.update(_,n,1)}function c(m,_,x){x!==0&&(i.drawElementsInstanced(n,_,s,m*a,x),t.update(_,n,x))}function h(m,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,m,0,x);let f=0;for(let u=0;u<x;u++)f+=_[u];t.update(f,n,1)}function p(m,_,x,S){if(x===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<m.length;u++)c(m[u]/a,_[u],S[u]);else{f.multiDrawElementsInstancedWEBGL(n,_,0,s,m,0,S,0,x);let u=0;for(let T=0;T<x;T++)u+=_[T];for(let T=0;T<S.length;T++)t.update(u,n,S[T])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function zf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Hf(i,e,t){const n=new WeakMap,r=new et;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let m=n.get(o);if(m===void 0||m.count!==p){let d=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",d)};var _=d;m!==void 0&&m.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let R=0;x===!0&&(R=1),S===!0&&(R=2),f===!0&&(R=3);let F=o.attributes.position.count*R,b=1;F>e.maxTextureSize&&(b=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const C=new Float32Array(F*b*4*p),v=new Pl(C,F,b,p);v.type=Ht,v.needsUpdate=!0;const g=R*4;for(let E=0;E<p;E++){const D=u[E],B=T[E],z=y[E],V=F*b*4*E;for(let N=0;N<D.count;N++){const X=N*g;x===!0&&(r.fromBufferAttribute(D,N),C[V+X+0]=r.x,C[V+X+1]=r.y,C[V+X+2]=r.z,C[V+X+3]=0),S===!0&&(r.fromBufferAttribute(B,N),C[V+X+4]=r.x,C[V+X+5]=r.y,C[V+X+6]=r.z,C[V+X+7]=0),f===!0&&(r.fromBufferAttribute(z,N),C[V+X+8]=r.x,C[V+X+9]=r.y,C[V+X+10]=r.z,C[V+X+11]=z.itemSize===4?r.w:1)}}m={count:p,texture:v,size:new Be(F,b)},n.set(o,m),o.addEventListener("dispose",d)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let f=0;f<c.length;f++)x+=c[f];const S=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function kf(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class kl extends wt{constructor(e,t,n,r,s,a,o,l,c,h=Ei){if(h!==Ei&&h!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ei&&(n=$n),n===void 0&&h===Ri&&(n=Ci),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Vl=new wt,So=new kl(1,1),Gl=new Pl,Wl=new Eu,Xl=new Bl,Eo=[],bo=[],Ao=new Float32Array(16),wo=new Float32Array(9),To=new Float32Array(4);function Ii(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Eo[r];if(s===void 0&&(s=new Float32Array(r),Eo[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gr(i,e){let t=bo[e];t===void 0&&(t=new Int32Array(e),bo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function Wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function Xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function Yf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;To.set(n),i.uniformMatrix2fv(this.addr,!1,To),dt(t,n)}}function jf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;wo.set(n),i.uniformMatrix3fv(this.addr,!1,wo),dt(t,n)}}function qf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;Ao.set(n),i.uniformMatrix4fv(this.addr,!1,Ao),dt(t,n)}}function $f(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function Zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function Jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function Qf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function ip(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(So.compareFunction=Al,s=So):s=Vl,t.setTexture2D(e||s,r)}function rp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Wl,r)}function sp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Xl,r)}function ap(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Gl,r)}function op(i){switch(i){case 5126:return Vf;case 35664:return Gf;case 35665:return Wf;case 35666:return Xf;case 35674:return Yf;case 35675:return jf;case 35676:return qf;case 5124:case 35670:return $f;case 35667:case 35671:return Kf;case 35668:case 35672:return Zf;case 35669:case 35673:return Jf;case 5125:return Qf;case 36294:return ep;case 36295:return tp;case 36296:return np;case 35678:case 36198:case 36298:case 36306:case 35682:return ip;case 35679:case 36299:case 36307:return rp;case 35680:case 36300:case 36308:case 36293:return sp;case 36289:case 36303:case 36311:case 36292:return ap}}function lp(i,e){i.uniform1fv(this.addr,e)}function cp(i,e){const t=Ii(e,this.size,2);i.uniform2fv(this.addr,t)}function up(i,e){const t=Ii(e,this.size,3);i.uniform3fv(this.addr,t)}function hp(i,e){const t=Ii(e,this.size,4);i.uniform4fv(this.addr,t)}function dp(i,e){const t=Ii(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fp(i,e){const t=Ii(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pp(i,e){const t=Ii(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mp(i,e){i.uniform1iv(this.addr,e)}function gp(i,e){i.uniform2iv(this.addr,e)}function _p(i,e){i.uniform3iv(this.addr,e)}function vp(i,e){i.uniform4iv(this.addr,e)}function xp(i,e){i.uniform1uiv(this.addr,e)}function Mp(i,e){i.uniform2uiv(this.addr,e)}function yp(i,e){i.uniform3uiv(this.addr,e)}function Sp(i,e){i.uniform4uiv(this.addr,e)}function Ep(i,e,t){const n=this.cache,r=e.length,s=Gr(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Vl,s[a])}function bp(i,e,t){const n=this.cache,r=e.length,s=Gr(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Wl,s[a])}function Ap(i,e,t){const n=this.cache,r=e.length,s=Gr(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Xl,s[a])}function wp(i,e,t){const n=this.cache,r=e.length,s=Gr(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Gl,s[a])}function Tp(i){switch(i){case 5126:return lp;case 35664:return cp;case 35665:return up;case 35666:return hp;case 35674:return dp;case 35675:return fp;case 35676:return pp;case 5124:case 35670:return mp;case 35667:case 35671:return gp;case 35668:case 35672:return _p;case 35669:case 35673:return vp;case 5125:return xp;case 36294:return Mp;case 36295:return yp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return wp}}class Cp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=op(t.type)}}class Rp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tp(t.type)}}class Pp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Es=/(\w+)(\])?(\[|\.)?/g;function Co(i,e){i.seq.push(e),i.map[e.id]=e}function Lp(i,e,t){const n=i.name,r=n.length;for(Es.lastIndex=0;;){const s=Es.exec(n),a=Es.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Co(t,c===void 0?new Cp(o,i,e):new Rp(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Pp(o),Co(t,p)),t=p}}}class Pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Lp(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Ro(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Dp=37297;let Ip=0;function Up(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Np(i){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(i);let n;switch(e===t?n="":e===Fr&&t===Nr?n="LinearDisplayP3ToLinearSRGB":e===Nr&&t===Fr&&(n="LinearSRGBToLinearDisplayP3"),i){case Mn:case kr:return[n,"LinearTransferOETF"];case jt:case Ma:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Po(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Up(i.getShaderSource(e),a)}else return r}function Fp(i,e){const t=Np(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Op(i,e){let t;switch(e){case Bc:t="Linear";break;case zc:t="Reinhard";break;case Hc:t="OptimizedCineon";break;case hl:t="ACESFilmic";break;case Vc:t="AgX";break;case Gc:t="Neutral";break;case kc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Bp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vi).join(`
`)}function zp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Vi(i){return i!==""}function Lo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Do(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function la(i){return i.replace(kp,Gp)}const Vp=new Map;function Gp(i,e){let t=Ve[e];if(t===void 0){const n=Vp.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return la(t)}const Wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Io(i){return i.replace(Wp,Xp)}function Xp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Uo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fa?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===uc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function jp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case wi:case Ti:e="ENVMAP_TYPE_CUBE";break;case Hr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ti:e="ENVMAP_MODE_REFRACTION";break}return e}function $p(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ul:e="ENVMAP_BLENDING_MULTIPLY";break;case Fc:e="ENVMAP_BLENDING_MIX";break;case Oc:e="ENVMAP_BLENDING_ADD";break}return e}function Kp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Zp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Yp(t),c=jp(t),h=qp(t),p=$p(t),m=Kp(t),_=Bp(t),x=zp(s),S=r.createProgram();let f,u,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Vi).join(`
`),f.length>0&&(f+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Vi).join(`
`),u.length>0&&(u+=`
`)):(f=[Uo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),u=[Uo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Un?Op("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Fp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vi).join(`
`)),a=la(a),a=Lo(a,t),a=Do(a,t),o=la(o),o=Lo(o,t),o=Do(o,t),a=Io(a),o=Io(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,f=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,u=["#define varying in",t.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=T+f+a,R=T+u+o,F=Ro(r,r.VERTEX_SHADER,y),b=Ro(r,r.FRAGMENT_SHADER,R);r.attachShader(S,F),r.attachShader(S,b),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function C(E){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(S).trim(),B=r.getShaderInfoLog(F).trim(),z=r.getShaderInfoLog(b).trim();let V=!0,N=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,F,b);else{const X=Po(r,F,"vertex"),j=Po(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+D+`
`+X+`
`+j)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(B===""||z==="")&&(N=!1);N&&(E.diagnostics={runnable:V,programLog:D,vertexShader:{log:B,prefix:f},fragmentShader:{log:z,prefix:u}})}r.deleteShader(F),r.deleteShader(b),v=new Pr(r,S),g=Hp(r,S)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let g;this.getAttributes=function(){return g===void 0&&C(this),g};let d=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return d===!1&&(d=r.getProgramParameter(S,Dp)),d},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ip++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=F,this.fragmentShader=b,this}let Jp=0;class Qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new em(e),t.set(e,n)),n}}class em{constructor(e){this.id=Jp++,this.code=e,this.usedTimes=0}}function tm(i,e,t,n,r,s,a){const o=new Dl,l=new Qp,c=new Set,h=[],p=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(g){return c.add(g),g===0?"uv":`uv${g}`}function f(g,d,E,D,B){const z=D.fog,V=B.geometry,N=g.isMeshStandardMaterial?D.environment:null,X=(g.isMeshStandardMaterial?t:e).get(g.envMap||N),j=X&&X.mapping===Hr?X.image.height:null,se=x[g.type];g.precision!==null&&(_=r.getMaxPrecision(g.precision),_!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",_,"instead."));const te=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pe=te!==void 0?te.length:0;let Pe=0;V.morphAttributes.position!==void 0&&(Pe=1),V.morphAttributes.normal!==void 0&&(Pe=2),V.morphAttributes.color!==void 0&&(Pe=3);let Ie,J,le,xe;if(se){const Ye=qt[se];Ie=Ye.vertexShader,J=Ye.fragmentShader}else Ie=g.vertexShader,J=g.fragmentShader,l.update(g),le=l.getVertexShaderID(g),xe=l.getFragmentShaderID(g);const me=i.getRenderTarget(),Q=B.isInstancedMesh===!0,w=B.isBatchedMesh===!0,I=!!g.map,O=!!g.matcap,L=!!X,ee=!!g.aoMap,ne=!!g.lightMap,Me=!!g.bumpMap,he=!!g.normalMap,ke=!!g.displacementMap,Ae=!!g.emissiveMap,be=!!g.metalnessMap,U=!!g.roughnessMap,A=g.anisotropy>0,W=g.clearcoat>0,ie=g.dispersion>0,ae=g.iridescence>0,re=g.sheen>0,Ce=g.transmission>0,de=A&&!!g.anisotropyMap,_e=W&&!!g.clearcoatMap,He=W&&!!g.clearcoatNormalMap,ce=W&&!!g.clearcoatRoughnessMap,ve=ae&&!!g.iridescenceMap,Xe=ae&&!!g.iridescenceThicknessMap,Le=re&&!!g.sheenColorMap,ye=re&&!!g.sheenRoughnessMap,Ue=!!g.specularMap,ze=!!g.specularColorMap,tt=!!g.specularIntensityMap,M=Ce&&!!g.transmissionMap,Y=Ce&&!!g.thicknessMap,q=!!g.gradientMap,Z=!!g.alphaMap,oe=g.alphaTest>0,we=!!g.alphaHash,Ne=!!g.extensions;let st=Un;g.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(st=i.toneMapping);const ct={shaderID:se,shaderType:g.type,shaderName:g.name,vertexShader:Ie,fragmentShader:J,defines:g.defines,customVertexShaderID:le,customFragmentShaderID:xe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:_,batching:w,batchingColor:w&&B._colorsTexture!==null,instancing:Q,instancingColor:Q&&B.instanceColor!==null,instancingMorph:Q&&B.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Mn,alphaToCoverage:!!g.alphaToCoverage,map:I,matcap:O,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:j,aoMap:ee,lightMap:ne,bumpMap:Me,normalMap:he,displacementMap:m&&ke,emissiveMap:Ae,normalMapObjectSpace:he&&g.normalMapType===Yc,normalMapTangentSpace:he&&g.normalMapType===bl,metalnessMap:be,roughnessMap:U,anisotropy:A,anisotropyMap:de,clearcoat:W,clearcoatMap:_e,clearcoatNormalMap:He,clearcoatRoughnessMap:ce,dispersion:ie,iridescence:ae,iridescenceMap:ve,iridescenceThicknessMap:Xe,sheen:re,sheenColorMap:Le,sheenRoughnessMap:ye,specularMap:Ue,specularColorMap:ze,specularIntensityMap:tt,transmission:Ce,transmissionMap:M,thicknessMap:Y,gradientMap:q,opaque:g.transparent===!1&&g.blending===Si&&g.alphaToCoverage===!1,alphaMap:Z,alphaTest:oe,alphaHash:we,combine:g.combine,mapUv:I&&S(g.map.channel),aoMapUv:ee&&S(g.aoMap.channel),lightMapUv:ne&&S(g.lightMap.channel),bumpMapUv:Me&&S(g.bumpMap.channel),normalMapUv:he&&S(g.normalMap.channel),displacementMapUv:ke&&S(g.displacementMap.channel),emissiveMapUv:Ae&&S(g.emissiveMap.channel),metalnessMapUv:be&&S(g.metalnessMap.channel),roughnessMapUv:U&&S(g.roughnessMap.channel),anisotropyMapUv:de&&S(g.anisotropyMap.channel),clearcoatMapUv:_e&&S(g.clearcoatMap.channel),clearcoatNormalMapUv:He&&S(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&S(g.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&S(g.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&S(g.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&S(g.sheenColorMap.channel),sheenRoughnessMapUv:ye&&S(g.sheenRoughnessMap.channel),specularMapUv:Ue&&S(g.specularMap.channel),specularColorMapUv:ze&&S(g.specularColorMap.channel),specularIntensityMapUv:tt&&S(g.specularIntensityMap.channel),transmissionMapUv:M&&S(g.transmissionMap.channel),thicknessMapUv:Y&&S(g.thicknessMap.channel),alphaMapUv:Z&&S(g.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(he||A),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(I||Z),fog:!!z,useFog:g.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Pe,numDirLights:d.directional.length,numPointLights:d.point.length,numSpotLights:d.spot.length,numSpotLightMaps:d.spotLightMap.length,numRectAreaLights:d.rectArea.length,numHemiLights:d.hemi.length,numDirLightShadows:d.directionalShadowMap.length,numPointLightShadows:d.pointShadowMap.length,numSpotLightShadows:d.spotShadowMap.length,numSpotLightShadowsWithMaps:d.numSpotLightShadowsWithMaps,numLightProbes:d.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:I&&g.map.isVideoTexture===!0&&Ze.getTransfer(g.map.colorSpace)===Qe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===un,flipSided:g.side===Pt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ne&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&g.extensions.multiDraw===!0||w)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function u(g){const d=[];if(g.shaderID?d.push(g.shaderID):(d.push(g.customVertexShaderID),d.push(g.customFragmentShaderID)),g.defines!==void 0)for(const E in g.defines)d.push(E),d.push(g.defines[E]);return g.isRawShaderMaterial===!1&&(T(d,g),y(d,g),d.push(i.outputColorSpace)),d.push(g.customProgramCacheKey),d.join()}function T(g,d){g.push(d.precision),g.push(d.outputColorSpace),g.push(d.envMapMode),g.push(d.envMapCubeUVHeight),g.push(d.mapUv),g.push(d.alphaMapUv),g.push(d.lightMapUv),g.push(d.aoMapUv),g.push(d.bumpMapUv),g.push(d.normalMapUv),g.push(d.displacementMapUv),g.push(d.emissiveMapUv),g.push(d.metalnessMapUv),g.push(d.roughnessMapUv),g.push(d.anisotropyMapUv),g.push(d.clearcoatMapUv),g.push(d.clearcoatNormalMapUv),g.push(d.clearcoatRoughnessMapUv),g.push(d.iridescenceMapUv),g.push(d.iridescenceThicknessMapUv),g.push(d.sheenColorMapUv),g.push(d.sheenRoughnessMapUv),g.push(d.specularMapUv),g.push(d.specularColorMapUv),g.push(d.specularIntensityMapUv),g.push(d.transmissionMapUv),g.push(d.thicknessMapUv),g.push(d.combine),g.push(d.fogExp2),g.push(d.sizeAttenuation),g.push(d.morphTargetsCount),g.push(d.morphAttributeCount),g.push(d.numDirLights),g.push(d.numPointLights),g.push(d.numSpotLights),g.push(d.numSpotLightMaps),g.push(d.numHemiLights),g.push(d.numRectAreaLights),g.push(d.numDirLightShadows),g.push(d.numPointLightShadows),g.push(d.numSpotLightShadows),g.push(d.numSpotLightShadowsWithMaps),g.push(d.numLightProbes),g.push(d.shadowMapType),g.push(d.toneMapping),g.push(d.numClippingPlanes),g.push(d.numClipIntersection),g.push(d.depthPacking)}function y(g,d){o.disableAll(),d.supportsVertexTextures&&o.enable(0),d.instancing&&o.enable(1),d.instancingColor&&o.enable(2),d.instancingMorph&&o.enable(3),d.matcap&&o.enable(4),d.envMap&&o.enable(5),d.normalMapObjectSpace&&o.enable(6),d.normalMapTangentSpace&&o.enable(7),d.clearcoat&&o.enable(8),d.iridescence&&o.enable(9),d.alphaTest&&o.enable(10),d.vertexColors&&o.enable(11),d.vertexAlphas&&o.enable(12),d.vertexUv1s&&o.enable(13),d.vertexUv2s&&o.enable(14),d.vertexUv3s&&o.enable(15),d.vertexTangents&&o.enable(16),d.anisotropy&&o.enable(17),d.alphaHash&&o.enable(18),d.batching&&o.enable(19),d.dispersion&&o.enable(20),d.batchingColor&&o.enable(21),g.push(o.mask),o.disableAll(),d.fog&&o.enable(0),d.useFog&&o.enable(1),d.flatShading&&o.enable(2),d.logarithmicDepthBuffer&&o.enable(3),d.skinning&&o.enable(4),d.morphTargets&&o.enable(5),d.morphNormals&&o.enable(6),d.morphColors&&o.enable(7),d.premultipliedAlpha&&o.enable(8),d.shadowMapEnabled&&o.enable(9),d.doubleSided&&o.enable(10),d.flipSided&&o.enable(11),d.useDepthPacking&&o.enable(12),d.dithering&&o.enable(13),d.transmission&&o.enable(14),d.sheen&&o.enable(15),d.opaque&&o.enable(16),d.pointsUvs&&o.enable(17),d.decodeVideoTexture&&o.enable(18),d.alphaToCoverage&&o.enable(19),g.push(o.mask)}function R(g){const d=x[g.type];let E;if(d){const D=qt[d];E=Bu.clone(D.uniforms)}else E=g.uniforms;return E}function F(g,d){let E;for(let D=0,B=h.length;D<B;D++){const z=h[D];if(z.cacheKey===d){E=z,++E.usedTimes;break}}return E===void 0&&(E=new Zp(i,d,g,s),h.push(E)),E}function b(g){if(--g.usedTimes===0){const d=h.indexOf(g);h[d]=h[h.length-1],h.pop(),g.destroy()}}function C(g){l.remove(g)}function v(){l.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:R,acquireProgram:F,releaseProgram:b,releaseShaderCache:C,programs:h,dispose:v}}function nm(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function im(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function No(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(p,m,_,x,S,f){let u=i[e];return u===void 0?(u={id:p.id,object:p,geometry:m,material:_,groupOrder:x,renderOrder:p.renderOrder,z:S,group:f},i[e]=u):(u.id=p.id,u.object=p,u.geometry=m,u.material=_,u.groupOrder=x,u.renderOrder=p.renderOrder,u.z=S,u.group=f),e++,u}function o(p,m,_,x,S,f){const u=a(p,m,_,x,S,f);_.transmission>0?n.push(u):_.transparent===!0?r.push(u):t.push(u)}function l(p,m,_,x,S,f){const u=a(p,m,_,x,S,f);_.transmission>0?n.unshift(u):_.transparent===!0?r.unshift(u):t.unshift(u)}function c(p,m){t.length>1&&t.sort(p||im),n.length>1&&n.sort(m||No),r.length>1&&r.sort(m||No)}function h(){for(let p=e,m=i.length;p<m;p++){const _=i[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function rm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Fo,i.set(n,[a])):r>=s.length?(a=new Fo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function sm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new We};break;case"SpotLight":t={position:new k,direction:new k,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function am(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let om=0;function lm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cm(i){const e=new sm,t=am(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const r=new k,s=new Je,a=new Je;function o(c){let h=0,p=0,m=0;for(let g=0;g<9;g++)n.probe[g].set(0,0,0);let _=0,x=0,S=0,f=0,u=0,T=0,y=0,R=0,F=0,b=0,C=0;c.sort(lm);for(let g=0,d=c.length;g<d;g++){const E=c[g],D=E.color,B=E.intensity,z=E.distance,V=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=D.r*B,p+=D.g*B,m+=D.b*B;else if(E.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(E.sh.coefficients[N],B);C++}else if(E.isDirectionalLight){const N=e.get(E);if(N.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const X=E.shadow,j=t.get(E);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,n.directionalShadow[_]=j,n.directionalShadowMap[_]=V,n.directionalShadowMatrix[_]=E.shadow.matrix,T++}n.directional[_]=N,_++}else if(E.isSpotLight){const N=e.get(E);N.position.setFromMatrixPosition(E.matrixWorld),N.color.copy(D).multiplyScalar(B),N.distance=z,N.coneCos=Math.cos(E.angle),N.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),N.decay=E.decay,n.spot[S]=N;const X=E.shadow;if(E.map&&(n.spotLightMap[F]=E.map,F++,X.updateMatrices(E),E.castShadow&&b++),n.spotLightMatrix[S]=X.matrix,E.castShadow){const j=t.get(E);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,n.spotShadow[S]=j,n.spotShadowMap[S]=V,R++}S++}else if(E.isRectAreaLight){const N=e.get(E);N.color.copy(D).multiplyScalar(B),N.halfWidth.set(E.width*.5,0,0),N.halfHeight.set(0,E.height*.5,0),n.rectArea[f]=N,f++}else if(E.isPointLight){const N=e.get(E);if(N.color.copy(E.color).multiplyScalar(E.intensity),N.distance=E.distance,N.decay=E.decay,E.castShadow){const X=E.shadow,j=t.get(E);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,j.shadowCameraNear=X.camera.near,j.shadowCameraFar=X.camera.far,n.pointShadow[x]=j,n.pointShadowMap[x]=V,n.pointShadowMatrix[x]=E.shadow.matrix,y++}n.point[x]=N,x++}else if(E.isHemisphereLight){const N=e.get(E);N.skyColor.copy(E.color).multiplyScalar(B),N.groundColor.copy(E.groundColor).multiplyScalar(B),n.hemi[u]=N,u++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=m;const v=n.hash;(v.directionalLength!==_||v.pointLength!==x||v.spotLength!==S||v.rectAreaLength!==f||v.hemiLength!==u||v.numDirectionalShadows!==T||v.numPointShadows!==y||v.numSpotShadows!==R||v.numSpotMaps!==F||v.numLightProbes!==C)&&(n.directional.length=_,n.spot.length=S,n.rectArea.length=f,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=R+F-b,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,v.directionalLength=_,v.pointLength=x,v.spotLength=S,v.rectAreaLength=f,v.hemiLength=u,v.numDirectionalShadows=T,v.numPointShadows=y,v.numSpotShadows=R,v.numSpotMaps=F,v.numLightProbes=C,n.version=om++)}function l(c,h){let p=0,m=0,_=0,x=0,S=0;const f=h.matrixWorldInverse;for(let u=0,T=c.length;u<T;u++){const y=c[u];if(y.isDirectionalLight){const R=n.directional[p];R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),p++}else if(y.isSpotLight){const R=n.spot[_];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),_++}else if(y.isRectAreaLight){const R=n.rectArea[x];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(f),a.identity(),s.copy(y.matrixWorld),s.premultiply(f),a.extractRotation(s),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const R=n.point[m];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(f),m++}else if(y.isHemisphereLight){const R=n.hemi[S];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(f),S++}}}return{setup:o,setupView:l,state:n}}function Oo(i){const e=new cm(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function um(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Oo(i),e.set(r,[o])):s>=a.length?(o=new Oo(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Yl extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hm extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pm(i,e,t){let n=new Vr;const r=new Be,s=new Be,a=new et,o=new Yl({depthPacking:El}),l=new hm,c={},h=t.maxTextureSize,p={[Nn]:Pt,[Pt]:Nn,[un]:un},m=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:dm,fragmentShader:fm}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const x=new Fn;x.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new yt(x,m),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fa;let u=this.type;this.render=function(b,C,v){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const g=i.getRenderTarget(),d=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),D=i.state;D.setBlending(In),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=u!==cn&&this.type===cn,z=u===cn&&this.type!==cn;for(let V=0,N=b.length;V<N;V++){const X=b[V],j=X.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const se=j.getFrameExtents();if(r.multiply(se),s.copy(j.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/se.x),r.x=s.x*se.x,j.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/se.y),r.y=s.y*se.y,j.mapSize.y=s.y)),j.map===null||B===!0||z===!0){const pe=this.type!==cn?{minFilter:At,magFilter:At}:{};j.map!==null&&j.map.dispose(),j.map=new gn(r.x,r.y,pe),j.map.texture.name=X.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const te=j.getViewportCount();for(let pe=0;pe<te;pe++){const Pe=j.getViewport(pe);a.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),D.viewport(a),j.updateMatrices(X,pe),n=j.getFrustum(),R(C,v,j.camera,X,this.type)}j.isPointLightShadow!==!0&&this.type===cn&&T(j,v),j.needsUpdate=!1}u=this.type,f.needsUpdate=!1,i.setRenderTarget(g,d,E)};function T(b,C){const v=e.update(S);m.defines.VSM_SAMPLES!==b.blurSamples&&(m.defines.VSM_SAMPLES=b.blurSamples,_.defines.VSM_SAMPLES=b.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new gn(r.x,r.y)),m.uniforms.shadow_pass.value=b.map.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,v,m,S,null),_.uniforms.shadow_pass.value=b.mapPass.texture,_.uniforms.resolution.value=b.mapSize,_.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,v,_,S,null)}function y(b,C,v,g){let d=null;const E=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)d=E;else if(d=v.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const D=d.uuid,B=C.uuid;let z=c[D];z===void 0&&(z={},c[D]=z);let V=z[B];V===void 0&&(V=d.clone(),z[B]=V,C.addEventListener("dispose",F)),d=V}if(d.visible=C.visible,d.wireframe=C.wireframe,g===cn?d.side=C.shadowSide!==null?C.shadowSide:C.side:d.side=C.shadowSide!==null?C.shadowSide:p[C.side],d.alphaMap=C.alphaMap,d.alphaTest=C.alphaTest,d.map=C.map,d.clipShadows=C.clipShadows,d.clippingPlanes=C.clippingPlanes,d.clipIntersection=C.clipIntersection,d.displacementMap=C.displacementMap,d.displacementScale=C.displacementScale,d.displacementBias=C.displacementBias,d.wireframeLinewidth=C.wireframeLinewidth,d.linewidth=C.linewidth,v.isPointLight===!0&&d.isMeshDistanceMaterial===!0){const D=i.properties.get(d);D.light=v}return d}function R(b,C,v,g,d){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&d===cn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const B=e.update(b),z=b.material;if(Array.isArray(z)){const V=B.groups;for(let N=0,X=V.length;N<X;N++){const j=V[N],se=z[j.materialIndex];if(se&&se.visible){const te=y(b,se,g,d);b.onBeforeShadow(i,b,C,v,B,te,j),i.renderBufferDirect(v,null,B,te,b,j),b.onAfterShadow(i,b,C,v,B,te,j)}}}else if(z.visible){const V=y(b,z,g,d);b.onBeforeShadow(i,b,C,v,B,V,null),i.renderBufferDirect(v,null,B,V,b,null),b.onAfterShadow(i,b,C,v,B,V,null)}}const D=b.children;for(let B=0,z=D.length;B<z;B++)R(D[B],C,v,g,d)}function F(b){b.target.removeEventListener("dispose",F);for(const v in c){const g=c[v],d=b.target.uuid;d in g&&(g[d].dispose(),delete g[d])}}}function mm(i){function e(){let M=!1;const Y=new et;let q=null;const Z=new et(0,0,0,0);return{setMask:function(oe){q!==oe&&!M&&(i.colorMask(oe,oe,oe,oe),q=oe)},setLocked:function(oe){M=oe},setClear:function(oe,we,Ne,st,ct){ct===!0&&(oe*=st,we*=st,Ne*=st),Y.set(oe,we,Ne,st),Z.equals(Y)===!1&&(i.clearColor(oe,we,Ne,st),Z.copy(Y))},reset:function(){M=!1,q=null,Z.set(-1,0,0,0)}}}function t(){let M=!1,Y=null,q=null,Z=null;return{setTest:function(oe){oe?xe(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(oe){Y!==oe&&!M&&(i.depthMask(oe),Y=oe)},setFunc:function(oe){if(q!==oe){switch(oe){case Rc:i.depthFunc(i.NEVER);break;case Pc:i.depthFunc(i.ALWAYS);break;case Lc:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case Dc:i.depthFunc(i.EQUAL);break;case Ic:i.depthFunc(i.GEQUAL);break;case Uc:i.depthFunc(i.GREATER);break;case Nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}q=oe}},setLocked:function(oe){M=oe},setClear:function(oe){Z!==oe&&(i.clearDepth(oe),Z=oe)},reset:function(){M=!1,Y=null,q=null,Z=null}}}function n(){let M=!1,Y=null,q=null,Z=null,oe=null,we=null,Ne=null,st=null,ct=null;return{setTest:function(Ye){M||(Ye?xe(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(Ye){Y!==Ye&&!M&&(i.stencilMask(Ye),Y=Ye)},setFunc:function(Ye,ut,at){(q!==Ye||Z!==ut||oe!==at)&&(i.stencilFunc(Ye,ut,at),q=Ye,Z=ut,oe=at)},setOp:function(Ye,ut,at){(we!==Ye||Ne!==ut||st!==at)&&(i.stencilOp(Ye,ut,at),we=Ye,Ne=ut,st=at)},setLocked:function(Ye){M=Ye},setClear:function(Ye){ct!==Ye&&(i.clearStencil(Ye),ct=Ye)},reset:function(){M=!1,Y=null,q=null,Z=null,oe=null,we=null,Ne=null,st=null,ct=null}}}const r=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},p=new WeakMap,m=[],_=null,x=!1,S=null,f=null,u=null,T=null,y=null,R=null,F=null,b=new We(0,0,0),C=0,v=!1,g=null,d=null,E=null,D=null,B=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,N=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=N>=1):X.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=N>=2);let j=null,se={};const te=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),Pe=new et().fromArray(te),Ie=new et().fromArray(pe);function J(M,Y,q,Z){const oe=new Uint8Array(4),we=i.createTexture();i.bindTexture(M,we),i.texParameteri(M,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(M,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<q;Ne++)M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY?i.texImage3D(Y,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(Y+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return we}const le={};le[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),xe(i.DEPTH_TEST),s.setFunc(Dr),Me(!1),he(ka),xe(i.CULL_FACE),ee(In);function xe(M){c[M]!==!0&&(i.enable(M),c[M]=!0)}function me(M){c[M]!==!1&&(i.disable(M),c[M]=!1)}function Q(M,Y){return h[M]!==Y?(i.bindFramebuffer(M,Y),h[M]=Y,M===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Y),M===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Y),!0):!1}function w(M,Y){let q=m,Z=!1;if(M){q=p.get(Y),q===void 0&&(q=[],p.set(Y,q));const oe=M.textures;if(q.length!==oe.length||q[0]!==i.COLOR_ATTACHMENT0){for(let we=0,Ne=oe.length;we<Ne;we++)q[we]=i.COLOR_ATTACHMENT0+we;q.length=oe.length,Z=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Z=!0);Z&&i.drawBuffers(q)}function I(M){return _!==M?(i.useProgram(M),_=M,!0):!1}const O={[jn]:i.FUNC_ADD,[dc]:i.FUNC_SUBTRACT,[fc]:i.FUNC_REVERSE_SUBTRACT};O[pc]=i.MIN,O[mc]=i.MAX;const L={[gc]:i.ZERO,[_c]:i.ONE,[vc]:i.SRC_COLOR,[Ls]:i.SRC_ALPHA,[bc]:i.SRC_ALPHA_SATURATE,[Sc]:i.DST_COLOR,[Mc]:i.DST_ALPHA,[xc]:i.ONE_MINUS_SRC_COLOR,[Ds]:i.ONE_MINUS_SRC_ALPHA,[Ec]:i.ONE_MINUS_DST_COLOR,[yc]:i.ONE_MINUS_DST_ALPHA,[Ac]:i.CONSTANT_COLOR,[wc]:i.ONE_MINUS_CONSTANT_COLOR,[Tc]:i.CONSTANT_ALPHA,[Cc]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(M,Y,q,Z,oe,we,Ne,st,ct,Ye){if(M===In){x===!0&&(me(i.BLEND),x=!1);return}if(x===!1&&(xe(i.BLEND),x=!0),M!==hc){if(M!==S||Ye!==v){if((f!==jn||y!==jn)&&(i.blendEquation(i.FUNC_ADD),f=jn,y=jn),Ye)switch(M){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFunc(i.ONE,i.ONE);break;case Ga:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ga:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}u=null,T=null,R=null,F=null,b.set(0,0,0),C=0,S=M,v=Ye}return}oe=oe||Y,we=we||q,Ne=Ne||Z,(Y!==f||oe!==y)&&(i.blendEquationSeparate(O[Y],O[oe]),f=Y,y=oe),(q!==u||Z!==T||we!==R||Ne!==F)&&(i.blendFuncSeparate(L[q],L[Z],L[we],L[Ne]),u=q,T=Z,R=we,F=Ne),(st.equals(b)===!1||ct!==C)&&(i.blendColor(st.r,st.g,st.b,ct),b.copy(st),C=ct),S=M,v=!1}function ne(M,Y){M.side===un?me(i.CULL_FACE):xe(i.CULL_FACE);let q=M.side===Pt;Y&&(q=!q),Me(q),M.blending===Si&&M.transparent===!1?ee(In):ee(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),s.setFunc(M.depthFunc),s.setTest(M.depthTest),s.setMask(M.depthWrite),r.setMask(M.colorWrite);const Z=M.stencilWrite;a.setTest(Z),Z&&(a.setMask(M.stencilWriteMask),a.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),a.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),Ae(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(M){g!==M&&(M?i.frontFace(i.CW):i.frontFace(i.CCW),g=M)}function he(M){M!==lc?(xe(i.CULL_FACE),M!==d&&(M===ka?i.cullFace(i.BACK):M===cc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),d=M}function ke(M){M!==E&&(V&&i.lineWidth(M),E=M)}function Ae(M,Y,q){M?(xe(i.POLYGON_OFFSET_FILL),(D!==Y||B!==q)&&(i.polygonOffset(Y,q),D=Y,B=q)):me(i.POLYGON_OFFSET_FILL)}function be(M){M?xe(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function U(M){M===void 0&&(M=i.TEXTURE0+z-1),j!==M&&(i.activeTexture(M),j=M)}function A(M,Y,q){q===void 0&&(j===null?q=i.TEXTURE0+z-1:q=j);let Z=se[q];Z===void 0&&(Z={type:void 0,texture:void 0},se[q]=Z),(Z.type!==M||Z.texture!==Y)&&(j!==q&&(i.activeTexture(q),j=q),i.bindTexture(M,Y||le[M]),Z.type=M,Z.texture=Y)}function W(){const M=se[j];M!==void 0&&M.type!==void 0&&(i.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ce(){try{i.texSubImage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ce(){try{i.texStorage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Xe(){try{i.texImage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Le(M){Pe.equals(M)===!1&&(i.scissor(M.x,M.y,M.z,M.w),Pe.copy(M))}function ye(M){Ie.equals(M)===!1&&(i.viewport(M.x,M.y,M.z,M.w),Ie.copy(M))}function Ue(M,Y){let q=l.get(Y);q===void 0&&(q=new WeakMap,l.set(Y,q));let Z=q.get(M);Z===void 0&&(Z=i.getUniformBlockIndex(Y,M.name),q.set(M,Z))}function ze(M,Y){const Z=l.get(Y).get(M);o.get(Y)!==Z&&(i.uniformBlockBinding(Y,Z,M.__bindingPointIndex),o.set(Y,Z))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},j=null,se={},h={},p=new WeakMap,m=[],_=null,x=!1,S=null,f=null,u=null,T=null,y=null,R=null,F=null,b=new We(0,0,0),C=0,v=!1,g=null,d=null,E=null,D=null,B=null,Pe.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:xe,disable:me,bindFramebuffer:Q,drawBuffers:w,useProgram:I,setBlending:ee,setMaterial:ne,setFlipSided:Me,setCullFace:he,setLineWidth:ke,setPolygonOffset:Ae,setScissorTest:be,activeTexture:U,bindTexture:A,unbindTexture:W,compressedTexImage2D:ie,compressedTexImage3D:ae,texImage2D:ve,texImage3D:Xe,updateUBOMapping:Ue,uniformBlockBinding:ze,texStorage2D:He,texStorage3D:ce,texSubImage2D:re,texSubImage3D:Ce,compressedTexSubImage2D:de,compressedTexSubImage3D:_e,scissor:Le,viewport:ye,reset:tt}}function Bo(i,e,t,n){const r=gm(n);switch(t){case gl:return i*e;case vl:return i*e;case xl:return i*e*2;case Ml:return i*e/r.components*r.byteLength;case _a:return i*e/r.components*r.byteLength;case yl:return i*e*2/r.components*r.byteLength;case va:return i*e*2/r.components*r.byteLength;case _l:return i*e*3/r.components*r.byteLength;case kt:return i*e*4/r.components*r.byteLength;case xa:return i*e*4/r.components*r.byteLength;case Ar:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Tr:case Cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Os:case zs:return Math.max(i,16)*Math.max(e,8)/4;case Fs:case Bs:return Math.max(i,8)*Math.max(e,8)/2;case Hs:case ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ws:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ys:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case js:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case qs:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $s:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ks:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Zs:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Js:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Qs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ta:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case na:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Rr:case ia:case ra:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Sl:case sa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case aa:case oa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gm(i){switch(i){case mn:case fl:return{byteLength:1,components:1};case Wi:case pl:case fn:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case $n:case pa:case Ht:return{byteLength:4,components:1};case ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _m(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(U,A){return _?new OffscreenCanvas(U,A):Br("canvas")}function S(U,A,W){let ie=1;const ae=be(U);if((ae.width>W||ae.height>W)&&(ie=W/Math.max(ae.width,ae.height)),ie<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const re=Math.floor(ie*ae.width),Ce=Math.floor(ie*ae.height);p===void 0&&(p=x(re,Ce));const de=A?x(re,Ce):p;return de.width=re,de.height=Ce,de.getContext("2d").drawImage(U,0,0,re,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+re+"x"+Ce+")."),de}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),U;return U}function f(U){return U.generateMipmaps&&U.minFilter!==At&&U.minFilter!==vt}function u(U){i.generateMipmap(U)}function T(U,A,W,ie,ae=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let re=A;if(A===i.RED&&(W===i.FLOAT&&(re=i.R32F),W===i.HALF_FLOAT&&(re=i.R16F),W===i.UNSIGNED_BYTE&&(re=i.R8)),A===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(re=i.R8UI),W===i.UNSIGNED_SHORT&&(re=i.R16UI),W===i.UNSIGNED_INT&&(re=i.R32UI),W===i.BYTE&&(re=i.R8I),W===i.SHORT&&(re=i.R16I),W===i.INT&&(re=i.R32I)),A===i.RG&&(W===i.FLOAT&&(re=i.RG32F),W===i.HALF_FLOAT&&(re=i.RG16F),W===i.UNSIGNED_BYTE&&(re=i.RG8)),A===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(re=i.RG8UI),W===i.UNSIGNED_SHORT&&(re=i.RG16UI),W===i.UNSIGNED_INT&&(re=i.RG32UI),W===i.BYTE&&(re=i.RG8I),W===i.SHORT&&(re=i.RG16I),W===i.INT&&(re=i.RG32I)),A===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),A===i.RGBA){const Ce=ae?Ur:Ze.getTransfer(ie);W===i.FLOAT&&(re=i.RGBA32F),W===i.HALF_FLOAT&&(re=i.RGBA16F),W===i.UNSIGNED_BYTE&&(re=Ce===Qe?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function y(U,A){let W;return U?A===null||A===$n||A===Ci?W=i.DEPTH24_STENCIL8:A===Ht?W=i.DEPTH32F_STENCIL8:A===Wi&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===$n||A===Ci?W=i.DEPTH_COMPONENT24:A===Ht?W=i.DEPTH_COMPONENT32F:A===Wi&&(W=i.DEPTH_COMPONENT16),W}function R(U,A){return f(U)===!0||U.isFramebufferTexture&&U.minFilter!==At&&U.minFilter!==vt?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function F(U){const A=U.target;A.removeEventListener("dispose",F),C(A),A.isVideoTexture&&h.delete(A)}function b(U){const A=U.target;A.removeEventListener("dispose",b),g(A)}function C(U){const A=n.get(U);if(A.__webglInit===void 0)return;const W=U.source,ie=m.get(W);if(ie){const ae=ie[A.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&v(U),Object.keys(ie).length===0&&m.delete(W)}n.remove(U)}function v(U){const A=n.get(U);i.deleteTexture(A.__webglTexture);const W=U.source,ie=m.get(W);delete ie[A.__cacheKey],a.memory.textures--}function g(U){const A=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(A.__webglFramebuffer[ie]))for(let ae=0;ae<A.__webglFramebuffer[ie].length;ae++)i.deleteFramebuffer(A.__webglFramebuffer[ie][ae]);else i.deleteFramebuffer(A.__webglFramebuffer[ie]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[ie])}else{if(Array.isArray(A.__webglFramebuffer))for(let ie=0;ie<A.__webglFramebuffer.length;ie++)i.deleteFramebuffer(A.__webglFramebuffer[ie]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ie=0;ie<A.__webglColorRenderbuffer.length;ie++)A.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[ie]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const W=U.textures;for(let ie=0,ae=W.length;ie<ae;ie++){const re=n.get(W[ie]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(W[ie])}n.remove(U)}let d=0;function E(){d=0}function D(){const U=d;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),d+=1,U}function B(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function z(U,A){const W=n.get(U);if(U.isVideoTexture&&ke(U),U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){const ie=U.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(W,U,A);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+A)}function V(U,A){const W=n.get(U);if(U.version>0&&W.__version!==U.version){Ie(W,U,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+A)}function N(U,A){const W=n.get(U);if(U.version>0&&W.__version!==U.version){Ie(W,U,A);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+A)}function X(U,A){const W=n.get(U);if(U.version>0&&W.__version!==U.version){J(W,U,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+A)}const j={[Us]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[Ns]:i.MIRRORED_REPEAT},se={[At]:i.NEAREST,[Wc]:i.NEAREST_MIPMAP_NEAREST,[Ji]:i.NEAREST_MIPMAP_LINEAR,[vt]:i.LINEAR,[Qr]:i.LINEAR_MIPMAP_NEAREST,[Dn]:i.LINEAR_MIPMAP_LINEAR},te={[jc]:i.NEVER,[Qc]:i.ALWAYS,[qc]:i.LESS,[Al]:i.LEQUAL,[$c]:i.EQUAL,[Jc]:i.GEQUAL,[Kc]:i.GREATER,[Zc]:i.NOTEQUAL};function pe(U,A){if(A.type===Ht&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===vt||A.magFilter===Qr||A.magFilter===Ji||A.magFilter===Dn||A.minFilter===vt||A.minFilter===Qr||A.minFilter===Ji||A.minFilter===Dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,j[A.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,j[A.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,j[A.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,se[A.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,se[A.minFilter]),A.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,te[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===At||A.minFilter!==Ji&&A.minFilter!==Dn||A.type===Ht&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Pe(U,A){let W=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",F));const ie=A.source;let ae=m.get(ie);ae===void 0&&(ae={},m.set(ie,ae));const re=B(A);if(re!==U.__cacheKey){ae[re]===void 0&&(ae[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ae[re].usedTimes++;const Ce=ae[U.__cacheKey];Ce!==void 0&&(ae[U.__cacheKey].usedTimes--,Ce.usedTimes===0&&v(A)),U.__cacheKey=re,U.__webglTexture=ae[re].texture}return W}function Ie(U,A,W){let ie=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ie=i.TEXTURE_3D);const ae=Pe(U,A),re=A.source;t.bindTexture(ie,U.__webglTexture,i.TEXTURE0+W);const Ce=n.get(re);if(re.version!==Ce.__version||ae===!0){t.activeTexture(i.TEXTURE0+W);const de=Ze.getPrimaries(Ze.workingColorSpace),_e=A.colorSpace===Ln?null:Ze.getPrimaries(A.colorSpace),He=A.colorSpace===Ln||de===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ce=S(A.image,!1,r.maxTextureSize);ce=Ae(A,ce);const ve=s.convert(A.format,A.colorSpace),Xe=s.convert(A.type);let Le=T(A.internalFormat,ve,Xe,A.colorSpace,A.isVideoTexture);pe(ie,A);let ye;const Ue=A.mipmaps,ze=A.isVideoTexture!==!0,tt=Ce.__version===void 0||ae===!0,M=re.dataReady,Y=R(A,ce);if(A.isDepthTexture)Le=y(A.format===Ri,A.type),tt&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Le,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,Le,ce.width,ce.height,0,ve,Xe,null));else if(A.isDataTexture)if(Ue.length>0){ze&&tt&&t.texStorage2D(i.TEXTURE_2D,Y,Le,Ue[0].width,Ue[0].height);for(let q=0,Z=Ue.length;q<Z;q++)ye=Ue[q],ze?M&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,ye.width,ye.height,ve,Xe,ye.data):t.texImage2D(i.TEXTURE_2D,q,Le,ye.width,ye.height,0,ve,Xe,ye.data);A.generateMipmaps=!1}else ze?(tt&&t.texStorage2D(i.TEXTURE_2D,Y,Le,ce.width,ce.height),M&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce.width,ce.height,ve,Xe,ce.data)):t.texImage2D(i.TEXTURE_2D,0,Le,ce.width,ce.height,0,ve,Xe,ce.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ze&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Y,Le,Ue[0].width,Ue[0].height,ce.depth);for(let q=0,Z=Ue.length;q<Z;q++)if(ye=Ue[q],A.format!==kt)if(ve!==null)if(ze){if(M)if(A.layerUpdates.size>0){const oe=Bo(ye.width,ye.height,A.format,A.type);for(const we of A.layerUpdates){const Ne=ye.data.subarray(we*oe/ye.data.BYTES_PER_ELEMENT,(we+1)*oe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,we,ye.width,ye.height,1,ve,Ne,0,0)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ye.width,ye.height,ce.depth,ve,ye.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Le,ye.width,ye.height,ce.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?M&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ye.width,ye.height,ce.depth,ve,Xe,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,Le,ye.width,ye.height,ce.depth,0,ve,Xe,ye.data)}else{ze&&tt&&t.texStorage2D(i.TEXTURE_2D,Y,Le,Ue[0].width,Ue[0].height);for(let q=0,Z=Ue.length;q<Z;q++)ye=Ue[q],A.format!==kt?ve!==null?ze?M&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,ye.width,ye.height,ve,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,q,Le,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?M&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,ye.width,ye.height,ve,Xe,ye.data):t.texImage2D(i.TEXTURE_2D,q,Le,ye.width,ye.height,0,ve,Xe,ye.data)}else if(A.isDataArrayTexture)if(ze){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Y,Le,ce.width,ce.height,ce.depth),M)if(A.layerUpdates.size>0){const q=Bo(ce.width,ce.height,A.format,A.type);for(const Z of A.layerUpdates){const oe=ce.data.subarray(Z*q/ce.data.BYTES_PER_ELEMENT,(Z+1)*q/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ce.width,ce.height,1,ve,Xe,oe)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ve,Xe,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,ce.width,ce.height,ce.depth,0,ve,Xe,ce.data);else if(A.isData3DTexture)ze?(tt&&t.texStorage3D(i.TEXTURE_3D,Y,Le,ce.width,ce.height,ce.depth),M&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ve,Xe,ce.data)):t.texImage3D(i.TEXTURE_3D,0,Le,ce.width,ce.height,ce.depth,0,ve,Xe,ce.data);else if(A.isFramebufferTexture){if(tt)if(ze)t.texStorage2D(i.TEXTURE_2D,Y,Le,ce.width,ce.height);else{let q=ce.width,Z=ce.height;for(let oe=0;oe<Y;oe++)t.texImage2D(i.TEXTURE_2D,oe,Le,q,Z,0,ve,Xe,null),q>>=1,Z>>=1}}else if(Ue.length>0){if(ze&&tt){const q=be(Ue[0]);t.texStorage2D(i.TEXTURE_2D,Y,Le,q.width,q.height)}for(let q=0,Z=Ue.length;q<Z;q++)ye=Ue[q],ze?M&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,ve,Xe,ye):t.texImage2D(i.TEXTURE_2D,q,Le,ve,Xe,ye);A.generateMipmaps=!1}else if(ze){if(tt){const q=be(ce);t.texStorage2D(i.TEXTURE_2D,Y,Le,q.width,q.height)}M&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Xe,ce)}else t.texImage2D(i.TEXTURE_2D,0,Le,ve,Xe,ce);f(A)&&u(ie),Ce.__version=re.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function J(U,A,W){if(A.image.length!==6)return;const ie=Pe(U,A),ae=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+W);const re=n.get(ae);if(ae.version!==re.__version||ie===!0){t.activeTexture(i.TEXTURE0+W);const Ce=Ze.getPrimaries(Ze.workingColorSpace),de=A.colorSpace===Ln?null:Ze.getPrimaries(A.colorSpace),_e=A.colorSpace===Ln||Ce===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const He=A.isCompressedTexture||A.image[0].isCompressedTexture,ce=A.image[0]&&A.image[0].isDataTexture,ve=[];for(let Z=0;Z<6;Z++)!He&&!ce?ve[Z]=S(A.image[Z],!0,r.maxCubemapSize):ve[Z]=ce?A.image[Z].image:A.image[Z],ve[Z]=Ae(A,ve[Z]);const Xe=ve[0],Le=s.convert(A.format,A.colorSpace),ye=s.convert(A.type),Ue=T(A.internalFormat,Le,ye,A.colorSpace),ze=A.isVideoTexture!==!0,tt=re.__version===void 0||ie===!0,M=ae.dataReady;let Y=R(A,Xe);pe(i.TEXTURE_CUBE_MAP,A);let q;if(He){ze&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Y,Ue,Xe.width,Xe.height);for(let Z=0;Z<6;Z++){q=ve[Z].mipmaps;for(let oe=0;oe<q.length;oe++){const we=q[oe];A.format!==kt?Le!==null?ze?M&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,we.width,we.height,Le,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,Ue,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?M&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,we.width,we.height,Le,ye,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,Ue,we.width,we.height,0,Le,ye,we.data)}}}else{if(q=A.mipmaps,ze&&tt){q.length>0&&Y++;const Z=be(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Y,Ue,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ce){ze?M&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ve[Z].width,ve[Z].height,Le,ye,ve[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ue,ve[Z].width,ve[Z].height,0,Le,ye,ve[Z].data);for(let oe=0;oe<q.length;oe++){const Ne=q[oe].image[Z].image;ze?M&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,Ne.width,Ne.height,Le,ye,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,Ue,Ne.width,Ne.height,0,Le,ye,Ne.data)}}else{ze?M&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Le,ye,ve[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ue,Le,ye,ve[Z]);for(let oe=0;oe<q.length;oe++){const we=q[oe];ze?M&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,Le,ye,we.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,Ue,Le,ye,we.image[Z])}}}f(A)&&u(i.TEXTURE_CUBE_MAP),re.__version=ae.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function le(U,A,W,ie,ae,re){const Ce=s.convert(W.format,W.colorSpace),de=s.convert(W.type),_e=T(W.internalFormat,Ce,de,W.colorSpace);if(!n.get(A).__hasExternalTextures){const ce=Math.max(1,A.width>>re),ve=Math.max(1,A.height>>re);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,re,_e,ce,ve,A.depth,0,Ce,de,null):t.texImage2D(ae,re,_e,ce,ve,0,Ce,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),he(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ae,n.get(W).__webglTexture,0,Me(A)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ae,n.get(W).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(U,A,W){if(i.bindRenderbuffer(i.RENDERBUFFER,U),A.depthBuffer){const ie=A.depthTexture,ae=ie&&ie.isDepthTexture?ie.type:null,re=y(A.stencilBuffer,ae),Ce=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=Me(A);he(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,re,A.width,A.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,re,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,re,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,U)}else{const ie=A.textures;for(let ae=0;ae<ie.length;ae++){const re=ie[ae],Ce=s.convert(re.format,re.colorSpace),de=s.convert(re.type),_e=T(re.internalFormat,Ce,de,re.colorSpace),He=Me(A);W&&he(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,_e,A.width,A.height):he(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,_e,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,_e,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);const ie=n.get(A.depthTexture).__webglTexture,ae=Me(A);if(A.depthTexture.format===Ei)he(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(A.depthTexture.format===Ri)he(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Q(U){const A=n.get(U),W=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");me(A.__webglFramebuffer,U)}else if(W){A.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ie]),A.__webglDepthbuffer[ie]=i.createRenderbuffer(),xe(A.__webglDepthbuffer[ie],U,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),xe(A.__webglDepthbuffer,U,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function w(U,A,W){const ie=n.get(U);A!==void 0&&le(ie.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Q(U)}function I(U){const A=U.texture,W=n.get(U),ie=n.get(A);U.addEventListener("dispose",b);const ae=U.textures,re=U.isWebGLCubeRenderTarget===!0,Ce=ae.length>1;if(Ce||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=A.version,a.memory.textures++),re){W.__webglFramebuffer=[];for(let de=0;de<6;de++)if(A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer[de]=[];for(let _e=0;_e<A.mipmaps.length;_e++)W.__webglFramebuffer[de][_e]=i.createFramebuffer()}else W.__webglFramebuffer[de]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer=[];for(let de=0;de<A.mipmaps.length;de++)W.__webglFramebuffer[de]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let de=0,_e=ae.length;de<_e;de++){const He=n.get(ae[de]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&he(U)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let de=0;de<ae.length;de++){const _e=ae[de];W.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[de]);const He=s.convert(_e.format,_e.colorSpace),ce=s.convert(_e.type),ve=T(_e.internalFormat,He,ce,_e.colorSpace,U.isXRRenderTarget===!0),Xe=Me(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,ve,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,W.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(W.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),pe(i.TEXTURE_CUBE_MAP,A);for(let de=0;de<6;de++)if(A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)le(W.__webglFramebuffer[de][_e],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else le(W.__webglFramebuffer[de],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);f(A)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let de=0,_e=ae.length;de<_e;de++){const He=ae[de],ce=n.get(He);t.bindTexture(i.TEXTURE_2D,ce.__webglTexture),pe(i.TEXTURE_2D,He),le(W.__webglFramebuffer,U,He,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),f(He)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(de=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,ie.__webglTexture),pe(de,A),A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)le(W.__webglFramebuffer[_e],U,A,i.COLOR_ATTACHMENT0,de,_e);else le(W.__webglFramebuffer,U,A,i.COLOR_ATTACHMENT0,de,0);f(A)&&u(de),t.unbindTexture()}U.depthBuffer&&Q(U)}function O(U){const A=U.textures;for(let W=0,ie=A.length;W<ie;W++){const ae=A[W];if(f(ae)){const re=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ce=n.get(ae).__webglTexture;t.bindTexture(re,Ce),u(re),t.unbindTexture()}}}const L=[],ee=[];function ne(U){if(U.samples>0){if(he(U)===!1){const A=U.textures,W=U.width,ie=U.height;let ae=i.COLOR_BUFFER_BIT;const re=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(U),de=A.length>1;if(de)for(let _e=0;_e<A.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let _e=0;_e<A.length;_e++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const He=n.get(A[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,W,ie,0,0,W,ie,ae,i.NEAREST),l===!0&&(L.length=0,ee.length=0,L.push(i.COLOR_ATTACHMENT0+_e),U.depthBuffer&&U.resolveDepthBuffer===!1&&(L.push(re),ee.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let _e=0;_e<A.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const He=n.get(A[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const A=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Me(U){return Math.min(r.maxSamples,U.samples)}function he(U){const A=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ke(U){const A=a.render.frame;h.get(U)!==A&&(h.set(U,A),U.update())}function Ae(U,A){const W=U.colorSpace,ie=U.format,ae=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||W!==Mn&&W!==Ln&&(Ze.getTransfer(W)===Qe?(ie!==kt||ae!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),A}function be(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=E,this.setTexture2D=z,this.setTexture2DArray=V,this.setTexture3D=N,this.setTextureCube=X,this.rebindTextures=w,this.setupRenderTarget=I,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=le,this.useMultisampledRTT=he}function vm(i,e){function t(n,r=Ln){let s;const a=Ze.getTransfer(r);if(n===mn)return i.UNSIGNED_BYTE;if(n===ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fl)return i.BYTE;if(n===pl)return i.SHORT;if(n===Wi)return i.UNSIGNED_SHORT;if(n===pa)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===Ht)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===gl)return i.ALPHA;if(n===_l)return i.RGB;if(n===kt)return i.RGBA;if(n===vl)return i.LUMINANCE;if(n===xl)return i.LUMINANCE_ALPHA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===Ri)return i.DEPTH_STENCIL;if(n===Ml)return i.RED;if(n===_a)return i.RED_INTEGER;if(n===yl)return i.RG;if(n===va)return i.RG_INTEGER;if(n===xa)return i.RGBA_INTEGER;if(n===Ar||n===wr||n===Tr||n===Cr)if(a===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ar)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ar)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fs||n===Os||n===Bs||n===zs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Os)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hs||n===ks||n===Vs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Hs||n===ks)return a===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vs)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gs||n===Ws||n===Xs||n===Ys||n===js||n===qs||n===$s||n===Ks||n===Zs||n===Js||n===Qs||n===ea||n===ta||n===na)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Gs)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ws)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xs)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ys)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===js)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qs)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$s)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ks)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zs)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Js)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qs)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ea)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ta)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===na)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rr||n===ia||n===ra)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Rr)return a===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ia)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ra)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sl||n===sa||n===aa||n===oa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Rr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===sa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ci?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class xm extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yr extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mm={type:"move"};class bs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const f=t.getJointPose(S,n),u=this._getHandJoint(c,S);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],m=h.position.distanceTo(p.position),_=.02,x=.005;c.inputState.pinching&&m>_+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=_-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ym=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Em{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new wt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _n({vertexShader:ym,fragmentShader:Sm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new On(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bm extends Zn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,m=null,_=null,x=null;const S=new Em,f=t.getContextAttributes();let u=null,T=null;const y=[],R=[],F=new Be;let b=null;const C=new bt;C.layers.enable(1),C.viewport=new et;const v=new bt;v.layers.enable(2),v.viewport=new et;const g=[C,v],d=new xm;d.layers.enable(1),d.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let le=y[J];return le===void 0&&(le=new bs,y[J]=le),le.getTargetRaySpace()},this.getControllerGrip=function(J){let le=y[J];return le===void 0&&(le=new bs,y[J]=le),le.getGripSpace()},this.getHand=function(J){let le=y[J];return le===void 0&&(le=new bs,y[J]=le),le.getHandSpace()};function B(J){const le=R.indexOf(J.inputSource);if(le===-1)return;const xe=y[le];xe!==void 0&&(xe.update(J.inputSource,J.frame,c||a),xe.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",V);for(let J=0;J<y.length;J++){const le=R[J];le!==null&&(R[J]=null,y[J].disconnect(le))}E=null,D=null,S.reset(),e.setRenderTarget(u),_=null,m=null,p=null,r=null,T=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",z),r.addEventListener("inputsourceschange",V),f.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(F),r.renderState.layers===void 0){const le={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),T=new gn(_.framebufferWidth,_.framebufferHeight,{format:kt,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let le=null,xe=null,me=null;f.depth&&(me=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=f.stencil?Ri:Ei,xe=f.stencil?Ci:$n);const Q={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};p=new XRWebGLBinding(r,t),m=p.createProjectionLayer(Q),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),T=new gn(m.textureWidth,m.textureHeight,{format:kt,type:mn,depthTexture:new kl(m.textureWidth,m.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function V(J){for(let le=0;le<J.removed.length;le++){const xe=J.removed[le],me=R.indexOf(xe);me>=0&&(R[me]=null,y[me].disconnect(xe))}for(let le=0;le<J.added.length;le++){const xe=J.added[le];let me=R.indexOf(xe);if(me===-1){for(let w=0;w<y.length;w++)if(w>=R.length){R.push(xe),me=w;break}else if(R[w]===null){R[w]=xe,me=w;break}if(me===-1)break}const Q=y[me];Q&&Q.connect(xe)}}const N=new k,X=new k;function j(J,le,xe){N.setFromMatrixPosition(le.matrixWorld),X.setFromMatrixPosition(xe.matrixWorld);const me=N.distanceTo(X),Q=le.projectionMatrix.elements,w=xe.projectionMatrix.elements,I=Q[14]/(Q[10]-1),O=Q[14]/(Q[10]+1),L=(Q[9]+1)/Q[5],ee=(Q[9]-1)/Q[5],ne=(Q[8]-1)/Q[0],Me=(w[8]+1)/w[0],he=I*ne,ke=I*Me,Ae=me/(-ne+Me),be=Ae*-ne;le.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(be),J.translateZ(Ae),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const U=I+Ae,A=O+Ae,W=he-be,ie=ke+(me-be),ae=L*O/A*U,re=ee*O/A*U;J.projectionMatrix.makePerspective(W,ie,ae,re,U,A),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function se(J,le){le===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(le.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;S.texture!==null&&(J.near=S.depthNear,J.far=S.depthFar),d.near=v.near=C.near=J.near,d.far=v.far=C.far=J.far,(E!==d.near||D!==d.far)&&(r.updateRenderState({depthNear:d.near,depthFar:d.far}),E=d.near,D=d.far,C.near=E,C.far=D,v.near=E,v.far=D,C.updateProjectionMatrix(),v.updateProjectionMatrix(),J.updateProjectionMatrix());const le=J.parent,xe=d.cameras;se(d,le);for(let me=0;me<xe.length;me++)se(xe[me],le);xe.length===2?j(d,C,v):d.projectionMatrix.copy(C.projectionMatrix),te(J,d,le)};function te(J,le,xe){xe===null?J.matrix.copy(le.matrixWorld):(J.matrix.copy(xe.matrixWorld),J.matrix.invert(),J.matrix.multiply(le.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(le.projectionMatrix),J.projectionMatrixInverse.copy(le.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Xi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return d},this.getFoveation=function(){if(!(m===null&&_===null))return l},this.setFoveation=function(J){l=J,m!==null&&(m.fixedFoveation=J),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(d)};let pe=null;function Pe(J,le){if(h=le.getViewerPose(c||a),x=le,h!==null){const xe=h.views;_!==null&&(e.setRenderTargetFramebuffer(T,_.framebuffer),e.setRenderTarget(T));let me=!1;xe.length!==d.cameras.length&&(d.cameras.length=0,me=!0);for(let w=0;w<xe.length;w++){const I=xe[w];let O=null;if(_!==null)O=_.getViewport(I);else{const ee=p.getViewSubImage(m,I);O=ee.viewport,w===0&&(e.setRenderTargetTextures(T,ee.colorTexture,m.ignoreDepthValues?void 0:ee.depthStencilTexture),e.setRenderTarget(T))}let L=g[w];L===void 0&&(L=new bt,L.layers.enable(w),L.viewport=new et,g[w]=L),L.matrix.fromArray(I.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(I.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(O.x,O.y,O.width,O.height),w===0&&(d.matrix.copy(L.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale)),me===!0&&d.cameras.push(L)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const w=p.getDepthInformation(xe[0]);w&&w.isValid&&w.texture&&S.init(e,w,r.renderState)}}for(let xe=0;xe<y.length;xe++){const me=R[xe],Q=y[xe];me!==null&&Q!==void 0&&Q.update(me,le,c||a)}pe&&pe(J,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),x=null}const Ie=new zl;Ie.setAnimationLoop(Pe),this.setAnimationLoop=function(J){pe=J},this.dispose=function(){}}}const Wn=new Qt,Am=new Je;function wm(i,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,Fl(i)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function r(f,u,T,y,R){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(f,u):u.isMeshToonMaterial?(s(f,u),p(f,u)):u.isMeshPhongMaterial?(s(f,u),h(f,u)):u.isMeshStandardMaterial?(s(f,u),m(f,u),u.isMeshPhysicalMaterial&&_(f,u,R)):u.isMeshMatcapMaterial?(s(f,u),x(f,u)):u.isMeshDepthMaterial?s(f,u):u.isMeshDistanceMaterial?(s(f,u),S(f,u)):u.isMeshNormalMaterial?s(f,u):u.isLineBasicMaterial?(a(f,u),u.isLineDashedMaterial&&o(f,u)):u.isPointsMaterial?l(f,u,T,y):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===Pt&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===Pt&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const T=e.get(u),y=T.envMap,R=T.envMapRotation;y&&(f.envMap.value=y,Wn.copy(R),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),f.envMapRotation.value.setFromMatrix4(Am.makeRotationFromEuler(Wn)),f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap&&(f.lightMap.value=u.lightMap,f.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,f.lightMapTransform)),u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function a(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function o(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,T,y){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*T,f.scale.value=y*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function p(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function m(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function _(f,u,T){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Pt&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=T.texture,f.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,u){u.matcap&&(f.matcap.value=u.matcap)}function S(f,u){const T=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(T.matrixWorld),f.nearDistance.value=T.shadow.camera.near,f.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Tm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const R=y.program;n.uniformBlockBinding(T,R)}function c(T,y){let R=r[T.id];R===void 0&&(x(T),R=h(T),r[T.id]=R,T.addEventListener("dispose",f));const F=y.program;n.updateUBOMapping(T,F);const b=e.render.frame;s[T.id]!==b&&(m(T),s[T.id]=b)}function h(T){const y=p();T.__bindingPointIndex=y;const R=i.createBuffer(),F=T.__size,b=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,F,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,R),R}function p(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(T){const y=r[T.id],R=T.uniforms,F=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,C=R.length;b<C;b++){const v=Array.isArray(R[b])?R[b]:[R[b]];for(let g=0,d=v.length;g<d;g++){const E=v[g];if(_(E,b,g,F)===!0){const D=E.__offset,B=Array.isArray(E.value)?E.value:[E.value];let z=0;for(let V=0;V<B.length;V++){const N=B[V],X=S(N);typeof N=="number"||typeof N=="boolean"?(E.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,D+z,E.__data)):N.isMatrix3?(E.__data[0]=N.elements[0],E.__data[1]=N.elements[1],E.__data[2]=N.elements[2],E.__data[3]=0,E.__data[4]=N.elements[3],E.__data[5]=N.elements[4],E.__data[6]=N.elements[5],E.__data[7]=0,E.__data[8]=N.elements[6],E.__data[9]=N.elements[7],E.__data[10]=N.elements[8],E.__data[11]=0):(N.toArray(E.__data,z),z+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(T,y,R,F){const b=T.value,C=y+"_"+R;if(F[C]===void 0)return typeof b=="number"||typeof b=="boolean"?F[C]=b:F[C]=b.clone(),!0;{const v=F[C];if(typeof b=="number"||typeof b=="boolean"){if(v!==b)return F[C]=b,!0}else if(v.equals(b)===!1)return v.copy(b),!0}return!1}function x(T){const y=T.uniforms;let R=0;const F=16;for(let C=0,v=y.length;C<v;C++){const g=Array.isArray(y[C])?y[C]:[y[C]];for(let d=0,E=g.length;d<E;d++){const D=g[d],B=Array.isArray(D.value)?D.value:[D.value];for(let z=0,V=B.length;z<V;z++){const N=B[z],X=S(N),j=R%F;j!==0&&F-j<X.boundary&&(R+=F-j),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=R,R+=X.storage}}}const b=R%F;return b>0&&(R+=F-b),T.__size=R,T.__cache={},this}function S(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function f(T){const y=T.target;y.removeEventListener("dispose",f);const R=a.indexOf(y.__bindingPointIndex);a.splice(R,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Cm{constructor(e={}){const{canvas:t=gu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),x=new Int32Array(4);let S=null,f=null;const u=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this.toneMapping=Un,this.toneMappingExposure=1;const y=this;let R=!1,F=0,b=0,C=null,v=-1,g=null;const d=new et,E=new et;let D=null;const B=new We(0);let z=0,V=t.width,N=t.height,X=1,j=null,se=null;const te=new et(0,0,V,N),pe=new et(0,0,V,N);let Pe=!1;const Ie=new Vr;let J=!1,le=!1;const xe=new Je,me=new k,Q=new et,w={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let I=!1;function O(){return C===null?X:1}let L=n;function ee(P,H){return t.getContext(P,H)}try{const P={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${da}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",oe,!1),L===null){const H="webgl2";if(L=ee(H,P),L===null)throw ee(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ne,Me,he,ke,Ae,be,U,A,W,ie,ae,re,Ce,de,_e,He,ce,ve,Xe,Le,ye,Ue,ze,tt;function M(){ne=new Ff(L),ne.init(),Ue=new vm(L,ne),Me=new Pf(L,ne,e,Ue),he=new mm(L),ke=new zf(L),Ae=new nm,be=new _m(L,ne,he,Ae,Me,Ue,ke),U=new Df(y),A=new Nf(y),W=new Xu(L),ze=new Cf(L,W),ie=new Of(L,W,ke,ze),ae=new kf(L,ie,W,ke),Xe=new Hf(L,Me,be),He=new Lf(Ae),re=new tm(y,U,A,ne,Me,ze,He),Ce=new wm(y,Ae),de=new rm,_e=new um(ne),ve=new Tf(y,U,A,he,ae,m,l),ce=new pm(y,ae,Me),tt=new Tm(L,ke,Me,he),Le=new Rf(L,ne,ke),ye=new Bf(L,ne,ke),ke.programs=re.programs,y.capabilities=Me,y.extensions=ne,y.properties=Ae,y.renderLists=de,y.shadowMap=ce,y.state=he,y.info=ke}M();const Y=new bm(y,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const P=ne.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ne.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(P){P!==void 0&&(X=P,this.setSize(V,N,!1))},this.getSize=function(P){return P.set(V,N)},this.setSize=function(P,H,$=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=P,N=H,t.width=Math.floor(P*X),t.height=Math.floor(H*X),$===!0&&(t.style.width=P+"px",t.style.height=H+"px"),this.setViewport(0,0,P,H)},this.getDrawingBufferSize=function(P){return P.set(V*X,N*X).floor()},this.setDrawingBufferSize=function(P,H,$){V=P,N=H,X=$,t.width=Math.floor(P*$),t.height=Math.floor(H*$),this.setViewport(0,0,P,H)},this.getCurrentViewport=function(P){return P.copy(d)},this.getViewport=function(P){return P.copy(te)},this.setViewport=function(P,H,$,K){P.isVector4?te.set(P.x,P.y,P.z,P.w):te.set(P,H,$,K),he.viewport(d.copy(te).multiplyScalar(X).round())},this.getScissor=function(P){return P.copy(pe)},this.setScissor=function(P,H,$,K){P.isVector4?pe.set(P.x,P.y,P.z,P.w):pe.set(P,H,$,K),he.scissor(E.copy(pe).multiplyScalar(X).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(P){he.setScissorTest(Pe=P)},this.setOpaqueSort=function(P){j=P},this.setTransparentSort=function(P){se=P},this.getClearColor=function(P){return P.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(P=!0,H=!0,$=!0){let K=0;if(P){let G=!1;if(C!==null){const ue=C.texture.format;G=ue===xa||ue===va||ue===_a}if(G){const ue=C.texture.type,ge=ue===mn||ue===$n||ue===Wi||ue===Ci||ue===ma||ue===ga,Se=ve.getClearColor(),Ee=ve.getClearAlpha(),De=Se.r,Fe=Se.g,Re=Se.b;ge?(_[0]=De,_[1]=Fe,_[2]=Re,_[3]=Ee,L.clearBufferuiv(L.COLOR,0,_)):(x[0]=De,x[1]=Fe,x[2]=Re,x[3]=Ee,L.clearBufferiv(L.COLOR,0,x))}else K|=L.COLOR_BUFFER_BIT}H&&(K|=L.DEPTH_BUFFER_BIT),$&&(K|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),de.dispose(),_e.dispose(),Ae.dispose(),U.dispose(),A.dispose(),ae.dispose(),ze.dispose(),tt.dispose(),re.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",at),Y.removeEventListener("sessionend",yn),mt.stop()};function q(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const P=ke.autoReset,H=ce.enabled,$=ce.autoUpdate,K=ce.needsUpdate,G=ce.type;M(),ke.autoReset=P,ce.enabled=H,ce.autoUpdate=$,ce.needsUpdate=K,ce.type=G}function oe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function we(P){const H=P.target;H.removeEventListener("dispose",we),Ne(H)}function Ne(P){st(P),Ae.remove(P)}function st(P){const H=Ae.get(P).programs;H!==void 0&&(H.forEach(function($){re.releaseProgram($)}),P.isShaderMaterial&&re.releaseShaderCache(P))}this.renderBufferDirect=function(P,H,$,K,G,ue){H===null&&(H=w);const ge=G.isMesh&&G.matrixWorld.determinant()<0,Se=rc(P,H,$,K,G);he.setMaterial(K,ge);let Ee=$.index,De=1;if(K.wireframe===!0){if(Ee=ie.getWireframeAttribute($),Ee===void 0)return;De=2}const Fe=$.drawRange,Re=$.attributes.position;let je=Fe.start*De,it=(Fe.start+Fe.count)*De;ue!==null&&(je=Math.max(je,ue.start*De),it=Math.min(it,(ue.start+ue.count)*De)),Ee!==null?(je=Math.max(je,0),it=Math.min(it,Ee.count)):Re!=null&&(je=Math.max(je,0),it=Math.min(it,Re.count));const rt=it-je;if(rt<0||rt===1/0)return;ze.setup(G,K,Se,$,Ee);let Lt,qe=Le;if(Ee!==null&&(Lt=W.get(Ee),qe=ye,qe.setIndex(Lt)),G.isMesh)K.wireframe===!0?(he.setLineWidth(K.wireframeLinewidth*O()),qe.setMode(L.LINES)):qe.setMode(L.TRIANGLES);else if(G.isLine){let Te=K.linewidth;Te===void 0&&(Te=1),he.setLineWidth(Te*O()),G.isLineSegments?qe.setMode(L.LINES):G.isLineLoop?qe.setMode(L.LINE_LOOP):qe.setMode(L.LINE_STRIP)}else G.isPoints?qe.setMode(L.POINTS):G.isSprite&&qe.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)qe.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))qe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Te=G._multiDrawStarts,gt=G._multiDrawCounts,$e=G._multiDrawCount,Vt=Ee?W.get(Ee).bytesPerElement:1,Jn=Ae.get(K).currentProgram.getUniforms();for(let Dt=0;Dt<$e;Dt++)Jn.setValue(L,"_gl_DrawID",Dt),qe.render(Te[Dt]/Vt,gt[Dt])}else if(G.isInstancedMesh)qe.renderInstances(je,rt,G.count);else if($.isInstancedBufferGeometry){const Te=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,gt=Math.min($.instanceCount,Te);qe.renderInstances(je,rt,gt)}else qe.render(je,rt)};function ct(P,H,$){P.transparent===!0&&P.side===un&&P.forceSinglePass===!1?(P.side=Pt,P.needsUpdate=!0,Zi(P,H,$),P.side=Nn,P.needsUpdate=!0,Zi(P,H,$),P.side=un):Zi(P,H,$)}this.compile=function(P,H,$=null){$===null&&($=P),f=_e.get($),f.init(H),T.push(f),$.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),P!==$&&P.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights();const K=new Set;return P.traverse(function(G){const ue=G.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){const Se=ue[ge];ct(Se,$,G),K.add(Se)}else ct(ue,$,G),K.add(ue)}),T.pop(),f=null,K},this.compileAsync=function(P,H,$=null){const K=this.compile(P,H,$);return new Promise(G=>{function ue(){if(K.forEach(function(ge){Ae.get(ge).currentProgram.isReady()&&K.delete(ge)}),K.size===0){G(P);return}setTimeout(ue,10)}ne.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ye=null;function ut(P){Ye&&Ye(P)}function at(){mt.stop()}function yn(){mt.start()}const mt=new zl;mt.setAnimationLoop(ut),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(P){Ye=P,Y.setAnimationLoop(P),P===null?mt.stop():mt.start()},Y.addEventListener("sessionstart",at),Y.addEventListener("sessionend",yn),this.render=function(P,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(H),H=Y.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,H,C),f=_e.get(P,T.length),f.init(H),T.push(f),xe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ie.setFromProjectionMatrix(xe),le=this.localClippingEnabled,J=He.init(this.clippingPlanes,le),S=de.get(P,u.length),S.init(),u.push(S),Y.enabled===!0&&Y.isPresenting===!0){const ue=y.xr.getDepthSensingMesh();ue!==null&&tn(ue,H,-1/0,y.sortObjects)}tn(P,H,0,y.sortObjects),S.finish(),y.sortObjects===!0&&S.sort(j,se),I=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,I&&ve.addToRenderList(S,P),this.info.render.frame++,J===!0&&He.beginShadows();const $=f.state.shadowsArray;ce.render($,P,H),J===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=S.opaque,G=S.transmissive;if(f.setupLights(),H.isArrayCamera){const ue=H.cameras;if(G.length>0)for(let ge=0,Se=ue.length;ge<Se;ge++){const Ee=ue[ge];Ui(K,G,P,Ee)}I&&ve.render(P);for(let ge=0,Se=ue.length;ge<Se;ge++){const Ee=ue[ge];Bn(S,P,Ee,Ee.viewport)}}else G.length>0&&Ui(K,G,P,H),I&&ve.render(P),Bn(S,P,H);C!==null&&(be.updateMultisampleRenderTarget(C),be.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(y,P,H),ze.resetDefaultState(),v=-1,g=null,T.pop(),T.length>0?(f=T[T.length-1],J===!0&&He.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,u.pop(),u.length>0?S=u[u.length-1]:S=null};function tn(P,H,$,K){if(P.visible===!1)return;if(P.layers.test(H.layers)){if(P.isGroup)$=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(H);else if(P.isLight)f.pushLight(P),P.castShadow&&f.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ie.intersectsSprite(P)){K&&Q.setFromMatrixPosition(P.matrixWorld).applyMatrix4(xe);const ge=ae.update(P),Se=P.material;Se.visible&&S.push(P,ge,Se,$,Q.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ie.intersectsObject(P))){const ge=ae.update(P),Se=P.material;if(K&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Q.copy(P.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Q.copy(ge.boundingSphere.center)),Q.applyMatrix4(P.matrixWorld).applyMatrix4(xe)),Array.isArray(Se)){const Ee=ge.groups;for(let De=0,Fe=Ee.length;De<Fe;De++){const Re=Ee[De],je=Se[Re.materialIndex];je&&je.visible&&S.push(P,ge,je,$,Q.z,Re)}}else Se.visible&&S.push(P,ge,Se,$,Q.z,null)}}const ue=P.children;for(let ge=0,Se=ue.length;ge<Se;ge++)tn(ue[ge],H,$,K)}function Bn(P,H,$,K){const G=P.opaque,ue=P.transmissive,ge=P.transparent;f.setupLightsView($),J===!0&&He.setGlobalState(y.clippingPlanes,$),K&&he.viewport(d.copy(K)),G.length>0&&Ki(G,H,$),ue.length>0&&Ki(ue,H,$),ge.length>0&&Ki(ge,H,$),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Ui(P,H,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[K.id]===void 0&&(f.state.transmissionRenderTarget[K.id]=new gn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?fn:mn,minFilter:Dn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ue=f.state.transmissionRenderTarget[K.id],ge=K.viewport||d;ue.setSize(ge.z,ge.w);const Se=y.getRenderTarget();y.setRenderTarget(ue),y.getClearColor(B),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),I?ve.render($):y.clear();const Ee=y.toneMapping;y.toneMapping=Un;const De=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),f.setupLightsView(K),J===!0&&He.setGlobalState(y.clippingPlanes,K),Ki(P,$,K),be.updateMultisampleRenderTarget(ue),be.updateRenderTargetMipmap(ue),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Re=0,je=H.length;Re<je;Re++){const it=H[Re],rt=it.object,Lt=it.geometry,qe=it.material,Te=it.group;if(qe.side===un&&rt.layers.test(K.layers)){const gt=qe.side;qe.side=Pt,qe.needsUpdate=!0,Oa(rt,$,K,Lt,qe,Te),qe.side=gt,qe.needsUpdate=!0,Fe=!0}}Fe===!0&&(be.updateMultisampleRenderTarget(ue),be.updateRenderTargetMipmap(ue))}y.setRenderTarget(Se),y.setClearColor(B,z),De!==void 0&&(K.viewport=De),y.toneMapping=Ee}function Ki(P,H,$){const K=H.isScene===!0?H.overrideMaterial:null;for(let G=0,ue=P.length;G<ue;G++){const ge=P[G],Se=ge.object,Ee=ge.geometry,De=K===null?ge.material:K,Fe=ge.group;Se.layers.test($.layers)&&Oa(Se,H,$,Ee,De,Fe)}}function Oa(P,H,$,K,G,ue){P.onBeforeRender(y,H,$,K,G,ue),P.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),G.transparent===!0&&G.side===un&&G.forceSinglePass===!1?(G.side=Pt,G.needsUpdate=!0,y.renderBufferDirect($,H,K,G,P,ue),G.side=Nn,G.needsUpdate=!0,y.renderBufferDirect($,H,K,G,P,ue),G.side=un):y.renderBufferDirect($,H,K,G,P,ue),P.onAfterRender(y,H,$,K,G,ue)}function Zi(P,H,$){H.isScene!==!0&&(H=w);const K=Ae.get(P),G=f.state.lights,ue=f.state.shadowsArray,ge=G.state.version,Se=re.getParameters(P,G.state,ue,H,$),Ee=re.getProgramCacheKey(Se);let De=K.programs;K.environment=P.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(P.isMeshStandardMaterial?A:U).get(P.envMap||K.environment),K.envMapRotation=K.environment!==null&&P.envMap===null?H.environmentRotation:P.envMapRotation,De===void 0&&(P.addEventListener("dispose",we),De=new Map,K.programs=De);let Fe=De.get(Ee);if(Fe!==void 0){if(K.currentProgram===Fe&&K.lightsStateVersion===ge)return za(P,Se),Fe}else Se.uniforms=re.getUniforms(P),P.onBeforeCompile(Se,y),Fe=re.acquireProgram(Se,Ee),De.set(Ee,Fe),K.uniforms=Se.uniforms;const Re=K.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Re.clippingPlanes=He.uniform),za(P,Se),K.needsLights=ac(P),K.lightsStateVersion=ge,K.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.directionalShadowMap.value=G.state.directionalShadowMap,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotShadowMap.value=G.state.spotShadowMap,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMap.value=G.state.pointShadowMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=Fe,K.uniformsList=null,Fe}function Ba(P){if(P.uniformsList===null){const H=P.currentProgram.getUniforms();P.uniformsList=Pr.seqWithValue(H.seq,P.uniforms)}return P.uniformsList}function za(P,H){const $=Ae.get(P);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function rc(P,H,$,K,G){H.isScene!==!0&&(H=w),be.resetTextureUnits();const ue=H.fog,ge=K.isMeshStandardMaterial?H.environment:null,Se=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Mn,Ee=(K.isMeshStandardMaterial?A:U).get(K.envMap||ge),De=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Fe=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Re=!!$.morphAttributes.position,je=!!$.morphAttributes.normal,it=!!$.morphAttributes.color;let rt=Un;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(rt=y.toneMapping);const Lt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,qe=Lt!==void 0?Lt.length:0,Te=Ae.get(K),gt=f.state.lights;if(J===!0&&(le===!0||P!==g)){const Ot=P===g&&K.id===v;He.setState(K,P,Ot)}let $e=!1;K.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==gt.state.version||Te.outputColorSpace!==Se||G.isBatchedMesh&&Te.batching===!1||!G.isBatchedMesh&&Te.batching===!0||G.isBatchedMesh&&Te.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Te.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Te.instancing===!1||!G.isInstancedMesh&&Te.instancing===!0||G.isSkinnedMesh&&Te.skinning===!1||!G.isSkinnedMesh&&Te.skinning===!0||G.isInstancedMesh&&Te.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Te.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Te.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Te.instancingMorph===!1&&G.morphTexture!==null||Te.envMap!==Ee||K.fog===!0&&Te.fog!==ue||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==He.numPlanes||Te.numIntersection!==He.numIntersection)||Te.vertexAlphas!==De||Te.vertexTangents!==Fe||Te.morphTargets!==Re||Te.morphNormals!==je||Te.morphColors!==it||Te.toneMapping!==rt||Te.morphTargetsCount!==qe)&&($e=!0):($e=!0,Te.__version=K.version);let Vt=Te.currentProgram;$e===!0&&(Vt=Zi(K,H,G));let Jn=!1,Dt=!1,Kr=!1;const ot=Vt.getUniforms(),Sn=Te.uniforms;if(he.useProgram(Vt.program)&&(Jn=!0,Dt=!0,Kr=!0),K.id!==v&&(v=K.id,Dt=!0),Jn||g!==P){ot.setValue(L,"projectionMatrix",P.projectionMatrix),ot.setValue(L,"viewMatrix",P.matrixWorldInverse);const Ot=ot.map.cameraPosition;Ot!==void 0&&Ot.setValue(L,me.setFromMatrixPosition(P.matrixWorld)),Me.logarithmicDepthBuffer&&ot.setValue(L,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ot.setValue(L,"isOrthographic",P.isOrthographicCamera===!0),g!==P&&(g=P,Dt=!0,Kr=!0)}if(G.isSkinnedMesh){ot.setOptional(L,G,"bindMatrix"),ot.setOptional(L,G,"bindMatrixInverse");const Ot=G.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),ot.setValue(L,"boneTexture",Ot.boneTexture,be))}G.isBatchedMesh&&(ot.setOptional(L,G,"batchingTexture"),ot.setValue(L,"batchingTexture",G._matricesTexture,be),ot.setOptional(L,G,"batchingIdTexture"),ot.setValue(L,"batchingIdTexture",G._indirectTexture,be),ot.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&ot.setValue(L,"batchingColorTexture",G._colorsTexture,be));const Zr=$.morphAttributes;if((Zr.position!==void 0||Zr.normal!==void 0||Zr.color!==void 0)&&Xe.update(G,$,Vt),(Dt||Te.receiveShadow!==G.receiveShadow)&&(Te.receiveShadow=G.receiveShadow,ot.setValue(L,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Sn.envMap.value=Ee,Sn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&H.environment!==null&&(Sn.envMapIntensity.value=H.environmentIntensity),Dt&&(ot.setValue(L,"toneMappingExposure",y.toneMappingExposure),Te.needsLights&&sc(Sn,Kr),ue&&K.fog===!0&&Ce.refreshFogUniforms(Sn,ue),Ce.refreshMaterialUniforms(Sn,K,X,N,f.state.transmissionRenderTarget[P.id]),Pr.upload(L,Ba(Te),Sn,be)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Pr.upload(L,Ba(Te),Sn,be),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ot.setValue(L,"center",G.center),ot.setValue(L,"modelViewMatrix",G.modelViewMatrix),ot.setValue(L,"normalMatrix",G.normalMatrix),ot.setValue(L,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ot=K.uniformsGroups;for(let Jr=0,oc=Ot.length;Jr<oc;Jr++){const Ha=Ot[Jr];tt.update(Ha,Vt),tt.bind(Ha,Vt)}}return Vt}function sc(P,H){P.ambientLightColor.needsUpdate=H,P.lightProbe.needsUpdate=H,P.directionalLights.needsUpdate=H,P.directionalLightShadows.needsUpdate=H,P.pointLights.needsUpdate=H,P.pointLightShadows.needsUpdate=H,P.spotLights.needsUpdate=H,P.spotLightShadows.needsUpdate=H,P.rectAreaLights.needsUpdate=H,P.hemisphereLights.needsUpdate=H}function ac(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,H,$){Ae.get(P.texture).__webglTexture=H,Ae.get(P.depthTexture).__webglTexture=$;const K=Ae.get(P);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,H){const $=Ae.get(P);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(P,H=0,$=0){C=P,F=H,b=$;let K=!0,G=null,ue=!1,ge=!1;if(P){const Ee=Ae.get(P);Ee.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(L.FRAMEBUFFER,null),K=!1):Ee.__webglFramebuffer===void 0?be.setupRenderTarget(P):Ee.__hasExternalTextures&&be.rebindTextures(P,Ae.get(P.texture).__webglTexture,Ae.get(P.depthTexture).__webglTexture);const De=P.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ge=!0);const Fe=Ae.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Fe[H])?G=Fe[H][$]:G=Fe[H],ue=!0):P.samples>0&&be.useMultisampledRTT(P)===!1?G=Ae.get(P).__webglMultisampledFramebuffer:Array.isArray(Fe)?G=Fe[$]:G=Fe,d.copy(P.viewport),E.copy(P.scissor),D=P.scissorTest}else d.copy(te).multiplyScalar(X).floor(),E.copy(pe).multiplyScalar(X).floor(),D=Pe;if(he.bindFramebuffer(L.FRAMEBUFFER,G)&&K&&he.drawBuffers(P,G),he.viewport(d),he.scissor(E),he.setScissorTest(D),ue){const Ee=Ae.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ee.__webglTexture,$)}else if(ge){const Ee=Ae.get(P.texture),De=H||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.__webglTexture,$||0,De)}v=-1},this.readRenderTargetPixels=function(P,H,$,K,G,ue,ge){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ae.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){he.bindFramebuffer(L.FRAMEBUFFER,Se);try{const Ee=P.texture,De=Ee.format,Fe=Ee.type;if(!Me.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=P.width-K&&$>=0&&$<=P.height-G&&L.readPixels(H,$,K,G,Ue.convert(De),Ue.convert(Fe),ue)}finally{const Ee=C!==null?Ae.get(C).__webglFramebuffer:null;he.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(P,H,$,K,G,ue,ge){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ae.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){he.bindFramebuffer(L.FRAMEBUFFER,Se);try{const Ee=P.texture,De=Ee.format,Fe=Ee.type;if(!Me.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=P.width-K&&$>=0&&$<=P.height-G){const Re=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(H,$,K,G,Ue.convert(De),Ue.convert(Fe),0),L.flush();const je=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await _u(L,je,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue)}finally{L.deleteBuffer(Re),L.deleteSync(je)}return ue}}finally{const Ee=C!==null?Ae.get(C).__webglFramebuffer:null;he.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(P,H=null,$=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,P=arguments[1]);const K=Math.pow(2,-$),G=Math.floor(P.image.width*K),ue=Math.floor(P.image.height*K),ge=H!==null?H.x:0,Se=H!==null?H.y:0;be.setTexture2D(P,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,ge,Se,G,ue),he.unbindTexture()},this.copyTextureToTexture=function(P,H,$=null,K=null,G=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,P=arguments[1],H=arguments[2],G=arguments[3]||0,$=null);let ue,ge,Se,Ee,De,Fe;$!==null?(ue=$.max.x-$.min.x,ge=$.max.y-$.min.y,Se=$.min.x,Ee=$.min.y):(ue=P.image.width,ge=P.image.height,Se=0,Ee=0),K!==null?(De=K.x,Fe=K.y):(De=0,Fe=0);const Re=Ue.convert(H.format),je=Ue.convert(H.type);be.setTexture2D(H,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const it=L.getParameter(L.UNPACK_ROW_LENGTH),rt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Lt=L.getParameter(L.UNPACK_SKIP_PIXELS),qe=L.getParameter(L.UNPACK_SKIP_ROWS),Te=L.getParameter(L.UNPACK_SKIP_IMAGES),gt=P.isCompressedTexture?P.mipmaps[G]:P.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Se),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ee),P.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,G,De,Fe,ue,ge,Re,je,gt.data):P.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,G,De,Fe,gt.width,gt.height,Re,gt.data):L.texSubImage2D(L.TEXTURE_2D,G,De,Fe,ue,ge,Re,je,gt),L.pixelStorei(L.UNPACK_ROW_LENGTH,it),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,rt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Lt),L.pixelStorei(L.UNPACK_SKIP_ROWS,qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Te),G===0&&H.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(P,H,$=null,K=null,G=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,K=arguments[1]||null,P=arguments[2],H=arguments[3],G=arguments[4]||0);let ue,ge,Se,Ee,De,Fe,Re,je,it;const rt=P.isCompressedTexture?P.mipmaps[G]:P.image;$!==null?(ue=$.max.x-$.min.x,ge=$.max.y-$.min.y,Se=$.max.z-$.min.z,Ee=$.min.x,De=$.min.y,Fe=$.min.z):(ue=rt.width,ge=rt.height,Se=rt.depth,Ee=0,De=0,Fe=0),K!==null?(Re=K.x,je=K.y,it=K.z):(Re=0,je=0,it=0);const Lt=Ue.convert(H.format),qe=Ue.convert(H.type);let Te;if(H.isData3DTexture)be.setTexture3D(H,0),Te=L.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)be.setTexture2DArray(H,0),Te=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const gt=L.getParameter(L.UNPACK_ROW_LENGTH),$e=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Vt=L.getParameter(L.UNPACK_SKIP_PIXELS),Jn=L.getParameter(L.UNPACK_SKIP_ROWS),Dt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,rt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,rt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Fe),P.isDataTexture||P.isData3DTexture?L.texSubImage3D(Te,G,Re,je,it,ue,ge,Se,Lt,qe,rt.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,G,Re,je,it,ue,ge,Se,Lt,rt.data):L.texSubImage3D(Te,G,Re,je,it,ue,ge,Se,Lt,qe,rt),L.pixelStorei(L.UNPACK_ROW_LENGTH,gt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$e),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Vt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Jn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Dt),G===0&&H.generateMipmaps&&L.generateMipmap(Te),he.unbindTexture()},this.initRenderTarget=function(P){Ae.get(P).__webglFramebuffer===void 0&&be.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?be.setTextureCube(P,0):P.isData3DTexture?be.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?be.setTexture2DArray(P,0):be.setTexture2D(P,0),he.unbindTexture()},this.resetState=function(){F=0,b=0,C=null,he.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ma?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===kr?"display-p3":"srgb"}}class jl extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Sr=new k,zo=new k;class Rm extends Tt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,r=t.length;n<r;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const r=this.levels;let s;for(s=0;s<r.length&&!(t<r[s].distance);s++);return r.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,r;for(n=1,r=t.length;n<r;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Sr.setFromMatrixPosition(this.matrixWorld);const r=e.ray.origin.distanceTo(Sr);this.getObjectForDistance(r).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Sr.setFromMatrixPosition(e.matrixWorld),zo.setFromMatrixPosition(this.matrixWorld);const n=Sr.distanceTo(zo)/e.zoom;t[0].object.visible=!0;let r,s;for(r=1,s=t.length;r<s;r++){let a=t[r].distance;if(t[r].object.visible&&(a-=a*t[r].hysteresis),n>=a)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<s;r++)t[r].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let r=0,s=n.length;r<s;r++){const a=n[r];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}class Pm extends wt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=At,h=At,p,m){super(null,a,o,l,c,h,r,s,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr extends Fn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],p=new k,m=new k,_=[],x=[],S=[],f=[];for(let u=0;u<=n;u++){const T=[],y=u/n;let R=0;u===0&&a===0?R=.5/t:u===n&&l===Math.PI&&(R=-.5/t);for(let F=0;F<=t;F++){const b=F/t;p.x=-e*Math.cos(r+b*s)*Math.sin(a+y*o),p.y=e*Math.cos(a+y*o),p.z=e*Math.sin(r+b*s)*Math.sin(a+y*o),x.push(p.x,p.y,p.z),m.copy(p).normalize(),S.push(m.x,m.y,m.z),f.push(b+R,1-y),T.push(c++)}h.push(T)}for(let u=0;u<n;u++)for(let T=0;T<t;T++){const y=h[u][T+1],R=h[u][T],F=h[u+1][T],b=h[u+1][T+1];(u!==0||a>0)&&_.push(y,R,b),(u!==n-1||l<Math.PI)&&_.push(R,F,b)}this.setIndex(_),this.setAttribute("position",new Zt(x,3)),this.setAttribute("normal",new Zt(S,3)),this.setAttribute("uv",new Zt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Aa extends Di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bl,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lm extends Aa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const Ho={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Dm{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){const p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,m=c.length;p<m;p+=2){const _=c[p],x=c[p+1];if(_.global&&(_.lastIndex=0),_.test(h))return x}return null}}}const Im=new Dm;class wa{constructor(e){this.manager=e!==void 0?e:Im,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wa.DEFAULT_MATERIAL_NAME="__DEFAULT";const ln={};class Um extends Error{constructor(e,t){super(e),this.response=t}}class Nm extends wa{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ho.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ln[e]!==void 0){ln[e].push({onLoad:t,onProgress:n,onError:r});return}ln[e]=[],ln[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ln[e],p=c.body.getReader(),m=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),_=m?parseInt(m):0,x=_!==0;let S=0;const f=new ReadableStream({start(u){T();function T(){p.read().then(({done:y,value:R})=>{if(y)u.close();else{S+=R.byteLength;const F=new ProgressEvent("progress",{lengthComputable:x,loaded:S,total:_});for(let b=0,C=h.length;b<C;b++){const v=h[b];v.onProgress&&v.onProgress(F)}u.enqueue(R),T()}},y=>{u.error(y)})}}});return new Response(f)}else throw new Um(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const p=/charset="?([^;"\s]*)"?/i.exec(o),m=p&&p[1]?p[1].toLowerCase():void 0,_=new TextDecoder(m);return c.arrayBuffer().then(x=>_.decode(x))}}}).then(c=>{Ho.add(e,c);const h=ln[e];delete ln[e];for(let p=0,m=h.length;p<m;p++){const _=h[p];_.onLoad&&_.onLoad(c)}}).catch(c=>{const h=ln[e];if(h===void 0)throw this.manager.itemError(e),c;delete ln[e];for(let p=0,m=h.length;p<m;p++){const _=h[p];_.onError&&_.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Fm extends wa{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new Pm,o=new Nm(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(r!==void 0)r(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:dn,a.wrapT=c.wrapT!==void 0?c.wrapT:dn,a.magFilter=c.magFilter!==void 0?c.magFilter:vt,a.minFilter=c.minFilter!==void 0?c.minFilter:vt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Dn),c.mipmapCount===1&&(a.minFilter=vt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,r),a}}class Om extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const As=new Je,ko=new k,Vo=new k;class Bm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vr,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ko.setFromMatrixPosition(e.matrixWorld),t.position.copy(ko),Vo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vo),t.updateMatrixWorld(),As.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(As),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(As)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Go=new Je,zi=new k,ws=new k;class zm extends Bm{constructor(){super(new bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),zi.setFromMatrixPosition(e.matrixWorld),n.position.copy(zi),ws.copy(n.position),ws.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ws),n.updateMatrixWorld(),r.makeTranslation(-zi.x,-zi.y,-zi.z),Go.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go)}}class Ta extends Om{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new zm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}const Wo=new Je,Xo=new Je,Xn=new Je;class Hm{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new bt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new bt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Xn.copy(e.projectionMatrix);const r=t.eyeSep/2,s=r*t.near/t.focus,a=t.near*Math.tan(bi*t.fov*.5)/t.zoom;let o,l;Xo.elements[12]=-r,Wo.elements[12]=r,o=-a*t.aspect+s,l=a*t.aspect+s,Xn.elements[0]=2*t.near/(l-o),Xn.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Xn),o=-a*t.aspect-s,l=a*t.aspect-s,Xn.elements[0]=2*t.near/(l-o),Xn.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Xn)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Xo),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Wo)}}class km{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Yo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Yo(){return(typeof performance>"u"?Date:performance).now()}class Nt{constructor(e){this.value=e}clone(){return new Nt(this.value.clone===void 0?this.value:this.value.clone())}}class jo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Vm extends yt{constructor(e,t,n){const r=new Wr(t,4,2),s=new Ea({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);const qo={type:"change"},Ts={type:"start"},$o={type:"end"},Er=new Ll,Ko=new Pn,Gm=Math.cos(70*wl.DEG2RAD);class Wm extends Zn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qn.ROTATE,MIDDLE:Qn.DOLLY,RIGHT:Qn.PAN},this.touches={ONE:ei.ROTATE,TWO:ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",_e),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_e),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(qo),n.update(),s=r.NONE},this.update=function(){const M=new k,Y=new Kn().setFromUnitVectors(e.up,new k(0,1,0)),q=Y.clone().invert(),Z=new k,oe=new Kn,we=new k,Ne=2*Math.PI;return function(ct=null){const Ye=n.object.position;M.copy(Ye).sub(n.target),M.applyQuaternion(Y),o.setFromVector3(M),n.autoRotate&&s===r.NONE&&D(d(ct)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ut=n.minAzimuthAngle,at=n.maxAzimuthAngle;isFinite(ut)&&isFinite(at)&&(ut<-Math.PI?ut+=Ne:ut>Math.PI&&(ut-=Ne),at<-Math.PI?at+=Ne:at>Math.PI&&(at-=Ne),ut<=at?o.theta=Math.max(ut,Math.min(at,o.theta)):o.theta=o.theta>(ut+at)/2?Math.max(ut,o.theta):Math.min(at,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let yn=!1;if(n.zoomToCursor&&b||n.object.isOrthographicCamera)o.radius=te(o.radius);else{const mt=o.radius;o.radius=te(o.radius*c),yn=mt!=o.radius}if(M.setFromSpherical(o),M.applyQuaternion(q),Ye.copy(n.target).add(M),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&b){let mt=null;if(n.object.isPerspectiveCamera){const tn=M.length();mt=te(tn*c);const Bn=tn-mt;n.object.position.addScaledVector(R,Bn),n.object.updateMatrixWorld(),yn=!!Bn}else if(n.object.isOrthographicCamera){const tn=new k(F.x,F.y,0);tn.unproject(n.object);const Bn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),yn=Bn!==n.object.zoom;const Ui=new k(F.x,F.y,0);Ui.unproject(n.object),n.object.position.sub(Ui).add(tn),n.object.updateMatrixWorld(),mt=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;mt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(mt).add(n.object.position):(Er.origin.copy(n.object.position),Er.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Er.direction))<Gm?e.lookAt(n.target):(Ko.setFromNormalAndCoplanarPoint(n.object.up,n.target),Er.intersectPlane(Ko,n.target))))}else if(n.object.isOrthographicCamera){const mt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),mt!==n.object.zoom&&(n.object.updateProjectionMatrix(),yn=!0)}return c=1,b=!1,yn||Z.distanceToSquared(n.object.position)>a||8*(1-oe.dot(n.object.quaternion))>a||we.distanceToSquared(n.target)>a?(n.dispatchEvent(qo),Z.copy(n.object.position),oe.copy(n.object.quaternion),we.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ve),n.domElement.removeEventListener("pointerdown",be),n.domElement.removeEventListener("pointercancel",A),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("pointermove",U),n.domElement.removeEventListener("pointerup",A),n.domElement.getRootNode().removeEventListener("keydown",Ce,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_e),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new jo,l=new jo;let c=1;const h=new k,p=new Be,m=new Be,_=new Be,x=new Be,S=new Be,f=new Be,u=new Be,T=new Be,y=new Be,R=new k,F=new Be;let b=!1;const C=[],v={};let g=!1;function d(M){return M!==null?2*Math.PI/60*n.autoRotateSpeed*M:2*Math.PI/60/60*n.autoRotateSpeed}function E(M){const Y=Math.abs(M*.01);return Math.pow(.95,n.zoomSpeed*Y)}function D(M){l.theta-=M}function B(M){l.phi-=M}const z=function(){const M=new k;return function(q,Z){M.setFromMatrixColumn(Z,0),M.multiplyScalar(-q),h.add(M)}}(),V=function(){const M=new k;return function(q,Z){n.screenSpacePanning===!0?M.setFromMatrixColumn(Z,1):(M.setFromMatrixColumn(Z,0),M.crossVectors(n.object.up,M)),M.multiplyScalar(q),h.add(M)}}(),N=function(){const M=new k;return function(q,Z){const oe=n.domElement;if(n.object.isPerspectiveCamera){const we=n.object.position;M.copy(we).sub(n.target);let Ne=M.length();Ne*=Math.tan(n.object.fov/2*Math.PI/180),z(2*q*Ne/oe.clientHeight,n.object.matrix),V(2*Z*Ne/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(q*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),V(Z*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function se(M,Y){if(!n.zoomToCursor)return;b=!0;const q=n.domElement.getBoundingClientRect(),Z=M-q.left,oe=Y-q.top,we=q.width,Ne=q.height;F.x=Z/we*2-1,F.y=-(oe/Ne)*2+1,R.set(F.x,F.y,1).unproject(n.object).sub(n.object.position).normalize()}function te(M){return Math.max(n.minDistance,Math.min(n.maxDistance,M))}function pe(M){p.set(M.clientX,M.clientY)}function Pe(M){se(M.clientX,M.clientX),u.set(M.clientX,M.clientY)}function Ie(M){x.set(M.clientX,M.clientY)}function J(M){m.set(M.clientX,M.clientY),_.subVectors(m,p).multiplyScalar(n.rotateSpeed);const Y=n.domElement;D(2*Math.PI*_.x/Y.clientHeight),B(2*Math.PI*_.y/Y.clientHeight),p.copy(m),n.update()}function le(M){T.set(M.clientX,M.clientY),y.subVectors(T,u),y.y>0?X(E(y.y)):y.y<0&&j(E(y.y)),u.copy(T),n.update()}function xe(M){S.set(M.clientX,M.clientY),f.subVectors(S,x).multiplyScalar(n.panSpeed),N(f.x,f.y),x.copy(S),n.update()}function me(M){se(M.clientX,M.clientY),M.deltaY<0?j(E(M.deltaY)):M.deltaY>0&&X(E(M.deltaY)),n.update()}function Q(M){let Y=!1;switch(M.code){case n.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),Y=!0;break;case n.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),Y=!0;break;case n.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),Y=!0;break;case n.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),Y=!0;break}Y&&(M.preventDefault(),n.update())}function w(M){if(C.length===1)p.set(M.pageX,M.pageY);else{const Y=ze(M),q=.5*(M.pageX+Y.x),Z=.5*(M.pageY+Y.y);p.set(q,Z)}}function I(M){if(C.length===1)x.set(M.pageX,M.pageY);else{const Y=ze(M),q=.5*(M.pageX+Y.x),Z=.5*(M.pageY+Y.y);x.set(q,Z)}}function O(M){const Y=ze(M),q=M.pageX-Y.x,Z=M.pageY-Y.y,oe=Math.sqrt(q*q+Z*Z);u.set(0,oe)}function L(M){n.enableZoom&&O(M),n.enablePan&&I(M)}function ee(M){n.enableZoom&&O(M),n.enableRotate&&w(M)}function ne(M){if(C.length==1)m.set(M.pageX,M.pageY);else{const q=ze(M),Z=.5*(M.pageX+q.x),oe=.5*(M.pageY+q.y);m.set(Z,oe)}_.subVectors(m,p).multiplyScalar(n.rotateSpeed);const Y=n.domElement;D(2*Math.PI*_.x/Y.clientHeight),B(2*Math.PI*_.y/Y.clientHeight),p.copy(m)}function Me(M){if(C.length===1)S.set(M.pageX,M.pageY);else{const Y=ze(M),q=.5*(M.pageX+Y.x),Z=.5*(M.pageY+Y.y);S.set(q,Z)}f.subVectors(S,x).multiplyScalar(n.panSpeed),N(f.x,f.y),x.copy(S)}function he(M){const Y=ze(M),q=M.pageX-Y.x,Z=M.pageY-Y.y,oe=Math.sqrt(q*q+Z*Z);T.set(0,oe),y.set(0,Math.pow(T.y/u.y,n.zoomSpeed)),X(y.y),u.copy(T);const we=(M.pageX+Y.x)*.5,Ne=(M.pageY+Y.y)*.5;se(we,Ne)}function ke(M){n.enableZoom&&he(M),n.enablePan&&Me(M)}function Ae(M){n.enableZoom&&he(M),n.enableRotate&&ne(M)}function be(M){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(M.pointerId),n.domElement.addEventListener("pointermove",U),n.domElement.addEventListener("pointerup",A)),!ye(M)&&(Xe(M),M.pointerType==="touch"?He(M):W(M)))}function U(M){n.enabled!==!1&&(M.pointerType==="touch"?ce(M):ie(M))}function A(M){switch(Le(M),C.length){case 0:n.domElement.releasePointerCapture(M.pointerId),n.domElement.removeEventListener("pointermove",U),n.domElement.removeEventListener("pointerup",A),n.dispatchEvent($o),s=r.NONE;break;case 1:const Y=C[0],q=v[Y];He({pointerId:Y,pageX:q.x,pageY:q.y});break}}function W(M){let Y;switch(M.button){case 0:Y=n.mouseButtons.LEFT;break;case 1:Y=n.mouseButtons.MIDDLE;break;case 2:Y=n.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case Qn.DOLLY:if(n.enableZoom===!1)return;Pe(M),s=r.DOLLY;break;case Qn.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enablePan===!1)return;Ie(M),s=r.PAN}else{if(n.enableRotate===!1)return;pe(M),s=r.ROTATE}break;case Qn.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enableRotate===!1)return;pe(M),s=r.ROTATE}else{if(n.enablePan===!1)return;Ie(M),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ts)}function ie(M){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;J(M);break;case r.DOLLY:if(n.enableZoom===!1)return;le(M);break;case r.PAN:if(n.enablePan===!1)return;xe(M);break}}function ae(M){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(M.preventDefault(),n.dispatchEvent(Ts),me(re(M)),n.dispatchEvent($o))}function re(M){const Y=M.deltaMode,q={clientX:M.clientX,clientY:M.clientY,deltaY:M.deltaY};switch(Y){case 1:q.deltaY*=16;break;case 2:q.deltaY*=100;break}return M.ctrlKey&&!g&&(q.deltaY*=10),q}function Ce(M){M.key==="Control"&&(g=!0,n.domElement.getRootNode().addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(M){M.key==="Control"&&(g=!1,n.domElement.getRootNode().removeEventListener("keyup",de,{passive:!0,capture:!0}))}function _e(M){n.enabled===!1||n.enablePan===!1||Q(M)}function He(M){switch(Ue(M),C.length){case 1:switch(n.touches.ONE){case ei.ROTATE:if(n.enableRotate===!1)return;w(M),s=r.TOUCH_ROTATE;break;case ei.PAN:if(n.enablePan===!1)return;I(M),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case ei.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;L(M),s=r.TOUCH_DOLLY_PAN;break;case ei.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ee(M),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ts)}function ce(M){switch(Ue(M),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ne(M),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Me(M),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ke(M),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(M),n.update();break;default:s=r.NONE}}function ve(M){n.enabled!==!1&&M.preventDefault()}function Xe(M){C.push(M.pointerId)}function Le(M){delete v[M.pointerId];for(let Y=0;Y<C.length;Y++)if(C[Y]==M.pointerId){C.splice(Y,1);return}}function ye(M){for(let Y=0;Y<C.length;Y++)if(C[Y]==M.pointerId)return!0;return!1}function Ue(M){let Y=v[M.pointerId];Y===void 0&&(Y=new Be,v[M.pointerId]=Y),Y.set(M.pageX,M.pageY)}function ze(M){const Y=M.pointerId===C[0]?C[1]:C[0];return v[Y]}n.domElement.addEventListener("contextmenu",ve),n.domElement.addEventListener("pointerdown",be),n.domElement.addEventListener("pointercancel",A),n.domElement.addEventListener("wheel",ae,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ce,{passive:!0,capture:!0}),this.update()}}class Xm extends Fm{constructor(e){super(e),this.type=fn}parse(e){const a=function(v,g){switch(v){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(g||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(g||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(g||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(g||""))}},h=`
`,p=function(v,g,d){g=g||1024;let D=v.pos,B=-1,z=0,V="",N=String.fromCharCode.apply(null,new Uint16Array(v.subarray(D,D+128)));for(;0>(B=N.indexOf(h))&&z<g&&D<v.byteLength;)V+=N,z+=N.length,D+=128,N+=String.fromCharCode.apply(null,new Uint16Array(v.subarray(D,D+128)));return-1<B?(v.pos+=z+B+1,V+N.slice(0,B)):!1},m=function(v){const g=/^#\?(\S+)/,d=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*FORMAT=(\S+)\s*$/,B=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,z={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let V,N;for((v.pos>=v.byteLength||!(V=p(v)))&&a(1,"no header found"),(N=V.match(g))||a(3,"bad initial token"),z.valid|=1,z.programtype=N[1],z.string+=V+`
`;V=p(v),V!==!1;){if(z.string+=V+`
`,V.charAt(0)==="#"){z.comments+=V+`
`;continue}if((N=V.match(d))&&(z.gamma=parseFloat(N[1])),(N=V.match(E))&&(z.exposure=parseFloat(N[1])),(N=V.match(D))&&(z.valid|=2,z.format=N[1]),(N=V.match(B))&&(z.valid|=4,z.height=parseInt(N[1],10),z.width=parseInt(N[2],10)),z.valid&2&&z.valid&4)break}return z.valid&2||a(3,"missing format specifier"),z.valid&4||a(3,"missing image size specifier"),z},_=function(v,g,d){const E=g;if(E<8||E>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);E!==(v[2]<<8|v[3])&&a(3,"wrong scanline width");const D=new Uint8Array(4*g*d);D.length||a(4,"unable to allocate buffer space");let B=0,z=0;const V=4*E,N=new Uint8Array(4),X=new Uint8Array(V);let j=d;for(;j>0&&z<v.byteLength;){z+4>v.byteLength&&a(1),N[0]=v[z++],N[1]=v[z++],N[2]=v[z++],N[3]=v[z++],(N[0]!=2||N[1]!=2||(N[2]<<8|N[3])!=E)&&a(3,"bad rgbe scanline format");let se=0,te;for(;se<V&&z<v.byteLength;){te=v[z++];const Pe=te>128;if(Pe&&(te-=128),(te===0||se+te>V)&&a(3,"bad scanline data"),Pe){const Ie=v[z++];for(let J=0;J<te;J++)X[se++]=Ie}else X.set(v.subarray(z,z+te),se),se+=te,z+=te}const pe=E;for(let Pe=0;Pe<pe;Pe++){let Ie=0;D[B]=X[Pe+Ie],Ie+=E,D[B+1]=X[Pe+Ie],Ie+=E,D[B+2]=X[Pe+Ie],Ie+=E,D[B+3]=X[Pe+Ie],B+=4}j--}return D},x=function(v,g,d,E){const D=v[g+3],B=Math.pow(2,D-128)/255;d[E+0]=v[g+0]*B,d[E+1]=v[g+1]*B,d[E+2]=v[g+2]*B,d[E+3]=1},S=function(v,g,d,E){const D=v[g+3],B=Math.pow(2,D-128)/255;d[E+0]=lr.toHalfFloat(Math.min(v[g+0]*B,65504)),d[E+1]=lr.toHalfFloat(Math.min(v[g+1]*B,65504)),d[E+2]=lr.toHalfFloat(Math.min(v[g+2]*B,65504)),d[E+3]=lr.toHalfFloat(1)},f=new Uint8Array(e);f.pos=0;const u=m(f),T=u.width,y=u.height,R=_(f.subarray(f.pos),T,y);let F,b,C;switch(this.type){case Ht:C=R.length/4;const v=new Float32Array(C*4);for(let d=0;d<C;d++)x(R,d*4,v,d*4);F=v,b=Ht;break;case fn:C=R.length/4;const g=new Uint16Array(C*4);for(let d=0;d<C;d++)S(R,d*4,g,d*4);F=g,b=fn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:T,height:y,data:F,header:u.string,gamma:u.gamma,exposure:u.exposure,type:b}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(a,o){switch(a.type){case Ht:case fn:a.colorSpace=Mn,a.minFilter=vt,a.magFilter=vt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,n,r)}}class Ym{constructor(e){const t=new Hl(-1,1,1,-1,0,1),n=new jl,r=new Hm,s={minFilter:vt,magFilter:At,format:kt},a=new gn(512,512,s),o=new gn(512,512,s),l=new _n({uniforms:{mapLeft:{value:a.texture},mapRight:{value:o.texture}},vertexShader:["varying vec2 vUv;","void main() {","	vUv = vec2( uv.x, uv.y );","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),fragmentShader:["uniform sampler2D mapLeft;","uniform sampler2D mapRight;","varying vec2 vUv;","void main() {","	vec2 uv = vUv;","	if ( ( mod( gl_FragCoord.y, 2.0 ) ) > 1.00 ) {","		gl_FragColor = texture2D( mapLeft, uv );","	} else {","		gl_FragColor = texture2D( mapRight, uv );","	}","	#include <tonemapping_fragment>","	#include <colorspace_fragment>","}"].join(`
`)}),c=new yt(new On(2,2),l);n.add(c),this.setSize=function(h,p){e.setSize(h,p);const m=e.getPixelRatio();a.setSize(h*m,p*m),o.setSize(h*m,p*m)},this.render=function(h,p){h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),r.update(p),e.setRenderTarget(a),e.clear(),e.render(h,r.cameraL),e.setRenderTarget(o),e.clear(),e.render(h,r.cameraR),e.setRenderTarget(null),e.render(n,t)}}}function Xr(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function br(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ql={exports:{}};(function(i,e){(function(t){i.exports=t()})(function(){return function t(n,r,s){function a(c,h){if(!r[c]){if(!n[c]){var p=typeof br=="function"&&br;if(!h&&p)return p(c,!0);if(o)return o(c,!0);throw new Error("Cannot find module '"+c+"'")}h=r[c]={exports:{}},n[c][0].call(h.exports,function(m){var _=n[c][1][m];return a(_||m)},h,h.exports,t,n,r,s)}return r[c].exports}for(var o=typeof br=="function"&&br,l=0;l<s.length;l++)a(s[l]);return a}({1:[function(t,n,r){(function(s,a,o,l,c,h,p,m,_){var x=t("crypto");function S(b,C){C=T(b,C);var v;return(v=C.algorithm!=="passthrough"?x.createHash(C.algorithm):new F).write===void 0&&(v.write=v.update,v.end=v.update),R(C,v).dispatch(b),v.update||v.end(""),v.digest?v.digest(C.encoding==="buffer"?void 0:C.encoding):(b=v.read(),C.encoding!=="buffer"?b.toString(C.encoding):b)}(r=n.exports=S).sha1=function(b){return S(b)},r.keys=function(b){return S(b,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},r.MD5=function(b){return S(b,{algorithm:"md5",encoding:"hex"})},r.keysMD5=function(b){return S(b,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var f=x.getHashes?x.getHashes().slice():["sha1","md5"],u=(f.push("passthrough"),["buffer","hex","binary","base64"]);function T(b,C){var v={};if(v.algorithm=(C=C||{}).algorithm||"sha1",v.encoding=C.encoding||"hex",v.excludeValues=!!C.excludeValues,v.algorithm=v.algorithm.toLowerCase(),v.encoding=v.encoding.toLowerCase(),v.ignoreUnknown=C.ignoreUnknown===!0,v.respectType=C.respectType!==!1,v.respectFunctionNames=C.respectFunctionNames!==!1,v.respectFunctionProperties=C.respectFunctionProperties!==!1,v.unorderedArrays=C.unorderedArrays===!0,v.unorderedSets=C.unorderedSets!==!1,v.unorderedObjects=C.unorderedObjects!==!1,v.replacer=C.replacer||void 0,v.excludeKeys=C.excludeKeys||void 0,b===void 0)throw new Error("Object argument required.");for(var g=0;g<f.length;++g)f[g].toLowerCase()===v.algorithm.toLowerCase()&&(v.algorithm=f[g]);if(f.indexOf(v.algorithm)===-1)throw new Error('Algorithm "'+v.algorithm+'"  not supported. supported values: '+f.join(", "));if(u.indexOf(v.encoding)===-1&&v.algorithm!=="passthrough")throw new Error('Encoding "'+v.encoding+'"  not supported. supported values: '+u.join(", "));return v}function y(b){if(typeof b=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(b))!=null}function R(b,C,v){v=v||[];function g(d){return C.update?C.update(d,"utf8"):C.write(d,"utf8")}return{dispatch:function(d){return this["_"+((d=b.replacer?b.replacer(d):d)===null?"null":typeof d)](d)},_object:function(d){var E,D=Object.prototype.toString.call(d),B=/\[object (.*)\]/i.exec(D);if(B=(B=B?B[1]:"unknown:["+D+"]").toLowerCase(),0<=(D=v.indexOf(d)))return this.dispatch("[CIRCULAR:"+D+"]");if(v.push(d),o!==void 0&&o.isBuffer&&o.isBuffer(d))return g("buffer:"),g(d);if(B==="object"||B==="function"||B==="asyncfunction")return D=Object.keys(d),b.unorderedObjects&&(D=D.sort()),b.respectType===!1||y(d)||D.splice(0,0,"prototype","__proto__","constructor"),b.excludeKeys&&(D=D.filter(function(z){return!b.excludeKeys(z)})),g("object:"+D.length+":"),E=this,D.forEach(function(z){E.dispatch(z),g(":"),b.excludeValues||E.dispatch(d[z]),g(",")});if(!this["_"+B]){if(b.ignoreUnknown)return g("["+B+"]");throw new Error('Unknown object type "'+B+'"')}this["_"+B](d)},_array:function(d,z){z=z!==void 0?z:b.unorderedArrays!==!1;var D=this;if(g("array:"+d.length+":"),!z||d.length<=1)return d.forEach(function(V){return D.dispatch(V)});var B=[],z=d.map(function(V){var N=new F,X=v.slice();return R(b,N,X).dispatch(V),B=B.concat(X.slice(v.length)),N.read().toString()});return v=v.concat(B),z.sort(),this._array(z,!1)},_date:function(d){return g("date:"+d.toJSON())},_symbol:function(d){return g("symbol:"+d.toString())},_error:function(d){return g("error:"+d.toString())},_boolean:function(d){return g("bool:"+d.toString())},_string:function(d){g("string:"+d.length+":"),g(d.toString())},_function:function(d){g("fn:"),y(d)?this.dispatch("[native]"):this.dispatch(d.toString()),b.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(d.name)),b.respectFunctionProperties&&this._object(d)},_number:function(d){return g("number:"+d.toString())},_xml:function(d){return g("xml:"+d.toString())},_null:function(){return g("Null")},_undefined:function(){return g("Undefined")},_regexp:function(d){return g("regex:"+d.toString())},_uint8array:function(d){return g("uint8array:"),this.dispatch(Array.prototype.slice.call(d))},_uint8clampedarray:function(d){return g("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(d))},_int8array:function(d){return g("int8array:"),this.dispatch(Array.prototype.slice.call(d))},_uint16array:function(d){return g("uint16array:"),this.dispatch(Array.prototype.slice.call(d))},_int16array:function(d){return g("int16array:"),this.dispatch(Array.prototype.slice.call(d))},_uint32array:function(d){return g("uint32array:"),this.dispatch(Array.prototype.slice.call(d))},_int32array:function(d){return g("int32array:"),this.dispatch(Array.prototype.slice.call(d))},_float32array:function(d){return g("float32array:"),this.dispatch(Array.prototype.slice.call(d))},_float64array:function(d){return g("float64array:"),this.dispatch(Array.prototype.slice.call(d))},_arraybuffer:function(d){return g("arraybuffer:"),this.dispatch(new Uint8Array(d))},_url:function(d){return g("url:"+d.toString())},_map:function(d){return g("map:"),d=Array.from(d),this._array(d,b.unorderedSets!==!1)},_set:function(d){return g("set:"),d=Array.from(d),this._array(d,b.unorderedSets!==!1)},_file:function(d){return g("file:"),this.dispatch([d.name,d.size,d.type,d.lastModfied])},_blob:function(){if(b.ignoreUnknown)return g("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return g("domwindow")},_bigint:function(d){return g("bigint:"+d.toString())},_process:function(){return g("process")},_timer:function(){return g("timer")},_pipe:function(){return g("pipe")},_tcp:function(){return g("tcp")},_udp:function(){return g("udp")},_tty:function(){return g("tty")},_statwatcher:function(){return g("statwatcher")},_securecontext:function(){return g("securecontext")},_connection:function(){return g("connection")},_zlib:function(){return g("zlib")},_context:function(){return g("context")},_nodescript:function(){return g("nodescript")},_httpparser:function(){return g("httpparser")},_dataview:function(){return g("dataview")},_signal:function(){return g("signal")},_fsevent:function(){return g("fsevent")},_tlswrap:function(){return g("tlswrap")}}}function F(){return{buf:"",write:function(b){this.buf+=b},end:function(b){this.buf+=b},read:function(){return this.buf}}}r.writeToStream=function(b,C,v){return v===void 0&&(v=C,C={}),R(C=T(b,C),v).dispatch(b)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(t,n,r){(function(s,a,o,l,c,h,p,m,_){(function(x){var S=typeof Uint8Array<"u"?Uint8Array:Array,f=43,u=47,T=48,y=97,R=65,F=45,b=95;function C(v){return v=v.charCodeAt(0),v===f||v===F?62:v===u||v===b?63:v<T?-1:v<T+10?v-T+26+26:v<R+26?v-R:v<y+26?v-y+26:void 0}x.toByteArray=function(v){var g,d;if(0<v.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var E=v.length,E=v.charAt(E-2)==="="?2:v.charAt(E-1)==="="?1:0,D=new S(3*v.length/4-E),B=0<E?v.length-4:v.length,z=0;function V(N){D[z++]=N}for(g=0;g<B;g+=4,0)V((16711680&(d=C(v.charAt(g))<<18|C(v.charAt(g+1))<<12|C(v.charAt(g+2))<<6|C(v.charAt(g+3))))>>16),V((65280&d)>>8),V(255&d);return E==2?V(255&(d=C(v.charAt(g))<<2|C(v.charAt(g+1))>>4)):E==1&&(V((d=C(v.charAt(g))<<10|C(v.charAt(g+1))<<4|C(v.charAt(g+2))>>2)>>8&255),V(255&d)),D},x.fromByteArray=function(v){var g,d,E,D,B=v.length%3,z="";function V(N){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(N)}for(g=0,E=v.length-B;g<E;g+=3)d=(v[g]<<16)+(v[g+1]<<8)+v[g+2],z+=V((D=d)>>18&63)+V(D>>12&63)+V(D>>6&63)+V(63&D);switch(B){case 1:z=(z+=V((d=v[v.length-1])>>2))+V(d<<4&63)+"==";break;case 2:z=(z=(z+=V((d=(v[v.length-2]<<8)+v[v.length-1])>>10))+V(d>>4&63))+V(d<<2&63)+"="}return z}})(r===void 0?this.base64js={}:r)}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(t,n,r){(function(s,a,f,l,c,h,p,m,_){var x=t("base64-js"),S=t("ieee754");function f(w,I,O){if(!(this instanceof f))return new f(w,I,O);var L,ee,ne,Me,he=typeof w;if(I==="base64"&&he=="string")for(w=(Me=w).trim?Me.trim():Me.replace(/^\s+|\s+$/g,"");w.length%4!=0;)w+="=";if(he=="number")L=j(w);else if(he=="string")L=f.byteLength(w,I);else{if(he!="object")throw new Error("First argument needs to be a number, array or string.");L=j(w.length)}if(f._useTypedArrays?ee=f._augment(new Uint8Array(L)):((ee=this).length=L,ee._isBuffer=!0),f._useTypedArrays&&typeof w.byteLength=="number")ee._set(w);else if(se(Me=w)||f.isBuffer(Me)||Me&&typeof Me=="object"&&typeof Me.length=="number")for(ne=0;ne<L;ne++)f.isBuffer(w)?ee[ne]=w.readUInt8(ne):ee[ne]=w[ne];else if(he=="string")ee.write(w,0,I);else if(he=="number"&&!f._useTypedArrays&&!O)for(ne=0;ne<L;ne++)ee[ne]=0;return ee}function u(w,I,O,L){return f._charsWritten=Ie(function(ee){for(var ne=[],Me=0;Me<ee.length;Me++)ne.push(255&ee.charCodeAt(Me));return ne}(I),w,O,L)}function T(w,I,O,L){return f._charsWritten=Ie(function(ee){for(var ne,Me,he=[],ke=0;ke<ee.length;ke++)Me=ee.charCodeAt(ke),ne=Me>>8,Me=Me%256,he.push(Me),he.push(ne);return he}(I),w,O,L)}function y(w,I,O){var L="";O=Math.min(w.length,O);for(var ee=I;ee<O;ee++)L+=String.fromCharCode(w[ee]);return L}function R(w,I,O,ne){ne||(Q(typeof O=="boolean","missing or invalid endian"),Q(I!=null,"missing offset"),Q(I+1<w.length,"Trying to read beyond buffer length"));var ee,ne=w.length;if(!(ne<=I))return O?(ee=w[I],I+1<ne&&(ee|=w[I+1]<<8)):(ee=w[I]<<8,I+1<ne&&(ee|=w[I+1])),ee}function F(w,I,O,ne){ne||(Q(typeof O=="boolean","missing or invalid endian"),Q(I!=null,"missing offset"),Q(I+3<w.length,"Trying to read beyond buffer length"));var ee,ne=w.length;if(!(ne<=I))return O?(I+2<ne&&(ee=w[I+2]<<16),I+1<ne&&(ee|=w[I+1]<<8),ee|=w[I],I+3<ne&&(ee+=w[I+3]<<24>>>0)):(I+1<ne&&(ee=w[I+1]<<16),I+2<ne&&(ee|=w[I+2]<<8),I+3<ne&&(ee|=w[I+3]),ee+=w[I]<<24>>>0),ee}function b(w,I,O,L){if(L||(Q(typeof O=="boolean","missing or invalid endian"),Q(I!=null,"missing offset"),Q(I+1<w.length,"Trying to read beyond buffer length")),!(w.length<=I))return L=R(w,I,O,!0),32768&L?-1*(65535-L+1):L}function C(w,I,O,L){if(L||(Q(typeof O=="boolean","missing or invalid endian"),Q(I!=null,"missing offset"),Q(I+3<w.length,"Trying to read beyond buffer length")),!(w.length<=I))return L=F(w,I,O,!0),2147483648&L?-1*(4294967295-L+1):L}function v(w,I,O,L){return L||(Q(typeof O=="boolean","missing or invalid endian"),Q(I+3<w.length,"Trying to read beyond buffer length")),S.read(w,I,O,23,4)}function g(w,I,O,L){return L||(Q(typeof O=="boolean","missing or invalid endian"),Q(I+7<w.length,"Trying to read beyond buffer length")),S.read(w,I,O,52,8)}function d(w,I,O,L,ee){if(ee||(Q(I!=null,"missing value"),Q(typeof L=="boolean","missing or invalid endian"),Q(O!=null,"missing offset"),Q(O+1<w.length,"trying to write beyond buffer length"),le(I,65535)),ee=w.length,!(ee<=O))for(var ne=0,Me=Math.min(ee-O,2);ne<Me;ne++)w[O+ne]=(I&255<<8*(L?ne:1-ne))>>>8*(L?ne:1-ne)}function E(w,I,O,L,ee){if(ee||(Q(I!=null,"missing value"),Q(typeof L=="boolean","missing or invalid endian"),Q(O!=null,"missing offset"),Q(O+3<w.length,"trying to write beyond buffer length"),le(I,4294967295)),ee=w.length,!(ee<=O))for(var ne=0,Me=Math.min(ee-O,4);ne<Me;ne++)w[O+ne]=I>>>8*(L?ne:3-ne)&255}function D(w,I,O,L,ee){ee||(Q(I!=null,"missing value"),Q(typeof L=="boolean","missing or invalid endian"),Q(O!=null,"missing offset"),Q(O+1<w.length,"Trying to write beyond buffer length"),xe(I,32767,-32768)),w.length<=O||d(w,0<=I?I:65535+I+1,O,L,ee)}function B(w,I,O,L,ee){ee||(Q(I!=null,"missing value"),Q(typeof L=="boolean","missing or invalid endian"),Q(O!=null,"missing offset"),Q(O+3<w.length,"Trying to write beyond buffer length"),xe(I,2147483647,-2147483648)),w.length<=O||E(w,0<=I?I:4294967295+I+1,O,L,ee)}function z(w,I,O,L,ee){ee||(Q(I!=null,"missing value"),Q(typeof L=="boolean","missing or invalid endian"),Q(O!=null,"missing offset"),Q(O+3<w.length,"Trying to write beyond buffer length"),me(I,34028234663852886e22,-34028234663852886e22)),w.length<=O||S.write(w,I,O,L,23,4)}function V(w,I,O,L,ee){ee||(Q(I!=null,"missing value"),Q(typeof L=="boolean","missing or invalid endian"),Q(O!=null,"missing offset"),Q(O+7<w.length,"Trying to write beyond buffer length"),me(I,17976931348623157e292,-17976931348623157e292)),w.length<=O||S.write(w,I,O,L,52,8)}r.Buffer=f,r.SlowBuffer=f,r.INSPECT_MAX_BYTES=50,f.poolSize=8192,f._useTypedArrays=function(){try{var w=new ArrayBuffer(0),I=new Uint8Array(w);return I.foo=function(){return 42},I.foo()===42&&typeof I.subarray=="function"}catch{return!1}}(),f.isEncoding=function(w){switch(String(w).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.isBuffer=function(w){return!(w==null||!w._isBuffer)},f.byteLength=function(w,I){var O;switch(w+="",I||"utf8"){case"hex":O=w.length/2;break;case"utf8":case"utf-8":O=pe(w).length;break;case"ascii":case"binary":case"raw":O=w.length;break;case"base64":O=Pe(w).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":O=2*w.length;break;default:throw new Error("Unknown encoding")}return O},f.concat=function(w,I){if(Q(se(w),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),w.length===0)return new f(0);if(w.length===1)return w[0];if(typeof I!="number")for(ee=I=0;ee<w.length;ee++)I+=w[ee].length;for(var O=new f(I),L=0,ee=0;ee<w.length;ee++){var ne=w[ee];ne.copy(O,L),L+=ne.length}return O},f.prototype.write=function(w,I,O,L){isFinite(I)?isFinite(O)||(L=O,O=void 0):(ke=L,L=I,I=O,O=ke),I=Number(I)||0;var ee,ne,Me,he,ke=this.length-I;switch((!O||ke<(O=Number(O)))&&(O=ke),L=String(L||"utf8").toLowerCase()){case"hex":ee=function(Ae,be,U,A){U=Number(U)||0;var W=Ae.length-U;(!A||W<(A=Number(A)))&&(A=W),Q((W=be.length)%2==0,"Invalid hex string"),W/2<A&&(A=W/2);for(var ie=0;ie<A;ie++){var ae=parseInt(be.substr(2*ie,2),16);Q(!isNaN(ae),"Invalid hex string"),Ae[U+ie]=ae}return f._charsWritten=2*ie,ie}(this,w,I,O);break;case"utf8":case"utf-8":ne=this,Me=I,he=O,ee=f._charsWritten=Ie(pe(w),ne,Me,he);break;case"ascii":case"binary":ee=u(this,w,I,O);break;case"base64":ne=this,Me=I,he=O,ee=f._charsWritten=Ie(Pe(w),ne,Me,he);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":ee=T(this,w,I,O);break;default:throw new Error("Unknown encoding")}return ee},f.prototype.toString=function(w,I,O){var L,ee,ne,Me,he=this;if(w=String(w||"utf8").toLowerCase(),I=Number(I)||0,(O=O!==void 0?Number(O):he.length)===I)return"";switch(w){case"hex":L=function(ke,Ae,be){var U=ke.length;(!Ae||Ae<0)&&(Ae=0),(!be||be<0||U<be)&&(be=U);for(var A="",W=Ae;W<be;W++)A+=te(ke[W]);return A}(he,I,O);break;case"utf8":case"utf-8":L=function(ke,Ae,be){var U="",A="";be=Math.min(ke.length,be);for(var W=Ae;W<be;W++)ke[W]<=127?(U+=J(A)+String.fromCharCode(ke[W]),A=""):A+="%"+ke[W].toString(16);return U+J(A)}(he,I,O);break;case"ascii":case"binary":L=y(he,I,O);break;case"base64":ee=he,Me=O,L=(ne=I)===0&&Me===ee.length?x.fromByteArray(ee):x.fromByteArray(ee.slice(ne,Me));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":L=function(ke,Ae,be){for(var U=ke.slice(Ae,be),A="",W=0;W<U.length;W+=2)A+=String.fromCharCode(U[W]+256*U[W+1]);return A}(he,I,O);break;default:throw new Error("Unknown encoding")}return L},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},f.prototype.copy=function(w,I,O,L){if(I=I||0,(L=L||L===0?L:this.length)!==(O=O||0)&&w.length!==0&&this.length!==0){Q(O<=L,"sourceEnd < sourceStart"),Q(0<=I&&I<w.length,"targetStart out of bounds"),Q(0<=O&&O<this.length,"sourceStart out of bounds"),Q(0<=L&&L<=this.length,"sourceEnd out of bounds"),L>this.length&&(L=this.length);var ee=(L=w.length-I<L-O?w.length-I+O:L)-O;if(ee<100||!f._useTypedArrays)for(var ne=0;ne<ee;ne++)w[ne+I]=this[ne+O];else w._set(this.subarray(O,O+ee),I)}},f.prototype.slice=function(w,I){var O=this.length;if(w=X(w,O,0),I=X(I,O,O),f._useTypedArrays)return f._augment(this.subarray(w,I));for(var L=I-w,ee=new f(L,void 0,!0),ne=0;ne<L;ne++)ee[ne]=this[ne+w];return ee},f.prototype.get=function(w){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(w)},f.prototype.set=function(w,I){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(w,I)},f.prototype.readUInt8=function(w,I){if(I||(Q(w!=null,"missing offset"),Q(w<this.length,"Trying to read beyond buffer length")),!(w>=this.length))return this[w]},f.prototype.readUInt16LE=function(w,I){return R(this,w,!0,I)},f.prototype.readUInt16BE=function(w,I){return R(this,w,!1,I)},f.prototype.readUInt32LE=function(w,I){return F(this,w,!0,I)},f.prototype.readUInt32BE=function(w,I){return F(this,w,!1,I)},f.prototype.readInt8=function(w,I){if(I||(Q(w!=null,"missing offset"),Q(w<this.length,"Trying to read beyond buffer length")),!(w>=this.length))return 128&this[w]?-1*(255-this[w]+1):this[w]},f.prototype.readInt16LE=function(w,I){return b(this,w,!0,I)},f.prototype.readInt16BE=function(w,I){return b(this,w,!1,I)},f.prototype.readInt32LE=function(w,I){return C(this,w,!0,I)},f.prototype.readInt32BE=function(w,I){return C(this,w,!1,I)},f.prototype.readFloatLE=function(w,I){return v(this,w,!0,I)},f.prototype.readFloatBE=function(w,I){return v(this,w,!1,I)},f.prototype.readDoubleLE=function(w,I){return g(this,w,!0,I)},f.prototype.readDoubleBE=function(w,I){return g(this,w,!1,I)},f.prototype.writeUInt8=function(w,I,O){O||(Q(w!=null,"missing value"),Q(I!=null,"missing offset"),Q(I<this.length,"trying to write beyond buffer length"),le(w,255)),I>=this.length||(this[I]=w)},f.prototype.writeUInt16LE=function(w,I,O){d(this,w,I,!0,O)},f.prototype.writeUInt16BE=function(w,I,O){d(this,w,I,!1,O)},f.prototype.writeUInt32LE=function(w,I,O){E(this,w,I,!0,O)},f.prototype.writeUInt32BE=function(w,I,O){E(this,w,I,!1,O)},f.prototype.writeInt8=function(w,I,O){O||(Q(w!=null,"missing value"),Q(I!=null,"missing offset"),Q(I<this.length,"Trying to write beyond buffer length"),xe(w,127,-128)),I>=this.length||(0<=w?this.writeUInt8(w,I,O):this.writeUInt8(255+w+1,I,O))},f.prototype.writeInt16LE=function(w,I,O){D(this,w,I,!0,O)},f.prototype.writeInt16BE=function(w,I,O){D(this,w,I,!1,O)},f.prototype.writeInt32LE=function(w,I,O){B(this,w,I,!0,O)},f.prototype.writeInt32BE=function(w,I,O){B(this,w,I,!1,O)},f.prototype.writeFloatLE=function(w,I,O){z(this,w,I,!0,O)},f.prototype.writeFloatBE=function(w,I,O){z(this,w,I,!1,O)},f.prototype.writeDoubleLE=function(w,I,O){V(this,w,I,!0,O)},f.prototype.writeDoubleBE=function(w,I,O){V(this,w,I,!1,O)},f.prototype.fill=function(w,I,O){if(I=I||0,O=O||this.length,Q(typeof(w=typeof(w=w||0)=="string"?w.charCodeAt(0):w)=="number"&&!isNaN(w),"value is not a number"),Q(I<=O,"end < start"),O!==I&&this.length!==0){Q(0<=I&&I<this.length,"start out of bounds"),Q(0<=O&&O<=this.length,"end out of bounds");for(var L=I;L<O;L++)this[L]=w}},f.prototype.inspect=function(){for(var w=[],I=this.length,O=0;O<I;O++)if(w[O]=te(this[O]),O===r.INSPECT_MAX_BYTES){w[O+1]="...";break}return"<Buffer "+w.join(" ")+">"},f.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(f._useTypedArrays)return new f(this).buffer;for(var w=new Uint8Array(this.length),I=0,O=w.length;I<O;I+=1)w[I]=this[I];return w.buffer};var N=f.prototype;function X(w,I,O){return typeof w!="number"?O:I<=(w=~~w)?I:0<=w||0<=(w+=I)?w:0}function j(w){return(w=~~Math.ceil(+w))<0?0:w}function se(w){return(Array.isArray||function(I){return Object.prototype.toString.call(I)==="[object Array]"})(w)}function te(w){return w<16?"0"+w.toString(16):w.toString(16)}function pe(w){for(var I=[],O=0;O<w.length;O++){var L=w.charCodeAt(O);if(L<=127)I.push(w.charCodeAt(O));else for(var ee=O,ne=(55296<=L&&L<=57343&&O++,encodeURIComponent(w.slice(ee,O+1)).substr(1).split("%")),Me=0;Me<ne.length;Me++)I.push(parseInt(ne[Me],16))}return I}function Pe(w){return x.toByteArray(w)}function Ie(w,I,O,L){for(var ee=0;ee<L&&!(ee+O>=I.length||ee>=w.length);ee++)I[ee+O]=w[ee];return ee}function J(w){try{return decodeURIComponent(w)}catch{return"�"}}function le(w,I){Q(typeof w=="number","cannot write a non-number as a number"),Q(0<=w,"specified a negative value for writing an unsigned value"),Q(w<=I,"value is larger than maximum value for type"),Q(Math.floor(w)===w,"value has a fractional component")}function xe(w,I,O){Q(typeof w=="number","cannot write a non-number as a number"),Q(w<=I,"value larger than maximum allowed value"),Q(O<=w,"value smaller than minimum allowed value"),Q(Math.floor(w)===w,"value has a fractional component")}function me(w,I,O){Q(typeof w=="number","cannot write a non-number as a number"),Q(w<=I,"value larger than maximum allowed value"),Q(O<=w,"value smaller than minimum allowed value")}function Q(w,I){if(!w)throw new Error(I||"Failed assertion")}f._augment=function(w){return w._isBuffer=!0,w._get=w.get,w._set=w.set,w.get=N.get,w.set=N.set,w.write=N.write,w.toString=N.toString,w.toLocaleString=N.toString,w.toJSON=N.toJSON,w.copy=N.copy,w.slice=N.slice,w.readUInt8=N.readUInt8,w.readUInt16LE=N.readUInt16LE,w.readUInt16BE=N.readUInt16BE,w.readUInt32LE=N.readUInt32LE,w.readUInt32BE=N.readUInt32BE,w.readInt8=N.readInt8,w.readInt16LE=N.readInt16LE,w.readInt16BE=N.readInt16BE,w.readInt32LE=N.readInt32LE,w.readInt32BE=N.readInt32BE,w.readFloatLE=N.readFloatLE,w.readFloatBE=N.readFloatBE,w.readDoubleLE=N.readDoubleLE,w.readDoubleBE=N.readDoubleBE,w.writeUInt8=N.writeUInt8,w.writeUInt16LE=N.writeUInt16LE,w.writeUInt16BE=N.writeUInt16BE,w.writeUInt32LE=N.writeUInt32LE,w.writeUInt32BE=N.writeUInt32BE,w.writeInt8=N.writeInt8,w.writeInt16LE=N.writeInt16LE,w.writeInt16BE=N.writeInt16BE,w.writeInt32LE=N.writeInt32LE,w.writeInt32BE=N.writeInt32BE,w.writeFloatLE=N.writeFloatLE,w.writeFloatBE=N.writeFloatBE,w.writeDoubleLE=N.writeDoubleLE,w.writeDoubleBE=N.writeDoubleBE,w.fill=N.fill,w.inspect=N.inspect,w.toArrayBuffer=N.toArrayBuffer,w}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(t,n,r){(function(s,a,x,l,c,h,p,m,_){var x=t("buffer").Buffer,S=4,f=new x(S);f.fill(0),n.exports={hash:function(u,T,y,R){for(var F=T(function(d,E){d.length%S!=0&&(D=d.length+(S-d.length%S),d=x.concat([d,f],D));for(var D,B=[],z=E?d.readInt32BE:d.readInt32LE,V=0;V<d.length;V+=S)B.push(z.call(d,V));return B}(u=x.isBuffer(u)?u:new x(u),R),8*u.length),T=R,b=new x(y),C=T?b.writeInt32BE:b.writeInt32LE,v=0;v<F.length;v++)C.call(b,F[v],4*v,!0);return b}}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(t,n,r){(function(s,a,x,l,c,h,p,m,_){var x=t("buffer").Buffer,S=t("./sha"),f=t("./sha256"),u=t("./rng"),T={sha1:S,sha256:f,md5:t("./md5")},y=64,R=new x(y);function F(d,E){var D=T[d=d||"sha1"],B=[];return D||b("algorithm:",d,"is not yet supported"),{update:function(z){return x.isBuffer(z)||(z=new x(z)),B.push(z),z.length,this},digest:function(z){var V=x.concat(B),V=E?function(N,X,j){x.isBuffer(X)||(X=new x(X)),x.isBuffer(j)||(j=new x(j)),X.length>y?X=N(X):X.length<y&&(X=x.concat([X,R],y));for(var se=new x(y),te=new x(y),pe=0;pe<y;pe++)se[pe]=54^X[pe],te[pe]=92^X[pe];return j=N(x.concat([se,j])),N(x.concat([te,j]))}(D,E,V):D(V);return B=null,z?V.toString(z):V}}}function b(){var d=[].slice.call(arguments).join(" ");throw new Error([d,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}R.fill(0),r.createHash=function(d){return F(d)},r.createHmac=F,r.randomBytes=function(d,E){if(!E||!E.call)return new x(u(d));try{E.call(this,void 0,new x(u(d)))}catch(D){E(D)}};var C,v=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],g=function(d){r[d]=function(){b("sorry,",d,"is not implemented yet")}};for(C in v)g(v[C])}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(t,n,r){(function(s,a,o,l,c,h,p,m,_){var x=t("./helpers");function S(b,C){b[C>>5]|=128<<C%32,b[14+(C+64>>>9<<4)]=C;for(var v=1732584193,g=-271733879,d=-1732584194,E=271733878,D=0;D<b.length;D+=16){var B=v,z=g,V=d,N=E,v=u(v,g,d,E,b[D+0],7,-680876936),E=u(E,v,g,d,b[D+1],12,-389564586),d=u(d,E,v,g,b[D+2],17,606105819),g=u(g,d,E,v,b[D+3],22,-1044525330);v=u(v,g,d,E,b[D+4],7,-176418897),E=u(E,v,g,d,b[D+5],12,1200080426),d=u(d,E,v,g,b[D+6],17,-1473231341),g=u(g,d,E,v,b[D+7],22,-45705983),v=u(v,g,d,E,b[D+8],7,1770035416),E=u(E,v,g,d,b[D+9],12,-1958414417),d=u(d,E,v,g,b[D+10],17,-42063),g=u(g,d,E,v,b[D+11],22,-1990404162),v=u(v,g,d,E,b[D+12],7,1804603682),E=u(E,v,g,d,b[D+13],12,-40341101),d=u(d,E,v,g,b[D+14],17,-1502002290),v=T(v,g=u(g,d,E,v,b[D+15],22,1236535329),d,E,b[D+1],5,-165796510),E=T(E,v,g,d,b[D+6],9,-1069501632),d=T(d,E,v,g,b[D+11],14,643717713),g=T(g,d,E,v,b[D+0],20,-373897302),v=T(v,g,d,E,b[D+5],5,-701558691),E=T(E,v,g,d,b[D+10],9,38016083),d=T(d,E,v,g,b[D+15],14,-660478335),g=T(g,d,E,v,b[D+4],20,-405537848),v=T(v,g,d,E,b[D+9],5,568446438),E=T(E,v,g,d,b[D+14],9,-1019803690),d=T(d,E,v,g,b[D+3],14,-187363961),g=T(g,d,E,v,b[D+8],20,1163531501),v=T(v,g,d,E,b[D+13],5,-1444681467),E=T(E,v,g,d,b[D+2],9,-51403784),d=T(d,E,v,g,b[D+7],14,1735328473),v=y(v,g=T(g,d,E,v,b[D+12],20,-1926607734),d,E,b[D+5],4,-378558),E=y(E,v,g,d,b[D+8],11,-2022574463),d=y(d,E,v,g,b[D+11],16,1839030562),g=y(g,d,E,v,b[D+14],23,-35309556),v=y(v,g,d,E,b[D+1],4,-1530992060),E=y(E,v,g,d,b[D+4],11,1272893353),d=y(d,E,v,g,b[D+7],16,-155497632),g=y(g,d,E,v,b[D+10],23,-1094730640),v=y(v,g,d,E,b[D+13],4,681279174),E=y(E,v,g,d,b[D+0],11,-358537222),d=y(d,E,v,g,b[D+3],16,-722521979),g=y(g,d,E,v,b[D+6],23,76029189),v=y(v,g,d,E,b[D+9],4,-640364487),E=y(E,v,g,d,b[D+12],11,-421815835),d=y(d,E,v,g,b[D+15],16,530742520),v=R(v,g=y(g,d,E,v,b[D+2],23,-995338651),d,E,b[D+0],6,-198630844),E=R(E,v,g,d,b[D+7],10,1126891415),d=R(d,E,v,g,b[D+14],15,-1416354905),g=R(g,d,E,v,b[D+5],21,-57434055),v=R(v,g,d,E,b[D+12],6,1700485571),E=R(E,v,g,d,b[D+3],10,-1894986606),d=R(d,E,v,g,b[D+10],15,-1051523),g=R(g,d,E,v,b[D+1],21,-2054922799),v=R(v,g,d,E,b[D+8],6,1873313359),E=R(E,v,g,d,b[D+15],10,-30611744),d=R(d,E,v,g,b[D+6],15,-1560198380),g=R(g,d,E,v,b[D+13],21,1309151649),v=R(v,g,d,E,b[D+4],6,-145523070),E=R(E,v,g,d,b[D+11],10,-1120210379),d=R(d,E,v,g,b[D+2],15,718787259),g=R(g,d,E,v,b[D+9],21,-343485551),v=F(v,B),g=F(g,z),d=F(d,V),E=F(E,N)}return Array(v,g,d,E)}function f(b,C,v,g,d,E){return F((C=F(F(C,b),F(g,E)))<<d|C>>>32-d,v)}function u(b,C,v,g,d,E,D){return f(C&v|~C&g,b,C,d,E,D)}function T(b,C,v,g,d,E,D){return f(C&g|v&~g,b,C,d,E,D)}function y(b,C,v,g,d,E,D){return f(C^v^g,b,C,d,E,D)}function R(b,C,v,g,d,E,D){return f(v^(C|~g),b,C,d,E,D)}function F(b,C){var v=(65535&b)+(65535&C);return(b>>16)+(C>>16)+(v>>16)<<16|65535&v}n.exports=function(b){return x.hash(b,S,16)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(t,n,r){(function(s,a,o,l,c,h,p,m,_){n.exports=function(x){for(var S,f=new Array(x),u=0;u<x;u++)!(3&u)&&(S=4294967296*Math.random()),f[u]=S>>>((3&u)<<3)&255;return f}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(t,n,r){(function(s,a,o,l,c,h,p,m,_){var x=t("./helpers");function S(T,y){T[y>>5]|=128<<24-y%32,T[15+(y+64>>9<<4)]=y;for(var R,F,b,C=Array(80),v=1732584193,g=-271733879,d=-1732584194,E=271733878,D=-1009589776,B=0;B<T.length;B+=16){for(var z=v,V=g,N=d,X=E,j=D,se=0;se<80;se++){C[se]=se<16?T[B+se]:u(C[se-3]^C[se-8]^C[se-14]^C[se-16],1);var te=f(f(u(v,5),(te=g,F=d,b=E,(R=se)<20?te&F|~te&b:!(R<40)&&R<60?te&F|te&b|F&b:te^F^b)),f(f(D,C[se]),(R=se)<20?1518500249:R<40?1859775393:R<60?-1894007588:-899497514)),D=E,E=d,d=u(g,30),g=v,v=te}v=f(v,z),g=f(g,V),d=f(d,N),E=f(E,X),D=f(D,j)}return Array(v,g,d,E,D)}function f(T,y){var R=(65535&T)+(65535&y);return(T>>16)+(y>>16)+(R>>16)<<16|65535&R}function u(T,y){return T<<y|T>>>32-y}n.exports=function(T){return x.hash(T,S,20,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(t,n,r){(function(s,a,o,l,c,h,p,m,_){function x(y,R){var F=(65535&y)+(65535&R);return(y>>16)+(R>>16)+(F>>16)<<16|65535&F}function S(y,R){var F,b=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),C=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),v=new Array(64);y[R>>5]|=128<<24-R%32,y[15+(R+64>>9<<4)]=R;for(var g,d,E=0;E<y.length;E+=16){for(var D=C[0],B=C[1],z=C[2],V=C[3],N=C[4],X=C[5],j=C[6],se=C[7],te=0;te<64;te++)v[te]=te<16?y[te+E]:x(x(x((d=v[te-2],u(d,17)^u(d,19)^T(d,10)),v[te-7]),(d=v[te-15],u(d,7)^u(d,18)^T(d,3))),v[te-16]),F=x(x(x(x(se,u(d=N,6)^u(d,11)^u(d,25)),N&X^~N&j),b[te]),v[te]),g=x(u(g=D,2)^u(g,13)^u(g,22),D&B^D&z^B&z),se=j,j=X,X=N,N=x(V,F),V=z,z=B,B=D,D=x(F,g);C[0]=x(D,C[0]),C[1]=x(B,C[1]),C[2]=x(z,C[2]),C[3]=x(V,C[3]),C[4]=x(N,C[4]),C[5]=x(X,C[5]),C[6]=x(j,C[6]),C[7]=x(se,C[7])}return C}var f=t("./helpers"),u=function(y,R){return y>>>R|y<<32-R},T=function(y,R){return y>>>R};n.exports=function(y){return f.hash(y,S,32,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(t,n,r){(function(s,a,o,l,c,h,p,m,_){r.read=function(x,S,f,u,E){var y,R,F=8*E-u-1,b=(1<<F)-1,C=b>>1,v=-7,g=f?E-1:0,d=f?-1:1,E=x[S+g];for(g+=d,y=E&(1<<-v)-1,E>>=-v,v+=F;0<v;y=256*y+x[S+g],g+=d,v-=8);for(R=y&(1<<-v)-1,y>>=-v,v+=u;0<v;R=256*R+x[S+g],g+=d,v-=8);if(y===0)y=1-C;else{if(y===b)return R?NaN:1/0*(E?-1:1);R+=Math.pow(2,u),y-=C}return(E?-1:1)*R*Math.pow(2,y-u)},r.write=function(x,S,f,u,T,D){var R,F,b=8*D-T-1,C=(1<<b)-1,v=C>>1,g=T===23?Math.pow(2,-24)-Math.pow(2,-77):0,d=u?0:D-1,E=u?1:-1,D=S<0||S===0&&1/S<0?1:0;for(S=Math.abs(S),isNaN(S)||S===1/0?(F=isNaN(S)?1:0,R=C):(R=Math.floor(Math.log(S)/Math.LN2),S*(u=Math.pow(2,-R))<1&&(R--,u*=2),2<=(S+=1<=R+v?g/u:g*Math.pow(2,1-v))*u&&(R++,u/=2),C<=R+v?(F=0,R=C):1<=R+v?(F=(S*u-1)*Math.pow(2,T),R+=v):(F=S*Math.pow(2,v-1)*Math.pow(2,T),R=0));8<=T;x[f+d]=255&F,d+=E,F/=256,T-=8);for(R=R<<T|F,b+=T;0<b;x[f+d]=255&R,d+=E,R/=256,b-=8);x[f+d-E]|=128*D}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(t,n,r){(function(s,a,o,l,c,h,p,m,_){var x,S,f;function u(){}(s=n.exports={}).nextTick=(S=typeof window<"u"&&window.setImmediate,f=typeof window<"u"&&window.postMessage&&window.addEventListener,S?function(T){return window.setImmediate(T)}:f?(x=[],window.addEventListener("message",function(T){var y=T.source;y!==window&&y!==null||T.data!=="process-tick"||(T.stopPropagation(),0<x.length&&x.shift()())},!0),function(T){x.push(T),window.postMessage("process-tick","*")}):function(T){setTimeout(T,0)}),s.title="browser",s.browser=!0,s.env={},s.argv=[],s.on=u,s.addListener=u,s.once=u,s.off=u,s.removeListener=u,s.removeAllListeners=u,s.emit=u,s.binding=function(T){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(T){throw new Error("process.chdir is not supported")}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(ql);var jm=ql.exports;const qm=Xr(jm);var $l=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],$m=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],Kl=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"],Km=$l,Zm=Km.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"]),ca=Kl;ca=ca.slice().filter(function(i){return!/^(gl\_|texture)/.test(i)});var Jm=ca.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]),Qm=cg,eg=$l,Zo=$m,tg=Kl,ng=Zm,ig=Jm,Yt=999,Jo=9999,Cs=0,Rs=1,Qo=2,el=3,tl=4,Hi=5,rg=6,sg=7,ag=8,nl=9,og=10,il=11,lg=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function cg(i){var e=0,t=0,n=Yt,r,s,a=[],o=[],l=1,c=0,h=0,p=!1,m=!1,_="",x;i=i||{};var S=tg,f=eg;i.version==="300 es"&&(S=ig,f=ng);for(var u={},T={},e=0;e<S.length;e++)u[S[e]]=!0;for(var e=0;e<f.length;e++)T[f[e]]=!0;return function(X){return o=[],X!==null?R(X):F()};function y(X){X.length&&o.push({type:lg[n],data:X,position:h,line:l,column:c})}function R(X){e=0,X.toString&&(X=X.toString()),_+=X.replace(/\r\n/g,`
`),x=_.length;for(var j;r=_[e],e<x;){switch(j=e,n){case Cs:e=d();break;case Rs:e=g();break;case Qo:e=v();break;case el:e=E();break;case tl:e=z();break;case il:e=B();break;case Hi:e=V();break;case Jo:e=N();break;case nl:e=C();break;case Yt:e=b();break}if(j!==e)switch(_[j]){case`
`:c=0,++l;break;default:++c;break}}return t+=e,_=_.slice(e),o}function F(X){return a.length&&y(a.join("")),n=og,y("(eof)"),o}function b(){return a=a.length?[]:a,s==="/"&&r==="*"?(h=t+e-1,n=Cs,s=r,e+1):s==="/"&&r==="/"?(h=t+e-1,n=Rs,s=r,e+1):r==="#"?(n=Qo,h=t+e,e):/\s/.test(r)?(n=nl,h=t+e,e):(p=/\d/.test(r),m=/[^\w_]/.test(r),h=t+e,n=p?tl:m?el:Jo,e)}function C(){return/[^\s]/g.test(r)?(y(a.join("")),n=Yt,e):(a.push(r),s=r,e+1)}function v(){return(r==="\r"||r===`
`)&&s!=="\\"?(y(a.join("")),n=Yt,e):(a.push(r),s=r,e+1)}function g(){return v()}function d(){return r==="/"&&s==="*"?(a.push(r),y(a.join("")),n=Yt,e+1):(a.push(r),s=r,e+1)}function E(){if(s==="."&&/\d/.test(r))return n=Hi,e;if(s==="/"&&r==="*")return n=Cs,e;if(s==="/"&&r==="/")return n=Rs,e;if(r==="."&&a.length){for(;D(a););return n=Hi,e}if(r===";"||r===")"||r==="("){if(a.length)for(;D(a););return y(r),n=Yt,e+1}var X=a.length===2&&r!=="=";if(/[\w_\d\s]/.test(r)||X){for(;D(a););return n=Yt,e}return a.push(r),s=r,e+1}function D(X){var j=0,se,te;do{if(se=Zo.indexOf(X.slice(0,X.length+j).join("")),te=Zo[se],se===-1){if(j--+X.length>0)continue;te=X.slice(0,1).join("")}return y(te),h+=te.length,a=a.slice(te.length),a.length}while(!0)}function B(){return/[^a-fA-F0-9]/.test(r)?(y(a.join("")),n=Yt,e):(a.push(r),s=r,e+1)}function z(){return r==="."||/[eE]/.test(r)?(a.push(r),n=Hi,s=r,e+1):r==="x"&&a.length===1&&a[0]==="0"?(n=il,a.push(r),s=r,e+1):/[^\d]/.test(r)?(y(a.join("")),n=Yt,e):(a.push(r),s=r,e+1)}function V(){return r==="f"&&(a.push(r),s=r,e+=1),/[eE]/.test(r)||(r==="-"||r==="+")&&/[eE]/.test(s)?(a.push(r),s=r,e+1):/[^\d]/.test(r)?(y(a.join("")),n=Yt,e):(a.push(r),s=r,e+1)}function N(){if(/[^\d\w_]/.test(r)){var X=a.join("");return T[X]?n=ag:u[X]?n=sg:n=rg,y(a.join("")),n=Yt,e}return a.push(r),s=r,e+1}}var ug=Qm,hg=dg;function dg(i,e){var t=ug(e),n=[];return n=n.concat(t(i)),n=n.concat(t(null)),n}const fg=Xr(hg);var pg=mg;function mg(i){for(var e=[],t=0;t<i.length;t++)i[t].type!=="eof"&&e.push(i[t].data);return e.join("")}const rl=Xr(pg);var gg=_g;function _g(i){var e=null,t=null,n=0,r=0,s=0,a=0,o=0,l=[],c,h,p;for(c=0,h;c<i.length;c++)if(p=i[c],p.data==="{"){if(n&&n++||(h=_(c,Rn(")"),Rn()),h<0)||(a=h,h=_(h,Rn("("),Rn(")")),h<0)||(o=h,h=_(h,ki),h<0)||i[h].type!=="ident"||(t=i[h].data,h=_(h,ki),h<0))continue;n=1,r=c,e=i[h].data,s=h;var m=_(h,ki);switch(i[m]&&i[m].data){case"lowp":case"highp":case"mediump":s=m}}else if(n&&p.data==="}"){if(--n)continue;l.push({name:t,type:e,body:[r+1,c],args:[o,a+1],outer:[s,c+1]})}for(c=0;c<i.length;c++)if(p=i[c],p.data===";"){if(h=_(c,Rn(")"),Rn()),h<0||(a=h,h=_(h,Rn("("),Rn(")")),h<0)||(o=h,h=_(h,ki),h<0)||i[h].type!=="ident"||(t=i[h].data,h=_(h,ki),h<0)||i[h].type==="operator"||i[h].data==="return")continue;e=i[h].data,l.push({name:t,type:e,body:!1,args:[o,a+1],outer:[h,c+1]})}return l.sort(function(x,S){return x.outer[0]-S.outer[0]});function _(x,S,f){for(var u=x-1;u>=0;u--){if(S(i[u]))return u;if(f&&f(i[u]))return-1}return-1}}function Rn(i){return function(e){return e.type==="operator"&&(!i||e.data===i)}}function ki(i){return i.type!=="whitespace"}const vg=Xr(gg);function xg(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Zl(i){var e=xg(i,"string");return typeof e=="symbol"?e:String(e)}function Ke(i,e,t){return e=Zl(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function sl(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function vi(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?sl(Object(t),!0).forEach(function(n){Ke(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):sl(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function Mg(i,e){if(i==null)return{};var t={},n=Object.keys(i),r,s;for(s=0;s<n.length;s++)r=n[s],!(e.indexOf(r)>=0)&&(t[r]=i[r]);return t}function yg(i,e){if(i==null)return{};var t=Mg(i,e),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);for(r=0;r<s.length;r++)n=s[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(t[n]=i[n])}return t}function Sg(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function Eg(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,Zl(n.key),n)}}function bg(i,e,t){return e&&Eg(i.prototype,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function Jl(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function ua(i,e){return ua=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},ua(i,e)}function Ag(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&ua(i,e)}function zr(i){return zr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},zr(i)}function wg(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Tg(i,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Jl(i)}function Cg(i){var e=wg();return function(){var n=zr(i),r;if(e){var s=zr(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return Tg(this,r)}}var Oe={position:"csm_Position",positionRaw:"csm_PositionRaw",pointSize:"csm_PointSize",fragColor:"csm_FragColor",diffuseColor:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",depthAlpha:"csm_DepthAlpha"},Ct,xi,Rg=(Ct={},Ke(Ct,"".concat(Oe.normal),{"#include <beginnormal_vertex>":`
    vec3 objectNormal = `.concat(Oe.normal,`;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)}),Ke(Ct,"".concat(Oe.position),{"#include <begin_vertex>":`
    vec3 transformed = `.concat(Oe.position,`;
  `)}),Ke(Ct,"".concat(Oe.positionRaw),{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = `.concat(Oe.positionRaw,`;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)}),Ke(Ct,"".concat(Oe.pointSize),{"gl_PointSize = size;":`
    gl_PointSize = `.concat(Oe.pointSize,`;
    `)}),Ke(Ct,"".concat(Oe.diffuseColor),{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = `.concat(Oe.diffuseColor,`;
  `)}),Ke(Ct,"".concat(Oe.fragColor),{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = `.concat(Oe.fragColor,`;
  `)}),Ke(Ct,"".concat(Oe.emissive),{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = `.concat(Oe.emissive,`;
    `)}),Ke(Ct,"".concat(Oe.roughness),{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(Oe.roughness,`;
    `)}),Ke(Ct,"".concat(Oe.metalness),{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(Oe.metalness,`;
    `)}),Ke(Ct,"".concat(Oe.ao),{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(Oe.ao,`;
    `)}),Ke(Ct,"".concat(Oe.bump),{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(Oe.bump," - (dot(").concat(Oe.bump,`, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)}),Ke(Ct,"".concat(Oe.depthAlpha),{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(Oe.depthAlpha,` );
    `),"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(Oe.depthAlpha,`;
    `)}),Ct),Pg=(xi={},Ke(xi,"".concat(Oe.position),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(Oe.position,`, 1.0 );
  `)}),Ke(xi,"".concat(Oe.positionRaw),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = `.concat(Oe.position,`;
  `)}),Ke(xi,"".concat(Oe.diffuseColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Oe.diffuseColor,`;
  `)}),Ke(xi,"".concat(Oe.fragColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Oe.fragColor,`;
  `)}),xi),Lg=`

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        vec3 csm_Position = vec3(0.0);
        vec4 csm_PositionRaw = vec4(0.0);
        vec3 csm_Normal = vec3(0.0);
    #else
        vec3 csm_Position = position;
        vec4 csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        vec3 csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize = size;
    #endif
#else
    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        vec4 csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        vec4 csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            vec4 csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            vec4 csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            vec4 csm_DiffuseColor = vec4(diffuse, opacity);
            vec4 csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive = emissive;
        float csm_Roughness = roughness;
        float csm_Metalness = metalness;
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO = 0.0;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_Bump = vec3(0.0);
    #endif

    float csm_DepthAlpha = 1.0;
#endif
`,Dg=`
    varying mat4 csm_internal_vModelViewMatrix;
`,Ig=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,Ug=`
    varying mat4 csm_internal_vModelViewMatrix;
`,Ng=`
    
`,Rt,Fg=(Rt={},Ke(Rt,"".concat(Oe.position),"*"),Ke(Rt,"".concat(Oe.positionRaw),"*"),Ke(Rt,"".concat(Oe.normal),"*"),Ke(Rt,"".concat(Oe.pointSize),["PointsMaterial"]),Ke(Rt,"".concat(Oe.diffuseColor),"*"),Ke(Rt,"".concat(Oe.fragColor),"*"),Ke(Rt,"".concat(Oe.emissive),["MeshStandardMaterial","MeshPhysicalMaterial"]),Ke(Rt,"".concat(Oe.roughness),["MeshStandardMaterial","MeshPhysicalMaterial"]),Ke(Rt,"".concat(Oe.metalness),["MeshStandardMaterial","MeshPhysicalMaterial"]),Ke(Rt,"".concat(Oe.ao),["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"]),Ke(Rt,"".concat(Oe.bump),["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"]),Ke(Rt,"".concat(Oe.depthAlpha),"*"),Rt),Og=["baseMaterial","fragmentShader","vertexShader","uniforms","patchMap","cacheKey","silent"],Bg=function(e,t,n){return e.split(t).join(n)},zg=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},Hg=function(e,t){return new RegExp("\\b".concat(zg(t),"\\b")).test(e)};function kg(i){try{new i}catch(e){if(e.message.indexOf("is not a constructor")>=0)return!1}return!0}function Vg(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;Object.assign(i,e);var n=Object.getPrototypeOf(e);Object.entries(Object.getOwnPropertyDescriptors(n)).filter(function(r){var s=typeof r[1].get=="function",a=typeof r[1].set=="function",o=typeof r[1].value=="function",l=r[0]==="constructor";return(s||a||o)&&!l}).forEach(function(r){if(typeof i[r[0]]=="function"){t||console.warn("Function ".concat(r[0]," already exists on CSM, renaming to base_").concat(r[0]));var s="base_".concat(r[0]);i[s]=r[1].value.bind(i);return}Object.defineProperty(i,r[0],r[1])})}function Gg(i){var e=i.toString().trim(),t=e.substring(e.indexOf("{")+1,e.lastIndexOf("}"));return t.trim().length===0}function al(i){return i.replace(/\s/g,"")}function Wg(i,e,t){var n=i.lastIndexOf(e);return n===-1?i:i.substring(0,n)+t+i.substring(n+e.length)}var Ql=function(i){Ag(t,i);var e=Cg(t);function t(n){var r,s=n.baseMaterial,a=n.fragmentShader,o=n.vertexShader,l=n.uniforms,c=n.patchMap,h=n.cacheKey,p=n.silent,m=yg(n,Og);Sg(this,t);var _;if(kg(s)?_=new s(m):(_=s,Object.assign(_,m)),_.type==="RawShaderMaterial")throw new Error("CustomShaderMaterial does not support RawShaderMaterial");r=e.call(this),Vg(Jl(r),_,p),r.__csm={patchMap:c||{},fragmentShader:a||"",vertexShader:o||"",cacheKey:h,baseMaterial:s,instanceID:wl.generateUUID(),type:_.type,isAlreadyExtended:!Gg(_.onBeforeCompile),cacheHash:"",silent:p},r.uniforms=vi(vi({},r.uniforms||{}),l||{});{var x=r.__csm,S=x.fragmentShader,f=x.vertexShader,u=r.uniforms;r.__csm.cacheHash=r.getCacheHash(),r.generateMaterial(S,f,u)}return r}return bg(t,[{key:"update",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.uniforms=r.uniforms||this.uniforms,Object.assign(this.__csm,r);var s=this.__csm,a=s.fragmentShader,o=s.vertexShader,l=this.uniforms,c=this.getCacheHash();this.__csm.cacheHash=c,this.generateMaterial(a,o,l)}},{key:"clone",value:function(){var r={baseMaterial:this.__csm.baseMaterial,fragmentShader:this.__csm.fragmentShader,vertexShader:this.__csm.vertexShader,uniforms:this.uniforms,silent:this.__csm.silent,patchMap:this.__csm.patchMap,cacheKey:this.__csm.cacheKey},s=new this.constructor(r);return Object.assign(this,s),s}},{key:"getCacheHash",value:function(){var r=this.__csm,s=r.fragmentShader,a=r.vertexShader,o=this.uniforms,l=Object.values(o).reduce(function(h,p){var m=p.value;return h+JSON.stringify(m)},""),c=al(s)+al(a)+l;return c.trim().length>0?qm(c):this.customProgramCacheKey()}},{key:"generateMaterial",value:function(r,s,a){var o=this,l=this.parseShader(r),c=this.parseShader(s);this.uniforms=a||{},this.customProgramCacheKey=function(){return o.__csm.cacheHash};var h=function(_){try{if(l){var x=o.patchShader(l,_.fragmentShader,!0);_.fragmentShader=o.getMaterialDefine()+x}if(c){var S=o.patchShader(c,_.vertexShader);_.vertexShader=`#define IS_VERTEX;
`+S,_.vertexShader=o.getMaterialDefine()+_.vertexShader}_.uniforms=vi(vi({},_.uniforms),o.uniforms),o.uniforms=_.uniforms}catch(f){console.error(f)}};if(this.__csm.isAlreadyExtended){var p=this.onBeforeCompile;this.onBeforeCompile=function(m,_){p(m,_),h(m)}}else this.onBeforeCompile=h;this.needsUpdate=!0}},{key:"patchShader",value:function(r,s,a){var o=this,l=s,c=vi(vi({},this.getPatchMapForMaterial()),this.__csm.patchMap);Object.keys(c).forEach(function(m){Object.keys(c[m]).forEach(function(_){var x=Fg[m],S=o.__csm.type;if(m==="*"||Hg(r.main,m))if(!x||Array.isArray(x)&&x.includes(S)||x==="*")l=Bg(l,_,c[m][_]);else throw new Error("CSM: ".concat(m," is not available in ").concat(S,". Shader cannot compile."))})}),l=l.replace("void main() {",`
        #ifndef CSM_IS_HEAD_DEFAULTS_DEFINED
          `.concat(a?Ug:Dg,`
          #define CSM_IS_HEAD_DEFAULTS_DEFINED 1
        #endif

        `).concat(r.header,`
        
        void main() {
          #ifndef CSM_IS_DEFAULTS_DEFINED
            `).concat(Lg,`
            #define CSM_IS_DEFAULTS_DEFINED 1
          #endif
          
          #ifndef CSM_IS_MAIN_DEFAULTS_DEFINED
            `).concat(a?Ng:Ig,`
            #define CSM_IS_MAIN_DEFAULTS_DEFINED 1
          #endif

          // CSM_START
      `));var h=this.__csm.isAlreadyExtended,p=l.includes("// CSM_END");return h&&p?l=Wg(l,"// CSM_END",`
          // CSM_END
          `.concat(r.main,`
          // CSM_END
        `)):l=l.replace("// CSM_START",`
        // CSM_START
        `.concat(r.main,`
        // CSM_END
          `)),l=r.defines+l,l}},{key:"parseShader",value:function(r){if(r){var s=r.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm,""),a=fg(s),o=vg(a),l=o.map(function(p){return p.name}).indexOf("main"),c=rl(a.slice(0,l>=0?o[l].outer[0]:void 0)),h=l>=0?this.getShaderFromIndex(a,o[l].body):"";return{defines:"",header:c,main:h}}}},{key:"getMaterialDefine",value:function(){var r=this.__csm.type;return r?"#define IS_".concat(r.toUpperCase(),`;
`):`#define IS_UNKNOWN;
`}},{key:"getPatchMapForMaterial",value:function(){switch(this.__csm.type){case"ShaderMaterial":return Pg;default:return Rg}}},{key:"getShaderFromIndex",value:function(r,s){return rl(r.slice(s[0],s[1]))}}]),t}(Di);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Jt{constructor(e,t,n,r,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Jt.nextNameID=Jt.nextNameID||0,this.$name.id=`lil-gui-name-${++Jt.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Xg extends Jt{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ha(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Yg={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:ha,toHexString:ha},Yi={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},jg={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,e,t=1){const n=Yi.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return Yi.toHexString(r)}},qg={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=Yi.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return Yi.toHexString(r)}},$g=[Yg,Yi,jg,qg];function Kg(i){return $g.find(e=>e.match(i))}class Zg extends Jt{constructor(e,t,n,r){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Kg(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=ha(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ps extends Jt{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Jg extends Jt{constructor(e,t,n,r,s,a){super(e,t,n,"number"),this._initInput(),this.min(r),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let T=parseFloat(this.$input.value);isNaN(T)||(this._stepExplicit&&(T=this._snap(T)),this.setValue(this._clamp(T)))},n=T=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+T),this.$input.value=this.getValue())},r=T=>{T.key==="Enter"&&this.$input.blur(),T.code==="ArrowUp"&&(T.preventDefault(),n(this._step*this._arrowKeyMultiplier(T))),T.code==="ArrowDown"&&(T.preventDefault(),n(this._step*this._arrowKeyMultiplier(T)*-1))},s=T=>{this._inputFocused&&(T.preventDefault(),n(this._step*this._normalizeMouseWheel(T)))};let a=!1,o,l,c,h,p;const m=5,_=T=>{o=T.clientX,l=c=T.clientY,a=!0,h=this.getValue(),p=0,window.addEventListener("mousemove",x),window.addEventListener("mouseup",S)},x=T=>{if(a){const y=T.clientX-o,R=T.clientY-l;Math.abs(R)>m?(T.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>m&&S()}if(!a){const y=T.clientY-c;p-=y*this._step*this._arrowKeyMultiplier(T),h+p>this._max?p=this._max-h:h+p<this._min&&(p=this._min-h),this._snapClampSetValue(h+p)}c=T.clientY},S=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",S)},f=()=>{this._inputFocused=!0},u=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",_),this.$input.addEventListener("focus",f),this.$input.addEventListener("blur",u)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(u,T,y,R,F)=>(u-T)/(y-T)*(F-R)+R,t=u=>{const T=this.$slider.getBoundingClientRect();let y=e(u,T.left,T.right,this._min,this._max);this._snapClampSetValue(y)},n=u=>{this._setDraggingStyle(!0),t(u.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=u=>{t(u.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let a=!1,o,l;const c=u=>{u.preventDefault(),this._setDraggingStyle(!0),t(u.touches[0].clientX),a=!1},h=u=>{u.touches.length>1||(this._hasScrollBar?(o=u.touches[0].clientX,l=u.touches[0].clientY,a=!0):c(u),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",m))},p=u=>{if(a){const T=u.touches[0].clientX-o,y=u.touches[0].clientY-l;Math.abs(T)>Math.abs(y)?c(u):(window.removeEventListener("touchmove",p),window.removeEventListener("touchend",m))}else u.preventDefault(),t(u.touches[0].clientX)},m=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",m)},_=this._callOnFinishChange.bind(this),x=400;let S;const f=u=>{if(Math.abs(u.deltaX)<Math.abs(u.deltaY)&&this._hasScrollBar)return;u.preventDefault();const y=this._normalizeMouseWheel(u)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(S),S=setTimeout(_,x)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",f,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Qg extends Jt{constructor(e,t,n,r){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class e_ extends Jt{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const t_=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function n_(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let ol=!1;class Ca{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:s="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!ol&&o&&(n_(t_),ol=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=a}add(e,t,n,r,s){if(Object(n)===n)return new Qg(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new Jg(this,e,t,n,r,s);case"boolean":return new Xg(this,e,t);case"string":return new e_(this,e,t);case"function":return new Ps(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new Zg(this,e,t,n)}addFolder(e){const t=new Ca({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Ps||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Ps)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}var ec=`uniform float uPositionFrequency;
uniform float uStrength;
uniform float uWarpFrequency;
uniform float uWarpStrength;
uniform float uTime;

varying vec3 vPosition;
varying float vUpDot;

vec3 permute(vec3 x) { return mod(((x*44.0)+1.0)*x, 299.0); }

float simplexNoise2d(vec2 v)
{
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
            -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 299.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

float getElevation(vec2 position)
{
    vec2 warpedPosition = position;
    warpedPosition += uTime * 0.2;
    warpedPosition += simplexNoise2d(warpedPosition * uPositionFrequency * uWarpFrequency) * uWarpStrength;

    float elevation = 0.0;
    elevation += simplexNoise2d(warpedPosition * uPositionFrequency      ) / 2.0;
    elevation += simplexNoise2d(warpedPosition * uPositionFrequency * 2.0) / 4.0;
    elevation += simplexNoise2d(warpedPosition * uPositionFrequency * 4.0) / 8.0;

    float elevationSign = sign(elevation);
    elevation = pow(abs(elevation), 2.0) * elevationSign;
    elevation *= uStrength;

    return elevation;

}

void main()
{
    
    float shift = 0.01;
    vec3 positionA = position + vec3(shift, 0.0, 0.0);
    vec3 positionB = position + vec3(0.0, 0.0, -shift);

    
    float elevation = getElevation(csm_Position.xz);
    csm_Position.y += elevation;
    positionA.y = getElevation(positionA.xz);
    positionB.y = getElevation(positionB.xz);

    
    vec3 toA = normalize(positionA - csm_Position);
    vec3 toB = normalize(positionB - csm_Position);
    csm_Normal = cross(toA, toB);

    
    vPosition = csm_Position;
    vPosition.xz += uTime * 0.2;
    vUpDot = dot(csm_Normal, vec3(0.0, 1.0, 0.0));

}`,i_=`uniform vec3 uColorWaterDeep;
uniform vec3 uColorWaterSurface;
uniform vec3 uColorSand;
uniform vec3 uColorGrass;
uniform vec3 uColorSnow;
uniform vec3 uColorRock;

varying vec3 vPosition;
varying float vUpDot;

vec3 permute(vec3 x) { return mod(((x*44.0)+1.0)*x, 299.0); }

float simplexNoise2d(vec2 v)
{
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
            -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 299.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

void main()
{
    
    vec3 color = vec3 (1.0);

    
    float surfaceWaterMix = smoothstep(-0.7, -0.1, vPosition.y);
    color = mix(uColorWaterDeep, uColorWaterSurface, surfaceWaterMix);

    
    float sandMix = step(- 0.1, vPosition.y);
    color = mix(color, uColorSand, sandMix);

    
    float grassMix = smoothstep(-0.06, -0.01, vPosition.y);
    color = mix(color, uColorGrass, grassMix);

    
    float rockMix = vUpDot;
    rockMix = 1.0 - step(0.8, rockMix);
    rockMix *= step(- 0.06, vPosition.y);
    color = mix(color, uColorRock, rockMix);

    
    float snowThreshold = 0.40;
    snowThreshold += simplexNoise2d(vPosition.xz * 30.0) * 0.4;
    float snowMix = smoothstep(snowThreshold*0.8, snowThreshold, vPosition.y);
    color = mix(color, uColorSnow, snowMix);

    
    csm_DiffuseColor = vec4(color, 1.0);
}`;const en=new Ca({width:325}),nt={},tc=document.querySelector("canvas.webgl"),vn=new jl,r_=new Xm;r_.load("/shanghai_bund_2k.hdr",i=>{i.mapping=Ir,vn.environmentIntensity=0,vn.environment=i});const Ra=new On(10,10,500,500);Ra.deleteAttribute("uv");Ra.deleteAttribute("normal");Ra.rotateX(-Math.PI*.5);nt.colorWaterDeep="#002b3d";nt.colorWaterSurface="#009980";nt.colorSand="#0099b8";nt.colorGrass="#7370ff";nt.colorSnow="#d14900";nt.colorRock="#0a74ff";const Ft={uColorWaterDeep:new Nt(new We(nt.colorWaterDeep)),uColorWaterSurface:new Nt(new We(nt.colorWaterSurface)),uColorSand:new Nt(new We(nt.colorSand)),uColorGrass:new Nt(new We(nt.colorGrass)),uColorSnow:new Nt(new We(nt.colorSnow)),uColorRock:new Nt(new We(nt.colorRock)),uTime:new Nt(0),uPositionFrequency:new Nt(.25),uStrength:new Nt(1.9),uWarpFrequency:new Nt(3.5),uWarpStrength:new Nt(.8)};en.add(Ft.uPositionFrequency,"value",0,1,.001).name("uPositionFrequency");en.add(Ft.uStrength,"value",0,10,.001).name("uStrength");en.add(Ft.uWarpFrequency,"value",0,10,.001).name("uWarpFrequency");en.add(Ft.uWarpStrength,"value",0,1,.001).name("uWarpStrength");en.addColor(nt,"colorWaterDeep").onChange(()=>Ft.uColorWaterDeep.value.set(nt.colorWaterDeep));en.addColor(nt,"colorWaterSurface").onChange(()=>Ft.uColorWaterSurface.value.set(nt.colorWaterSurface));en.addColor(nt,"colorSand").onChange(()=>Ft.uColorSand.value.set(nt.colorSand));en.addColor(nt,"colorGrass").onChange(()=>Ft.uColorGrass.value.set(nt.colorGrass));en.addColor(nt,"colorSnow").onChange(()=>Ft.uColorSnow.value.set(nt.colorSnow));en.addColor(nt,"colorRock").onChange(()=>Ft.uColorRock.value.set(nt.colorRock));const Pa=new Ql({baseMaterial:Aa,vertexShader:ec,fragmentShader:i_,uniforms:Ft,silent:!0,metalness:.3,roughness:.3,color:"#85d5c4"}),La=new Ql({baseMaterial:Yl,vertexShader:ec,uniforms:Ft,silent:!0,depthPacking:El}),$i=new Rm,Da=i=>{const e=new On(10,10,i,i);return e.deleteAttribute("uv"),e.deleteAttribute("normal"),e.rotateX(-Math.PI*.5),e},Yr=new yt(Da(500),Pa);Yr.customDepthMaterial=La;Yr.receiveShadow=!0;Yr.castShadow=!0;const jr=new yt(Da(250),Pa);jr.customDepthMaterial=La;jr.receiveShadow=!0;jr.castShadow=!0;const qr=new yt(Da(100),Pa);qr.customDepthMaterial=La;qr.receiveShadow=!0;qr.castShadow=!0;$i.addLevel(Yr,0);$i.addLevel(jr,20);$i.addLevel(qr,40);vn.add($i);const Ia=new yt(new On(10,10,1,1),new Lm({transmission:1,roughness:.15}));Ia.rotation.x=-Math.PI*.5;Ia.position.y=-.1;vn.add(Ia);const Lr=[],s_=new Wr(.1,16,8),a_=new Aa({color:16777215,metalness:1,roughness:.3,envMap:vn.environment,envMapIntensity:1}),ll=new Vr,cl=new Je;for(let i=0;i<50;i++){const e=new yt(s_,a_);e.position.x=Math.random()*10-5,e.position.y=Math.random()*10-5,e.position.z=Math.random()*10-5,e.scale.x=e.scale.y=e.scale.z=Math.random()*3+1,vn.add(e),Lr.push(e)}const $r=new Ta(16777215,50,100,3);$r.position.set(0,4,0);$r.castShadow=!1;const Ua=new Ta(16764159,5,20,2);Ua.position.set(2,2,3);Ua.castShadow=!1;const Na=new Ta(16733440,5,20,2);Na.position.set(-2,2,-3);Na.castShadow=!1;const o_=1;new Vm($r,o_);vn.add($r,Ua,Na);const _t={width:window.innerWidth,height:window.innerHeight,pixelRatio:Math.min(window.devicePixelRatio,2)};window.addEventListener("resize",()=>{_t.width=window.innerWidth,_t.height=window.innerHeight,_t.pixelRatio=Math.min(window.devicePixelRatio,2),zt.aspect=_t.width/_t.height,zt.updateProjectionMatrix(),xn.setSize(_t.width,_t.height),xn.setPixelRatio(_t.pixelRatio),Fa.setSize(_t.width,_t.height)});const zt=new bt(35,_t.width/_t.height,.1,100);zt.position.set(-10,6,-2);vn.add(zt);const nc=new Wm(zt,tc);nc.enableDamping=!0;const xn=new Cm({canvas:tc,antialias:!0});xn.shadowMap.enabled=!0;xn.shadowMap.type=fa;xn.toneMapping=hl;xn.toneMappingExposure=1;xn.setSize(_t.width,_t.height);xn.setPixelRatio(_t.pixelRatio);const Fa=new Ym(xn);Fa.setSize(_t.width,_t.height);const l_=new km,ic=()=>{const i=l_.getElapsedTime(),e=1e-4*Date.now();for(let t=0,n=Lr.length;t<n;t++){const r=Lr[t];r.position.x=5*Math.cos(e+t),r.position.y=5*Math.sin(e+t*1.1)}$i.update(zt),zt.updateMatrixWorld(),zt.matrixWorldInverse.copy(zt.matrixWorld).invert(),cl.multiplyMatrices(zt.projectionMatrix,zt.matrixWorldInverse),ll.setFromProjectionMatrix(cl),Lr.forEach(t=>{t.visible=ll.intersectsObject(t)}),Ft.uTime.value=i,nc.update(),Fa.render(vn,zt),window.requestAnimationFrame(ic)};ic();
//# sourceMappingURL=index-DZb04LFn.js.map
