'use client';

import { initMsw } from '@workspace/msw';
import { PropsWithChildren, useEffect, useState } from 'react';

const MSWProvider = ({ children }: PropsWithChildren) => {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      await initMsw();
      setMswReady(true);
    };

    if (!mswReady) {
      init();
    }
  }, [mswReady]);

  return <>{children}</>;
};

export { MSWProvider };
