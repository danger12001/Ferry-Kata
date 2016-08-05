var assert = require('assert');
var ferryFunc = require('../src/ferry');
var car = require('../src/car');
var ferry = new ferryFunc(2,10);

describe("Ferry", function(){
// it("return the current state of the ferry", function(){
// var result = ferry.state();
// assert.equal(result, "The Ferry holds: 0 car(s) and 0 passengers");
// });
it("add a red car with 4 passengers and return the new state", function(){
var redCar = new car('red', 4);
var result = ferry.board(redCar);
assert.equal(result, "Accepted, The Ferry now holds: 1 car(s) and 4 passengers");
});

// it("should return a Rejected message if car limit is reached", function(){
//
// console.log(ferry.state());
//               ferry.board('red', 4);
//               ferry.board('blue', 5);
//               var result = ferry.board('green', 3);
// assert.equal(result, "Rejected");
// ferry.leave(1);
// ferry.leave(2);
// ferry.leave(3);
// });
//
// it("should return a Rejected message if passenger limit is reached", function(){
// ferry.board('red', 6);
// var result = ferry.board('green', 5);
// assert.equal(result, "Rejected");
//
// });
// it("should return a 50% discount if the cars trips is more than 3", function(){
// var results = ferry.board('red', 6, 4);
//
// console.log(ferry.state());
// assert.equal(results, "Accepted, you recieve 50% off the next trip, The Ferry now holds: 1 car(s) and 6 passengers");
// });
});
