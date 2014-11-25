var feedArray = [];
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
	return url;
}; 
//creating textFeed object
TextFeed .prototype = new Feed();       
TextFeed .prototype.constructor=TextFeed ;      
function TextFeed (text){ 
	this.text=text;
} 
TextFeed.prototype.getFeed=function(){ 
	return text;
}; 
//check if it is url feed or text feed
function isUrlFeed(text) {
var isUrl = false;
if (text.split("http://").length > 1) {
isUrl =true;
}
}
//add feeds based on type
function addFeed(){
var feedText = document.getElementById("feedInput").value;
var type =  isUrlFeed(feedText);
var id = new Date();
if(type){
//debugger;
var urlFeed = new URLFeed();
urlFeed.type = "URLFeed";
urlFeed.id = id;
urlFeed.url = feedText;
feedArray.push(urlFeed)
}else{
debugger;
var textFeed = new TextFeed();
textFeed.type = "TextFeed";
textFeed.id = id;
textFeed.text = feedText;
feedArray.push(textFeed);
}
return feedArray;
}

function displayFeed() {
    var array = addFeed();
    refreshFeed(array);
	}

	function signOut(){
	window.location="Index.html";
	}
	
	function removeFeed(id){
	feedArray.splice(id, 1);
	refreshFeed(feedArray);
	}
	
	 function refreshFeed(array){
	  var list = document.createElement('ul');
    for(var i = 0; i < array.length; i++) {
        var item = document.createElement('li');
		
		if(array[i].type == "URLFeed") {
		item.appendChild(document.createTextNode(array[i].url));
		} else {
		item.appendChild(document.createTextNode(array[i].text));
		}
		item.appendChild(document.createTextNode(array[i].id));
		var remove = document.createElement("a");
		 remove.setAttribute('href', '#');
		 remove.setAttribute('onClick', 'removeFeed('+i+')');
		remove.innerHTML = "x";
		item.appendChild(remove);
        list.appendChild(item);
    }
	var feedListDiv = document.getElementById('feedList');
	while(feedListDiv.hasChildNodes())
	{
    feedListDiv.removeChild(feedListDiv.lastChild);
	}
	document.getElementById('feedList').appendChild(list);
	 }
	 
	  
  function loadProfile(){
  window.location="Profile.html";}