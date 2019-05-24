
function isUserCorrect(){
  var txt=document.getElementById("registerName").value;
  if(txt==null||txt==""){
    document.getElementById("registerHint").innerHTML="用户名不能为空";
  }
  else if(/^[a-z0-9_-]{3,16}$/.test(txt)){
    document.getElementById("registerHint").innerHTML="";     
  }
  else{
    document.getElementById("registerHint").innerHTML="用户名格式错误";   
  }
}
function isPasswordCorrect(){/*检验密码的有效性*/
  var txt=document.getElementById("registerPassword").value;
  if(txt==null||txt==""){
    document.getElementById("registerHint").innerHTML="密码不能为空";
  }
  else if(/^[a-z0-9_-]{6,18}$/.test(txt)){
    document.getElementById("registerHint").innerHTML="";     
  }
  else{
    document.getElementById("registerHint").innerHTML="密码格式错误"; 
  
  }
}