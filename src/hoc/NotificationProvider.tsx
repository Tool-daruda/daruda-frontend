import { useQueryClient } from '@tanstack/react-query';
import { createContext, useContext, useEffect, ReactNode } from 'react';

// import { getAccessToken } from '@apis/index';
import { Notification } from '@apis/notification';
import { extractUserId } from '@utils';

const NotificationContext = createContext<Notification[] | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();
  const userId = extractUserId();

  useEffect(() => {
    if (!userId) return;
    const eventSource = new EventSource(`${import.meta.env.VITE_API_BASE_URL}/notification/connect`, {
      withCredentials: true,
    });

    eventSource.onmessage = (event) => {
      console.log('SSE message:', event.data);
      try {
        const data = JSON.parse(event.data);
        queryClient.setQueryData<Notification[]>(['notifications'], (old = []) => [data, ...old]);
      } catch (err) {
        console.warn('SSE non-JSON message skipped:', event.data, err);
      }
    };

    return () => eventSource.close();
  }, []);

  const notifications = queryClient.getQueryData<Notification[]>(['notifications']) || [];

  return <NotificationContext.Provider value={notifications}>{children}</NotificationContext.Provider>;
};

export const useNotifications = () => {
  const ctx = useContext(NotificationContext);
  if (ctx === undefined) throw new Error('NotificationProvider로 감싸주세요.');
  return ctx;
};
