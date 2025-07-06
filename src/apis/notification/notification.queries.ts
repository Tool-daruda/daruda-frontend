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

export const useReadMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: NOTI_QUERY_KEY.LIST_ALL(),
    mutationFn: (notiId: number) => patchNotiRead(notiId),
    onMutate: (notiId: number) => {
      queryClient.invalidateQueries({ queryKey: NOTI_QUERY_KEY.LIST_ALL() });
      queryClient.invalidateQueries({ queryKey: NOTI_QUERY_KEY.RECENT_LIST() });
      const prevData = queryClient.getQueryData<Notification[]>(NOTI_QUERY_KEY.LIST_ALL());
      const prevRecentData = queryClient.getQueryData<Notification[]>(NOTI_QUERY_KEY.RECENT_LIST());

      // console.log(prevData, '이전 데이터');

      if (prevData) {
        const updatedData = prevData.map((noti) => (noti.id === notiId ? { ...noti, isRead: true } : noti));
        queryClient.setQueryData(NOTI_QUERY_KEY.LIST_ALL(), updatedData);
        // console.log(updatedData, '업데이트된 데이터');
        queryClient.invalidateQueries({ queryKey: NOTI_QUERY_KEY.LIST_ALL() });
      }
      if (prevRecentData) {
        const updatedRecentData = prevRecentData.map((noti) => (noti.id === notiId ? { ...noti, isRead: true } : noti));
        queryClient.setQueryData(NOTI_QUERY_KEY.RECENT_LIST(), updatedRecentData);
        // console.log(updatedRecentData, '업데이트된 최근 데이터');
        queryClient.invalidateQueries({ queryKey: NOTI_QUERY_KEY.RECENT_LIST() });
      }

      return { prevData, prevRecentData };
    },
    onError: (error, _, context) => {
      // console.log('에러 발생', error);
      if (context?.prevData) {
        queryClient.setQueryData(NOTI_QUERY_KEY.LIST_ALL(), context.prevData);
      }
      if (context?.prevRecentData) {
        queryClient.setQueryData(NOTI_QUERY_KEY.RECENT_LIST(), context.prevRecentData);
      }
      console.error(error);
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: NOTI_QUERY_KEY.LIST_ALL() });
      queryClient.refetchQueries({ queryKey: NOTI_QUERY_KEY.RECENT_LIST() });
    },
  });
};
