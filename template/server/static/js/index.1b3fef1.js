(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,,,function(e,n){!function(){if(!window.bridge){window.bridge={};var e={},n=0;window.bridge.register=function(t){this[t]||(this[t]=function(i,r){!function(t,i,r){if(e[++n]={params:i,callback:r},navigator.userAgent.indexOf("Android")>-1||navigator.userAgent.indexOf("Adr")>-1)window.prompt(JSON.stringify({cmd:t,id:n,params:i}),"");else{var o=document.createElement("iframe");o.src="bridge://invoke.native.method?handler="+t+"&id="+n,o.style.display="none",document.documentElement.appendChild(o),setTimeout(function(){document.documentElement.removeChild(o)},0)}}(t,i,r)})},window.bridge.obtain=function(n){return JSON.stringify(e[n].params)},window.bridge.callback=function(n,t){var i=e[n];i&&(i.callback&&i.callback(JSON.parse(t)),delete e[n])}}}()},function(e,n,t){var i,r;"function"==typeof Symbol&&Symbol.iterator,window,void 0===(r="function"==typeof(i=function(){function e(){this.version="1.0",this.url="//bdlog.zhidaohulian.com/zt.gif?data=",this.CP=null,this.info_list=[],this.clientType=null,this.that=this,this.send=!0,this.oimg=document.createElement("img")}if(e.prototype.clientTypeFun=function(){/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?this.clientType="phone":this.clientType="PC"},e.prototype.haveBridge=function(e){if("phone"==this.clientType)if(window.bridge.trackerPublicParams)e();else var n=0,t=setInterval(function(){n++,window.bridge.trackerPublicParams?(clearInterval(t),e&&e()):n>=10&&(clearInterval(t),e())},500);else e()},e.prototype.CPInit=function(){this.CP&&!this.CP.sdk_version&&(this.CP.sdk_version=this.version)},e.prototype.getQueryParams=function(e){if(e=e||window.location.href){if(e.indexOf("?")<0)return null;var n=e.indexOf("?"),t=e.substring(n+1).split("&");if(t&&1==t.length&&""==t[0])return null;var i={};return t.forEach(function(e,n){var t=e.split("=");i[t[0]]=t[1]}),i}},e.prototype.deleteUrl=function(e){var n=e;if(!(Object.keys(n).length<=1)){var t=null;for(var i in n){if("info_list"==i)break;t?n[i].length>n[t].length&&(t=i):t=i}return delete n[t],n}this.send=!1},e.prototype.setTrackImage=function(e,n){var t=e||window.location.href,i=n||{};(t=encodeURI(t+JSON.stringify(i))).length>2048&&(i=this.deleteUrl(i),t=encodeURI(t+JSON.stringify(i))),this.oimg.setAttribute("src",t),this.oimg.style.width="0",this.oimg.style.height="0",this.oimg.style.overflow="hidden",document.getElementsByTagName("body")[0].appendChild(this.oimg),document.getElementsByTagName("body")[0].removeChild(this.oimg)},e.prototype.sendPost=function(e){var n=this;n.clientTypeFun();var t=window.navigator.userAgent,i=RegExp(/zhidao/i);if("phone"==n.clientType&&i.test(t))n.haveBridge(function(){window.bridge.trackerPublicParams(null,function(e){if(!e)throw new Error("返回公共参数为null");n.CP=e,n.CP.info_list=n.info_list,n.setTrackImage(n.url,n.CP)})});else{var r=function(e){var n=new RegExp("(^|&)publicParams=([^&]*)(&|$)","i"),t=decodeURIComponent(window.location.search.substr(1)).match(n);return null!=t?decodeURIComponent(t[2]):null}();if(r)n.CP=JSON.parse(r),n.CP.info_list=n.info_list;else{if(n.CP={},t.indexOf("NetType")>-1){var o=t.indexOf("NetType"),a=t.indexOf("Language");n.CP.netType=encodeURIComponent(t.substring(o,a-1).split("/")[1])}t.indexOf("Android")>-1||t.indexOf("Adr")>-1?(n.CP.os=encodeURIComponent("android"),n.CP.app_key=encodeURIComponent("972c0c53d2ddc50605086c1c345fc7b7")):t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(n.CP.os=encodeURIComponent("ios"),n.CP.app_key=encodeURIComponent("149570bd7119a707b2bb98a14c7f3bbd")),n.CP.info_list=n.info_list}n.setTrackImage(n.url,n.CP)}n.CPInit()},e.prototype.track=function(e,n){var t={};if(e){if(t.id=e,t.time=(new Date).getTime(),n)try{t.params=JSON.stringify(n)}catch(e){}this.info_list=[],this.info_list.push(t),this.sendPost()}},window.dataTrack)return n;var n=new e;return n.track.bind(n.that)})?i.call(n,t,n,e):i)||(e.exports=r)},,,function(e,n,t){"use strict";t.r(n),t(8),t(13),t(15),t(1),t(2),t(3);var i=function(){var e=/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?"phone":"PC",n=window.navigator.userAgent,t=RegExp(/zhidao/i);return new Promise(function(i,r){if("phone"==e&&t.test(n))var o=0,a=setInterval(function(){o++,window.bridge&&(i(),clearInterval(a)),o>=10&&(clearInterval(a),r())},100)})},r=function(e){var n=e||null;return new Promise(function(e,t){i().then(function(){window.bridge.getParamsSignature(n,function(n){n||t(),e(n)})})})},o=t(4),a="",s="";function c(e){var n,t,i,o;n=e.num,t=e.size,i=function(e,n){s.endBySize(e.length,n),function(e){for(var n=document.getElementById("dataList"),t=0;t<e.length;t++){var i=e[t],r="",o="",a="";if(i.status)switch(i.relationship){case 0:r="applyFor",o="已申请",a="已申请添加对方为好友";break;case 1:r="friends",o="",a="已是好友";break;case-1:r="addFriendBtn",o="添加好友",a="已注册APP"}else r="wakeUp",o="唤醒",a="对方已领取,未注册APP";var s='<li class="invite_item">\n        <img class="itemPic" src='+i.headImgUrl+' alt="">\n        <div class="itemInfo">\n            <span class="name">'+i.userName+'</span>\n            <span class="register scaleFont">'+a+'</span>\n        </div>\n        <div class="btn_box" data-id=\''+i.userId+"' data-name='"+i.userName+"'\n            data-status='"+i.status+"' data-telphone='"+i.telphone+'\'>\n            <button type="button" class="btn '+r+'">'+o+"</button>\n        </div>\n    </li>",c=document.createElement("li");c.innerHTML=s,n.appendChild(c)}}(e)},o=function(){s.endErr()},r({pageNum:n,pageSize:t}).then(function(e){if(!e)throw new Error("getAwardList获取列表接口签名失败");var n=e;$.ajax({url:"/activity/invite/getAwardList",type:"GET",data:n,success:function(e){if(!e)throw new Error("inviteList接口返回错误");var n=JSON.parse(e),t=n.code,r=(n.msg,n.result);if(0==t){var a=r.data.registerList;i&&i(a,r.data.total)}else o&&o()},error:function(e){throw new Error(e,"inviteList接口请求错误")}})}).catch(function(e){throw new Error(e,"err")})}function d(e,n){var t=e||"",i=n||"";if(!t||!i)throw new Error("参数错误");$("#toast").html(t),$("#toast").show();var r=setTimeout(function(){clearInterval(r),$("#toast").hide()},i)}window.onload=function(){var e,n;o("400501",{}),(n=e||null,new Promise(function(e,t){i().then(function(){window.bridge.trackerPublicParams(n,function(n){n||t(),e(n)})})})).then(function(e){}),r().then(function(e){if(!e)throw new Error("无参数-公共签名获取失败");var n=e;$.ajax({url:"/activity/invite/inviteList",type:"GET",data:n,success:function(e){if(!e)throw new Error("inviteList接口返回错误");var n=JSON.parse(e),t=n.code,i=n.message,r=n.result;if(0!=t)throw new Error(i);var o=r.data;$(".bannerNum").html(o.userInviteAward),$(".inviteAward").html(o.inviteAward),$(".inviteCount").html(o.inviteCount),a=o.userName},error:function(e){throw new Error(e,"inviteList接口请求错误")}})}).catch(function(e){throw new Error(e,"err")}),s&&s.destroy(),s=new MeScroll("mescroll",{up:{auto:!0,callback:c,isBounce:!1,clearEmptyId:"dataList",page:{num:0,size:5},noMoreSize:5,htmlNodata:"<p class='upwarp-nodata'>-- 没有更多数据了 --</p>",empty:{warpId:"dataList",tip:"这里空空如也，快去邀请好友注册领取奖励吧~"}}})},$("#dataList").on("click",".btn_box",function(){var e=$(this),n=$(this).attr("data-id"),t=$(this).attr("data-name"),i=$(this).attr("data-status"),s=$(this).attr("data-telphone");0==e.find(".isDisabled").length&&("0"!==i?(o("400521",{id:n,name:t}),function(e,n){if(!n)throw new Error("userID is null");window.bridge.addIMFriend&&window.bridge.addIMFriend({userId:n,source:"AddSource_Type_Rec"},function(n){if(!n)throw new Error("添加好友bridge返回错误");0==n.code&&e.find(".addFriendBtn").removeClass("addFriendBtn").addClass("applyFor").attr("disabled","disabled").html("已申请")})}(e,n)):(o("400522",{}),function(e){var n=""+s;if(!a||!n)throw new Error("name,phone错误");r({message:encodeURIComponent('["'+a+'"]'),phone:n,templateId:211321,sign:"蘑菇智行",appId:"phoenix"}).then(function(e){if(!e)throw new Error("appSendToSingle发送短信接口签名失败");var n=function(e){var n=e||null,t=[];for(var i in n&&(n="string"==typeof n?JSON.parse(n):n),Object.prototype.hasOwnProperty.call(n),n)n.hasOwnProperty(i)&&t.push(i+"="+n[i]);return t.join("&")}(e);$.ajax({url:"/push/sms/appSendToSingle",type:"GET",data:n,success:function(e){if(!e)throw new Error("appSendToSingle发送短信接口返回失败");d("已向对方发送注册邀请",2e3);var n=JSON.parse(e),t=n.code,i=n.msg;0==t?d("已向对方发送注册邀请",2e3):d(i)},error:function(e){throw new Error(e,"appSendToSingle接口请求错误")}})}).catch(function(e){throw new Error(e,"err")})}()))}),$(".shareBox").on("click",".shareItem",function(){!function(e){if(!a)throw new Error("没有userName，无法分享");var n="",t=e||"",i=null;r().then(function(e){var r=e;switch(n=window.location.origin+"/femushroom/commendprize/phone.html?userName="+a+"&publicParams="+encodeURIComponent(JSON.stringify(r)),t){case"wechat":o("400503",{}),i={icon:"http://img.zhidaohulian.com/fileServer/defaultPath/058bbc232b8b5ed0947f297b51eb8426.png",title:"快来跟我加入蘑菇智行，领取金币，一起享受老司机福利吧",content:"领金币，可兑换商城礼品哦",url:n};break;case"wechat_timeline":o("400504",{}),i={icon:"http://img.zhidaohulian.com/fileServer/defaultPath/058bbc232b8b5ed0947f297b51eb8426.png",title:"快来跟我加入蘑菇智行，领取金币，一起享受老司机福利吧",content:"领金币，可兑换商城礼品哦",url:n}}if(!window.bridge.channelShare)throw new Error("bridge.channelShare is not defined");window.bridge.channelShare({channel:t,data:i},function(e){})}).catch(function(e){throw new Error(e,"err")})}($(this).data("share"))}),$(".lookRules").on("click",function(){o("400502",{}),setTimeout(function(){window.location.href=window.location.origin+"/femushroom/commendprize/rules.html"},200)})},function(e,n){},,,,,function(e,n){},,function(e,n){}],[[7,0,5]]]);
//# sourceMappingURL=index.1b3fef1.js.map