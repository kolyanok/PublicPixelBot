// ==UserScript==
// @name         Pixel Bot _Reload
// @namespace    http://tampermonkey.net/
// @version      0.67
// @description  try to take over the world!
// @author       Flyink13, DarkKeks
// @match        https://pixel.vkforms.ru/*
// @downloadURL  https://rawgit.com/DarkKeks/PublicPixelBot/master/PixelBot_reload.user.js
// @updateURL    https://rawgit.com/DarkKeks/PublicPixelBot/master/PixelBot_reload.user.js
// @grant        none
// ==/UserScript==

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('6 3(){J.3=3;3.U=1O;3.1C="1i(0, 0, 0)";3.15={j:6(){h\'1o://2f.1p/2g/2h/2e/2c.28.29\'+\'?v=\'+K.14()},1u:6(){h\'1o://i.2a.1p/2b.2i\'+\'?v=\'+K.14()}};3.o=7.M("1n");3.o.1s=3.E;3.o.2j="Загрузка приложения...";1m.1k(3.o.1f,{n:"1l(0,0,0,0.5)",2p:"Q",2q:"Q",1r:"G%",1E:"G%",2r:"2o",2n:"2k",e:"#1g",1t:"1B",1y:L});7.V.I(3.o);3.p=7.M("1n");3.p.1s=3.E;1m.1k(3.p.1f,{n:"1l(0,0,0,0)",20:"Q",1W:"Q",1r:"1Y",1E:"G%",e:"#1g",1t:"1B",25:"23 22 #1g",21:"24",1Z:"26",1y:1U});7.V.I(3.p);3.l=6(x){3.p.1e+=x+"<1V>";3.p.1X(0,L)};3.g=6(s){3.o.1e="3 "+s;3.l(s)};3.1K=6(){3.D=1d 2l();3.D.2t="2Y";3.D.2O=6(){3.g("перезагрузил зону защиты.");8(3.W)3.1b()};3.D.1M=(2N(\'2Q==\')||3.15.1u())};3.m=6(1c,q){8(!3.f)h;8(1c=="1a"){3.f.1v(1d 2T("1a",q))}d{3.f.1v(1d 2R(1c,q))}};3.1D=6(x,y,e){3.19();8(x>z){3.11(z,0);x=x-z}d{3.11(0,0)}b q={1A:P,1x:P,O:1,N:x,S:y+1,2P:x,2U:y+1};b A=3.r(3.13.H(x,y+1,1,1).a,0);b 1h=7.k(\'[1f="n-e: \'+e+\';"]\');8(!1h){w.l("e 2V %c "+e,\'n:\'+e+\';\');3.g("ошибка подбора цвета "+e);h}d 8(A==e){8(3.1w){w.l("== "+x+"x"+y+"%c "+A,\'n:\'+A+\';\');3.g("пропускаю "+(x+1)+"x"+(y+1)+" совпал цвет")}d{w.l("==");3.g("пропускаю, совпал цвет")}h}d{8(3.1w){w.l(x+"x"+y+"%c "+A+" > %c "+e,\'n:\'+A+\';\',\'n:\'+e+\';\');3.g("поставил точку "+(x+1)+"x"+(y+1))}d{w.l(" > ");3.g("поставил точку"}}1h.B();3.m("1F",q);3.m("B",q);q.O=0;3.m("1z",q);7.k(".2z O").B()};3.1T=6(){b C=3.F.2M();8(!C){3.g("точек нет")}d{3.1D(C[0],C[1],C[2])}};3.16=6(x,y){b q={1A:P,1x:P,O:1,N:0,S:0};3.m("1F",q);q.S=y;q.N=x;3.m("2v",q);3.m("1z",q)};3.11=6(x,y){3.16(L,L);3.16(-2D-x,-2J-y)};3.H=6(){b a=3.13.H(0,1,z,2K).a;h a};3.r=6(a,i){h"1i("+a[i]+", "+a[i+1]+", "+a[i+2]+")"};3.1b=6(){3.F=[];3.F=3.1P(3.1j(0));3.g("осталось точек:"+3.F.Y);h 3.F.Y};3.1j=6(T){3.19();3.11(T,0);b Z=3.H();3.13.2E(3.D,-T,0);b X=3.H();b a=[];2G(b i=0;i<Z.Y;i+=4){b x=T+(i/4)%z,y=~~((i/4)/z);8(3.r(Z,i)!==3.r(X,i)&&3.r(X,i)!==3.1C){a.2A([x,y,3.r(X,i),3.r(Z,i)])}}h a};3.1P=6(a){b u=a.Y,17,R;2C(0!==u){R=K.2w(K.14()*u);u-=1;17=a[u];a[u]=a[R];a[R]=17}h a};3.19=6(){3.m("1a",{2x:2y,2B:0,N:G,S:G,})};3.1R=6(){3.W=1;3.1b();3.g("запущен.")};3.1Q=2L(6(){8(7.k(".1N.1H")){7.k(".1N.1H").B()}d 8(7.k(".1I")){7.k(".1I").B()}d 8(!3.W&&3.f){3.13=3.f.2S("2d");3.1R()}d 8(3.f&&7.k(".1S")){b t=7.k(".1S").1e;8(1G(t.1L(9,2))==1||1G(t.1L(12,2))>10){2s.E()}d{3.2m=1}}d 8(!3.f){3.f=7.k("f")}d 8(!3.U){3.E();3.U=1O}d 8(3.W&&3.f){3.U--;3.1T()}},2u);3.E=6(){3.o.1J="";3.p.1J="";27(3.1Q);b j=7.M(\'j\');j.1M=3.15.j();7.V.I(j)};3.1K();w.l("3 18")}8(J.18){3()}d{b 1q=6(){J.18=1;b j=7.M(\'j\');j.I(7.2H(\'(\'+3+\')();\'));(7.V||7.2F||7.2I).I(j)};J.2W("2X",6(){1q()})}',62,185,'|||PixelBot|||function|document|if||data|var||else|color|canvas|setState|return||script|querySelector|log|canvasEvent|background|state|loger||getColor|||currentIndex||console|||795|pxColor|click|px|img|reload|pixs|100|getImageData|appendChild|window|Math|10000|createElement|clientX|button|true|0px|randomIndex|clientY|offsetX|pts|body|inited|id2|length|id1||canvasMoveTo||ctx|random|url|canvasMove|temporaryValue|loaded|resetZoom|mousewheel|getFullData|type|new|innerHTML|style|fff|colorEl|rgb|getData|assign|rgba|Object|div|https|com|inject|width|onclick|position|image|dispatchEvent|doCoordLog|cancelable|zIndex|mouseup|bubbles|fixed|tc|canvasClick|height|mousedown|parseInt|primary|Header__close|outerHTML|reloadImage|substr|src|Button|30|randomShuffle|wait|init|Ttl__wait|draw|10001|br|left|scrollTo|250px|padding|top|fontSize|solid|1px|11px|borderRight|12px|clearInterval|user|js|imgur|RGrwI5u|PixelBot_reload||master|rawgit|DarkKeks|PublicPixelBot|png|textContent|center|Image|timer|textAlign|500px|bottom|right|lineHeight|location|crossOrigin|1000|mousemove|floor|deltaY|100000|App__confirm|push|deltaX|while|40|drawImage|head|for|createTextNode|documentElement|149|400|setInterval|shift|atob|onload|layerX|aHR0cHM6Ly9pLmltZ3VyLmNvbS9SR3J3STV1LnBuZw|MouseEvent|getContext|WheelEvent|layerY|error|addEventListener|load|Anonymous'.split('|'),0,{}))
