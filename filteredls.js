var fs = require('fs');
var path = require('path');
var filteredls = function(dir,ext,callback){
  /* Make a list of files in the directory that was passed in. */
  fs.readdir(dir, function (err, files) {
    var filtered = [];
    /* Check for a bad dir path */
    if (err) throw "It's a trap!";
    files.forEach( function(file) {
      /* Filter each file with the extension we want. */
      if (path.extname(file) === '.' + ext) filtered.push(file);
    });
    /* Pass the filtered list along to the printer. */
    callback(filtered);
  });
};

function printls(list){
  /* Print each file on a new line. */
  list.forEach( function(file) {
    console.log(file);
  });
}

filteredls(process.argv[2],process.argv[3],printls);
