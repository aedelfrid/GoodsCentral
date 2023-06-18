var accessToken;
// import {spotifyClientID} from './key.js'
// import {spotifySecret} from './key.js'

var searchResults;

var pageNum = 0;
var searchQuery = document.querySelector("#formSearch")
//var types = 'track' + '%2c' + 'artist' ;
var resultLimit = '50';
var offset = resultLimit*pageNum;


async function authorization(data = {}) {
    const result = await fetch('https://accounts.spotify.com/api/token',{
        method:'POST',
        headers:{ 
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa(spotifyClientID + ':' + spotifySecret),
    },
    body: 'grant_type=client_credentials'
});
    
    var tokenObj = await result.json();
    accessToken = tokenObj.access_token;

};

(function callEveryHour() {
    setInterval(authorization(), 1000 * 60 * 60);
}())

export {accessToken};

