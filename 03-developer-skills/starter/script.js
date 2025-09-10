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

function analyzeWorkWeek(dailyHours) {
  const totalHours = dailyHours.reduce((sum, h) => sum + h, 0);
  const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;
  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const daysWorked = dailyHours.filter(h => h > 0).length;
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours,
    maxDay: days[maxDayIndex],
    daysWorked,
    isFullTime
  };
}

// Test
console.log(analyzeWorkWeek([7.5, 8, 6.5, 0, 8.5, 4, 0]));

function analyzeWorkWeekOptimized(dailyHours) {
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    console.error("Invalid input: Expected array of 7 numbers");
    return null;
  }

  const totalHours = dailyHours.reduce((s, h) => s + h, 0);
  const averageHours = Math.round((totalHours / 7) * 10) / 10;
  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const daysWorked = dailyHours.filter(h => h > 0).length;

  return {
    totalHours,
    averageHours,
    maxDay: days[maxDayIndex],
    daysWorked,
    isFullTime: totalHours >= 35,
    workingDays: days.filter((d, i) => dailyHours[i] > 0)
  };
}

console.log(analyzeWorkWeekOptimized([7.5, 8, 6.5, 0, 8.5, 4, 0]));

function legacyForecastFunction(temperatures) {
  var result = "";
  for (var i = 1; i <= temperatures.length; i++) {
    result = result + temperatures[i] + " degrees in day " + i + ", ";
  }
  return result;
}

function enhancedForecastFunction(temperatures, options = {}) {
  if (!Array.isArray(temperatures) || temperatures.length === 0) {
    console.error("Invalid input: temperatures must be a non-empty array");
    return "";
  }

  const { unit = "°C", separator = "...", includeIndex = true } = options;
  let result = "";

  for (let i = 0; i < temperatures.length; i++) {
    const dayNumber = includeIndex ? i + 1 : i;
    result += `${temperatures[i]}${unit} in ${dayNumber} days${separator}`;
  }

  return separator + result.slice(0, -separator.length);
}

// Tests
console.log(enhancedForecastFunction([15, 18, 22, 19]));
console.log(enhancedForecastFunction([15, 18, 22, 19], { unit: "°F", separator: " | " }));
