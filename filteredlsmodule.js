var fs = require('fs');
var path = require('path');
module.exports = function(dir,ext,callback){
  /* Make a list of files in the directory that was passed in. */
  fs.readdir(dir, function (err, files) {
    var filtered = [];
    /* Check for a bad dir path */
    if (err) return callback(err);
    files.forEach( function(file) {
      /* Filter each file with the extension we want. */
      if (path.extname(file) === '.' + ext) filtered.push(file);
    });
    /* Pass the filtered list along to the printer. */
    callback(null, filtered);
  });
};

// filteredls(process.argv[2],process.argv[3],printls);
