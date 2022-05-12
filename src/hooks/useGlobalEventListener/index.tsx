import * as React from 'react';
import throttle from 'Root/functions/throttle';

export const useGlobalEventListener = (
  elementListener: Window | Document,
  eventName: keyof WindowEventMap | keyof DocumentEventMap,
  callbackFunction: () => void
): void => {
  React.useEffect(() => {
    elementListener?.addEventListener(
      eventName,
      throttle(callbackFunction, 150)
    );

    return elementListener?.removeEventListener(
      eventName,
      throttle(callbackFunction, 150)
    );
  }, [elementListener, callbackFunction, eventName]);
};
