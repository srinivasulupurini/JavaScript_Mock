"use strict";
var profiles=[];
//profile object constructor
function Profile(name,age,phone,email,address){
this.name = name;
this.age=age;
this.phone=phone;
this.email=email;
this.address=address;
}

Profile.prototype.setId=function(id){
this.id = id;
}
Profile.prototype.setImage=function(imgPath){
this.imgPath = imgPath;
}

//defining profile service
var PROFILESERVICE = (function(){
return{
   saveProfile:function(name,age,phone,email,address){
   var profile = new Profile(name,age,phone,email,address);
	profile.setId(name);
	profile.setImage(profilePic);
	profiles.push(profile);
	return profiles;
   }
}
})();

//saving profile using profile service functions
function saveProfile(){
var name=document.getElementById("name").value;
var age=document.getElementById("age").value;
var phone=document.getElementById("phone").value;
var email=document.getElementById("email").value;
var address=document.getElementById("address").value;
var profilePic = document.getElementById("profilePath").value;
try{
var profiles=PROFILESERVICE.saveProfile(name,age,phone,email,address);
var addedProfile = profiles[profiles.length-1];
alert("added Profile with name,age,email,phone::::"+addedProfile.name+","+addedProfile.age+","+addedProfile.email+","+addedProfile.phone);
} catch(error) {
alert("Error while saving the profile:"+error.message);
}
location.reload();
}

//reading the image contents
function onFileSelected(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("profilePic");
  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}

//loading the feed page
function loadFeed(){
window.location = "Feed.html"; 
}

//signout
function signOut(){
window.location = "Index.html";
}

//adding form validations
function validateName(value){
if(value.length>50){
alert("name should be less than 50 char");
document.getElementById("name").value="";
}
}
function validateAge(value){
if(value<0 || value>100){
alert("age should be between 0 and 100");
document.getElementById("age").value="";}
}
function validateEmail(value){
var re = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
if(!re.test(email)){
alert("email is invalid");
}
}
function validatePhone(value){
if(typeof value != NaN && isNaN(value)){
alert("phone number is invalid");
document.getElementById("phone").value="";
}
}

//validate input
function validateInput(element){
var value = element.value;
var elementName =element.name; 
if(elementName == "name"){
validateName(value);
}
else if(elementName == "age"){
validateAge(value);
}
else if(elementName == "email"){
validateEmail(value);
}
else if(elementName == "phone"){
validatePhone(value);
}
enableSave();	  
}

//enable save after all mandatory fields filled.
function enableSave(){
var name=document.getElementById("name").value;
var age=document.getElementById("age").value;
var phone=document.getElementById("phone").value;
var email=document.getElementById("email").value;
if(name.length >0 && age.length>0 && phone.length>0 && email.length>0){
document.getElementById("save").disabled = false;
}
}