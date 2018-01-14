var dotenv = require("dotenv").config();
var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);
var input = process.argv[2];
var inputTwo = process.argv[3];
function myTweets() {
	var params = {screen_name: 'DrumRVA', count: 20};
	client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (error) console.error(error);

    if (!error)
    	for (var i = 0; i < 20; i++) {
    	console.log("---------------------");
        console.log(tweets[i].text);
        console.log(tweets[i].created_at)
    	}
	});
}
function spotifyThisSong() {
	if (input == 'spotify-this-song' && inputTwo == undefined){
		spotify.search({ type: 'track', query: 'Blackened' }, function(err, data) {
  			if (err) {
    			return console.log('Error occurred: ' + err);
  			}
  			console.log("---------------------");
			if (!err) {
				console.log("Artist: " + data.tracks.items[0].artists[0].name); 
				console.log("Song: " + data.tracks.items[0].name);
				console.log("Preview: " + data.tracks.items[0].preview_url);
				console.log("Album: " + data.tracks.items[0].album.name);
			}
		});
	} else {
		spotify.search({ type: 'track', query: inputTwo }, function(err, data) {
  			if (err) {
    			return console.log('Error occurred: ' + err);
  			}
  			console.log("---------------------");
			if (!err) {				
				console.log("Artist: " + data.tracks.items[0].artists[0].name); 
				console.log("Song: " + data.tracks.items[0].name);
				console.log("Preview: " + data.tracks.items[0].preview_url);
				console.log("Album: " + data.tracks.items[0].album.name);
			}
		});
	}
}
function movieThis() {
	if (input == 'movie-this' && inputTwo == undefined){
		var queryUrl = "http://www.omdbapi.com/?t=" + "Mr. Nobody" + "&y=&plot=short&apikey=trilogy";
		var request = require("request");
		request(queryUrl,(error, response, body) => {	
 			if (error) {
				console.log(error);
				return;
				}
			console.log("---------------------");
			var data = JSON.parse(body);
			console.log(data.Title);
			console.log(data.Year);
			console.log(data.Ratings[0].Value);
			console.log(data.Ratings[1].Value);
			console.log(data.Country);
			console.log(data.Language);
			console.log(data.Plot);
			console.log(data.Actors);		
		});
	} else {
		var queryUrl = "http://www.omdbapi.com/?t=" + inputTwo + "&y=&plot=short&apikey=trilogy";
		var request = require("request");
		request(queryUrl,(error, response, body) => {	
 			if (error) {
				console.log(error);
				return;
			}
			console.log("---------------------");
			var data = JSON.parse(body);
			console.log(data.Title);
			console.log(data.Year);
			console.log(data.Ratings[0].Value);
			console.log(data.Ratings[1].Value);
			console.log(data.Country);
			console.log(data.Language);
			console.log(data.Plot);
			console.log(data.Actors);		
		});
	}
}
function doWhatItSays() {
	var fs = require("fs");
	fs.readFile("random.txt", "utf8", function(error, data) {
  	if (error) {
    	return console.log(error);
  	}
  	var dataArr = data.split(",");
  	var iWantIt = dataArr[1];
  	console.log(iWantIt);
  	input = 'spotify-this-song'
  	inputTwo = iWantIt;
  	spotifyThisSong();
  	});
}	
if (input == 'my-tweets') {
	myTweets();
}
if (input == 'spotify-this-song') {
	spotifyThisSong();
}

if (input == 'movie-this') {	
	movieThis();
}
if (input == "do-what-it-says") {
	doWhatItSays();
}


