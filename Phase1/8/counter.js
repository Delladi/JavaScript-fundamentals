
//Declare a variable counter initialised at the value 0 — this value will need to change, so use let rather than const.
//Declare a function called increment that:
//increments the value of counter by 1
//and prints it using console.log
//Using setInterval, call this function every second so the counter is incremented and printed every second.

let counter = 0

const increment = () => {
    counter++
    console.log(counter)
}
setInterval(increment, 1000); 