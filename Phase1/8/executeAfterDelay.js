const printHello = () => {
    console.log('Hello!');
  };
  
  const executeAfterDelay = (delay, callBackFunction) => {
    setTimeout(callBackFunction, delay * 1000);
  };
  
  executeAfterDelay(5, printHello);
  // After about 5 seconds, you should see the message being logged
  // Hello!
  