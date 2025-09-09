// Remember, we're gonna use strict mode in all scripts now!
function printForecast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `...${arr[i]}°C in ${i + 1} days`;
  }
  str += "...";
  console.log(str);
}

// TEST CASES
printForecast([17, 21, 23]); 
// Output: "...17°C in 1 days...21°C in 2 days...23°C in 3 days..."

printForecast([12, 5, -5, 0, 4]);
// Output: "...12°C in 1 days...5°C in 2 days...-5°C in 3 days...0°C in 4 days...4°C in 5 days..."

function printForecastMap(arr) {
  const formatted = arr.map((temp, i) => `${temp}°C in ${i + 1} days`);
  console.log("..." + formatted.join("...") + "...");
}

printForecastMap([17, 21, 23]);

function printForecastReduce(arr) {
  const result = arr.reduce(
    (acc, temp, i) => acc + `${temp}°C in ${i + 1} days...`,
    "..."
  );
  console.log(result);
}

printForecastReduce([12, 5, -5, 0, 4]);
