//语文成绩按从高到低排序
function languageSortTop () {
	var array=new Array();
	var array_tr=new Array();
	var student=document.getElementsByClassName('student');
	var table=document.getElementsByTagName('tbody')[0];
	var language=document.getElementsByClassName('language');
	//对成绩排序
	for(var i=1;i<language.length;i++)
	{
		array.push(language[i].innerHTML);
		array_tr.push(table.children[i].cloneNode(true));
	}
	array.sort(function (a,b)
	{
		return b-a;
	})
	//删除原来的tr
	var len=student.length;
	for(var x=0;x<len;x++)
	{
		table.removeChild(table.getElementsByTagName('tr')[1]);
		
	}
	//增加tr
	for(var i=0;i<array.length;i++)
	{
		
		for(var j=0;j<len;j++)
		{
			
			if(array[i]==array_tr[j].childNodes[3].innerHTML)
				{
					table.appendChild(array_tr[j]);
					
			}
			
		}
	}

}
//语文成绩按从低到高排序
function languageSortLow () {
	var array=new Array();
	var array_tr=new Array();
	var student=document.getElementsByClassName('student');
	var table=document.getElementsByTagName('tbody')[0];
	var language=document.getElementsByClassName('language');
	//对成绩排序
	for(var i=1;i<language.length;i++)
	{
		array.push(language[i].innerHTML);
		array_tr.push(table.children[i].cloneNode(true));
	}
	array.sort(function (a,b)
	{
		return a-b;
	})
	//删除原来的tr
	var len=student.length;
	for(var x=0;x<len;x++)
	{
		table.removeChild(table.getElementsByTagName('tr')[1]);
		
	}
	//增加tr
	for(var i=0;i<array.length;i++)
	{
		
		for(var j=0;j<len;j++)
		{
			
			if(array[i]==array_tr[j].childNodes[3].innerHTML)
				{
					table.appendChild(array_tr[j]);
					
			}
			
		}
	}

}
//数学成绩从高到低排序
function mathSortTop () {
	var array=new Array();
	var array_tr=new Array();
	var student=document.getElementsByClassName('student');
	var table=document.getElementsByTagName('tbody')[0];
	var language=document.getElementsByClassName('math');
	//对成绩排序
	for(var i=1;i<language.length;i++)
	{
		array.push(language[i].innerHTML);
		array_tr.push(table.children[i].cloneNode(true));
	}
	array.sort(function (a,b)
	{
		return b-a;
	})
	//删除原来的tr
	var len=student.length;
	for(var x=0;x<len;x++)
	{
		table.removeChild(table.getElementsByTagName('tr')[1]);
		
	}
	//增加tr
	for(var i=0;i<array.length;i++)
	{
		
		for(var j=0;j<len;j++)
		{
			
			if(array[i]==array_tr[j].childNodes[5].innerHTML)
				{
					table.appendChild(array_tr[j]);
					
			}
			
		}
	}

}
//按数学成绩从低到高排序
function mathSortLow () {
	var array=new Array();
	var array_tr=new Array();
	var student=document.getElementsByClassName('student');
	var table=document.getElementsByTagName('tbody')[0];
	var language=document.getElementsByClassName('math');
	//对成绩排序
	for(var i=1;i<language.length;i++)
	{
		array.push(language[i].innerHTML);
		array_tr.push(table.children[i].cloneNode(true));
	}
	array.sort(function (a,b)
	{
		return a-b;
	})
	//删除原来的tr
	var len=student.length;
	for(var x=0;x<len;x++)
	{
		table.removeChild(table.getElementsByTagName('tr')[1]);
		
	}
	//增加tr
	for(var i=0;i<array.length;i++)
	{
		
		for(var j=0;j<len;j++)
		{
			
			if(array[i]==array_tr[j].childNodes[5].innerHTML)
				{
					table.appendChild(array_tr[j]);
					
			}
			
		}
	}

}
//按英语成绩从高到低排序
function englishSortTop () {
	var array=new Array();
	var array_tr=new Array();
	var student=document.getElementsByClassName('student');
	var table=document.getElementsByTagName('tbody')[0];
	var language=document.getElementsByClassName('english');
	//对成绩排序
	for(var i=1;i<language.length;i++)
	{
		array.push(language[i].innerHTML);
		array_tr.push(table.children[i].cloneNode(true));
	}
	array.sort(function (a,b)
	{
		return b-a;
	})
	//删除原来的tr
	var len=student.length;
	for(var x=0;x<len;x++)
	{
		table.removeChild(table.getElementsByTagName('tr')[1]);
		
	}
	//增加tr
	for(var i=0;i<array.length;i++)
	{
		
		for(var j=0;j<len;j++)
		{
			
			if(array[i]==array_tr[j].childNodes[7].innerHTML)
				{
					table.appendChild(array_tr[j]);
					
			}
			
		}
	}

}
//按英语成绩从低到高排序
function englishSortLow () {
	var array=new Array();
	var array_tr=new Array();
	var student=document.getElementsByClassName('student');
	var table=document.getElementsByTagName('tbody')[0];
	var language=document.getElementsByClassName('english');
	//对成绩排序
	for(var i=1;i<language.length;i++)
	{
		array.push(language[i].innerHTML);
		array_tr.push(table.children[i].cloneNode(true));
	}
	array.sort(function (a,b)
	{
		return a-b;
	})
	//删除原来的tr
	var len=student.length;
	for(var x=0;x<len;x++)
	{
		table.removeChild(table.getElementsByTagName('tr')[1]);
		
	}
	//增加tr
	for(var i=0;i<array.length;i++)
	{
		
		for(var j=0;j<len;j++)
		{
			
			if(array[i]==array_tr[j].childNodes[7].innerHTML)
				{
					table.appendChild(array_tr[j]);
					
			}
			
		}
	}

}
//按总分从高到低排序
function allSortTop () {
	var array=new Array();
	var array_tr=new Array();
	var student=document.getElementsByClassName('student');
	var table=document.getElementsByTagName('tbody')[0];
	var language=document.getElementsByClassName('all');
	//对成绩排序
	for(var i=1;i<language.length;i++)
	{
		array.push(language[i].innerHTML);
		array_tr.push(table.children[i].cloneNode(true));
	}
	array.sort(function (a,b)
	{
		return b-a;
	})
	//删除原来的tr
	var len=student.length;
	for(var x=0;x<len;x++)
	{
		table.removeChild(table.getElementsByTagName('tr')[1]);
		
	}
	//增加tr
	for(var i=0;i<array.length;i++)
	{
		
		for(var j=0;j<len;j++)
		{
			
			if(array[i]==array_tr[j].childNodes[9].innerHTML)
				{
					table.appendChild(array_tr[j]);
					
			}
			
		}
	}

}
//按总分从低到高排序
function allSortLow () {
	var array=new Array();
	var array_tr=new Array();
	var student=document.getElementsByClassName('student');
	var table=document.getElementsByTagName('tbody')[0];
	var language=document.getElementsByClassName('all');
	//对成绩排序
	for(var i=1;i<language.length;i++)
	{
		array.push(language[i].innerHTML);
		array_tr.push(table.children[i].cloneNode(true));
	}
	array.sort(function (a,b)
	{
		return a-b;
	})
	//删除原来的tr
	var len=student.length;
	for(var x=0;x<len;x++)
	{
		table.removeChild(table.getElementsByTagName('tr')[1]);
		
	}
	//增加tr
	for(var i=0;i<array.length;i++)
	{
		
		for(var j=0;j<len;j++)
		{
			
			if(array[i]==array_tr[j].childNodes[9].innerHTML)
				{
					table.appendChild(array_tr[j]);
					
			}
			
		}
	}

}
//绑定按钮动作
function init()
{
	
	var language_top=document.getElementsByClassName('language_top')[0];
	var language_bottom=document.getElementsByClassName('language_bottom')[0];

	var math_top=document.getElementsByClassName('math_top')[0];
	var math_bottom=document.getElementsByClassName('math_bottom')[0];

	var english_top=document.getElementsByClassName('english_top')[0];
	var english_bottom=document.getElementsByClassName('english_bottom')[0];

	var all_top=document.getElementsByClassName('all_top')[0];
	var all_bottom=document.getElementsByClassName('all_bottom')[0];

	var top=document.getElementsByClassName('top');
	var bottom=document.getElementsByClassName('bottom');

	language_top.onclick=function()
	{
		for(var n=0;n<top.length;n++)
		{
			top[n].style.borderBottomColor = '#ffffff';
			top[n].style.borderTopColor = 'transparent';
			top[n].style.borderRightColor = 'transparent';
			top[n].style.borderLeftColor = 'transparent';
		}
		for(var m=0;m<bottom.length;m++)
		{
			bottom[m].style.borderTopColor = '#ffffff';
			bottom[m].style.borderLeftColor = 'transparent';
			bottom[m].style.borderRightColor = 'transparent';
			bottom[m].style.borderBottomColor = 'transparent';
		}
		languageSortTop ();
		language_top.style.borderBottomColor= '#004DFF';
	}
	language_bottom.onclick=function()
	{

		for(var n=0;n<top.length;n++)
		{
			top[n].style.borderBottomColor = '#ffffff';
			top[n].style.borderTopColor = 'transparent';
			top[n].style.borderRightColor = 'transparent';
			top[n].style.borderLeftColor = 'transparent';
		}
		for(var m=0;m<bottom.length;m++)
		{
			bottom[m].style.borderTopColor = '#ffffff';
			bottom[m].style.borderLeftColor = 'transparent';
			bottom[m].style.borderRightColor = 'transparent';
			bottom[m].style.borderBottomColor = 'transparent';
		}
		languageSortLow ();
		language_bottom.style.borderTopColor = '#004DFF';
	}
	math_top.onclick=function()
	{
		for(var n=0;n<top.length;n++)
		{
			top[n].style.borderBottomColor = '#ffffff';
			top[n].style.borderTopColor = 'transparent';
			top[n].style.borderRightColor = 'transparent';
			top[n].style.borderLeftColor = 'transparent';
		}
		for(var m=0;m<bottom.length;m++)
		{
			bottom[m].style.borderTopColor = '#ffffff';
			bottom[m].style.borderLeftColor = 'transparent';
			bottom[m].style.borderRightColor = 'transparent';
			bottom[m].style.borderBottomColor = 'transparent';
		}
		 mathSortTop ();
		 math_top.style.borderBottomColor = '#004DFF';
	}
	math_bottom.onclick=function()
	{
		for(var n=0;n<top.length;n++)
		{
			top[n].style.borderBottomColor = '#ffffff';
			top[n].style.borderTopColor = 'transparent';
			top[n].style.borderRightColor = 'transparent';
			top[n].style.borderLeftColor = 'transparent';
		}
		for(var m=0;m<bottom.length;m++)
		{
			bottom[m].style.borderTopColor = '#ffffff';
			bottom[m].style.borderLeftColor = 'transparent';
			bottom[m].style.borderRightColor = 'transparent';
			bottom[m].style.borderBottomColor = 'transparent';
		}
		 mathSortLow ();
		 math_bottom.style.borderTopColor = '#004DFF';
	}
	english_top.onclick=function()
	{
		for(var n=0;n<top.length;n++)
		{
			top[n].style.borderBottomColor = '#ffffff';
			top[n].style.borderTopColor = 'transparent';
			top[n].style.borderRightColor = 'transparent';
			top[n].style.borderLeftColor = 'transparent';
		}
		for(var m=0;m<bottom.length;m++)
		{
			bottom[m].style.borderTopColor = '#ffffff';
			bottom[m].style.borderLeftColor = 'transparent';
			bottom[m].style.borderRightColor = 'transparent';
			bottom[m].style.borderBottomColor = 'transparent';
		}
		 englishSortTop ();
		 english_top.style.borderBottomColor = '#004DFF';
	}
	english_bottom.onclick=function()
	{
		for(var n=0;n<top.length;n++)
		{
			top[n].style.borderBottomColor = '#ffffff';
			top[n].style.borderTopColor = 'transparent';
			top[n].style.borderRightColor = 'transparent';
			top[n].style.borderLeftColor = 'transparent';
		}
		for(var m=0;m<bottom.length;m++)
		{
			bottom[m].style.borderTopColor = '#ffffff';
			bottom[m].style.borderLeftColor = 'transparent';
			bottom[m].style.borderRightColor = 'transparent';
			bottom[m].style.borderBottomColor = 'transparent';
		}
		 englishSortLow ();
		 english_bottom.style.borderTopColor = '#004DFF';
	}
	all_top.onclick=function()
	{
		for(var n=0;n<top.length;n++)
		{
			top[n].style.borderBottomColor = '#ffffff';
			top[n].style.borderTopColor = 'transparent';
			top[n].style.borderRightColor = 'transparent';
			top[n].style.borderLeftColor = 'transparent';
		}
		for(var m=0;m<bottom.length;m++)
		{
			bottom[m].style.borderTopColor = '#ffffff';
			bottom[m].style.borderLeftColor = 'transparent';
			bottom[m].style.borderRightColor = 'transparent';
			bottom[m].style.borderBottomColor = 'transparent';
		}
		 allSortTop ();
		 all_top.style.borderBottomColor = '#004DFF';
	}
	all_bottom.onclick=function()
	{
		for(var n=0;n<top.length;n++)
		{
			top[n].style.borderBottomColor = '#ffffff';
			top[n].style.borderTopColor = 'transparent';
			top[n].style.borderRightColor = 'transparent';
			top[n].style.borderLeftColor = 'transparent';
		}
		for(var m=0;m<bottom.length;m++)
		{
			bottom[m].style.borderTopColor = '#ffffff';
			bottom[m].style.borderLeftColor = 'transparent';
			bottom[m].style.borderRightColor = 'transparent';
			bottom[m].style.borderBottomColor = 'transparent';
		}
		 allSortLow ();
		 all_bottom.style.borderTopColor = '#004DFF';
	}
}
init();