/*
 UAParser.js v0.7.18
 Lightweight JavaScript-based User-Agent string parser
 https://github.com/faisalman/ua-parser-js

 Copyright ? 2012-2016 Faisal Salman <fyzlman@gmail.com>
 Dual licensed under GPLv2 or MIT
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,d,b){a!=Array.prototype&&a!=Object.prototype&&(a[d]=b.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,d,b,e){if(d){b=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var c=a[e];c in b||(b[c]={});b=b[c]}a=a[a.length-1];e=b[a];d=d(e);d!=e&&null!=d&&$jscomp.defineProperty(b,a,{configurable:!0,writable:!0,value:d})}};$jscomp.polyfill("Object.getOwnPropertySymbols",function(a){return a?a:function(){return[]}},"es6","es5");$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.Symbol=function(){var a=0;return function(d){return $jscomp.SYMBOL_PREFIX+(d||"")+a++}}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var d=0;return $jscomp.iteratorPrototype(function(){return d<a.length?{done:!1,value:a[d++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.iteratorFromArray=function(a,d){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var b=0,e={next:function(){if(b<a.length){var c=b++;return{value:d(c,a[c]),done:!1}}e.next=function(){return{done:!0,value:void 0}};return e.next()}};e[Symbol.iterator]=function(){return e};return e};
$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6","es3");$jscomp.owns=function(a,d){return Object.prototype.hasOwnProperty.call(a,d)};$jscomp.assign="function"==typeof Object.assign?Object.assign:function(a,d){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var c in e)$jscomp.owns(e,c)&&(a[c]=e[c])}return a};$jscomp.polyfill("Object.assign",function(a){return a||$jscomp.assign},"es6","es3");
(function(a){"object"===typeof exports&&"undefined"!==typeof module?module.exports=a():"function"===typeof define&&define.amd?define([],a):("undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:this).SmartBanner=a()})(function(){return function(){function a(d,b,e){function c(f,k){if(!b[f]){if(!d[f]){var r="function"==typeof require&&require;if(!k&&r)return r(f,!0);if(m)return m(f,!0);k=Error("Cannot find module '"+f+"'");throw k.code="MODULE_NOT_FOUND",
k;}k=b[f]={exports:{}};d[f][0].call(k.exports,function(a){return c(d[f][1][a]||a)},k,k.exports,a,d,b,e)}return b[f].exports}for(var m="function"==typeof require&&require,f=0;f<e.length;f++)c(e[f]);return c}return a}()({1:[function(a,d,b){var e=a("object-assign"),c=a("component-query"),m=a("get-doc"),f=a("cookie-cutter"),n=a("ua-parser-js"),k=(navigator.language||navigator.userLanguage||navigator.browserLanguage).slice(-2)||"us",r=m&&m.documentElement,g={ios:{appMeta:"apple-itunes-app",iconRels:["apple-touch-icon-precomposed",
"apple-touch-icon"],getStoreLink:function(){return this.appId}},android:{appMeta:"google-play-app",iconRels:["android-touch-icon","apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return this.appId}},windows:{appMeta:"msApplication-ID",iconRels:["windows-touch-icon","apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return this.appId}}};a=function(a){var c=n(navigator.userAgent);this.options=e({},{daysHidden:15,daysReminder:90,appStoreLanguage:k,button:"OPEN",store:{ios:"On the App Store",android:"In Google Play",windows:"In the Windows Store"},price:{ios:"FREE",android:"FREE",windows:"FREE"},theme:"",icon:"",force:""},a||{});this.options.force?this.type=this.options.force:"Windows Phone"===c.os.name||"Windows Mobile"===c.os.name?this.type="windows":"iOS"===c.os.name?this.type="ios":"Android"===c.os.name&&(this.type=
"android");if(this.type&&this.options.store[this.type]){this.appMeta=g[this.type].appMeta;this.parseAppId();a="ios"===this.type&&"Mobile Safari"===c.browser.name&&6<=parseInt(c.os.version,10);var l=navigator.standalone,b=f.get(this.appId+"-smartbanner-closed"),d=f.get(this.appId+"-smartbanner-installed");a||l||b||d||(e(this,g[this.type]),!this.appId&&"IOS"===c.os.name&&"Safari"===c.browser.name)||(this.create(),this.show())}};a.prototype={constructor:a,create:function(){var a=this.getStoreLink(),
e=this.options.price[this.type]+" - "+this.options.store[this.type];if(this.options.icon)var f=this.options.icon;else for(var b=0;b<this.iconRels.length;b++){var d=c('link[rel="'+this.iconRels[b]+'"]');if(d){f=d.getAttribute("href");break}}var t=m.createElement("div");t.className="smartbanner smartbanner-"+(this.options.theme||this.type);t.innerHTML='<div class="smartbanner-container"><a href="javascript:void(0);" class="smartbanner-close">&times;</a><span class="smartbanner-icon" style="background-image: url('+
f+')"></span><div class="smartbanner-info"><div class="smartbanner-title">'+this.options.title+"</div><div>"+this.options.author+"</div><span>"+e+'</span></div><a href="'+a+'" class="smartbanner-button"><span class="smartbanner-button-text">'+this.options.button+"</span></a></div>";m.body?m.body.appendChild(t):m&&m.addEventListener("DOMContentLoaded",function(){m.body.appendChild(t)});c(".smartbanner-button",t).addEventListener("click",this.install.bind(this),!1);c(".smartbanner-close",t).addEventListener("click",
this.close.bind(this),!1)},hide:function(){r.classList.remove("smartbanner-show");if("function"===typeof this.options.close)return this.options.close()},show:function(){r.classList.add("smartbanner-show");if("function"===typeof this.options.show)return this.options.show()},close:function(){this.hide();f.set(this.appId+"-smartbanner-closed","true",{path:"/",expires:new Date(Number(new Date)+60000*this.options.daysHidden)});if("function"===typeof this.options.close)return this.options.close()},install:function(){this.hide();
f.set(this.appId+"-smartbanner-installed","true",{path:"/",expires:new Date(Number(new Date)+60000*this.options.daysReminder)});if("function"===typeof this.options.close)return this.options.close()},parseAppId:function(){var a=c('meta[name="'+this.appMeta+'"]');if(a)return this.appId="windows"===this.type?a.getAttribute("content"):/app-id=([^\s,]+)/.exec(a.getAttribute("content"))[1]}};d.exports=a},{"component-query":2,"cookie-cutter":3,"get-doc":4,"object-assign":6,"ua-parser-js":7}],2:[function(a,
d,b){function e(a,e){return e.querySelector(a)}b=d.exports=function(a,b){b=b||document;return e(a,b)};b.all=function(a,e){e=e||document;return e.querySelectorAll(a)};b.engine=function(a){if(!a.one)throw Error(".one callback required");if(!a.all)throw Error(".all callback required");e=a.one;b.all=a.all;return b}},{}],3:[function(a,d,b){b=d.exports=function(a){a||(a={});"string"===typeof a&&(a={cookie:a});void 0===a.cookie&&(a.cookie="");return{get:function(c){for(var b=a.cookie.split(/;\s*/),f=0;f<
b.length;f++){var e=b[f].split("=");if(unescape(e[0])===c)return unescape(e[1])}},set:function(c,b,f){f||(f={});c=escape(c)+"="+escape(b);f.expires&&(c+="; expires="+f.expires);f.path&&(c+="; path="+escape(f.path));f.domain&&(c+="; domain="+escape(f.domain));f.secure&&(c+="; secure");return a.cookie=c}}};"undefined"!==typeof document&&(a=b(document),b.get=a.get,b.set=a.set)},{}],4:[function(a,d,b){a=a("has-dom");d.exports=a()?document:null},{"has-dom":5}],5:[function(a,d,b){d.exports=function(){return"undefined"!==
typeof window&&"undefined"!==typeof document&&"function"===typeof document.createElement}},{}],6:[function(a,d,b){var e=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;d.exports=function(){try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if("5"===Object.getOwnPropertyNames(a)[0])return!1;var c={};for(a=0;10>a;a++)c["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(c).map(function(a){return c[a]}).join(""))return!1;
var b={};"abcdefghijklmnopqrst".split("").forEach(function(a){b[a]=a});return"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},b)).join("")?!1:!0}catch(r){return!1}}()?Object.assign:function(a,b){if(null===a||void 0===a)throw new TypeError("Object.assign cannot be called with null or undefined");var d=Object(a);for(var f,g=1;g<arguments.length;g++){var p=Object(arguments[g]);for(var n in p)c.call(p,n)&&(d[n]=p[n]);if(e){f=e(p);for(var l=0;l<f.length;l++)m.call(p,f[l])&&(d[f[l]]=p[f[l]])}}return d}},
{}],7:[function(a,d,b){(function(a,c){var e={extend:function(a,c){var b={},e;for(e in a)b[e]=c[e]&&0===c[e].length%2?c[e].concat(a[e]):a[e];return b},has:function(a,c){return"string"===typeof a?-1!==c.toLowerCase().indexOf(a.toLowerCase()):!1},lowerize:function(a){return a.toLowerCase()},major:function(a){return"string"===typeof a?a.replace(/[^\d\.]/g,"").split(".")[0]:c},trim:function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},f=function(a,b){for(var e=0,d,f,l,h,g,q;e<b.length&&
!g;){var k=b[e],m=b[e+1];for(d=f=0;d<k.length&&!g;)if(g=k[d++].exec(a))for(l=0;l<m.length;l++)q=g[++f],h=m[l],"object"===typeof h&&0<h.length?2==h.length?this[h[0]]="function"==typeof h[1]?h[1].call(this,q):h[1]:3==h.length?this[h[0]]="function"!==typeof h[1]||h[1].exec&&h[1].test?q?q.replace(h[1],h[2]):c:q?h[1].call(this,q,h[2]):c:4==h.length&&(this[h[0]]=q?h[3].call(this,q.replace(h[1],h[2])):c):this[h]=q?q:c;e+=2}},n=function(a,b){for(var d in b)if("object"===typeof b[d]&&0<b[d].length)for(var f=
0;f<b[d].length;f++){if(e.has(b[d][f],a))return"?"===d?c:d}else if(e.has(b[d],a))return"?"===d?c:d;return a},k={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2E3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},r={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],["name","version"],[/(opios)[\/\s]+([\w\.]+)/i],[["name","Opera Mini"],"version"],
[/\s(opr)\/([\w\.]+)/i],[["name","Opera"],"version"],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],["name","version"],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[["name","IE"],"version"],[/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],
[["name","Edge"],"version"],[/(yabrowser)\/([\w\.]+)/i],[["name","Yandex"],"version"],[/(puffin)\/([\w\.]+)/i],[["name","Puffin"],"version"],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[["name","UCBrowser"],"version"],[/(comodo_dragon)\/([\w\.]+)/i],[["name",/_/g," "],"version"],[/(micromessenger)\/([\w\.]+)/i],[["name","WeChat"],"version"],[/(qqbrowserlite)\/([\w\.]+)/i],["name","version"],[/(QQ)\/([\d\.]+)/i],["name","version"],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],["name","version"],
[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],["name","version"],[/(2345Explorer)[\/\s]?([\w\.]+)/i],["name","version"],[/(MetaSr)[\/\s]?([\w\.]+)/i],["name"],[/(LBBROWSER)/i],["name"],[/xiaomi\/miuibrowser\/([\w\.]+)/i],["version",["name","MIUI Browser"]],[/;fbav\/([\w\.]+);/i],["version",["name","Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],["version",["name","Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[["name",/(.+)/,"$1 WebView"],"version"],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[["name",
/(.+(?:g|us))(.+)/,"$1 $2"],"version"],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],["version",["name","Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],["name","version"],[/(dolfin)\/([\w\.]+)/i],[["name","Dolphin"],"version"],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[["name","Chrome"],"version"],[/(coast)\/([\w\.]+)/i],[["name","Opera Coast"],"version"],[/fxios\/([\w\.-]+)/i],["version",["name","Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
["version",["name","Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],["version","name"],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[["name","GSA"],"version"],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],["name",["version",n,{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],["name","version"],[/(navigator|netscape)\/([\w\.-]+)/i],[["name","Netscape"],
"version"],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],["name","version"]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",e.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",e.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",e.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
["model","vendor",["type","tablet"]],[/applecoremedia\/[\w\.]+ \((ipad)/],["model",["vendor","Apple"],["type","tablet"]],[/(apple\s{0,1}tv)/i],[["model","Apple TV"],["vendor","Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],["vendor","model",["type","tablet"]],[/(kf[A-z]+)\sbuild\/.+silk\//i],["model",["vendor","Amazon"],["type","tablet"]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
[["model",n,{"Fire Phone":["SD","KF"]}],["vendor","Amazon"],["type","mobile"]],[/\((ip[honed|\s\w*]+);.+(apple)/i],["model","vendor",["type","mobile"]],[/\((ip[honed|\s\w*]+);/i],["model",["vendor","Apple"],["type","mobile"]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],["vendor","model",["type","mobile"]],[/\(bb10;\s(\w+)/i],["model",["vendor","BlackBerry"],["type","mobile"]],
[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],["model",["vendor","Asus"],["type","tablet"]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[["vendor","Sony"],["model","Xperia Tablet"],["type","tablet"]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],["model",["vendor","Sony"],["type","mobile"]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],["vendor","model",["type","console"]],[/android.+;\s(shield)\sbuild/i],["model",["vendor","Nvidia"],["type","console"]],
[/(playstation\s[34portablevi]+)/i],["model",["vendor","Sony"],["type","console"]],[/(sprint\s(\w+))/i],[["vendor",n,{HTC:"APA",Sprint:"Sprint"}],["model",n,{"Evo Shift 4G":"7373KT"}],["type","mobile"]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],["vendor","model",["type","tablet"]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],["vendor",["model",/_/g," "],["type","mobile"]],[/(nexus\s9)/i],["model",["vendor","HTC"],
["type","tablet"]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],["model",["vendor","Huawei"],["type","mobile"]],[/(microsoft);\s(lumia[\s\w]+)/i],["vendor","model",["type","mobile"]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],["model",["vendor","Microsoft"],["type","console"]],[/(kin\.[onetw]{3})/i],[["model",/\./g," "],["vendor","Microsoft"],["type","mobile"]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],["model",
["vendor","Motorola"],["type","mobile"]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],["model",["vendor","Motorola"],["type","tablet"]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[["vendor",e.trim],["model",e.trim],["type","smarttv"]],[/hbbtv.+maple;(\d+)/i],[["model",/^/,"SmartTV"],["vendor","Samsung"],["type","smarttv"]],[/\(dtv[\);].+(aquos)/i],["model",["vendor","Sharp"],["type","smarttv"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],
[["vendor","Samsung"],"model",["type","tablet"]],[/smart-tv.+(samsung)/i],["vendor",["type","smarttv"],"model"],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[["vendor","Samsung"],"model",["type","mobile"]],[/sie-(\w*)/i],["model",["vendor","Siemens"],["type","mobile"]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[["vendor","Nokia"],"model",["type","mobile"]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],["model",["vendor",
"Acer"],["type","tablet"]],[/android.+([vl]k\-?\d{3})\s+build/i],["model",["vendor","LG"],["type","tablet"]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[["vendor","LG"],"model",["type","tablet"]],[/(lg) netcast\.tv/i],["vendor","model",["type","smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],["model",["vendor","LG"],["type","mobile"]],[/android.+(ideatab[a-z0-9\-\s]+)/i],["model",["vendor","Lenovo"],["type","tablet"]],[/linux;.+((jolla));/i],["vendor",
"model",["type","mobile"]],[/((pebble))app\/[\d\.]+\s/i],["vendor","model",["type","wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],["vendor","model",["type","mobile"]],[/crkey/i],[["model","Chromecast"],["vendor","Google"]],[/android.+;\s(glass)\s\d/i],["model",["vendor","Google"],["type","wearable"]],[/android.+;\s(pixel c)\s/i],["model",["vendor","Google"],["type","tablet"]],[/android.+;\s(pixel xl|pixel)\s/i],["model",["vendor","Google"],["type","mobile"]],[/android.+;\s(\w+)\s+build\/hm\1/i,
/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[["model",/_/g," "],["vendor","Xiaomi"],["type","mobile"]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[["model",/_/g," "],["vendor","Xiaomi"],["type","tablet"]],[/android.+;\s(m[1-5]\snote)\sbuild/i],["model",["vendor","Meizu"],["type","tablet"]],[/android.+a000(1)\s+build/i,
/android.+oneplus\s(a\d{4})\s+build/i],["model",["vendor","OnePlus"],["type","mobile"]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],["model",["vendor","RCA"],["type","tablet"]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],["model",["vendor","Dell"],["type","tablet"]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],["model",["vendor","Verizon"],["type","tablet"]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[["vendor","Barnes & Noble"],"model",["type","tablet"]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
["model",["vendor","NuVision"],["type","tablet"]],[/android.+;\s(k88)\sbuild/i],["model",["vendor","ZTE"],["type","tablet"]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],["model",["vendor","Swiss"],["type","mobile"]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],["model",["vendor","Swiss"],["type","tablet"]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],["model",["vendor","Zeki"],["type","tablet"]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
[["vendor","Dragon Touch"],"model",["type","tablet"]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],["model",["vendor","Insignia"],["type","tablet"]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],["model",["vendor","NextBook"],["type","tablet"]],[/android.+[;\/]\s*(Xtreme_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[["vendor","Voice"],"model",["type","mobile"]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[["vendor","LvTel"],"model",["type","mobile"]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
["model",["vendor","Envizen"],["type","tablet"]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],["vendor","model",["type","tablet"]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],["model",["vendor","MachSpeed"],["type","tablet"]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],["vendor","model",["type","tablet"]],[/android.+[;\/]\s*TU_(1491)\s+build/i],["model",["vendor","Rotor"],["type","tablet"]],[/android.+(KS(.+))\s+build/i],["model",["vendor","Amazon"],["type","tablet"]],
[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],["vendor","model",["type","tablet"]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[["type",e.lowerize],"vendor","model"],[/(android[\w\.\s\-]{0,9});.+build/i],["model",["vendor","Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],["version",["name","EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],["name","version"],
[/rv:([\w\.]{1,9}).+(gecko)/i],["version","name"]],os:[[/microsoft\s(windows)\s(vista|xp)/i],["name","version"],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],["name",["version",n,k]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[["name","Windows"],["version",n,k]],[/\((bb)(10);/i],[["name","BlackBerry"],"version"],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,
/linux;.+(sailfish);/i],["name","version"],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[["name","Symbian"],"version"],[/\((series40);/i],["name"],[/mozilla.+\(mobile;.+gecko.+firefox/i],[["name","Firefox OS"],"version"],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,
/(gnu)\s?([\w\.]*)/i],["name","version"],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[["name","Chromium OS"],"version"],[/(sunos)\s?([\w\.\d]*)/i],[["name","Solaris"],"version"],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],["name","version"],[/(haiku)\s(\w+)/i],["name","version"],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[["version",/_/g,"."],["name","iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[["name","Mac OS"],["version",/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]*)/i],["name","version"]]},g=function(b,d){"object"===typeof b&&(d=b,b=c);if(!(this instanceof g))return(new g(b,d)).getResult();var l=b||(a&&a.navigator&&a.navigator.userAgent?a.navigator.userAgent:""),k=d?e.extend(r,d):r;this.getBrowser=function(){var a={name:c,version:c};f.call(a,l,k.browser);a.major=e.major(a.version);return a};this.getCPU=function(){var a={architecture:c};f.call(a,
l,k.cpu);return a};this.getDevice=function(){var a={vendor:c,model:c,type:c};f.call(a,l,k.device);return a};this.getEngine=function(){var a={name:c,version:c};f.call(a,l,k.engine);return a};this.getOS=function(){var a={name:c,version:c};f.call(a,l,k.os);return a};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return l};this.setUA=function(a){l=a;return this};return this};
g.VERSION="0.7.18";g.BROWSER={NAME:"name",MAJOR:"major",VERSION:"version"};g.CPU={ARCHITECTURE:"architecture"};g.DEVICE={MODEL:"model",VENDOR:"vendor",TYPE:"type",CONSOLE:"console",MOBILE:"mobile",SMARTTV:"smarttv",TABLET:"tablet",WEARABLE:"wearable",EMBEDDED:"embedded"};g.ENGINE={NAME:"name",VERSION:"version"};g.OS={NAME:"name",VERSION:"version"};"undefined"!==typeof b?("undefined"!==typeof d&&d.exports&&(b=d.exports=g),b.UAParser=g):a&&(a.UAParser=g);var p=a&&(a.jQuery||a.Zepto);if("undefined"!==
typeof p){var u=new g;p.ua=u.getResult();p.ua.get=function(){return u.getUA()};p.ua.set=function(a){u.setUA(a);a=u.getResult();for(var b in a)p.ua[b]=a[b]}}})("object"===typeof window?window:this)},{}]},{},[1])(1)});
