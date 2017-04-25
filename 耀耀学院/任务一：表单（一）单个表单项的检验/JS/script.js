function judge () {
	var value=document.getElementById('value');
	var article=document.getElementById('hint');
		if(value.value.length==0)
			{
				article.innerHTML="不能为空。";
				article.style.color = '#ff0000';
		
			}
	
	else
	{
		if(value.value.length!==0&&value.value.length<4)
	{
		article.innerHTML="字符过短，至少为4字符。";
		article.style.color = '#ff0000';
		
	}
		
		else {
			if (value.value.length>16) {
			article.innerHTML="字符过长，最多为16字符。";
			article.style.color = '#ff0000';
		}
			
			else
			{
				article.innerHTML="格式正确。";
				article.style.color = '#07FA11';
	
			}
		}
	}
	
}

function init ()
{
	var button=document.getElementById('submit');
	button.onclick=function(){

		judge();
		return false;
	}
}

init();