
function leftIn()
{
	var num=document.getElementById('number');
	var li=document.createElement('li');
	var ullist=document.getElementById('num-list');

		li.innerHTML=num.value;
        ullist.insertBefore(li,ullist.firstChild);
		num.value="";
}
function rightIn()
{
	var num=document.getElementById('number');
	var li=document.createElement('li');
	var ullist=document.getElementById('num-list');
	li.innerHTML=num.value;
        ullist.insertBefore(li,ullist.lastChild);
		num.value="";
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
	var btnsearch=document.getElementById('btn-search');

	lI.onclick=leftIn;
	RI.onclick=rightIn;
	RO.onclick=rightOut;
	lO.onclick=leftOut;
	btnsearch.onclick=searchLi;
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

function searchLi()
{
	var ullist=document.getElementById('num-list');
	var search=document.getElementById('search');
	var re=new RegExp(search.value,["g"]);
		for(var i=0;i<ullist.children.length;i++)
	{
		
		ullist.children[i].innerHTML=ullist.children[i].innerHTML.replace(re,"<span>"+search.value+"</span>");
	}

	search.value="";
}
removeElement();
init();