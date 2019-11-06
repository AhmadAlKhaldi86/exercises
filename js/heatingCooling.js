// Heating/Cooling exercise:
// Define two variables: actualTemp and a desiredTemp.
// Write conditionals to tell the heating & cooling system what to do.
// Log one of these three things: Run A/C, Run heat, or Standby.

let actualTemp;
let desiredTemp;
desiredTemp = 75;
// If more than 80 AC
actualTemp = 90;
// If less than 75 Heat
actualTemp = 70;
// If 75 do nothing
actualTemp = 75;

if (actualTemp > desiredTemp) {
  console.log("Turn on AC!");
} else if (actualTemp < desiredTemp) {
  console.log("Turn on heat!");
} else {
  console.log("Nothing to be done");
}

let desiredTempMax;
let desiredTempMin;
desiredTempMax = 80;
desiredTempMin = 70;

if (actualTemp > desiredTempMax) {
  console.log("Turn on AC!");
} else if (actualTemp < desiredTempMin) {
  console.log("Turn on heat!");
} else {
  console.log("Nothing to be done");
}
