import * as React from 'react';
import throttle from '@/functions/throttle';

export const useGlobalEventListener = (
  elementListener: Window | Document,
  eventName: 'scroll' | 'resize',
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
