function judge () {
	var name=document.getElementById('name');
	var password=document.getElementById('password');
	var confirm=document.getElementById('confirm');
	var email=document.getElementById('email');
	var phoneNumber=document.getElementById('phoneNumber');
	var name_info=document.createElement("p");
	var password_info=document.createElement("p");
	var confirm_info=document.createElement("p");
	var email_info=document.createElement("p");
	var phoneNumber_info=document.createElement("p");

	name.onfocus=function(){

		var value=document.getElementById('name_info');
		if(!value)
		{

			name_info.innerHTML="必填，长度为4~16字符。";
			name_info.setAttribute("class", "value");
			name_info.setAttribute("id", "name_info");
			name.parentNode.appendChild(name_info);
		}
	}
	name.onblur=function(){
		
		if(name.value==0)
		{
			name_info.style.color = '#ff0000';
			name_info.innerHTML="不能为空。";
		}
		else {
			if(name.value!==0&&name.value.length<4)
			{
				name_info.style.color = '#ff0000';
				name_info.innerHTML="名字过短，至少为4字符。";
			}
			else {
				if(name.value.length>16)
				{
					name_info.style.color = '#ff0000';
					name_info.innerHTML="名字过长，最多为16字符。";
				}
				else {

					name_info.style.color = '#00FF3E';
					name_info.innerHTML="格式正确。";
				}
			}
		}
	}
	

	password.onfocus=function(){

		var value=document.getElementById('password_info');
		if(!value)
		{

			password_info.innerHTML="必填，长度为6~18字符。";
			password_info.setAttribute("class", "value");
			password_info.setAttribute("id", "password_info");
			password.parentNode.appendChild(password_info);
		}
	}
	password.onblur=function(){
		
		if(password.value==0)
		{
			password_info.style.color = '#ff0000';
			password_info.innerHTML="不能为空。";
		}
				else {
						if(password.value!==0&&password.value.length<6)
						{
							password_info.style.color = '#ff0000';
							password_info.innerHTML="长度过短，至少为6字符。";
						}
						else {
							if(password.value.length>18)
							{
								password_info.style.color = '#ff0000';
								password_info.innerHTML="长度过长，至少为18字符。";
							}
							else {
								password_info.style.color = '#00FF3E';
								password_info.innerHTML="格式正确。";
							}
						}
		}

	}
	

	confirm.onfocus=function(){

		var value=document.getElementById('confirm_info');
		if(!value)
		{

			confirm_info.innerHTML="必填，长度为4~16字符。";
			confirm_info.setAttribute("class", "value");
			confirm_info.setAttribute("id", "confirm_info");
			confirm.parentNode.appendChild(confirm_info);
		}
	}
	confirm.onblur=function(){
		
		if(confirm.value==0)
		{
			confirm_info.style.color = '#ff0000';
			confirm_info.innerHTML="不能为空。";
		}
		else {
			if(confirm.value!==password.value)
			{
				confirm_info.style.color = '#ff0000';
				confirm_info.innerHTML="两次输入的密码不一致。";
			}
			else {
				confirm_info.style.color = '#00FF3E';
				confirm_info.innerHTML="两次输入的密码一致，格式正确。";
			}
		}
	}
	

	email.onfocus=function(){

		var value=document.getElementById('email_info');
		if(!value)
		{

			email_info.innerHTML="必填，长度为4~16字符。";
			email_info.setAttribute("class", "value");
			email_info.setAttribute("id", "email_info");
			email.parentNode.appendChild(email_info);
		}
	}
	email.onblur=function(){
		var eReg =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
		if(email.value==0)
		{
			email_info.style.color = '#ff0000';
			email_info.innerHTML="不能为空。";
		}
		else {
			if(eReg.test(email.value))
			{
				email_info.style.color = '#00ff3e';
				email_info.innerHTML="邮箱格式正确。";
			}
			else {
				email_info.style.color = '#ff0000';
				email_info.innerHTML="邮箱格式不正确。";
			}
		}
	}
	

	phoneNumber.onfocus=function(){

		var value=document.getElementById('phoneNumber_info');
		if(!value)
		{

			phoneNumber_info.innerHTML="必填，长度为4~16字符。";
			phoneNumber_info.setAttribute("class", "value");
			phoneNumber_info.setAttribute("id", "phoneNumber_info");
			phoneNumber.parentNode.appendChild(phoneNumber_info);
		}
	}
	phoneNumber.onblur=function(){
		
		if(phoneNumber.value==0)
		{
			phoneNumber_info.style.color = '#ff0000';
			phoneNumber_info.innerHTML="不能为空。";
		}
		else {
			if(phoneNumber.value.length!==11)
			{
				phoneNumber_info.style.color = '#ff0000';
				phoneNumber_info.innerHTML="手机号码不正确。";
			}
			else {
				
				phoneNumber_info.style.color = '#00ff3e';
				phoneNumber_info.innerHTML="格式正确。";
		}
	}
	

	
}
}


judge();