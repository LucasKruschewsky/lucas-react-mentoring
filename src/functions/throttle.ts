const throttle = (func: () => void, timeout: number): any => {
  let isTimeoutActive: boolean;

  return () => {
    if (isTimeoutActive) return;
    isTimeoutActive = true;
    setTimeout(() => {
      func();
      isTimeoutActive = false;
    }, timeout);
  };
};

export default throttle;
