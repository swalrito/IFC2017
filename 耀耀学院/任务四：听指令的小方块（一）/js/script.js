function turnTop () {
	var block=document.getElementById('block');

	block.style.transform = 'rotate(0deg)';
	block.setAttribute("direction", "top");
}
function turnRight () {
	var rec=document.getElementById('rec');
	var block=document.getElementById('block');

	
	block.style.transform = 'rotate(90deg) ';
	block.setAttribute("direction", "right");
	
}
function turnButtom () {
	var block=document.getElementById('block');
	

	block.style.transform = 'rotate(180deg)';
	block.setAttribute("direction", "buttom");
}
function turnLeft () {
	var block=document.getElementById('block');
	

	block.style.transform = 'rotate(-90deg)';
	block.setAttribute("direction", "left");
}

function go(){
var block=document.getElementById('block');
var direction=block.getAttribute('direction');
var xpos=parseInt(block.offsetLeft);
var ypos=parseInt(block.offsetTop);
 
     if(direction=='top')
     {
     	if(ypos==48)
     	{
     		alert('已经移动到棋盘边缘，请换方向移动。')
     	}
     	else {
     		ypos=ypos-50;
     		block.style.top=ypos+'px';
     	}
     }
     if(direction=='right')
     {
     	if(xpos==542)
     	{
     		alert('已经移动到棋盘边缘，请换方向移动。');
     	}
     	else {
     		xpos=xpos+50;
     		block.style.left=xpos+'px';
     	}
     		
     	}

      if(direction=='buttom')
     {
     
     	if(ypos==498)
     	{
     		alert('已经移动到棋盘边缘，请换方向移动。');
     	}
     	else {
				ypos=ypos+50;
				block.style.top=ypos+'px';
     	}
     
     		
     }
       if(direction=='left')
     {
     
     	if(xpos==92)
     	{
     		alert('已经移动到棋盘边缘，请换方向移动。');
     	}
     	else {
				xpos=xpos-50;
				block.style.left=xpos+'px';
     	}
     
     		
     }
}  

function init()
{
	var btn_top=document.getElementById('turn-top');
	var btn_left=document.getElementById('turn-left');
	var btn_bottom=document.getElementById('turn-bottom');
	var btn_right=document.getElementById('turn-right');
	var btn_go=document.getElementById('go');

	btn_bottom.onclick=function(){turnButtom();};

	btn_right.onclick=function(){turnRight();};

	btn_left.onclick=function(){turnLeft();};

	btn_top.onclick=function(){turnTop();};

	btn_go.onclick=function(){ go();};

}
init();