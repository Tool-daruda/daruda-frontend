import mixpanel from 'mixpanel-browser';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { EventName } from '@constants/event';

type AnalyticsContextProps = {
  trackEvent: <T extends Record<string, unknown>>(eventName: EventName, eventProperties?: T) => void;
};

const AnalyticsContext = createContext<AnalyticsContextProps | undefined>(undefined);

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const isDev = import.meta.env.MODE === 'development';

  useEffect(() => {
    if (isDev) {
      setIsReady(true);
      return;
    }
    mixpanel.init(import.meta.env.VITE_MIXPANEL_KEY, {
      debug: isDev,
      loaded: () => setIsReady(true),
    });
  }, []);

  const trackEvent = <T extends Record<string, unknown>>(eventName: EventName, eventProperties?: T) => {
    if (!isReady) {
      console.warn('Mixpanel이 아직 준비되지 않았습니다');
      return;
    }
    if (isDev) {
      console.log('[TRACKING]', eventName, eventProperties);
      return;
    }
    mixpanel.track(eventName, eventProperties);
  };

  return <AnalyticsContext.Provider value={{ trackEvent }}>{children}</AnalyticsContext.Provider>;
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) throw new Error('AnalyticsProvider 안에서만 이벤트를 트랙할 수 있습니다');
  return context;
};

export default AnalyticsProvider;
