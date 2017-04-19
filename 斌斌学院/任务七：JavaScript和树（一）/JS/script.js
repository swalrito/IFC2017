function preOrder(arr,code)
{
	if(code!==null)
	{arr.push(code);
	preOrder(arr,code.firstElementChild);
	preOrder(arr,code.lastElementChild);}
}

function inOrder(arr,code)
{
	if(code!==null)
	{inOrder(arr,code.firstElementChild);
	arr.push(code);
	inOrder(arr,code.lastElementChild);}
}

function postOrder(arr,code)
{
	if(code!==null)
	{postOrder(arr,code.firstElementChild);
	postOrder(arr,code.lastElementChild);
	arr.push(code);}
}

function change(arr,a)
{
	for(var j=0;j<arr.length;j++)
	{
		arr[j].style.backgroundColor = "#fff";
	}
	a.style.backgroundColor="#ff0000";
}



function action(arr,i)
{

	var time=setInterval(function ()
	{
		if(i>arr.length-1)
		{
			arr[arr.length-1].style.backgroundColor="#fff";
			clearInterval(time);
			return;
		}
		else
		{
			change(arr,arr[i]);

			++i;
		}
	},500)
}

function btnaction(fn,node)
{

	var i = 0,
	arr=[];
	fn(arr,node);
	action(arr,i);

}

function init()
{
	var prebtn=document.getElementsByClassName("DLR");
	var inbtn=document.getElementsByClassName('LDR');
	var postbtn=document.getElementsByClassName('LRD');

	var box_one=document.getElementsByClassName('box-one');

	prebtn[0].onclick = function () {btnaction(preOrder,box_one[0]);};
	inbtn[0].onclick=function () {btnaction(inOrder,box_one[0]);};
	postbtn[0].onclick=function () {btnaction(postOrder,box_one[0]);};
}
init();