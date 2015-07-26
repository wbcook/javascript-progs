var http = require('http');

var req = function(url) {
  http.get(url, function(res){
    // console.log("Got response: " + res.statusCode);
    res.setEncoding('utf8');
    res.on("data", function (data) {
      console.log(data);
    });
    res.on('error', function(e) {
      console.log("Got error: " + e.message);
    });
  });
};
req(process.argv[2]);
