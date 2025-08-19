var Xm=Object.defineProperty;var Wd=r=>{throw TypeError(r)};var Ym=(r,e,t)=>e in r?Xm(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var qt=(r,e,t)=>Ym(r,typeof e!="symbol"?e+"":e,t),bu=(r,e,t)=>e.has(r)||Wd("Cannot "+t);var F=(r,e,t)=>(bu(r,e,"read from private field"),t?t.call(r):e.get(r)),Pe=(r,e,t)=>e.has(r)?Wd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),Wt=(r,e,t,n)=>(bu(r,e,"write to private field"),n?n.call(r,t):e.set(r,t),t),_n=(r,e,t)=>(bu(r,e,"access private method"),t);var Xd=(r,e,t,n)=>({set _(i){Wt(r,e,i,t)},get _(){return F(r,e,n)}});import{c as qm,r as Ti,j as Mo}from"./client-DVrblGvH.js";import{c as Km}from"./clsx-B-dksMZM.js";import{r as Yd,c as ic,v as jm,g as uu}from"./maths-BcBSyK5V.js";var ch={exports:{}};(function(r,e){(function(t,n){n(e)})(qm,function(t){function n(j,S){for(var N=0;N<S.length;N++){var A=S[N];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(j,A.key,A)}}function i(j,S,N){return S&&n(j.prototype,S),j}/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var s,o,a,l,c,u,h,f,m,x,M,g,p,R=function(){return s||typeof window<"u"&&(s=window.gsap)&&s.registerPlugin&&s},T=1,C=[],k=[],D=[],B=Date.now,Q=function(S,N){return N},P=function(){var S=m.core,N=S.bridge||{},A=S._scrollers,w=S._proxies;A.push.apply(A,k),w.push.apply(w,D),k=A,D=w,Q=function(ue,te){return N[ue](te)}},b=function(S,N){return~D.indexOf(S)&&D[D.indexOf(S)+1][N]},G=function(S){return!!~x.indexOf(S)},oe=function(S,N,A,w,X){return S.addEventListener(N,A,{passive:w!==!1,capture:!!X})},ee=function(S,N,A,w){return S.removeEventListener(N,A,!!w)},he="scrollLeft",_e="scrollTop",ce=function(){return M&&M.isPressed||k.cache++},Se=function(S,N){var A=function w(X){if(X||X===0){T&&(a.history.scrollRestoration="manual");var ue=M&&M.isPressed;X=w.v=Math.round(X)||(M&&M.iOS?1:0),S(X),w.cacheID=k.cache,ue&&Q("ss",X)}else(N||k.cache!==w.cacheID||Q("ref"))&&(w.cacheID=k.cache,w.v=S());return w.v+w.offset};return A.offset=0,S&&A},se={s:he,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Se(function(j){return arguments.length?a.scrollTo(j,Te.sc()):a.pageXOffset||l[he]||c[he]||u[he]||0})},Te={s:_e,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:se,sc:Se(function(j){return arguments.length?a.scrollTo(se.sc(),j):a.pageYOffset||l[_e]||c[_e]||u[_e]||0})},Le=function(S,N){return(N&&N._ctx&&N._ctx.selector||s.utils.toArray)(S)[0]||(typeof S=="string"&&s.config().nullTargetWarn!==!1?console.warn("Element not found:",S):null)},Ge=function(S,N){var A=N.s,w=N.sc;G(S)&&(S=l.scrollingElement||c);var X=k.indexOf(S),ue=w===Te.sc?1:2;!~X&&(X=k.push(S)-1),k[X+ue]||oe(S,"scroll",ce);var te=k[X+ue],Xe=te||(k[X+ue]=Se(b(S,A),!0)||(G(S)?w:Se(function(pt){return arguments.length?S[A]=pt:S[A]})));return Xe.target=S,te||(Xe.smooth=s.getProperty(S,"scrollBehavior")==="smooth"),Xe},st=function(S,N,A){var w=S,X=S,ue=B(),te=ue,Xe=N||50,pt=Math.max(500,Xe*3),jt=function(at,mn){var sn=B();mn||sn-ue>Xe?(X=w,w=at,te=ue,ue=sn):A?w+=at:w=X+(at-X)/(sn-te)*(ue-te)},Dt=function(){X=w=A?0:w,te=ue=0},nt=function(at){var mn=te,sn=X,In=B();return(at||at===0)&&at!==w&&jt(at),ue===te||In-te>pt?0:(w+(A?sn:-sn))/((A?In:ue)-mn)*1e3};return{update:jt,reset:Dt,getVelocity:nt}},gt=function(S,N){return N&&!S._gsapAllow&&S.preventDefault(),S.changedTouches?S.changedTouches[0]:S},fe=function(S){var N=Math.max.apply(Math,S),A=Math.min.apply(Math,S);return Math.abs(N)>=Math.abs(A)?N:A},Ee=function(){m=s.core.globals().ScrollTrigger,m&&m.core&&P()},we=function(S){return s=S||R(),!o&&s&&typeof document<"u"&&document.body&&(a=window,l=document,c=l.documentElement,u=l.body,x=[a,l,c,u],s.utils.clamp,p=s.core.context||function(){},f="onpointerenter"in u?"pointer":"mouse",h=be.isTouch=a.matchMedia&&a.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in a||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,g=be.eventTypes=("ontouchstart"in c?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in c?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return T=0},500),Ee(),o=1),o};se.op=Te,k.cache=0;var be=function(){function j(N){this.init(N)}var S=j.prototype;return S.init=function(A){o||we(s)||console.warn("Please gsap.registerPlugin(Observer)"),m||Ee();var w=A.tolerance,X=A.dragMinimum,ue=A.type,te=A.target,Xe=A.lineHeight,pt=A.debounce,jt=A.preventDefault,Dt=A.onStop,nt=A.onStopDelay,xe=A.ignore,at=A.wheelSpeed,mn=A.event,sn=A.onDragStart,In=A.onDragEnd,fn=A.onDrag,Wn=A.onPress,Et=A.onRelease,Hi=A.onRight,cn=A.onLeft,_t=A.onUp,ai=A.onDown,Si=A.onChangeX,tt=A.onChangeY,kn=A.onChange,mt=A.onToggleX,wr=A.onToggleY,Ln=A.onHover,li=A.onHoverEnd,ci=A.onMove,nn=A.ignoreCheck,Tn=A.isNormalizer,bn=A.onGestureStart,Z=A.onGestureEnd,Dn=A.onWheel,Ns=A.onEnable,os=A.onDisable,Gi=A.onClick,Rr=A.scrollSpeed,ui=A.capture,An=A.allowClicks,hi=A.lockAxis,Jn=A.onLockAxis;this.target=te=Le(te)||c,this.vars=A,xe&&(xe=s.utils.toArray(xe)),w=w||1e-9,X=X||0,at=at||1,Rr=Rr||1,ue=ue||"wheel,touch,pointer",pt=pt!==!1,Xe||(Xe=parseFloat(a.getComputedStyle(u).lineHeight)||22);var as,di,yi,Vt,Mn,Ei,Ci,le=this,Pi=0,Cr=0,ls=A.passive||!jt&&A.passive!==!1,Sn=Ge(te,se),Pr=Ge(te,Te),cs=Sn(),Fs=Pr(),zn=~ue.indexOf("touch")&&!~ue.indexOf("pointer")&&g[0]==="pointerdown",us=G(te),yn=te.ownerDocument||l,Ki=[0,0,0],Vi=[0,0,0],Ir=0,xa=function(){return Ir=B()},wn=function(dt,$t){return(le.event=dt)&&xe&&~xe.indexOf(dt.target)||$t&&zn&&dt.pointerType!=="touch"||nn&&nn(dt,$t)},ec=function(){le._vx.reset(),le._vy.reset(),di.pause(),Dt&&Dt(le)},Lr=function(){var dt=le.deltaX=fe(Ki),$t=le.deltaY=fe(Vi),He=Math.abs(dt)>=w,Mt=Math.abs($t)>=w;kn&&(He||Mt)&&kn(le,dt,$t,Ki,Vi),He&&(Hi&&le.deltaX>0&&Hi(le),cn&&le.deltaX<0&&cn(le),Si&&Si(le),mt&&le.deltaX<0!=Pi<0&&mt(le),Pi=le.deltaX,Ki[0]=Ki[1]=Ki[2]=0),Mt&&(ai&&le.deltaY>0&&ai(le),_t&&le.deltaY<0&&_t(le),tt&&tt(le),wr&&le.deltaY<0!=Cr<0&&wr(le),Cr=le.deltaY,Vi[0]=Vi[1]=Vi[2]=0),(Vt||yi)&&(ci&&ci(le),yi&&(sn&&yi===1&&sn(le),fn&&fn(le),yi=0),Vt=!1),Ei&&!(Ei=!1)&&Jn&&Jn(le),Mn&&(Dn(le),Mn=!1),as=0},_o=function(dt,$t,He){Ki[He]+=dt,Vi[He]+=$t,le._vx.update(dt),le._vy.update($t),pt?as||(as=requestAnimationFrame(Lr)):Lr()},vo=function(dt,$t){hi&&!Ci&&(le.axis=Ci=Math.abs(dt)>Math.abs($t)?"x":"y",Ei=!0),Ci!=="y"&&(Ki[2]+=dt,le._vx.update(dt,!0)),Ci!=="x"&&(Vi[2]+=$t,le._vy.update($t,!0)),pt?as||(as=requestAnimationFrame(Lr)):Lr()},hs=function(dt){if(!wn(dt,1)){dt=gt(dt,jt);var $t=dt.clientX,He=dt.clientY,Mt=$t-le.x,rt=He-le.y,St=le.isDragging;le.x=$t,le.y=He,(St||(Mt||rt)&&(Math.abs(le.startX-$t)>=X||Math.abs(le.startY-He)>=X))&&(yi=St?2:1,St||(le.isDragging=!0),vo(Mt,rt))}},Os=le.onPress=function(yt){wn(yt,1)||yt&&yt.button||(le.axis=Ci=null,di.pause(),le.isPressed=!0,yt=gt(yt),Pi=Cr=0,le.startX=le.x=yt.clientX,le.startY=le.y=yt.clientY,le._vx.reset(),le._vy.reset(),oe(Tn?te:yn,g[1],hs,ls,!0),le.deltaX=le.deltaY=0,Wn&&Wn(le))},Ut=le.onRelease=function(yt){if(!wn(yt,1)){ee(Tn?te:yn,g[1],hs,!0);var dt=!isNaN(le.y-le.startY),$t=le.isDragging,He=$t&&(Math.abs(le.x-le.startX)>3||Math.abs(le.y-le.startY)>3),Mt=gt(yt);!He&&dt&&(le._vx.reset(),le._vy.reset(),jt&&An&&s.delayedCall(.08,function(){if(B()-Ir>300&&!yt.defaultPrevented){if(yt.target.click)yt.target.click();else if(yn.createEvent){var rt=yn.createEvent("MouseEvents");rt.initMouseEvent("click",!0,!0,a,1,Mt.screenX,Mt.screenY,Mt.clientX,Mt.clientY,!1,!1,!1,!1,0,null),yt.target.dispatchEvent(rt)}}})),le.isDragging=le.isGesturing=le.isPressed=!1,Dt&&$t&&!Tn&&di.restart(!0),yi&&Lr(),In&&$t&&In(le),Et&&Et(le,He)}},Bs=function(dt){return dt.touches&&dt.touches.length>1&&(le.isGesturing=!0)&&bn(dt,le.isDragging)},ji=function(){return(le.isGesturing=!1)||Z(le)},$i=function(dt){if(!wn(dt)){var $t=Sn(),He=Pr();_o(($t-cs)*Rr,(He-Fs)*Rr,1),cs=$t,Fs=He,Dt&&di.restart(!0)}},Zi=function(dt){if(!wn(dt)){dt=gt(dt,jt),Dn&&(Mn=!0);var $t=(dt.deltaMode===1?Xe:dt.deltaMode===2?a.innerHeight:1)*at;_o(dt.deltaX*$t,dt.deltaY*$t,0),Dt&&!Tn&&di.restart(!0)}},ks=function(dt){if(!wn(dt)){var $t=dt.clientX,He=dt.clientY,Mt=$t-le.x,rt=He-le.y;le.x=$t,le.y=He,Vt=!0,Dt&&di.restart(!0),(Mt||rt)&&vo(Mt,rt)}},xo=function(dt){le.event=dt,Ln(le)},Dr=function(dt){le.event=dt,li(le)},Ma=function(dt){return wn(dt)||gt(dt,jt)&&Gi(le)};di=le._dc=s.delayedCall(nt||.25,ec).pause(),le.deltaX=le.deltaY=0,le._vx=st(0,50,!0),le._vy=st(0,50,!0),le.scrollX=Sn,le.scrollY=Pr,le.isDragging=le.isGesturing=le.isPressed=!1,p(this),le.enable=function(yt){return le.isEnabled||(oe(us?yn:te,"scroll",ce),ue.indexOf("scroll")>=0&&oe(us?yn:te,"scroll",$i,ls,ui),ue.indexOf("wheel")>=0&&oe(te,"wheel",Zi,ls,ui),(ue.indexOf("touch")>=0&&h||ue.indexOf("pointer")>=0)&&(oe(te,g[0],Os,ls,ui),oe(yn,g[2],Ut),oe(yn,g[3],Ut),An&&oe(te,"click",xa,!0,!0),Gi&&oe(te,"click",Ma),bn&&oe(yn,"gesturestart",Bs),Z&&oe(yn,"gestureend",ji),Ln&&oe(te,f+"enter",xo),li&&oe(te,f+"leave",Dr),ci&&oe(te,f+"move",ks)),le.isEnabled=!0,le.isDragging=le.isGesturing=le.isPressed=Vt=yi=!1,le._vx.reset(),le._vy.reset(),cs=Sn(),Fs=Pr(),yt&&yt.type&&Os(yt),Ns&&Ns(le)),le},le.disable=function(){le.isEnabled&&(C.filter(function(yt){return yt!==le&&G(yt.target)}).length||ee(us?yn:te,"scroll",ce),le.isPressed&&(le._vx.reset(),le._vy.reset(),ee(Tn?te:yn,g[1],hs,!0)),ee(us?yn:te,"scroll",$i,ui),ee(te,"wheel",Zi,ui),ee(te,g[0],Os,ui),ee(yn,g[2],Ut),ee(yn,g[3],Ut),ee(te,"click",xa,!0),ee(te,"click",Ma),ee(yn,"gesturestart",Bs),ee(yn,"gestureend",ji),ee(te,f+"enter",xo),ee(te,f+"leave",Dr),ee(te,f+"move",ks),le.isEnabled=le.isPressed=le.isDragging=!1,os&&os(le))},le.kill=le.revert=function(){le.disable();var yt=C.indexOf(le);yt>=0&&C.splice(yt,1),M===le&&(M=0)},C.push(le),Tn&&G(te)&&(M=le),le.enable(mn)},i(j,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),j}();be.version="3.12.7",be.create=function(j){return new be(j)},be.register=we,be.getAll=function(){return C.slice()},be.getById=function(j){return C.filter(function(S){return S.vars.id===j})[0]},R()&&s.registerPlugin(be);/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pe,et,Be,Qe,U,Ze,Ft,Ot,qe,en,it,ht,L,y,ie,de,ve,ge,je,ke,Ve,ft,Me,We,Rt,Ke,Ne,ct,ot,vt,z,Re,W,me,Ue=1,Ye=Date.now,Ct=Ye(),Bt=0,on=0,kt=function(S,N,A){var w=E(S)&&(S.substr(0,6)==="clamp("||S.indexOf("max")>-1);return A["_"+N+"Clamp"]=w,w?S.substr(6,S.length-7):S},vi=function(S,N){return N&&(!E(S)||S.substr(0,6)!=="clamp(")?"clamp("+S+")":S},xi=function j(){return on&&requestAnimationFrame(j)},Rs=function(){return y=1},ki=function(){return y=0},Zn=function(S){return S},lr=function(S){return Math.round(S*1e5)/1e5||0},Cs=function(){return typeof window<"u"},cr=function(){return pe||Cs()&&(pe=window.gsap)&&pe.registerPlugin&&pe},zi=function(S){return!!~Ft.indexOf(S)},br=function(S){return(S==="Height"?z:Be["inner"+S])||U["client"+S]||Ze["client"+S]},Ps=function(S){return b(S,"getBoundingClientRect")||(zi(S)?function(){return Zl.width=Be.innerWidth,Zl.height=z,Zl}:function(){return It(S)})},fo=function(S,N,A){var w=A.d,X=A.d2,ue=A.a;return(ue=b(S,"getBoundingClientRect"))?function(){return ue()[w]}:function(){return(N?br(X):S["client"+X])||0}},po=function(S,N){return!N||~D.indexOf(S)?Ps(S):function(){return Zl}},si=function(S,N){var A=N.s,w=N.d2,X=N.d,ue=N.a;return Math.max(0,(A="scroll"+w)&&(ue=b(S,A))?ue()-Ps(S)()[X]:zi(S)?(U[A]||Ze[A])-br(w):S[A]-S["offset"+w])},ss=function(S,N){for(var A=0;A<je.length;A+=3)(!N||~N.indexOf(je[A+1]))&&S(je[A],je[A+1],je[A+2])},E=function(S){return typeof S=="string"},H=function(S){return typeof S=="function"},d=function(S){return typeof S=="number"},_=function(S){return typeof S=="object"},v=function(S,N,A){return S&&S.progress(N?0:1)&&A&&S.pause()},I=function(S,N){if(S.enabled){var A=S._ctx?S._ctx.add(function(){return N(S)}):N(S);A&&A.totalTime&&(S.callbackAnimation=A)}},V=Math.abs,O="left",$="top",ae="right",J="bottom",K="width",ne="height",ye="Right",Ae="Left",De="Top",Ie="Bottom",re="padding",Ce="margin",Fe="Width",xt="Height",ut="px",bt=function(S){return Be.getComputedStyle(S)},Kt=function(S){var N=bt(S).position;S.style.position=N==="absolute"||N==="fixed"?N:"relative"},Je=function(S,N){for(var A in N)A in S||(S[A]=N[A]);return S},It=function(S,N){var A=N&&bt(S)[ie]!=="matrix(1, 0, 0, 1, 0, 0)"&&pe.to(S,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),w=S.getBoundingClientRect();return A&&A.progress(0).kill(),w},xn=function(S,N){var A=N.d2;return S["offset"+A]||S["client"+A]||0},Gt=function(S){var N=[],A=S.labels,w=S.duration(),X;for(X in A)N.push(A[X]/w);return N},zt=function(S){return function(N){return pe.utils.snap(Gt(S),N)}},Yt=function(S){var N=pe.utils.snap(S),A=Array.isArray(S)&&S.slice(0).sort(function(w,X){return w-X});return A?function(w,X,ue){ue===void 0&&(ue=.001);var te;if(!X)return N(w);if(X>0){for(w-=ue,te=0;te<A.length;te++)if(A[te]>=w)return A[te];return A[te-1]}else for(te=A.length,w+=ue;te--;)if(A[te]<=w)return A[te];return A[0]}:function(w,X,ue){ue===void 0&&(ue=.001);var te=N(w);return!X||Math.abs(te-w)<ue||te-w<0==X<0?te:N(X<0?w-S:w+S)}},Mi=function(S){return function(N,A){return Yt(Gt(S))(N,A.direction)}},ur=function(S,N,A,w){return A.split(",").forEach(function(X){return S(N,X,w)})},Zt=function(S,N,A,w,X){return S.addEventListener(N,A,{passive:!w,capture:!!X})},dn=function(S,N,A,w){return S.removeEventListener(N,A,!!w)},Gl=function(S,N,A){A=A&&A.wheelHandler,A&&(S(N,"wheel",A),S(N,"touchmove",A))},wd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Vl={toggleActions:"play",anticipatePin:0},Wl={top:0,left:0,center:.5,bottom:1,right:1},Xl=function(S,N){if(E(S)){var A=S.indexOf("="),w=~A?+(S.charAt(A-1)+1)*parseFloat(S.substr(A+1)):0;~A&&(S.indexOf("%")>A&&(w*=N/100),S=S.substr(0,A-1)),S=w+(S in Wl?Wl[S]*N:~S.indexOf("%")?parseFloat(S)*N/100:parseFloat(S)||0)}return S},Yl=function(S,N,A,w,X,ue,te,Xe){var pt=X.startColor,jt=X.endColor,Dt=X.fontSize,nt=X.indent,xe=X.fontWeight,at=Qe.createElement("div"),mn=zi(A)||b(A,"pinType")==="fixed",sn=S.indexOf("scroller")!==-1,In=mn?Ze:A,fn=S.indexOf("start")!==-1,Wn=fn?pt:jt,Et="border-color:"+Wn+";font-size:"+Dt+";color:"+Wn+";font-weight:"+xe+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return Et+="position:"+((sn||Xe)&&mn?"fixed;":"absolute;"),(sn||Xe||!mn)&&(Et+=(w===Te?ae:J)+":"+(ue+parseFloat(nt))+"px;"),te&&(Et+="box-sizing:border-box;text-align:left;width:"+te.offsetWidth+"px;"),at._isStart=fn,at.setAttribute("class","gsap-marker-"+S+(N?" marker-"+N:"")),at.style.cssText=Et,at.innerText=N||N===0?S+"-"+N:S,In.children[0]?In.insertBefore(at,In.children[0]):In.appendChild(at),at._offset=at["offset"+w.op.d2],ql(at,0,w,fn),at},ql=function(S,N,A,w){var X={display:"block"},ue=A[w?"os2":"p2"],te=A[w?"p2":"os2"];S._isFlipped=w,X[A.a+"Percent"]=w?-100:0,X[A.a]=w?"1px":0,X["border"+ue+Fe]=1,X["border"+te+Fe]=0,X[A.p]=N+"px",pe.set(S,X)},Pt=[],_u={},ga,Rd=function(){return Ye()-Bt>34&&(ga||(ga=requestAnimationFrame(Ar)))},mo=function(){(!Me||!Me.isPressed||Me.startX>Ze.clientWidth)&&(k.cache++,Me?ga||(ga=requestAnimationFrame(Ar)):Ar(),Bt||Ls("scrollStart"),Bt=Ye())},vu=function(){Ke=Be.innerWidth,Rt=Be.innerHeight},_a=function(S){k.cache++,(S===!0||!L&&!ft&&!Qe.fullscreenElement&&!Qe.webkitFullscreenElement&&(!We||Ke!==Be.innerWidth||Math.abs(Be.innerHeight-Rt)>Be.innerHeight*.25))&&Ot.restart(!0)},Is={},Fm=[],Cd=function j(){return dn(Lt,"scrollEnd",j)||Us(!0)},Ls=function(S){return Is[S]&&Is[S].map(function(N){return N()})||Fm},Ri=[],Pd=function(S){for(var N=0;N<Ri.length;N+=5)(!S||Ri[N+4]&&Ri[N+4].query===S)&&(Ri[N].style.cssText=Ri[N+1],Ri[N].getBBox&&Ri[N].setAttribute("transform",Ri[N+2]||""),Ri[N+3].uncache=1)},xu=function(S,N){var A;for(de=0;de<Pt.length;de++)A=Pt[de],A&&(!N||A._ctx===N)&&(S?A.kill(1):A.revert(!0,!0));Re=!0,N&&Pd(N),N||Ls("revert")},Id=function(S,N){k.cache++,(N||!oi)&&k.forEach(function(A){return H(A)&&A.cacheID++&&(A.rec=0)}),E(S)&&(Be.history.scrollRestoration=ot=S)},oi,Ds=0,Ld,Om=function(){if(Ld!==Ds){var S=Ld=Ds;requestAnimationFrame(function(){return S===Ds&&Us(!0)})}},Dd=function(){Ze.appendChild(vt),z=!Me&&vt.offsetHeight||Be.innerHeight,Ze.removeChild(vt)},Ud=function(S){return qe(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(N){return N.style.display=S?"none":"block"})},Us=function(S,N){if(U=Qe.documentElement,Ze=Qe.body,Ft=[Be,Qe,U,Ze],Bt&&!S&&!Re){Zt(Lt,"scrollEnd",Cd);return}Dd(),oi=Lt.isRefreshing=!0,k.forEach(function(w){return H(w)&&++w.cacheID&&(w.rec=w())});var A=Ls("refreshInit");ke&&Lt.sort(),N||xu(),k.forEach(function(w){H(w)&&(w.smooth&&(w.target.style.scrollBehavior="auto"),w(0))}),Pt.slice(0).forEach(function(w){return w.refresh()}),Re=!1,Pt.forEach(function(w){if(w._subPinOffset&&w.pin){var X=w.vars.horizontal?"offsetWidth":"offsetHeight",ue=w.pin[X];w.revert(!0,1),w.adjustPinSpacing(w.pin[X]-ue),w.refresh()}}),W=1,Ud(!0),Pt.forEach(function(w){var X=si(w.scroller,w._dir),ue=w.vars.end==="max"||w._endClamp&&w.end>X,te=w._startClamp&&w.start>=X;(ue||te)&&w.setPositions(te?X-1:w.start,ue?Math.max(te?X:w.start+1,X):w.end,!0)}),Ud(!1),W=0,A.forEach(function(w){return w&&w.render&&w.render(-1)}),k.forEach(function(w){H(w)&&(w.smooth&&requestAnimationFrame(function(){return w.target.style.scrollBehavior="smooth"}),w.rec&&w(w.rec))}),Id(ot,1),Ot.pause(),Ds++,oi=2,Ar(2),Pt.forEach(function(w){return H(w.vars.onRefresh)&&w.vars.onRefresh(w)}),oi=Lt.isRefreshing=!1,Ls("refresh")},Mu=0,Kl=1,va,Ar=function(S){if(S===2||!oi&&!Re){Lt.isUpdating=!0,va&&va.update(0);var N=Pt.length,A=Ye(),w=A-Ct>=50,X=N&&Pt[0].scroll();if(Kl=Mu>X?-1:1,oi||(Mu=X),w&&(Bt&&!y&&A-Bt>200&&(Bt=0,Ls("scrollEnd")),it=Ct,Ct=A),Kl<0){for(de=N;de-- >0;)Pt[de]&&Pt[de].update(0,w);Kl=1}else for(de=0;de<N;de++)Pt[de]&&Pt[de].update(0,w);Lt.isUpdating=!1}ga=0},Su=[O,$,J,ae,Ce+Ie,Ce+ye,Ce+De,Ce+Ae,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],jl=Su.concat([K,ne,"boxSizing","max"+Fe,"max"+xt,"position",Ce,re,re+De,re+ye,re+Ie,re+Ae]),Bm=function(S,N,A){go(A);var w=S._gsap;if(w.spacerIsNative)go(w.spacerState);else if(S._gsap.swappedIn){var X=N.parentNode;X&&(X.insertBefore(S,N),X.removeChild(N))}S._gsap.swappedIn=!1},yu=function(S,N,A,w){if(!S._gsap.swappedIn){for(var X=Su.length,ue=N.style,te=S.style,Xe;X--;)Xe=Su[X],ue[Xe]=A[Xe];ue.position=A.position==="absolute"?"absolute":"relative",A.display==="inline"&&(ue.display="inline-block"),te[J]=te[ae]="auto",ue.flexBasis=A.flexBasis||"auto",ue.overflow="visible",ue.boxSizing="border-box",ue[K]=xn(S,se)+ut,ue[ne]=xn(S,Te)+ut,ue[re]=te[Ce]=te[$]=te[O]="0",go(w),te[K]=te["max"+Fe]=A[K],te[ne]=te["max"+xt]=A[ne],te[re]=A[re],S.parentNode!==N&&(S.parentNode.insertBefore(N,S),N.appendChild(S)),S._gsap.swappedIn=!0}},km=/([A-Z])/g,go=function(S){if(S){var N=S.t.style,A=S.length,w=0,X,ue;for((S.t._gsap||pe.core.getCache(S.t)).uncache=1;w<A;w+=2)ue=S[w+1],X=S[w],ue?N[X]=ue:N[X]&&N.removeProperty(X.replace(km,"-$1").toLowerCase())}},$l=function(S){for(var N=jl.length,A=S.style,w=[],X=0;X<N;X++)w.push(jl[X],A[jl[X]]);return w.t=S,w},zm=function(S,N,A){for(var w=[],X=S.length,ue=A?8:0,te;ue<X;ue+=2)te=S[ue],w.push(te,te in N?N[te]:S[ue+1]);return w.t=S.t,w},Zl={left:0,top:0},Nd=function(S,N,A,w,X,ue,te,Xe,pt,jt,Dt,nt,xe,at){H(S)&&(S=S(Xe)),E(S)&&S.substr(0,3)==="max"&&(S=nt+(S.charAt(4)==="="?Xl("0"+S.substr(3),A):0));var mn=xe?xe.time():0,sn,In,fn;if(xe&&xe.seek(0),isNaN(S)||(S=+S),d(S))xe&&(S=pe.utils.mapRange(xe.scrollTrigger.start,xe.scrollTrigger.end,0,nt,S)),te&&ql(te,A,w,!0);else{H(N)&&(N=N(Xe));var Wn=(S||"0").split(" "),Et,Hi,cn,_t;fn=Le(N,Xe)||Ze,Et=It(fn)||{},(!Et||!Et.left&&!Et.top)&&bt(fn).display==="none"&&(_t=fn.style.display,fn.style.display="block",Et=It(fn),_t?fn.style.display=_t:fn.style.removeProperty("display")),Hi=Xl(Wn[0],Et[w.d]),cn=Xl(Wn[1]||"0",A),S=Et[w.p]-pt[w.p]-jt+Hi+X-cn,te&&ql(te,cn,w,A-cn<20||te._isStart&&cn>20),A-=A-cn}if(at&&(Xe[at]=S||-.001,S<0&&(S=0)),ue){var ai=S+A,Si=ue._isStart;sn="scroll"+w.d2,ql(ue,ai,w,Si&&ai>20||!Si&&(Dt?Math.max(Ze[sn],U[sn]):ue.parentNode[sn])<=ai+1),Dt&&(pt=It(te),Dt&&(ue.style[w.op.p]=pt[w.op.p]-w.op.m-ue._offset+ut))}return xe&&fn&&(sn=It(fn),xe.seek(nt),In=It(fn),xe._caScrollDist=sn[w.p]-In[w.p],S=S/xe._caScrollDist*nt),xe&&xe.seek(mn),xe?S:Math.round(S)},Hm=/(webkit|moz|length|cssText|inset)/i,Fd=function(S,N,A,w){if(S.parentNode!==N){var X=S.style,ue,te;if(N===Ze){S._stOrig=X.cssText,te=bt(S);for(ue in te)!+ue&&!Hm.test(ue)&&te[ue]&&typeof X[ue]=="string"&&ue!=="0"&&(X[ue]=te[ue]);X.top=A,X.left=w}else X.cssText=S._stOrig;pe.core.getCache(S).uncache=1,N.appendChild(S)}},Od=function(S,N,A){var w=N,X=w;return function(ue){var te=Math.round(S());return te!==w&&te!==X&&Math.abs(te-w)>3&&Math.abs(te-X)>3&&(ue=te,A&&A()),X=w,w=Math.round(ue),w}},Jl=function(S,N,A){var w={};w[N.p]="+="+A,pe.set(S,w)},Bd=function(S,N){var A=Ge(S,N),w="_scroll"+N.p2,X=function ue(te,Xe,pt,jt,Dt){var nt=ue.tween,xe=Xe.onComplete,at={};pt=pt||A();var mn=Od(A,pt,function(){nt.kill(),ue.tween=0});return Dt=jt&&Dt||0,jt=jt||te-pt,nt&&nt.kill(),Xe[w]=te,Xe.inherit=!1,Xe.modifiers=at,at[w]=function(){return mn(pt+jt*nt.ratio+Dt*nt.ratio*nt.ratio)},Xe.onUpdate=function(){k.cache++,ue.tween&&Ar()},Xe.onComplete=function(){ue.tween=0,xe&&xe.call(nt)},nt=ue.tween=pe.to(S,Xe),nt};return S[w]=A,A.wheelHandler=function(){return X.tween&&X.tween.kill()&&(X.tween=0)},Zt(S,"wheel",A.wheelHandler),Lt.isTouch&&Zt(S,"touchmove",A.wheelHandler),X},Lt=function(){function j(N,A){et||j.register(pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ct(this),this.init(N,A)}var S=j.prototype;return S.init=function(A,w){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!on){this.update=this.refresh=this.kill=Zn;return}A=Je(E(A)||d(A)||A.nodeType?{trigger:A}:A,Vl);var X=A,ue=X.onUpdate,te=X.toggleClass,Xe=X.id,pt=X.onToggle,jt=X.onRefresh,Dt=X.scrub,nt=X.trigger,xe=X.pin,at=X.pinSpacing,mn=X.invalidateOnRefresh,sn=X.anticipatePin,In=X.onScrubComplete,fn=X.onSnapComplete,Wn=X.once,Et=X.snap,Hi=X.pinReparent,cn=X.pinSpacer,_t=X.containerAnimation,ai=X.fastScrollEnd,Si=X.preventOverlaps,tt=A.horizontal||A.containerAnimation&&A.horizontal!==!1?se:Te,kn=!Dt&&Dt!==0,mt=Le(A.scroller||Be),wr=pe.core.getCache(mt),Ln=zi(mt),li=("pinType"in A?A.pinType:b(mt,"pinType")||Ln&&"fixed")==="fixed",ci=[A.onEnter,A.onLeave,A.onEnterBack,A.onLeaveBack],nn=kn&&A.toggleActions.split(" "),Tn="markers"in A?A.markers:Vl.markers,bn=Ln?0:parseFloat(bt(mt)["border"+tt.p2+Fe])||0,Z=this,Dn=A.onRefreshInit&&function(){return A.onRefreshInit(Z)},Ns=fo(mt,Ln,tt),os=po(mt,Ln),Gi=0,Rr=0,ui=0,An=Ge(mt,tt),hi,Jn,as,di,yi,Vt,Mn,Ei,Ci,le,Pi,Cr,ls,Sn,Pr,cs,Fs,zn,us,yn,Ki,Vi,Ir,xa,wn,ec,Lr,_o,vo,hs,Os,Ut,Bs,ji,$i,Zi,ks,xo,Dr;if(Z._startClamp=Z._endClamp=!1,Z._dir=tt,sn*=45,Z.scroller=mt,Z.scroll=_t?_t.time.bind(_t):An,di=An(),Z.vars=A,w=w||A.animation,"refreshPriority"in A&&(ke=1,A.refreshPriority===-9999&&(va=Z)),wr.tweenScroll=wr.tweenScroll||{top:Bd(mt,Te),left:Bd(mt,se)},Z.tweenTo=hi=wr.tweenScroll[tt.p],Z.scrubDuration=function(He){Bs=d(He)&&He,Bs?Ut?Ut.duration(He):Ut=pe.to(w,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Bs,paused:!0,onComplete:function(){return In&&In(Z)}}):(Ut&&Ut.progress(1).kill(),Ut=0)},w&&(w.vars.lazy=!1,w._initted&&!Z.isReverted||w.vars.immediateRender!==!1&&A.immediateRender!==!1&&w.duration()&&w.render(0,!0,!0),Z.animation=w.pause(),w.scrollTrigger=Z,Z.scrubDuration(Dt),hs=0,Xe||(Xe=w.vars.id)),Et&&((!_(Et)||Et.push)&&(Et={snapTo:Et}),"scrollBehavior"in Ze.style&&pe.set(Ln?[Ze,U]:mt,{scrollBehavior:"auto"}),k.forEach(function(He){return H(He)&&He.target===(Ln?Qe.scrollingElement||U:mt)&&(He.smooth=!1)}),as=H(Et.snapTo)?Et.snapTo:Et.snapTo==="labels"?zt(w):Et.snapTo==="labelsDirectional"?Mi(w):Et.directional!==!1?function(He,Mt){return Yt(Et.snapTo)(He,Ye()-Rr<500?0:Mt.direction)}:pe.utils.snap(Et.snapTo),ji=Et.duration||{min:.1,max:2},ji=_(ji)?en(ji.min,ji.max):en(ji,ji),$i=pe.delayedCall(Et.delay||Bs/2||.1,function(){var He=An(),Mt=Ye()-Rr<500,rt=hi.tween;if((Mt||Math.abs(Z.getVelocity())<10)&&!rt&&!y&&Gi!==He){var St=(He-Vt)/Sn,Hn=w&&!kn?w.totalProgress():St,Ht=Mt?0:(Hn-Os)/(Ye()-it)*1e3||0,En=pe.utils.clamp(-St,1-St,V(Ht/2)*Ht/.185),Qn=St+(Et.inertia===!1?0:En),gn,un,rn=Et,Ji=rn.onStart,pn=rn.onInterrupt,Ii=rn.onComplete;if(gn=as(Qn,Z),d(gn)||(gn=Qn),un=Math.max(0,Math.round(Vt+gn*Sn)),He<=Mn&&He>=Vt&&un!==He){if(rt&&!rt._initted&&rt.data<=V(un-He))return;Et.inertia===!1&&(En=gn-St),hi(un,{duration:ji(V(Math.max(V(Qn-Hn),V(gn-Hn))*.185/Ht/.05||0)),ease:Et.ease||"power3",data:V(un-He),onInterrupt:function(){return $i.restart(!0)&&pn&&pn(Z)},onComplete:function(){Z.update(),Gi=An(),w&&!kn&&(Ut?Ut.resetTo("totalProgress",gn,w._tTime/w._tDur):w.progress(gn)),hs=Os=w&&!kn?w.totalProgress():Z.progress,fn&&fn(Z),Ii&&Ii(Z)}},He,En*Sn,un-He-En*Sn),Ji&&Ji(Z,hi.tween)}}else Z.isActive&&Gi!==He&&$i.restart(!0)}).pause()),Xe&&(_u[Xe]=Z),nt=Z.trigger=Le(nt||xe!==!0&&xe),Dr=nt&&nt._gsap&&nt._gsap.stRevert,Dr&&(Dr=Dr(Z)),xe=xe===!0?nt:Le(xe),E(te)&&(te={targets:nt,className:te}),xe&&(at===!1||at===Ce||(at=!at&&xe.parentNode&&xe.parentNode.style&&bt(xe.parentNode).display==="flex"?!1:re),Z.pin=xe,Jn=pe.core.getCache(xe),Jn.spacer?Pr=Jn.pinState:(cn&&(cn=Le(cn),cn&&!cn.nodeType&&(cn=cn.current||cn.nativeElement),Jn.spacerIsNative=!!cn,cn&&(Jn.spacerState=$l(cn))),Jn.spacer=zn=cn||Qe.createElement("div"),zn.classList.add("pin-spacer"),Xe&&zn.classList.add("pin-spacer-"+Xe),Jn.pinState=Pr=$l(xe)),A.force3D!==!1&&pe.set(xe,{force3D:!0}),Z.spacer=zn=Jn.spacer,vo=bt(xe),xa=vo[at+tt.os2],yn=pe.getProperty(xe),Ki=pe.quickSetter(xe,tt.a,ut),yu(xe,zn,vo),Fs=$l(xe)),Tn){Cr=_(Tn)?Je(Tn,wd):wd,le=Yl("scroller-start",Xe,mt,tt,Cr,0),Pi=Yl("scroller-end",Xe,mt,tt,Cr,0,le),us=le["offset"+tt.op.d2];var Ma=Le(b(mt,"content")||mt);Ei=this.markerStart=Yl("start",Xe,Ma,tt,Cr,us,0,_t),Ci=this.markerEnd=Yl("end",Xe,Ma,tt,Cr,us,0,_t),_t&&(xo=pe.quickSetter([Ei,Ci],tt.a,ut)),!li&&!(D.length&&b(mt,"fixedMarkers")===!0)&&(Kt(Ln?Ze:mt),pe.set([le,Pi],{force3D:!0}),ec=pe.quickSetter(le,tt.a,ut),_o=pe.quickSetter(Pi,tt.a,ut))}if(_t){var yt=_t.vars.onUpdate,dt=_t.vars.onUpdateParams;_t.eventCallback("onUpdate",function(){Z.update(0,0,1),yt&&yt.apply(_t,dt||[])})}if(Z.previous=function(){return Pt[Pt.indexOf(Z)-1]},Z.next=function(){return Pt[Pt.indexOf(Z)+1]},Z.revert=function(He,Mt){if(!Mt)return Z.kill(!0);var rt=He!==!1||!Z.enabled,St=L;rt!==Z.isReverted&&(rt&&(Zi=Math.max(An(),Z.scroll.rec||0),ui=Z.progress,ks=w&&w.progress()),Ei&&[Ei,Ci,le,Pi].forEach(function(Hn){return Hn.style.display=rt?"none":"block"}),rt&&(L=Z,Z.update(rt)),xe&&(!Hi||!Z.isActive)&&(rt?Bm(xe,zn,Pr):yu(xe,zn,bt(xe),wn)),rt||Z.update(rt),L=St,Z.isReverted=rt)},Z.refresh=function(He,Mt,rt,St){if(!((L||!Z.enabled)&&!Mt)){if(xe&&He&&Bt){Zt(j,"scrollEnd",Cd);return}!oi&&Dn&&Dn(Z),L=Z,hi.tween&&!rt&&(hi.tween.kill(),hi.tween=0),Ut&&Ut.pause(),mn&&w&&w.revert({kill:!1}).invalidate(),Z.isReverted||Z.revert(!0,!0),Z._subPinOffset=!1;var Hn=Ns(),Ht=os(),En=_t?_t.duration():si(mt,tt),Qn=Sn<=.01,gn=0,un=St||0,rn=_(rt)?rt.end:A.end,Ji=A.endTrigger||nt,pn=_(rt)?rt.start:A.start||(A.start===0||!nt?0:xe?"0 0":"0 100%"),Ii=Z.pinnedContainer=A.pinnedContainer&&Le(A.pinnedContainer,Z),hr=nt&&Math.max(0,Pt.indexOf(Z))||0,Xn=hr,Yn,ei,zs,tc,ti,Un,dr,Tu,Vd,Sa,fr,ya,nc;for(Tn&&_(rt)&&(ya=pe.getProperty(le,tt.p),nc=pe.getProperty(Pi,tt.p));Xn-- >0;)Un=Pt[Xn],Un.end||Un.refresh(0,1)||(L=Z),dr=Un.pin,dr&&(dr===nt||dr===xe||dr===Ii)&&!Un.isReverted&&(Sa||(Sa=[]),Sa.unshift(Un),Un.revert(!0,!0)),Un!==Pt[Xn]&&(hr--,Xn--);for(H(pn)&&(pn=pn(Z)),pn=kt(pn,"start",Z),Vt=Nd(pn,nt,Hn,tt,An(),Ei,le,Z,Ht,bn,li,En,_t,Z._startClamp&&"_startClamp")||(xe?-.001:0),H(rn)&&(rn=rn(Z)),E(rn)&&!rn.indexOf("+=")&&(~rn.indexOf(" ")?rn=(E(pn)?pn.split(" ")[0]:"")+rn:(gn=Xl(rn.substr(2),Hn),rn=E(pn)?pn:(_t?pe.utils.mapRange(0,_t.duration(),_t.scrollTrigger.start,_t.scrollTrigger.end,Vt):Vt)+gn,Ji=nt)),rn=kt(rn,"end",Z),Mn=Math.max(Vt,Nd(rn||(Ji?"100% 0":En),Ji,Hn,tt,An()+gn,Ci,Pi,Z,Ht,bn,li,En,_t,Z._endClamp&&"_endClamp"))||-.001,gn=0,Xn=hr;Xn--;)Un=Pt[Xn],dr=Un.pin,dr&&Un.start-Un._pinPush<=Vt&&!_t&&Un.end>0&&(Yn=Un.end-(Z._startClamp?Math.max(0,Un.start):Un.start),(dr===nt&&Un.start-Un._pinPush<Vt||dr===Ii)&&isNaN(pn)&&(gn+=Yn*(1-Un.progress)),dr===xe&&(un+=Yn));if(Vt+=gn,Mn+=gn,Z._startClamp&&(Z._startClamp+=gn),Z._endClamp&&!oi&&(Z._endClamp=Mn||-.001,Mn=Math.min(Mn,si(mt,tt))),Sn=Mn-Vt||(Vt-=.01)&&.001,Qn&&(ui=pe.utils.clamp(0,1,pe.utils.normalize(Vt,Mn,Zi))),Z._pinPush=un,Ei&&gn&&(Yn={},Yn[tt.a]="+="+gn,Ii&&(Yn[tt.p]="-="+An()),pe.set([Ei,Ci],Yn)),xe&&!(W&&Z.end>=si(mt,tt)))Yn=bt(xe),tc=tt===Te,zs=An(),Vi=parseFloat(yn(tt.a))+un,!En&&Mn>1&&(fr=(Ln?Qe.scrollingElement||U:mt).style,fr={style:fr,value:fr["overflow"+tt.a.toUpperCase()]},Ln&&bt(Ze)["overflow"+tt.a.toUpperCase()]!=="scroll"&&(fr.style["overflow"+tt.a.toUpperCase()]="scroll")),yu(xe,zn,Yn),Fs=$l(xe),ei=It(xe,!0),Tu=li&&Ge(mt,tc?se:Te)(),at?(wn=[at+tt.os2,Sn+un+ut],wn.t=zn,Xn=at===re?xn(xe,tt)+Sn+un:0,Xn&&(wn.push(tt.d,Xn+ut),zn.style.flexBasis!=="auto"&&(zn.style.flexBasis=Xn+ut)),go(wn),Ii&&Pt.forEach(function(Ea){Ea.pin===Ii&&Ea.vars.pinSpacing!==!1&&(Ea._subPinOffset=!0)}),li&&An(Zi)):(Xn=xn(xe,tt),Xn&&zn.style.flexBasis!=="auto"&&(zn.style.flexBasis=Xn+ut)),li&&(ti={top:ei.top+(tc?zs-Vt:Tu)+ut,left:ei.left+(tc?Tu:zs-Vt)+ut,boxSizing:"border-box",position:"fixed"},ti[K]=ti["max"+Fe]=Math.ceil(ei.width)+ut,ti[ne]=ti["max"+xt]=Math.ceil(ei.height)+ut,ti[Ce]=ti[Ce+De]=ti[Ce+ye]=ti[Ce+Ie]=ti[Ce+Ae]="0",ti[re]=Yn[re],ti[re+De]=Yn[re+De],ti[re+ye]=Yn[re+ye],ti[re+Ie]=Yn[re+Ie],ti[re+Ae]=Yn[re+Ae],cs=zm(Pr,ti,Hi),oi&&An(0)),w?(Vd=w._initted,Ve(1),w.render(w.duration(),!0,!0),Ir=yn(tt.a)-Vi+Sn+un,Lr=Math.abs(Sn-Ir)>1,li&&Lr&&cs.splice(cs.length-2,2),w.render(0,!0,!0),Vd||w.invalidate(!0),w.parent||w.totalTime(w.totalTime()),Ve(0)):Ir=Sn,fr&&(fr.value?fr.style["overflow"+tt.a.toUpperCase()]=fr.value:fr.style.removeProperty("overflow-"+tt.a));else if(nt&&An()&&!_t)for(ei=nt.parentNode;ei&&ei!==Ze;)ei._pinOffset&&(Vt-=ei._pinOffset,Mn-=ei._pinOffset),ei=ei.parentNode;Sa&&Sa.forEach(function(Ea){return Ea.revert(!1,!0)}),Z.start=Vt,Z.end=Mn,di=yi=oi?Zi:An(),!_t&&!oi&&(di<Zi&&An(Zi),Z.scroll.rec=0),Z.revert(!1,!0),Rr=Ye(),$i&&(Gi=-1,$i.restart(!0)),L=0,w&&kn&&(w._initted||ks)&&w.progress()!==ks&&w.progress(ks||0,!0).render(w.time(),!0,!0),(Qn||ui!==Z.progress||_t||mn||w&&!w._initted)&&(w&&!kn&&w.totalProgress(_t&&Vt<-.001&&!ui?pe.utils.normalize(Vt,Mn,0):ui,!0),Z.progress=Qn||(di-Vt)/Sn===ui?0:ui),xe&&at&&(zn._pinOffset=Math.round(Z.progress*Ir)),Ut&&Ut.invalidate(),isNaN(ya)||(ya-=pe.getProperty(le,tt.p),nc-=pe.getProperty(Pi,tt.p),Jl(le,tt,ya),Jl(Ei,tt,ya-(St||0)),Jl(Pi,tt,nc),Jl(Ci,tt,nc-(St||0))),Qn&&!oi&&Z.update(),jt&&!oi&&!ls&&(ls=!0,jt(Z),ls=!1)}},Z.getVelocity=function(){return(An()-yi)/(Ye()-it)*1e3||0},Z.endAnimation=function(){v(Z.callbackAnimation),w&&(Ut?Ut.progress(1):w.paused()?kn||v(w,Z.direction<0,1):v(w,w.reversed()))},Z.labelToScroll=function(He){return w&&w.labels&&(Vt||Z.refresh()||Vt)+w.labels[He]/w.duration()*Sn||0},Z.getTrailing=function(He){var Mt=Pt.indexOf(Z),rt=Z.direction>0?Pt.slice(0,Mt).reverse():Pt.slice(Mt+1);return(E(He)?rt.filter(function(St){return St.vars.preventOverlaps===He}):rt).filter(function(St){return Z.direction>0?St.end<=Vt:St.start>=Mn})},Z.update=function(He,Mt,rt){if(!(_t&&!rt&&!He)){var St=oi===!0?Zi:Z.scroll(),Hn=He?0:(St-Vt)/Sn,Ht=Hn<0?0:Hn>1?1:Hn||0,En=Z.progress,Qn,gn,un,rn,Ji,pn,Ii,hr;if(Mt&&(yi=di,di=_t?An():St,Et&&(Os=hs,hs=w&&!kn?w.totalProgress():Ht)),sn&&xe&&!L&&!Ue&&Bt&&(!Ht&&Vt<St+(St-yi)/(Ye()-it)*sn?Ht=1e-4:Ht===1&&Mn>St+(St-yi)/(Ye()-it)*sn&&(Ht=.9999)),Ht!==En&&Z.enabled){if(Qn=Z.isActive=!!Ht&&Ht<1,gn=!!En&&En<1,pn=Qn!==gn,Ji=pn||!!Ht!=!!En,Z.direction=Ht>En?1:-1,Z.progress=Ht,Ji&&!L&&(un=Ht&&!En?0:Ht===1?1:En===1?2:3,kn&&(rn=!pn&&nn[un+1]!=="none"&&nn[un+1]||nn[un],hr=w&&(rn==="complete"||rn==="reset"||rn in w))),Si&&(pn||hr)&&(hr||Dt||!w)&&(H(Si)?Si(Z):Z.getTrailing(Si).forEach(function(zs){return zs.endAnimation()})),kn||(Ut&&!L&&!Ue?(Ut._dp._time-Ut._start!==Ut._time&&Ut.render(Ut._dp._time-Ut._start),Ut.resetTo?Ut.resetTo("totalProgress",Ht,w._tTime/w._tDur):(Ut.vars.totalProgress=Ht,Ut.invalidate().restart())):w&&w.totalProgress(Ht,!!(L&&(Rr||He)))),xe){if(He&&at&&(zn.style[at+tt.os2]=xa),!li)Ki(lr(Vi+Ir*Ht));else if(Ji){if(Ii=!He&&Ht>En&&Mn+1>St&&St+1>=si(mt,tt),Hi)if(!He&&(Qn||Ii)){var Xn=It(xe,!0),Yn=St-Vt;Fd(xe,Ze,Xn.top+(tt===Te?Yn:0)+ut,Xn.left+(tt===Te?0:Yn)+ut)}else Fd(xe,zn);go(Qn||Ii?cs:Fs),Lr&&Ht<1&&Qn||Ki(Vi+(Ht===1&&!Ii?Ir:0))}}Et&&!hi.tween&&!L&&!Ue&&$i.restart(!0),te&&(pn||Wn&&Ht&&(Ht<1||!me))&&qe(te.targets).forEach(function(zs){return zs.classList[Qn||Wn?"add":"remove"](te.className)}),ue&&!kn&&!He&&ue(Z),Ji&&!L?(kn&&(hr&&(rn==="complete"?w.pause().totalProgress(1):rn==="reset"?w.restart(!0).pause():rn==="restart"?w.restart(!0):w[rn]()),ue&&ue(Z)),(pn||!me)&&(pt&&pn&&I(Z,pt),ci[un]&&I(Z,ci[un]),Wn&&(Ht===1?Z.kill(!1,1):ci[un]=0),pn||(un=Ht===1?1:3,ci[un]&&I(Z,ci[un]))),ai&&!Qn&&Math.abs(Z.getVelocity())>(d(ai)?ai:2500)&&(v(Z.callbackAnimation),Ut?Ut.progress(1):v(w,rn==="reverse"?1:!Ht,1))):kn&&ue&&!L&&ue(Z)}if(_o){var ei=_t?St/_t.duration()*(_t._caScrollDist||0):St;ec(ei+(le._isFlipped?1:0)),_o(ei)}xo&&xo(-St/_t.duration()*(_t._caScrollDist||0))}},Z.enable=function(He,Mt){Z.enabled||(Z.enabled=!0,Zt(mt,"resize",_a),Ln||Zt(mt,"scroll",mo),Dn&&Zt(j,"refreshInit",Dn),He!==!1&&(Z.progress=ui=0,di=yi=Gi=An()),Mt!==!1&&Z.refresh())},Z.getTween=function(He){return He&&hi?hi.tween:Ut},Z.setPositions=function(He,Mt,rt,St){if(_t){var Hn=_t.scrollTrigger,Ht=_t.duration(),En=Hn.end-Hn.start;He=Hn.start+En*He/Ht,Mt=Hn.start+En*Mt/Ht}Z.refresh(!1,!1,{start:vi(He,rt&&!!Z._startClamp),end:vi(Mt,rt&&!!Z._endClamp)},St),Z.update()},Z.adjustPinSpacing=function(He){if(wn&&He){var Mt=wn.indexOf(tt.d)+1;wn[Mt]=parseFloat(wn[Mt])+He+ut,wn[1]=parseFloat(wn[1])+He+ut,go(wn)}},Z.disable=function(He,Mt){if(Z.enabled&&(He!==!1&&Z.revert(!0,!0),Z.enabled=Z.isActive=!1,Mt||Ut&&Ut.pause(),Zi=0,Jn&&(Jn.uncache=1),Dn&&dn(j,"refreshInit",Dn),$i&&($i.pause(),hi.tween&&hi.tween.kill()&&(hi.tween=0)),!Ln)){for(var rt=Pt.length;rt--;)if(Pt[rt].scroller===mt&&Pt[rt]!==Z)return;dn(mt,"resize",_a),Ln||dn(mt,"scroll",mo)}},Z.kill=function(He,Mt){Z.disable(He,Mt),Ut&&!Mt&&Ut.kill(),Xe&&delete _u[Xe];var rt=Pt.indexOf(Z);rt>=0&&Pt.splice(rt,1),rt===de&&Kl>0&&de--,rt=0,Pt.forEach(function(St){return St.scroller===Z.scroller&&(rt=1)}),rt||oi||(Z.scroll.rec=0),w&&(w.scrollTrigger=null,He&&w.revert({kill:!1}),Mt||w.kill()),Ei&&[Ei,Ci,le,Pi].forEach(function(St){return St.parentNode&&St.parentNode.removeChild(St)}),va===Z&&(va=0),xe&&(Jn&&(Jn.uncache=1),rt=0,Pt.forEach(function(St){return St.pin===xe&&rt++}),rt||(Jn.spacer=0)),A.onKill&&A.onKill(Z)},Pt.push(Z),Z.enable(!1,!1),Dr&&Dr(Z),w&&w.add&&!Sn){var $t=Z.update;Z.update=function(){Z.update=$t,k.cache++,Vt||Mn||Z.refresh()},pe.delayedCall(.01,Z.update),Sn=.01,Vt=Mn=0}else Z.refresh();xe&&Om()},j.register=function(A){return et||(pe=A||cr(),Cs()&&window.document&&j.enable(),et=on),et},j.defaults=function(A){if(A)for(var w in A)Vl[w]=A[w];return Vl},j.disable=function(A,w){on=0,Pt.forEach(function(ue){return ue[w?"kill":"disable"](A)}),dn(Be,"wheel",mo),dn(Qe,"scroll",mo),clearInterval(ht),dn(Qe,"touchcancel",Zn),dn(Ze,"touchstart",Zn),ur(dn,Qe,"pointerdown,touchstart,mousedown",Rs),ur(dn,Qe,"pointerup,touchend,mouseup",ki),Ot.kill(),ss(dn);for(var X=0;X<k.length;X+=3)Gl(dn,k[X],k[X+1]),Gl(dn,k[X],k[X+2])},j.enable=function(){if(Be=window,Qe=document,U=Qe.documentElement,Ze=Qe.body,pe&&(qe=pe.utils.toArray,en=pe.utils.clamp,ct=pe.core.context||Zn,Ve=pe.core.suppressOverwrites||Zn,ot=Be.history.scrollRestoration||"auto",Mu=Be.pageYOffset||0,pe.core.globals("ScrollTrigger",j),Ze)){on=1,vt=document.createElement("div"),vt.style.height="100vh",vt.style.position="absolute",Dd(),xi(),be.register(pe),j.isTouch=be.isTouch,Ne=be.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),We=be.isTouch===1,Zt(Be,"wheel",mo),Ft=[Be,Qe,U,Ze],pe.matchMedia?(j.matchMedia=function(pt){var jt=pe.matchMedia(),Dt;for(Dt in pt)jt.add(Dt,pt[Dt]);return jt},pe.addEventListener("matchMediaInit",function(){return xu()}),pe.addEventListener("matchMediaRevert",function(){return Pd()}),pe.addEventListener("matchMedia",function(){Us(0,1),Ls("matchMedia")}),pe.matchMedia().add("(orientation: portrait)",function(){return vu(),vu})):console.warn("Requires GSAP 3.11.0 or later"),vu(),Zt(Qe,"scroll",mo);var A=Ze.hasAttribute("style"),w=Ze.style,X=w.borderTopStyle,ue=pe.core.Animation.prototype,te,Xe;for(ue.revert||Object.defineProperty(ue,"revert",{value:function(){return this.time(-.01,!0)}}),w.borderTopStyle="solid",te=It(Ze),Te.m=Math.round(te.top+Te.sc())||0,se.m=Math.round(te.left+se.sc())||0,X?w.borderTopStyle=X:w.removeProperty("border-top-style"),A||(Ze.setAttribute("style",""),Ze.removeAttribute("style")),ht=setInterval(Rd,250),pe.delayedCall(.5,function(){return Ue=0}),Zt(Qe,"touchcancel",Zn),Zt(Ze,"touchstart",Zn),ur(Zt,Qe,"pointerdown,touchstart,mousedown",Rs),ur(Zt,Qe,"pointerup,touchend,mouseup",ki),ie=pe.utils.checkPrefix("transform"),jl.push(ie),et=Ye(),Ot=pe.delayedCall(.2,Us).pause(),je=[Qe,"visibilitychange",function(){var pt=Be.innerWidth,jt=Be.innerHeight;Qe.hidden?(ve=pt,ge=jt):(ve!==pt||ge!==jt)&&_a()},Qe,"DOMContentLoaded",Us,Be,"load",Us,Be,"resize",_a],ss(Zt),Pt.forEach(function(pt){return pt.enable(0,1)}),Xe=0;Xe<k.length;Xe+=3)Gl(dn,k[Xe],k[Xe+1]),Gl(dn,k[Xe],k[Xe+2])}},j.config=function(A){"limitCallbacks"in A&&(me=!!A.limitCallbacks);var w=A.syncInterval;w&&clearInterval(ht)||(ht=w)&&setInterval(Rd,w),"ignoreMobileResize"in A&&(We=j.isTouch===1&&A.ignoreMobileResize),"autoRefreshEvents"in A&&(ss(dn)||ss(Zt,A.autoRefreshEvents||"none"),ft=(A.autoRefreshEvents+"").indexOf("resize")===-1)},j.scrollerProxy=function(A,w){var X=Le(A),ue=k.indexOf(X),te=zi(X);~ue&&k.splice(ue,te?6:2),w&&(te?D.unshift(Be,w,Ze,w,U,w):D.unshift(X,w))},j.clearMatchMedia=function(A){Pt.forEach(function(w){return w._ctx&&w._ctx.query===A&&w._ctx.kill(!0,!0)})},j.isInViewport=function(A,w,X){var ue=(E(A)?Le(A):A).getBoundingClientRect(),te=ue[X?K:ne]*w||0;return X?ue.right-te>0&&ue.left+te<Be.innerWidth:ue.bottom-te>0&&ue.top+te<Be.innerHeight},j.positionInViewport=function(A,w,X){E(A)&&(A=Le(A));var ue=A.getBoundingClientRect(),te=ue[X?K:ne],Xe=w==null?te/2:w in Wl?Wl[w]*te:~w.indexOf("%")?parseFloat(w)*te/100:parseFloat(w)||0;return X?(ue.left+Xe)/Be.innerWidth:(ue.top+Xe)/Be.innerHeight},j.killAll=function(A){if(Pt.slice(0).forEach(function(X){return X.vars.id!=="ScrollSmoother"&&X.kill()}),A!==!0){var w=Is.killAll||[];Is={},w.forEach(function(X){return X()})}},j}();Lt.version="3.12.7",Lt.saveStyles=function(j){return j?qe(j).forEach(function(S){if(S&&S.style){var N=Ri.indexOf(S);N>=0&&Ri.splice(N,5),Ri.push(S,S.style.cssText,S.getBBox&&S.getAttribute("transform"),pe.core.getCache(S),ct())}}):Ri},Lt.revert=function(j,S){return xu(!j,S)},Lt.create=function(j,S){return new Lt(j,S)},Lt.refresh=function(j){return j?_a(!0):(et||Lt.register())&&Us(!0)},Lt.update=function(j){return++k.cache&&Ar(j===!0?2:0)},Lt.clearScrollMemory=Id,Lt.maxScroll=function(j,S){return si(j,S?se:Te)},Lt.getScrollFunc=function(j,S){return Ge(Le(j),S?se:Te)},Lt.getById=function(j){return _u[j]},Lt.getAll=function(){return Pt.filter(function(j){return j.vars.id!=="ScrollSmoother"})},Lt.isScrolling=function(){return!!Bt},Lt.snapDirectional=Yt,Lt.addEventListener=function(j,S){var N=Is[j]||(Is[j]=[]);~N.indexOf(S)||N.push(S)},Lt.removeEventListener=function(j,S){var N=Is[j],A=N&&N.indexOf(S);A>=0&&N.splice(A,1)},Lt.batch=function(j,S){var N=[],A={},w=S.interval||.016,X=S.batchMax||1e9,ue=function(pt,jt){var Dt=[],nt=[],xe=pe.delayedCall(w,function(){jt(Dt,nt),Dt=[],nt=[]}).pause();return function(at){Dt.length||xe.restart(!0),Dt.push(at.trigger),nt.push(at),X<=Dt.length&&xe.progress(1)}},te;for(te in S)A[te]=te.substr(0,2)==="on"&&H(S[te])&&te!=="onRefreshInit"?ue(te,S[te]):S[te];return H(X)&&(X=X(),Zt(Lt,"refresh",function(){return X=S.batchMax()})),qe(j).forEach(function(Xe){var pt={};for(te in A)pt[te]=A[te];pt.trigger=Xe,N.push(Lt.create(pt))}),N};var kd=function(S,N,A,w){return N>w?S(w):N<0&&S(0),A>w?(w-N)/(A-N):A<0?N/(N-A):1},Eu=function j(S,N){N===!0?S.style.removeProperty("touch-action"):S.style.touchAction=N===!0?"auto":N?"pan-"+N+(be.isTouch?" pinch-zoom":""):"none",S===U&&j(Ze,N)},Ql={auto:1,scroll:1},Gm=function(S){var N=S.event,A=S.target,w=S.axis,X=(N.changedTouches?N.changedTouches[0]:N).target,ue=X._gsap||pe.core.getCache(X),te=Ye(),Xe;if(!ue._isScrollT||te-ue._isScrollT>2e3){for(;X&&X!==Ze&&(X.scrollHeight<=X.clientHeight&&X.scrollWidth<=X.clientWidth||!(Ql[(Xe=bt(X)).overflowY]||Ql[Xe.overflowX]));)X=X.parentNode;ue._isScroll=X&&X!==A&&!zi(X)&&(Ql[(Xe=bt(X)).overflowY]||Ql[Xe.overflowX]),ue._isScrollT=te}(ue._isScroll||w==="x")&&(N.stopPropagation(),N._gsapAllow=!0)},zd=function(S,N,A,w){return be.create({target:S,capture:!0,debounce:!1,lockAxis:!0,type:N,onWheel:w=w&&Gm,onPress:w,onDrag:w,onScroll:w,onEnable:function(){return A&&Zt(Qe,be.eventTypes[0],Gd,!1,!0)},onDisable:function(){return dn(Qe,be.eventTypes[0],Gd,!0)}})},Vm=/(input|label|select|textarea)/i,Hd,Gd=function(S){var N=Vm.test(S.target.tagName);(N||Hd)&&(S._gsapAllow=!0,Hd=N)},Wm=function(S){_(S)||(S={}),S.preventDefault=S.isNormalizer=S.allowClicks=!0,S.type||(S.type="wheel,touch"),S.debounce=!!S.debounce,S.id=S.id||"normalizer";var N=S,A=N.normalizeScrollX,w=N.momentum,X=N.allowNestedScroll,ue=N.onRelease,te,Xe,pt=Le(S.target)||U,jt=pe.core.globals().ScrollSmoother,Dt=jt&&jt.get(),nt=Ne&&(S.content&&Le(S.content)||Dt&&S.content!==!1&&!Dt.smooth()&&Dt.content()),xe=Ge(pt,Te),at=Ge(pt,se),mn=1,sn=(be.isTouch&&Be.visualViewport?Be.visualViewport.scale*Be.visualViewport.width:Be.outerWidth)/Be.innerWidth,In=0,fn=H(w)?function(){return w(te)}:function(){return w||2.8},Wn,Et,Hi=zd(pt,S.type,!0,X),cn=function(){return Et=!1},_t=Zn,ai=Zn,Si=function(){Xe=si(pt,Te),ai=en(Ne?1:0,Xe),A&&(_t=en(0,si(pt,se))),Wn=Ds},tt=function(){nt._gsap.y=lr(parseFloat(nt._gsap.y)+xe.offset)+"px",nt.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(nt._gsap.y)+", 0, 1)",xe.offset=xe.cacheID=0},kn=function(){if(Et){requestAnimationFrame(cn);var Tn=lr(te.deltaY/2),bn=ai(xe.v-Tn);if(nt&&bn!==xe.v+xe.offset){xe.offset=bn-xe.v;var Z=lr((parseFloat(nt&&nt._gsap.y)||0)-xe.offset);nt.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+Z+", 0, 1)",nt._gsap.y=Z+"px",xe.cacheID=k.cache,Ar()}return!0}xe.offset&&tt(),Et=!0},mt,wr,Ln,li,ci=function(){Si(),mt.isActive()&&mt.vars.scrollY>Xe&&(xe()>Xe?mt.progress(1)&&xe(Xe):mt.resetTo("scrollY",Xe))};return nt&&pe.set(nt,{y:"+=0"}),S.ignoreCheck=function(nn){return Ne&&nn.type==="touchmove"&&kn()||mn>1.05&&nn.type!=="touchstart"||te.isGesturing||nn.touches&&nn.touches.length>1},S.onPress=function(){Et=!1;var nn=mn;mn=lr((Be.visualViewport&&Be.visualViewport.scale||1)/sn),mt.pause(),nn!==mn&&Eu(pt,mn>1.01?!0:A?!1:"x"),wr=at(),Ln=xe(),Si(),Wn=Ds},S.onRelease=S.onGestureStart=function(nn,Tn){if(xe.offset&&tt(),!Tn)li.restart(!0);else{k.cache++;var bn=fn(),Z,Dn;A&&(Z=at(),Dn=Z+bn*.05*-nn.velocityX/.227,bn*=kd(at,Z,Dn,si(pt,se)),mt.vars.scrollX=_t(Dn)),Z=xe(),Dn=Z+bn*.05*-nn.velocityY/.227,bn*=kd(xe,Z,Dn,si(pt,Te)),mt.vars.scrollY=ai(Dn),mt.invalidate().duration(bn).play(.01),(Ne&&mt.vars.scrollY>=Xe||Z>=Xe-1)&&pe.to({},{onUpdate:ci,duration:bn})}ue&&ue(nn)},S.onWheel=function(){mt._ts&&mt.pause(),Ye()-In>1e3&&(Wn=0,In=Ye())},S.onChange=function(nn,Tn,bn,Z,Dn){if(Ds!==Wn&&Si(),Tn&&A&&at(_t(Z[2]===Tn?wr+(nn.startX-nn.x):at()+Tn-Z[1])),bn){xe.offset&&tt();var Ns=Dn[2]===bn,os=Ns?Ln+nn.startY-nn.y:xe()+bn-Dn[1],Gi=ai(os);Ns&&os!==Gi&&(Ln+=Gi-os),xe(Gi)}(bn||Tn)&&Ar()},S.onEnable=function(){Eu(pt,A?!1:"x"),Lt.addEventListener("refresh",ci),Zt(Be,"resize",ci),xe.smooth&&(xe.target.style.scrollBehavior="auto",xe.smooth=at.smooth=!1),Hi.enable()},S.onDisable=function(){Eu(pt,!0),dn(Be,"resize",ci),Lt.removeEventListener("refresh",ci),Hi.kill()},S.lockAxis=S.lockAxis!==!1,te=new be(S),te.iOS=Ne,Ne&&!xe()&&xe(1),Ne&&pe.ticker.add(Zn),li=te._dc,mt=pe.to(te,{ease:"power4",paused:!0,inherit:!1,scrollX:A?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Od(xe,xe(),function(){return mt.pause()})},onUpdate:Ar,onComplete:li.vars.onComplete}),te};Lt.sort=function(j){if(H(j))return Pt.sort(j);var S=Be.pageYOffset||0;return Lt.getAll().forEach(function(N){return N._sortY=N.trigger?S+N.trigger.getBoundingClientRect().top:N.start+Be.innerHeight}),Pt.sort(j||function(N,A){return(N.vars.refreshPriority||0)*-1e6+(N.vars.containerAnimation?1e6:N._sortY)-((A.vars.containerAnimation?1e6:A._sortY)+(A.vars.refreshPriority||0)*-1e6)})},Lt.observe=function(j){return new be(j)},Lt.normalizeScroll=function(j){if(typeof j>"u")return Me;if(j===!0&&Me)return Me.enable();if(j===!1){Me&&Me.kill(),Me=j;return}var S=j instanceof be?j:Wm(j);return Me&&Me.target===S.target&&Me.kill(),zi(S.target)&&(Me=S),S},Lt.core={_getVelocityProp:st,_inputObserver:zd,_scrollers:k,_proxies:D,bridge:{ss:function(){Bt||Ls("scrollStart"),Bt=Ye()},ref:function(){return L}}},cr()&&pe.registerPlugin(Lt),t.ScrollTrigger=Lt,t.default=Lt,typeof window>"u"||window!==t?Object.defineProperty(t,"__esModule",{value:!0}):delete window.default})})(ch,ch.exports);var $m=ch.exports;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nd="168",Zm=0,qd=1,Jm=2,Rp=1,Qm=2,zr=3,Jr=0,wi=1,mr=2,bs=0,Go=1,Kd=2,jd=3,$d=4,eg=5,$s=100,tg=101,ng=102,ig=103,rg=104,sg=200,og=201,ag=202,lg=203,uh=204,hh=205,cg=206,ug=207,hg=208,dg=209,fg=210,pg=211,mg=212,gg=213,_g=214,vg=0,xg=1,Mg=2,Wc=3,Sg=4,yg=5,Eg=6,Tg=7,Cp=0,bg=1,Ag=2,As=0,wg=1,Rg=2,Cg=3,Pg=4,Ig=5,Lg=6,Dg=7,Zd="attached",Ug="detached",Pp=300,ea=301,ta=302,dh=303,fh=304,hu=306,Mr=1e3,_r=1001,Xc=1002,Vn=1003,Ip=1004,Ua=1005,vn=1006,Fc=1007,vr=1008,Qr=1009,Lp=1010,Dp=1011,za=1012,id=1013,uo=1014,bi=1015,or=1016,rd=1017,sd=1018,na=1020,Up=35902,Np=1021,Fp=1022,Ai=1023,Op=1024,Bp=1025,Vo=1026,ia=1027,du=1028,od=1029,kp=1030,ad=1031,ld=1033,Oc=33776,Bc=33777,kc=33778,zc=33779,ph=35840,mh=35841,gh=35842,_h=35843,vh=36196,xh=37492,Mh=37496,Sh=37808,yh=37809,Eh=37810,Th=37811,bh=37812,Ah=37813,wh=37814,Rh=37815,Ch=37816,Ph=37817,Ih=37818,Lh=37819,Dh=37820,Uh=37821,Hc=36492,Nh=36494,Fh=36495,zp=36283,Oh=36284,Bh=36285,kh=36286,Ha=2300,Ga=2301,Au=2302,Jd=2400,Qd=2401,ef=2402,Ng=2500,Fg=0,Hp=1,zh=2,Og=3200,Bg=3201,Gp=0,kg=1,Kr="",mi="srgb",Fn="srgb-linear",cd="display-p3",fu="display-p3-linear",Yc="linear",an="srgb",qc="rec709",Kc="p3",So=7680,tf=519,zg=512,Hg=513,Gg=514,Vp=515,Vg=516,Wg=517,Xg=518,Yg=519,Hh=35044,nf="300 es",$r=2e3,jc=2001;class ha{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rf=1234567;const Fa=Math.PI/180,ra=180/Math.PI;function ar(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ni[r&255]+ni[r>>8&255]+ni[r>>16&255]+ni[r>>24&255]+"-"+ni[e&255]+ni[e>>8&255]+"-"+ni[e>>16&15|64]+ni[e>>24&255]+"-"+ni[t&63|128]+ni[t>>8&255]+"-"+ni[t>>16&255]+ni[t>>24&255]+ni[n&255]+ni[n>>8&255]+ni[n>>16&255]+ni[n>>24&255]).toLowerCase()}function jn(r,e,t){return Math.max(e,Math.min(t,r))}function ud(r,e){return(r%e+e)%e}function qg(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Kg(r,e,t){return r!==e?(t-r)/(e-r):0}function Oa(r,e,t){return(1-t)*r+t*e}function jg(r,e,t,n){return Oa(r,e,1-Math.exp(-t*n))}function $g(r,e=1){return e-Math.abs(ud(r,e*2)-e)}function Zg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Jg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Qg(r,e){return r+Math.floor(Math.random()*(e-r+1))}function e_(r,e){return r+Math.random()*(e-r)}function t_(r){return r*(.5-Math.random())}function n_(r){r!==void 0&&(rf=r);let e=rf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function i_(r){return r*Fa}function r_(r){return r*ra}function s_(r){return(r&r-1)===0&&r!==0}function o_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function a_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function l_(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),x=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*x,l*m,a*c);break;case"YXY":r.set(l*m,a*u,l*x,a*c);break;case"ZYZ":r.set(l*x,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function sr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Jt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const c_={DEG2RAD:Fa,RAD2DEG:ra,generateUUID:ar,clamp:jn,euclideanModulo:ud,mapLinear:qg,inverseLerp:Kg,lerp:Oa,damp:jg,pingpong:$g,smoothstep:Zg,smootherstep:Jg,randInt:Qg,randFloat:e_,randFloatSpread:t_,seededRandom:n_,degToRad:i_,radToDeg:r_,isPowerOfTwo:s_,ceilPowerOfTwo:o_,floorPowerOfTwo:a_,setQuaternionFromProperEuler:l_,normalize:Jt,denormalize:sr};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wt{constructor(e,t,n,i,s,o,a,l,c){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],x=n[8],M=i[0],g=i[3],p=i[6],R=i[1],T=i[4],C=i[7],k=i[2],D=i[5],B=i[8];return s[0]=o*M+a*R+l*k,s[3]=o*g+a*T+l*D,s[6]=o*p+a*C+l*B,s[1]=c*M+u*R+h*k,s[4]=c*g+u*T+h*D,s[7]=c*p+u*C+h*B,s[2]=f*M+m*R+x*k,s[5]=f*g+m*T+x*D,s[8]=f*p+m*C+x*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,x=t*h+n*f+i*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=h*M,e[1]=(i*c-u*n)*M,e[2]=(a*n-i*o)*M,e[3]=f*M,e[4]=(u*t-i*l)*M,e[5]=(i*s-a*t)*M,e[6]=m*M,e[7]=(n*l-c*t)*M,e[8]=(o*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wu.makeScale(e,t)),this}rotate(e){return this.premultiply(wu.makeRotation(-e)),this}translate(e,t){return this.premultiply(wu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wu=new wt;function Wp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Va(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function u_(){const r=Va("canvas");return r.style.display="block",r}const sf={};function Wo(r){r in sf||(sf[r]=!0,console.warn(r))}function h_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const of=new wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),af=new wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ta={[Fn]:{transfer:Yc,primaries:qc,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[mi]:{transfer:an,primaries:qc,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[fu]:{transfer:Yc,primaries:Kc,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(af),fromReference:r=>r.applyMatrix3(of)},[cd]:{transfer:an,primaries:Kc,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(af),fromReference:r=>r.applyMatrix3(of).convertLinearToSRGB()}},d_=new Set([Fn,fu]),Xt={enabled:!0,_workingColorSpace:Fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!d_.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ta[e].toReference,i=Ta[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ta[r].primaries},getTransfer:function(r){return r===Kr?Yc:Ta[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(Ta[e].luminanceCoefficients)}};function Xo(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ru(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let yo;class f_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yo===void 0&&(yo=Va("canvas")),yo.width=e.width,yo.height=e.height;const n=yo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=yo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Va("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Xo(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xo(t[n]/255)*255):t[n]=Xo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let p_=0;class Xp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=ar(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Cu(i[o].image)):s.push(Cu(i[o]))}else s=Cu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Cu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?f_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let m_=0;class Pn extends ha{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,n=_r,i=_r,s=vn,o=vr,a=Ai,l=Qr,c=Pn.DEFAULT_ANISOTROPY,u=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=ar(),this.name="",this.source=new Xp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mr:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case Xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mr:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case Xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Pp;Pn.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,t=0,n=0,i=1){tn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],x=l[9],M=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-M)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+M)<.1&&Math.abs(x+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,C=(m+1)/2,k=(p+1)/2,D=(u+f)/4,B=(h+M)/4,Q=(x+g)/4;return T>C&&T>k?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=D/n,s=B/n):C>k?C<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(C),n=D/i,s=Q/i):k<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(k),n=B/s,i=Q/s),this.set(n,i,s,t),this}let R=Math.sqrt((g-x)*(g-x)+(h-M)*(h-M)+(f-u)*(f-u));return Math.abs(R)<.001&&(R=1),this.x=(g-x)/R,this.y=(h-M)/R,this.z=(f-u)/R,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class g_ extends ha{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Pn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends g_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yp extends Pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class __ extends Pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],m=s[o+1],x=s[o+2],M=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=M;return}if(h!==M||l!==f||c!==m||u!==x){let g=1-a;const p=l*f+c*m+u*x+h*M,R=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const k=Math.sqrt(T),D=Math.atan2(k,p*R);g=Math.sin(g*D)/k,a=Math.sin(a*D)/k}const C=a*R;if(l=l*g+f*C,c=c*g+m*C,u=u*g+x*C,h=h*g+M*C,g===1-a){const k=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=k,c*=k,u*=k,h*=k}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+u*h+l*m-c*f,e[t+1]=l*x+u*f+c*h-a*m,e[t+2]=c*x+u*m+a*f-l*h,e[t+3]=u*x-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),m=l(i/2),x=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h-f*m*x;break;case"YXZ":this._x=f*u*h+c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h+f*m*x;break;case"ZXY":this._x=f*u*h-c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h-f*m*x;break;case"ZYX":this._x=f*u*h-c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h+f*m*x;break;case"YZX":this._x=f*u*h+c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h-f*m*x;break;case"XZY":this._x=f*u*h-c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pu.copy(this).projectOnVector(e),this.sub(Pu)}reflect(e){return this.sub(Pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pu=new Y,lf=new is;class rs{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qi):Qi.fromBufferAttribute(s,o),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rc.copy(n.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),sc.subVectors(this.max,ba),Eo.subVectors(e.a,ba),To.subVectors(e.b,ba),bo.subVectors(e.c,ba),ds.subVectors(To,Eo),fs.subVectors(bo,To),Hs.subVectors(Eo,bo);let t=[0,-ds.z,ds.y,0,-fs.z,fs.y,0,-Hs.z,Hs.y,ds.z,0,-ds.x,fs.z,0,-fs.x,Hs.z,0,-Hs.x,-ds.y,ds.x,0,-fs.y,fs.x,0,-Hs.y,Hs.x,0];return!Iu(t,Eo,To,bo,sc)||(t=[1,0,0,0,1,0,0,0,1],!Iu(t,Eo,To,bo,sc))?!1:(oc.crossVectors(ds,fs),t=[oc.x,oc.y,oc.z],Iu(t,Eo,To,bo,sc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ur=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Qi=new Y,rc=new rs,Eo=new Y,To=new Y,bo=new Y,ds=new Y,fs=new Y,Hs=new Y,ba=new Y,sc=new Y,oc=new Y,Gs=new Y;function Iu(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Gs.fromArray(r,s);const a=i.x*Math.abs(Gs.x)+i.y*Math.abs(Gs.y)+i.z*Math.abs(Gs.z),l=e.dot(Gs),c=t.dot(Gs),u=n.dot(Gs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const v_=new rs,Aa=new Y,Lu=new Y;class yr{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):v_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);const t=Aa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Aa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(Lu)),this.expandByPoint(Aa.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nr=new Y,Du=new Y,ac=new Y,ps=new Y,Uu=new Y,lc=new Y,Nu=new Y;class Fl{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nr.copy(this.origin).addScaledVector(this.direction,t),Nr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Du.copy(e).add(t).multiplyScalar(.5),ac.copy(t).sub(e).normalize(),ps.copy(this.origin).sub(Du);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ac),a=ps.dot(this.direction),l=-ps.dot(ac),c=ps.lengthSq(),u=Math.abs(1-o*o);let h,f,m,x;if(u>0)if(h=o*l-a,f=o*a-l,x=s*u,h>=0)if(f>=-x)if(f<=x){const M=1/u;h*=M,f*=M,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Du).addScaledVector(ac,f),m}intersectSphere(e,t){Nr.subVectors(e.center,this.origin);const n=Nr.dot(this.direction),i=Nr.dot(Nr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Nr)!==null}intersectTriangle(e,t,n,i,s){Uu.subVectors(t,e),lc.subVectors(n,e),Nu.crossVectors(Uu,lc);let o=this.direction.dot(Nu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ps.subVectors(this.origin,e);const l=a*this.direction.dot(lc.crossVectors(ps,lc));if(l<0)return null;const c=a*this.direction.dot(Uu.cross(ps));if(c<0||l+c>o)return null;const u=-a*ps.dot(Nu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,n,i,s,o,a,l,c,u,h,f,m,x,M,g){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,m,x,M,g)}set(e,t,n,i,s,o,a,l,c,u,h,f,m,x,M,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=m,p[7]=x,p[11]=M,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ao.setFromMatrixColumn(e,0).length(),s=1/Ao.setFromMatrixColumn(e,1).length(),o=1/Ao.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,x=a*u,M=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+x*c,t[5]=f-M*c,t[9]=-a*l,t[2]=M-f*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,x=c*u,M=c*h;t[0]=f+M*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-x,t[6]=M+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,x=c*u,M=c*h;t[0]=f-M*a,t[4]=-o*h,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*u,t[9]=M-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,x=a*u,M=a*h;t[0]=l*u,t[4]=x*c-m,t[8]=f*c+M,t[1]=l*h,t[5]=M*c+f,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,x=a*l,M=a*c;t[0]=l*u,t[4]=M-f*h,t[8]=x*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+x,t[10]=f-M*h}else if(e.order==="XZY"){const f=o*l,m=o*c,x=a*l,M=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+M,t[5]=o*u,t[9]=m*h-x,t[2]=x*h-m,t[6]=a*u,t[10]=M*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(x_,e,M_)}lookAt(e,t,n){const i=this.elements;return Li.subVectors(e,t),Li.lengthSq()===0&&(Li.z=1),Li.normalize(),ms.crossVectors(n,Li),ms.lengthSq()===0&&(Math.abs(n.z)===1?Li.x+=1e-4:Li.z+=1e-4,Li.normalize(),ms.crossVectors(n,Li)),ms.normalize(),cc.crossVectors(Li,ms),i[0]=ms.x,i[4]=cc.x,i[8]=Li.x,i[1]=ms.y,i[5]=cc.y,i[9]=Li.y,i[2]=ms.z,i[6]=cc.z,i[10]=Li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],x=n[2],M=n[6],g=n[10],p=n[14],R=n[3],T=n[7],C=n[11],k=n[15],D=i[0],B=i[4],Q=i[8],P=i[12],b=i[1],G=i[5],oe=i[9],ee=i[13],he=i[2],_e=i[6],ce=i[10],Se=i[14],se=i[3],Te=i[7],Le=i[11],Ge=i[15];return s[0]=o*D+a*b+l*he+c*se,s[4]=o*B+a*G+l*_e+c*Te,s[8]=o*Q+a*oe+l*ce+c*Le,s[12]=o*P+a*ee+l*Se+c*Ge,s[1]=u*D+h*b+f*he+m*se,s[5]=u*B+h*G+f*_e+m*Te,s[9]=u*Q+h*oe+f*ce+m*Le,s[13]=u*P+h*ee+f*Se+m*Ge,s[2]=x*D+M*b+g*he+p*se,s[6]=x*B+M*G+g*_e+p*Te,s[10]=x*Q+M*oe+g*ce+p*Le,s[14]=x*P+M*ee+g*Se+p*Ge,s[3]=R*D+T*b+C*he+k*se,s[7]=R*B+T*G+C*_e+k*Te,s[11]=R*Q+T*oe+C*ce+k*Le,s[15]=R*P+T*ee+C*Se+k*Ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],x=e[3],M=e[7],g=e[11],p=e[15];return x*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*m-n*l*m)+M*(+t*l*m-t*c*f+s*o*f-i*o*m+i*c*u-s*l*u)+g*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],x=e[12],M=e[13],g=e[14],p=e[15],R=h*g*c-M*f*c+M*l*m-a*g*m-h*l*p+a*f*p,T=x*f*c-u*g*c-x*l*m+o*g*m+u*l*p-o*f*p,C=u*M*c-x*h*c+x*a*m-o*M*m-u*a*p+o*h*p,k=x*h*l-u*M*l-x*a*f+o*M*f+u*a*g-o*h*g,D=t*R+n*T+i*C+s*k;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/D;return e[0]=R*B,e[1]=(M*f*s-h*g*s-M*i*m+n*g*m+h*i*p-n*f*p)*B,e[2]=(a*g*s-M*l*s+M*i*c-n*g*c-a*i*p+n*l*p)*B,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*m-n*l*m)*B,e[4]=T*B,e[5]=(u*g*s-x*f*s+x*i*m-t*g*m-u*i*p+t*f*p)*B,e[6]=(x*l*s-o*g*s-x*i*c+t*g*c+o*i*p-t*l*p)*B,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*m+t*l*m)*B,e[8]=C*B,e[9]=(x*h*s-u*M*s-x*n*m+t*M*m+u*n*p-t*h*p)*B,e[10]=(o*M*s-x*a*s+x*n*c-t*M*c-o*n*p+t*a*p)*B,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*m-t*a*m)*B,e[12]=k*B,e[13]=(u*M*i-x*h*i+x*n*f-t*M*f-u*n*g+t*h*g)*B,e[14]=(x*a*i-o*M*i-x*n*l+t*M*l+o*n*g-t*a*g)*B,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*B,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,x=s*h,M=o*u,g=o*h,p=a*h,R=l*c,T=l*u,C=l*h,k=n.x,D=n.y,B=n.z;return i[0]=(1-(M+p))*k,i[1]=(m+C)*k,i[2]=(x-T)*k,i[3]=0,i[4]=(m-C)*D,i[5]=(1-(f+p))*D,i[6]=(g+R)*D,i[7]=0,i[8]=(x+T)*B,i[9]=(g-R)*B,i[10]=(1-(f+M))*B,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ao.set(i[0],i[1],i[2]).length();const o=Ao.set(i[4],i[5],i[6]).length(),a=Ao.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],er.copy(this);const c=1/s,u=1/o,h=1/a;return er.elements[0]*=c,er.elements[1]*=c,er.elements[2]*=c,er.elements[4]*=u,er.elements[5]*=u,er.elements[6]*=u,er.elements[8]*=h,er.elements[9]*=h,er.elements[10]*=h,t.setFromRotationMatrix(er),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=$r){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let m,x;if(a===$r)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===jc)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=$r){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,m=(n+i)*u;let x,M;if(a===$r)x=(o+s)*h,M=-2*h;else if(a===jc)x=s*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ao=new Y,er=new Tt,x_=new Y(0,0,0),M_=new Y(1,1,1),ms=new Y,cc=new Y,Li=new Y,cf=new Tt,uf=new is;class Sr{constructor(e=0,t=0,n=0,i=Sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(jn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(jn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-jn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uf.setFromEuler(this),this.setFromQuaternion(uf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sr.DEFAULT_ORDER="XYZ";class hd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let S_=0;const hf=new Y,wo=new is,Fr=new Tt,uc=new Y,wa=new Y,y_=new Y,E_=new is,df=new Y(1,0,0),ff=new Y(0,1,0),pf=new Y(0,0,1),mf={type:"added"},T_={type:"removed"},Ro={type:"childadded",child:null},Fu={type:"childremoved",child:null};class hn extends ha{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new Y,t=new Sr,n=new is,i=new Y(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Tt},normalMatrix:{value:new wt}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.multiply(wo),this}rotateOnWorldAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.premultiply(wo),this}rotateX(e){return this.rotateOnAxis(df,e)}rotateY(e){return this.rotateOnAxis(ff,e)}rotateZ(e){return this.rotateOnAxis(pf,e)}translateOnAxis(e,t){return hf.copy(e).applyQuaternion(this.quaternion),this.position.add(hf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(df,e)}translateY(e){return this.translateOnAxis(ff,e)}translateZ(e){return this.translateOnAxis(pf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?uc.copy(e):uc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fr.lookAt(wa,uc,this.up):Fr.lookAt(uc,wa,this.up),this.quaternion.setFromRotationMatrix(Fr),i&&(Fr.extractRotation(i.matrixWorld),wo.setFromRotationMatrix(Fr),this.quaternion.premultiply(wo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mf),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(T_),Fu.child=e,this.dispatchEvent(Fu),Fu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mf),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,y_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,E_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}hn.DEFAULT_UP=new Y(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tr=new Y,Or=new Y,Ou=new Y,Br=new Y,Co=new Y,Po=new Y,gf=new Y,Bu=new Y,ku=new Y,zu=new Y;class gr{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),tr.subVectors(e,t),i.cross(tr);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){tr.subVectors(i,t),Or.subVectors(n,t),Ou.subVectors(e,t);const o=tr.dot(tr),a=tr.dot(Or),l=tr.dot(Ou),c=Or.dot(Or),u=Or.dot(Ou),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,x=(o*u-a*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Br)===null?!1:Br.x>=0&&Br.y>=0&&Br.x+Br.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Br)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Br.x),l.addScaledVector(o,Br.y),l.addScaledVector(a,Br.z),l)}static isFrontFacing(e,t,n,i){return tr.subVectors(n,t),Or.subVectors(e,t),tr.cross(Or).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tr.subVectors(this.c,this.b),Or.subVectors(this.a,this.b),tr.cross(Or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return gr.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return gr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Co.subVectors(i,n),Po.subVectors(s,n),Bu.subVectors(e,n);const l=Co.dot(Bu),c=Po.dot(Bu);if(l<=0&&c<=0)return t.copy(n);ku.subVectors(e,i);const u=Co.dot(ku),h=Po.dot(ku);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Co,o);zu.subVectors(e,s);const m=Co.dot(zu),x=Po.dot(zu);if(x>=0&&m<=x)return t.copy(s);const M=m*c-l*x;if(M<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Po,a);const g=u*x-m*h;if(g<=0&&h-u>=0&&m-x>=0)return gf.subVectors(s,i),a=(h-u)/(h-u+(m-x)),t.copy(i).addScaledVector(gf,a);const p=1/(g+M+f);return o=M*p,a=f*p,t.copy(n).addScaledVector(Co,o).addScaledVector(Po,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},hc={h:0,s:0,l:0};function Hu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xt.workingColorSpace){if(e=ud(e,1),t=jn(t,0,1),n=jn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Hu(o,s,e+1/3),this.g=Hu(o,s,e),this.b=Hu(o,s,e-1/3)}return Xt.toWorkingColorSpace(this,i),this}setStyle(e,t=mi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const n=qp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}copyLinearToSRGB(e){return this.r=Ru(e.r),this.g=Ru(e.g),this.b=Ru(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Xt.fromWorkingColorSpace(ii.copy(this),e),Math.round(jn(ii.r*255,0,255))*65536+Math.round(jn(ii.g*255,0,255))*256+Math.round(jn(ii.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xt.workingColorSpace){Xt.fromWorkingColorSpace(ii.copy(this),t);const n=ii.r,i=ii.g,s=ii.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(ii.copy(this),t),e.r=ii.r,e.g=ii.g,e.b=ii.b,e}getStyle(e=mi){Xt.fromWorkingColorSpace(ii.copy(this),e);const t=ii.r,n=ii.g,i=ii.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(gs),this.setHSL(gs.h+e,gs.s+t,gs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gs),e.getHSL(hc);const n=Oa(gs.h,hc.h,t),i=Oa(gs.s,hc.s,t),s=Oa(gs.l,hc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ii=new lt;lt.NAMES=qp;let b_=0;class xr extends ha{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=Go,this.side=Jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=hh,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Wc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=So,this.stencilZFail=So,this.stencilZPass=So,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Go&&(n.blending=this.blending),this.side!==Jr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uh&&(n.blendSrc=this.blendSrc),this.blendDst!==hh&&(n.blendDst=this.blendDst),this.blendEquation!==$s&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==So&&(n.stencilFail=this.stencilFail),this.stencilZFail!==So&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==So&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qs extends xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.combine=Cp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jr=A_();function A_(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function w_(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=jn(r,-65504,65504),jr.floatView[0]=r;const e=jr.uint32View[0],t=e>>23&511;return jr.baseTable[t]+((e&8388607)>>jr.shiftTable[t])}function R_(r){const e=r>>10;return jr.uint32View[0]=jr.mantissaTable[jr.offsetTable[e]+(r&1023)]+jr.exponentTable[e],jr.floatView[0]}const _f={toHalfFloat:w_,fromHalfFloat:R_},Rn=new Y,dc=new $e;class ri{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Wo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dc.fromBufferAttribute(this,t),dc.applyMatrix3(e),this.setXY(t,dc.x,dc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix3(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=sr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),i=Jt(i,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hh&&(e.usage=this.usage),e}}class C_ extends ri{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Kp extends ri{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jp extends ri{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $n extends ri{constructor(e,t,n){super(new Float32Array(e),t,n)}}let P_=0;const Wi=new Tt,Gu=new hn,Io=new Y,Di=new rs,Ra=new rs,Gn=new Y;class Oi extends ha{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wp(e)?jp:Kp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new wt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wi.makeRotationFromQuaternion(e),this.applyMatrix4(Wi),this}rotateX(e){return Wi.makeRotationX(e),this.applyMatrix4(Wi),this}rotateY(e){return Wi.makeRotationY(e),this.applyMatrix4(Wi),this}rotateZ(e){return Wi.makeRotationZ(e),this.applyMatrix4(Wi),this}translate(e,t,n){return Wi.makeTranslation(e,t,n),this.applyMatrix4(Wi),this}scale(e,t,n){return Wi.makeScale(e,t,n),this.applyMatrix4(Wi),this}lookAt(e){return Gu.lookAt(e),Gu.updateMatrix(),this.applyMatrix4(Gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Io).negate(),this.translate(Io.x,Io.y,Io.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $n(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Di.setFromBufferAttribute(s),this.morphTargetsRelative?(Gn.addVectors(this.boundingBox.min,Di.min),this.boundingBox.expandByPoint(Gn),Gn.addVectors(this.boundingBox.max,Di.max),this.boundingBox.expandByPoint(Gn)):(this.boundingBox.expandByPoint(Di.min),this.boundingBox.expandByPoint(Di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(Di.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ra.setFromBufferAttribute(a),this.morphTargetsRelative?(Gn.addVectors(Di.min,Ra.min),Di.expandByPoint(Gn),Gn.addVectors(Di.max,Ra.max),Di.expandByPoint(Gn)):(Di.expandByPoint(Ra.min),Di.expandByPoint(Ra.max))}Di.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Gn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Gn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gn.fromBufferAttribute(a,c),l&&(Io.fromBufferAttribute(e,c),Gn.add(Io)),i=Math.max(i,n.distanceToSquared(Gn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let Q=0;Q<n.count;Q++)a[Q]=new Y,l[Q]=new Y;const c=new Y,u=new Y,h=new Y,f=new $e,m=new $e,x=new $e,M=new Y,g=new Y;function p(Q,P,b){c.fromBufferAttribute(n,Q),u.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),f.fromBufferAttribute(s,Q),m.fromBufferAttribute(s,P),x.fromBufferAttribute(s,b),u.sub(c),h.sub(c),m.sub(f),x.sub(f);const G=1/(m.x*x.y-x.x*m.y);isFinite(G)&&(M.copy(u).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(G),g.copy(h).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(G),a[Q].add(M),a[P].add(M),a[b].add(M),l[Q].add(g),l[P].add(g),l[b].add(g))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let Q=0,P=R.length;Q<P;++Q){const b=R[Q],G=b.start,oe=b.count;for(let ee=G,he=G+oe;ee<he;ee+=3)p(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const T=new Y,C=new Y,k=new Y,D=new Y;function B(Q){k.fromBufferAttribute(i,Q),D.copy(k);const P=a[Q];T.copy(P),T.sub(k.multiplyScalar(k.dot(P))).normalize(),C.crossVectors(D,P);const G=C.dot(l[Q])<0?-1:1;o.setXYZW(Q,T.x,T.y,T.z,G)}for(let Q=0,P=R.length;Q<P;++Q){const b=R[Q],G=b.start,oe=b.count;for(let ee=G,he=G+oe;ee<he;ee+=3)B(e.getX(ee+0)),B(e.getX(ee+1)),B(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ri(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,h=new Y;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),M=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,x),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gn.fromBufferAttribute(e,t),Gn.normalize(),e.setXYZ(t,Gn.x,Gn.y,Gn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,x=0;for(let M=0,g=l.length;M<g;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*u;for(let p=0;p<u;p++)f[x++]=c[m++]}return new ri(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Oi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vf=new Tt,Vs=new Fl,fc=new yr,xf=new Y,Lo=new Y,Do=new Y,Uo=new Y,Vu=new Y,pc=new Y,mc=new $e,gc=new $e,_c=new $e,Mf=new Y,Sf=new Y,yf=new Y,vc=new Y,xc=new Y;class Nn extends hn{constructor(e=new Oi,t=new Qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){pc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Vu.fromBufferAttribute(h,e),o?pc.addScaledVector(Vu,u):pc.addScaledVector(Vu.sub(t),u))}t.add(pc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fc.copy(n.boundingSphere),fc.applyMatrix4(s),Vs.copy(e.ray).recast(e.near),!(fc.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(fc,xf)===null||Vs.origin.distanceToSquared(xf)>(e.far-e.near)**2))&&(vf.copy(s).invert(),Vs.copy(e.ray).applyMatrix4(vf),!(n.boundingBox!==null&&Vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,M=f.length;x<M;x++){const g=f[x],p=o[g.materialIndex],R=Math.max(g.start,m.start),T=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let C=R,k=T;C<k;C+=3){const D=a.getX(C),B=a.getX(C+1),Q=a.getX(C+2);i=Mc(this,p,e,n,c,u,h,D,B,Q),i&&(i.faceIndex=Math.floor(C/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const x=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let g=x,p=M;g<p;g+=3){const R=a.getX(g),T=a.getX(g+1),C=a.getX(g+2);i=Mc(this,o,e,n,c,u,h,R,T,C),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,M=f.length;x<M;x++){const g=f[x],p=o[g.materialIndex],R=Math.max(g.start,m.start),T=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let C=R,k=T;C<k;C+=3){const D=C,B=C+1,Q=C+2;i=Mc(this,p,e,n,c,u,h,D,B,Q),i&&(i.faceIndex=Math.floor(C/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const x=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let g=x,p=M;g<p;g+=3){const R=g,T=g+1,C=g+2;i=Mc(this,o,e,n,c,u,h,R,T,C),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function I_(r,e,t,n,i,s,o,a){let l;if(e.side===wi?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Jr,a),l===null)return null;xc.copy(a),xc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(xc);return c<t.near||c>t.far?null:{distance:c,point:xc.clone(),object:r}}function Mc(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Lo),r.getVertexPosition(l,Do),r.getVertexPosition(c,Uo);const u=I_(r,e,t,n,Lo,Do,Uo,vc);if(u){i&&(mc.fromBufferAttribute(i,a),gc.fromBufferAttribute(i,l),_c.fromBufferAttribute(i,c),u.uv=gr.getInterpolation(vc,Lo,Do,Uo,mc,gc,_c,new $e)),s&&(mc.fromBufferAttribute(s,a),gc.fromBufferAttribute(s,l),_c.fromBufferAttribute(s,c),u.uv1=gr.getInterpolation(vc,Lo,Do,Uo,mc,gc,_c,new $e)),o&&(Mf.fromBufferAttribute(o,a),Sf.fromBufferAttribute(o,l),yf.fromBufferAttribute(o,c),u.normal=gr.getInterpolation(vc,Lo,Do,Uo,Mf,Sf,yf,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Y,materialIndex:0};gr.getNormal(Lo,Do,Uo,h.normal),u.face=h}return u}class Ol extends Oi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,s,4),x("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new $n(c,3)),this.setAttribute("normal",new $n(u,3)),this.setAttribute("uv",new $n(h,2));function x(M,g,p,R,T,C,k,D,B,Q,P){const b=C/B,G=k/Q,oe=C/2,ee=k/2,he=D/2,_e=B+1,ce=Q+1;let Se=0,se=0;const Te=new Y;for(let Le=0;Le<ce;Le++){const Ge=Le*G-ee;for(let st=0;st<_e;st++){const gt=st*b-oe;Te[M]=gt*R,Te[g]=Ge*T,Te[p]=he,c.push(Te.x,Te.y,Te.z),Te[M]=0,Te[g]=0,Te[p]=D>0?1:-1,u.push(Te.x,Te.y,Te.z),h.push(st/B),h.push(1-Le/Q),Se+=1}}for(let Le=0;Le<Q;Le++)for(let Ge=0;Ge<B;Ge++){const st=f+Ge+_e*Le,gt=f+Ge+_e*(Le+1),fe=f+(Ge+1)+_e*(Le+1),Ee=f+(Ge+1)+_e*Le;l.push(st,gt,Ee),l.push(gt,fe,Ee),se+=6}a.addGroup(m,se,P),m+=se,f+=Se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sa(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pi(r){const e={};for(let t=0;t<r.length;t++){const n=sa(r[t]);for(const i in n)e[i]=n[i]}return e}function L_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function $p(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xt.workingColorSpace}const D_={clone:sa,merge:pi};var U_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U_,this.fragmentShader=N_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=L_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zp extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=$r}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _s=new Y,Ef=new $e,Tf=new $e;class gi extends Zp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_s.x,_s.y).multiplyScalar(-e/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_s.x,_s.y).multiplyScalar(-e/_s.z)}getViewSize(e,t){return this.getViewBounds(e,Ef,Tf),t.subVectors(Tf,Ef)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const No=-90,Fo=1;class F_ extends hn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new gi(No,Fo,e,t);i.layers=this.layers,this.add(i);const s=new gi(No,Fo,e,t);s.layers=this.layers,this.add(s);const o=new gi(No,Fo,e,t);o.layers=this.layers,this.add(o);const a=new gi(No,Fo,e,t);a.layers=this.layers,this.add(a);const l=new gi(No,Fo,e,t);l.layers=this.layers,this.add(l);const c=new gi(No,Fo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===$r)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Jp extends Pn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ea,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class O_ extends es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Jp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ol(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:sa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wi,blending:bs});s.uniforms.tEquirect.value=t;const o=new Nn(i,s),a=t.minFilter;return t.minFilter===vr&&(t.minFilter=vn),new F_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Wu=new Y,B_=new Y,k_=new wt;class Ks{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Wu.subVectors(n,t).cross(B_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Wu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||k_.getNormalMatrix(e),i=this.coplanarPoint(Wu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ws=new yr,Sc=new Y;class dd{constructor(e=new Ks,t=new Ks,n=new Ks,i=new Ks,s=new Ks,o=new Ks){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$r){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],m=i[8],x=i[9],M=i[10],g=i[11],p=i[12],R=i[13],T=i[14],C=i[15];if(n[0].setComponents(l-s,f-c,g-m,C-p).normalize(),n[1].setComponents(l+s,f+c,g+m,C+p).normalize(),n[2].setComponents(l+o,f+u,g+x,C+R).normalize(),n[3].setComponents(l-o,f-u,g-x,C-R).normalize(),n[4].setComponents(l-a,f-h,g-M,C-T).normalize(),t===$r)n[5].setComponents(l+a,f+h,g+M,C+T).normalize();else if(t===jc)n[5].setComponents(a,h,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(e){return Ws.center.set(0,0,0),Ws.radius=.7071067811865476,Ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Sc.x=i.normal.x>0?e.max.x:e.min.x,Sc.y=i.normal.y>0?e.max.y:e.min.y,Sc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qp(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function z_(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(r.bindBuffer(c,a),h.count===-1&&f.length===0&&r.bufferSubData(c,0,u),f.length!==0){for(let m=0,x=f.length;m<x;m++){const M=f[m];r.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}h.count!==-1&&(r.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Bl extends Oi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,m=[],x=[],M=[],g=[];for(let p=0;p<u;p++){const R=p*f-o;for(let T=0;T<c;T++){const C=T*h-s;x.push(C,-R,0),M.push(0,0,1),g.push(T/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<a;R++){const T=R+c*p,C=R+c*(p+1),k=R+1+c*(p+1),D=R+1+c*p;m.push(T,C,D),m.push(C,k,D)}this.setIndex(m),this.setAttribute("position",new $n(x,3)),this.setAttribute("normal",new $n(M,3)),this.setAttribute("uv",new $n(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.widthSegments,e.heightSegments)}}var H_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G_=`#ifdef USE_ALPHAHASH
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
#endif`,V_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q_=`#ifdef USE_AOMAP
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
#endif`,K_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,j_=`#ifdef USE_BATCHING
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
#endif`,$_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ev=`#ifdef USE_IRIDESCENCE
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
#endif`,tv=`#ifdef USE_BUMPMAP
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
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uv=`#define PI 3.141592653589793
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
} // validated`,hv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dv=`vec3 transformedNormal = objectNormal;
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
#endif`,fv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_v="gl_FragColor = linearToOutputTexel( gl_FragColor );",vv=`
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
}`,xv=`#ifdef USE_ENVMAP
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
#endif`,Mv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sv=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ev=`#ifdef USE_ENVMAP
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
#endif`,Tv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Av=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rv=`#ifdef USE_GRADIENTMAP
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
}`,Cv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lv=`uniform bool receiveShadow;
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
#endif`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Uv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bv=`PhysicalMaterial material;
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
#endif`,kv=`struct PhysicalMaterial {
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
}`,zv=`
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
#endif`,Hv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$v=`#if defined( USE_POINTS_UV )
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
#endif`,Zv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`#ifdef USE_MORPHTARGETS
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
#endif`,i0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c0=`#ifdef USE_NORMALMAP
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
#endif`,u0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,g0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b0=`float getShadowMask() {
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
}`,A0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,R0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C0=`#ifdef USE_SKINNING
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
#endif`,P0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D0=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U0=`#ifdef USE_TRANSMISSION
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
#endif`,N0=`#ifdef USE_TRANSMISSION
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
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H0=`uniform sampler2D t2D;
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`#include <common>
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
}`,q0=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,K0=`#define DISTANCE
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
}`,j0=`#define DISTANCE
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`uniform float scale;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,ex=`#include <common>
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
}`,tx=`uniform vec3 diffuse;
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
}`,nx=`#define LAMBERT
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
}`,ix=`#define LAMBERT
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
}`,rx=`#define MATCAP
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
}`,sx=`#define MATCAP
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
}`,ox=`#define NORMAL
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
}`,ax=`#define NORMAL
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
}`,lx=`#define PHONG
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
}`,cx=`#define PHONG
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
}`,ux=`#define STANDARD
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
}`,hx=`#define STANDARD
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
}`,dx=`#define TOON
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
}`,fx=`#define TOON
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
}`,px=`uniform float size;
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#include <common>
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
}`,_x=`uniform vec3 color;
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
}`,vx=`uniform float rotation;
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
}`,xx=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:H_,alphahash_pars_fragment:G_,alphamap_fragment:V_,alphamap_pars_fragment:W_,alphatest_fragment:X_,alphatest_pars_fragment:Y_,aomap_fragment:q_,aomap_pars_fragment:K_,batching_pars_vertex:j_,batching_vertex:$_,begin_vertex:Z_,beginnormal_vertex:J_,bsdfs:Q_,iridescence_fragment:ev,bumpmap_pars_fragment:tv,clipping_planes_fragment:nv,clipping_planes_pars_fragment:iv,clipping_planes_pars_vertex:rv,clipping_planes_vertex:sv,color_fragment:ov,color_pars_fragment:av,color_pars_vertex:lv,color_vertex:cv,common:uv,cube_uv_reflection_fragment:hv,defaultnormal_vertex:dv,displacementmap_pars_vertex:fv,displacementmap_vertex:pv,emissivemap_fragment:mv,emissivemap_pars_fragment:gv,colorspace_fragment:_v,colorspace_pars_fragment:vv,envmap_fragment:xv,envmap_common_pars_fragment:Mv,envmap_pars_fragment:Sv,envmap_pars_vertex:yv,envmap_physical_pars_fragment:Dv,envmap_vertex:Ev,fog_vertex:Tv,fog_pars_vertex:bv,fog_fragment:Av,fog_pars_fragment:wv,gradientmap_pars_fragment:Rv,lightmap_pars_fragment:Cv,lights_lambert_fragment:Pv,lights_lambert_pars_fragment:Iv,lights_pars_begin:Lv,lights_toon_fragment:Uv,lights_toon_pars_fragment:Nv,lights_phong_fragment:Fv,lights_phong_pars_fragment:Ov,lights_physical_fragment:Bv,lights_physical_pars_fragment:kv,lights_fragment_begin:zv,lights_fragment_maps:Hv,lights_fragment_end:Gv,logdepthbuf_fragment:Vv,logdepthbuf_pars_fragment:Wv,logdepthbuf_pars_vertex:Xv,logdepthbuf_vertex:Yv,map_fragment:qv,map_pars_fragment:Kv,map_particle_fragment:jv,map_particle_pars_fragment:$v,metalnessmap_fragment:Zv,metalnessmap_pars_fragment:Jv,morphinstance_vertex:Qv,morphcolor_vertex:e0,morphnormal_vertex:t0,morphtarget_pars_vertex:n0,morphtarget_vertex:i0,normal_fragment_begin:r0,normal_fragment_maps:s0,normal_pars_fragment:o0,normal_pars_vertex:a0,normal_vertex:l0,normalmap_pars_fragment:c0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:h0,clearcoat_pars_fragment:d0,iridescence_pars_fragment:f0,opaque_fragment:p0,packing:m0,premultiplied_alpha_fragment:g0,project_vertex:_0,dithering_fragment:v0,dithering_pars_fragment:x0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:y0,shadowmap_pars_vertex:E0,shadowmap_vertex:T0,shadowmask_pars_fragment:b0,skinbase_vertex:A0,skinning_pars_vertex:w0,skinning_vertex:R0,skinnormal_vertex:C0,specularmap_fragment:P0,specularmap_pars_fragment:I0,tonemapping_fragment:L0,tonemapping_pars_fragment:D0,transmission_fragment:U0,transmission_pars_fragment:N0,uv_pars_fragment:F0,uv_pars_vertex:O0,uv_vertex:B0,worldpos_vertex:k0,background_vert:z0,background_frag:H0,backgroundCube_vert:G0,backgroundCube_frag:V0,cube_vert:W0,cube_frag:X0,depth_vert:Y0,depth_frag:q0,distanceRGBA_vert:K0,distanceRGBA_frag:j0,equirect_vert:$0,equirect_frag:Z0,linedashed_vert:J0,linedashed_frag:Q0,meshbasic_vert:ex,meshbasic_frag:tx,meshlambert_vert:nx,meshlambert_frag:ix,meshmatcap_vert:rx,meshmatcap_frag:sx,meshnormal_vert:ox,meshnormal_frag:ax,meshphong_vert:lx,meshphong_frag:cx,meshphysical_vert:ux,meshphysical_frag:hx,meshtoon_vert:dx,meshtoon_frag:fx,points_vert:px,points_frag:mx,shadow_vert:gx,shadow_frag:_x,sprite_vert:vx,sprite_frag:xx},ze={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},pr={basic:{uniforms:pi([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:pi([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new lt(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:pi([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:pi([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:pi([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new lt(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:pi([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:pi([ze.points,ze.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:pi([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:pi([ze.common,ze.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:pi([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:pi([ze.sprite,ze.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:pi([ze.common,ze.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:pi([ze.lights,ze.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};pr.physical={uniforms:pi([pr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const yc={r:0,b:0,g:0},Xs=new Sr,Mx=new Tt;function Sx(r,e,t,n,i,s,o){const a=new lt(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function x(R){let T=R.isScene===!0?R.background:null;return T&&T.isTexture&&(T=(R.backgroundBlurriness>0?t:e).get(T)),T}function M(R){let T=!1;const C=x(R);C===null?p(a,l):C&&C.isColor&&(p(C,1),T=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(R,T){const C=x(T);C&&(C.isCubeTexture||C.mapping===hu)?(u===void 0&&(u=new Nn(new Ol(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:sa(pr.backgroundCube.uniforms),vertexShader:pr.backgroundCube.vertexShader,fragmentShader:pr.backgroundCube.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(k,D,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Xs.copy(T.backgroundRotation),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(Xs)),u.material.toneMapped=Xt.getTransfer(C.colorSpace)!==an,(h!==C||f!==C.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=C,f=C.version,m=r.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Nn(new Bl(2,2),new _i({name:"BackgroundMaterial",uniforms:sa(pr.background.uniforms),vertexShader:pr.background.vertexShader,fragmentShader:pr.background.fragmentShader,side:Jr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(C.colorSpace)!==an,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=C,f=C.version,m=r.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function p(R,T){R.getRGB(yc,$p(r)),n.buffers.color.setClear(yc.r,yc.g,yc.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(R,T=1){a.set(R),l=T,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,p(a,l)},render:M,addToRenderList:g}}function yx(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(b,G,oe,ee,he){let _e=!1;const ce=h(ee,oe,G);s!==ce&&(s=ce,c(s.object)),_e=m(b,ee,oe,he),_e&&x(b,ee,oe,he),he!==null&&e.update(he,r.ELEMENT_ARRAY_BUFFER),(_e||o)&&(o=!1,C(b,G,oe,ee),he!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function u(b){return r.deleteVertexArray(b)}function h(b,G,oe){const ee=oe.wireframe===!0;let he=n[b.id];he===void 0&&(he={},n[b.id]=he);let _e=he[G.id];_e===void 0&&(_e={},he[G.id]=_e);let ce=_e[ee];return ce===void 0&&(ce=f(l()),_e[ee]=ce),ce}function f(b){const G=[],oe=[],ee=[];for(let he=0;he<t;he++)G[he]=0,oe[he]=0,ee[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:oe,attributeDivisors:ee,object:b,attributes:{},index:null}}function m(b,G,oe,ee){const he=s.attributes,_e=G.attributes;let ce=0;const Se=oe.getAttributes();for(const se in Se)if(Se[se].location>=0){const Le=he[se];let Ge=_e[se];if(Ge===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(Ge=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(Ge=b.instanceColor)),Le===void 0||Le.attribute!==Ge||Ge&&Le.data!==Ge.data)return!0;ce++}return s.attributesNum!==ce||s.index!==ee}function x(b,G,oe,ee){const he={},_e=G.attributes;let ce=0;const Se=oe.getAttributes();for(const se in Se)if(Se[se].location>=0){let Le=_e[se];Le===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(Le=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(Le=b.instanceColor));const Ge={};Ge.attribute=Le,Le&&Le.data&&(Ge.data=Le.data),he[se]=Ge,ce++}s.attributes=he,s.attributesNum=ce,s.index=ee}function M(){const b=s.newAttributes;for(let G=0,oe=b.length;G<oe;G++)b[G]=0}function g(b){p(b,0)}function p(b,G){const oe=s.newAttributes,ee=s.enabledAttributes,he=s.attributeDivisors;oe[b]=1,ee[b]===0&&(r.enableVertexAttribArray(b),ee[b]=1),he[b]!==G&&(r.vertexAttribDivisor(b,G),he[b]=G)}function R(){const b=s.newAttributes,G=s.enabledAttributes;for(let oe=0,ee=G.length;oe<ee;oe++)G[oe]!==b[oe]&&(r.disableVertexAttribArray(oe),G[oe]=0)}function T(b,G,oe,ee,he,_e,ce){ce===!0?r.vertexAttribIPointer(b,G,oe,he,_e):r.vertexAttribPointer(b,G,oe,ee,he,_e)}function C(b,G,oe,ee){M();const he=ee.attributes,_e=oe.getAttributes(),ce=G.defaultAttributeValues;for(const Se in _e){const se=_e[Se];if(se.location>=0){let Te=he[Se];if(Te===void 0&&(Se==="instanceMatrix"&&b.instanceMatrix&&(Te=b.instanceMatrix),Se==="instanceColor"&&b.instanceColor&&(Te=b.instanceColor)),Te!==void 0){const Le=Te.normalized,Ge=Te.itemSize,st=e.get(Te);if(st===void 0)continue;const gt=st.buffer,fe=st.type,Ee=st.bytesPerElement,we=fe===r.INT||fe===r.UNSIGNED_INT||Te.gpuType===id;if(Te.isInterleavedBufferAttribute){const be=Te.data,pe=be.stride,et=Te.offset;if(be.isInstancedInterleavedBuffer){for(let Be=0;Be<se.locationSize;Be++)p(se.location+Be,be.meshPerAttribute);b.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Be=0;Be<se.locationSize;Be++)g(se.location+Be);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let Be=0;Be<se.locationSize;Be++)T(se.location+Be,Ge/se.locationSize,fe,Le,pe*Ee,(et+Ge/se.locationSize*Be)*Ee,we)}else{if(Te.isInstancedBufferAttribute){for(let be=0;be<se.locationSize;be++)p(se.location+be,Te.meshPerAttribute);b.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let be=0;be<se.locationSize;be++)g(se.location+be);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let be=0;be<se.locationSize;be++)T(se.location+be,Ge/se.locationSize,fe,Le,Ge*Ee,Ge/se.locationSize*be*Ee,we)}}else if(ce!==void 0){const Le=ce[Se];if(Le!==void 0)switch(Le.length){case 2:r.vertexAttrib2fv(se.location,Le);break;case 3:r.vertexAttrib3fv(se.location,Le);break;case 4:r.vertexAttrib4fv(se.location,Le);break;default:r.vertexAttrib1fv(se.location,Le)}}}}R()}function k(){Q();for(const b in n){const G=n[b];for(const oe in G){const ee=G[oe];for(const he in ee)u(ee[he].object),delete ee[he];delete G[oe]}delete n[b]}}function D(b){if(n[b.id]===void 0)return;const G=n[b.id];for(const oe in G){const ee=G[oe];for(const he in ee)u(ee[he].object),delete ee[he];delete G[oe]}delete n[b.id]}function B(b){for(const G in n){const oe=n[G];if(oe[b.id]===void 0)continue;const ee=oe[b.id];for(const he in ee)u(ee[he].object),delete ee[he];delete oe[b.id]}}function Q(){P(),o=!0,s!==i&&(s=i,c(s.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:Q,resetDefaultState:P,dispose:k,releaseStatesOfGeometry:D,releaseStatesOfProgram:B,initAttributes:M,enableAttribute:g,disableUnusedAttributes:R}}function Ex(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x];t.update(m,n,1)}function l(c,u,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)o(c[x],u[x],f[x]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let x=0;for(let M=0;M<h;M++)x+=u[M];for(let M=0;M<f.length;M++)t.update(x,n,f[M])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Tx(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(D){return!(D!==Ai&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const B=D===or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Qr&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==bi&&!B)}function l(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),R=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,k=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:p,maxVaryings:R,maxFragmentUniforms:T,vertexTextures:C,maxSamples:k}}function bx(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ks,a=new wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||i;return i=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const x=h.clippingPlanes,M=h.clipIntersection,g=h.clipShadows,p=r.get(h);if(!i||x===null||x.length===0||s&&!g)s?u(null):c();else{const R=s?0:n,T=R*4;let C=p.clippingState||null;l.value=C,C=u(x,f,T,m);for(let k=0;k!==T;++k)C[k]=t[k];p.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,x){const M=h!==null?h.length:0;let g=null;if(M!==0){if(g=l.value,x!==!0||g===null){const p=m+M*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,C=m;T!==M;++T,C+=4)o.copy(h[T]).applyMatrix4(R,a),o.normal.toArray(g,C),g[C+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}function Ax(r){let e=new WeakMap;function t(o,a){return a===dh?o.mapping=ea:a===fh&&(o.mapping=ta),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===dh||a===fh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new O_(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class da extends Zp{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ko=4,bf=[.125,.215,.35,.446,.526,.582],Zs=20,Xu=new da,Af=new lt;let Yu=null,qu=0,Ku=0,ju=!1;const js=(1+Math.sqrt(5))/2,Oo=1/js,wf=[new Y(-js,Oo,0),new Y(js,Oo,0),new Y(-Oo,0,js),new Y(Oo,0,js),new Y(0,js,-Oo),new Y(0,js,Oo),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Rf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Yu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=If(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yu,qu,Ku),this._renderer.xr.enabled=ju,e.scissorTest=!1,Ec(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ea||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:or,format:Ai,colorSpace:Fn,depthBuffer:!1},i=Cf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wx(s)),this._blurMaterial=Rx(s,e,t)}return i}_compileMaterial(e){const t=new Nn(this._lodPlanes[0],e);this._renderer.compile(t,Xu)}_sceneToCubeUV(e,t,n,i){const a=new gi(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Af),u.toneMapping=As,u.autoClear=!1;const m=new Qs({name:"PMREM.Background",side:wi,depthWrite:!1,depthTest:!1}),x=new Nn(new Ol,m);let M=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,M=!0):(m.color.copy(Af),M=!0);for(let p=0;p<6;p++){const R=p%3;R===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):R===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const T=this._cubeSize;Ec(i,R*T,p>2?T:0,T,T),u.setRenderTarget(i),M&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ea||e.mapping===ta;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=If()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ec(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Xu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wf[(i-s-1)%wf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Nn(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Zs-1),M=s/x,g=isFinite(s)?1+Math.floor(u*M):Zs;g>Zs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zs}`);const p=[];let R=0;for(let B=0;B<Zs;++B){const Q=B/M,P=Math.exp(-Q*Q/2);p.push(P),B===0?R+=P:B<g&&(R+=2*P)}for(let B=0;B<p.length;B++)p[B]=p[B]/R;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=x,f.mipInt.value=T-n;const C=this._sizeLods[i],k=3*C*(i>T-ko?i-T+ko:0),D=4*(this._cubeSize-C);Ec(t,k,D,3*C,2*C),l.setRenderTarget(t),l.render(h,Xu)}}function wx(r){const e=[],t=[],n=[];let i=r;const s=r-ko+1+bf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ko?l=bf[o-r+ko-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,x=6,M=3,g=2,p=1,R=new Float32Array(M*x*m),T=new Float32Array(g*x*m),C=new Float32Array(p*x*m);for(let D=0;D<m;D++){const B=D%3*2/3-1,Q=D>2?0:-1,P=[B,Q,0,B+2/3,Q,0,B+2/3,Q+1,0,B,Q,0,B+2/3,Q+1,0,B,Q+1,0];R.set(P,M*x*D),T.set(f,g*x*D);const b=[D,D,D,D,D,D];C.set(b,p*x*D)}const k=new Oi;k.setAttribute("position",new ri(R,M)),k.setAttribute("uv",new ri(T,g)),k.setAttribute("faceIndex",new ri(C,p)),e.push(k),i>ko&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Cf(r,e,t){const n=new es(r,e,t);return n.texture.mapping=hu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ec(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Rx(r,e,t){const n=new Float32Array(Zs),i=new Y(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fd(),fragmentShader:`

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
		`,blending:bs,depthTest:!1,depthWrite:!1})}function Pf(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fd(),fragmentShader:`

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
		`,blending:bs,depthTest:!1,depthWrite:!1})}function If(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function fd(){return`

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
	`}function Cx(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===dh||l===fh,u=l===ea||l===ta;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Rf(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&i(m)?(t===null&&(t=new Rf(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Px(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Wo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ix(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const M=f.morphAttributes[x];for(let g=0,p=M.length;g<p;g++)e.remove(M[g])}f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)e.update(f[x],r.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const M=m[x];for(let g=0,p=M.length;g<p;g++)e.update(M[g],r.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,x=h.attributes.position;let M=0;if(m!==null){const R=m.array;M=m.version;for(let T=0,C=R.length;T<C;T+=3){const k=R[T+0],D=R[T+1],B=R[T+2];f.push(k,D,D,B,B,k)}}else if(x!==void 0){const R=x.array;M=x.version;for(let T=0,C=R.length/3-1;T<C;T+=3){const k=T+0,D=T+1,B=T+2;f.push(k,D,D,B,B,k)}}else return;const g=new(Wp(f)?jp:Kp)(f,1);g.version=M;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Lx(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){r.drawElements(n,m,s,f*o),t.update(m,n,1)}function c(f,m,x){x!==0&&(r.drawElementsInstanced(n,m,s,f*o,x),t.update(m,n,x))}function u(f,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,x);let g=0;for(let p=0;p<x;p++)g+=m[p];t.update(g,n,1)}function h(f,m,x,M){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,m[p],M[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,M,0,x);let p=0;for(let R=0;R<x;R++)p+=m[R];for(let R=0;R<M.length;R++)t.update(p,n,M[R])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Dx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ux(r,e,t){const n=new WeakMap,i=new tn;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let P=function(){B.dispose(),n.delete(a),a.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let T=0;m===!0&&(T=1),x===!0&&(T=2),M===!0&&(T=3);let C=a.attributes.position.count*T,k=1;C>e.maxTextureSize&&(k=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const D=new Float32Array(C*k*4*h),B=new Yp(D,C,k,h);B.type=bi,B.needsUpdate=!0;const Q=T*4;for(let b=0;b<h;b++){const G=g[b],oe=p[b],ee=R[b],he=C*k*4*b;for(let _e=0;_e<G.count;_e++){const ce=_e*Q;m===!0&&(i.fromBufferAttribute(G,_e),D[he+ce+0]=i.x,D[he+ce+1]=i.y,D[he+ce+2]=i.z,D[he+ce+3]=0),x===!0&&(i.fromBufferAttribute(oe,_e),D[he+ce+4]=i.x,D[he+ce+5]=i.y,D[he+ce+6]=i.z,D[he+ce+7]=0),M===!0&&(i.fromBufferAttribute(ee,_e),D[he+ce+8]=i.x,D[he+ce+9]=i.y,D[he+ce+10]=i.z,D[he+ce+11]=ee.itemSize===4?i.w:1)}}f={count:h,texture:B,size:new $e(C,k)},n.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Nx(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class em extends Pn{constructor(e,t,n,i,s,o,a,l,c,u=Vo){if(u!==Vo&&u!==ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Vo&&(n=uo),n===void 0&&u===ia&&(n=na),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vn,this.minFilter=l!==void 0?l:Vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const tm=new Pn,Lf=new em(1,1),nm=new Yp,im=new __,rm=new Jp,Df=[],Uf=[],Nf=new Float32Array(16),Ff=new Float32Array(9),Of=new Float32Array(4);function fa(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Df[i];if(s===void 0&&(s=new Float32Array(i),Df[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function On(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Bn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function pu(r,e){let t=Uf[e];t===void 0&&(t=new Int32Array(e),Uf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Fx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ox(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;r.uniform2fv(this.addr,e),Bn(t,e)}}function Bx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(On(t,e))return;r.uniform3fv(this.addr,e),Bn(t,e)}}function kx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;r.uniform4fv(this.addr,e),Bn(t,e)}}function zx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Bn(t,e)}else{if(On(t,n))return;Of.set(n),r.uniformMatrix2fv(this.addr,!1,Of),Bn(t,n)}}function Hx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Bn(t,e)}else{if(On(t,n))return;Ff.set(n),r.uniformMatrix3fv(this.addr,!1,Ff),Bn(t,n)}}function Gx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Bn(t,e)}else{if(On(t,n))return;Nf.set(n),r.uniformMatrix4fv(this.addr,!1,Nf),Bn(t,n)}}function Vx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Wx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;r.uniform2iv(this.addr,e),Bn(t,e)}}function Xx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;r.uniform3iv(this.addr,e),Bn(t,e)}}function Yx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;r.uniform4iv(this.addr,e),Bn(t,e)}}function qx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Kx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;r.uniform2uiv(this.addr,e),Bn(t,e)}}function jx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;r.uniform3uiv(this.addr,e),Bn(t,e)}}function $x(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;r.uniform4uiv(this.addr,e),Bn(t,e)}}function Zx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Lf.compareFunction=Vp,s=Lf):s=tm,t.setTexture2D(e||s,i)}function Jx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||im,i)}function Qx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||rm,i)}function eM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||nm,i)}function tM(r){switch(r){case 5126:return Fx;case 35664:return Ox;case 35665:return Bx;case 35666:return kx;case 35674:return zx;case 35675:return Hx;case 35676:return Gx;case 5124:case 35670:return Vx;case 35667:case 35671:return Wx;case 35668:case 35672:return Xx;case 35669:case 35673:return Yx;case 5125:return qx;case 36294:return Kx;case 36295:return jx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return eM}}function nM(r,e){r.uniform1fv(this.addr,e)}function iM(r,e){const t=fa(e,this.size,2);r.uniform2fv(this.addr,t)}function rM(r,e){const t=fa(e,this.size,3);r.uniform3fv(this.addr,t)}function sM(r,e){const t=fa(e,this.size,4);r.uniform4fv(this.addr,t)}function oM(r,e){const t=fa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function aM(r,e){const t=fa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function lM(r,e){const t=fa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function cM(r,e){r.uniform1iv(this.addr,e)}function uM(r,e){r.uniform2iv(this.addr,e)}function hM(r,e){r.uniform3iv(this.addr,e)}function dM(r,e){r.uniform4iv(this.addr,e)}function fM(r,e){r.uniform1uiv(this.addr,e)}function pM(r,e){r.uniform2uiv(this.addr,e)}function mM(r,e){r.uniform3uiv(this.addr,e)}function gM(r,e){r.uniform4uiv(this.addr,e)}function _M(r,e,t){const n=this.cache,i=e.length,s=pu(t,i);On(n,s)||(r.uniform1iv(this.addr,s),Bn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||tm,s[o])}function vM(r,e,t){const n=this.cache,i=e.length,s=pu(t,i);On(n,s)||(r.uniform1iv(this.addr,s),Bn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||im,s[o])}function xM(r,e,t){const n=this.cache,i=e.length,s=pu(t,i);On(n,s)||(r.uniform1iv(this.addr,s),Bn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||rm,s[o])}function MM(r,e,t){const n=this.cache,i=e.length,s=pu(t,i);On(n,s)||(r.uniform1iv(this.addr,s),Bn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||nm,s[o])}function SM(r){switch(r){case 5126:return nM;case 35664:return iM;case 35665:return rM;case 35666:return sM;case 35674:return oM;case 35675:return aM;case 35676:return lM;case 5124:case 35670:return cM;case 35667:case 35671:return uM;case 35668:case 35672:return hM;case 35669:case 35673:return dM;case 5125:return fM;case 36294:return pM;case 36295:return mM;case 36296:return gM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return vM;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return MM}}class yM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tM(t.type)}}class EM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=SM(t.type)}}class TM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const $u=/(\w+)(\])?(\[|\.)?/g;function Bf(r,e){r.seq.push(e),r.map[e.id]=e}function bM(r,e,t){const n=r.name,i=n.length;for($u.lastIndex=0;;){const s=$u.exec(n),o=$u.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Bf(t,c===void 0?new yM(a,r,e):new EM(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new TM(a),Bf(t,h)),t=h}}}class Gc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);bM(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function kf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const AM=37297;let wM=0;function RM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function CM(r){const e=Xt.getPrimaries(Xt.workingColorSpace),t=Xt.getPrimaries(r);let n;switch(e===t?n="":e===Kc&&t===qc?n="LinearDisplayP3ToLinearSRGB":e===qc&&t===Kc&&(n="LinearSRGBToLinearDisplayP3"),r){case Fn:case fu:return[n,"LinearTransferOETF"];case mi:case cd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function zf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+RM(r.getShaderSource(e),o)}else return i}function PM(r,e){const t=CM(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function IM(r,e){let t;switch(e){case wg:t="Linear";break;case Rg:t="Reinhard";break;case Cg:t="Cineon";break;case Pg:t="ACESFilmic";break;case Lg:t="AgX";break;case Dg:t="Neutral";break;case Ig:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tc=new Y;function LM(){Xt.getLuminanceCoefficients(Tc);const r=Tc.x.toFixed(4),e=Tc.y.toFixed(4),t=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)}function UM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function NM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Na(r){return r!==""}function Hf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(r){return r.replace(FM,BM)}const OM=new Map;function BM(r,e){let t=At[e];if(t===void 0){const n=OM.get(e);if(n!==void 0)t=At[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gh(t)}const kM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vf(r){return r.replace(kM,zM)}function zM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Wf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Rp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Qm?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===zr&&(e="SHADOWMAP_TYPE_VSM"),e}function GM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ea:case ta:e="ENVMAP_TYPE_CUBE";break;case hu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ta:e="ENVMAP_MODE_REFRACTION";break}return e}function WM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Cp:e="ENVMAP_BLENDING_MULTIPLY";break;case bg:e="ENVMAP_BLENDING_MIX";break;case Ag:e="ENVMAP_BLENDING_ADD";break}return e}function XM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function YM(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=HM(t),c=GM(t),u=VM(t),h=WM(t),f=XM(t),m=DM(t),x=UM(s),M=i.createProgram();let g,p,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Na).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Na).join(`
`),p.length>0&&(p+=`
`)):(g=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),p=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==As?"#define TONE_MAPPING":"",t.toneMapping!==As?At.tonemapping_pars_fragment:"",t.toneMapping!==As?IM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,PM("linearToOutputTexel",t.outputColorSpace),LM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Na).join(`
`)),o=Gh(o),o=Hf(o,t),o=Gf(o,t),a=Gh(a),a=Hf(a,t),a=Gf(a,t),o=Vf(o),a=Vf(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===nf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=R+g+o,C=R+p+a,k=kf(i,i.VERTEX_SHADER,T),D=kf(i,i.FRAGMENT_SHADER,C);i.attachShader(M,k),i.attachShader(M,D),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function B(G){if(r.debug.checkShaderErrors){const oe=i.getProgramInfoLog(M).trim(),ee=i.getShaderInfoLog(k).trim(),he=i.getShaderInfoLog(D).trim();let _e=!0,ce=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(_e=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,M,k,D);else{const Se=zf(i,k,"vertex"),se=zf(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+oe+`
`+Se+`
`+se)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ee===""||he==="")&&(ce=!1);ce&&(G.diagnostics={runnable:_e,programLog:oe,vertexShader:{log:ee,prefix:g},fragmentShader:{log:he,prefix:p}})}i.deleteShader(k),i.deleteShader(D),Q=new Gc(i,M),P=NM(i,M)}let Q;this.getUniforms=function(){return Q===void 0&&B(this),Q};let P;this.getAttributes=function(){return P===void 0&&B(this),P};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(M,AM)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wM++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=k,this.fragmentShader=D,this}let qM=0;class KM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jM(e),t.set(e,n)),n}}class jM{constructor(e){this.id=qM++,this.code=e,this.usedTimes=0}}function $M(r,e,t,n,i,s,o){const a=new hd,l=new KM,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(P){return c.add(P),P===0?"uv":`uv${P}`}function g(P,b,G,oe,ee){const he=oe.fog,_e=ee.geometry,ce=P.isMeshStandardMaterial?oe.environment:null,Se=(P.isMeshStandardMaterial?t:e).get(P.envMap||ce),se=Se&&Se.mapping===hu?Se.image.height:null,Te=x[P.type];P.precision!==null&&(m=i.getMaxPrecision(P.precision),m!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",m,"instead."));const Le=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,Ge=Le!==void 0?Le.length:0;let st=0;_e.morphAttributes.position!==void 0&&(st=1),_e.morphAttributes.normal!==void 0&&(st=2),_e.morphAttributes.color!==void 0&&(st=3);let gt,fe,Ee,we;if(Te){const kt=pr[Te];gt=kt.vertexShader,fe=kt.fragmentShader}else gt=P.vertexShader,fe=P.fragmentShader,l.update(P),Ee=l.getVertexShaderID(P),we=l.getFragmentShaderID(P);const be=r.getRenderTarget(),pe=ee.isInstancedMesh===!0,et=ee.isBatchedMesh===!0,Be=!!P.map,Qe=!!P.matcap,U=!!Se,Ze=!!P.aoMap,Ft=!!P.lightMap,Ot=!!P.bumpMap,qe=!!P.normalMap,en=!!P.displacementMap,it=!!P.emissiveMap,ht=!!P.metalnessMap,L=!!P.roughnessMap,y=P.anisotropy>0,ie=P.clearcoat>0,de=P.dispersion>0,ve=P.iridescence>0,ge=P.sheen>0,je=P.transmission>0,ke=y&&!!P.anisotropyMap,Ve=ie&&!!P.clearcoatMap,ft=ie&&!!P.clearcoatNormalMap,Me=ie&&!!P.clearcoatRoughnessMap,We=ve&&!!P.iridescenceMap,Rt=ve&&!!P.iridescenceThicknessMap,Ke=ge&&!!P.sheenColorMap,Ne=ge&&!!P.sheenRoughnessMap,ct=!!P.specularMap,ot=!!P.specularColorMap,vt=!!P.specularIntensityMap,z=je&&!!P.transmissionMap,Re=je&&!!P.thicknessMap,W=!!P.gradientMap,me=!!P.alphaMap,Ue=P.alphaTest>0,Ye=!!P.alphaHash,Ct=!!P.extensions;let Bt=As;P.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Bt=r.toneMapping);const on={shaderID:Te,shaderType:P.type,shaderName:P.name,vertexShader:gt,fragmentShader:fe,defines:P.defines,customVertexShaderID:Ee,customFragmentShaderID:we,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:m,batching:et,batchingColor:et&&ee._colorsTexture!==null,instancing:pe,instancingColor:pe&&ee.instanceColor!==null,instancingMorph:pe&&ee.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Fn,alphaToCoverage:!!P.alphaToCoverage,map:Be,matcap:Qe,envMap:U,envMapMode:U&&Se.mapping,envMapCubeUVHeight:se,aoMap:Ze,lightMap:Ft,bumpMap:Ot,normalMap:qe,displacementMap:f&&en,emissiveMap:it,normalMapObjectSpace:qe&&P.normalMapType===kg,normalMapTangentSpace:qe&&P.normalMapType===Gp,metalnessMap:ht,roughnessMap:L,anisotropy:y,anisotropyMap:ke,clearcoat:ie,clearcoatMap:Ve,clearcoatNormalMap:ft,clearcoatRoughnessMap:Me,dispersion:de,iridescence:ve,iridescenceMap:We,iridescenceThicknessMap:Rt,sheen:ge,sheenColorMap:Ke,sheenRoughnessMap:Ne,specularMap:ct,specularColorMap:ot,specularIntensityMap:vt,transmission:je,transmissionMap:z,thicknessMap:Re,gradientMap:W,opaque:P.transparent===!1&&P.blending===Go&&P.alphaToCoverage===!1,alphaMap:me,alphaTest:Ue,alphaHash:Ye,combine:P.combine,mapUv:Be&&M(P.map.channel),aoMapUv:Ze&&M(P.aoMap.channel),lightMapUv:Ft&&M(P.lightMap.channel),bumpMapUv:Ot&&M(P.bumpMap.channel),normalMapUv:qe&&M(P.normalMap.channel),displacementMapUv:en&&M(P.displacementMap.channel),emissiveMapUv:it&&M(P.emissiveMap.channel),metalnessMapUv:ht&&M(P.metalnessMap.channel),roughnessMapUv:L&&M(P.roughnessMap.channel),anisotropyMapUv:ke&&M(P.anisotropyMap.channel),clearcoatMapUv:Ve&&M(P.clearcoatMap.channel),clearcoatNormalMapUv:ft&&M(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&M(P.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&M(P.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&M(P.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&M(P.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&M(P.sheenRoughnessMap.channel),specularMapUv:ct&&M(P.specularMap.channel),specularColorMapUv:ot&&M(P.specularColorMap.channel),specularIntensityMapUv:vt&&M(P.specularIntensityMap.channel),transmissionMapUv:z&&M(P.transmissionMap.channel),thicknessMapUv:Re&&M(P.thicknessMap.channel),alphaMapUv:me&&M(P.alphaMap.channel),vertexTangents:!!_e.attributes.tangent&&(qe||y),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!_e.attributes.uv&&(Be||me),fog:!!he,useFog:P.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ee.isSkinnedMesh===!0,morphTargets:_e.morphAttributes.position!==void 0,morphNormals:_e.morphAttributes.normal!==void 0,morphColors:_e.morphAttributes.color!==void 0,morphTargetsCount:Ge,morphTextureStride:st,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:P.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Be&&P.map.isVideoTexture===!0&&Xt.getTransfer(P.map.colorSpace)===an,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===mr,flipSided:P.side===wi,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Ct&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&P.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return on.vertexUv1s=c.has(1),on.vertexUv2s=c.has(2),on.vertexUv3s=c.has(3),c.clear(),on}function p(P){const b=[];if(P.shaderID?b.push(P.shaderID):(b.push(P.customVertexShaderID),b.push(P.customFragmentShaderID)),P.defines!==void 0)for(const G in P.defines)b.push(G),b.push(P.defines[G]);return P.isRawShaderMaterial===!1&&(R(b,P),T(b,P),b.push(r.outputColorSpace)),b.push(P.customProgramCacheKey),b.join()}function R(P,b){P.push(b.precision),P.push(b.outputColorSpace),P.push(b.envMapMode),P.push(b.envMapCubeUVHeight),P.push(b.mapUv),P.push(b.alphaMapUv),P.push(b.lightMapUv),P.push(b.aoMapUv),P.push(b.bumpMapUv),P.push(b.normalMapUv),P.push(b.displacementMapUv),P.push(b.emissiveMapUv),P.push(b.metalnessMapUv),P.push(b.roughnessMapUv),P.push(b.anisotropyMapUv),P.push(b.clearcoatMapUv),P.push(b.clearcoatNormalMapUv),P.push(b.clearcoatRoughnessMapUv),P.push(b.iridescenceMapUv),P.push(b.iridescenceThicknessMapUv),P.push(b.sheenColorMapUv),P.push(b.sheenRoughnessMapUv),P.push(b.specularMapUv),P.push(b.specularColorMapUv),P.push(b.specularIntensityMapUv),P.push(b.transmissionMapUv),P.push(b.thicknessMapUv),P.push(b.combine),P.push(b.fogExp2),P.push(b.sizeAttenuation),P.push(b.morphTargetsCount),P.push(b.morphAttributeCount),P.push(b.numDirLights),P.push(b.numPointLights),P.push(b.numSpotLights),P.push(b.numSpotLightMaps),P.push(b.numHemiLights),P.push(b.numRectAreaLights),P.push(b.numDirLightShadows),P.push(b.numPointLightShadows),P.push(b.numSpotLightShadows),P.push(b.numSpotLightShadowsWithMaps),P.push(b.numLightProbes),P.push(b.shadowMapType),P.push(b.toneMapping),P.push(b.numClippingPlanes),P.push(b.numClipIntersection),P.push(b.depthPacking)}function T(P,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),P.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.doubleSided&&a.enable(10),b.flipSided&&a.enable(11),b.useDepthPacking&&a.enable(12),b.dithering&&a.enable(13),b.transmission&&a.enable(14),b.sheen&&a.enable(15),b.opaque&&a.enable(16),b.pointsUvs&&a.enable(17),b.decodeVideoTexture&&a.enable(18),b.alphaToCoverage&&a.enable(19),P.push(a.mask)}function C(P){const b=x[P.type];let G;if(b){const oe=pr[b];G=D_.clone(oe.uniforms)}else G=P.uniforms;return G}function k(P,b){let G;for(let oe=0,ee=u.length;oe<ee;oe++){const he=u[oe];if(he.cacheKey===b){G=he,++G.usedTimes;break}}return G===void 0&&(G=new YM(r,b,P,s),u.push(G)),G}function D(P){if(--P.usedTimes===0){const b=u.indexOf(P);u[b]=u[u.length-1],u.pop(),P.destroy()}}function B(P){l.remove(P)}function Q(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:C,acquireProgram:k,releaseProgram:D,releaseShaderCache:B,programs:u,dispose:Q}}function ZM(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function JM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Xf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Yf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,m,x,M,g){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,groupOrder:x,renderOrder:h.renderOrder,z:M,group:g},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.groupOrder=x,p.renderOrder=h.renderOrder,p.z=M,p.group=g),e++,p}function a(h,f,m,x,M,g){const p=o(h,f,m,x,M,g);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function l(h,f,m,x,M,g){const p=o(h,f,m,x,M,g);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||JM),n.length>1&&n.sort(f||Xf),i.length>1&&i.sort(f||Xf)}function u(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function QM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Yf,r.set(n,[o])):i>=s.length?(o=new Yf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function eS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new lt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function tS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let nS=0;function iS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function rS(r){const e=new eS,t=tS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const i=new Y,s=new Tt,o=new Tt;function a(c){let u=0,h=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let m=0,x=0,M=0,g=0,p=0,R=0,T=0,C=0,k=0,D=0,B=0;c.sort(iS);for(let P=0,b=c.length;P<b;P++){const G=c[P],oe=G.color,ee=G.intensity,he=G.distance,_e=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)u+=oe.r*ee,h+=oe.g*ee,f+=oe.b*ee;else if(G.isLightProbe){for(let ce=0;ce<9;ce++)n.probe[ce].addScaledVector(G.sh.coefficients[ce],ee);B++}else if(G.isDirectionalLight){const ce=e.get(G);if(ce.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Se=G.shadow,se=t.get(G);se.shadowIntensity=Se.intensity,se.shadowBias=Se.bias,se.shadowNormalBias=Se.normalBias,se.shadowRadius=Se.radius,se.shadowMapSize=Se.mapSize,n.directionalShadow[m]=se,n.directionalShadowMap[m]=_e,n.directionalShadowMatrix[m]=G.shadow.matrix,R++}n.directional[m]=ce,m++}else if(G.isSpotLight){const ce=e.get(G);ce.position.setFromMatrixPosition(G.matrixWorld),ce.color.copy(oe).multiplyScalar(ee),ce.distance=he,ce.coneCos=Math.cos(G.angle),ce.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ce.decay=G.decay,n.spot[M]=ce;const Se=G.shadow;if(G.map&&(n.spotLightMap[k]=G.map,k++,Se.updateMatrices(G),G.castShadow&&D++),n.spotLightMatrix[M]=Se.matrix,G.castShadow){const se=t.get(G);se.shadowIntensity=Se.intensity,se.shadowBias=Se.bias,se.shadowNormalBias=Se.normalBias,se.shadowRadius=Se.radius,se.shadowMapSize=Se.mapSize,n.spotShadow[M]=se,n.spotShadowMap[M]=_e,C++}M++}else if(G.isRectAreaLight){const ce=e.get(G);ce.color.copy(oe).multiplyScalar(ee),ce.halfWidth.set(G.width*.5,0,0),ce.halfHeight.set(0,G.height*.5,0),n.rectArea[g]=ce,g++}else if(G.isPointLight){const ce=e.get(G);if(ce.color.copy(G.color).multiplyScalar(G.intensity),ce.distance=G.distance,ce.decay=G.decay,G.castShadow){const Se=G.shadow,se=t.get(G);se.shadowIntensity=Se.intensity,se.shadowBias=Se.bias,se.shadowNormalBias=Se.normalBias,se.shadowRadius=Se.radius,se.shadowMapSize=Se.mapSize,se.shadowCameraNear=Se.camera.near,se.shadowCameraFar=Se.camera.far,n.pointShadow[x]=se,n.pointShadowMap[x]=_e,n.pointShadowMatrix[x]=G.shadow.matrix,T++}n.point[x]=ce,x++}else if(G.isHemisphereLight){const ce=e.get(G);ce.skyColor.copy(G.color).multiplyScalar(ee),ce.groundColor.copy(G.groundColor).multiplyScalar(ee),n.hemi[p]=ce,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const Q=n.hash;(Q.directionalLength!==m||Q.pointLength!==x||Q.spotLength!==M||Q.rectAreaLength!==g||Q.hemiLength!==p||Q.numDirectionalShadows!==R||Q.numPointShadows!==T||Q.numSpotShadows!==C||Q.numSpotMaps!==k||Q.numLightProbes!==B)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=g,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=C+k-D,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=B,Q.directionalLength=m,Q.pointLength=x,Q.spotLength=M,Q.rectAreaLength=g,Q.hemiLength=p,Q.numDirectionalShadows=R,Q.numPointShadows=T,Q.numSpotShadows=C,Q.numSpotMaps=k,Q.numLightProbes=B,n.version=nS++)}function l(c,u){let h=0,f=0,m=0,x=0,M=0;const g=u.matrixWorldInverse;for(let p=0,R=c.length;p<R;p++){const T=c[p];if(T.isDirectionalLight){const C=n.directional[h];C.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(g),h++}else if(T.isSpotLight){const C=n.spot[m];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(g),m++}else if(T.isRectAreaLight){const C=n.rectArea[x];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(g),o.identity(),s.copy(T.matrixWorld),s.premultiply(g),o.extractRotation(s),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){const C=n.point[f];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(g),f++}else if(T.isHemisphereLight){const C=n.hemi[M];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(g),M++}}}return{setup:a,setupView:l,state:n}}function qf(r){const e=new rS(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function sS(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new qf(r),e.set(i,[a])):s>=o.length?(a=new qf(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class oS extends xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aS extends xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cS=`uniform sampler2D shadow_pass;
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
}`;function uS(r,e,t){let n=new dd;const i=new $e,s=new $e,o=new tn,a=new oS({depthPacking:Bg}),l=new aS,c={},u=t.maxTextureSize,h={[Jr]:wi,[wi]:Jr,[mr]:mr},f=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:lS,fragmentShader:cS}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new Oi;x.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Nn(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rp;let p=this.type;this.render=function(D,B,Q){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;const P=r.getRenderTarget(),b=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),oe=r.state;oe.setBlending(bs),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ee=p!==zr&&this.type===zr,he=p===zr&&this.type!==zr;for(let _e=0,ce=D.length;_e<ce;_e++){const Se=D[_e],se=Se.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",Se,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;i.copy(se.mapSize);const Te=se.getFrameExtents();if(i.multiply(Te),s.copy(se.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Te.x),i.x=s.x*Te.x,se.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Te.y),i.y=s.y*Te.y,se.mapSize.y=s.y)),se.map===null||ee===!0||he===!0){const Ge=this.type!==zr?{minFilter:Vn,magFilter:Vn}:{};se.map!==null&&se.map.dispose(),se.map=new es(i.x,i.y,Ge),se.map.texture.name=Se.name+".shadowMap",se.camera.updateProjectionMatrix()}r.setRenderTarget(se.map),r.clear();const Le=se.getViewportCount();for(let Ge=0;Ge<Le;Ge++){const st=se.getViewport(Ge);o.set(s.x*st.x,s.y*st.y,s.x*st.z,s.y*st.w),oe.viewport(o),se.updateMatrices(Se,Ge),n=se.getFrustum(),C(B,Q,se.camera,Se,this.type)}se.isPointLightShadow!==!0&&this.type===zr&&R(se,Q),se.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(P,b,G)};function R(D,B){const Q=e.update(M);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new es(i.x,i.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(B,null,Q,f,M,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(B,null,Q,m,M,null)}function T(D,B,Q,P){let b=null;const G=Q.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(G!==void 0)b=G;else if(b=Q.isPointLight===!0?l:a,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const oe=b.uuid,ee=B.uuid;let he=c[oe];he===void 0&&(he={},c[oe]=he);let _e=he[ee];_e===void 0&&(_e=b.clone(),he[ee]=_e,B.addEventListener("dispose",k)),b=_e}if(b.visible=B.visible,b.wireframe=B.wireframe,P===zr?b.side=B.shadowSide!==null?B.shadowSide:B.side:b.side=B.shadowSide!==null?B.shadowSide:h[B.side],b.alphaMap=B.alphaMap,b.alphaTest=B.alphaTest,b.map=B.map,b.clipShadows=B.clipShadows,b.clippingPlanes=B.clippingPlanes,b.clipIntersection=B.clipIntersection,b.displacementMap=B.displacementMap,b.displacementScale=B.displacementScale,b.displacementBias=B.displacementBias,b.wireframeLinewidth=B.wireframeLinewidth,b.linewidth=B.linewidth,Q.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const oe=r.properties.get(b);oe.light=Q}return b}function C(D,B,Q,P,b){if(D.visible===!1)return;if(D.layers.test(B.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&b===zr)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,D.matrixWorld);const ee=e.update(D),he=D.material;if(Array.isArray(he)){const _e=ee.groups;for(let ce=0,Se=_e.length;ce<Se;ce++){const se=_e[ce],Te=he[se.materialIndex];if(Te&&Te.visible){const Le=T(D,Te,P,b);D.onBeforeShadow(r,D,B,Q,ee,Le,se),r.renderBufferDirect(Q,null,ee,Le,D,se),D.onAfterShadow(r,D,B,Q,ee,Le,se)}}}else if(he.visible){const _e=T(D,he,P,b);D.onBeforeShadow(r,D,B,Q,ee,_e,null),r.renderBufferDirect(Q,null,ee,_e,D,null),D.onAfterShadow(r,D,B,Q,ee,_e,null)}}const oe=D.children;for(let ee=0,he=oe.length;ee<he;ee++)C(oe[ee],B,Q,P,b)}function k(D){D.target.removeEventListener("dispose",k);for(const Q in c){const P=c[Q],b=D.target.uuid;b in P&&(P[b].dispose(),delete P[b])}}}function hS(r){function e(){let z=!1;const Re=new tn;let W=null;const me=new tn(0,0,0,0);return{setMask:function(Ue){W!==Ue&&!z&&(r.colorMask(Ue,Ue,Ue,Ue),W=Ue)},setLocked:function(Ue){z=Ue},setClear:function(Ue,Ye,Ct,Bt,on){on===!0&&(Ue*=Bt,Ye*=Bt,Ct*=Bt),Re.set(Ue,Ye,Ct,Bt),me.equals(Re)===!1&&(r.clearColor(Ue,Ye,Ct,Bt),me.copy(Re))},reset:function(){z=!1,W=null,me.set(-1,0,0,0)}}}function t(){let z=!1,Re=null,W=null,me=null;return{setTest:function(Ue){Ue?we(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(Ue){Re!==Ue&&!z&&(r.depthMask(Ue),Re=Ue)},setFunc:function(Ue){if(W!==Ue){switch(Ue){case vg:r.depthFunc(r.NEVER);break;case xg:r.depthFunc(r.ALWAYS);break;case Mg:r.depthFunc(r.LESS);break;case Wc:r.depthFunc(r.LEQUAL);break;case Sg:r.depthFunc(r.EQUAL);break;case yg:r.depthFunc(r.GEQUAL);break;case Eg:r.depthFunc(r.GREATER);break;case Tg:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}W=Ue}},setLocked:function(Ue){z=Ue},setClear:function(Ue){me!==Ue&&(r.clearDepth(Ue),me=Ue)},reset:function(){z=!1,Re=null,W=null,me=null}}}function n(){let z=!1,Re=null,W=null,me=null,Ue=null,Ye=null,Ct=null,Bt=null,on=null;return{setTest:function(kt){z||(kt?we(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(kt){Re!==kt&&!z&&(r.stencilMask(kt),Re=kt)},setFunc:function(kt,vi,xi){(W!==kt||me!==vi||Ue!==xi)&&(r.stencilFunc(kt,vi,xi),W=kt,me=vi,Ue=xi)},setOp:function(kt,vi,xi){(Ye!==kt||Ct!==vi||Bt!==xi)&&(r.stencilOp(kt,vi,xi),Ye=kt,Ct=vi,Bt=xi)},setLocked:function(kt){z=kt},setClear:function(kt){on!==kt&&(r.clearStencil(kt),on=kt)},reset:function(){z=!1,Re=null,W=null,me=null,Ue=null,Ye=null,Ct=null,Bt=null,on=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],m=null,x=!1,M=null,g=null,p=null,R=null,T=null,C=null,k=null,D=new lt(0,0,0),B=0,Q=!1,P=null,b=null,G=null,oe=null,ee=null;const he=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let _e=!1,ce=0;const Se=r.getParameter(r.VERSION);Se.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(Se)[1]),_e=ce>=1):Se.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(Se)[1]),_e=ce>=2);let se=null,Te={};const Le=r.getParameter(r.SCISSOR_BOX),Ge=r.getParameter(r.VIEWPORT),st=new tn().fromArray(Le),gt=new tn().fromArray(Ge);function fe(z,Re,W,me){const Ue=new Uint8Array(4),Ye=r.createTexture();r.bindTexture(z,Ye),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ct=0;Ct<W;Ct++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,Ue):r.texImage2D(Re+Ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ue);return Ye}const Ee={};Ee[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),we(r.DEPTH_TEST),s.setFunc(Wc),Ot(!1),qe(qd),we(r.CULL_FACE),Ze(bs);function we(z){c[z]!==!0&&(r.enable(z),c[z]=!0)}function be(z){c[z]!==!1&&(r.disable(z),c[z]=!1)}function pe(z,Re){return u[z]!==Re?(r.bindFramebuffer(z,Re),u[z]=Re,z===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Re),z===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function et(z,Re){let W=f,me=!1;if(z){W=h.get(Re),W===void 0&&(W=[],h.set(Re,W));const Ue=z.textures;if(W.length!==Ue.length||W[0]!==r.COLOR_ATTACHMENT0){for(let Ye=0,Ct=Ue.length;Ye<Ct;Ye++)W[Ye]=r.COLOR_ATTACHMENT0+Ye;W.length=Ue.length,me=!0}}else W[0]!==r.BACK&&(W[0]=r.BACK,me=!0);me&&r.drawBuffers(W)}function Be(z){return m!==z?(r.useProgram(z),m=z,!0):!1}const Qe={[$s]:r.FUNC_ADD,[tg]:r.FUNC_SUBTRACT,[ng]:r.FUNC_REVERSE_SUBTRACT};Qe[ig]=r.MIN,Qe[rg]=r.MAX;const U={[sg]:r.ZERO,[og]:r.ONE,[ag]:r.SRC_COLOR,[uh]:r.SRC_ALPHA,[fg]:r.SRC_ALPHA_SATURATE,[hg]:r.DST_COLOR,[cg]:r.DST_ALPHA,[lg]:r.ONE_MINUS_SRC_COLOR,[hh]:r.ONE_MINUS_SRC_ALPHA,[dg]:r.ONE_MINUS_DST_COLOR,[ug]:r.ONE_MINUS_DST_ALPHA,[pg]:r.CONSTANT_COLOR,[mg]:r.ONE_MINUS_CONSTANT_COLOR,[gg]:r.CONSTANT_ALPHA,[_g]:r.ONE_MINUS_CONSTANT_ALPHA};function Ze(z,Re,W,me,Ue,Ye,Ct,Bt,on,kt){if(z===bs){x===!0&&(be(r.BLEND),x=!1);return}if(x===!1&&(we(r.BLEND),x=!0),z!==eg){if(z!==M||kt!==Q){if((g!==$s||T!==$s)&&(r.blendEquation(r.FUNC_ADD),g=$s,T=$s),kt)switch(z){case Go:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kd:r.blendFunc(r.ONE,r.ONE);break;case jd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $d:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Go:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kd:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case jd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $d:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}p=null,R=null,C=null,k=null,D.set(0,0,0),B=0,M=z,Q=kt}return}Ue=Ue||Re,Ye=Ye||W,Ct=Ct||me,(Re!==g||Ue!==T)&&(r.blendEquationSeparate(Qe[Re],Qe[Ue]),g=Re,T=Ue),(W!==p||me!==R||Ye!==C||Ct!==k)&&(r.blendFuncSeparate(U[W],U[me],U[Ye],U[Ct]),p=W,R=me,C=Ye,k=Ct),(Bt.equals(D)===!1||on!==B)&&(r.blendColor(Bt.r,Bt.g,Bt.b,on),D.copy(Bt),B=on),M=z,Q=!1}function Ft(z,Re){z.side===mr?be(r.CULL_FACE):we(r.CULL_FACE);let W=z.side===wi;Re&&(W=!W),Ot(W),z.blending===Go&&z.transparent===!1?Ze(bs):Ze(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),i.setMask(z.colorWrite);const me=z.stencilWrite;o.setTest(me),me&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),it(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?we(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(z){P!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),P=z)}function qe(z){z!==Zm?(we(r.CULL_FACE),z!==b&&(z===qd?r.cullFace(r.BACK):z===Jm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),b=z}function en(z){z!==G&&(_e&&r.lineWidth(z),G=z)}function it(z,Re,W){z?(we(r.POLYGON_OFFSET_FILL),(oe!==Re||ee!==W)&&(r.polygonOffset(Re,W),oe=Re,ee=W)):be(r.POLYGON_OFFSET_FILL)}function ht(z){z?we(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function L(z){z===void 0&&(z=r.TEXTURE0+he-1),se!==z&&(r.activeTexture(z),se=z)}function y(z,Re,W){W===void 0&&(se===null?W=r.TEXTURE0+he-1:W=se);let me=Te[W];me===void 0&&(me={type:void 0,texture:void 0},Te[W]=me),(me.type!==z||me.texture!==Re)&&(se!==W&&(r.activeTexture(W),se=W),r.bindTexture(z,Re||Ee[z]),me.type=z,me.texture=Re)}function ie(){const z=Te[se];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function de(){try{r.compressedTexImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{r.compressedTexImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{r.texSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function je(){try{r.texSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ke(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ve(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{r.texStorage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{r.texStorage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function We(){try{r.texImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Rt(){try{r.texImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ke(z){st.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),st.copy(z))}function Ne(z){gt.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),gt.copy(z))}function ct(z,Re){let W=l.get(Re);W===void 0&&(W=new WeakMap,l.set(Re,W));let me=W.get(z);me===void 0&&(me=r.getUniformBlockIndex(Re,z.name),W.set(z,me))}function ot(z,Re){const me=l.get(Re).get(z);a.get(Re)!==me&&(r.uniformBlockBinding(Re,me,z.__bindingPointIndex),a.set(Re,me))}function vt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},se=null,Te={},u={},h=new WeakMap,f=[],m=null,x=!1,M=null,g=null,p=null,R=null,T=null,C=null,k=null,D=new lt(0,0,0),B=0,Q=!1,P=null,b=null,G=null,oe=null,ee=null,st.set(0,0,r.canvas.width,r.canvas.height),gt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:we,disable:be,bindFramebuffer:pe,drawBuffers:et,useProgram:Be,setBlending:Ze,setMaterial:Ft,setFlipSided:Ot,setCullFace:qe,setLineWidth:en,setPolygonOffset:it,setScissorTest:ht,activeTexture:L,bindTexture:y,unbindTexture:ie,compressedTexImage2D:de,compressedTexImage3D:ve,texImage2D:We,texImage3D:Rt,updateUBOMapping:ct,uniformBlockBinding:ot,texStorage2D:ft,texStorage3D:Me,texSubImage2D:ge,texSubImage3D:je,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ve,scissor:Ke,viewport:Ne,reset:vt}}function Kf(r,e,t,n){const i=dS(n);switch(t){case Np:return r*e;case Op:return r*e;case Bp:return r*e*2;case du:return r*e/i.components*i.byteLength;case od:return r*e/i.components*i.byteLength;case kp:return r*e*2/i.components*i.byteLength;case ad:return r*e*2/i.components*i.byteLength;case Fp:return r*e*3/i.components*i.byteLength;case Ai:return r*e*4/i.components*i.byteLength;case ld:return r*e*4/i.components*i.byteLength;case Oc:case Bc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kc:case zc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mh:case _h:return Math.max(r,16)*Math.max(e,8)/4;case ph:case gh:return Math.max(r,8)*Math.max(e,8)/2;case vh:case xh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Mh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Th:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case bh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Hc:case Nh:case Fh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case zp:case Oh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Bh:case kh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dS(r){switch(r){case Qr:case Lp:return{byteLength:1,components:1};case za:case Dp:case or:return{byteLength:2,components:1};case rd:case sd:return{byteLength:2,components:4};case uo:case id:case bi:return{byteLength:4,components:1};case Up:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function fS(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,y){return m?new OffscreenCanvas(L,y):Va("canvas")}function M(L,y,ie){let de=1;const ve=ht(L);if((ve.width>ie||ve.height>ie)&&(de=ie/Math.max(ve.width,ve.height)),de<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ge=Math.floor(de*ve.width),je=Math.floor(de*ve.height);h===void 0&&(h=x(ge,je));const ke=y?x(ge,je):h;return ke.width=ge,ke.height=je,ke.getContext("2d").drawImage(L,0,0,ge,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+ge+"x"+je+")."),ke}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==Vn&&L.minFilter!==vn}function p(L){r.generateMipmap(L)}function R(L,y,ie,de,ve=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ge=y;if(y===r.RED&&(ie===r.FLOAT&&(ge=r.R32F),ie===r.HALF_FLOAT&&(ge=r.R16F),ie===r.UNSIGNED_BYTE&&(ge=r.R8)),y===r.RED_INTEGER&&(ie===r.UNSIGNED_BYTE&&(ge=r.R8UI),ie===r.UNSIGNED_SHORT&&(ge=r.R16UI),ie===r.UNSIGNED_INT&&(ge=r.R32UI),ie===r.BYTE&&(ge=r.R8I),ie===r.SHORT&&(ge=r.R16I),ie===r.INT&&(ge=r.R32I)),y===r.RG&&(ie===r.FLOAT&&(ge=r.RG32F),ie===r.HALF_FLOAT&&(ge=r.RG16F),ie===r.UNSIGNED_BYTE&&(ge=r.RG8)),y===r.RG_INTEGER&&(ie===r.UNSIGNED_BYTE&&(ge=r.RG8UI),ie===r.UNSIGNED_SHORT&&(ge=r.RG16UI),ie===r.UNSIGNED_INT&&(ge=r.RG32UI),ie===r.BYTE&&(ge=r.RG8I),ie===r.SHORT&&(ge=r.RG16I),ie===r.INT&&(ge=r.RG32I)),y===r.RGB&&ie===r.UNSIGNED_INT_5_9_9_9_REV&&(ge=r.RGB9_E5),y===r.RGBA){const je=ve?Yc:Xt.getTransfer(de);ie===r.FLOAT&&(ge=r.RGBA32F),ie===r.HALF_FLOAT&&(ge=r.RGBA16F),ie===r.UNSIGNED_BYTE&&(ge=je===an?r.SRGB8_ALPHA8:r.RGBA8),ie===r.UNSIGNED_SHORT_4_4_4_4&&(ge=r.RGBA4),ie===r.UNSIGNED_SHORT_5_5_5_1&&(ge=r.RGB5_A1)}return(ge===r.R16F||ge===r.R32F||ge===r.RG16F||ge===r.RG32F||ge===r.RGBA16F||ge===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function T(L,y){let ie;return L?y===null||y===uo||y===na?ie=r.DEPTH24_STENCIL8:y===bi?ie=r.DEPTH32F_STENCIL8:y===za&&(ie=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===uo||y===na?ie=r.DEPTH_COMPONENT24:y===bi?ie=r.DEPTH_COMPONENT32F:y===za&&(ie=r.DEPTH_COMPONENT16),ie}function C(L,y){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Vn&&L.minFilter!==vn?Math.log2(Math.max(y.width,y.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?y.mipmaps.length:1}function k(L){const y=L.target;y.removeEventListener("dispose",k),B(y),y.isVideoTexture&&u.delete(y)}function D(L){const y=L.target;y.removeEventListener("dispose",D),P(y)}function B(L){const y=n.get(L);if(y.__webglInit===void 0)return;const ie=L.source,de=f.get(ie);if(de){const ve=de[y.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&Q(L),Object.keys(de).length===0&&f.delete(ie)}n.remove(L)}function Q(L){const y=n.get(L);r.deleteTexture(y.__webglTexture);const ie=L.source,de=f.get(ie);delete de[y.__cacheKey],o.memory.textures--}function P(L){const y=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(y.__webglFramebuffer[de]))for(let ve=0;ve<y.__webglFramebuffer[de].length;ve++)r.deleteFramebuffer(y.__webglFramebuffer[de][ve]);else r.deleteFramebuffer(y.__webglFramebuffer[de]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[de])}else{if(Array.isArray(y.__webglFramebuffer))for(let de=0;de<y.__webglFramebuffer.length;de++)r.deleteFramebuffer(y.__webglFramebuffer[de]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let de=0;de<y.__webglColorRenderbuffer.length;de++)y.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[de]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const ie=L.textures;for(let de=0,ve=ie.length;de<ve;de++){const ge=n.get(ie[de]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(ie[de])}n.remove(L)}let b=0;function G(){b=0}function oe(){const L=b;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),b+=1,L}function ee(L){const y=[];return y.push(L.wrapS),y.push(L.wrapT),y.push(L.wrapR||0),y.push(L.magFilter),y.push(L.minFilter),y.push(L.anisotropy),y.push(L.internalFormat),y.push(L.format),y.push(L.type),y.push(L.generateMipmaps),y.push(L.premultiplyAlpha),y.push(L.flipY),y.push(L.unpackAlignment),y.push(L.colorSpace),y.join()}function he(L,y){const ie=n.get(L);if(L.isVideoTexture&&en(L),L.isRenderTargetTexture===!1&&L.version>0&&ie.__version!==L.version){const de=L.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(ie,L,y);return}}t.bindTexture(r.TEXTURE_2D,ie.__webglTexture,r.TEXTURE0+y)}function _e(L,y){const ie=n.get(L);if(L.version>0&&ie.__version!==L.version){gt(ie,L,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ie.__webglTexture,r.TEXTURE0+y)}function ce(L,y){const ie=n.get(L);if(L.version>0&&ie.__version!==L.version){gt(ie,L,y);return}t.bindTexture(r.TEXTURE_3D,ie.__webglTexture,r.TEXTURE0+y)}function Se(L,y){const ie=n.get(L);if(L.version>0&&ie.__version!==L.version){fe(ie,L,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture,r.TEXTURE0+y)}const se={[Mr]:r.REPEAT,[_r]:r.CLAMP_TO_EDGE,[Xc]:r.MIRRORED_REPEAT},Te={[Vn]:r.NEAREST,[Ip]:r.NEAREST_MIPMAP_NEAREST,[Ua]:r.NEAREST_MIPMAP_LINEAR,[vn]:r.LINEAR,[Fc]:r.LINEAR_MIPMAP_NEAREST,[vr]:r.LINEAR_MIPMAP_LINEAR},Le={[zg]:r.NEVER,[Yg]:r.ALWAYS,[Hg]:r.LESS,[Vp]:r.LEQUAL,[Gg]:r.EQUAL,[Xg]:r.GEQUAL,[Vg]:r.GREATER,[Wg]:r.NOTEQUAL};function Ge(L,y){if(y.type===bi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===vn||y.magFilter===Fc||y.magFilter===Ua||y.magFilter===vr||y.minFilter===vn||y.minFilter===Fc||y.minFilter===Ua||y.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,se[y.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,se[y.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,se[y.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,Te[y.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,Te[y.minFilter]),y.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Le[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Vn||y.minFilter!==Ua&&y.minFilter!==vr||y.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function st(L,y){let ie=!1;L.__webglInit===void 0&&(L.__webglInit=!0,y.addEventListener("dispose",k));const de=y.source;let ve=f.get(de);ve===void 0&&(ve={},f.set(de,ve));const ge=ee(y);if(ge!==L.__cacheKey){ve[ge]===void 0&&(ve[ge]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,ie=!0),ve[ge].usedTimes++;const je=ve[L.__cacheKey];je!==void 0&&(ve[L.__cacheKey].usedTimes--,je.usedTimes===0&&Q(y)),L.__cacheKey=ge,L.__webglTexture=ve[ge].texture}return ie}function gt(L,y,ie){let de=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(de=r.TEXTURE_3D);const ve=st(L,y),ge=y.source;t.bindTexture(de,L.__webglTexture,r.TEXTURE0+ie);const je=n.get(ge);if(ge.version!==je.__version||ve===!0){t.activeTexture(r.TEXTURE0+ie);const ke=Xt.getPrimaries(Xt.workingColorSpace),Ve=y.colorSpace===Kr?null:Xt.getPrimaries(y.colorSpace),ft=y.colorSpace===Kr||ke===Ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Me=M(y.image,!1,i.maxTextureSize);Me=it(y,Me);const We=s.convert(y.format,y.colorSpace),Rt=s.convert(y.type);let Ke=R(y.internalFormat,We,Rt,y.colorSpace,y.isVideoTexture);Ge(de,y);let Ne;const ct=y.mipmaps,ot=y.isVideoTexture!==!0,vt=je.__version===void 0||ve===!0,z=ge.dataReady,Re=C(y,Me);if(y.isDepthTexture)Ke=T(y.format===ia,y.type),vt&&(ot?t.texStorage2D(r.TEXTURE_2D,1,Ke,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,Ke,Me.width,Me.height,0,We,Rt,null));else if(y.isDataTexture)if(ct.length>0){ot&&vt&&t.texStorage2D(r.TEXTURE_2D,Re,Ke,ct[0].width,ct[0].height);for(let W=0,me=ct.length;W<me;W++)Ne=ct[W],ot?z&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,Ne.width,Ne.height,We,Rt,Ne.data):t.texImage2D(r.TEXTURE_2D,W,Ke,Ne.width,Ne.height,0,We,Rt,Ne.data);y.generateMipmaps=!1}else ot?(vt&&t.texStorage2D(r.TEXTURE_2D,Re,Ke,Me.width,Me.height),z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me.width,Me.height,We,Rt,Me.data)):t.texImage2D(r.TEXTURE_2D,0,Ke,Me.width,Me.height,0,We,Rt,Me.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ot&&vt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Ke,ct[0].width,ct[0].height,Me.depth);for(let W=0,me=ct.length;W<me;W++)if(Ne=ct[W],y.format!==Ai)if(We!==null)if(ot){if(z)if(y.layerUpdates.size>0){const Ue=Kf(Ne.width,Ne.height,y.format,y.type);for(const Ye of y.layerUpdates){const Ct=Ne.data.subarray(Ye*Ue/Ne.data.BYTES_PER_ELEMENT,(Ye+1)*Ue/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,Ye,Ne.width,Ne.height,1,We,Ct,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,Ne.width,Ne.height,Me.depth,We,Ne.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,Ke,Ne.width,Ne.height,Me.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?z&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,Ne.width,Ne.height,Me.depth,We,Rt,Ne.data):t.texImage3D(r.TEXTURE_2D_ARRAY,W,Ke,Ne.width,Ne.height,Me.depth,0,We,Rt,Ne.data)}else{ot&&vt&&t.texStorage2D(r.TEXTURE_2D,Re,Ke,ct[0].width,ct[0].height);for(let W=0,me=ct.length;W<me;W++)Ne=ct[W],y.format!==Ai?We!==null?ot?z&&t.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,Ne.width,Ne.height,We,Ne.data):t.compressedTexImage2D(r.TEXTURE_2D,W,Ke,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?z&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,Ne.width,Ne.height,We,Rt,Ne.data):t.texImage2D(r.TEXTURE_2D,W,Ke,Ne.width,Ne.height,0,We,Rt,Ne.data)}else if(y.isDataArrayTexture)if(ot){if(vt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Ke,Me.width,Me.height,Me.depth),z)if(y.layerUpdates.size>0){const W=Kf(Me.width,Me.height,y.format,y.type);for(const me of y.layerUpdates){const Ue=Me.data.subarray(me*W/Me.data.BYTES_PER_ELEMENT,(me+1)*W/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,Me.width,Me.height,1,We,Rt,Ue)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,We,Rt,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ke,Me.width,Me.height,Me.depth,0,We,Rt,Me.data);else if(y.isData3DTexture)ot?(vt&&t.texStorage3D(r.TEXTURE_3D,Re,Ke,Me.width,Me.height,Me.depth),z&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,We,Rt,Me.data)):t.texImage3D(r.TEXTURE_3D,0,Ke,Me.width,Me.height,Me.depth,0,We,Rt,Me.data);else if(y.isFramebufferTexture){if(vt)if(ot)t.texStorage2D(r.TEXTURE_2D,Re,Ke,Me.width,Me.height);else{let W=Me.width,me=Me.height;for(let Ue=0;Ue<Re;Ue++)t.texImage2D(r.TEXTURE_2D,Ue,Ke,W,me,0,We,Rt,null),W>>=1,me>>=1}}else if(ct.length>0){if(ot&&vt){const W=ht(ct[0]);t.texStorage2D(r.TEXTURE_2D,Re,Ke,W.width,W.height)}for(let W=0,me=ct.length;W<me;W++)Ne=ct[W],ot?z&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,We,Rt,Ne):t.texImage2D(r.TEXTURE_2D,W,Ke,We,Rt,Ne);y.generateMipmaps=!1}else if(ot){if(vt){const W=ht(Me);t.texStorage2D(r.TEXTURE_2D,Re,Ke,W.width,W.height)}z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,We,Rt,Me)}else t.texImage2D(r.TEXTURE_2D,0,Ke,We,Rt,Me);g(y)&&p(de),je.__version=ge.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function fe(L,y,ie){if(y.image.length!==6)return;const de=st(L,y),ve=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+ie);const ge=n.get(ve);if(ve.version!==ge.__version||de===!0){t.activeTexture(r.TEXTURE0+ie);const je=Xt.getPrimaries(Xt.workingColorSpace),ke=y.colorSpace===Kr?null:Xt.getPrimaries(y.colorSpace),Ve=y.colorSpace===Kr||je===ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const ft=y.isCompressedTexture||y.image[0].isCompressedTexture,Me=y.image[0]&&y.image[0].isDataTexture,We=[];for(let me=0;me<6;me++)!ft&&!Me?We[me]=M(y.image[me],!0,i.maxCubemapSize):We[me]=Me?y.image[me].image:y.image[me],We[me]=it(y,We[me]);const Rt=We[0],Ke=s.convert(y.format,y.colorSpace),Ne=s.convert(y.type),ct=R(y.internalFormat,Ke,Ne,y.colorSpace),ot=y.isVideoTexture!==!0,vt=ge.__version===void 0||de===!0,z=ve.dataReady;let Re=C(y,Rt);Ge(r.TEXTURE_CUBE_MAP,y);let W;if(ft){ot&&vt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,ct,Rt.width,Rt.height);for(let me=0;me<6;me++){W=We[me].mipmaps;for(let Ue=0;Ue<W.length;Ue++){const Ye=W[Ue];y.format!==Ai?Ke!==null?ot?z&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,Ye.width,Ye.height,Ke,Ye.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,ct,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,Ye.width,Ye.height,Ke,Ne,Ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,ct,Ye.width,Ye.height,0,Ke,Ne,Ye.data)}}}else{if(W=y.mipmaps,ot&&vt){W.length>0&&Re++;const me=ht(We[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,ct,me.width,me.height)}for(let me=0;me<6;me++)if(Me){ot?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,We[me].width,We[me].height,Ke,Ne,We[me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ct,We[me].width,We[me].height,0,Ke,Ne,We[me].data);for(let Ue=0;Ue<W.length;Ue++){const Ct=W[Ue].image[me].image;ot?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,Ct.width,Ct.height,Ke,Ne,Ct.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,ct,Ct.width,Ct.height,0,Ke,Ne,Ct.data)}}else{ot?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ke,Ne,We[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ct,Ke,Ne,We[me]);for(let Ue=0;Ue<W.length;Ue++){const Ye=W[Ue];ot?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,Ke,Ne,Ye.image[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,ct,Ke,Ne,Ye.image[me])}}}g(y)&&p(r.TEXTURE_CUBE_MAP),ge.__version=ve.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function Ee(L,y,ie,de,ve,ge){const je=s.convert(ie.format,ie.colorSpace),ke=s.convert(ie.type),Ve=R(ie.internalFormat,je,ke,ie.colorSpace);if(!n.get(y).__hasExternalTextures){const Me=Math.max(1,y.width>>ge),We=Math.max(1,y.height>>ge);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,ge,Ve,Me,We,y.depth,0,je,ke,null):t.texImage2D(ve,ge,Ve,Me,We,0,je,ke,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),qe(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ve,n.get(ie).__webglTexture,0,Ot(y)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,ve,n.get(ie).__webglTexture,ge),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(L,y,ie){if(r.bindRenderbuffer(r.RENDERBUFFER,L),y.depthBuffer){const de=y.depthTexture,ve=de&&de.isDepthTexture?de.type:null,ge=T(y.stencilBuffer,ve),je=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ke=Ot(y);qe(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ke,ge,y.width,y.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,ge,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ge,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,je,r.RENDERBUFFER,L)}else{const de=y.textures;for(let ve=0;ve<de.length;ve++){const ge=de[ve],je=s.convert(ge.format,ge.colorSpace),ke=s.convert(ge.type),Ve=R(ge.internalFormat,je,ke,ge.colorSpace),ft=Ot(y);ie&&qe(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,Ve,y.width,y.height):qe(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,Ve,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Ve,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(L,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),he(y.depthTexture,0);const de=n.get(y.depthTexture).__webglTexture,ve=Ot(y);if(y.depthTexture.format===Vo)qe(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,de,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,de,0);else if(y.depthTexture.format===ia)qe(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,de,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function pe(L){const y=n.get(L),ie=L.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==L.depthTexture){const de=L.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),de){const ve=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,de.removeEventListener("dispose",ve)};de.addEventListener("dispose",ve),y.__depthDisposeCallback=ve}y.__boundDepthTexture=de}if(L.depthTexture&&!y.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");be(y.__webglFramebuffer,L)}else if(ie){y.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[de]),y.__webglDepthbuffer[de]===void 0)y.__webglDepthbuffer[de]=r.createRenderbuffer(),we(y.__webglDepthbuffer[de],L,!1);else{const ve=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=y.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,ge),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,ge)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),we(y.__webglDepthbuffer,L,!1);else{const de=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ve),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,ve)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function et(L,y,ie){const de=n.get(L);y!==void 0&&Ee(de.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ie!==void 0&&pe(L)}function Be(L){const y=L.texture,ie=n.get(L),de=n.get(y);L.addEventListener("dispose",D);const ve=L.textures,ge=L.isWebGLCubeRenderTarget===!0,je=ve.length>1;if(je||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=y.version,o.memory.textures++),ge){ie.__webglFramebuffer=[];for(let ke=0;ke<6;ke++)if(y.mipmaps&&y.mipmaps.length>0){ie.__webglFramebuffer[ke]=[];for(let Ve=0;Ve<y.mipmaps.length;Ve++)ie.__webglFramebuffer[ke][Ve]=r.createFramebuffer()}else ie.__webglFramebuffer[ke]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){ie.__webglFramebuffer=[];for(let ke=0;ke<y.mipmaps.length;ke++)ie.__webglFramebuffer[ke]=r.createFramebuffer()}else ie.__webglFramebuffer=r.createFramebuffer();if(je)for(let ke=0,Ve=ve.length;ke<Ve;ke++){const ft=n.get(ve[ke]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),o.memory.textures++)}if(L.samples>0&&qe(L)===!1){ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let ke=0;ke<ve.length;ke++){const Ve=ve[ke];ie.__webglColorRenderbuffer[ke]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ie.__webglColorRenderbuffer[ke]);const ft=s.convert(Ve.format,Ve.colorSpace),Me=s.convert(Ve.type),We=R(Ve.internalFormat,ft,Me,Ve.colorSpace,L.isXRRenderTarget===!0),Rt=Ot(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,We,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,ie.__webglColorRenderbuffer[ke])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),we(ie.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ge){t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),Ge(r.TEXTURE_CUBE_MAP,y);for(let ke=0;ke<6;ke++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ve=0;Ve<y.mipmaps.length;Ve++)Ee(ie.__webglFramebuffer[ke][Ve],L,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Ve);else Ee(ie.__webglFramebuffer[ke],L,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0);g(y)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let ke=0,Ve=ve.length;ke<Ve;ke++){const ft=ve[ke],Me=n.get(ft);t.bindTexture(r.TEXTURE_2D,Me.__webglTexture),Ge(r.TEXTURE_2D,ft),Ee(ie.__webglFramebuffer,L,ft,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,0),g(ft)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ke=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ke=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ke,de.__webglTexture),Ge(ke,y),y.mipmaps&&y.mipmaps.length>0)for(let Ve=0;Ve<y.mipmaps.length;Ve++)Ee(ie.__webglFramebuffer[Ve],L,y,r.COLOR_ATTACHMENT0,ke,Ve);else Ee(ie.__webglFramebuffer,L,y,r.COLOR_ATTACHMENT0,ke,0);g(y)&&p(ke),t.unbindTexture()}L.depthBuffer&&pe(L)}function Qe(L){const y=L.textures;for(let ie=0,de=y.length;ie<de;ie++){const ve=y[ie];if(g(ve)){const ge=L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,je=n.get(ve).__webglTexture;t.bindTexture(ge,je),p(ge),t.unbindTexture()}}}const U=[],Ze=[];function Ft(L){if(L.samples>0){if(qe(L)===!1){const y=L.textures,ie=L.width,de=L.height;let ve=r.COLOR_BUFFER_BIT;const ge=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,je=n.get(L),ke=y.length>1;if(ke)for(let Ve=0;Ve<y.length;Ve++)t.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Ve=0;Ve<y.length;Ve++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),ke){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,je.__webglColorRenderbuffer[Ve]);const ft=n.get(y[Ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ft,0)}r.blitFramebuffer(0,0,ie,de,0,0,ie,de,ve,r.NEAREST),l===!0&&(U.length=0,Ze.length=0,U.push(r.COLOR_ATTACHMENT0+Ve),L.depthBuffer&&L.resolveDepthBuffer===!1&&(U.push(ge),Ze.push(ge),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ze)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ke)for(let Ve=0;Ve<y.length;Ve++){t.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.RENDERBUFFER,je.__webglColorRenderbuffer[Ve]);const ft=n.get(y[Ve]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.TEXTURE_2D,ft,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const y=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Ot(L){return Math.min(i.maxSamples,L.samples)}function qe(L){const y=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function en(L){const y=o.render.frame;u.get(L)!==y&&(u.set(L,y),L.update())}function it(L,y){const ie=L.colorSpace,de=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ie!==Fn&&ie!==Kr&&(Xt.getTransfer(ie)===an?(de!==Ai||ve!==Qr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),y}function ht(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=oe,this.resetTextureUnits=G,this.setTexture2D=he,this.setTexture2DArray=_e,this.setTexture3D=ce,this.setTextureCube=Se,this.rebindTextures=et,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=qe}function pS(r,e){function t(n,i=Kr){let s;const o=Xt.getTransfer(i);if(n===Qr)return r.UNSIGNED_BYTE;if(n===rd)return r.UNSIGNED_SHORT_4_4_4_4;if(n===sd)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Up)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Lp)return r.BYTE;if(n===Dp)return r.SHORT;if(n===za)return r.UNSIGNED_SHORT;if(n===id)return r.INT;if(n===uo)return r.UNSIGNED_INT;if(n===bi)return r.FLOAT;if(n===or)return r.HALF_FLOAT;if(n===Np)return r.ALPHA;if(n===Fp)return r.RGB;if(n===Ai)return r.RGBA;if(n===Op)return r.LUMINANCE;if(n===Bp)return r.LUMINANCE_ALPHA;if(n===Vo)return r.DEPTH_COMPONENT;if(n===ia)return r.DEPTH_STENCIL;if(n===du)return r.RED;if(n===od)return r.RED_INTEGER;if(n===kp)return r.RG;if(n===ad)return r.RG_INTEGER;if(n===ld)return r.RGBA_INTEGER;if(n===Oc||n===Bc||n===kc||n===zc)if(o===an)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Oc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Oc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ph||n===mh||n===gh||n===_h)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ph)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_h)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vh||n===xh||n===Mh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===vh||n===xh)return o===an?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Mh)return o===an?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sh||n===yh||n===Eh||n===Th||n===bh||n===Ah||n===wh||n===Rh||n===Ch||n===Ph||n===Ih||n===Lh||n===Dh||n===Uh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Sh)return o===an?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yh)return o===an?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eh)return o===an?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Th)return o===an?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bh)return o===an?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ah)return o===an?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wh)return o===an?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rh)return o===an?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ch)return o===an?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ph)return o===an?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ih)return o===an?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lh)return o===an?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dh)return o===an?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uh)return o===an?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hc||n===Nh||n===Fh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Hc)return o===an?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zp||n===Oh||n===Bh||n===kh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Hc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Oh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===na?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class mS extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ts extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gS={type:"move"};class Zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const g=t.getJointPose(M,n),p=this._getHandJoint(c,M);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ts;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const _S=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vS=`
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

}`;class xS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Pn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _i({vertexShader:_S,fragmentShader:vS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nn(new Bl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MS extends ha{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,x=null;const M=new xS,g=t.getContextAttributes();let p=null,R=null;const T=[],C=[],k=new $e;let D=null;const B=new gi;B.layers.enable(1),B.viewport=new tn;const Q=new gi;Q.layers.enable(2),Q.viewport=new tn;const P=[B,Q],b=new mS;b.layers.enable(1),b.layers.enable(2);let G=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(fe){let Ee=T[fe];return Ee===void 0&&(Ee=new Zu,T[fe]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(fe){let Ee=T[fe];return Ee===void 0&&(Ee=new Zu,T[fe]=Ee),Ee.getGripSpace()},this.getHand=function(fe){let Ee=T[fe];return Ee===void 0&&(Ee=new Zu,T[fe]=Ee),Ee.getHandSpace()};function ee(fe){const Ee=C.indexOf(fe.inputSource);if(Ee===-1)return;const we=T[Ee];we!==void 0&&(we.update(fe.inputSource,fe.frame,c||o),we.dispatchEvent({type:fe.type,data:fe.inputSource}))}function he(){i.removeEventListener("select",ee),i.removeEventListener("selectstart",ee),i.removeEventListener("selectend",ee),i.removeEventListener("squeeze",ee),i.removeEventListener("squeezestart",ee),i.removeEventListener("squeezeend",ee),i.removeEventListener("end",he),i.removeEventListener("inputsourceschange",_e);for(let fe=0;fe<T.length;fe++){const Ee=C[fe];Ee!==null&&(C[fe]=null,T[fe].disconnect(Ee))}G=null,oe=null,M.reset(),e.setRenderTarget(p),m=null,f=null,h=null,i=null,R=null,gt.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(fe){s=fe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(fe){a=fe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(fe){c=fe},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(fe){if(i=fe,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",ee),i.addEventListener("selectstart",ee),i.addEventListener("selectend",ee),i.addEventListener("squeeze",ee),i.addEventListener("squeezestart",ee),i.addEventListener("squeezeend",ee),i.addEventListener("end",he),i.addEventListener("inputsourceschange",_e),g.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(k),i.renderState.layers===void 0){const Ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,Ee),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new es(m.framebufferWidth,m.framebufferHeight,{format:Ai,type:Qr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Ee=null,we=null,be=null;g.depth&&(be=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=g.stencil?ia:Vo,we=g.stencil?na:uo);const pe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(pe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),R=new es(f.textureWidth,f.textureHeight,{format:Ai,type:Qr,depthTexture:new em(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),gt.setContext(i),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function _e(fe){for(let Ee=0;Ee<fe.removed.length;Ee++){const we=fe.removed[Ee],be=C.indexOf(we);be>=0&&(C[be]=null,T[be].disconnect(we))}for(let Ee=0;Ee<fe.added.length;Ee++){const we=fe.added[Ee];let be=C.indexOf(we);if(be===-1){for(let et=0;et<T.length;et++)if(et>=C.length){C.push(we),be=et;break}else if(C[et]===null){C[et]=we,be=et;break}if(be===-1)break}const pe=T[be];pe&&pe.connect(we)}}const ce=new Y,Se=new Y;function se(fe,Ee,we){ce.setFromMatrixPosition(Ee.matrixWorld),Se.setFromMatrixPosition(we.matrixWorld);const be=ce.distanceTo(Se),pe=Ee.projectionMatrix.elements,et=we.projectionMatrix.elements,Be=pe[14]/(pe[10]-1),Qe=pe[14]/(pe[10]+1),U=(pe[9]+1)/pe[5],Ze=(pe[9]-1)/pe[5],Ft=(pe[8]-1)/pe[0],Ot=(et[8]+1)/et[0],qe=Be*Ft,en=Be*Ot,it=be/(-Ft+Ot),ht=it*-Ft;if(Ee.matrixWorld.decompose(fe.position,fe.quaternion,fe.scale),fe.translateX(ht),fe.translateZ(it),fe.matrixWorld.compose(fe.position,fe.quaternion,fe.scale),fe.matrixWorldInverse.copy(fe.matrixWorld).invert(),pe[10]===-1)fe.projectionMatrix.copy(Ee.projectionMatrix),fe.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const L=Be+it,y=Qe+it,ie=qe-ht,de=en+(be-ht),ve=U*Qe/y*L,ge=Ze*Qe/y*L;fe.projectionMatrix.makePerspective(ie,de,ve,ge,L,y),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert()}}function Te(fe,Ee){Ee===null?fe.matrixWorld.copy(fe.matrix):fe.matrixWorld.multiplyMatrices(Ee.matrixWorld,fe.matrix),fe.matrixWorldInverse.copy(fe.matrixWorld).invert()}this.updateCamera=function(fe){if(i===null)return;let Ee=fe.near,we=fe.far;M.texture!==null&&(M.depthNear>0&&(Ee=M.depthNear),M.depthFar>0&&(we=M.depthFar)),b.near=Q.near=B.near=Ee,b.far=Q.far=B.far=we,(G!==b.near||oe!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),G=b.near,oe=b.far);const be=fe.parent,pe=b.cameras;Te(b,be);for(let et=0;et<pe.length;et++)Te(pe[et],be);pe.length===2?se(b,B,Q):b.projectionMatrix.copy(B.projectionMatrix),Le(fe,b,be)};function Le(fe,Ee,we){we===null?fe.matrix.copy(Ee.matrixWorld):(fe.matrix.copy(we.matrixWorld),fe.matrix.invert(),fe.matrix.multiply(Ee.matrixWorld)),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.updateMatrixWorld(!0),fe.projectionMatrix.copy(Ee.projectionMatrix),fe.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),fe.isPerspectiveCamera&&(fe.fov=ra*2*Math.atan(1/fe.projectionMatrix.elements[5]),fe.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(fe){l=fe,f!==null&&(f.fixedFoveation=fe),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=fe)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(b)};let Ge=null;function st(fe,Ee){if(u=Ee.getViewerPose(c||o),x=Ee,u!==null){const we=u.views;m!==null&&(e.setRenderTargetFramebuffer(R,m.framebuffer),e.setRenderTarget(R));let be=!1;we.length!==b.cameras.length&&(b.cameras.length=0,be=!0);for(let et=0;et<we.length;et++){const Be=we[et];let Qe=null;if(m!==null)Qe=m.getViewport(Be);else{const Ze=h.getViewSubImage(f,Be);Qe=Ze.viewport,et===0&&(e.setRenderTargetTextures(R,Ze.colorTexture,f.ignoreDepthValues?void 0:Ze.depthStencilTexture),e.setRenderTarget(R))}let U=P[et];U===void 0&&(U=new gi,U.layers.enable(et),U.viewport=new tn,P[et]=U),U.matrix.fromArray(Be.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Be.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),et===0&&(b.matrix.copy(U.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),be===!0&&b.cameras.push(U)}const pe=i.enabledFeatures;if(pe&&pe.includes("depth-sensing")){const et=h.getDepthInformation(we[0]);et&&et.isValid&&et.texture&&M.init(e,et,i.renderState)}}for(let we=0;we<T.length;we++){const be=C[we],pe=T[we];be!==null&&pe!==void 0&&pe.update(be,Ee,c||o)}Ge&&Ge(fe,Ee),Ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ee}),x=null}const gt=new Qp;gt.setAnimationLoop(st),this.setAnimationLoop=function(fe){Ge=fe},this.dispose=function(){}}}const Ys=new Sr,SS=new Tt;function yS(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,$p(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,R,T,C){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&m(g,p,C)):p.isMeshMatcapMaterial?(s(g,p),x(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),M(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,R,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===wi&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===wi&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const R=e.get(p),T=R.envMap,C=R.envMapRotation;T&&(g.envMap.value=T,Ys.copy(C),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),g.envMapRotation.value.setFromMatrix4(SS.makeRotationFromEuler(Ys)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,R,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*R,g.scale.value=T*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,R){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wi&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=R.texture,g.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function M(g,p){const R=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(R.matrixWorld),g.nearDistance.value=R.shadow.camera.near,g.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ES(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,T){const C=T.program;n.uniformBlockBinding(R,C)}function c(R,T){let C=i[R.id];C===void 0&&(x(R),C=u(R),i[R.id]=C,R.addEventListener("dispose",g));const k=T.program;n.updateUBOMapping(R,k);const D=e.render.frame;s[R.id]!==D&&(f(R),s[R.id]=D)}function u(R){const T=h();R.__bindingPointIndex=T;const C=r.createBuffer(),k=R.__size,D=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,k,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,C),C}function h(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const T=i[R.id],C=R.uniforms,k=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let D=0,B=C.length;D<B;D++){const Q=Array.isArray(C[D])?C[D]:[C[D]];for(let P=0,b=Q.length;P<b;P++){const G=Q[P];if(m(G,D,P,k)===!0){const oe=G.__offset,ee=Array.isArray(G.value)?G.value:[G.value];let he=0;for(let _e=0;_e<ee.length;_e++){const ce=ee[_e],Se=M(ce);typeof ce=="number"||typeof ce=="boolean"?(G.__data[0]=ce,r.bufferSubData(r.UNIFORM_BUFFER,oe+he,G.__data)):ce.isMatrix3?(G.__data[0]=ce.elements[0],G.__data[1]=ce.elements[1],G.__data[2]=ce.elements[2],G.__data[3]=0,G.__data[4]=ce.elements[3],G.__data[5]=ce.elements[4],G.__data[6]=ce.elements[5],G.__data[7]=0,G.__data[8]=ce.elements[6],G.__data[9]=ce.elements[7],G.__data[10]=ce.elements[8],G.__data[11]=0):(ce.toArray(G.__data,he),he+=Se.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,oe,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(R,T,C,k){const D=R.value,B=T+"_"+C;if(k[B]===void 0)return typeof D=="number"||typeof D=="boolean"?k[B]=D:k[B]=D.clone(),!0;{const Q=k[B];if(typeof D=="number"||typeof D=="boolean"){if(Q!==D)return k[B]=D,!0}else if(Q.equals(D)===!1)return Q.copy(D),!0}return!1}function x(R){const T=R.uniforms;let C=0;const k=16;for(let B=0,Q=T.length;B<Q;B++){const P=Array.isArray(T[B])?T[B]:[T[B]];for(let b=0,G=P.length;b<G;b++){const oe=P[b],ee=Array.isArray(oe.value)?oe.value:[oe.value];for(let he=0,_e=ee.length;he<_e;he++){const ce=ee[he],Se=M(ce),se=C%k,Te=se%Se.boundary,Le=se+Te;C+=Te,Le!==0&&k-Le<Se.storage&&(C+=k-Le),oe.__data=new Float32Array(Se.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=C,C+=Se.storage}}}const D=C%k;return D>0&&(C+=k-D),R.__size=C,R.__cache={},this}function M(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function g(R){const T=R.target;T.removeEventListener("dispose",g);const C=o.indexOf(T.__bindingPointIndex);o.splice(C,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function p(){for(const R in i)r.deleteBuffer(i[R]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class TS{constructor(e={}){const{canvas:t=u_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),x=new Int32Array(4);let M=null,g=null;const p=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this.toneMapping=As,this.toneMappingExposure=1;const T=this;let C=!1,k=0,D=0,B=null,Q=-1,P=null;const b=new tn,G=new tn;let oe=null;const ee=new lt(0);let he=0,_e=t.width,ce=t.height,Se=1,se=null,Te=null;const Le=new tn(0,0,_e,ce),Ge=new tn(0,0,_e,ce);let st=!1;const gt=new dd;let fe=!1,Ee=!1;const we=new Tt,be=new Y,pe=new tn,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function Qe(){return B===null?Se:1}let U=n;function Ze(E,H){return t.getContext(E,H)}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nd}`),t.addEventListener("webglcontextlost",W,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),U===null){const H="webgl2";if(U=Ze(H,E),U===null)throw Ze(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ft,Ot,qe,en,it,ht,L,y,ie,de,ve,ge,je,ke,Ve,ft,Me,We,Rt,Ke,Ne,ct,ot,vt;function z(){Ft=new Px(U),Ft.init(),ct=new pS(U,Ft),Ot=new Tx(U,Ft,e,ct),qe=new hS(U),en=new Dx(U),it=new ZM,ht=new fS(U,Ft,qe,it,Ot,ct,en),L=new Ax(T),y=new Cx(T),ie=new z_(U),ot=new yx(U,ie),de=new Ix(U,ie,en,ot),ve=new Nx(U,de,ie,en),Rt=new Ux(U,Ot,ht),ft=new bx(it),ge=new $M(T,L,y,Ft,Ot,ot,ft),je=new yS(T,it),ke=new QM,Ve=new sS(Ft),We=new Sx(T,L,y,qe,ve,f,l),Me=new uS(T,ve,Ot),vt=new ES(U,en,Ot,qe),Ke=new Ex(U,Ft,en),Ne=new Lx(U,Ft,en),en.programs=ge.programs,T.capabilities=Ot,T.extensions=Ft,T.properties=it,T.renderLists=ke,T.shadowMap=Me,T.state=qe,T.info=en}z();const Re=new MS(T,U);this.xr=Re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Ft.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ft.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(E){E!==void 0&&(Se=E,this.setSize(_e,ce,!1))},this.getSize=function(E){return E.set(_e,ce)},this.setSize=function(E,H,d=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}_e=E,ce=H,t.width=Math.floor(E*Se),t.height=Math.floor(H*Se),d===!0&&(t.style.width=E+"px",t.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(_e*Se,ce*Se).floor()},this.setDrawingBufferSize=function(E,H,d){_e=E,ce=H,Se=d,t.width=Math.floor(E*d),t.height=Math.floor(H*d),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(Le)},this.setViewport=function(E,H,d,_){E.isVector4?Le.set(E.x,E.y,E.z,E.w):Le.set(E,H,d,_),qe.viewport(b.copy(Le).multiplyScalar(Se).round())},this.getScissor=function(E){return E.copy(Ge)},this.setScissor=function(E,H,d,_){E.isVector4?Ge.set(E.x,E.y,E.z,E.w):Ge.set(E,H,d,_),qe.scissor(G.copy(Ge).multiplyScalar(Se).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(E){qe.setScissorTest(st=E)},this.setOpaqueSort=function(E){se=E},this.setTransparentSort=function(E){Te=E},this.getClearColor=function(E){return E.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(E=!0,H=!0,d=!0){let _=0;if(E){let v=!1;if(B!==null){const I=B.texture.format;v=I===ld||I===ad||I===od}if(v){const I=B.texture.type,V=I===Qr||I===uo||I===za||I===na||I===rd||I===sd,O=We.getClearColor(),$=We.getClearAlpha(),ae=O.r,J=O.g,K=O.b;V?(m[0]=ae,m[1]=J,m[2]=K,m[3]=$,U.clearBufferuiv(U.COLOR,0,m)):(x[0]=ae,x[1]=J,x[2]=K,x[3]=$,U.clearBufferiv(U.COLOR,0,x))}else _|=U.COLOR_BUFFER_BIT}H&&(_|=U.DEPTH_BUFFER_BIT),d&&(_|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(_)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",W,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),ke.dispose(),Ve.dispose(),it.dispose(),L.dispose(),y.dispose(),ve.dispose(),ot.dispose(),vt.dispose(),ge.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",xi),Re.removeEventListener("sessionend",Rs),ki.stop()};function W(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=en.autoReset,H=Me.enabled,d=Me.autoUpdate,_=Me.needsUpdate,v=Me.type;z(),en.autoReset=E,Me.enabled=H,Me.autoUpdate=d,Me.needsUpdate=_,Me.type=v}function Ue(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ye(E){const H=E.target;H.removeEventListener("dispose",Ye),Ct(H)}function Ct(E){Bt(E),it.remove(E)}function Bt(E){const H=it.get(E).programs;H!==void 0&&(H.forEach(function(d){ge.releaseProgram(d)}),E.isShaderMaterial&&ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,d,_,v,I){H===null&&(H=et);const V=v.isMesh&&v.matrixWorld.determinant()<0,O=po(E,H,d,_,v);qe.setMaterial(_,V);let $=d.index,ae=1;if(_.wireframe===!0){if($=de.getWireframeAttribute(d),$===void 0)return;ae=2}const J=d.drawRange,K=d.attributes.position;let ne=J.start*ae,ye=(J.start+J.count)*ae;I!==null&&(ne=Math.max(ne,I.start*ae),ye=Math.min(ye,(I.start+I.count)*ae)),$!==null?(ne=Math.max(ne,0),ye=Math.min(ye,$.count)):K!=null&&(ne=Math.max(ne,0),ye=Math.min(ye,K.count));const Ae=ye-ne;if(Ae<0||Ae===1/0)return;ot.setup(v,_,O,d,$);let De,Ie=Ke;if($!==null&&(De=ie.get($),Ie=Ne,Ie.setIndex(De)),v.isMesh)_.wireframe===!0?(qe.setLineWidth(_.wireframeLinewidth*Qe()),Ie.setMode(U.LINES)):Ie.setMode(U.TRIANGLES);else if(v.isLine){let re=_.linewidth;re===void 0&&(re=1),qe.setLineWidth(re*Qe()),v.isLineSegments?Ie.setMode(U.LINES):v.isLineLoop?Ie.setMode(U.LINE_LOOP):Ie.setMode(U.LINE_STRIP)}else v.isPoints?Ie.setMode(U.POINTS):v.isSprite&&Ie.setMode(U.TRIANGLES);if(v.isBatchedMesh)if(v._multiDrawInstances!==null)Ie.renderMultiDrawInstances(v._multiDrawStarts,v._multiDrawCounts,v._multiDrawCount,v._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))Ie.renderMultiDraw(v._multiDrawStarts,v._multiDrawCounts,v._multiDrawCount);else{const re=v._multiDrawStarts,Ce=v._multiDrawCounts,Fe=v._multiDrawCount,xt=$?ie.get($).bytesPerElement:1,ut=it.get(_).currentProgram.getUniforms();for(let bt=0;bt<Fe;bt++)ut.setValue(U,"_gl_DrawID",bt),Ie.render(re[bt]/xt,Ce[bt])}else if(v.isInstancedMesh)Ie.renderInstances(ne,Ae,v.count);else if(d.isInstancedBufferGeometry){const re=d._maxInstanceCount!==void 0?d._maxInstanceCount:1/0,Ce=Math.min(d.instanceCount,re);Ie.renderInstances(ne,Ae,Ce)}else Ie.render(ne,Ae)};function on(E,H,d){E.transparent===!0&&E.side===mr&&E.forceSinglePass===!1?(E.side=wi,E.needsUpdate=!0,br(E,H,d),E.side=Jr,E.needsUpdate=!0,br(E,H,d),E.side=mr):br(E,H,d)}this.compile=function(E,H,d=null){d===null&&(d=E),g=Ve.get(d),g.init(H),R.push(g),d.traverseVisible(function(v){v.isLight&&v.layers.test(H.layers)&&(g.pushLight(v),v.castShadow&&g.pushShadow(v))}),E!==d&&E.traverseVisible(function(v){v.isLight&&v.layers.test(H.layers)&&(g.pushLight(v),v.castShadow&&g.pushShadow(v))}),g.setupLights();const _=new Set;return E.traverse(function(v){const I=v.material;if(I)if(Array.isArray(I))for(let V=0;V<I.length;V++){const O=I[V];on(O,d,v),_.add(O)}else on(I,d,v),_.add(I)}),R.pop(),g=null,_},this.compileAsync=function(E,H,d=null){const _=this.compile(E,H,d);return new Promise(v=>{function I(){if(_.forEach(function(V){it.get(V).currentProgram.isReady()&&_.delete(V)}),_.size===0){v(E);return}setTimeout(I,10)}Ft.get("KHR_parallel_shader_compile")!==null?I():setTimeout(I,10)})};let kt=null;function vi(E){kt&&kt(E)}function xi(){ki.stop()}function Rs(){ki.start()}const ki=new Qp;ki.setAnimationLoop(vi),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(E){kt=E,Re.setAnimationLoop(E),E===null?ki.stop():ki.start()},Re.addEventListener("sessionstart",xi),Re.addEventListener("sessionend",Rs),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(H),H=Re.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,H,B),g=Ve.get(E,R.length),g.init(H),R.push(g),we.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),gt.setFromProjectionMatrix(we),Ee=this.localClippingEnabled,fe=ft.init(this.clippingPlanes,Ee),M=ke.get(E,p.length),M.init(),p.push(M),Re.enabled===!0&&Re.isPresenting===!0){const I=T.xr.getDepthSensingMesh();I!==null&&Zn(I,H,-1/0,T.sortObjects)}Zn(E,H,0,T.sortObjects),M.finish(),T.sortObjects===!0&&M.sort(se,Te),Be=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Be&&We.addToRenderList(M,E),this.info.render.frame++,fe===!0&&ft.beginShadows();const d=g.state.shadowsArray;Me.render(d,E,H),fe===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const _=M.opaque,v=M.transmissive;if(g.setupLights(),H.isArrayCamera){const I=H.cameras;if(v.length>0)for(let V=0,O=I.length;V<O;V++){const $=I[V];Cs(_,v,E,$)}Be&&We.render(E);for(let V=0,O=I.length;V<O;V++){const $=I[V];lr(M,E,$,$.viewport)}}else v.length>0&&Cs(_,v,E,H),Be&&We.render(E),lr(M,E,H);B!==null&&(ht.updateMultisampleRenderTarget(B),ht.updateRenderTargetMipmap(B)),E.isScene===!0&&E.onAfterRender(T,E,H),ot.resetDefaultState(),Q=-1,P=null,R.pop(),R.length>0?(g=R[R.length-1],fe===!0&&ft.setGlobalState(T.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?M=p[p.length-1]:M=null};function Zn(E,H,d,_){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)d=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||gt.intersectsSprite(E)){_&&pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(we);const V=ve.update(E),O=E.material;O.visible&&M.push(E,V,O,d,pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||gt.intersectsObject(E))){const V=ve.update(E),O=E.material;if(_&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),pe.copy(E.boundingSphere.center)):(V.boundingSphere===null&&V.computeBoundingSphere(),pe.copy(V.boundingSphere.center)),pe.applyMatrix4(E.matrixWorld).applyMatrix4(we)),Array.isArray(O)){const $=V.groups;for(let ae=0,J=$.length;ae<J;ae++){const K=$[ae],ne=O[K.materialIndex];ne&&ne.visible&&M.push(E,V,ne,d,pe.z,K)}}else O.visible&&M.push(E,V,O,d,pe.z,null)}}const I=E.children;for(let V=0,O=I.length;V<O;V++)Zn(I[V],H,d,_)}function lr(E,H,d,_){const v=E.opaque,I=E.transmissive,V=E.transparent;g.setupLightsView(d),fe===!0&&ft.setGlobalState(T.clippingPlanes,d),_&&qe.viewport(b.copy(_)),v.length>0&&cr(v,H,d),I.length>0&&cr(I,H,d),V.length>0&&cr(V,H,d),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Cs(E,H,d,_){if((d.isScene===!0?d.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[_.id]===void 0&&(g.state.transmissionRenderTarget[_.id]=new es(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?or:Qr,minFilter:vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const I=g.state.transmissionRenderTarget[_.id],V=_.viewport||b;I.setSize(V.z,V.w);const O=T.getRenderTarget();T.setRenderTarget(I),T.getClearColor(ee),he=T.getClearAlpha(),he<1&&T.setClearColor(16777215,.5),T.clear(),Be&&We.render(d);const $=T.toneMapping;T.toneMapping=As;const ae=_.viewport;if(_.viewport!==void 0&&(_.viewport=void 0),g.setupLightsView(_),fe===!0&&ft.setGlobalState(T.clippingPlanes,_),cr(E,d,_),ht.updateMultisampleRenderTarget(I),ht.updateRenderTargetMipmap(I),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let J=!1;for(let K=0,ne=H.length;K<ne;K++){const ye=H[K],Ae=ye.object,De=ye.geometry,Ie=ye.material,re=ye.group;if(Ie.side===mr&&Ae.layers.test(_.layers)){const Ce=Ie.side;Ie.side=wi,Ie.needsUpdate=!0,zi(Ae,d,_,De,Ie,re),Ie.side=Ce,Ie.needsUpdate=!0,J=!0}}J===!0&&(ht.updateMultisampleRenderTarget(I),ht.updateRenderTargetMipmap(I))}T.setRenderTarget(O),T.setClearColor(ee,he),ae!==void 0&&(_.viewport=ae),T.toneMapping=$}function cr(E,H,d){const _=H.isScene===!0?H.overrideMaterial:null;for(let v=0,I=E.length;v<I;v++){const V=E[v],O=V.object,$=V.geometry,ae=_===null?V.material:_,J=V.group;O.layers.test(d.layers)&&zi(O,H,d,$,ae,J)}}function zi(E,H,d,_,v,I){E.onBeforeRender(T,H,d,_,v,I),E.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),v.onBeforeRender(T,H,d,_,E,I),v.transparent===!0&&v.side===mr&&v.forceSinglePass===!1?(v.side=wi,v.needsUpdate=!0,T.renderBufferDirect(d,H,_,v,E,I),v.side=Jr,v.needsUpdate=!0,T.renderBufferDirect(d,H,_,v,E,I),v.side=mr):T.renderBufferDirect(d,H,_,v,E,I),E.onAfterRender(T,H,d,_,v,I)}function br(E,H,d){H.isScene!==!0&&(H=et);const _=it.get(E),v=g.state.lights,I=g.state.shadowsArray,V=v.state.version,O=ge.getParameters(E,v.state,I,H,d),$=ge.getProgramCacheKey(O);let ae=_.programs;_.environment=E.isMeshStandardMaterial?H.environment:null,_.fog=H.fog,_.envMap=(E.isMeshStandardMaterial?y:L).get(E.envMap||_.environment),_.envMapRotation=_.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,ae===void 0&&(E.addEventListener("dispose",Ye),ae=new Map,_.programs=ae);let J=ae.get($);if(J!==void 0){if(_.currentProgram===J&&_.lightsStateVersion===V)return fo(E,O),J}else O.uniforms=ge.getUniforms(E),E.onBeforeCompile(O,T),J=ge.acquireProgram(O,$),ae.set($,J),_.uniforms=O.uniforms;const K=_.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(K.clippingPlanes=ft.uniform),fo(E,O),_.needsLights=ss(E),_.lightsStateVersion=V,_.needsLights&&(K.ambientLightColor.value=v.state.ambient,K.lightProbe.value=v.state.probe,K.directionalLights.value=v.state.directional,K.directionalLightShadows.value=v.state.directionalShadow,K.spotLights.value=v.state.spot,K.spotLightShadows.value=v.state.spotShadow,K.rectAreaLights.value=v.state.rectArea,K.ltc_1.value=v.state.rectAreaLTC1,K.ltc_2.value=v.state.rectAreaLTC2,K.pointLights.value=v.state.point,K.pointLightShadows.value=v.state.pointShadow,K.hemisphereLights.value=v.state.hemi,K.directionalShadowMap.value=v.state.directionalShadowMap,K.directionalShadowMatrix.value=v.state.directionalShadowMatrix,K.spotShadowMap.value=v.state.spotShadowMap,K.spotLightMatrix.value=v.state.spotLightMatrix,K.spotLightMap.value=v.state.spotLightMap,K.pointShadowMap.value=v.state.pointShadowMap,K.pointShadowMatrix.value=v.state.pointShadowMatrix),_.currentProgram=J,_.uniformsList=null,J}function Ps(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=Gc.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function fo(E,H){const d=it.get(E);d.outputColorSpace=H.outputColorSpace,d.batching=H.batching,d.batchingColor=H.batchingColor,d.instancing=H.instancing,d.instancingColor=H.instancingColor,d.instancingMorph=H.instancingMorph,d.skinning=H.skinning,d.morphTargets=H.morphTargets,d.morphNormals=H.morphNormals,d.morphColors=H.morphColors,d.morphTargetsCount=H.morphTargetsCount,d.numClippingPlanes=H.numClippingPlanes,d.numIntersection=H.numClipIntersection,d.vertexAlphas=H.vertexAlphas,d.vertexTangents=H.vertexTangents,d.toneMapping=H.toneMapping}function po(E,H,d,_,v){H.isScene!==!0&&(H=et),ht.resetTextureUnits();const I=H.fog,V=_.isMeshStandardMaterial?H.environment:null,O=B===null?T.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Fn,$=(_.isMeshStandardMaterial?y:L).get(_.envMap||V),ae=_.vertexColors===!0&&!!d.attributes.color&&d.attributes.color.itemSize===4,J=!!d.attributes.tangent&&(!!_.normalMap||_.anisotropy>0),K=!!d.morphAttributes.position,ne=!!d.morphAttributes.normal,ye=!!d.morphAttributes.color;let Ae=As;_.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ae=T.toneMapping);const De=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,Ie=De!==void 0?De.length:0,re=it.get(_),Ce=g.state.lights;if(fe===!0&&(Ee===!0||E!==P)){const Gt=E===P&&_.id===Q;ft.setState(_,E,Gt)}let Fe=!1;_.version===re.__version?(re.needsLights&&re.lightsStateVersion!==Ce.state.version||re.outputColorSpace!==O||v.isBatchedMesh&&re.batching===!1||!v.isBatchedMesh&&re.batching===!0||v.isBatchedMesh&&re.batchingColor===!0&&v.colorTexture===null||v.isBatchedMesh&&re.batchingColor===!1&&v.colorTexture!==null||v.isInstancedMesh&&re.instancing===!1||!v.isInstancedMesh&&re.instancing===!0||v.isSkinnedMesh&&re.skinning===!1||!v.isSkinnedMesh&&re.skinning===!0||v.isInstancedMesh&&re.instancingColor===!0&&v.instanceColor===null||v.isInstancedMesh&&re.instancingColor===!1&&v.instanceColor!==null||v.isInstancedMesh&&re.instancingMorph===!0&&v.morphTexture===null||v.isInstancedMesh&&re.instancingMorph===!1&&v.morphTexture!==null||re.envMap!==$||_.fog===!0&&re.fog!==I||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==ft.numPlanes||re.numIntersection!==ft.numIntersection)||re.vertexAlphas!==ae||re.vertexTangents!==J||re.morphTargets!==K||re.morphNormals!==ne||re.morphColors!==ye||re.toneMapping!==Ae||re.morphTargetsCount!==Ie)&&(Fe=!0):(Fe=!0,re.__version=_.version);let xt=re.currentProgram;Fe===!0&&(xt=br(_,H,v));let ut=!1,bt=!1,Kt=!1;const Je=xt.getUniforms(),It=re.uniforms;if(qe.useProgram(xt.program)&&(ut=!0,bt=!0,Kt=!0),_.id!==Q&&(Q=_.id,bt=!0),ut||P!==E){Je.setValue(U,"projectionMatrix",E.projectionMatrix),Je.setValue(U,"viewMatrix",E.matrixWorldInverse);const Gt=Je.map.cameraPosition;Gt!==void 0&&Gt.setValue(U,be.setFromMatrixPosition(E.matrixWorld)),Ot.logarithmicDepthBuffer&&Je.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(_.isMeshPhongMaterial||_.isMeshToonMaterial||_.isMeshLambertMaterial||_.isMeshBasicMaterial||_.isMeshStandardMaterial||_.isShaderMaterial)&&Je.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),P!==E&&(P=E,bt=!0,Kt=!0)}if(v.isSkinnedMesh){Je.setOptional(U,v,"bindMatrix"),Je.setOptional(U,v,"bindMatrixInverse");const Gt=v.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Je.setValue(U,"boneTexture",Gt.boneTexture,ht))}v.isBatchedMesh&&(Je.setOptional(U,v,"batchingTexture"),Je.setValue(U,"batchingTexture",v._matricesTexture,ht),Je.setOptional(U,v,"batchingIdTexture"),Je.setValue(U,"batchingIdTexture",v._indirectTexture,ht),Je.setOptional(U,v,"batchingColorTexture"),v._colorsTexture!==null&&Je.setValue(U,"batchingColorTexture",v._colorsTexture,ht));const xn=d.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Rt.update(v,d,xt),(bt||re.receiveShadow!==v.receiveShadow)&&(re.receiveShadow=v.receiveShadow,Je.setValue(U,"receiveShadow",v.receiveShadow)),_.isMeshGouraudMaterial&&_.envMap!==null&&(It.envMap.value=$,It.flipEnvMap.value=$.isCubeTexture&&$.isRenderTargetTexture===!1?-1:1),_.isMeshStandardMaterial&&_.envMap===null&&H.environment!==null&&(It.envMapIntensity.value=H.environmentIntensity),bt&&(Je.setValue(U,"toneMappingExposure",T.toneMappingExposure),re.needsLights&&si(It,Kt),I&&_.fog===!0&&je.refreshFogUniforms(It,I),je.refreshMaterialUniforms(It,_,Se,ce,g.state.transmissionRenderTarget[E.id]),Gc.upload(U,Ps(re),It,ht)),_.isShaderMaterial&&_.uniformsNeedUpdate===!0&&(Gc.upload(U,Ps(re),It,ht),_.uniformsNeedUpdate=!1),_.isSpriteMaterial&&Je.setValue(U,"center",v.center),Je.setValue(U,"modelViewMatrix",v.modelViewMatrix),Je.setValue(U,"normalMatrix",v.normalMatrix),Je.setValue(U,"modelMatrix",v.matrixWorld),_.isShaderMaterial||_.isRawShaderMaterial){const Gt=_.uniformsGroups;for(let zt=0,Yt=Gt.length;zt<Yt;zt++){const Mi=Gt[zt];vt.update(Mi,xt),vt.bind(Mi,xt)}}return xt}function si(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function ss(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(E,H,d){it.get(E.texture).__webglTexture=H,it.get(E.depthTexture).__webglTexture=d;const _=it.get(E);_.__hasExternalTextures=!0,_.__autoAllocateDepthBuffer=d===void 0,_.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),_.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,H){const d=it.get(E);d.__webglFramebuffer=H,d.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,d=0){B=E,k=H,D=d;let _=!0,v=null,I=!1,V=!1;if(E){const $=it.get(E);if($.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(U.FRAMEBUFFER,null),_=!1;else if($.__webglFramebuffer===void 0)ht.setupRenderTarget(E);else if($.__hasExternalTextures)ht.rebindTextures(E,it.get(E.texture).__webglTexture,it.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const K=E.depthTexture;if($.__boundDepthTexture!==K){if(K!==null&&it.has(K)&&(E.width!==K.image.width||E.height!==K.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(E)}}const ae=E.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(V=!0);const J=it.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(J[H])?v=J[H][d]:v=J[H],I=!0):E.samples>0&&ht.useMultisampledRTT(E)===!1?v=it.get(E).__webglMultisampledFramebuffer:Array.isArray(J)?v=J[d]:v=J,b.copy(E.viewport),G.copy(E.scissor),oe=E.scissorTest}else b.copy(Le).multiplyScalar(Se).floor(),G.copy(Ge).multiplyScalar(Se).floor(),oe=st;if(qe.bindFramebuffer(U.FRAMEBUFFER,v)&&_&&qe.drawBuffers(E,v),qe.viewport(b),qe.scissor(G),qe.setScissorTest(oe),I){const $=it.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,$.__webglTexture,d)}else if(V){const $=it.get(E.texture),ae=H||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,$.__webglTexture,d||0,ae)}Q=-1},this.readRenderTargetPixels=function(E,H,d,_,v,I,V){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let O=it.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&V!==void 0&&(O=O[V]),O){qe.bindFramebuffer(U.FRAMEBUFFER,O);try{const $=E.texture,ae=$.format,J=$.type;if(!Ot.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(J)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-_&&d>=0&&d<=E.height-v&&U.readPixels(H,d,_,v,ct.convert(ae),ct.convert(J),I)}finally{const $=B!==null?it.get(B).__webglFramebuffer:null;qe.bindFramebuffer(U.FRAMEBUFFER,$)}}},this.readRenderTargetPixelsAsync=async function(E,H,d,_,v,I,V){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let O=it.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&V!==void 0&&(O=O[V]),O){qe.bindFramebuffer(U.FRAMEBUFFER,O);try{const $=E.texture,ae=$.format,J=$.type;if(!Ot.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(J))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=E.width-_&&d>=0&&d<=E.height-v){const K=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,K),U.bufferData(U.PIXEL_PACK_BUFFER,I.byteLength,U.STREAM_READ),U.readPixels(H,d,_,v,ct.convert(ae),ct.convert(J),0),U.flush();const ne=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await h_(U,ne,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,K),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,I)}finally{U.deleteBuffer(K),U.deleteSync(ne)}return I}}finally{const $=B!==null?it.get(B).__webglFramebuffer:null;qe.bindFramebuffer(U.FRAMEBUFFER,$)}}},this.copyFramebufferToTexture=function(E,H=null,d=0){E.isTexture!==!0&&(Wo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1]);const _=Math.pow(2,-d),v=Math.floor(E.image.width*_),I=Math.floor(E.image.height*_),V=H!==null?H.x:0,O=H!==null?H.y:0;ht.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,d,0,0,V,O,v,I),qe.unbindTexture()},this.copyTextureToTexture=function(E,H,d=null,_=null,v=0){E.isTexture!==!0&&(Wo("WebGLRenderer: copyTextureToTexture function signature has changed."),_=arguments[0]||null,E=arguments[1],H=arguments[2],v=arguments[3]||0,d=null);let I,V,O,$,ae,J;d!==null?(I=d.max.x-d.min.x,V=d.max.y-d.min.y,O=d.min.x,$=d.min.y):(I=E.image.width,V=E.image.height,O=0,$=0),_!==null?(ae=_.x,J=_.y):(ae=0,J=0);const K=ct.convert(H.format),ne=ct.convert(H.type);ht.setTexture2D(H,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const ye=U.getParameter(U.UNPACK_ROW_LENGTH),Ae=U.getParameter(U.UNPACK_IMAGE_HEIGHT),De=U.getParameter(U.UNPACK_SKIP_PIXELS),Ie=U.getParameter(U.UNPACK_SKIP_ROWS),re=U.getParameter(U.UNPACK_SKIP_IMAGES),Ce=E.isCompressedTexture?E.mipmaps[v]:E.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Ce.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ce.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,O),U.pixelStorei(U.UNPACK_SKIP_ROWS,$),E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,v,ae,J,I,V,K,ne,Ce.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,v,ae,J,Ce.width,Ce.height,K,Ce.data):U.texSubImage2D(U.TEXTURE_2D,v,ae,J,I,V,K,ne,Ce),U.pixelStorei(U.UNPACK_ROW_LENGTH,ye),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ae),U.pixelStorei(U.UNPACK_SKIP_PIXELS,De),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ie),U.pixelStorei(U.UNPACK_SKIP_IMAGES,re),v===0&&H.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),qe.unbindTexture()},this.copyTextureToTexture3D=function(E,H,d=null,_=null,v=0){E.isTexture!==!0&&(Wo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),d=arguments[0]||null,_=arguments[1]||null,E=arguments[2],H=arguments[3],v=arguments[4]||0);let I,V,O,$,ae,J,K,ne,ye;const Ae=E.isCompressedTexture?E.mipmaps[v]:E.image;d!==null?(I=d.max.x-d.min.x,V=d.max.y-d.min.y,O=d.max.z-d.min.z,$=d.min.x,ae=d.min.y,J=d.min.z):(I=Ae.width,V=Ae.height,O=Ae.depth,$=0,ae=0,J=0),_!==null?(K=_.x,ne=_.y,ye=_.z):(K=0,ne=0,ye=0);const De=ct.convert(H.format),Ie=ct.convert(H.type);let re;if(H.isData3DTexture)ht.setTexture3D(H,0),re=U.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)ht.setTexture2DArray(H,0),re=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const Ce=U.getParameter(U.UNPACK_ROW_LENGTH),Fe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),xt=U.getParameter(U.UNPACK_SKIP_PIXELS),ut=U.getParameter(U.UNPACK_SKIP_ROWS),bt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ae.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ae.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,$),U.pixelStorei(U.UNPACK_SKIP_ROWS,ae),U.pixelStorei(U.UNPACK_SKIP_IMAGES,J),E.isDataTexture||E.isData3DTexture?U.texSubImage3D(re,v,K,ne,ye,I,V,O,De,Ie,Ae.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(re,v,K,ne,ye,I,V,O,De,Ae.data):U.texSubImage3D(re,v,K,ne,ye,I,V,O,De,Ie,Ae),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ce),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Fe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,bt),v===0&&H.generateMipmaps&&U.generateMipmap(re),qe.unbindTexture()},this.initRenderTarget=function(E){it.get(E).__webglFramebuffer===void 0&&ht.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ht.setTextureCube(E,0):E.isData3DTexture?ht.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ht.setTexture2DArray(E,0):ht.setTexture2D(E,0),qe.unbindTexture()},this.resetState=function(){k=0,D=0,B=null,qe.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $r}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===cd?"display-p3":"srgb",t.unpackColorSpace=Xt.workingColorSpace===fu?"display-p3":"srgb"}}class bS extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sr,this.environmentIntensity=1,this.environmentRotation=new Sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class AS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ar()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Wo("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ar()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ar()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const fi=new Y;class pd{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fi.fromBufferAttribute(this,t),fi.applyMatrix4(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fi.fromBufferAttribute(this,t),fi.applyNormalMatrix(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fi.fromBufferAttribute(this,t),fi.transformDirection(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=sr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=sr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=sr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=sr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=sr(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),i=Jt(i,this.array),s=Jt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ri(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const jf=new Y,$f=new tn,Zf=new tn,wS=new Y,Jf=new Tt,bc=new Y,Ju=new yr,Qf=new Tt,Qu=new Fl;class RS extends Nn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zd,this.bindMatrix=new Tt,this.bindMatrixInverse=new Tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new rs),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bc),this.boundingBox.expandByPoint(bc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bc),this.boundingSphere.expandByPoint(bc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ju.copy(this.boundingSphere),Ju.applyMatrix4(i),e.ray.intersectsSphere(Ju)!==!1&&(Qf.copy(i).invert(),Qu.copy(e.ray).applyMatrix4(Qf),!(this.boundingBox!==null&&Qu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tn,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ug?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;$f.fromBufferAttribute(i.attributes.skinIndex,e),Zf.fromBufferAttribute(i.attributes.skinWeight,e),jf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Zf.getComponent(s);if(o!==0){const a=$f.getComponent(s);Jf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(wS.copy(jf).applyMatrix4(Jf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class sm extends hn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class md extends Pn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Vn,u=Vn,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ep=new Tt,CS=new Tt;class gd{constructor(e=[],t=[]){this.uuid=ar(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:CS;ep.multiplyMatrices(a,t[s]),ep.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new gd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new md(t,e,e,Ai,bi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new sm),this.bones.push(o),this.boneInverses.push(new Tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Vh extends ri{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Bo=new Tt,tp=new Tt,Ac=[],np=new rs,PS=new Tt,Ca=new Nn,Pa=new yr;class IS extends Nn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,PS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bo),np.copy(e.boundingBox).applyMatrix4(Bo),this.boundingBox.union(np)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bo),Pa.copy(e.boundingSphere).applyMatrix4(Bo),this.boundingSphere.union(Pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ca.geometry=this.geometry,Ca.material=this.material,Ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(n),e.ray.intersectsSphere(Pa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Bo),tp.multiplyMatrices(n,Bo),Ca.matrixWorld=tp,Ca.raycast(e,Ac);for(let o=0,a=Ac.length;o<a;o++){const l=Ac[o];l.instanceId=s,l.object=this,t.push(l)}Ac.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new md(new Float32Array(i*this.count),i,this.count,du,bi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class om extends xr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $c=new Y,Zc=new Y,ip=new Tt,Ia=new Fl,wc=new yr,eh=new Y,rp=new Y;class _d extends hn{constructor(e=new Oi,t=new om){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)$c.fromBufferAttribute(t,i-1),Zc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=$c.distanceTo(Zc);e.setAttribute("lineDistance",new $n(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wc.copy(n.boundingSphere),wc.applyMatrix4(i),wc.radius+=s,e.ray.intersectsSphere(wc)===!1)return;ip.copy(i).invert(),Ia.copy(e.ray).applyMatrix4(ip);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const m=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let M=m,g=x-1;M<g;M+=c){const p=u.getX(M),R=u.getX(M+1),T=Rc(this,e,Ia,l,p,R);T&&t.push(T)}if(this.isLineLoop){const M=u.getX(x-1),g=u.getX(m),p=Rc(this,e,Ia,l,M,g);p&&t.push(p)}}else{const m=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let M=m,g=x-1;M<g;M+=c){const p=Rc(this,e,Ia,l,M,M+1);p&&t.push(p)}if(this.isLineLoop){const M=Rc(this,e,Ia,l,x-1,m);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Rc(r,e,t,n,i,s){const o=r.geometry.attributes.position;if($c.fromBufferAttribute(o,i),Zc.fromBufferAttribute(o,s),t.distanceSqToSegment($c,Zc,eh,rp)>n)return;eh.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(eh);if(!(l<e.near||l>e.far))return{distance:l,point:rp.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}const sp=new Y,op=new Y;class LS extends _d{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)sp.fromBufferAttribute(t,i),op.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+sp.distanceTo(op);e.setAttribute("lineDistance",new $n(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class DS extends _d{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class am extends xr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ap=new Tt,Wh=new Fl,Cc=new yr,Pc=new Y;class lm extends hn{constructor(e=new Oi,t=new am){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cc.copy(n.boundingSphere),Cc.applyMatrix4(i),Cc.radius+=s,e.ray.intersectsSphere(Cc)===!1)return;ap.copy(i).invert(),Wh.copy(e.ray).applyMatrix4(ap);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=f,M=m;x<M;x++){const g=c.getX(x);Pc.fromBufferAttribute(h,g),lp(Pc,g,l,i,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,M=m;x<M;x++)Pc.fromBufferAttribute(h,x),lp(Pc,x,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function lp(r,e,t,n,i,s,o){const a=Wh.distanceSqToPoint(r);if(a<t){const l=new Y;Wh.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class US extends Pn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:vn,this.magFilter=s!==void 0?s:vn,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class cp extends Pn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vd extends Oi{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new Y,f=new Y,m=[],x=[],M=[],g=[];for(let p=0;p<=n;p++){const R=[],T=p/n;let C=0;p===0&&o===0?C=.5/t:p===n&&l===Math.PI&&(C=-.5/t);for(let k=0;k<=t;k++){const D=k/t;h.x=-e*Math.cos(i+D*s)*Math.sin(o+T*a),h.y=e*Math.cos(o+T*a),h.z=e*Math.sin(i+D*s)*Math.sin(o+T*a),x.push(h.x,h.y,h.z),f.copy(h).normalize(),M.push(f.x,f.y,f.z),g.push(D+C,1-T),R.push(c++)}u.push(R)}for(let p=0;p<n;p++)for(let R=0;R<t;R++){const T=u[p][R+1],C=u[p][R],k=u[p+1][R],D=u[p+1][R+1];(p!==0||o>0)&&m.push(T,C,D),(p!==n-1||l<Math.PI)&&m.push(C,k,D)}this.setIndex(m),this.setAttribute("position",new $n(x,3)),this.setAttribute("normal",new $n(M,3)),this.setAttribute("uv",new $n(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xd extends xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gp,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Er extends xd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ic(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function NS(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function FS(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function up(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function cm(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class kl{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class OS extends kl{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jd,endingEnd:Jd}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qd:s=e,a=2*t-n;break;case ef:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qd:o=e,l=2*n-t;break;case ef:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,x=(n-t)/(i-t),M=x*x,g=M*x,p=-f*g+2*f*M-f*x,R=(1+f)*g+(-1.5-2*f)*M+(-.5+f)*x+1,T=(-1-m)*g+(1.5+m)*M+.5*x,C=m*g-m*M;for(let k=0;k!==a;++k)s[k]=p*o[u+k]+R*o[c+k]+T*o[l+k]+C*o[h+k];return s}}class BS extends kl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class kS extends kl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Tr{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ic(t,this.TimeBufferType),this.values=Ic(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ic(e.times,Array),values:Ic(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new BS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new OS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ha:t=this.InterpolantFactoryMethodDiscrete;break;case Ga:t=this.InterpolantFactoryMethodLinear;break;case Au:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ha;case this.InterpolantFactoryMethodLinear:return Ga;case this.InterpolantFactoryMethodSmooth:return Au}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&NS(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Au,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,m=h+n;for(let x=0;x!==n;++x){const M=t[h+x];if(M!==t[f+x]||M!==t[m+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[h+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Tr.prototype.TimeBufferType=Float32Array;Tr.prototype.ValueBufferType=Float32Array;Tr.prototype.DefaultInterpolation=Ga;class pa extends Tr{constructor(e,t,n){super(e,t,n)}}pa.prototype.ValueTypeName="bool";pa.prototype.ValueBufferType=Array;pa.prototype.DefaultInterpolation=Ha;pa.prototype.InterpolantFactoryMethodLinear=void 0;pa.prototype.InterpolantFactoryMethodSmooth=void 0;class um extends Tr{}um.prototype.ValueTypeName="color";class oa extends Tr{}oa.prototype.ValueTypeName="number";class zS extends kl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)is.slerpFlat(s,0,o,c-a,o,c,l);return s}}class aa extends Tr{InterpolantFactoryMethodLinear(e){return new zS(this.times,this.values,this.getValueSize(),e)}}aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;class ma extends Tr{constructor(e,t,n){super(e,t,n)}}ma.prototype.ValueTypeName="string";ma.prototype.ValueBufferType=Array;ma.prototype.DefaultInterpolation=Ha;ma.prototype.InterpolantFactoryMethodLinear=void 0;ma.prototype.InterpolantFactoryMethodSmooth=void 0;class la extends Tr{}la.prototype.ValueTypeName="vector";class HS{constructor(e="",t=-1,n=[],i=Ng){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ar(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(VS(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Tr.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=FS(l);l=up(l,1,u),c=up(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new oa(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,m,x,M){if(m.length!==0){const g=[],p=[];cm(m,g,p,x),g.length!==0&&M.push(new h(f,g,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let M=0;M<f[x].morphTargets.length;M++)m[f[x].morphTargets[M]]=-1;for(const M in m){const g=[],p=[];for(let R=0;R!==f[x].morphTargets.length;++R){const T=f[x];g.push(T.time),p.push(T.morphTarget===M?1:0)}i.push(new oa(".morphTargetInfluence["+M+"]",g,p))}l=m.length*o}else{const m=".bones["+t[h].name+"]";n(la,m+".position",f,"pos",i),n(aa,m+".quaternion",f,"rot",i),n(la,m+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function GS(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return oa;case"vector":case"vector2":case"vector3":case"vector4":return la;case"color":return um;case"quaternion":return aa;case"bool":case"boolean":return pa;case"string":return ma}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function VS(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=GS(r.type);if(r.times===void 0){const t=[],n=[];cm(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Zr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class WS{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],x=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const XS=new WS;class ws{constructor(e){this.manager=e!==void 0?e:XS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const kr={};class YS extends Error{constructor(e,t){super(e),this.response=t}}class mu extends ws{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Zr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(kr[e]!==void 0){kr[e].push({onLoad:t,onProgress:n,onError:i});return}kr[e]=[],kr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=kr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,x=m!==0;let M=0;const g=new ReadableStream({start(p){R();function R(){h.read().then(({done:T,value:C})=>{if(T)p.close();else{M+=C.byteLength;const k=new ProgressEvent("progress",{lengthComputable:x,loaded:M,total:m});for(let D=0,B=u.length;D<B;D++){const Q=u[D];Q.onProgress&&Q.onProgress(k)}p.enqueue(C),R()}},T=>{p.error(T)})}}});return new Response(g)}else throw new YS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(x=>m.decode(x))}}}).then(c=>{Zr.add(e,c);const u=kr[e];delete kr[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=kr[e];if(u===void 0)throw this.manager.itemError(e),c;delete kr[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class qS extends ws{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Zr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Va("img");function l(){u(),Zr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class KS extends ws{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new md,a=new mu(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:_r,o.wrapT=c.wrapT!==void 0?c.wrapT:_r,o.magFilter=c.magFilter!==void 0?c.magFilter:vn,o.minFilter=c.minFilter!==void 0?c.minFilter:vn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=vr),c.mipmapCount===1&&(o.minFilter=vn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class Md extends ws{constructor(e){super(e)}load(e,t,n,i){const s=new Pn,o=new qS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Sd extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const th=new Tt,hp=new Y,dp=new Y;class yd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dd,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;hp.setFromMatrixPosition(e.matrixWorld),t.position.copy(hp),dp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dp),t.updateMatrixWorld(),th.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jS extends yd{constructor(){super(new gi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ra*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $S extends Sd{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new jS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const fp=new Tt,La=new Y,nh=new Y;class ZS extends yd{constructor(){super(new gi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new tn(2,1,1,1),new tn(0,1,1,1),new tn(3,1,1,1),new tn(1,1,1,1),new tn(3,0,1,1),new tn(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),La.setFromMatrixPosition(e.matrixWorld),n.position.copy(La),nh.copy(n.position),nh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(nh),n.updateMatrixWorld(),i.makeTranslation(-La.x,-La.y,-La.z),fp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fp)}}class JS extends Sd{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ZS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class QS extends yd{constructor(){super(new da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ey extends Sd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new QS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ba{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ty extends ws{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Zr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Zr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Zr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Zr.add(e,l),s.manager.itemStart(e)}}const Ed="\\[\\]\\.:\\/",ny=new RegExp("["+Ed+"]","g"),Td="[^"+Ed+"]",iy="[^"+Ed.replace("\\.","")+"]",ry=/((?:WC+[\/:])*)/.source.replace("WC",Td),sy=/(WCOD+)?/.source.replace("WCOD",iy),oy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Td),ay=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Td),ly=new RegExp("^"+ry+sy+oy+ay+"$"),cy=["material","materials","bones","map"];class uy{constructor(e,t,n){const i=n||Qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qt{constructor(e,t,n){this.path=t,this.parsedPath=n||Qt.parseTrackName(t),this.node=Qt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qt.Composite(e,t,n):new Qt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ny,"")}static parseTrackName(e){const t=ly.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);cy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Qt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qt.Composite=uy;Qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qt.prototype.GetterByBindingType=[Qt.prototype._getValue_direct,Qt.prototype._getValue_array,Qt.prototype._getValue_arrayElement,Qt.prototype._getValue_toArray];Qt.prototype.SetterByBindingTypeAndVersioning=[[Qt.prototype._setValue_direct,Qt.prototype._setValue_direct_setNeedsUpdate,Qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_array,Qt.prototype._setValue_array_setNeedsUpdate,Qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_arrayElement,Qt.prototype._setValue_arrayElement_setNeedsUpdate,Qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_fromArray,Qt.prototype._setValue_fromArray_setNeedsUpdate,Qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const pp=new Tt;class hy{constructor(e,t,n=0,i=1/0){this.ray=new Fl(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new hd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pp),this}intersectObject(e,t=!0,n=[]){return Xh(e,this,n,t),n.sort(mp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Xh(e[i],this,n,t);return n.sort(mp),n}}function mp(r,e){return r.distance-e.distance}function Xh(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Xh(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nd);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Yi=Uint8Array,zo=Uint16Array,dy=Int32Array,hm=new Yi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),dm=new Yi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),fy=new Yi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),fm=function(r,e){for(var t=new zo(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new dy(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},pm=fm(hm,2),mm=pm.b,py=pm.r;mm[28]=258,py[258]=28;var my=fm(dm,0),gy=my.b,Yh=new zo(32768);for(var ln=0;ln<32768;++ln){var vs=(ln&43690)>>1|(ln&21845)<<1;vs=(vs&52428)>>2|(vs&13107)<<2,vs=(vs&61680)>>4|(vs&3855)<<4,Yh[ln]=((vs&65280)>>8|(vs&255)<<8)>>1}var ka=function(r,e,t){for(var n=r.length,i=0,s=new zo(e);i<n;++i)r[i]&&++s[r[i]-1];var o=new zo(e);for(i=1;i<e;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(t){a=new zo(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],u=e-r[i],h=o[r[i]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Yh[h]>>l]=c}else for(a=new zo(n),i=0;i<n;++i)r[i]&&(a[i]=Yh[o[r[i]-1]++]>>15-r[i]);return a},zl=new Yi(288);for(var ln=0;ln<144;++ln)zl[ln]=8;for(var ln=144;ln<256;++ln)zl[ln]=9;for(var ln=256;ln<280;++ln)zl[ln]=7;for(var ln=280;ln<288;++ln)zl[ln]=8;var gm=new Yi(32);for(var ln=0;ln<32;++ln)gm[ln]=5;var _y=ka(zl,9,1),vy=ka(gm,5,1),ih=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},nr=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},rh=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},xy=function(r){return(r+7)/8|0},My=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new Yi(r.subarray(e,t))},Sy=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ir=function(r,e,t){var n=new Error(e||Sy[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,ir),!t)throw n;return n},yy=function(r,e,t,n){var i=r.length,s=0;if(!i||e.f&&!e.l)return t||new Yi(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new Yi(i*3));var c=function(Qe){var U=t.length;if(Qe>U){var Ze=new Yi(Math.max(U*2,Qe));Ze.set(t),t=Ze}},u=e.f||0,h=e.p||0,f=e.b||0,m=e.l,x=e.d,M=e.m,g=e.n,p=i*8;do{if(!m){u=nr(r,h,1);var R=nr(r,h+1,3);if(h+=3,R)if(R==1)m=_y,x=vy,M=9,g=5;else if(R==2){var D=nr(r,h,31)+257,B=nr(r,h+10,15)+4,Q=D+nr(r,h+5,31)+1;h+=14;for(var P=new Yi(Q),b=new Yi(19),G=0;G<B;++G)b[fy[G]]=nr(r,h+G*3,7);h+=B*3;for(var oe=ih(b),ee=(1<<oe)-1,he=ka(b,oe,1),G=0;G<Q;){var _e=he[nr(r,h,ee)];h+=_e&15;var T=_e>>4;if(T<16)P[G++]=T;else{var ce=0,Se=0;for(T==16?(Se=3+nr(r,h,3),h+=2,ce=P[G-1]):T==17?(Se=3+nr(r,h,7),h+=3):T==18&&(Se=11+nr(r,h,127),h+=7);Se--;)P[G++]=ce}}var se=P.subarray(0,D),Te=P.subarray(D);M=ih(se),g=ih(Te),m=ka(se,M,1),x=ka(Te,g,1)}else ir(1);else{var T=xy(h)+4,C=r[T-4]|r[T-3]<<8,k=T+C;if(k>i){l&&ir(0);break}a&&c(f+C),t.set(r.subarray(T,k),f),e.b=f+=C,e.p=h=k*8,e.f=u;continue}if(h>p){l&&ir(0);break}}a&&c(f+131072);for(var Le=(1<<M)-1,Ge=(1<<g)-1,st=h;;st=h){var ce=m[rh(r,h)&Le],gt=ce>>4;if(h+=ce&15,h>p){l&&ir(0);break}if(ce||ir(2),gt<256)t[f++]=gt;else if(gt==256){st=h,m=null;break}else{var fe=gt-254;if(gt>264){var G=gt-257,Ee=hm[G];fe=nr(r,h,(1<<Ee)-1)+mm[G],h+=Ee}var we=x[rh(r,h)&Ge],be=we>>4;we||ir(3),h+=we&15;var Te=gy[be];if(be>3){var Ee=dm[be];Te+=rh(r,h)&(1<<Ee)-1,h+=Ee}if(h>p){l&&ir(0);break}a&&c(f+131072);var pe=f+fe;if(f<Te){var et=s-Te,Be=Math.min(Te,pe);for(et+f<0&&ir(3);f<Be;++f)t[f]=n[et+f]}for(;f<pe;++f)t[f]=t[f-Te]}}e.l=m,e.p=st,e.b=f,e.f=u,m&&(u=1,e.m=M,e.d=x,e.n=g)}while(!u);return f!=t.length&&o?My(t,0,f):t.subarray(0,f)},Ey=new Yi(0),Ty=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&ir(6,"invalid zlib data"),(r[1]>>5&1)==1&&ir(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function Lc(r,e){return yy(r.subarray(Ty(r),-4),{i:2},e,e)}var by=typeof TextDecoder<"u"&&new TextDecoder,Ay=0;try{by.decode(Ey,{stream:!0}),Ay=1}catch{}class wy extends KS{constructor(e){super(e),this.type=or}parse(e){const P=Math.pow(2.7182818,2.2);function b(d,_){let v=0;for(let V=0;V<65536;++V)(V==0||d[V>>3]&1<<(V&7))&&(_[v++]=V);const I=v-1;for(;v<65536;)_[v++]=0;return I}function G(d){for(let _=0;_<16384;_++)d[_]={},d[_].len=0,d[_].lit=0,d[_].p=null}const oe={l:0,c:0,lc:0};function ee(d,_,v,I,V){for(;v<d;)_=_<<8|ct(I,V),v+=8;v-=d,oe.l=_>>v&(1<<d)-1,oe.c=_,oe.lc=v}const he=new Array(59);function _e(d){for(let v=0;v<=58;++v)he[v]=0;for(let v=0;v<65537;++v)he[d[v]]+=1;let _=0;for(let v=58;v>0;--v){const I=_+he[v]>>1;he[v]=_,_=I}for(let v=0;v<65537;++v){const I=d[v];I>0&&(d[v]=I|he[I]++<<6)}}function ce(d,_,v,I,V,O){const $=_;let ae=0,J=0;for(;I<=V;I++){if($.value-_.value>v)return!1;ee(6,ae,J,d,$);const K=oe.l;if(ae=oe.c,J=oe.lc,O[I]=K,K==63){if($.value-_.value>v)throw new Error("Something wrong with hufUnpackEncTable");ee(8,ae,J,d,$);let ne=oe.l+6;if(ae=oe.c,J=oe.lc,I+ne>V+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ne--;)O[I++]=0;I--}else if(K>=59){let ne=K-59+2;if(I+ne>V+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ne--;)O[I++]=0;I--}}_e(O)}function Se(d){return d&63}function se(d){return d>>6}function Te(d,_,v,I){for(;_<=v;_++){const V=se(d[_]),O=Se(d[_]);if(V>>O)throw new Error("Invalid table entry");if(O>14){const $=I[V>>O-14];if($.len)throw new Error("Invalid table entry");if($.lit++,$.p){const ae=$.p;$.p=new Array($.lit);for(let J=0;J<$.lit-1;++J)$.p[J]=ae[J]}else $.p=new Array(1);$.p[$.lit-1]=_}else if(O){let $=0;for(let ae=1<<14-O;ae>0;ae--){const J=I[(V<<14-O)+$];if(J.len||J.p)throw new Error("Invalid table entry");J.len=O,J.lit=_,$++}}}return!0}const Le={c:0,lc:0};function Ge(d,_,v,I){d=d<<8|ct(v,I),_+=8,Le.c=d,Le.lc=_}const st={c:0,lc:0};function gt(d,_,v,I,V,O,$,ae,J){if(d==_){I<8&&(Ge(v,I,V,O),v=Le.c,I=Le.lc),I-=8;let K=v>>I;if(K=new Uint8Array([K])[0],ae.value+K>J)return!1;const ne=$[ae.value-1];for(;K-- >0;)$[ae.value++]=ne}else if(ae.value<J)$[ae.value++]=d;else return!1;st.c=v,st.lc=I}function fe(d){return d&65535}function Ee(d){const _=fe(d);return _>32767?_-65536:_}const we={a:0,b:0};function be(d,_){const v=Ee(d),V=Ee(_),O=v+(V&1)+(V>>1),$=O,ae=O-V;we.a=$,we.b=ae}function pe(d,_){const v=fe(d),I=fe(_),V=v-(I>>1)&65535,O=I+V-32768&65535;we.a=O,we.b=V}function et(d,_,v,I,V,O,$){const ae=$<16384,J=v>V?V:v;let K=1,ne,ye;for(;K<=J;)K<<=1;for(K>>=1,ne=K,K>>=1;K>=1;){ye=0;const Ae=ye+O*(V-ne),De=O*K,Ie=O*ne,re=I*K,Ce=I*ne;let Fe,xt,ut,bt;for(;ye<=Ae;ye+=Ie){let Kt=ye;const Je=ye+I*(v-ne);for(;Kt<=Je;Kt+=Ce){const It=Kt+re,xn=Kt+De,Gt=xn+re;ae?(be(d[Kt+_],d[xn+_]),Fe=we.a,ut=we.b,be(d[It+_],d[Gt+_]),xt=we.a,bt=we.b,be(Fe,xt),d[Kt+_]=we.a,d[It+_]=we.b,be(ut,bt),d[xn+_]=we.a,d[Gt+_]=we.b):(pe(d[Kt+_],d[xn+_]),Fe=we.a,ut=we.b,pe(d[It+_],d[Gt+_]),xt=we.a,bt=we.b,pe(Fe,xt),d[Kt+_]=we.a,d[It+_]=we.b,pe(ut,bt),d[xn+_]=we.a,d[Gt+_]=we.b)}if(v&K){const It=Kt+De;ae?be(d[Kt+_],d[It+_]):pe(d[Kt+_],d[It+_]),Fe=we.a,d[It+_]=we.b,d[Kt+_]=Fe}}if(V&K){let Kt=ye;const Je=ye+I*(v-ne);for(;Kt<=Je;Kt+=Ce){const It=Kt+re;ae?be(d[Kt+_],d[It+_]):pe(d[Kt+_],d[It+_]),Fe=we.a,d[It+_]=we.b,d[Kt+_]=Fe}}ne=K,K>>=1}return ye}function Be(d,_,v,I,V,O,$,ae,J){let K=0,ne=0;const ye=$,Ae=Math.trunc(I.value+(V+7)/8);for(;I.value<Ae;)for(Ge(K,ne,v,I),K=Le.c,ne=Le.lc;ne>=14;){const Ie=K>>ne-14&16383,re=_[Ie];if(re.len)ne-=re.len,gt(re.lit,O,K,ne,v,I,ae,J,ye),K=st.c,ne=st.lc;else{if(!re.p)throw new Error("hufDecode issues");let Ce;for(Ce=0;Ce<re.lit;Ce++){const Fe=Se(d[re.p[Ce]]);for(;ne<Fe&&I.value<Ae;)Ge(K,ne,v,I),K=Le.c,ne=Le.lc;if(ne>=Fe&&se(d[re.p[Ce]])==(K>>ne-Fe&(1<<Fe)-1)){ne-=Fe,gt(re.p[Ce],O,K,ne,v,I,ae,J,ye),K=st.c,ne=st.lc;break}}if(Ce==re.lit)throw new Error("hufDecode issues")}}const De=8-V&7;for(K>>=De,ne-=De;ne>0;){const Ie=_[K<<14-ne&16383];if(Ie.len)ne-=Ie.len,gt(Ie.lit,O,K,ne,v,I,ae,J,ye),K=st.c,ne=st.lc;else throw new Error("hufDecode issues")}return!0}function Qe(d,_,v,I,V,O){const $={value:0},ae=v.value,J=Ne(_,v),K=Ne(_,v);v.value+=4;const ne=Ne(_,v);if(v.value+=4,J<0||J>=65537||K<0||K>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ye=new Array(65537),Ae=new Array(16384);G(Ae);const De=I-(v.value-ae);if(ce(d,v,De,J,K,ye),ne>8*(I-(v.value-ae)))throw new Error("Something wrong with hufUncompress");Te(ye,J,K,Ae),Be(ye,Ae,d,v,ne,K,O,V,$)}function U(d,_,v){for(let I=0;I<v;++I)_[I]=d[_[I]]}function Ze(d){for(let _=1;_<d.length;_++){const v=d[_-1]+d[_]-128;d[_]=v}}function Ft(d,_){let v=0,I=Math.floor((d.length+1)/2),V=0;const O=d.length-1;for(;!(V>O||(_[V++]=d[v++],V>O));)_[V++]=d[I++]}function Ot(d){let _=d.byteLength;const v=new Array;let I=0;const V=new DataView(d);for(;_>0;){const O=V.getInt8(I++);if(O<0){const $=-O;_-=$+1;for(let ae=0;ae<$;ae++)v.push(V.getUint8(I++))}else{const $=O;_-=2;const ae=V.getUint8(I++);for(let J=0;J<$+1;J++)v.push(ae)}}return v}function qe(d,_,v,I,V,O){let $=new DataView(O.buffer);const ae=v[d.idx[0]].width,J=v[d.idx[0]].height,K=3,ne=Math.floor(ae/8),ye=Math.ceil(ae/8),Ae=Math.ceil(J/8),De=ae-(ye-1)*8,Ie=J-(Ae-1)*8,re={value:0},Ce=new Array(K),Fe=new Array(K),xt=new Array(K),ut=new Array(K),bt=new Array(K);for(let Je=0;Je<K;++Je)bt[Je]=_[d.idx[Je]],Ce[Je]=Je<1?0:Ce[Je-1]+ye*Ae,Fe[Je]=new Float32Array(64),xt[Je]=new Uint16Array(64),ut[Je]=new Uint16Array(ye*64);for(let Je=0;Je<Ae;++Je){let It=8;Je==Ae-1&&(It=Ie);let xn=8;for(let zt=0;zt<ye;++zt){zt==ye-1&&(xn=De);for(let Yt=0;Yt<K;++Yt)xt[Yt].fill(0),xt[Yt][0]=V[Ce[Yt]++],en(re,I,xt[Yt]),it(xt[Yt],Fe[Yt]),ht(Fe[Yt]);L(Fe);for(let Yt=0;Yt<K;++Yt)y(Fe[Yt],ut[Yt],zt*64)}let Gt=0;for(let zt=0;zt<K;++zt){const Yt=v[d.idx[zt]].type;for(let Mi=8*Je;Mi<8*Je+It;++Mi){Gt=bt[zt][Mi];for(let ur=0;ur<ne;++ur){const Zt=ur*64+(Mi&7)*8;$.setUint16(Gt+0*2*Yt,ut[zt][Zt+0],!0),$.setUint16(Gt+1*2*Yt,ut[zt][Zt+1],!0),$.setUint16(Gt+2*2*Yt,ut[zt][Zt+2],!0),$.setUint16(Gt+3*2*Yt,ut[zt][Zt+3],!0),$.setUint16(Gt+4*2*Yt,ut[zt][Zt+4],!0),$.setUint16(Gt+5*2*Yt,ut[zt][Zt+5],!0),$.setUint16(Gt+6*2*Yt,ut[zt][Zt+6],!0),$.setUint16(Gt+7*2*Yt,ut[zt][Zt+7],!0),Gt+=8*2*Yt}}if(ne!=ye)for(let Mi=8*Je;Mi<8*Je+It;++Mi){const ur=bt[zt][Mi]+8*ne*2*Yt,Zt=ne*64+(Mi&7)*8;for(let dn=0;dn<xn;++dn)$.setUint16(ur+dn*2*Yt,ut[zt][Zt+dn],!0)}}}const Kt=new Uint16Array(ae);$=new DataView(O.buffer);for(let Je=0;Je<K;++Je){v[d.idx[Je]].decoded=!0;const It=v[d.idx[Je]].type;if(v[Je].type==2)for(let xn=0;xn<J;++xn){const Gt=bt[Je][xn];for(let zt=0;zt<ae;++zt)Kt[zt]=$.getUint16(Gt+zt*2*It,!0);for(let zt=0;zt<ae;++zt)$.setFloat32(Gt+zt*2*It,W(Kt[zt]),!0)}}}function en(d,_,v){let I,V=1;for(;V<64;)I=_[d.value],I==65280?V=64:I>>8==255?V+=I&255:(v[V]=I,V++),d.value++}function it(d,_){_[0]=W(d[0]),_[1]=W(d[1]),_[2]=W(d[5]),_[3]=W(d[6]),_[4]=W(d[14]),_[5]=W(d[15]),_[6]=W(d[27]),_[7]=W(d[28]),_[8]=W(d[2]),_[9]=W(d[4]),_[10]=W(d[7]),_[11]=W(d[13]),_[12]=W(d[16]),_[13]=W(d[26]),_[14]=W(d[29]),_[15]=W(d[42]),_[16]=W(d[3]),_[17]=W(d[8]),_[18]=W(d[12]),_[19]=W(d[17]),_[20]=W(d[25]),_[21]=W(d[30]),_[22]=W(d[41]),_[23]=W(d[43]),_[24]=W(d[9]),_[25]=W(d[11]),_[26]=W(d[18]),_[27]=W(d[24]),_[28]=W(d[31]),_[29]=W(d[40]),_[30]=W(d[44]),_[31]=W(d[53]),_[32]=W(d[10]),_[33]=W(d[19]),_[34]=W(d[23]),_[35]=W(d[32]),_[36]=W(d[39]),_[37]=W(d[45]),_[38]=W(d[52]),_[39]=W(d[54]),_[40]=W(d[20]),_[41]=W(d[22]),_[42]=W(d[33]),_[43]=W(d[38]),_[44]=W(d[46]),_[45]=W(d[51]),_[46]=W(d[55]),_[47]=W(d[60]),_[48]=W(d[21]),_[49]=W(d[34]),_[50]=W(d[37]),_[51]=W(d[47]),_[52]=W(d[50]),_[53]=W(d[56]),_[54]=W(d[59]),_[55]=W(d[61]),_[56]=W(d[35]),_[57]=W(d[36]),_[58]=W(d[48]),_[59]=W(d[49]),_[60]=W(d[57]),_[61]=W(d[58]),_[62]=W(d[62]),_[63]=W(d[63])}function ht(d){const _=.5*Math.cos(.7853975),v=.5*Math.cos(3.14159/16),I=.5*Math.cos(3.14159/8),V=.5*Math.cos(3*3.14159/16),O=.5*Math.cos(5*3.14159/16),$=.5*Math.cos(3*3.14159/8),ae=.5*Math.cos(7*3.14159/16),J=new Array(4),K=new Array(4),ne=new Array(4),ye=new Array(4);for(let Ae=0;Ae<8;++Ae){const De=Ae*8;J[0]=I*d[De+2],J[1]=$*d[De+2],J[2]=I*d[De+6],J[3]=$*d[De+6],K[0]=v*d[De+1]+V*d[De+3]+O*d[De+5]+ae*d[De+7],K[1]=V*d[De+1]-ae*d[De+3]-v*d[De+5]-O*d[De+7],K[2]=O*d[De+1]-v*d[De+3]+ae*d[De+5]+V*d[De+7],K[3]=ae*d[De+1]-O*d[De+3]+V*d[De+5]-v*d[De+7],ne[0]=_*(d[De+0]+d[De+4]),ne[3]=_*(d[De+0]-d[De+4]),ne[1]=J[0]+J[3],ne[2]=J[1]-J[2],ye[0]=ne[0]+ne[1],ye[1]=ne[3]+ne[2],ye[2]=ne[3]-ne[2],ye[3]=ne[0]-ne[1],d[De+0]=ye[0]+K[0],d[De+1]=ye[1]+K[1],d[De+2]=ye[2]+K[2],d[De+3]=ye[3]+K[3],d[De+4]=ye[3]-K[3],d[De+5]=ye[2]-K[2],d[De+6]=ye[1]-K[1],d[De+7]=ye[0]-K[0]}for(let Ae=0;Ae<8;++Ae)J[0]=I*d[16+Ae],J[1]=$*d[16+Ae],J[2]=I*d[48+Ae],J[3]=$*d[48+Ae],K[0]=v*d[8+Ae]+V*d[24+Ae]+O*d[40+Ae]+ae*d[56+Ae],K[1]=V*d[8+Ae]-ae*d[24+Ae]-v*d[40+Ae]-O*d[56+Ae],K[2]=O*d[8+Ae]-v*d[24+Ae]+ae*d[40+Ae]+V*d[56+Ae],K[3]=ae*d[8+Ae]-O*d[24+Ae]+V*d[40+Ae]-v*d[56+Ae],ne[0]=_*(d[Ae]+d[32+Ae]),ne[3]=_*(d[Ae]-d[32+Ae]),ne[1]=J[0]+J[3],ne[2]=J[1]-J[2],ye[0]=ne[0]+ne[1],ye[1]=ne[3]+ne[2],ye[2]=ne[3]-ne[2],ye[3]=ne[0]-ne[1],d[0+Ae]=ye[0]+K[0],d[8+Ae]=ye[1]+K[1],d[16+Ae]=ye[2]+K[2],d[24+Ae]=ye[3]+K[3],d[32+Ae]=ye[3]-K[3],d[40+Ae]=ye[2]-K[2],d[48+Ae]=ye[1]-K[1],d[56+Ae]=ye[0]-K[0]}function L(d){for(let _=0;_<64;++_){const v=d[0][_],I=d[1][_],V=d[2][_];d[0][_]=v+1.5747*V,d[1][_]=v-.1873*I-.4682*V,d[2][_]=v+1.8556*I}}function y(d,_,v){for(let I=0;I<64;++I)_[v+I]=_f.toHalfFloat(ie(d[I]))}function ie(d){return d<=1?Math.sign(d)*Math.pow(Math.abs(d),2.2):Math.sign(d)*Math.pow(P,Math.abs(d)-1)}function de(d){return new DataView(d.array.buffer,d.offset.value,d.size)}function ve(d){const _=d.viewer.buffer.slice(d.offset.value,d.offset.value+d.size),v=new Uint8Array(Ot(_)),I=new Uint8Array(v.length);return Ze(v),Ft(v,I),new DataView(I.buffer)}function ge(d){const _=d.array.slice(d.offset.value,d.offset.value+d.size),v=Lc(_),I=new Uint8Array(v.length);return Ze(v),Ft(v,I),new DataView(I.buffer)}function je(d){const _=d.viewer,v={value:d.offset.value},I=new Uint16Array(d.columns*d.lines*(d.inputChannels.length*d.type)),V=new Uint8Array(8192);let O=0;const $=new Array(d.inputChannels.length);for(let Ie=0,re=d.inputChannels.length;Ie<re;Ie++)$[Ie]={},$[Ie].start=O,$[Ie].end=$[Ie].start,$[Ie].nx=d.columns,$[Ie].ny=d.lines,$[Ie].size=d.type,O+=$[Ie].nx*$[Ie].ny*$[Ie].size;const ae=me(_,v),J=me(_,v);if(J>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ae<=J)for(let Ie=0;Ie<J-ae+1;Ie++)V[Ie+ae]=ot(_,v);const K=new Uint16Array(65536),ne=b(V,K),ye=Ne(_,v);Qe(d.array,_,v,ye,I,O);for(let Ie=0;Ie<d.inputChannels.length;++Ie){const re=$[Ie];for(let Ce=0;Ce<$[Ie].size;++Ce)et(I,re.start+Ce,re.nx,re.size,re.ny,re.nx*re.size,ne)}U(K,I,O);let Ae=0;const De=new Uint8Array(I.buffer.byteLength);for(let Ie=0;Ie<d.lines;Ie++)for(let re=0;re<d.inputChannels.length;re++){const Ce=$[re],Fe=Ce.nx*Ce.size,xt=new Uint8Array(I.buffer,Ce.end*2,Fe*2);De.set(xt,Ae),Ae+=Fe*2,Ce.end+=Fe}return new DataView(De.buffer)}function ke(d){const _=d.array.slice(d.offset.value,d.offset.value+d.size),v=Lc(_),I=d.inputChannels.length*d.lines*d.columns*d.totalBytes,V=new ArrayBuffer(I),O=new DataView(V);let $=0,ae=0;const J=new Array(4);for(let K=0;K<d.lines;K++)for(let ne=0;ne<d.inputChannels.length;ne++){let ye=0;switch(d.inputChannels[ne].pixelType){case 1:J[0]=$,J[1]=J[0]+d.columns,$=J[1]+d.columns;for(let De=0;De<d.columns;++De){const Ie=v[J[0]++]<<8|v[J[1]++];ye+=Ie,O.setUint16(ae,ye,!0),ae+=2}break;case 2:J[0]=$,J[1]=J[0]+d.columns,J[2]=J[1]+d.columns,$=J[2]+d.columns;for(let De=0;De<d.columns;++De){const Ie=v[J[0]++]<<24|v[J[1]++]<<16|v[J[2]++]<<8;ye+=Ie,O.setUint32(ae,ye,!0),ae+=4}break}}return O}function Ve(d){const _=d.viewer,v={value:d.offset.value},I=new Uint8Array(d.columns*d.lines*(d.inputChannels.length*d.type*2)),V={version:vt(_,v),unknownUncompressedSize:vt(_,v),unknownCompressedSize:vt(_,v),acCompressedSize:vt(_,v),dcCompressedSize:vt(_,v),rleCompressedSize:vt(_,v),rleUncompressedSize:vt(_,v),rleRawSize:vt(_,v),totalAcUncompressedCount:vt(_,v),totalDcUncompressedCount:vt(_,v),acCompression:vt(_,v)};if(V.version<2)throw new Error("EXRLoader.parse: "+E.compression+" version "+V.version+" is unsupported");const O=new Array;let $=me(_,v)-2;for(;$>0;){const re=ft(_.buffer,v),Ce=ot(_,v),Fe=Ce>>2&3,xt=(Ce>>4)-1,ut=new Int8Array([xt])[0],bt=ot(_,v);O.push({name:re,index:ut,type:bt,compression:Fe}),$-=re.length+3}const ae=E.channels,J=new Array(d.inputChannels.length);for(let re=0;re<d.inputChannels.length;++re){const Ce=J[re]={},Fe=ae[re];Ce.name=Fe.name,Ce.compression=0,Ce.decoded=!1,Ce.type=Fe.pixelType,Ce.pLinear=Fe.pLinear,Ce.width=d.columns,Ce.height=d.lines}const K={idx:new Array(3)};for(let re=0;re<d.inputChannels.length;++re){const Ce=J[re];for(let Fe=0;Fe<O.length;++Fe){const xt=O[Fe];Ce.name==xt.name&&(Ce.compression=xt.compression,xt.index>=0&&(K.idx[xt.index]=re),Ce.offset=re)}}let ne,ye,Ae;if(V.acCompressedSize>0)switch(V.acCompression){case 0:ne=new Uint16Array(V.totalAcUncompressedCount),Qe(d.array,_,v,V.acCompressedSize,ne,V.totalAcUncompressedCount);break;case 1:const re=d.array.slice(v.value,v.value+V.totalAcUncompressedCount),Ce=Lc(re);ne=new Uint16Array(Ce.buffer),v.value+=V.totalAcUncompressedCount;break}if(V.dcCompressedSize>0){const re={array:d.array,offset:v,size:V.dcCompressedSize};ye=new Uint16Array(ge(re).buffer),v.value+=V.dcCompressedSize}if(V.rleRawSize>0){const re=d.array.slice(v.value,v.value+V.rleCompressedSize),Ce=Lc(re);Ae=Ot(Ce.buffer),v.value+=V.rleCompressedSize}let De=0;const Ie=new Array(J.length);for(let re=0;re<Ie.length;++re)Ie[re]=new Array;for(let re=0;re<d.lines;++re)for(let Ce=0;Ce<J.length;++Ce)Ie[Ce].push(De),De+=J[Ce].width*d.type*2;qe(K,Ie,J,ne,ye,I);for(let re=0;re<J.length;++re){const Ce=J[re];if(!Ce.decoded)switch(Ce.compression){case 2:let Fe=0,xt=0;for(let ut=0;ut<d.lines;++ut){let bt=Ie[re][Fe];for(let Kt=0;Kt<Ce.width;++Kt){for(let Je=0;Je<2*Ce.type;++Je)I[bt++]=Ae[xt+Je*Ce.width*Ce.height];xt++}Fe++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(I.buffer)}function ft(d,_){const v=new Uint8Array(d);let I=0;for(;v[_.value+I]!=0;)I+=1;const V=new TextDecoder().decode(v.slice(_.value,_.value+I));return _.value=_.value+I+1,V}function Me(d,_,v){const I=new TextDecoder().decode(new Uint8Array(d).slice(_.value,_.value+v));return _.value=_.value+v,I}function We(d,_){const v=Ke(d,_),I=Ne(d,_);return[v,I]}function Rt(d,_){const v=Ne(d,_),I=Ne(d,_);return[v,I]}function Ke(d,_){const v=d.getInt32(_.value,!0);return _.value=_.value+4,v}function Ne(d,_){const v=d.getUint32(_.value,!0);return _.value=_.value+4,v}function ct(d,_){const v=d[_.value];return _.value=_.value+1,v}function ot(d,_){const v=d.getUint8(_.value);return _.value=_.value+1,v}const vt=function(d,_){let v;return"getBigInt64"in DataView.prototype?v=Number(d.getBigInt64(_.value,!0)):v=d.getUint32(_.value+4,!0)+Number(d.getUint32(_.value,!0)<<32),_.value+=8,v};function z(d,_){const v=d.getFloat32(_.value,!0);return _.value+=4,v}function Re(d,_){return _f.toHalfFloat(z(d,_))}function W(d){const _=(d&31744)>>10,v=d&1023;return(d>>15?-1:1)*(_?_===31?v?NaN:1/0:Math.pow(2,_-15)*(1+v/1024):6103515625e-14*(v/1024))}function me(d,_){const v=d.getUint16(_.value,!0);return _.value+=2,v}function Ue(d,_){return W(me(d,_))}function Ye(d,_,v,I){const V=v.value,O=[];for(;v.value<V+I-1;){const $=ft(_,v),ae=Ke(d,v),J=ot(d,v);v.value+=3;const K=Ke(d,v),ne=Ke(d,v);O.push({name:$,pixelType:ae,pLinear:J,xSampling:K,ySampling:ne})}return v.value+=1,O}function Ct(d,_){const v=z(d,_),I=z(d,_),V=z(d,_),O=z(d,_),$=z(d,_),ae=z(d,_),J=z(d,_),K=z(d,_);return{redX:v,redY:I,greenX:V,greenY:O,blueX:$,blueY:ae,whiteX:J,whiteY:K}}function Bt(d,_){const v=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],I=ot(d,_);return v[I]}function on(d,_){const v=Ke(d,_),I=Ke(d,_),V=Ke(d,_),O=Ke(d,_);return{xMin:v,yMin:I,xMax:V,yMax:O}}function kt(d,_){const v=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],I=ot(d,_);return v[I]}function vi(d,_){const v=["ENVMAP_LATLONG","ENVMAP_CUBE"],I=ot(d,_);return v[I]}function xi(d,_){const v=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],I=["ROUND_DOWN","ROUND_UP"],V=Ne(d,_),O=Ne(d,_),$=ot(d,_);return{xSize:V,ySize:O,levelMode:v[$&15],roundingMode:I[$>>4]}}function Rs(d,_){const v=z(d,_),I=z(d,_);return[v,I]}function ki(d,_){const v=z(d,_),I=z(d,_),V=z(d,_);return[v,I,V]}function Zn(d,_,v,I,V){if(I==="string"||I==="stringvector"||I==="iccProfile")return Me(_,v,V);if(I==="chlist")return Ye(d,_,v,V);if(I==="chromaticities")return Ct(d,v);if(I==="compression")return Bt(d,v);if(I==="box2i")return on(d,v);if(I==="envmap")return vi(d,v);if(I==="tiledesc")return xi(d,v);if(I==="lineOrder")return kt(d,v);if(I==="float")return z(d,v);if(I==="v2f")return Rs(d,v);if(I==="v3f")return ki(d,v);if(I==="int")return Ke(d,v);if(I==="rational")return We(d,v);if(I==="timecode")return Rt(d,v);if(I==="preview")return v.value+=V,"skipped";v.value+=V}function lr(d,_){const v=Math.log2(d);return _=="ROUND_DOWN"?Math.floor(v):Math.ceil(v)}function Cs(d,_,v){let I=0;switch(d.levelMode){case"ONE_LEVEL":I=1;break;case"MIPMAP_LEVELS":I=lr(Math.max(_,v),d.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return I}function cr(d,_,v,I){const V=new Array(d);for(let O=0;O<d;O++){const $=1<<O;let ae=_/$|0;I=="ROUND_UP"&&ae*$<_&&(ae+=1);const J=Math.max(ae,1);V[O]=(J+v-1)/v|0}return V}function zi(){const d=this,_=d.offset,v={value:0};for(let I=0;I<d.tileCount;I++){const V=Ke(d.viewer,_),O=Ke(d.viewer,_);_.value+=8,d.size=Ne(d.viewer,_);const $=V*d.blockWidth,ae=O*d.blockHeight;d.columns=$+d.blockWidth>d.width?d.width-$:d.blockWidth,d.lines=ae+d.blockHeight>d.height?d.height-ae:d.blockHeight;const J=d.columns*d.totalBytes,ne=d.size<d.lines*J?d.uncompress(d):de(d);_.value+=d.size;for(let ye=0;ye<d.lines;ye++){const Ae=ye*d.columns*d.totalBytes;for(let De=0;De<d.inputChannels.length;De++){const Ie=E.channels[De].name,re=d.channelByteOffsets[Ie]*d.columns,Ce=d.decodeChannels[Ie];if(Ce===void 0)continue;v.value=Ae+re;const Fe=(d.height-(1+ae+ye))*d.outLineWidth;for(let xt=0;xt<d.columns;xt++){const ut=Fe+(xt+$)*d.outputChannels+Ce;d.byteArray[ut]=d.getter(ne,v)}}}}}function br(){const d=this,_=d.offset,v={value:0};for(let I=0;I<d.height/d.blockHeight;I++){const V=Ke(d.viewer,_)-E.dataWindow.yMin;d.size=Ne(d.viewer,_),d.lines=V+d.blockHeight>d.height?d.height-V:d.blockHeight;const O=d.columns*d.totalBytes,ae=d.size<d.lines*O?d.uncompress(d):de(d);_.value+=d.size;for(let J=0;J<d.blockHeight;J++){const K=I*d.blockHeight,ne=J+d.scanOrder(K);if(ne>=d.height)continue;const ye=J*O,Ae=(d.height-1-ne)*d.outLineWidth;for(let De=0;De<d.inputChannels.length;De++){const Ie=E.channels[De].name,re=d.channelByteOffsets[Ie]*d.columns,Ce=d.decodeChannels[Ie];if(Ce!==void 0){v.value=ye+re;for(let Fe=0;Fe<d.columns;Fe++){const xt=Ae+Fe*d.outputChannels+Ce;d.byteArray[xt]=d.getter(ae,v)}}}}}}function Ps(d,_,v){const I={};if(d.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");I.version=d.getUint8(4);const V=d.getUint8(5);I.spec={singleTile:!!(V&2),longName:!!(V&4),deepFormat:!!(V&8),multiPart:!!(V&16)},v.value=8;let O=!0;for(;O;){const $=ft(_,v);if($==0)O=!1;else{const ae=ft(_,v),J=Ne(d,v),K=Zn(d,_,v,ae,J);K===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ae}'.`):I[$]=K}}if(V&-7)throw console.error("THREE.EXRHeader:",I),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return I}function fo(d,_,v,I,V){const O={size:0,viewer:_,array:v,offset:I,width:d.dataWindow.xMax-d.dataWindow.xMin+1,height:d.dataWindow.yMax-d.dataWindow.yMin+1,inputChannels:d.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Fn};switch(d.compression){case"NO_COMPRESSION":O.blockHeight=1,O.uncompress=de;break;case"RLE_COMPRESSION":O.blockHeight=1,O.uncompress=ve;break;case"ZIPS_COMPRESSION":O.blockHeight=1,O.uncompress=ge;break;case"ZIP_COMPRESSION":O.blockHeight=16,O.uncompress=ge;break;case"PIZ_COMPRESSION":O.blockHeight=32,O.uncompress=je;break;case"PXR24_COMPRESSION":O.blockHeight=16,O.uncompress=ke;break;case"DWAA_COMPRESSION":O.blockHeight=32,O.uncompress=Ve;break;case"DWAB_COMPRESSION":O.blockHeight=256,O.uncompress=Ve;break;default:throw new Error("EXRLoader.parse: "+d.compression+" is unsupported")}const $={};for(const ne of d.channels)switch(ne.name){case"Y":case"R":case"G":case"B":case"A":$[ne.name]=!0,O.type=ne.pixelType}let ae=!1;if($.R&&$.G&&$.B)ae=!$.A,O.outputChannels=4,O.decodeChannels={R:0,G:1,B:2,A:3};else if($.Y)O.outputChannels=1,O.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(O.type==1)switch(V){case bi:O.getter=Ue;break;case or:O.getter=me;break}else if(O.type==2)switch(V){case bi:O.getter=z;break;case or:O.getter=Re}else throw new Error("EXRLoader.parse: unsupported pixelType "+O.type+" for "+d.compression+".");O.columns=O.width;const J=O.width*O.height*O.outputChannels;switch(V){case bi:O.byteArray=new Float32Array(J),ae&&O.byteArray.fill(1,0,J);break;case or:O.byteArray=new Uint16Array(J),ae&&O.byteArray.fill(15360,0,J);break;default:console.error("THREE.EXRLoader: unsupported type: ",V);break}let K=0;for(const ne of d.channels)O.decodeChannels[ne.name]!==void 0&&(O.channelByteOffsets[ne.name]=K),K+=ne.pixelType*2;if(O.totalBytes=K,O.outLineWidth=O.width*O.outputChannels,d.lineOrder==="INCREASING_Y"?O.scanOrder=ne=>ne:O.scanOrder=ne=>O.height-1-ne,O.outputChannels==4?(O.format=Ai,O.colorSpace=Fn):(O.format=du,O.colorSpace=Kr),d.spec.singleTile){O.blockHeight=d.tiles.ySize,O.blockWidth=d.tiles.xSize;const ne=Cs(d.tiles,O.width,O.height),ye=cr(ne,O.width,d.tiles.xSize,d.tiles.roundingMode),Ae=cr(ne,O.height,d.tiles.ySize,d.tiles.roundingMode);O.tileCount=ye[0]*Ae[0];for(let De=0;De<ne;De++)for(let Ie=0;Ie<Ae[De];Ie++)for(let re=0;re<ye[De];re++)vt(_,I);O.decode=zi.bind(O)}else{O.blockWidth=O.width;const ne=Math.ceil(O.height/O.blockHeight);for(let ye=0;ye<ne;ye++)vt(_,I);O.decode=br.bind(O)}return O}const po={value:0},si=new DataView(e),ss=new Uint8Array(e),E=Ps(si,e,po),H=fo(E,si,ss,po,this.type);return H.decode(),{header:E,width:H.width,height:H.height,data:H.byteArray,format:H.format,colorSpace:H.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=vn,o.magFilter=vn,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,n,i)}}function gp(r,e){if(e===Fg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===zh||e===Hp){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===zh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Ry extends ws{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Dy(t)}),this.register(function(t){return new Uy(t)}),this.register(function(t){return new Vy(t)}),this.register(function(t){return new Wy(t)}),this.register(function(t){return new Xy(t)}),this.register(function(t){return new Fy(t)}),this.register(function(t){return new Oy(t)}),this.register(function(t){return new By(t)}),this.register(function(t){return new ky(t)}),this.register(function(t){return new Ly(t)}),this.register(function(t){return new zy(t)}),this.register(function(t){return new Ny(t)}),this.register(function(t){return new Gy(t)}),this.register(function(t){return new Hy(t)}),this.register(function(t){return new Py(t)}),this.register(function(t){return new Yy(t)}),this.register(function(t){return new qy(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ba.extractUrlBase(e);o=Ba.resolveURL(c,this.path)}else o=Ba.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new mu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===_m){try{o[Nt.KHR_BINARY_GLTF]=new Ky(e)}catch(h){i&&i(h);return}s=JSON.parse(o[Nt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new aE(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case Nt.KHR_MATERIALS_UNLIT:o[h]=new Iy;break;case Nt.KHR_DRACO_MESH_COMPRESSION:o[h]=new jy(s,this.dracoLoader);break;case Nt.KHR_TEXTURE_TRANSFORM:o[h]=new $y;break;case Nt.KHR_MESH_QUANTIZATION:o[h]=new Zy;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Cy(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Py{constructor(e){this.parser=e,this.name=Nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new lt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Fn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ey(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new JS(u),c.distance=h;break;case"spot":c=new $S(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Hr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Iy{constructor(){this.name=Nt.KHR_MATERIALS_UNLIT}getMaterialType(){return Qs}extendParams(e,t,n){const i=[];e.color=new lt(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Fn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,mi))}return Promise.all(i)}}class Ly{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Dy{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(a,a)}return Promise.all(s)}}class Uy{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Ny{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Fy{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new lt(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Fn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,mi)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Oy{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class By{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new lt().setRGB(a[0],a[1],a[2],Fn),Promise.all(s)}}class ky{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class zy{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new lt().setRGB(a[0],a[1],a[2],Fn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,mi)),Promise.all(s)}}class Hy{constructor(e){this.parser=e,this.name=Nt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Gy{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Vy{constructor(e){this.parser=e,this.name=Nt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Wy{constructor(e){this.parser=e,this.name=Nt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Xy{constructor(e){this.parser=e,this.name=Nt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Yy{constructor(e){this.name=Nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(m),u,h,f,i.mode,i.filter),m})})}else return null}}class qy{constructor(e){this.name=Nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Xi.TRIANGLES&&c.mode!==Xi.TRIANGLE_STRIP&&c.mode!==Xi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,m=[];for(const x of h){const M=new Tt,g=new Y,p=new is,R=new Y(1,1,1),T=new IS(x.geometry,x.material,f);for(let C=0;C<f;C++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,C),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,C),l.SCALE&&R.fromBufferAttribute(l.SCALE,C),T.setMatrixAt(C,M.compose(g,p,R));for(const C in l)if(C==="_COLOR_0"){const k=l[C];T.instanceColor=new Vh(k.array,k.itemSize,k.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&x.geometry.setAttribute(C,l[C]);hn.prototype.copy.call(T,x),this.parser.assignFinalMaterial(T),m.push(T)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const _m="glTF",Da=12,_p={JSON:1313821514,BIN:5130562};class Ky{constructor(e){this.name=Nt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Da),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_m)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Da,s=new DataView(e,Da);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===_p.JSON){const c=new Uint8Array(e,Da+o,a);this.content=n.decode(c)}else if(l===_p.BIN){const c=Da+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class jy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=qh[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=qh[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],m=Yo[f.componentType];c[h]=m.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(m){for(const x in m.attributes){const M=m.attributes[x],g=l[x];g!==void 0&&(M.normalized=g)}h(m)},a,c,Fn,f)})})}}class $y{constructor(){this.name=Nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Zy{constructor(){this.name=Nt.KHR_MESH_QUANTIZATION}}class vm extends kl{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,m=f*h,x=e*c,M=x-c,g=-2*m+3*f,p=m-f,R=1-g,T=p-f+h;for(let C=0;C!==a;C++){const k=o[M+C+a],D=o[M+C+l]*u,B=o[x+C+a],Q=o[x+C]*u;s[C]=R*k+T*D+g*B+p*Q}return s}}const Jy=new is;class Qy extends vm{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Jy.fromArray(s).normalize().toArray(s),s}}const Xi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Yo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vp={9728:Vn,9729:vn,9984:Ip,9985:Fc,9986:Ua,9987:vr},xp={33071:_r,33648:Xc,10497:Mr},sh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eE={CUBICSPLINE:void 0,LINEAR:Ga,STEP:Ha},oh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tE(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new xd({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jr})),r.DefaultMaterial}function qs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nE(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function iE(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rE(r){let e;const t=r.extensions&&r.extensions[Nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ah(t.attributes):e=r.indices+":"+ah(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ah(r.targets[n]);return e}function ah(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Kh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sE(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const oE=new Tt;class aE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Cy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Md(this.options.manager):this.textureLoader=new ty(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new mu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return qs(s,a,i),Hr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Nt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Ba.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=sh[i.type],a=Yo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new ri(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=sh[i.type],c=Yo[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,x=i.normalized===!0;let M,g;if(m&&m!==h){const p=Math.floor(f/m),R="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let T=t.cache.get(R);T||(M=new c(a,p*m,i.count*m/u),T=new AS(M,m/u),t.cache.add(R,T)),g=new pd(T,l,f%m/u,x)}else a===null?M=new c(i.count*l):M=new c(a,f,i.count*l),g=new ri(M,l,x);if(i.sparse!==void 0){const p=sh.SCALAR,R=Yo[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,C=i.sparse.values.byteOffset||0,k=new R(o[1],T,i.sparse.count*p),D=new c(o[2],C,i.sparse.count*l);a!==null&&(g=new ri(g.array.slice(),g.itemSize,g.normalized));for(let B=0,Q=k.length;B<Q;B++){const P=k[B];if(g.setX(P,D[B*l]),l>=2&&g.setY(P,D[B*l+1]),l>=3&&g.setZ(P,D[B*l+2]),l>=4&&g.setW(P,D[B*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=vp[f.magFilter]||vn,u.minFilter=vp[f.minFilter]||vr,u.wrapS=xp[f.wrapS]||Mr,u.wrapT=xp[f.wrapT]||Mr,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,m){let x=f;t.isImageBitmapLoader===!0&&(x=function(M){const g=new Pn(M);g.needsUpdate=!0,f(g)}),t.load(Ba.resolveURL(h,s.path),x,void 0,m)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Hr(h,o),h.userData.mimeType=o.mimeType||sE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Nt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Nt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Nt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new am,xr.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new om,xr.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return xd}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Nt.KHR_MATERIALS_UNLIT]){const h=i[Nt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new lt(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Fn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,mi)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=mr);const u=s.alphaMode||oh.OPAQUE;if(u===oh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===oh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Qs&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new $e(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Qs&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Qs){const h=s.emissiveFactor;a.emissive=new lt().setRGB(h[0],h[1],h[2],Fn)}return s.emissiveTexture!==void 0&&o!==Qs&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,mi)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Hr(h,s),t.associations.set(h,{materials:e}),s.extensions&&qs(i,h,s),h})}createUniqueName(e){const t=Qt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Mp(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=rE(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Nt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Mp(new Oi,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?tE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let m=0,x=u.length;m<x;m++){const M=u[m],g=o[m];let p;const R=c[m];if(g.mode===Xi.TRIANGLES||g.mode===Xi.TRIANGLE_STRIP||g.mode===Xi.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new RS(M,R):new Nn(M,R),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Xi.TRIANGLE_STRIP?p.geometry=gp(p.geometry,Hp):g.mode===Xi.TRIANGLE_FAN&&(p.geometry=gp(p.geometry,zh));else if(g.mode===Xi.LINES)p=new LS(M,R);else if(g.mode===Xi.LINE_STRIP)p=new _d(M,R);else if(g.mode===Xi.LINE_LOOP)p=new DS(M,R);else if(g.mode===Xi.POINTS)p=new lm(M,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&iE(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Hr(p,s),g.extensions&&qs(i,p,g),t.assignFinalMaterial(p),h.push(p)}for(let m=0,x=h.length;m<x;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return s.extensions&&qs(i,h[0],s),h[0];const f=new Ts;s.extensions&&qs(i,f,s),t.associations.set(f,{meshes:e});for(let m=0,x=h.length;m<x;m++)f.add(h[m]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new gi(c_.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new da(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Tt;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new gd(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const m=i.channels[h],x=i.samplers[m.sampler],M=m.target,g=M.node,p=i.parameters!==void 0?i.parameters[x.input]:x.input,R=i.parameters!==void 0?i.parameters[x.output]:x.output;M.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",R)),c.push(x),u.push(M))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],m=h[1],x=h[2],M=h[3],g=h[4],p=[];for(let R=0,T=f.length;R<T;R++){const C=f[R],k=m[R],D=x[R],B=M[R],Q=g[R];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const P=n._createAnimationTracks(C,k,D,B,Q);if(P)for(let b=0;b<P.length;b++)p.push(P[b])}return new HS(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(f,oE)});for(let m=0,x=h.length;m<x;m++)u.add(h[m]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new sm:c.length>1?u=new Ts:c.length===1?u=c[0]:u=new hn,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Hr(u,s),s.extensions&&qs(n,u,s),s.matrix!==void 0){const h=new Tt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Ts;n.name&&(s.name=i.createUniqueName(n.name)),Hr(s,n),n.extensions&&qs(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,m]of i.associations)(f instanceof xr||f instanceof Pn)&&h.set(f,m);return u.traverse(f=>{const m=i.associations.get(f);m!=null&&h.set(f,m)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];xs[s.path]===xs.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(xs[s.path]){case xs.weights:c=oa;break;case xs.rotation:c=aa;break;case xs.position:case xs.scale:c=la;break;default:switch(n.itemSize){case 1:c=oa;break;case 2:case 3:default:c=la;break}break}const u=i.interpolation!==void 0?eE[i.interpolation]:Ga,h=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){const x=new c(l[f]+"."+xs[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Kh(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof aa?Qy:vm;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function lE(r,e,t){const n=e.attributes,i=new rs;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new Y(l[0],l[1],l[2]),new Y(c[0],c[1],c[2])),a.normalized){const u=Kh(Yo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new Y,l=new Y;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],m=f.min,x=f.max;if(m!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(x[2]))),f.normalized){const M=Kh(Yo[f.componentType]);l.multiplyScalar(M)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new yr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Mp(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=qh[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Xt.workingColorSpace!==Fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xt.workingColorSpace}" not supported.`),Hr(r,e),lE(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?nE(r,e.targets,t):r})}let qn=0;const Oe={LOADER_PROGRESS:qn++,APP_LOADED:qn++,ATTACH:qn++,DETACH:qn++,DESTROY:qn++,RESIZE:qn++,AFTER_RESIZE:qn++,SCROLL:qn++,TICK:qn++,RENDER:qn++,BEFORE_TICK:qn++,AFTER_RENDER:qn++,POINTER_MOVE:qn++,POINTER_UP:qn++,POINTER_DOWN:qn++,KEY_DOWN:qn++,UPDATE_OVERLAYS:qn++},Dc={textures:{noise:{path:"/textures/noise.png"}},envMaps:{},models:{globe:{path:"/models/globe.glb",pathMobile:"/models/globe-mobile.glb"}},jsons:{}};class Uc{constructor({manifest:e={},loader:t=null,isMobile:n=!1,assetsInfos:i=new Map,loadedAssets:s=new Map,progressCallback:o=()=>null,afterLoadCallback:a=c=>c,key:l=""}={}){this.manifest=e,this.loader=t,this.isMobile=n,this.assetsToLoad=new Map,this.assetsInfos=i,this.loadedAssets=s,this.progressCallback=o,this.afterLoadCallback=a,this.key=l,this.add(...Object.keys(e))}add(...e){for(const t of e)!this.assetsToLoad.has(t)&&this.manifest[t]&&this.assetsToLoad.set(t,this.manifest[t])}getAsset(e){return this.loadedAssets.get(e)}getAssets(...e){return Object.fromEntries(e?[...this.loadedAssets.entries()].filter(([t])=>e.includes(t)):this.loadedAssets.entries())}async loadAsset(e){var t,n,i,s;if(this.loadedAssets.has(e))return this.loadedAssets.get(e);try{const o=this.isMobile&&this.manifest[e].pathMobile?this.manifest[e].pathMobile:this.manifest[e].path,a=this.afterLoadCallback(await this.loader.loadAsync(o,c=>this.assetProgress(c,e))),l=(t=a==null?void 0:a.scene)!=null&&t.isObject3D?a.scene:a;return(n=a==null?void 0:a.scene)!=null&&n.isObject3D&&((i=a.animations)!=null&&i.length)&&(l.animations=a.animations),l.userData||(l.userData={}),l.userData.path=o,l.userData.loaderKey=this.key,this.loadedAssets.set(e,l),(s=this.manifest[e].callbacks)==null||s.forEach(c=>c(this.loadedAssets.get(e))),a}catch{return}}loadAssets(){return Promise.all([...this.assetsToLoad.keys()].map(e=>this.loadAsset(e)))}loadCriticalAssets(){return Promise.all([...this.assetsToLoad.keys()].map(e=>this.manifest[e].critical&&this.loadAsset(e)))}assetProgress(e,t){var i;this.assetsInfos.has(t)||this.assetsInfos.set(t,{size:e.total,progress:0});const n=this.assetsInfos.get(t);n.progress=e.loaded/n.size,(i=this.progressCallback)==null||i.call(this)}}var Wa;class cE extends ws{constructor(t){super(t);Pe(this,Wa);Wt(this,Wa,new mu)}load(t,n,i,s){F(this,Wa).load(t,o=>{try{n(JSON.parse(o))}catch(a){s!==void 0&&s(a);return}},i,s)}}Wa=new WeakMap;Zr.enabled=!0;var Gr,Vr,Xa,ts,jh,xm,Mm,eo;class uE{constructor({blockingLoad:e=!0,withPriority:t=!1,withCriticals:n=!1,isMobile:i=!1}={}){Pe(this,ts);Pe(this,Gr,new Map);Pe(this,Vr,new Map);Pe(this,Xa,0);Pe(this,eo,()=>{Wt(this,Xa,[...F(this,Gr).values()].map(e=>e.progress).reduce((e,t)=>e+t,0)/F(this,Gr).size),q.state.emit(Oe.LOADER_PROGRESS,F(this,Xa))});this.blockingLoad=e,this.withPriority=t,this.withCriticals=n,this.isMobile=i,this.loaders={textures:new Uc({manifest:Dc.textures,isMobile:this.isMobile,loader:new Md,assetsInfos:F(this,Gr),loadedAssets:F(this,Vr),progressCallback:F(this,eo),key:"textures"}),jsons:new Uc({manifest:Dc.jsons,isMobile:this.isMobile,loader:new cE,assetsInfos:F(this,Gr),loadedAssets:F(this,Vr),progressCallback:F(this,eo),key:"jsons"}),models:new Uc({manifest:Dc.models,isMobile:this.isMobile,loader:new Ry,assetsInfos:F(this,Gr),loadedAssets:F(this,Vr),progressCallback:F(this,eo),key:"models"}),envMaps:new Uc({manifest:Dc.envMaps,isMobile:this.isMobile,loader:new wy,assetsInfos:F(this,Gr),loadedAssets:F(this,Vr),progressCallback:F(this,eo),key:"envMaps"})}}async load(){this.withCriticals&&await _n(this,ts,xm).call(this),this.blockingLoad?await _n(this,ts,jh).call(this):this.withPriority?_n(this,ts,Mm).call(this):_n(this,ts,jh).call(this)}get(...e){return e.length>1?e.map(t=>F(this,Vr).get(t)):F(this,Vr).get(e[0])}}Gr=new WeakMap,Vr=new WeakMap,Xa=new WeakMap,ts=new WeakSet,jh=function(){return Promise.all(Object.values(this.loaders).map(e=>e.loadAssets())).then(()=>{q.state.emit(Oe.APP_LOADED)})},xm=function(){return Promise.all(Object.values(this.loaders).map(e=>e.loadCriticalAssets()))},Mm=function(){return Promise.all(Object.values(this.loaders).map(e=>[...e.assetsToLoad.entries()].map(([t,n])=>({loader:e,key:t,priority:n.priority||0}))).flat().sort((e,t)=>e.priority-t.priority).map(({loader:e,key:t})=>e.loadAsset(t))).then(()=>{q.state.emit(Oe.APP_LOADED)})},eo=new WeakMap;var Ya,qa,ys,Wr,Es,Ka,ja,$a,Za,Ja;class hE{constructor(){Pe(this,Ya,Date.now());Pe(this,qa,0);Pe(this,ys,16);Pe(this,Wr,{et:0,dt:0});Pe(this,Es,!1);Pe(this,Ka);Pe(this,ja,()=>{this.play()});Pe(this,$a,()=>{this.pause()});Pe(this,Za,()=>{q.state.off(Oe.ATTACH,F(this,ja)),q.state.off(Oe.DETACH,F(this,$a)),q.state.off(Oe.DESTROY,F(this,Za))});qt(this,"play",()=>{F(this,Es)||(Wt(this,Es,!0),F(this,Ja).call(this))});qt(this,"pause",()=>{F(this,Es)&&(cancelAnimationFrame(F(this,Ka)),Wt(this,Es,!1))});Pe(this,Ja,()=>{if(!F(this,Es))return;Wt(this,Ka,window.requestAnimationFrame(F(this,Ja)));const e=Date.now();Wt(this,ys,e-F(this,Ya)),Wt(this,qa,F(this,qa)+F(this,ys)),Wt(this,Ya,e),F(this,ys)>60&&Wt(this,ys,60),F(this,Wr).et=F(this,qa)*.001,F(this,Wr).dt=F(this,ys)*.001,q.state.emitThrottle(Oe.BEFORE_TICK,F(this,Wr)),q.state.emitThrottle(Oe.TICK,F(this,Wr)),q.state.emitThrottle(Oe.RENDER,F(this,Wr)),q.state.emitThrottle(Oe.AFTER_RENDER,F(this,Wr))});q.state.on(Oe.ATTACH,F(this,ja)),q.state.on(Oe.DETACH,F(this,$a)),q.state.on(Oe.DESTROY,F(this,Za))}}Ya=new WeakMap,qa=new WeakMap,ys=new WeakMap,Wr=new WeakMap,Es=new WeakMap,Ka=new WeakMap,ja=new WeakMap,$a=new WeakMap,Za=new WeakMap,Ja=new WeakMap;const dE=()=>{const r=new uE({isMobile:q.tools.viewport.isMobileAtLaunch}),e=new hE;return{assetsManager:r,ticker:e}};var Qa,el,tl,nl;class fE{constructor(){Pe(this,Qa,()=>{document.addEventListener("keydown",F(this,nl))});Pe(this,el,()=>{document.removeEventListener("keydown",F(this,nl))});Pe(this,tl,()=>{q.state.off(Oe.ATTACH,F(this,Qa)),q.state.off(Oe.DETACH,F(this,el)),q.state.off(Oe.DESTROY,F(this,tl))});Pe(this,nl,e=>{e.stopPropagation(),q.state.emit(Oe.KEY_DOWN,e.key,e)});q.state.on(Oe.ATTACH,F(this,Qa)),q.state.on(Oe.DETACH,F(this,el)),q.state.on(Oe.DESTROY,F(this,tl))}}Qa=new WeakMap,el=new WeakMap,tl=new WeakMap,nl=new WeakMap;var il,rl,sl,to,no,ol,al,qo,Vc;class pE{constructor(){Pe(this,qo);Pe(this,il,()=>{this.coordinates.dom.set(q.tools.viewport.width*.5,q.tools.viewport.height*.5),q.$app.addEventListener("mousemove",F(this,to)),q.$app.addEventListener("touchmove",F(this,to),{passive:!0}),q.$app.addEventListener("pointerdown",F(this,ol)),q.$app.addEventListener("mouseup",F(this,no)),q.$app.addEventListener("touchend",F(this,no)),q.$app.addEventListener("pointerleave",F(this,al))});Pe(this,rl,()=>{q.$app.removeEventListener("mousemove",F(this,to)),q.$app.removeEventListener("touchmove",F(this,to)),q.$app.removeEventListener("pointerdown",F(this,ol)),q.$app.removeEventListener("mouseup",F(this,no)),q.$app.removeEventListener("touchend",F(this,no)),q.$app.removeEventListener("pointerleave",F(this,al))});Pe(this,sl,()=>{q.state.off(Oe.ATTACH,F(this,il)),q.state.off(Oe.DETACH,F(this,rl)),q.state.off(Oe.DESTROY,F(this,sl))});Pe(this,to,e=>{this.isTouch?e.touches&&e.touches.length>0&&_n(this,qo,Vc).call(this,e.touches[0].clientX,e.touches[0].clientY):_n(this,qo,Vc).call(this,e.clientX,e.clientY),this.isTouch||q.state.emit(Oe.POINTER_MOVE,this.coordinates,e)});Pe(this,no,e=>{this.isDown&&(this.previousCoordinates.webgl.copy(this.coordinates.webgl),this.previousCoordinates.dom.copy(this.coordinates.dom),this.isDown=!1,q.state.emit(Oe.POINTER_UP,this.coordinates,e))});Pe(this,ol,e=>{if(!this.isDown){switch(e.pointerType){case"mouse":this.isTouch=!1;break;case"touch":this.isTouch=!0;break;case"pen":this.isTouch=!0;break}_n(this,qo,Vc).call(this,e.clientX,e.clientY),this.isDown=!0,q.state.emit(Oe.POINTER_DOWN,this.coordinates,e)}});Pe(this,al,e=>{this.isTouch||(this.isDown=!1,q.state.emit(Oe.POINTER_UP,this.coordinates,e))});this.isTouch=!!(window.matchMedia("(pointer: coarse)").matches||typeof window.ontouchstart=="function"||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),this.isDown=!1,this.coordinates={webgl:new $e,dom:new $e},this.previousCoordinates={webgl:this.coordinates.webgl.clone(),dom:this.coordinates.dom.clone()},q.state.on(Oe.ATTACH,F(this,il)),q.state.on(Oe.DETACH,F(this,rl)),q.state.on(Oe.DESTROY,F(this,sl))}}il=new WeakMap,rl=new WeakMap,sl=new WeakMap,to=new WeakMap,no=new WeakMap,ol=new WeakMap,al=new WeakMap,qo=new WeakSet,Vc=function(e,t){this.previousCoordinates.dom.copy(this.coordinates.dom),this.previousCoordinates.webgl.copy(this.coordinates.webgl),this.coordinates.webgl.set(e/q.tools.viewport.width*2-1,-(t/q.tools.viewport.height)*2+1),this.coordinates.dom.set(e,t)};var Xr,Ko;class mE{constructor(){Pe(this,Xr);Pe(this,Ko);Wt(this,Xr,document.createElement("canvas")),F(this,Xr).width=F(this,Xr).height=256,Wt(this,Ko,F(this,Xr).getContext("2d"));const t=F(this,Ko).getImageData(0,0,256,256);t.data.forEach((n,i)=>{t.data[i]=Math.round(Math.random()*255)}),F(this,Ko).putImageData(t,0,0),this.texture=new cp(F(this,Xr)),this.texture.wrapS=this.texture.wrapT=Mr,this.texture.minFilter=vn,this.texture.magFilter=vn,this.nearestTexture=new cp(F(this,Xr)),this.nearestTexture.wrapS=this.nearestTexture.wrapT=Mr,this.nearestTexture.minFilter=Vn,this.nearestTexture.magFilter=Vn}}Xr=new WeakMap,Ko=new WeakMap;const gE="production",_E=typeof window<"u"&&new URLSearchParams(window.location.search),vE=_E&&gE==="development",Sp={tablet:768,desktop:1024},Fi={uTime:{value:0},uScrollProgress:{value:0},uGradientScroll:{value:0},uGradientProgress:{value:0},tMouseComputation:{value:null}},qi={uRatio:{value:1},uDPR:{value:1},uResolution:{value:new $e}};var io,Cn,ll,cl,ul,eu,ho,$h,Sm;class xE{constructor(){Pe(this,ho);Pe(this,io);Pe(this,Cn,{width:window.innerWidth,height:window.innerHeight,dpr:window.devicePixelRatio,ratio:1,breakpoint:"mobile"});Pe(this,ll,()=>{F(this,io).observe(q.$wrapper)});Pe(this,cl,()=>{F(this,io).unobserve(q.$wrapper)});Pe(this,ul,()=>{F(this,io).disconnect(),q.state.off(Oe.ATTACH,F(this,ll)),q.state.off(Oe.DETACH,F(this,cl)),q.state.off(Oe.DESTROY,F(this,ul))});Pe(this,eu,e=>{let t,n;if(e[0].contentBoxSize){const i=Array.isArray(e[0].contentBoxSize)?e[0].contentBoxSize[0]:e[0].contentBoxSize;t=i.inlineSize,n=i.blockSize}else t=e[0].contentRect.width,n=e[0].contentRect.height;_n(this,ho,$h).call(this,t,n),q.state.emit(Oe.RESIZE,this.infos),q.state.emit(Oe.AFTER_RESIZE,this.infos)});const e=q.$wrapper.getBoundingClientRect(),t=Math.min(window.innerWidth,e.width),n=e.height;_n(this,ho,$h).call(this,t,n),typeof window<"u"&&Wt(this,io,new ResizeObserver(F(this,eu))),q.state.on(Oe.ATTACH,F(this,ll)),q.state.on(Oe.DETACH,F(this,cl)),q.state.on(Oe.DESTROY,F(this,ul)),this.isMobileAtLaunch=this.breakpoint!=="desktop"}get infos(){return F(this,Cn)}get width(){return F(this,Cn).width}get height(){return F(this,Cn).height}get dpr(){return F(this,Cn).dpr}get ratio(){return F(this,Cn).ratio}get breakpoint(){return F(this,Cn).breakpoint}}io=new WeakMap,Cn=new WeakMap,ll=new WeakMap,cl=new WeakMap,ul=new WeakMap,eu=new WeakMap,ho=new WeakSet,$h=function(e,t){F(this,Cn).width=e,F(this,Cn).height=t,F(this,Cn).dpr=Math.min(2,window.devicePixelRatio),F(this,Cn).ratio=e/t,F(this,Cn).breakpoint=window.innerWidth<Sp.tablet?"mobile":window.innerWidth<Sp.desktop?"tablet":"desktop",_n(this,ho,Sm).call(this)},Sm=function(){qi.uRatio.value=F(this,Cn).ratio,qi.uDPR.value=F(this,Cn).dpr,qi.uResolution.value.set(F(this,Cn).width*F(this,Cn).dpr,F(this,Cn).height*F(this,Cn).dpr)};const ME=()=>{const r=new pE,e=new xE,t=new fE,n=new mE;return{mouse:r,viewport:e,keyboard:t,noise:n}},bd=r=>{r.traverse(e=>{var t,n,i,s,o,a,l,c,u;e.material&&((t=e.material.map)==null||t.dispose(),(n=e.material.normalMap)==null||n.dispose(),(i=e.material.alphaMap)==null||i.dispose(),(s=e.material.aoMap)==null||s.dispose(),(o=e.material.specularMap)==null||o.dispose(),(a=e.material.metalnessMap)==null||a.dispose(),(l=e.material.emissiveMap)==null||l.dispose(),e.material.dispose(),e.material.uniforms&&Object.values(e.material.uniforms).forEach(h=>{var f;(f=h.value)!=null&&f.isTexture&&h.value.dispose()}),(c=e.userData)!=null&&c.uniforms&&Object.values(e.userData.uniforms).forEach(h=>{var f;(f=h.value)!=null&&f.isTexture&&h.value.dispose()})),(u=e.geometry)==null||u.dispose()})},ym=r=>r==null?null:r.scrollHeight>r.clientHeight||r.scrollWidth>r.clientWidth?r:ym(r.parentNode),SE={keyNumber:{hoverScale:.1,randomCellFade:0,backgroundOpacity:0,backgroundGrid:0,mouseRadius:.7,hoverRadius:1.5,gridScale:60},browse:{hoverScale:.03,randomCellFade:.5978,backgroundOpacity:1,backgroundGrid:.4565,mouseRadius:2,hoverRadius:2,gridScale:90,color:"#7f684c",backgroundColor:"#727272",backgroundRadius:.95},card:{hoverScale:.07,gridScale:70,backgroundColor:"#1A1A1A",backgroundGrid:.7,backgroundOpacity:1,hoverPosition:[.5,1],mouseRadius:1,hoverRadius:1.5},office:{hoverScale:.05,randomCellFade:0,backgroundOpacity:0,backgroundGrid:0,mouseRadius:1,hoverRadius:1.5,gridScale:45,hoverPosition:[1,.5]},methodology:{hoverScale:.01,gridScale:60,backgroundGrid:1,backgroundOpacity:1,mouseRadius:1,hoverRadius:.7,hoverPosition:[1,.5],backgroundRadius:.6,backgroundPosition:[1,.5],randomCellFade:.2,color:"#666"},itemCard:{hoverScale:.07,gridScale:60,backgroundGrid:0,backgroundOpacity:0,hoverRadius:1,hoverPosition:[.5,1],mouseRadius:.9,randomCellFade:.4},itemEmpty:{hoverScale:.07,gridScale:60,backgroundGrid:1,backgroundOpacity:.5,hoverRadius:1,hoverPosition:[.5,.5],backgroundRadius:.8,backgroundPosition:[.5,.5],color:"#6f6e6e",borderFade:0,mouseRadius:.9891,borderRadius:1,randomCellFade:.1,backgroundColor:"#000000"},newslistingAll:{hoverScale:.03,gridScale:50,backgroundGrid:0,backgroundOpacity:0,hoverRadius:1,hoverPosition:[.5,0],mouseRadius:.6522},footer:{hoverScale:.0109,gridScale:20,backgroundGrid:1,backgroundOpacity:1,hoverRadius:1,hoverPosition:[.5,.5],backgroundRadius:1,backgroundPosition:[.5,.5],color:"#626262",borderFade:0,mouseRadius:.9891,borderRadius:1,randomCellFade:.087},hero:{hoverScale:.05,gridScale:100,backgroundGrid:1,backgroundOpacity:.2,hoverRadius:1,hoverPosition:[.5,.5],backgroundRadius:1,backgroundPosition:[.5,.5],color:"#626262",borderFade:0,mouseRadius:1,borderRadius:0,randomCellFade:.4,backgroundColor:"#454545"},officeEmpty:{hoverScale:.03,gridScale:40,backgroundGrid:1,backgroundOpacity:.6,hoverRadius:1,hoverPosition:[.5,.5],backgroundRadius:.9,backgroundPosition:[.5,.5],color:"#5f5e5e",borderFade:0,mouseRadius:.9,borderRadius:0,randomCellFade:.3,backgroundColor:"#000000"},home:{position0:[0,-.4],size0:[1.5,.5],position1:[.75,.08],size1:[.53,.48],fade1:1,position2:[-.42,.13],size2:[.69,.55],fade2:1,position3:[.56,.42],size3:[.53,.55],fade3:1,position4:[.22,.22],size4:[.48,.89],color0:"#9b28c8",color1:"#805cc8",color2:"#a629ff",color3:"#bb6bff",color4:"#9700e2",fade0:.5,fade4:1.14,intensity0:1,rotation4:-.34},logo:{hoverScale:.0435,gridScale:60,backgroundColor:"#393939",backgroundGrid:.5,backgroundOpacity:.8,hoverPosition:[.5,1],mouseRadius:1,hoverRadius:1.4,color:"#626262",borderRadius:"16",randomCellFade:.4},"logo-white":{hoverScale:.0435,gridScale:60,backgroundColor:"#393939",backgroundGrid:.5,backgroundOpacity:.8,hoverPosition:[.5,1],mouseRadius:1,hoverRadius:1.4,color:"#626262",borderRadius:"16",randomCellFade:.4},itemRole:{hoverScale:.07,gridScale:60,backgroundGrid:0,backgroundOpacity:0,hoverRadius:1,hoverPosition:[.5,0],mouseRadius:.9,randomCellFade:.4}},Ad={materials:SE},yE=Math.PI/180;function EE(r,e,t){return Math.max(e,Math.min(t,r))}function UT(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function TE(r,e,t){return(1-t)*r+t*e}function Jc(r,e,t,n){return TE(r,e,1-Math.exp(-t*n))}function yp(r){return r*yE}const Ep=()=>{},Em={mouse:!0,touch:!0,minX:Number.NEGATIVE_INFINITY,minY:Number.NEGATIVE_INFINITY,maxX:Number.POSITIVE_INFINITY,maxY:Number.POSITIVE_INFINITY,passive:!0,rubber:!0,preventDefault:!1,cancelPointerEvents:!0},Tp=r=>{const e={...Em,...typeof r=="function"?r():r};return e.preventDefault&&(e.passive=!1),e},lh=r=>"TouchEvent"in window&&r instanceof TouchEvent?{x:r.changedTouches[0].clientX,y:r.changedTouches[0].clientY}:{x:r.clientX,y:r.clientY};var ro,Ui,so;class bE{constructor(e,t,n){qt(this,"state",{event:null,target:null,currentTarget:null,active:!1,first:!1,last:!1,delta:{x:0,y:0},direction:{x:0,y:0},pointer:{x:0,y:0},movement:{x:0,y:0},offset:{x:0,y:0},velocity:{x:0,y:0},tap:!0,canceled:!1,cancel:Ep});Pe(this,ro,!1);Pe(this,Ui,Em);Pe(this,so,!1);qt(this,"config");qt(this,"element");qt(this,"handler");qt(this,"drag",e=>{var m,x,M,g;if(F(this,ro))return;Wt(this,ro,!0),(x=(m=F(this,Ui)).beforeStart)==null||x.call(m,this.state),Wt(this,Ui,Tp(this.config));const t=this.state,n=F(this,Ui);n.preventDefault&&e.preventDefault(),t.target=e.target,t.currentTarget=e.currentTarget,t.active=!1,t.tap=!0;const i=lh(e),s={x:0,y:0},o={x:0,y:0};let a=i,l,c;((M=n.from)==null?void 0:M.x)!==void 0&&(t.offset.x=n.from.x),((g=n.from)==null?void 0:g.y)!==void 0&&(t.offset.y=n.from.y),t.currentTarget.style.userSelect="none",t.currentTarget.style.webkitUserSelect="none";const u=p=>{const R=a;if(a=lh(p),t.direction.x=Math.sign(a.x-R.x),t.direction.y=Math.sign(a.y-R.y),t.active){t.event=p,t.first=!1,t.pointer=a,s.x=t.pointer.x-i.x,s.y=t.pointer.y-i.y;const T={...t.offset};t.offset.x=n.rubber?Yd(o.x+s.x,n.minX,n.maxX):ic(o.x+s.x,n.minX,n.maxX),t.offset.y=n.rubber?Yd(o.y+s.y,n.minY,n.maxY):ic(o.y+s.y,n.minY,n.maxY),c=p.timeStamp-l,t.velocity.x=t.delta.x/c,t.velocity.y=t.delta.y/c,t.delta.x=t.offset.x-T.x,t.delta.y=t.offset.y-T.y,t.movement.x+=t.delta.x,t.movement.y+=t.delta.y,l=p.timeStamp,this.handler(t)}else{const T=Math.abs(a.x-i.x),C=Math.abs(a.y-i.y);if(n.axis==="x"&&T<C){f();return}if(n.axis==="y"&&C<T){f();return}jm(T,C)>3&&h(p)}},h=p=>{t.event=p,t.active=!0,t.tap=!1,t.first=!0,t.last=!1,t.canceled=!1,t.delta={x:0,y:0},t.velocity={x:0,y:0},t.pointer=lh(p),t.movement={x:0,y:0},o.x=t.offset.x,o.y=t.offset.y,l=p.timeStamp,this.handler(t)},f=()=>{var R;Wt(this,ro,!1);const p=t.active;t.last=p,t.active=!1,t.offset.x=ic(t.offset.x,n.minX,n.maxX),t.offset.y=ic(t.offset.y,n.minY,n.maxY),t.currentTarget.style.userSelect="",t.currentTarget.style.webkitUserSelect="",window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f),window.removeEventListener("touchcancel",f),window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",f),(p||t.tap)&&this.handler(t),(R=n.afterEnd)==null||R.call(n,t)};e instanceof MouseEvent?(window.addEventListener("mousemove",u,{passive:!1}),window.addEventListener("mouseup",f,{passive:!1})):(window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",f,{passive:!1}),window.addEventListener("touchcancel",f,{passive:!1})),t.cancel=()=>{t.canceled||(Wt(this,ro,!1),t.canceled=!0,setTimeout(()=>f(),0))}});qt(this,"click",e=>{!this.state.tap&&e.detail>0&&(e.preventDefault(),e.stopPropagation())});qt(this,"clean",()=>{var e,t,n;F(this,so)&&(F(this,Ui).touch&&((e=this.element)==null||e.removeEventListener("touchstart",this.drag)),F(this,Ui).mouse&&((t=this.element)==null||t.removeEventListener("mousedown",this.drag)),(n=this.element)==null||n.removeEventListener("click",this.click,!0),Wt(this,so,!1))});qt(this,"init",()=>{var e,t,n;F(this,so)||(Wt(this,Ui,Tp(this.config)),F(this,Ui).touch&&((e=this.element)==null||e.addEventListener("touchstart",this.drag,{passive:F(this,Ui).passive})),F(this,Ui).mouse&&((t=this.element)==null||t.addEventListener("mousedown",this.drag,{passive:F(this,Ui).passive})),(n=this.element)==null||n.addEventListener("click",this.click,!0),Wt(this,so,!0))});this.element=e,this.handler=t||Ep,this.config=n}}ro=new WeakMap,Ui=new WeakMap,so=new WeakMap;let AE=0;function Bi(r,e,t){const n=()=>{};return{c:++AE,shader:r,use:s=>{const o=s.material||s;return o[e]=r,o.needsUpdate=!0,s},unuse:n,clear:n}}const wE="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position,1.0);}",Tm=Bi(wE,"vertexShader"),RE=`precision highp float;uniform sampler2D tLast;uniform vec2 uRayUv;uniform float uSpeed;varying vec2 vUv;
#define PI 3.141592
#define SPEED_FACTOR .02
#define MAX_SPEED .003
#define RESOLUTION 0.002
void main(){vec2 rUv=vec2((vUv.x-.5)*2.+.5,vUv.y);vec2 rayUv=vec2((uRayUv.x-.5)*2.+.5,uRayUv.y);float distFromRayUv=length(rUv-rayUv);float oppositeDistFromRayUv=length(rUv-vec2(rayUv.x-2.,rayUv.y));float speed=smoothstep(0.,MAX_SPEED,uSpeed)*SPEED_FACTOR;float circle=smoothstep(.08+speed,0.,distFromRayUv)*.06;circle+=smoothstep(.08+speed,0.,oppositeDistFromRayUv)*.03;float color=circle;float remanance=0.;remanance+=texture2D(tLast,vUv+vec2(RESOLUTION,0.)).r*.25;remanance+=texture2D(tLast,vUv+vec2(-RESOLUTION,0.)).r*.25;remanance+=texture2D(tLast,vUv+vec2(0,RESOLUTION)).r*.25;remanance+=texture2D(tLast,vUv+vec2(0,-RESOLUTION)).r*.25;color+=remanance*.99;color-=.002;gl_FragColor=vec4(vec3(color),1.);}`,CE=Bi(RE,"fragmentShader");class PE extends _i{constructor(e={}){super(e),CE.use(this),Tm.use(this)}}var Yr,qr,hl,oo,ao,dl,ns,Zh,bm,Am,fl,pl;class IE extends Nn{constructor(t,{rtWidth:n=512,rtHeight:i=512}={}){super();Pe(this,ns);Pe(this,Yr);Pe(this,qr);Pe(this,hl);Pe(this,oo);Pe(this,ao,[]);Pe(this,dl,new hy);Pe(this,fl,()=>{});Pe(this,pl,({dt:t})=>{var n;F(this,dl).setFromCamera(q.tools.mouse.coordinates.webgl,q.webgl.camera),F(this,ao).length=0,F(this,dl).intersectObject(this.target,!1,F(this,ao)),F(this,ao).length===1?this.material.uniforms.uRayUv.value.copy(F(this,ao)[0].uv):this.material.uniforms.uRayUv.value.set(-1,-1),this.material.uniforms.uSpeed.value=Jc(0,(n=q.tools.mouse.coordinates)==null?void 0:n.webgl.distanceTo(q.tools.mouse.previousCoordinates.webgl),5,t),Xd(this,oo)._++%2===0?(q.webgl.renderer.setRenderTarget(F(this,Yr)),this.material.uniforms.tLast.value=F(this,qr).texture):(q.webgl.renderer.setRenderTarget(F(this,qr)),this.material.uniforms.tLast.value=F(this,Yr).texture),q.webgl.renderer.clear(),q.webgl.renderer.render(this,F(this,hl)),q.webgl.renderer.setRenderTarget(null)});this.target=t,Wt(this,Yr,_n(this,ns,Zh).call(this,{width:n,height:i})),Wt(this,qr,_n(this,ns,Zh).call(this,{width:n,height:i})),Wt(this,oo,0),this.geometry=_n(this,ns,Am).call(this),this.material=_n(this,ns,bm).call(this),Wt(this,hl,new da(-1,1,1,-1,0,1))}attach(){q.state.on(Oe.POINTER_MOVE,F(this,fl)),q.state.on(Oe.TICK,F(this,pl))}detach(){q.state.off(Oe.POINTER_MOVE,F(this,fl)),q.state.off(Oe.TICK,F(this,pl))}destroy(){F(this,Yr).dispose(),F(this,qr).dispose(),bd(this)}get texture(){return F(this,oo)%2===0?F(this,Yr).texture:F(this,qr).texture}get currentRenderTarget(){return F(this,oo)%2===0?F(this,Yr):F(this,qr)}}Yr=new WeakMap,qr=new WeakMap,hl=new WeakMap,oo=new WeakMap,ao=new WeakMap,dl=new WeakMap,ns=new WeakSet,Zh=function({width:t,height:n}){const i=new es(t,n);return i.texture.wrapT=i.texture.wrapS=Mr,i},bm=function(){return new PE({uniforms:{...Fi,tLast:{value:null},uRayUv:{value:new $e(-1,-1)},uSpeed:{value:0}}})},Am=function(){return new Oi().setAttribute("position",new $n([-1,3,0,-1,-1,0,3,-1,0],3)).setAttribute("uv",new $n([0,2,0,0,2,0],2))},fl=new WeakMap,pl=new WeakMap;const LE=`precision highp float;uniform float uTime;uniform float uPointSize;uniform vec3 uColor;varying vec3 vPosition,vModelPosition;varying float vPOI;varying float vRand;varying float vAlpha;varying float vHover;
#include <common>
#include <dithering_pars_fragment>
float rectangle(vec2 uv,float padding,float fade){float alpha=1.;alpha*=smoothstep(padding,padding+fade,uv.x);alpha*=1.-smoothstep(1.-padding-fade,1.-padding,uv.x);alpha*=smoothstep(padding,padding+fade,uv.y);alpha*=1.-smoothstep(1.-padding-fade,1.-padding,uv.y);return alpha;}void main(){float distAttenuation=vModelPosition.z/uPointSize;float distanceFromFar=smoothstep(-.7,1.,distAttenuation);float distFromCenter=length(gl_PointCoord.xy-.5);float fade=smoothstep(.5,distanceFromFar*.49,distFromCenter);float alpha=vAlpha;alpha*=distanceFromFar*mix(fade,1.,distanceFromFar);alpha*=mix(1.,smoothstep(.5,.0,distFromCenter),smoothstep(.7,.3,distAttenuation));if(alpha<=0.01)discard;float glowEnergy=smoothstep(.0,.4,sin(uTime*2.+(vPosition.z)*50.)*.25+.5)*1.5;float farGlow=smoothstep(.5,0.,distAttenuation);float poiGlow=rectangle(gl_PointCoord.xy,.4-glowEnergy*.1-smoothstep(0.,-1.,distAttenuation)*.2,.05+farGlow*.1)+rectangle(gl_PointCoord.xy,0.,glowEnergy*.25)*.25;alpha*=mix(1.,poiGlow,vPOI);gl_FragColor=vec4(mix(uColor+vHover*.5,vec3(1.),vPOI),alpha*(1.+vPOI));gl_FragColor.rgb=dithering(gl_FragColor.rgb);}`,DE=Bi(LE,"fragmentShader"),UE=`#define PI 3.14159265359
attribute float aPOI;uniform float uTime;uniform float uDPR;uniform float uPointSize;uniform float uFadeY;uniform sampler2D tHover;varying float vAlpha;varying float vPOI;varying float vRand;varying float vHover;varying vec3 vMvPosition;varying vec3 vPosition,vModelPosition;vec2 positionToUV(vec3 position){float lat=asin(position.y);float lng=atan(position.x,position.z)+(PI*0.5);float u=(lat/(PI*0.5))+0.5;float v=(lng/PI)*0.5;return vec2(v,u);}float rand(float seed){return fract(abs(sin(seed))*43758.5453123);}mat3 getRotationMatrix(mat4 modelMatrix){return mat3(modelMatrix);}void main(){vec3 pos=position;vec3 normal=normalize(pos);vec2 uv=positionToUV(pos);vHover=texture2D(tHover,uv).r;vec4 modelPosition=modelMatrix*vec4(pos,1.0);vec4 mvPosition=viewMatrix*modelPosition;float poiSizeFactor=aPOI*8.;const float farSize=40.;float distAttenuation=modelPosition.z/uPointSize;float sizeAttenuation=farSize*smoothstep(1.,-1.,distAttenuation);gl_PointSize=(uPointSize+poiSizeFactor+sizeAttenuation)*uDPR;gl_Position=projectionMatrix*mvPosition;vMvPosition=mvPosition.xyz;vPosition=pos;vModelPosition=modelPosition.xyz;vPOI=aPOI;vec3 localRotatedPos=getRotationMatrix(modelMatrix)*pos;vRand=rand(float(gl_VertexID));float randFade=min(1.,vRand+.3);vAlpha=mix(randFade,1.,vPOI)*smoothstep(-.1+uFadeY,.2+uFadeY,localRotatedPos.y)*smoothstep(-1.,1.,distAttenuation);}`,NE=Bi(UE,"vertexShader");class FE extends _i{constructor(e={}){super({uniforms:{...e==null?void 0:e.uniforms,uTime:Fi.uTime},depthWrite:!1,depthTest:!1,transparent:!0,dithering:!0}),DE.use(this),NE.use(this)}}var ca,wm,Rm;const Ms=class Ms extends lm{constructor(e,t,n,i){var o;super();const s=btoa(JSON.stringify(t));Ms.geometries.get(s)||Ms.geometries.set(s,_n(o=Ms,ca,wm).call(o,e.clone(),t)),this.geometry=Ms.geometries.get(s),this.material=new FE({uniforms:{...n,uDPR:qi.uDPR,uPointSize:{value:1},tHover:{value:i}}})}};ca=new WeakSet,wm=function(e,t=[]){const n=e.getAttribute("position"),i=n.array,s=t.map(c=>_n(this,ca,Rm).call(this,c,i)),o=[],a=[];for(let c=0;c<i.length;c+=3){const u=[i[c],i[c+1],i[c+2]],h=c/3;s.includes(h)?o.push(...u):a.push(...u)}e.setAttribute("position",new $n([...a,...o],3));const l=new C_(new Uint8Array(n.count).fill(0),1);for(let c=a.length/3;c<l.count;c++)l.array[c]=1;return e.setAttribute("aPOI",l),e},Rm=function(e,t){let n=1/0,i=-1;const s=new Y;for(let o=0;o<t.length;o+=3){const l=s.set(t[o],t[o+1],t[o+2]).distanceTo(e);l<n&&(n=l,i=o/3)}return i},Pe(Ms,ca),qt(Ms,"geometries",new Map);let Jh=Ms;const OE=`precision highp float;uniform vec3 uColor;varying float vFade;varying vec3 vNormal;varying vec3 vPosition;
#include <common>
#include <dithering_pars_fragment>
void main(){float distFromCenter=length(vNormal.xy);float alpha=smoothstep(.0,1.,distFromCenter)*.25;alpha*=vFade;gl_FragColor=vec4(uColor,alpha);gl_FragColor.rgb=dithering(gl_FragColor.rgb);}`,BE=Bi(OE,"fragmentShader"),kE="uniform float uFadeY;varying float vFade;varying vec3 vNormal;varying vec3 vPosition;mat3 getRotationMatrix(mat4 modelMatrix){return mat3(modelMatrix);}void main(){vec4 modelPosition=modelMatrix*vec4(position,1.0);vPosition=position;vec4 mvPosition=viewMatrix*modelPosition;vec3 transformedNormal=normalMatrix*normal;vNormal=normalize(transformedNormal);gl_Position=projectionMatrix*mvPosition;vec3 localRotatedPos=getRotationMatrix(modelMatrix)*position;vFade=smoothstep(-.1+uFadeY,.2+uFadeY,localRotatedPos.y);}",zE=Bi(kE,"vertexShader");class HE extends _i{constructor(e={}){super({uniforms:{...e==null?void 0:e.uniforms},transparent:!0,dithering:!0}),BE.use(this),zE.use(this)}}const Ho=class Ho extends Nn{constructor(e){Ho.geometry||(Ho.geometry=new vd(.51,32,16)),super(Ho.geometry,new HE({uniforms:e})),this.renderOrder=-1/0}};qt(Ho,"geometry");let Qh=Ho;const GE=new da;class gu extends hn{constructor(t,n=new $e,i=new $e,s={value:1},o=new $e,a={value:0},l={}){super();qt(this,"fadeUniform",{value:1});this.element=t,this.rectangle={position:n,size:i,ratio:s,innerScroll:o,hoverProgress:a},this.translateY=0,this.params=l,this.tick=this.tick.bind(this),this.frustumCulled=!1}preRender(){q.webgl.renderer.compile(this,GE)}show(){q.webgl.scene.add(this),q.state.on(Oe.TICK,this.tick)}hide(){q.webgl.scene.remove(this),q.state.off(Oe.TICK,this.tick)}tick(){this.scale.x=this.rectangle.size.x,this.scale.y=this.rectangle.size.y,this.position.x=this.rectangle.position.x-this.rectangle.innerScroll.x,this.position.y=this.rectangle.position.y+Fi.uScrollProgress.value+this.rectangle.innerScroll.y+this.translateY*this.scale.y*2}dispose(){this.hide(),bd(this)}resize(){}set fade(t){this.fadeUniform.value=t}get fade(){return this.fadeUniform.value}}var tu,nu,Cm;class VE extends gu{constructor(t,n,i,s,o,a,l){var u,h,f,m;super(t,n,i,s,o,a,l);Pe(this,nu);Pe(this,tu,({delta:t})=>{this.dragRotationY+=t.x/q.tools.viewport.width*Math.PI*2,this.dragRotationX+=t.y/q.tools.viewport.height*Math.PI*2,this.dragRotationX=EE(this.dragRotationX,-Math.PI*.3,Math.PI*.3)});this.pointsEl=Array.from(this.element.querySelectorAll("[data-point]")),this.pointsPositions=(u=this.pointsEl)==null?void 0:u.map(x=>_n(this,nu,Cm).call(this,parseFloat(x.dataset.latitude),parseFloat(x.dataset.longitude))),this.commonUniforms={uColor:{value:new lt(((h=Ad.materials.Globe)==null?void 0:h.color)||10450170)},uFadeY:{value:parseFloat(l.fadeY)||0}},(f=q.debug)==null||f.mapping.add(this,"Globe",1),this.globeSphere=new Qh(this.commonUniforms),q.tools.mouse.isTouch||(this.globeHover=new IE(this.globeSphere));const c=q.core.assetsManager.get("globe").children[0].clone();this.globePoints=new Jh(c.geometry,this.pointsPositions,this.commonUniforms,(m=this.globeHover)==null?void 0:m.texture),this.globePoints.position.copy(c.position),this.globePoints.scale.copy(c.scale),this.group=new Ts,this.group.add(this.globePoints,this.globeSphere),this.add(this.group),this.group.scale.setScalar(2*parseFloat(l.scale)),this.animatedRotation=0,this.startRotation=-Math.PI*.55,this.dragRotationY=this.lerpedDragRotationY=0,this.dragRotationX=this.lerpedDragRotationX=0,this.tl=uu.timeline({scrollTrigger:{trigger:this.element,scrub:1,markers:!1}}),this.tl.fromTo(this,{animatedRotation:0},{animatedRotation:Math.PI*.5,duration:1}),this.dragger=new bE(this.element,F(this,tu),{})}show(){var t;this.currentTime=0,this.lerpedDragRotationX=this.lerpedDragRotationY=this.dragRotationX=this.dragRotationY=0,this.dragger.init(),(t=this.globeHover)==null||t.attach(),super.show()}hide(){var t;this.dragger.clean(),(t=this.globeHover)==null||t.detach(),super.hide()}tick({dt:t}){this.currentTime+=t,this.lerpedDragRotationY=Jc(this.lerpedDragRotationY,this.dragRotationY,5,t),this.lerpedDragRotationX=Jc(this.lerpedDragRotationX,this.dragRotationX,5,t),this.group.rotation.y=this.currentTime*.03+this.animatedRotation+this.lerpedDragRotationY+this.startRotation,this.group.rotation.x=this.lerpedDragRotationX,this.scale.setScalar(Math.max(this.rectangle.size.x,this.rectangle.size.y)),this.globePoints.material.uniforms.uPointSize.value=this.scale.x,this.position.x=this.rectangle.position.x-this.rectangle.innerScroll.x+this.rectangle.size.x,this.position.y=this.rectangle.position.y+Fi.uScrollProgress.value+this.rectangle.innerScroll.y-this.rectangle.size.y}dispose(){var t;super.dispose(),this.tl.kill(),this.dragger.clean(),(t=this.globeHover)==null||t.destroy()}get maxLerp(){return q.webgl.domSync.isTouch?10:100}}tu=new WeakMap,nu=new WeakSet,Cm=function(t,n,i){i=i||new Y;const s=yp(t),o=Math.PI*.5+yp(n);return i.set(Math.cos(s)*Math.sin(o),Math.sin(s),Math.cos(s)*Math.cos(o)),i};var ml,gl,_l;class Hl extends bS{constructor(){super();Pe(this,ml,()=>{var n;(n=q.debug)==null||n.mapping.add(this,"Outliner",2);const t=q.core.assetsManager.get("noise");t.wrapS=t.wrapT=Mr});Pe(this,gl,()=>{var t;(t=q.debug)==null||t.mapping.remove(this)});Pe(this,_l,()=>{q.state.off(Oe.ATTACH,F(this,ml)),q.state.off(Oe.DETACH,F(this,gl)),q.state.off(Oe.DESTROY,F(this,_l)),bd(this)});q.state.on(Oe.ATTACH,F(this,ml)),q.state.on(Oe.DETACH,F(this,gl)),q.state.on(Oe.DESTROY,F(this,_l)),this.background=new lt().setStyle("#0e0e0e","srgb")}}ml=new WeakMap,gl=new WeakMap,_l=new WeakMap,qt(Hl,"quadGeometry",new Bl(2,2).deleteAttribute("normal").translate(1,-1,0));const WE=`struct Circle{vec2 position;vec2 size;vec3 color;float intensity;float fade;float rotation;};uniform Circle uCircles[CIRCLE_COUNT];uniform float uRatio;uniform float uTime;uniform vec2 uMouse,uMouse2;uniform vec2 uResolution;uniform float uViewportRatio;uniform float uGradientScroll;uniform float uGradientProgress;uniform sampler2D tNoise;varying vec2 vUv;mat2 rotation2d(float angle){float s=sin(angle);float c=cos(angle);return mat2(c,-s,s,c);}vec4 smoothCircle(Circle circle,vec2 uv){vec2 cUv=uv;cUv-=circle.position+.5;cUv=rotation2d(circle.rotation)*cUv;cUv+=circle.position+.5;cUv-=circle.position;cUv=(cUv-.5)/circle.size+.5;float dist=smoothstep(1.,1.-circle.fade,length(cUv-.5));vec3 color=dist*circle.color*circle.intensity;return vec4(color,length(color));}
#include <common>
#include <dithering_pars_fragment>
void main(){vec2 mouse=(uMouse+1.)*.5;vec2 mouse2=(uMouse2+1.)*.5;vec2 viewportUv=gl_FragCoord.xy/uResolution;float t=uTime+uGradientProgress*20.;float distFromMouse=length((viewportUv-mouse)*vec2(uViewportRatio,1.0));float distFromMouse2=length((viewportUv-mouse2)*vec2(uViewportRatio,1.0));vec2 uv=vUv;vec2 sUv=(uv-.5)*vec2(uRatio,1.)+.5;float noise=texture2D(tNoise,sUv).r;vec2 mouseDistort=mouse-viewportUv+vec2(cos(t*.5+sUv.y*.5)*.1,sin(sUv.x*.5+t*.5))*.5;vec2 mouse2Distort=mouse2-viewportUv+vec2(cos(t*1.+sUv.y*.5)*.1,sin(sUv.x*.5+t*.1))*.3;sUv+=mouseDistort*1.*smoothstep(1.,0.,distFromMouse);sUv+=mouse2Distort*.5*smoothstep(1.,0.,distFromMouse2);sUv+=vec2(sin(uGradientProgress+sUv.y*5.+t*.1)*.2,cos(uGradientProgress*2.+sUv.x*3.-t)*.1);vec4 circles=vec4(0.);for(int i=0;i<CIRCLE_COUNT;i++){float iF=float(i-CIRCLE_COUNT/2);circles+=smoothCircle(uCircles[i],(sUv+vec2(sin(t*.5*iF)*.05,cos(t*.5*iF)*.05)));}circles*=1.+smoothstep(.5,0.,distFromMouse2)*.5;circles*=1.+smoothstep(.2,0.,distFromMouse)*.25;circles=clamp(circles,0.,1.);float progress=smoothstep(0.,0.2,uGradientProgress);float distanceFromCenter=length(vUv-0.5);circles*=smoothstep(.5,.3,length((uv-.5)*.5+vec2(0.,.27+(sin(t+uv.x*10.)+.5)*.01)));gl_FragColor=vec4(circles.rgb*circles.a,circles.a);gl_FragColor.rgb=dithering(gl_FragColor.rgb);}`,XE=Bi(WE,"fragmentShader"),YE="varying vec2 vUv;void main(){vUv=uv;gl_Position=modelMatrix*vec4(position,1.0);}",qE=Bi(YE,"vertexShader");class KE extends _i{constructor(e={}){var t;super(e),XE.use(this),qE.use(this),(t=q.debug)==null||t.mapping.add(this,"Gradients",1),this.addEventListener("dispose",()=>{var n;(n=q.debug)==null||n.mapping.remove(this)})}}var ua,Pm,Im;class jE extends gu{constructor(t,n,i,s,o,a,l){var m;super(t,n,i,s,o,a,l);Pe(this,ua);qt(this,"progress",0);const c=5,u=Ad.materials[(l==null?void 0:l.config)||"home"],h={circles:Array.from({length:c}).map(()=>({position:[0,0],size:[.5,.5],color:"#af75fa",intensity:1,fade:1,rotation:0}))};this.resolvedParams=_n(this,ua,Im).call(this,l,u,h);const f=new KE({uniforms:{uTime:Fi.uTime,uGradientScroll:{value:0},uGradientProgress:{value:0},uResolution:qi.uResolution,uViewportRatio:qi.uRatio,uMouse:{value:q.webgl.lerpedMouse},uMouse2:{value:q.webgl.lerpedMouse2},uRatio:this.rectangle.ratio,uCircles:{value:this.resolvedParams.circles},tNoise:{value:q.core.assetsManager.get("noise")}},dithering:!0,defines:{CIRCLE_COUNT:c},name:((m=this.params)==null?void 0:m.config)||"Gradient"});this.add(new Nn(Hl.quadGeometry,f)),this.uniforms=f.uniforms,this.tl=_n(this,ua,Pm).call(this)}show(){super.show()}tick({dt:t}){super.tick(),this.tl.progress(this.progress),this.uniforms.uGradientProgress.value=Jc(this.uniforms.uGradientProgress.value,this.progress,5,t),this.position.y=this.rectangle.position.y+Fi.uScrollProgress.value+this.rectangle.innerScroll.y-this.uniforms.uGradientScroll.value,this.scale.y=1}}ua=new WeakSet,Pm=function(){const t=uu.timeline({paused:!0});return t.fromTo(this.uniforms.uCircles.value,{intensity:1},{intensity:0,stagger:{each:.05}},.95),t.add(()=>{},1),t},Im=function(t={},n={},i={}){const s={...i,...n,...t},o=s.circles||[],a={...t,...n};return Object.keys(a).forEach(l=>{const c=l.match(/(position|size|color|intensity|fade|rotation)(\d+)/);if(c){const[,u,h]=c,f=parseInt(h,10);o[f]||(o[f]={}),o[f][u]=a[l],delete s[l]}}),s.circles=o.map(({position:l,size:c,color:u,...h})=>({position:new $e().fromArray(l),size:new $e().fromArray(c),color:new lt(u),...h})),s};const $E=`precision highp float;
#define PI 3.141592653589793
//// GLOBALS ////
uniform vec2 uMouse,uMouse2,uMouseVelocity;uniform vec2 uResolution;uniform float uViewportRatio,uDPR;uniform float uTime;
//// RECTANGLE ////
uniform float uID;uniform float uRatio;uniform float uHoverProgress;uniform vec2 uSize;uniform float uFade;
//// CUSTOMIZABLE ////
uniform float uBorderRadius;uniform float uBorderFade;uniform float uGridScale;uniform float uRandomCellFade;uniform vec3 uColor;uniform float uHoverScale;uniform float uHoverRadius;uniform float uMouseRadius;uniform vec2 uHoverPosition;uniform float uBackgroundGrid;uniform float uBackgroundOpacity;uniform float uBackgroundRadius;uniform vec2 uBackgroundPosition;uniform vec3 uBackgroundColor;
//// TEXTURES ////
uniform sampler2D tNoise,tGrain;varying vec2 vUv;float roundedRect(vec2 rectSize,vec2 uv,float cornerRadius){vec2 aspect=rectSize/max(rectSize.x,rectSize.y);vec2 alphaUv=(uv-0.5);float borderRadius=min(cornerRadius,min(rectSize.x,rectSize.y)*0.5);vec2 offset=vec2(borderRadius)/rectSize;vec2 alphaXY=smoothstep(vec2(0.5-offset),vec2(0.5-offset-0.001),abs(alphaUv));float alpha=min(1.0,alphaXY.x+alphaXY.y);vec2 alphaUv2=abs(uv-0.5);float radius=borderRadius/max(rectSize.x,rectSize.y);alphaUv2=(alphaUv2-0.5)*aspect+radius;float roundAlpha=smoothstep(radius+0.001,radius,length(alphaUv2));alpha=min(1.0,alpha+roundAlpha);return alpha;}float rectangle(vec2 uv,float padding,float fade){float alpha=1.;alpha*=smoothstep(padding,padding+fade,uv.x);alpha*=1.-smoothstep(1.-padding-fade,1.-padding,uv.x);alpha*=smoothstep(padding,padding+fade,uv.y);alpha*=1.-smoothstep(1.-padding-fade,1.-padding,uv.y);return alpha;}vec3 saturation(vec3 rgb,float adjustment){const vec3 W=vec3(0.2125,0.7154,0.0721);vec3 intensity=vec3(dot(rgb,W));return mix(intensity,rgb,adjustment);}highp float rand(const in vec2 uv){const highp float a=12.9898,b=78.233,c=43758.5453;highp float dt=dot(uv.xy,vec2(a,b)),sn=mod(dt,PI);return fract(sin(sn)*c);}void main(){vec2 uv=vUv;vec2 viewportUv=gl_FragCoord.xy/uResolution;vec2 scale=uGridScale*vec2(uRatio,1.);vec2 mouse=(uMouse+1.)*.5;vec2 mouse2=(uMouse2+1.)*.5;float distFromMouse=length((viewportUv-mouse)*vec2(uViewportRatio,1.0));float distFromMouse2=length((viewportUv-mouse2)*vec2(uViewportRatio,1.0));float mouseGlow=smoothstep(uHoverProgress*uMouseRadius,0.,distFromMouse2);float mouseInnerGlow=smoothstep(uHoverProgress*uMouseRadius*.3,.0,distFromMouse);float hoverFade=smoothstep(uHoverRadius,0.,length(vUv-uHoverPosition));float backgroundFade=smoothstep(uBackgroundRadius,0.,length(vUv-uBackgroundPosition));float mouseHover=uHoverProgress*mouseGlow*hoverFade;scale*=1.-mouseInnerGlow*uHoverScale;vec2 gridUv=fract((uv-.5)*scale+.5);vec2 cell=floor((uv-.5)*scale+.5);float padding=.18;float rectangles=rectangle(gridUv,padding,.2+(2.-uDPR)*.05);vec2 noise0=texture2D(tNoise,cell*.001+vec2(uTime*0.001,-uTime*.03+uID)).rg*.3;float noise=texture2D(tNoise,cell*.005+vec2(uTime*.02,uTime*.05)+noise0-uID).r;noise*=texture2D(tNoise,cell*.001-vec2(uTime*0.001,uTime*.01)-noise0+uID).r;noise*=2.+rand(cell+uID)*4.;noise*=(1.-uHoverProgress*.75);rectangles*=mix(1.,(noise+mouseHover),uRandomCellFade);float alpha=roundedRect(uSize*uResolution,vUv,uBorderRadius*uDPR);alpha*=rectangle(vUv,0.,uBorderFade);alpha*=mix(rectangles*uBackgroundGrid*uBackgroundOpacity*backgroundFade,1.,mouseHover);alpha=min(1.,alpha);alpha*=uFade;vec3 color=mix(uBackgroundColor+rectangles*uBackgroundGrid*.2,uColor*rectangles,mouseHover);color+=rectangles*mouseInnerGlow*1.2*hoverFade*uColor;gl_FragColor=vec4(color,alpha);}`,ZE=Bi($E,"fragmentShader"),JE="varying vec2 vUv;void main(){vUv=uv;gl_Position=modelMatrix*vec4(position,1.0);}",QE=Bi(JE,"vertexShader");class eT extends _i{constructor(e={}){var t;super(e),ZE.use(this),QE.use(this),(t=q.debug)==null||t.mapping.add(this,"Grid",1),this.addEventListener("dispose",()=>{var n;(n=q.debug)==null||n.mapping.remove(this)})}}var iu,Lm;class tT extends gu{constructor(t,n,i,s,o,a,l){super(t,n,i,s,o,a,l);Pe(this,iu);const c=Ad.materials[(l==null?void 0:l.config)||"basic"],u={borderRadius:0,borderFade:0,gridScale:200,backgroundGrid:1,backgroundOpacity:1,hoverScale:0,hoverRadius:1,hoverPosition:[.5,.5],backgroundRadius:1,backgroundPosition:[.5,.5],randomCellFade:1,mouseRadius:.6,color:new lt("#af75fa"),backgroundColor:new lt("#1A1A1A")},h=_n(this,iu,Lm).call(this,l,c,u),f=new eT({uniforms:{uMouse:{value:q.webgl.lerpedMouse},uMouse2:{value:q.webgl.lerpedMouse2},uMouseVelocity:{value:q.webgl.lerpedMouseVelocity},uResolution:qi.uResolution,uViewportRatio:qi.uRatio,uDPR:qi.uDPR,uTime:Fi.uTime,uRatio:this.rectangle.ratio,uHoverProgress:this.rectangle.hoverProgress,uSize:{value:this.rectangle.size},uID:{value:Math.random()*100},uBorderRadius:{value:parseFloat(h.borderRadius)},uBorderFade:{value:parseFloat(h.borderFade)},uGridScale:{value:parseFloat(h.gridScale)},uBackgroundGrid:{value:parseFloat(h.backgroundGrid)},uHoverScale:{value:parseFloat(h.hoverScale)},uMouseRadius:{value:parseFloat(h.mouseRadius)},uHoverRadius:{value:parseFloat(h.hoverRadius)},uHoverPosition:{value:new $e().fromArray(h.hoverPosition)},uBackgroundRadius:{value:parseFloat(h.backgroundRadius)},uBackgroundPosition:{value:new $e().fromArray(h.backgroundPosition)},uRandomCellFade:{value:parseFloat(h.randomCellFade)},uColor:{value:new lt(h.color)},uBackgroundColor:{value:new lt(h.backgroundColor)},uBackgroundOpacity:{value:parseFloat(h.backgroundOpacity)},uFade:this.fadeUniform,tNoise:{value:q.core.assetsManager.get("noise")},tGrain:{value:q.tools.noise.nearestTexture}},name:l==null?void 0:l.config,transparent:!0});this.add(new Nn(Hl.quadGeometry,f))}}iu=new WeakSet,Lm=function(t={},n={},i={}){return t.backgroundPosition&&(t.backgroundPosition=JSON.parse(t.backgroundPosition)),t.hoverPosition&&(t.hoverPosition=JSON.parse(t.hoverPosition)),{...i,...n,...t}};const nT=`precision highp float;uniform sampler2D tMap;uniform sampler2D tMouseComputation;uniform float uHoverProgress;uniform float uFade;uniform float uDPR;uniform float uBorderRadius;uniform float uDisplacement,uShift;uniform vec2 uImageSize,uResolution,uRectangle;varying vec2 vUv;vec2 coverUvs(vec2 imageRes,vec2 containerRes){float imageAspectX=imageRes.x/imageRes.y;float imageAspectY=imageRes.y/imageRes.x;float containerAspectX=containerRes.x/containerRes.y;float containerAspectY=containerRes.y/containerRes.x;vec2 ratio=vec2(min(containerAspectX/imageAspectX,1.0),min(containerAspectY/imageAspectY,1.0));vec2 newUvs=vec2(vUv.x*ratio.x+(1.0-ratio.x)*0.5,vUv.y*ratio.y+(1.0-ratio.y)*0.5);return newUvs;}float roundedRect(vec2 rectSize,vec2 uv,float cornerRadius){vec2 aspect=rectSize/max(rectSize.x,rectSize.y);vec2 alphaUv=(uv-0.5);float borderRadius=min(cornerRadius,min(rectSize.x,rectSize.y)*0.5);vec2 offset=vec2(borderRadius)/rectSize;vec2 alphaXY=smoothstep(vec2(0.5-offset),vec2(0.5-offset-0.001),abs(alphaUv));float alpha=min(1.0,alphaXY.x+alphaXY.y);vec2 alphaUv2=abs(uv-0.5);float radius=borderRadius/max(rectSize.x,rectSize.y);alphaUv2=(alphaUv2-0.5)*aspect+radius;float roundAlpha=smoothstep(radius+0.001,radius,length(alphaUv2));alpha=min(1.0,alpha+roundAlpha);return alpha;}void main(){vec2 rectSize=uResolution*uRectangle;vec2 coveredUv=coverUvs(uImageSize,uResolution*uRectangle);vec2 viewportUv=gl_FragCoord.xy/uResolution;viewportUv.x=(viewportUv.x-.5)*uResolution.x/uResolution.y+.5;vec3 color=vec3(0.0);float alpha=1.0;if(uHoverProgress>0.0){vec4 displacement=texture2D(tMouseComputation,viewportUv);vec2 disp=displacement.rg*uHoverProgress*.03*uDisplacement;vec4 colorR=texture2D(tMap,coveredUv-disp-vec2(displacement.g*.01*uShift,0.));vec4 colorG=texture2D(tMap,coveredUv-disp);vec4 colorB=texture2D(tMap,coveredUv-disp-vec2(displacement.r*.01*uShift,0.));color=vec3(colorR.r,colorG.g,colorB.b);alpha=colorG.a;}else{vec4 s=texture2D(tMap,coveredUv);color=s.rgb;alpha=s.a;}gl_FragColor=vec4(color,alpha*roundedRect(rectSize,vUv,uBorderRadius*uDPR)*uFade);
#ifdef IS_SAFARI
gl_FragColor.a*=smoothstep(0.,.1,length(gl_FragColor.rgb));
#endif
}`,iT=Bi(nT,"fragmentShader"),rT="varying vec2 vUv;void main(){vUv=uv;gl_Position=modelMatrix*vec4(position,1.0);}",sT=Bi(rT,"vertexShader");class oT extends _i{constructor(e={}){super(e),iT.use(this),sT.use(this)}}var jo,vl,$o,xl,ru;const Ss=class Ss extends gu{constructor(t,n,i,s,o,a,l,c){super(t,n,i,s,o,a,l);Pe(this,jo);Pe(this,vl);Pe(this,$o);Pe(this,xl);Pe(this,ru,async()=>{var t;await F(this,xl),(t=F(this,jo))==null||t.kill(),Wt(this,jo,uu.timeline()),F(this,jo).fromTo(this.uniforms.uFade,{value:0},{value:1,duration:1},0)});l.fadeIn||(t.style.opacity="0"),Wt(this,xl,new Promise(m=>{Wt(this,$o,m)}));const u=typeof l.displacement=="string"?parseFloat(l.displacement):1,h=typeof l.shift=="string"?parseFloat(l.shift):1,f=new oT({uniforms:{uRectangle:{value:this.rectangle.size},uRectangleRatio:{value:this.rectangle.ratio},uHoverProgress:this.rectangle.hoverProgress,uImageSize:{value:new $e},uBorderRadius:{value:parseFloat(l.borderRadius||0)},uDisplacement:{value:u},uShift:{value:h},uDPR:qi.uDPR,uResolution:qi.uResolution,uFade:{value:l.fadeIn?0:1},tMouseComputation:Fi.tMouseComputation,tMap:{value:null}},transparent:!0});if(this.add(new Nn(Hl.quadGeometry,f)),this.uniforms=f.uniforms,c==="video"){const m=new US(t);if(m.format=Ai,Ss.isSafari&&(m.type=or),Ss.isFirefox){const x=t.getElementsByTagName("source");let M=null;for(const g of x)if(g.type.includes("webm")){M=g;break}if(!M){for(const g of x)if(g.type.includes("mp4")){M=g;break}}!M&&x.length>0&&(M=x[0]),M&&(t.src=M.src)}f.uniforms.tMap.value=m,f.uniforms.uImageSize.value.set(t.videoWidth,t.videoHeight),t.addEventListener("loadedmetadata",()=>{f.uniforms.uImageSize.value.set(t.videoWidth,t.videoHeight),F(this,$o).call(this)})}else Ss.textureLoader.load(t.src,m=>{f.uniforms.tMap.value=m,f.uniforms.uImageSize.value.set(m.source.data.width,m.source.data.height),q.webgl.renderer.initTexture(m),F(this,$o).call(this)});typeof window<"u"&&Wt(this,vl,new $m.ScrollTrigger({trigger:t,onEnter:F(this,ru)}))}show(){super.show(),q.webgl.needMouseComputation.add(this)}hide(){super.hide(),q.webgl.needMouseComputation.delete(this)}dispose(){super.dispose(),F(this,vl).kill()}};jo=new WeakMap,vl=new WeakMap,$o=new WeakMap,xl=new WeakMap,ru=new WeakMap,qt(Ss,"isSafari",typeof navigator<"u"?/^((?!chrome|android).)*safari/i.test(navigator.userAgent):!1),qt(Ss,"isFirefox",typeof navigator<"u"?/firefox/i.test(navigator.userAgent):!1),qt(Ss,"textureLoader",new Md);let Qc=Ss,aT=class extends Qc{constructor(e,t,n,i,s,o,a){super(e,t,n,i,s,o,a,"image")}},lT=class extends Qc{constructor(e,t,n,i,s,o,a){super(e,t,n,i,s,o,a,"video")}};const bp={grid:tT,globe:VE,gradients:jE,image:aT,video:lT};var su,ou,au,Ml,Zo,Sl;class Dm{constructor(e=new Set("grid","globe","gradients","image","video")){Pe(this,su,(e=[])=>{for(const t of e){const n=this.rectangles.get(t.target);n&&n.update()}});Pe(this,ou,(e=[])=>{for(const t of e){const n=this.rectangles.get(t.target);n&&(t.isIntersecting?(n.enter(t.boundingClientRect.top<0),this.visibleRectangles.set(t.target,n)):(n.leave(),this.visibleRectangles.delete(t.target,n)))}});Pe(this,au,(e=[])=>{for(const t of e)t.target.childNodes.forEach(n=>{const i=this.rectangles.get(n);i&&i.update()})});Pe(this,Ml,e=>{const t=this.rectangles.get(e.currentTarget);t&&(e.currentTarget.removeEventListener("mousemove",F(this,Zo)),t.mouseEnter())});Pe(this,Zo,e=>{const t=this.rectangles.get(e.currentTarget);t&&(e.currentTarget.removeEventListener("mousemove",F(this,Zo)),t.mouseEnter())});Pe(this,Sl,e=>{const t=this.rectangles.get(e.currentTarget);t&&t.mouseLeave()});qt(this,"onWindowResize",()=>{[...this.rectangles.values()].forEach(e=>e.update())});this.effects=e,this.rectangles=new Map,this.visibleRectangles=new Map,typeof window<"u"&&(this.resizeObserver=new ResizeObserver(F(this,su)),this.intersectionObserver=new IntersectionObserver(F(this,ou),{threshold:0}),this.mutationObserver=new MutationObserver(F(this,au)),q.state.on(Oe.AFTER_RESIZE,this.onWindowResize))}async addElement(e){await q.loading,!(!e||!e.dataset.object||this.isTouch&&e.dataset.mouseOnly||!e.parentElement)&&(this.resizeObserver.observe(e),this.intersectionObserver.observe(e),this.mutationObserver.observe(e.parentElement,{childList:!0,subtree:!0}),e.addEventListener("mouseenter",F(this,Ml)),e.addEventListener("mouseleave",F(this,Sl)),e.addEventListener("mousemove",F(this,Zo)),this.rectangles.set(e,new cT(e)))}refreshVisibleElements(){[...this.visibleRectangles.values()].forEach(e=>e.update())}removeElement(e){if(!e)return;this.resizeObserver.unobserve(e),this.intersectionObserver.unobserve(e),e.removeEventListener("mouseenter",F(this,Ml)),e.removeEventListener("mouseleave",F(this,Sl));const t=this.rectangles.get(e);t==null||t.dispose(),this.rectangles.delete(e),this.visibleRectangles.delete(e)}getNextElements(e){if(!e)return;const{left:t,top:n}=e,{width:i,height:s}=q.tools.viewport.infos,o=new $e((t+window.scrollX)/i*2-1,-((n+window.scrollY)/s)*2+1);return[...this.rectangles.values()].filter(a=>a.visible&&a.position.y<=o.y)}updateElement(e){var t;e&&((t=this.rectangles.get(e))==null||t.update())}get isTouch(){return!!(window.matchMedia("(pointer: coarse)").matches||typeof window.ontouchstart=="function")}}su=new WeakMap,ou=new WeakMap,au=new WeakMap,Ml=new WeakMap,Zo=new WeakMap,Sl=new WeakMap;var Jo,lu,Um,lo;class cT{constructor(e){Pe(this,lu);Pe(this,Jo);Pe(this,lo,()=>{this.innerScroll.set(this.scrollParent.scrollLeft/q.tools.viewport.width*2,this.scrollParent.scrollTop/q.tools.viewport.height*2)});var t;this.element=e,this.visible=!1,this.isSticky=e.dataset.sticky==="true",this.position=new $e,this.size=new $e,this.innerScroll=new $e,this.ratio={value:1},this.hoverProgress={value:0},this.object=_n(this,lu,Um).call(this),(t=this.object)==null||t.preRender(),Wt(this,Jo,uu.quickTo(this.hoverProgress,"value",{duration:1,ease:"power1.out"})),this.scrollParent=ym(e),this.scrollParent!==document.documentElement&&(F(this,lo).call(this),this.scrollParent.addEventListener("scroll",F(this,lo)))}enter(e=!1){var t;this.update(),(t=this.object)==null||t.show(e),this.visible=!0}leave(){var e;(e=this.object)==null||e.hide(),this.visible=!1}mouseEnter(){F(this,Jo).call(this,1)}mouseLeave(){F(this,Jo).call(this,0)}update(){var l;this.element.classList.add("not-animated");const e=this.element.getBoundingClientRect(),{width:t,height:n}=q.tools.viewport.infos,{width:i,height:s,left:o,top:a}=e;this.scrollParent!==document.documentElement&&F(this,lo).call(this),this.position.set((o+window.scrollX+this.innerScroll.x)/t*2-1,-((a+window.scrollY+this.innerScroll.y)/n)*2+1),this.size.set(i/t,s/n),this.ratio.value=i/s,(l=this.object)==null||l.resize(),this.element.classList.remove("not-animated")}dispose(){var e;(e=this.object)==null||e.dispose(),this.scrollParent!==document.documentElement&&this.scrollParent.removeEventListener("scroll",F(this,lo))}}Jo=new WeakMap,lu=new WeakSet,Um=function(){const e=this.element.dataset.object;if(!bp[e])return console.warn("No WebGL object with that name",e);const t={...this.element.dataset};return t==null||delete t.object,new bp[e](this.element,this.position,this.size,this.ratio,this.innerScroll,this.hoverProgress,t)},lo=new WeakMap;const uT=25;var yl,El,Tl,bl;class hT extends gi{constructor(){super(uT,q.tools.viewport.ratio,.1,100);qt(this,"orbitControls");qt(this,"targetPosition",new Y);qt(this,"targetQuaternion",new is);Pe(this,yl,()=>{var t;(t=q.debug)==null||t.mapping.add(this,"Camera"),q.state.on(Oe.RESIZE,F(this,bl))});Pe(this,El,()=>{var t;(t=q.debug)==null||t.mapping.remove(this),q.state.off(Oe.RESIZE,F(this,bl))});Pe(this,Tl,()=>{q.state.off(Oe.ATTACH,F(this,yl)),q.state.off(Oe.DETACH,F(this,El)),q.state.off(Oe.DESTROY,F(this,Tl))});Pe(this,bl,({ratio:t})=>{this.aspect=t,this.updateProjectionMatrix()});this.position.z=5,q.state.on(Oe.ATTACH,F(this,yl)),q.state.on(Oe.DETACH,F(this,El)),q.state.on(Oe.DESTROY,F(this,Tl))}}yl=new WeakMap,El=new WeakMap,Tl=new WeakMap,bl=new WeakMap;const dT="precision highp float;uniform float uTime;uniform float uRatio;uniform vec2 uMouse,uMouseVelocity;uniform sampler2D tLast;varying vec2 vUv;void main(){vec2 uv=vUv;vec2 mouseUv=(uMouse*.5)+.5;mouseUv.x=(mouseUv.x-.5)*uRatio+.5;vec4 color=texture2D(tLast,uv);float dist=length(uv-mouseUv);dist=1.-(smoothstep(0.,0.22,dist));color.rg+=uMouseVelocity*dist;color.rg*=.95;gl_FragColor=color;}",fT=Bi(dT,"fragmentShader");class pT extends _i{constructor(e={}){super(e),Tm.use(this),fT.use(this)}}class mT{constructor(e=new $e(32,32)){qt(this,"camera");qt(this,"mesh");qt(this,"renderTarget1");qt(this,"renderTarget2");qt(this,"frameIndex",0);qt(this,"previousRt");qt(this,"rtBlade");this.mesh=this.createMesh(),this.camera=new da(-1,1,1,-1,0,1),this.renderTarget1=this.createRenderTarget(e.x,e.y),this.renderTarget2=this.createRenderTarget(e.x,e.y),Fi.tMouseComputation.value=this.texture}createMesh(){var n;const e=new Oi().setAttribute("position",new $n([-1,3,0,-1,-1,0,3,-1,0],3)).setAttribute("uv",new $n([0,2,0,0,2,0],2)),t=new pT({uniforms:{tLast:{value:null},uMouse:{value:(n=q.tools)==null?void 0:n.mouse.coordinates.webgl.clone()},uMouseVelocity:{value:new $e},uRatio:qi.uRatio,uTime:Fi.uTime},dithering:!0});return new Nn(e,t)}createRenderTarget(e,t){return new es(e,t,{type:or,magFilter:Vn})}update(e){var i;const t=this.mesh.material.uniforms.uMouse.value,n=q.tools.mouse.coordinates.webgl;this.mesh.material.uniforms.uMouseVelocity.value.subVectors(n,t),this.mesh.material.uniforms.uMouse.value.lerp(n,e*5),this.previousRt=q.webgl.renderer.getRenderTarget(),this.frameIndex++%2===0?(q.webgl.renderer.setRenderTarget(this.renderTarget1),this.mesh.material.uniforms.tLast.value=this.renderTarget2.texture):(q.webgl.renderer.setRenderTarget(this.renderTarget2),this.mesh.material.uniforms.tLast.value=this.renderTarget1.texture),q.webgl.renderer.clear(),q.webgl.renderer.render(this.mesh,this.camera),q.webgl.renderer.setRenderTarget(this.previousRt),(i=this.rtBlade)==null||i.update(q.webgl.renderer,this.camera)}get texture(){return this.renderTarget1.texture}get renderTarget(){return this.renderTarget2}}var Al,wl,Rl,Cl;class gT extends TS{constructor(){super({antialias:!1,powerPreference:"high-performance"});Pe(this,Al,()=>{var t;q.state.on(Oe.RESIZE,F(this,Cl)),(t=q.debug)==null||t.mapping.add(this,"Renderer")});Pe(this,wl,()=>{var t;q.state.off(Oe.RESIZE,F(this,Cl)),(t=q.debug)==null||t.mapping.remove(this)});Pe(this,Rl,()=>{q.state.off(Oe.ATTACH,F(this,Al)),q.state.off(Oe.DETACH,F(this,wl)),q.state.off(Oe.DESTROY,F(this,Rl)),this.dispose()});Pe(this,Cl,({width:t,height:n,dpr:i})=>{this.setSize(t,n),this.setPixelRatio(i)});Xt.enabled=!0,this.autoClear=!1,this.debug.checkShaderErrors=vE,this.setClearColor(new lt(16777215),0),q.state.on(Oe.ATTACH,F(this,Al)),q.state.on(Oe.DETACH,F(this,wl)),q.state.on(Oe.DESTROY,F(this,Rl))}}Al=new WeakMap,wl=new WeakMap,Rl=new WeakMap,Cl=new WeakMap;var Pl,Il,Ll,Dl,Ul,Qo;class _T{constructor(){qt(this,"needMouseComputation",new Set);Pe(this,Pl,()=>{this.mouseComputation=new mT,q.$wrapper.prepend(this.renderer.domElement),q.state.on(Oe.RESIZE,F(this,Dl)),q.state.on(Oe.TICK,F(this,Ul)),q.state.on(Oe.RENDER,F(this,Qo)),Fi.uScrollProgress.value=window.scrollY/q.tools.viewport.height*2});Pe(this,Il,()=>{this.renderer.domElement.remove(),q.state.off(Oe.RESIZE,F(this,Dl)),q.state.off(Oe.TICK,F(this,Ul)),q.state.off(Oe.RENDER,F(this,Qo))});Pe(this,Ll,()=>{q.state.off(Oe.ATTACH,F(this,Pl)),q.state.off(Oe.DETACH,F(this,Il)),q.state.off(Oe.DESTROY,F(this,Ll))});Pe(this,Dl,()=>{F(this,Qo).call(this)});Pe(this,Ul,({et:e,dt:t})=>{var n;Fi.uTime.value=e,Fi.uScrollProgress.value=window.scrollY/q.tools.viewport.height*2,this.mouseVelocity.subVectors(q.tools.mouse.coordinates.webgl,q.tools.mouse.previousCoordinates.webgl),this.lerpedMouseVelocity.lerp(this.mouseVelocity,t*5),this.lerpedMouseVelocity.multiplyScalar(.99),this.lerpedMouse.lerp(q.tools.mouse.coordinates.webgl,t*5),this.lerpedMouse2.lerp(q.tools.mouse.coordinates.webgl,t*2),this.needMouseComputation.size&&((n=this.mouseComputation)==null||n.update(t))});Pe(this,Qo,()=>{var e,t,n;(e=q.debug)==null||e.stats.instance.begin(),this.renderer.clear(),this.renderer.render(this.scene,this.camera),(t=q.debug)==null||t.stats.instance.end(),(n=q.debug)==null||n.stats.instance.update()});this.lerpedMouse=new $e,this.lerpedMouse2=new $e,this.mouseVelocity=new $e,this.lerpedMouseVelocity=new $e,this.renderer=new gT,this.scene=new Hl,this.camera=new hT,this.domSync=new Dm,q.state.on(Oe.ATTACH,F(this,Pl)),q.state.on(Oe.DETACH,F(this,Il)),q.state.on(Oe.DESTROY,F(this,Ll))}}Pl=new WeakMap,Il=new WeakMap,Ll=new WeakMap,Dl=new WeakMap,Ul=new WeakMap,Qo=new WeakMap;let Kn=null;const Nm="on";var Ni,cu;class vT{constructor(e={}){Pe(this,Ni,new Map);Pe(this,cu,{fps:1/0});const t=Object.fromEntries(Object.entries(e).map(([n,i])=>[i,`${Nm}${n.toLowerCase().split("_").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join("")}`]));this.eventsMapValues=Object.values(t),this.eventsMapKey=Object.fromEntries(Object.entries(t).map(n=>[n[1],parseInt(n[0])]))}register(e,t={}){Ap(e).forEach(n=>{this.eventsMapValues.includes(n)&&this.on(this.eventsMapKey[n],e[n],t,e)})}unregister(e){Ap(e).forEach(t=>{this.eventsMapValues.includes(t)&&this.off(this.eventsMapKey[t],e[t],e)})}on(e,t,n={},i=this){F(this,Ni).has(e)||F(this,Ni).set(e,new Set),F(this,Ni).get(e).add({fn:t,options:{...F(this,cu),...n},instance:i,lastUpdateEt:0})}off(e,t,n=this){if(F(this,Ni).has(e))for(Kn of F(this,Ni).get(e))Kn.fn===t&&Kn.instance===n&&F(this,Ni).get(e).delete(Kn)}emit(e,...t){if(F(this,Ni).has(e))for(Kn of F(this,Ni).get(e))Kn.fn.call(Kn.instance,...t)}emitThrottle(e,t,...n){var i;if(F(this,Ni).has(e))for(Kn of F(this,Ni).get(e))(i=Kn.options)!=null&&i.fps&&Kn.options.fps!==1/0?t.et-Kn.lastUpdateEt>=1/Kn.options.fps&&(Kn.fn.call(Kn.instance,t,...n),Kn.lastUpdateEt=t.et):Kn.fn.call(Kn.instance,t,...n)}}Ni=new WeakMap,cu=new WeakMap;const xT=(r,e)=>!("get"in Object.getOwnPropertyDescriptor(r,e))&&typeof r[e]=="function",Ap=(r,e=!1)=>{const t=Object.getOwnPropertyNames(r);let n=Object.getPrototypeOf(r);const i=Object.getPrototypeOf({});for(;n&&(e||n!==i);){for(const s of Object.getOwnPropertyNames(n))t.indexOf(s)===-1&&xT(n,s)&&t.push(s);n=Object.getPrototypeOf(n)}return t.filter(s=>s.startsWith(Nm))};var co,rr;class MT{constructor(){Pe(this,co);Pe(this,rr);Wt(this,co,new Map),Wt(this,rr,new Map)}get(e){return F(this,co).get(e)}set(e,t){var n;return t!==F(this,co).get(e)&&(F(this,co).set(e,t),(n=F(this,rr).get(e))==null||n.forEach(i=>i.call(this,t))),this.get(e)}watch(e,t){F(this,rr).has(e)?F(this,rr).get(e).add(t):F(this,rr).set(e,new Set().add(t))}stopWatch(e,t){if(!F(this,rr).has(e))return;F(this,rr).get(e).delete(t)}watching(e){return F(this,rr).has(e)}}co=new WeakMap,rr=new WeakMap;var Nl;const Js=class Js{constructor(){Pe(this,Nl,null);this.state=new vT(Oe),this.store=new MT,this.loading=new Promise(e=>{Wt(this,Nl,e)})}async init(e,t){this.$wrapper=e,this.$app=t,this.tools=ME(),this.core=dE(),this.webgl=new _T,this.beforeLoad(),await this.load(),F(this,Nl).call(this)}beforeLoad(){var e,t;(e=q.debug)==null||e.mapping.add(this.state,"State"),(t=q.debug)==null||t.mapping.add(this.store,"Store")}async load(){await this.core.assetsManager.load()}static getInstance(){return Js.instance||(Js.instance=new Js),Js.instance}};Nl=new WeakMap,qt(Js,"instance");let ed=Js;const q=ed.getInstance(),ST=()=>{const r=Ti.useRef({}),e=Ti.useRef({});return Ti.useEffect(()=>{const n=Object.keys(r.current),i=Object.keys(e.current),s=n.filter(a=>!i.includes(a)),o=i.filter(a=>!n.includes(a));s.forEach(a=>{var l;return(l=q.webgl)==null?void 0:l.domSync.addElement(r.current[a])}),o.forEach(a=>{var l;return(l=q.webgl)==null?void 0:l.domSync.removeElement(e.current[a])}),e.current={...r.current}}),Ti.useEffect(()=>{const n=r.current,i=e.current;return()=>{Object.values(n).forEach(s=>{var o;return(o=q.webgl)==null?void 0:o.domSync.removeElement(s)}),Object.values(i).forEach(s=>{var o;return(o=q.webgl)==null?void 0:o.domSync.removeElement(s)}),e.current={}}},[]),{add:(n,i)=>s=>{s?r.current[`${n}_${i}`]=s:delete r.current[`${n}_${i}`]}}},yT=r=>e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})};var td=new Map,Nc=new WeakMap,wp=0,ET=void 0;function TT(r){return r?(Nc.has(r)||(wp+=1,Nc.set(r,wp.toString())),Nc.get(r)):"0"}function bT(r){return Object.keys(r).sort().filter(e=>r[e]!==void 0).map(e=>`${e}_${e==="root"?TT(r.root):r[e]}`).toString()}function AT(r){const e=bT(r);let t=td.get(e);if(!t){const n=new Map;let i;const s=new IntersectionObserver(o=>{o.forEach(a=>{var l;const c=a.isIntersecting&&i.some(u=>a.intersectionRatio>=u);r.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(l=n.get(a.target))==null||l.forEach(u=>{u(c,a)})})},r);i=s.thresholds||(Array.isArray(r.threshold)?r.threshold:[r.threshold||0]),t={id:e,observer:s,elements:n},td.set(e,t)}return t}function wT(r,e,t={},n=ET){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const l=r.getBoundingClientRect();return e(n,{isIntersecting:n,target:r,intersectionRatio:typeof t.threshold=="number"?t.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:i,observer:s,elements:o}=AT(t),a=o.get(r)||[];return o.has(r)||o.set(r,a),a.push(e),s.observe(r),function(){a.splice(a.indexOf(e),1),a.length===0&&(o.delete(r),s.unobserve(r)),o.size===0&&(s.disconnect(),td.delete(i))}}function RT({threshold:r,delay:e,trackVisibility:t,rootMargin:n,root:i,triggerOnce:s,skip:o,initialInView:a,fallbackInView:l,onChange:c}={}){var u;const[h,f]=Ti.useState(null),m=Ti.useRef(c),[x,M]=Ti.useState({inView:!!a,entry:void 0});m.current=c,Ti.useEffect(()=>{if(o||!h)return;let T;return T=wT(h,(C,k)=>{M({inView:C,entry:k}),m.current&&m.current(C,k),k.isIntersecting&&s&&T&&(T(),T=void 0)},{root:i,rootMargin:n,threshold:r,trackVisibility:t,delay:e},l),()=>{T&&T()}},[Array.isArray(r)?r.toString():r,h,i,n,s,o,t,l,e]);const g=(u=x.entry)==null?void 0:u.target,p=Ti.useRef(void 0);!h&&g&&!s&&!o&&p.current!==g&&(p.current=g,M({inView:!!a,entry:void 0}));const R=[f,x.inView,x.entry];return R.ref=R[0],R.inView=R[1],R.entry=R[2],R}const CT=Ti.forwardRef(({children:r,formats:e,className:t,videoId:n,folder:i,alpha:s,isAutoPlay:o=!0,loop:a=!0,isWebgl:l,displacementWebgl:c,fadeInWebgl:u=!!l,onEnded:h},f)=>{const m=Ti.useRef(null),[x,M]=RT(),g=Ti.useRef(!0);Ti.useEffect(()=>{var T;if(g.current){g.current=!1;return}n&&((T=m.current)==null||T.load())},[n]),Ti.useEffect(()=>{m.current&&(M?m.current.play():m.current.pause())},[M]);const{add:p}=ST(),R=new Dm;return Mo.jsx("video",{ref:yT([m,f,p("video",0),x]),disableRemotePlayback:!0,playsInline:!0,muted:!0,loop:a,autoPlay:o,className:Km(t,{"opacity-0-dk":typeof window<"u"&&u&&l&&!R.isTouch}),onEnded:h,...l&&{"data-object":"video","data-mouse-only":!0},...u&&{"data-fade-in":!0},...typeof c<"u"&&{"data-displacement":c,"data-shift":c},children:n?Mo.jsxs(Mo.Fragment,{children:[e.includes("mov")&&Mo.jsx("source",{src:`/videos/${i}/${n}.mov`,type:`video/quicktime${s?'; codecs="hvc1"':""}`}),e.includes("webm")&&Mo.jsx("source",{src:`/videos/${i}/${n}.webm`,type:"video/webm"}),e.includes("mp4")&&Mo.jsx("source",{src:`/videos/${i}/${n}.mp4`,type:`video/mp4${s?'; codecs="hvc1"':""}`})]}):r})});CT.displayName="Video";export{bE as D,Oe as E,$m as S,CT as V,q as a,UT as b,yT as m,ST as u};
