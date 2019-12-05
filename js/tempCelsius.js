// Extended Challenges second exercise:
// Start with two variables:
// tempCelsius (a number) and
// targetUnit (a string, either “C”, “F”, or “K”).
// Write a switch statement that checks the targetUnit
// and logs the temperature converted to that unit.
// Notes: K stands for Kelvin. C requires no conversion, print out the original temp.

let targetUnit = "C";
let tempCelsius = 40;

// Convert C to F --> T(°F) = 20°C × 9/5 + 32 = 68 °F

// Check and convert!
switch (targetUnit) {
  case "C":
    console.log(`The temp is ${tempCelsius} Celsius`);
    break;
  case "F":
    tempF = (tempCelsius * 9) / 5 + 32;
    console.log(`The temp is ${tempF} F`);
    break;
  case "K":
    tempK = tempCelsius + 273.15;
    console.log(`The temp is ${tempK} K`);
    break;
}
