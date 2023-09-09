import { useEffect } from 'react';

type Url = string | URL | null | undefined;

export const usePushStateListener = (callback: (url: Url) => void) => {
  useEffect(() => {
    // make a copy of original function to avoid complications
    const originalPushState = history.pushState;

    (history.pushState = function (data, title, url) {
      originalPushState.apply(history, [data, title, url]);
      callback(url);

      return () => {
        history.pushState = originalPushState; // restore the copy
      };
    }),
      [callback];
  });
};

// * reference: https://medium.com/@moh.mir36/shallow-routing-with-next-js-v13-app-directory-2d765928c340
