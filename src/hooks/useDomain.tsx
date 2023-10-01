import { useEffect, useRef } from 'react';

import { IS_BROWSER } from '@/constants';
import { domainExtractor } from '@/utils';

export const useDomain = () => {
  const domain = useRef<string>();

  useEffect(() => {
    if (IS_BROWSER) {
      const currentUrl = window.location.href;
      domain.current = domainExtractor(currentUrl, '/share');
    }
  }, []);

  return domain.current;
};
