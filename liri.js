var dotenv = require("dotenv").config();
var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");

var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);
  

//var twitterURL =  "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=drumrva&count=2";
var input = process.argv[2];
var inputTwo = process.argv[3];

if (input == 'my-tweets') {
	var params = {screen_name: 'DrumRVA',
					count: 20};
	client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (error) console.error(error);
    if (!error)
    	for (var i = 0; i < 20; i++) {
        console.log(tweets[i].text);
        console.log(tweets[i].created_at)
    }
	});
}

if (input == 'spotify-this-song') {
	spotify.search({ type: 'track', query: 'thriller' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }


 							if (!err) {
 								
    
							 console.log(data.items[i]); 

}
});
}

   // var movieName = "";
// // ...
// movieName = process.argv[2];

// // Then run a request to the OMDB API with the movie specified
 // var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


// // This line is just to help us debug against the actual URL.
// console.log(queryUrl);


// // Then create a request to the queryUrl
// // ...

// var request = require("request");

// request(twitterURL,(error, response, body) => {	
//  if (error) {
// 		console.log(err);
// 		return;
// 	}
//  var dataArray = body.split(",");
	
// 	console.log(dataArray[0]);
// 	console.log(dataArray[1]);
// 	for (i = 0; i < dataArray.length; i++){
// 	console.log(dataArray[i]);

// 	}
// });
