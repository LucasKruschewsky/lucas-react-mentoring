import * as React from 'react';
import throttle from 'Root/functions/throttle';

export const useGlobalEventListener = (
  eventName: keyof WindowEventMap | keyof DocumentEventMap,
  callbackFunction: () => void
): void => {
  React.useEffect(() => {
    window.addEventListener(eventName, throttle(callbackFunction, 150));

    return window.removeEventListener(
      eventName,
      throttle(callbackFunction, 150)
    );
  }, [callbackFunction, eventName]);
};
