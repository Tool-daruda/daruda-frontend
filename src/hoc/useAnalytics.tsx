import mixpanel from 'mixpanel-browser';
import React, { createContext, useContext, useEffect } from 'react';

export const eventNames = [
  'Tool_Click',
  'User',
  'Tool_Category_Click',
  'Integrated_Search_Enter',
  'Banner_Click',
  'Toggle_Click',
  'Sorting_Click',
  'Tool_Detail_Index_Click',
  'Recommendation_Tool_Click',
  'Community_Click',
  'Post_Click',
  'Signup_Click',
  'Login_State',
  'Signout_Click',
] as const;
type EventName = (typeof eventNames)[number];

type AnalyticsContextProps = {
  trackEvent: <T extends Record<string, unknown>>(eventName: EventName, eventProperties?: T) => void;
};

const AnalyticsContext = createContext<AnalyticsContextProps | undefined>(undefined);

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    mixpanel.init(import.meta.env.VITE_MIXPANEL_KEY, {
      debug: import.meta.env.MODE === 'development',
    });
  }, []);

  if (import.meta.env.MODE === 'development') return;
  const trackEvent = <T extends Record<string, unknown>>(eventName: EventName, eventProperties?: T) => {
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
