// ==UserScript==
// @name         Pixel Bot BP Edition
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       Flyink13, DarkKeks
// @match        https://pixel.vkforms.ru/*
// @downloadURL  https://rawgit.com/DarkKeks/PublicPixelBot/master/PixelBot_bp.user.js
// @updateURL    https://rawgit.com/DarkKeks/PublicPixelBot/master/PixelBot_bp.user.js
// @grant        none
// ==/UserScript==

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('6 3(){A.3=3;3.11=30;3.1l="1z(0, 0, 0)";3.1i=E;3.1d={b:6(){g\'1h://2i.1j/2Z/2B/2E/2T.2H.15\'+\'?v=\'+Y.1a()},1D:6(){g\'1h://i.2J.1j/2w.2A\'+\'?v=\'+Y.1a()}};3.n=7.H("1s");3.n.1t=3.Q;3.n.2b="Загрузка приложения...";1u.1r(3.n.14,{o:"1q(0,0,0,0.5)",27:"K",1Y:"K",1n:"I%",1o:"I%",1Z:"2t",2n:"2p",e:"#18",1p:"1v",1w:10});7.J.z(3.n);3.m=7.H("1s");3.m.1t=3.Q;1u.1r(3.m.14,{o:"1q(0,0,0,0)",2o:"K",2k:"K",1n:"2e",1o:"I%",e:"#18",1p:"1v",2r:"2s 2q #18",2c:"29",22:"20",1w:1V});7.J.z(3.m);3.j=6(x){3.m.1C+=x+"<1W>";3.m.1X(0,10)};3.f=6(s){3.n.1C="3 "+s;3.j(s)};3.1H=6(){3.G=O 23();3.G.2a="28";3.G.24=6(){3.f("перезагрузил зону защиты.");9(3.U)3.12()};3.G.1g=(25(\'26==\')||3.1d.1D())};3.k=6(1c,q){9(!3.h)g;9(1c=="1b"){3.h.1E(O 2N("1b",q))}d{3.h.1E(O 2V(1c,q))}};3.1m=6(x,y,e){3.16();9(x>w){3.X(w,0);x=x-w}d{3.X(0,0)}a q={1B:E,1A:E,L:1,S:x,P:y+1,2u:x,2S:y+1};a t=3.p(3.T.C(x,y+1,1,1).8,0);a 1e=7.l(\'[14="o-e: \'+e+\';"]\');9(!1e){r.j("e 2Q %c "+e,\'o:\'+e+\';\');3.f("ошибка подбора цвета "+e);g}d 9(t==e){9(3.1i){r.j("== "+x+"x"+y+"%c "+t,\'o:\'+t+\';\');3.f("пропускаю "+(x+1)+"x"+(y+1)+" совпал цвет")}d{r.j("==");3.f("пропускаю, совпал цвет")}g}d{9(3.1i){r.j(x+"x"+y+"%c "+t+" > %c "+e,\'o:\'+t+\';\',\'o:\'+e+\';\');3.f("поставил точку "+(x+1)+"x"+(y+1))}d{r.j(" > ");3.f("поставил точку")}}1e.D();3.k("1x",q);3.k("D",q);q.L=0;3.k("1y",q);7.l(".36 L").D()};3.1M=6(){a B=3.F.33();9(!B){3.f("точек нет")}d{3.1m(B[0],B[1],B[2])}};3.13=6(x,y){a q={1B:E,1A:E,L:1,S:0,P:0};3.k("1x",q);q.P=y;q.S=x;3.k("2O",q);3.k("1y",q)};3.X=6(x,y){3.13(10,10);3.13(-2z-x,-2y-y)};3.C=6(){a 8=3.T.C(0,1,w,2v).8;g 8};3.p=6(8,i){g"1z("+8[i]+", "+8[i+1]+", "+8[i+2]+")"};3.12=6(){3.F=[];3.F=3.1G(3.1F(0));3.f("осталось точек:"+3.F.N);g 3.F.N};3.1F=6(R){3.16();3.X(R,0);a M=3.C();3.T.2D(3.G,-R,0);a W=3.C();a 8=[];2L(a i=0;i<M.N;i+=4){a x=R+(i/4)%w,y=~~((i/4)/w);9(3.p(M,i)!==3.p(W,i)&&3.p(W,i)!==3.1l){8.1N([x,y,3.p(W,i),3.p(M,i)])}}g 8};3.1G=6(8){a u=8.N,17,Z;2G(0!==u){Z=Y.2F(Y.1a()*u);u-=1;17=8[u];8[u]=8[Z];8[Z]=17}g 8};3.16=6(){3.k("1b",{2I:2M,2K:0,S:I,P:I,})};3.1S=6(){3.U=1;3.12();3.f("запущен.")};3.1P=2x(6(){9(7.l(".1R.1K")){7.l(".1R.1K").D()}d 9(7.l(".1J")){7.l(".1J").D()}d 9(!3.U&&3.h){3.T=3.h.2C("2d");3.1S()}d 9(3.h&&7.l(".2W")){3.31=1}d 9(!3.h){3.h=7.l("h")}d 9(!3.11){3.Q();3.11=30}d 9(3.U&&3.h){3.11--;3.1M()}},2Y);3.Q=6(){3.n.1Q="";3.m.1Q="";32(3.1P);a b=7.H(\'b\');b.1g=3.1d.b();7.J.z(b)};3.1I=6(){a b=7.H(\'b\');b.1g="1h://35.34.1j/V/15?2X=1O-1L-1";b.2R(\'2P\',\'\');(7.J||7.1T||7.1U).z(b);A.1f=A.1f||[];6 V(){1f.1N(2U)}V(\'15\',O 2m());V(\'21\',\'1O-1L-1\');r.j("2l 2g.")};3.1H();3.1I();r.j("3 19")}9(A.19){3()}d{a 1k=6(){A.19=1;a b=7.H(\'b\');b.z(7.2j(\'(\'+3+\')();\'));(7.J||7.1T||7.1U).z(b)};A.2h("2f",6(){1k()})}',62,193,'|||PixelBot|||function|document|data|if|var|script||else|color|setState|return|canvas||log|canvasEvent|querySelector|loger|state|background|getColor||console||pxColor|currentIndex||795|||appendChild|window|px|getImageData|click|true|pixs|img|createElement|100|body|0px|button|id1|length|new|clientY|reload|offsetX|clientX|ctx|inited|gtag|id2|canvasMoveTo|Math|randomIndex|10000|pts|getFullData|canvasMove|style|js|resetZoom|temporaryValue|fff|loaded|random|mousewheel|type|url|colorEl|dataLayer|src|https|doCoordLog|com|inject|tc|canvasClick|width|height|position|rgba|assign|div|onclick|Object|fixed|zIndex|mousedown|mouseup|rgb|cancelable|bubbles|innerHTML|image|dispatchEvent|getData|randomShuffle|reloadImage|gaInit|Header__close|primary|108011374|draw|push|UA|wait|outerHTML|Button|init|head|documentElement|10001|br|scrollTo|right|lineHeight|12px|config|padding|Image|onload|atob|aHR0cHM6Ly9pLmltZ3VyLmNvbS9wTTlaMHdLLnBuZw|bottom|Anonymous|11px|crossOrigin|textContent|fontSize||250px|load|send|addEventListener|rawgit|createTextNode|left|GA|Date|textAlign|top|center|solid|borderRight|1px|500px|layerX|400|pM9Z0wK|setInterval|149|40|png|PublicPixelBot|getContext|drawImage|master|floor|while|user|deltaY|imgur|deltaX|for|100000|WheelEvent|mousemove|asunc|error|setAttribute|layerY|PixelBot_bp|arguments|MouseEvent|Ttl__wait|id|1000|DarkKeks||timer|clearInterval|shift|googletagmanager|www|App__confirm'.split('|'),0,{}))