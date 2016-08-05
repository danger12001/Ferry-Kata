var car = require('./car');
module.exports = function(carLimit, passengerLimit){
var noOfCars = 0;
var passengers = 0;
var cars = [];
var colorCount = {};
this.state = function(){
  var state = "The Ferry holds: " + noOfCars + " car(s) and " + passengers + " passengers";
  return state;
};
 this.board = function(color, noOfPassengers){
var newCar = new car(color, noOfPassengers);
newCar.id += cars.length + 1;
cars.push(newCar);




if(noOfCars + 1 <= carLimit && passengers + newCar.noOfPassengers <= passengerLimit){
  noOfCars += 1;
  passengers += newCar.noOfPassengers;

  if (!colorCount.hasOwnProperty(newCar.color)) {
                 colorCount[newCar.color] = 1;
             } else {
                 colorCount[newCar.color]++;
 }

  // newCar.trips += 1;
  // if(newCar.trips > 3){
    // return "Accepted, you recieve 50% off the next trip, The Ferry now holds: " + noOfCars + " car(s) and " + passengers + " passengers";
  // }
  // if(newCar.trips > 7){
    // return "Accepted, you recieve the next trip free, The Ferry now holds: " + noOfCars + " car(s) and " + passengers + " passengers";
  // }
  console.log(colorCount);
return "Accepted, The Ferry now holds: " + noOfCars + " car(s) and " + passengers + " passengers";
}
else {
  return "Rejected";
}


};

this.leave = function(){
//how does it make a car leave
};
};
