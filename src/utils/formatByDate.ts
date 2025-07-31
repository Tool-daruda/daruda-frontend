import { formatToMonthDay } from './formatDate';
import { Notification } from '@apis/notification';

const groupByDate = (notifications: Notification[]) => {
  const sortedNotis = [...notifications].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  const grouped = sortedNotis.reduce(
    (acc, noti) => {
      const key = formatToMonthDay(noti.createdAt);
      if (!acc[key]) acc[key] = [];
      acc[key].push(noti);
      return acc;
    },
    {} as Record<string, Notification[]>,
  );

  return grouped;
};

export default groupByDate;
