"use strict";
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

//feedservice closure
 var FEEDSERVICE = (function(){
      return{
	   addFeed:function(feedText){
	    var type =  isUrlFeed(feedText);
		var id = feedArray.length || 0;
		if(type){
		//debugger;
		var urlFeed = new URLFeed();
		urlFeed.type = "URLFeed";
		urlFeed.id = id;
		urlFeed.url = feedText;
		feedArray.push(urlFeed);
		}else{
		debugger;
		var textFeed = new TextFeed();
		textFeed.type = "TextFeed";
		textFeed.id = id;
		textFeed.text = feedText;
		feedArray.push(textFeed);
		}
		return feedArray;
	   },
	   deleteFeed:function(id){
	   feedArray.splice(id, 1);
	   }
	   
	  }
 })();
 
    function postFeed() {
	var feedText = document.getElementById("feedInput").value;
	try{
    var array = FEEDSERVICE.addFeed(feedText);
	} catch(error){
	alert("Error while adding the feed:"+error.message);}
    refreshFeedView(array);
	}

	function deleteFeed(id){
	try{
	FEEDSERVICE.deleteFeed(id);
	}catch(error){
	alert("Error while deleting the feed"+error.message);
	}
	refreshFeedView(feedArray);
	}
	
	function signOut(){
	window.location="Index.html";
	}
	
	function redirect(url){
	window.location=url;
	}
	
	 function refreshFeedView(array){
	  var list = document.createElement('ul');
       for(var i = 0; i < array.length; i++) {
        var item = document.createElement('li');
		item.class="feedItem";
		
		if(array[i] instanceof URLFeed) {
		var urlFeed = document.createElement("a");
			urlFeed.style.width = "490px";
			urlFeed.style.height = "40px";
			urlFeed.style.background = "orange";
			urlFeed.style.display="inline-block";
			urlFeed.style.padding="5px";
			urlFeed.innerHTML=array[i].url;
			urlFeed.href=array[i].url;		
			item.appendChild(urlFeed);
		
		} else {
		var feed = document.createElement("div");
			feed.style.width = "490px";
			feed.style.height = "40px";
			feed.style.background = "orange";
			feed.style.display="inline-block";
			feed.style.padding="5px";
		   feed.innerHTML = array[i].text;
		   item.appendChild(feed);
		}
		var today = new Date();
		var dateDiv = document.createElement("div");
			dateDiv.style.width = "200px";
			dateDiv.style.height = "40px";
			dateDiv.style.background = "orange";
			dateDiv.style.display="inline-block";
			dateDiv.style.padding="5px";
			dateDiv.innerHTML = today.toLocaleString();
		item.appendChild(dateDiv);
		var remove = document.createElement("a");
			remove.setAttribute('href', '#');
			remove.setAttribute('onClick', 'deleteFeed('+i+')');
			remove.innerHTML = "x";
			remove.style.width = "30px";
			remove.style.height = "40px";
			remove.style.background = "orange";
			remove.style.display="inline-block";
			remove.style.padding="5px";
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