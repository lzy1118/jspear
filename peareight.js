/*
* @Author: Lenovo
* @Date:   2019-12-11 18:31:18
* @Last Modified by:   Lenovo
* @Last Modified time: 2019-12-15 10:53:49
*/
var roll =document.getElementById('roll');
var r1 = document.getElementById('r1');
var box = document.getElementById('box');
var nav = document.getElementById('nav');
var navlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;//图片下标 0-6，对应的图片是5123451
var timer;
var isMoving = false;
// 轮播下一
var i = 0
window.onload=function()
{
	var speed = -900;
	setInterval(function(){
		if(speed===400)
		{
			speed=-900;
		}
		speed+=2;
		r1.style.right=speed+"px";
	},25)
}
setInterval("gun()",1000);
function gun() {
	var content = r1.innerText;
	
}
function next(){
	if(!isMoving){
		isMoving=true;
		index++;
		navmove();
		animate(slider,{left:-1200*index},function(){
			if(index ===6){
				slider.style.left ='-1200px';
				index = 1;
			}
			isMoving = false;
		});
	}
	
}
function prev(){
	if(!isMoving){
		isMoving=true;
		index--;
		navmove();
		animate(slider,{left:-1200*index},function(){
			if(index ===0){
				slider.style.left ='-6000px';
				index = 5;
			}
			isMoving = false;
		});
	}
}
var timer = setInterval(next,3000);
// 鼠标划入清定时器
box.onmouseover = function(){
	animate(left,{opacity:50});
	animate(right,{opacity:50});
	clearInterval(timer);
}
// 鼠标划出开定时器
box.onmouseout = function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
//小按钮点击事件
for(var i = 0;i<navlist.length;i++){
	navlist[i].idx = i;
	navlist[i].onclick = function(){
		index = this.idx+1;
		navmove();
		animate(slider,{left:-1200*index});
	}
}
//背景色

function navmove(){
	for(var i = 0;i<navlist.length;i++){
		navlist[i].className = "";

	}
	if(index===6){
		navlist[0].className = "active";
	}else if(index===0){
		navlist[4].className = "active";
	}else{
		navlist[index-1].className="active";
	}
}