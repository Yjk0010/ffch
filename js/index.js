var end = document.getElementById('indexend');
var mycanvas = document.getElementById('monicker');

var ctx = mycanvas.getContext('2d');
var str = '非凡英语';
ctx.font = 'italic 48px 微软雅黑';
var gra = ctx.createLinearGradient(0,0,210,0);
gra.addColorStop(0,'red');
gra.addColorStop(0.25,'#f0f');
gra.addColorStop(0.5,'yellow');
gra.addColorStop(0.75,'#0ff');
gra.addColorStop(1,'pink');
ctx.strokeStyle = gra;
ctx.strokeText(str,0,50);

//关闭
end.onclick = function(){
	logout();
}

// 获取当前界面高
var mainBox = document.getElementById("main");
mainBox.style.height = document.documentElement.clientHeight + "px";

// 关闭窗口
function logout(){
	if(confirm("确定要退出吗？")){
	// 移动端|PC端
	var userAgent = navigator.userAgent;
	if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") !=-1) {
	   window.location.href="about:blank";
	}else if(userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1){
	   window.opener=null;window.open('about:blank','_self','').close();
	}else {
	   window.opener = null;
	   window.open("about:blank", "_self");
	   window.close();
	}
	// 微信端
	WeixinJSBridge.call('closeWindow');
	}
}