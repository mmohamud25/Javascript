//Variable assigment

const maxPoints = 120;
const passingPoints = 70;
const samPoints = 84;
let alexPoints = 75;
const jessiePoints = 99;
let didAlexPass = !false;
const samPointsDisplay = "Sam earned " + samPoints + " points out of " +
  maxPoints;
console.log(samPointsDisplay);
const alexPointsDisplay = "Alex earned " + alexPoints + " points out of " +
  maxPoints;
console.log(alexPointsDisplay);
const jessiePointsDisplay = "Jessie earned " + jessiePoints +
  " points out of " + maxPoints;
console.log(jessiePointsDisplay);


// Calculation
//Sam calculation
const samPercentage = (samPoints / maxPoints) * 100;
const samPercentDisplay = "Sam scored " + samPercentage + "%.";
console.log(samPercentDisplay);
//Alex
const alexPercentage = (alexPoints / maxPoints) * 100;
const alexPercentDisplay = "Alex scored " + alexPercentage + "%.";
console.log(alexPercentDisplay);
//jessie
const jessiePercentage = (jessiePoints / maxPoints) * 100;
const jessiePercentDisplay = "Jessie scored " + jessiePercentage + "%.";
console.log(jessiePercentDisplay);

// Missed Point
//Sam
const samMissedPoints = maxPoints-samPoints;
//Alex
const alexMissedPoints = maxPoints-alexPoints;
//jessie 
const jessieMissedPoints = maxPoints-jessiePoints;

//Concatenation
//Sam
const samMissedPointsDisplay = 'Sam missed 36 point(s).';
console.log(samMissedPointsDisplay);
//Alex
const alexMissedPointsDisplay = 'Alex missed 75 point(s).';
console.log(alexMissedPointsDisplay);
//Jesse
const jessieMissedPointsDisplay = 'Jessie missed 21 point(s).';
console.log(jessieMissedPointsDisplay);

// Class Average 
var classAveragePoints = (samPoints + alexPoints + jessiePoints) /3;
var classAveragePercent = classAveragePoints / maxPoints*100;

//Information Display 
var classAvgDisplay = classAveragePoints + classAveragePercent.toFixed(2);
console.log(classAvgDisplay);
//Alex updated inforamtion
var alexPointsUpdated = "Alex failed initially but did extra credit" + alexPoints + maxPoints;
console.log (alexPointsUpdated);

//
const listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = "Raw Points:";
listItemArray[4].innerHTML = "Percentages:";
listItemArray[8].innerHTML = "Missed Points:";
listItemArray[12].innerHTML = "Final Notes:";
