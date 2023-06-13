const isValidLength = (phoneNumber) => {
    const validLength = 11;
    if (phoneNumber.length == validLength) {
     return true;
    } else {
      return false;
    }
  }
  //to test in node : console.log(isValidLength(00)) 
  