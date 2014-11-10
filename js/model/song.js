
var Song = function(json){
	this.author = (json.author==null) ? "EMPTY" : json.author;
	this.title = (json.title==null) ? "EMPTY" : json.title;
	this.dateTime = (json.dateTime==null) ? new Date().toLocaleString() : json.dateTime;
	this.votes = (json.votes==null) ? 0 : json.votes;
}