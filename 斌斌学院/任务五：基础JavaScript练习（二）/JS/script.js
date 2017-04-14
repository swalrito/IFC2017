
function leftIn()
{
	var num=document.getElementById('number');
	var li=document.createElement('li');
	var ullist=document.getElementById('num-list');
	if(num.value==""||num.value<10||num.value>100)
	{
		alert("请输入一个10到100之间的有效数字");
	}
	else if(!isNaN(num.value)&&ullist.children.length<=59)
	{
		li.style.height=num.value+'px';
        ullist.insertBefore(li,ullist.firstChild);
		num.value="";
	}
	else
	{
		alert("请输入一个数字,或者当前数列已满，请删除后再添加数字。");
	}
}
function rightIn()
{
	var num=document.getElementById('number');
	var li=document.createElement('li');
	var ullist=document.getElementById('num-list');
	if(num.value==""||num.value<10||num.value>100)
	{
		alert("请输入一个10到100之间的有效数字");
	}
	else if(!isNaN(num.value)&&ullist.children.length<=59)
	{
		li.style.height=num.value+'px';
        ullist.insertBefore(li,ullist.lastChild);
		num.value="";
	}
	else
	{
		alert("请输入一个数字,或者当前数列已满，请删除后再添加数字。");
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
	var sorting=document.getElementById('sorting');

	lI.onclick=leftIn;
	RI.onclick=rightIn;
	RO.onclick=rightOut;
	lO.onclick=leftOut;
	sorting.onclick=datasort;
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
function datasort()
{
	var ullist=document.getElementById('num-list');
	if(ullist.children.length<1)
	{
		alert("请输入数字");
	}
	else
		  var data=new Array();
		for(var i=0;i<ullist.children.length;i++)
		{
			data.push(ullist.children[i].style.height);
			data[i]=parseInt(data[i]);
		}
		data.sort(function a(b,c){return b-c;});
		for(var j=0;j<ullist.children.length;j++)
		{
			ullist.children[j].style.height=data[j]+'px';
		}
	}

removeElement();
init();