import { formatToMonthDay } from './formatDate';
import { Notification } from '@apis/notification';

const groupByDate = (notifications: Notification[]) => {
  return notifications.reduce(
    (acc, noti) => {
      const key = formatToMonthDay(noti.createdAt);
      if (!acc[key]) acc[key] = [];
      acc[key].push(noti);
      return acc;
    },
    {} as Record<string, Notification[]>,
  );
};

export default groupByDate;
