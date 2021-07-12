//a. 1ft = 12 in then 42 in = ? ft
let inches = 42;
let feet;
feet = inches/12;
console.log("42 inches in feet is " + feet)

//b. Rectangular Plot of 60 feet x 40 feet in meters
let lengthInFeet = 60;
let widthInFeet = 40;
let lengthInMeters = lengthInFeet*0.3048;
let widthInMeter = widthInFeet*0.3048;
console.log("Dimension rectangular of plot in meter are " + lengthInMeters +" X " + widthInMeter);

//c. Calculate area of 25 such plots in acres
let areaInAcre = (lengthInMeters*widthInMeter)*0.000247;
let areaOfTotalPlots = areaInAcre*25;
console.log("Area of such 25 plots in acres is " + areaOfTotalPlots);