//Declare a function notifyByEmail that accepts an email address as argument and returns the string 'Email sent to: <EMAIL>'.
//Declare a function notifyByText that accepts a phone number (as a string) as argument and returns the string 'Text sent to: <PHONE NUMBER>'.
//Now declare a generic function notify that accepts a first string argument (either an email or a phone), and the function to use in second argument. 
//This function should only rely on calling the function passed in second argument, not declare a string by itself.
//Use the function notify with the two previous functions to:
//send an email to hello@makers.tech.test and get the expected output.
//send a text to +10000000000 and get the expected output.
//

const notifyByEmail = (email) => {
    return `Email sent to: ${email}`;
  };
  
  const notifyByText = (phoneNumber) => {
    return `Text sent to: ${phoneNumber}`;
  };
  
  const notify = (notifyFunction, emailOrPhone) => {
    return notifyFunction(emailOrPhone);
  };
  
  console.log(notify(notifyByEmail, 'hello@makers.tech.test'));
  console.log(notify(notifyByText, '+10000000000'));
  