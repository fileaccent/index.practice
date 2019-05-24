function loadXMLDoc(url)//获得从后端传过来的数据
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
      if(xmlhttp.responseText=="true"){
         alert("登录成功!");
			}
		}
	}
	xmlhttp.open("POST",url,true);
	xmlhttp.send('user');
}
$(function(){//禁用修改
	$("input").prop("readonly",true);
});
/*
$(function(){
	$("#registerSubmit").on("click",function(){
		$.ajax({
			type:"POST",
			url:"doLogin.php",
			data:{
				user:$("#registerName").value,
				password:$("#registerPassword").value
			},
			success :function(data){
				if(data=="true"){
					
				}
			}
		})
	});alert($("#registerName").value);
})
*/