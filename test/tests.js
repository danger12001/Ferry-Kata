var assert = require('assert');
var ferry = require('../src/ferry');
var car = require('../src/car');

describe("Ferry", function(){
it("add a red car with 4 passengers and return the new state", function(){
  var testFerry = new ferry(2,10);
var redCar = new car('red', 4);
var result = testFerry.board(redCar);
assert.equal(result, "Accepted, The Ferry now holds: 1 car(s) and 4 passengers");
});

it("should return a Rejected message if the car limit is reached", function(){
var testFerry = new ferry(1, 10);
var redCar = new car('red',4);
testFerry.board(redCar);
var result = testFerry.board(redCar);
assert.equal(result, "Rejected");
});
it("should return a Rejected message if passenger limit is reached", function(){
  var testFerry = new ferry(2, 10);
var fullCar = new car('red',11);

var result = testFerry.board(fullCar);
assert.equal(result, "Rejected");

});

// it("should return a 50% discount if the cars trips is more than 3", function(){
// var results = ferry.board('red', 6, 4);
//
// console.log(ferry.state());
// assert.equal(results, "Accepted, you recieve 50% off the next trip, The Ferry now holds: 1 car(s) and 6 passengers");
// });
});
