var ferryFunc = require('./src/ferry');
var ferry = new ferryFunc(3, 10);

var test = function(){
  console.log("=====================================================");
  console.log(ferry.board('red', 4));
  console.log(ferry.board('blue', 2));
  console.log(ferry.board('green', 2));
  console.log("=====================================================");
  return "";
};



// console.log("Hello World");




console.log(test());
