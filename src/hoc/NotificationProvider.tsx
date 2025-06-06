import { useQueryClient } from '@tanstack/react-query';
import { createContext, useContext, useEffect, ReactNode } from 'react';

// import { getAccessToken } from '@apis/index';
import { useNotiListQuery, Notification } from '@apis/notification';

const NotificationContext = createContext<Notification[] | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();
  // const token = getAccessToken();

  const res = useNotiListQuery();
  console.log(res);

  useEffect(() => {
    const eventSource = new EventSource(`${import.meta.env.VITE_API_BASE_URL}/notification/connect`, {
      withCredentials: true,
    });

    eventSource.onmessage = (event) => {
      const newNotification: Notification = JSON.parse(event.data);

      queryClient.setQueryData<Notification[]>(['notifications'], (old = []) => [newNotification, ...old]);
    };

    return () => eventSource.close();
  }, [queryClient]);

  const notifications = queryClient.getQueryData<Notification[]>(['notifications']) || [];

  return <NotificationContext.Provider value={notifications}>{children}</NotificationContext.Provider>;
};

export const useNotifications = () => {
  const ctx = useContext(NotificationContext);
  if (ctx === undefined) throw new Error('NotificationProvider로 감싸주세요.');
  return ctx;
};
