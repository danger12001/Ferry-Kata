var car = require('./car');
module.exports = function(carLimit, passengerLimit){
var noOfCars = 0;
var cars = [];
var passengers = 0;
var colorCount = {};
var trips = 0;

 this.board = function(car){
trips ++;
car.totalTrips ++;
cars.push(car);


if(noOfCars + 1 <= carLimit && passengers + car.noOfPassengers <= passengerLimit){
  noOfCars += 1;
  passengers += car.noOfPassengers;

  if (!colorCount.hasOwnProperty(car.color)) {
    colorCount[car.color] = 1;
  } else {
    colorCount[car.color]++;
  }

  if (trips !== 0 && trips > 3  && trips < 7) {
                return "Accepted, you recieve 50% off the next trip, The Ferry now holds: " + noOfCars + " car(s) and " + passengers + " passengers";

            } else if (car.totalTrips !== 0 && car.totalTrips > 7) {
                trips = 0;
                car.totalTrips = 0;
                return "Accepted, you recieve the next trip free, The Ferry now holds: " + noOfCars + " car(s) and " + passengers + " passengers";
}

 // if(car.trips % 3 === 0){
 //   return "Accepted, you recieve 50% off the next trip, The Ferry now holds: " + noOfCars + " car(s) and " + passengers + " passengers";
 // }
 // else if(car.trips % 7 === 0){
 //   return "Accepted, you recieve the next trip free, The Ferry now holds: " + noOfCars + " car(s) and " + passengers + " passengers";
 // }
//
return "Accepted, The Ferry now holds: " + noOfCars + " car(s) and " + passengers + " passengers";
}
else {
  return "Rejected";
}

};
this.count = function(){
return noOfCars;
};
this.leave = function(car){
  var index = cars.indexOf(car);
  if(index > -1){
    if(colorCount.hasOwnProperty(car.color)){
        colorCount[car.color]--;
    }

    cars.splice(index, 1);
    noOfCars--;
    passengers -= car.noOfPassengers;
    return "The Ferry now holds: " + noOfCars + " car(s) and " + passengers + " passengers";
  }
else {
  return "That car doesn't exist";
}
};

this.cars = function(){
return cars;
};
this.colorCount = function(){
  return colorCount;
};
};
