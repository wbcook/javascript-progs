var bl = require('bl');
var http = require('http');

var req = function(url) {
  http.get(url, function(res) {
    res.setEncoding('utf8');
    res.pipe(bl(function(err, data) {
      chars = data.toString();
      // console.log(2);
      console.log(chars.split('').length);
      console.log(chars);
    }));
    res.on("error", function(e) {
      console.log("Got error: " + e.message);
    });
  });
};

req(process.argv[2]);
