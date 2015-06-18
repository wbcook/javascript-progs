var landscape = function() {
  var result = " ";
  var flat = function(size) {
    for (var count = 0; count < size; count ++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };
  
  flat(6);
  mountain(3);
  flat(2);
  mountain(5);
  flat(6);
  return result;
};

console.log(landscape());