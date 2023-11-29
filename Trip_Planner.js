// Creating variables
var averageSpeed, mpg, gallons;
// Assigning values to variables
averageSpeed = 57;
mpg = 27;
gallons = 13;
//Destiniation
var destination = "Ithaca, NY";
// Starting point
var startPoint = "My Home";
// Miles
var tripMiles;
firstTrip = 74;
secondTrip = 63;
thirdTrip = 167;
tripMiles = firstTrip + secondTrip + thirdTrip;
//Time
var time = tripMiles / averageSpeed;
// Gas Tank
var tankRange = mpg * gallons;
//Remaining Gas
var leftoverGasRange = tankRange - tripMiles;
//Console
console.log("Starting from: " + startPoint);
console.log("Trip to " + destination);
console.log("Estimated Time: " + time);
console.log("Range Remaining: " + leftoverGasRange);
