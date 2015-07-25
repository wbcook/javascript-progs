var fs = require('fs');
var ls = require('./filteredlsmodule.js');

var myfilteredls = ls(process.argv[2], process.argv[3], printls);

function printls(err, list){
  /* Print each file on a new line. */
  if (err) return console.error("It's a trap!", err);
  list.forEach( function(file) {
    console.log(file);
  });
}
