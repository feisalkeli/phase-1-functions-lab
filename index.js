// Code your solution in this file!
function distanceFromHqInBlocks(value) {
  if (`${value}` <= 42) {
    return 42 - `${value}`;
  } else {
    return `${value}` - 42;
  }
}
function distanceFromHqInFeet(feet) {
  if (`${feet}` <= 42) {
    return (42 - `${feet}`) * 264;
  } else {
    return (`${feet}` - 42) * 264;
  }
}

function distanceTravelledInFeet(start, destination) {
  if (`${destination}` <= ` ${start}`) {
    return (`${start}` - `${destination}`) * 264;
  } else {
    return (`${destination} ` - `${start}`) * 264;
  }
}
function calculatesFarePrice(start, destination) {}
