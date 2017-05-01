function traTop () {
               var block=document.getElementById('block');
               var xpos=parseInt(block.offsetLeft);
               var ypos=parseInt(block.offsetTop);   
               if(ypos<=48)
               {
               alert('已经移动到棋盘边缘，请换方向移动。')
               }
               else {
               ypos=ypos-50;

               block.style.top=ypos+'px';
               }
}

function turnTop () {
               var block=document.getElementById('block');
               var xpos=parseInt(block.offsetLeft);
               var ypos=parseInt(block.offsetTop);  


               block.style.transform = 'rotate(0deg)'; 
}



function traRight () {
               var block=document.getElementById('block');
               var xpos=parseInt(block.offsetLeft);
               var ypos=parseInt(block.offsetTop);
               if(xpos>=542)
               {
               alert('已经移动到棋盘边缘，请换方向移动。');
               }
               else {
               xpos=xpos+50;

               block.style.left=xpos+'px';
               }	
}

function turnRight () {
               var block=document.getElementById('block');
               var xpos=parseInt(block.offsetLeft);
               var ypos=parseInt(block.offsetTop);

               block.style.transform = 'rotate(90deg)';
}


function traBottom () {
                    var block=document.getElementById('block');
                    var xpos=parseInt(block.offsetLeft);
                    var ypos=parseInt(block.offsetTop);
                    
                    if(ypos>=498)
                    {
                    alert('已经移动到棋盘边缘，请换方向移动。');
                    }
                    else {
                    ypos=ypos+50;
                    block.style.top=ypos+'px';
                    }}

function turnBottom () {
                    var block=document.getElementById('block');
                    var xpos=parseInt(block.offsetLeft);
                    var ypos=parseInt(block.offsetTop);
                    block.style.transform = 'rotate(180deg)';
               }
	
function traLeft () {
                    var block=document.getElementById('block');
                    var xpos=parseInt(block.offsetLeft);
                    var ypos=parseInt(block.offsetTop);
                    
                    if(xpos<=92)
                    {
                    alert('已经移动到棋盘边缘，请换方向移动。');
                    }
                    else {
                    xpos=xpos-50;
                    block.style.left=xpos+'px';
                    
                    }
}

function turnLeft () {
                    var block=document.getElementById('block');
                    var xpos=parseInt(block.offsetLeft);
                    var ypos=parseInt(block.offsetTop);
                    block.style.transform = 'rotate(-90deg)';
}



function init()
{
	var btn_top=document.getElementById('turn-top');
	var btn_left=document.getElementById('turn-left');
	var btn_bottom=document.getElementById('turn-bottom');
	var btn_right=document.getElementById('turn-right');
	var btn_turnTop=document.getElementById('moveTop');
     var btn_turnLeft=document.getElementById('moveLeft');
     var btn_turnBottom=document.getElementById('moveBottom');
     var btn_turnRight=document.getElementById('moveRight');

        btn_bottom.onclick=function(){traBottom();};
        
        btn_right.onclick=function(){traRight();};
        
        btn_left.onclick=function(){traLeft();};
        
        btn_top.onclick=function(){traTop();};
        
        btn_turnLeft.onclick=function(){
          turnLeft();
          setTimeout('traLeft()',1000);
     };
        
        btn_turnTop.onclick=function(){
          turnTop();
          setTimeout('traTop()',1000);
     };
        btn_turnRight.onclick=function(){
          turnRight();
          setTimeout('traRight()', 1000);
          
     };
        btn_turnBottom.onclick=function(){
          turnBottom();
         setTimeout('traBottom()',1000);
     };


}
init();