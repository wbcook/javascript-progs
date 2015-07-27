var bl = require('bl');
var http = require('http');

var req = function(url) {
  http.get(url, function(res) {
    res.setEncoding('utf8');
    res.pipe(bl(function(err, data) {
      /* ... */
    }));
    res.on("error", function(e) {
      console.log("Got error: " + e.message);
    });
  });
};
