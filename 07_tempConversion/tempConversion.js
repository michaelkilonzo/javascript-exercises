
const convertToCelsius = function(temp) {
  const c = ((temp - 32) * 5/9); 
  return round(c);
};

const convertToFahrenheit = function(temp) {
  const f = ((9/5 * temp) + 32); 
  return round(f);

};

// round to 1 decimal place 
function round(num) {
  return Math.round(num * 10) / 10;
}


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
