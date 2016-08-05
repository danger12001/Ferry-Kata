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
it('should return a map of all cars onboard the ferry', function(){
var testFerry = new ferry(2,10);
var testCar = new car('red', 2);
testFerry.board(testCar);
testFerry.board(testCar);
var result = testFerry.cars();
assert.deepEqual(result, [{ color: 'red', noOfPassengers: 2, totalTrips: 2 },
  { color: 'red', noOfPassengers: 2, totalTrips: 2 }]);
});
it('should return a map of how many there are of a certain color car', function(){
  var testFerry = new ferry(3,10);
  var redCar = new car('red', 2);
  var blueCar = new car('blue', 2);
  testFerry.board(redCar);
  testFerry.board(redCar);
  testFerry.board(blueCar);
  var result = testFerry.colorCount();
  assert.deepEqual(result, { red: 2, blue: 1 });
});

it('should show the number of cars on the ferry', function(){
  var testFerry = new ferry(3,10);
  var redCar = new car('red', 2);
  testFerry.board(redCar);
  var result = testFerry.count();
  assert.equal(result, 1);
});

it('should remove a car from the ferry', function(){

  var testFerry = new ferry(3,10);
   var redCar = new car('red', 2);
   testFerry.board(redCar);
   testFerry.leave(redCar);
   var results = testFerry.count();
assert.equal(results, 0);

});
it('should return an error when trying to remove a car from the ferry', function(){
  var testFerry = new ferry(3,10);
   var redCar = new car('red', 2);
    var results =  testFerry.leave(redCar);
assert.equal(results, "That car doesn't exist");

});



it("should return a 50% discount if the cars trips is more than 3", function(){
  var testFerry = new ferry(3,10);
  var redCar = new car('red', 2);
  testFerry.board(redCar);
  testFerry.leave(redCar);
  testFerry.board(redCar);
  testFerry.leave(redCar);
  testFerry.board(redCar);
  testFerry.leave(redCar);

var results = testFerry.board(redCar);
assert.equal(results, "Accepted, you recieve 50% off the next trip, The Ferry now holds: 1 car(s) and 2 passengers");
});

it("should return a free trip if the cars trips is more than 7", function(){
  var testFerry = new ferry(1,10);
  var redCar = new car('red', 2);
  testFerry.board(redCar);
  testFerry.leave(redCar);

  testFerry.board(redCar);
  testFerry.leave(redCar);

  testFerry.board(redCar);
  testFerry.leave(redCar);

  testFerry.board(redCar);
  testFerry.leave(redCar);

  testFerry.board(redCar);
  testFerry.leave(redCar);

  testFerry.board(redCar);
  testFerry.leave(redCar);

  testFerry.board(redCar);
  testFerry.leave(redCar);
var results = testFerry.board(redCar);
assert.equal(results, "Accepted, you recieve the next trip free, The Ferry now holds: 1 car(s) and 2 passengers");
});


});
