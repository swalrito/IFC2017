

function judge () {

	var student=document.getElementById("internalStudent");
	var notStudent=document.getElementById("notInternalStudent");
	var inschool=document.getElementById("inschool");
	var outschool=document.getElementById("outschool");
	notStudent.onclick=function()
	{
		inschool.style.display = 'none';
		outschool.style.display = 'block';
	}

	student.onclick=function()
	{
		outschool.style.display = 'none';
		inschool.style.display = 'block';
	}
}

function addcolege_BJ()
{
	var college=document.getElementById('college');
	college.options.length=0;
	college.options.add(new Option("北京大学","BJ_1"));
	college.options.add(new Option("北京大学","BJ_2"));
	college.options.add(new Option("北京大学","BJ_3"));
	college.options.add(new Option("北京大学","BJ_4"));
}

function addcolege_SH()
{
	var college=document.getElementById('college');
	college.options.length=0;
	college.options.add(new Option("上海大学","SH_1"));
	college.options.add(new Option("上海大学","SH_2"));
	college.options.add(new Option("上海大学","SH_3"));
	college.options.add(new Option("上海大学","SH_4"));
}

function addcolege_GX()
{
	var college=document.getElementById('college');
	college.options.length=0;
	college.options.add(new Option("广西大学","GX_1"));
	college.options.add(new Option("广西大学","GX_2"));
	college.options.add(new Option("广西大学","GX_3"));
	college.options.add(new Option("广西大学","GX_4"));
}

function choose()
{
	var city=document.getElementById("city");
	for(var i=0;i<city.options.length;i++)
	{
		if(city.options[i].selected)
		{
			var cityName=city.options[i].value;
		}
	}
return cityName;
}

function changeSelect()
{
	var city=document.getElementById("city");
	city.onchange=function(){
	if(choose()=="BJ")
	{
		addcolege_BJ();
	}
	else
	{
		if(choose()=="SH")
		{
			addcolege_SH();
		}
		else
		{
			if(choose()=="GX")
			{
				addcolege_GX();
			}
		}
	}
	}
}

judge();
changeSelect();