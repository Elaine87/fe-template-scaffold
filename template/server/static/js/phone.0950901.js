(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{10:function(e,t){e.exports={projectName:"commendPrize",openPage:"index.html",isHaveSpecialConfig:!1}},26:function(e,t){},6:function(e,t,n){"use strict";n.r(t),n(13),n(26),n(1),n(2),n(3);var r=n(0),o=n(7),i=n(4),u=Object(r.a)("userName"),s=Object(r.a)("publicParams");if(window.devicePixelRatio&&devicePixelRatio>=2&&$("#phoneInput").addClass("resetLines"),window.onload=function(){i("400507",{})},!u)throw new Error("username is null");$(".titleName").html(u),$("#receiveBtn").click(function(){var e=$("#phoneInput").val();if(e&&/^[1][3,4,5,7,8,9][0-9]{9}$/.test(e)){if(i("400508",{phone:e}),!s)throw new Error("urlPublicParams is undefined");var t=Object(r.b)(s)+"&phone="+e;$.ajax({url:"/activity/invite/receiveInvite",type:"POST",contentType:"application/x-www-form-urlencoded;charset=utf-8",data:t,success:function(t){var n=JSON.parse(t),r=n.code,i=n.msg;0==r?window.location.href=o.assetsPublicPath+"download.html":($("#mask").show(),$("#popBox").show(),$(".popTxt").html(i)),$("#phoneInput").val(""),e=""}})}else $("#mask").show(),$("#popBox").show(),$(".popTxt").html("请输入正确的手机号"),$("#phoneInput").val(""),e=""}),$("#sureBtn").click(function(){$("#mask").hide(),$("#popBox").hide()})},7:function(e,t,n){"use strict";(function(t){const r=n(8),o=n(10).projectName,i={dev:{host:"0.0.0.0",port:"3433",devSourceMap:!0,devtool:"cheap-module-eval-source-map",env:"development",proxyTable:[{context:["/carlife","/passport","/bdata","/activity","/motorcadeServer","/motorcadeTask"],target:"http://carlife-dev.zhidaohulian.com",changeOrigin:!0}]},build:{prodSourceMap:!0,devtool:"cheap-module-source-map",assetsRoot:r.resolve(t,"../dist"),gzip:!0,env:"production"},qa:{prodSourceMap:!0,devtool:"#cheap-module-eval-source-map",assetsRoot:r.resolve(t,"../qa"),gzip:!0},assetsPublicPath:`/femushroom/${o.toLowerCase()}/`};e.exports=i}).call(this,"/")},8:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(e){return r.exec(e).slice(1)};function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var u=o>=0?arguments[o]:e.cwd();if("string"!=typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(t=u+"/"+t,r="/"===u.charAt(0))}return(r?"/":"")+(t=n(i(t.split("/"),function(e){return!!e}),!r).join("/"))||"."},t.normalize=function(e){var r=t.isAbsolute(e),o="/"===u(e,-1);return(e=n(i(e.split("/"),function(e){return!!e}),!r).join("/"))||r||(e="."),e&&o&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var o=r(e.split("/")),i=r(n.split("/")),u=Math.min(o.length,i.length),s=u,c=0;c<u;c++)if(o[c]!==i[c]){s=c;break}var a=[];for(c=s;c<o.length;c++)a.push("..");return(a=a.concat(i.slice(s))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=o(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},t.basename=function(e,t){var n=o(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){return o(e)[3]};var u="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n(9))},9:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var c,a=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?a=c.concat(a):f=-1,a.length&&h())}function h(){if(!l){var e=s(p);l=!0;for(var t=a.length;t;){for(c=a,a=[];++f<t;)c&&c[f].run();f=-1,t=a.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new m(e,t)),1!==a.length||l||s(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}},[[6,0,2,1]]]);
//# sourceMappingURL=phone.0950901.js.map