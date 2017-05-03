function float () {
	var btn=document.getElementById('button');
	var display =document.getElementById('float');
	var cover=document.getElementById('cover');
	var confirm=document.getElementsByClassName('ok');
	var cancel=document.getElementsByClassName('cancel');
	var header=document.getElementById('floatHead');
	btn.onclick=function(){

		display.style.display = 'block';
		display.style.zIndex=3;
		cover.style.display = 'block';
	}
	header.onmousedown=function(event)
		{
			//获取鼠标按下时的坐标
			var mouse_x=event.clientX;
			var mouse_y=event.clientY;
			//获取浮出层此时的坐标
			var float=document.getElementById('float');
			var xpos=float.offsetLeft;
			var ypos=float.offsetTop;
			
			document.addEventListener('mousemove',moveHandler, true);
			document.addEventListener('mouseup',upHandler,true);
			//阻止冒泡
			event.stopPropagation();
			//阻止任何默认操作
			event.preventDefault();
			//捕获鼠标移动时的坐标,并让float移动
			function moveHandler(e)
			{
				e=window.event;
				float.style.left=(xpos+e.clientX-mouse_x)+'px';
				float.style.marginLeft =0+'px';
				float.style.top=(ypos+e.clientY-mouse_y)+'px';
				float.style.marginTop =0+'px';

			e.stopPropagation();

			}
			function upHandler(e)
			{
				e=window.event;
				document.removeEventListener('mouseup', upHandler,true);
				document.removeEventListener('mousemove',moveHandler, true);

				e.stopPropagation();
				
			}
		}
	
	confirm[0].onclick=function()
	{
		display.style.display = 'none';
		cover.style.display = 'none';
	}
	cancel[0].onclick=function()
	{
		display.style.display = 'none';
		cover.style.display = 'none';
	}
	cover.onclick=function()
	{
		display.style.display = 'none';
		cover.style.display = 'none';
	}

}


float();