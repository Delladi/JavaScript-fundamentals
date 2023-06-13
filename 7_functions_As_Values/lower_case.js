const lowercaseMessage = (message) => {
    return message.toLowerCase();
  }
  
  
  const transform = (message, transformFunction) => {
    return transformFunction(message);
  }
  
  const inputString = 'MY NAME IS ARBNOR';
  const result = transform(inputString, lowercaseMessage);
  
  console.log(result);

  //OR instead of the last 3 lines you could write:
  //to transform('WHY ARE YOU SHOUTING?', lowercaseMessage);
  //then use node to paste the whole program.