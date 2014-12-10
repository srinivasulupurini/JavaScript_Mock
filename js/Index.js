var bookApp = angular.module("bookApp",['ngRoute']);

bookApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
     .when('/', {
        templateUrl: 'Index.html',
        controller: 'loginCtrl'
      })
      .when('/login', {
        templateUrl: 'Index.html',
        controller: 'loginCtrl'
      })
      .when('/feed', {
        templateUrl: 'Feed.html',
        controller: 'feedCtrl'
      })
      .when('/profile', {
        templateUrl: 'Profile.html',
        controller: 'profileCtrl'
      })
     
  }]);
  

bookApp.controller("loginCtrl",function($scope, $routeParams, $location){
$scope.authenticate=function(){
if($scope.userName=="srini"){
	if($scope.password=="srini123"){$location.url("/feed");
	}else{
		alert("Invalid password");
	}
	
}else{
	alert("Invalid Username");
}	

};
});


bookApp.controller("feedCtrl",function($scope, $routeParams, $location){

$scope.redirectToProfile=function(){
$location.url("/profile");	
};

$scope.signOut=function(){
$location.url("/");	
};


//define feed object
function Feed(id,type) {
this.id = id;
this.type = type;
}
Feed.prototype.getId = function(){
return this.id;
};
Feed.prototype.getType = function(){
return this.type;
};

//creating urlFeed object
URLFeed.prototype = new Feed();        
URLFeed.prototype.constructor=URLFeed;      
function URLFeed(url){ 
	this.url=url;
} 
URLFeed.prototype.getFeed=function(){ 
	return this.url;
}; 
//creating textFeed object
TextFeed .prototype = new Feed();       
TextFeed .prototype.constructor=TextFeed ;      
function TextFeed (text){ 
	this.text=text;
} 
TextFeed.prototype.getFeed=function(){ 
	return this.text;
}; 
//check if it is url feed or text feed
function isUrlFeed(text) {
var isUrl = false;
if ((text.split("http://").length)> 1 || (text.split("https://").length)> 1 ) {
isUrl =true;
}
return isUrl;
}


$scope.curDate=new Date();
$scope.feedList=[];
$scope.postFeed=function(){
	   var feedText=$scope.feedIn;
	   var type =  isUrlFeed(feedText);
	   var id = $scope.feedList.length || 0;
		if(type){
		var urlFeed = new URLFeed();
		urlFeed.type = "URLFeed";
		urlFeed.id = id;
		urlFeed.url = feedText;
		$scope.feedList.push(urlFeed);
		}else{
		var textFeed = new TextFeed();
		textFeed.type = "TextFeed";
		textFeed.id = id;
		textFeed.text = feedText;
		$scope.feedList.push(textFeed);
		}
};

$scope.deleteFeed=function(id){
	
$scope.feedList.splice(id, 1);	
$location.url("/feed");
};


});

bookApp.controller("profileCtrl",function($scope, $routeParams, $location){
	
$scope.redirectToFeed=function(){
$location.url("/feed");	
};

$scope.signOut=function(){
$location.url("/");	
};
	
$scope.onFileSelected=function(event) {
  alert("inside pic");	
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
    $scope.profilePic.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}
 
 //save profiles
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

$scope.saveProfile=function(){
	var profile = new Profile($scope.name,$scope.age,$scope.phone,$scope.email,$scope.address);
	profile.setId($scope.name);
	profile.setImage($scope.profilePic);
	profiles.push($scope.profile);
	alert("Saved profile for "+$scope.name);
};
 
});

