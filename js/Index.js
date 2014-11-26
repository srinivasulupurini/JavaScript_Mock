"use strict";
//authenticating user credentials
function authenticate(){
var teamC=[["srini","srini123"],["sunil","sunil123"],["rajesh","rajesh123"]];
var userName = document.getElementById("userName").value;
var password = document.getElementById("password").value;
if(userName.length>8){
alert("user name should be less than 8 chars");
return;
}
if(password.length<6){
alert("password should be more than 6 chars");
return;
}
var validUser=false;
var validPassword = false;
for(var i=0;i<teamC.length;i++){
if(userName==teamC[i][0]){
validUser = true;
   if(validUser) {
     if(password==teamC[i][1]){
	 validPassword=true;
	 }
   }
}
}
if(!validUser){
alert("Invalid user");
}else{
if(!validPassword){
alert("Invalid password");
}
}
if(validUser && validPassword) {
window.location="Feed.html";
}
}