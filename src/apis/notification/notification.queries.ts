import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { getAllNoti, getRecentNoti, patchNotiRead } from './notification.api';
import { Notification } from './notification.model';
import { NOTI_QUERY_KEY } from '@constants/queryKey';

// 전체 알림을 목록으로 조회
export const useNotiListQuery = (enabled = true) =>
  useQuery({
    queryKey: NOTI_QUERY_KEY.LIST_ALL(),
    queryFn: getAllNoti,
    enabled,
  });

// 최신 알림 조회
export const useRecentNotiListQuery = (enabled = true) =>
  useQuery({
    queryKey: NOTI_QUERY_KEY.RECENT_LIST(),
    queryFn: getRecentNoti,
    enabled,
  });

export const useReadMutation = (notiId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: NOTI_QUERY_KEY.LIST_ALL(),
    mutationFn: () => patchNotiRead(notiId),
    onMutate: () => {
      queryClient.invalidateQueries({ queryKey: NOTI_QUERY_KEY.LIST_ALL() });
      const prevData = queryClient.getQueryData<Notification[]>(NOTI_QUERY_KEY.RECENT_LIST());

      if (prevData) {
        const updatedData = prevData.map((noti) => (noti.id === notiId ? { ...noti, isRead: true } : noti));
        queryClient.setQueryData(NOTI_QUERY_KEY.RECENT_LIST(), updatedData);
      }

      queryClient.invalidateQueries({ queryKey: NOTI_QUERY_KEY.RECENT_LIST() });
      return { prevData };
    },
    onError: (error, _, context) => {
      if (context?.prevData) {
        queryClient.setQueryData(NOTI_QUERY_KEY.RECENT_LIST(), context.prevData);
      }
      console.error(error);
    },
  });
};
