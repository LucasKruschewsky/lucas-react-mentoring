/**
 * Receives a function and returns a new function
 * that can only be executed once every timeout
 * @param func
 * @param timeout
 * @returns a new function that will execute once every timeout
 */

const throttle = (
  func: () => void,
  timeout: number
): EventListener | (() => void) => {
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
