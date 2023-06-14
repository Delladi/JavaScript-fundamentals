const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.forEach((number) => {
    console.log(number); //optional
  });

//const iteratorFunction = (number) => {
// console.log(number);
// }
 // numbers.forEach(iteratorFunction);
 let sum = 0;
 numbers.forEach((number)=> {
    sum += number;
 });
 console.log(sum)