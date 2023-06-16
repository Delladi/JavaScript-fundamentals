// Look at the README for instructions.
const sayHello = () => {
  console.log("Hello!");
};
// Exercise 1. Edit this function
const doubleCall = (callback) => {
  callback();
  callback();
};
// Exercise 2. Edit this function
const four = () => {
  return 2 + 2;
};
const five = () => {
  return 2 + 3;
};
const obnoxiousFn = (callback) => {
  console.log("EXECUTING CALLBACK!");
  return callback();
};
// Exercise 3. Edit this function
const currentTime = (callback) => {
  const a = new Date();
  callback(a.toLocaleTimeString());
};
/*
  // Example behaviour
currentTime((time) => {
  console.log(`The time is ${time}`);
}); // Should output the current time in the format: "The time is 16:48:07".
*/
// Bonus Exercise. Edit this function
const toUpperCase = (str) => {
  return str.toUpperCase();
};
const double = (num) => {
  return num * 2;
};
const myMap = (array, callback) => {
  return array.((element)=> {
    console.log(callback(element));
  });
};
/* > const lettersArray = ["a", "b", "c"];
> myMap(lettersArray, toUpperCase);
*/
module.exports = {
  doubleCall,
  obnoxiousFn,
  currentTime,
  myMap,
};