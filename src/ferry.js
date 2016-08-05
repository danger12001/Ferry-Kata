var car = require('./car');
module.exports = function(carLimit, passengerLimit){
var noOfCars = 0;
var cars = [];
var passengers = 0;
var colorCount = {};
var trips = 0;

this.state = function(){
  var state = "The Ferry holds: " + noOfCars + " car(s) and " + passengers + " passengers";
  return state;
};
 this.board = function(car){
trips ++;
car.trips += 1;
cars.push(cars);

if(noOfCars + 1 <= carLimit && passengers + car.noOfPassengers <= passengerLimit){
  noOfCars += 1;
  passengers += car.noOfPassengers;
  if (!colorCount.hasOwnProperty(car.color)) {
                 colorCount[car.color] = 1;
             } else {
                 colorCount[car.color]++;
 }
 // if(car.trips % 3 === 0){
//    return "Accepted, you recieve 50% off the next trip, The Ferry now holds: " + noOfCars + " car(s) and " + passengers + " passengers";
//  }
//  else if(car.trips % 7 === 0){
//    return "Accepted, you recieve the next trip free, The Ferry now holds: " + noOfCars + " car(s) and " + passengers + " passengers";
//  }
//
return "Accepted, The Ferry now holds: " + noOfCars + " car(s) and " + passengers + " passengers";
}
else {
  return "Rejected";
}

};

this.leave = function(car){
  var index = cars.indexOf(car);
  console.log(index);
  if(index > -1){
    cars.splice(index, 1);
  }
  colorCount[cars[index].color]--;
};
};
