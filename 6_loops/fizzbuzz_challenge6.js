const fizzBuzz = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'FizzBuzz';
    } else if (number % 3 === 0) {
      return 'Fizz';
    } else if (number % 5 === 0) {
      return 'Buzz';
    } else {
      return number;
    }
  };

  const fizzbuzzUntil = (num) => {
    for (let i = 0 ; i <= num; i++) {
            console.log(fizzBuzz(i));
  }
    };

    fizzbuzzUntil(10)