
function leftIn()
{
	var num=document.getElementById('number');
	var li=document.createElement('li');
	var ullist=document.getElementById('num-list');
	if(num.value=="")
	{
		alert("请输入一个有效数字");
	}
	else if(!isNaN(num.value))
	{
		li.innerHTML=num.value;
        ullist.insertBefore(li,ullist.firstChild);
		num.value="";
	}
	else
	{
		alert("请输入一个数字");
	}
}
function rightIn()
{
	var num=document.getElementById('number');
	var li=document.createElement('li');
	var ullist=document.getElementById('num-list');
	if(num.value=="")
	{
		alert("请输入一个有效数字");
	}
	else if(!isNaN(num.value))
	{
		li.innerHTML=num.value;
        ullist.insertBefore(li,ullist.lastChild);
		num.value="";
	}
	else
	{
		alert("请输入一个数字");
	}
}
function leftOut()
{
	
	var ullist=document.getElementById('num-list');
	ullist.removeChild(ullist.firstChild);
}
function rightOut()
{
	
	var ullist=document.getElementById('num-list');
	ullist.removeChild(ullist.lastChild);
}
function init()
{
	var lI=document.getElementById('left-in');
	var lO=document.getElementById('left-out');
	var RI=document.getElementById('right-in');
	var RO=document.getElementById('right-out');

	lI.onclick=leftIn;
	RI.onclick=rightIn;
	RO.onclick=rightOut;
	lO.onclick=leftOut;
}
function removeElement()
{
	var ullist=document.getElementById('num-list');
	ullist.addEventListener("click",function (e){
		if(event.target.nodeName.toLowerCase()=="li")
		{
			
			ullist.removeChild(event.target);
		}
	})
}
removeElement();
init();