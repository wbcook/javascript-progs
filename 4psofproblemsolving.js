// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var http = require('http');

var username ="williamcook5";

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badges(s) and " + points + " points in Javascript";
  console.log(message);
}

// Connect to the API URL (http://teamtreehouse.com/username.json)
var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
  var body = "";
  console.dir(response.statusCode);
  response.setEncoding('utf8');
  response.on('data', function(data) {
    body += data;
    console.log(body);
  });

  response.on('end', function() {
    var profile = JSON.parse(body);
    console.dir(profile);
    printMessage(username, profile.badges.length, profile.points.JavaScript);
  });

});
// Read the data from the response
// Parse the data
// Print the data


request.on('error', function(error) {
  console.error(error.message);
});
