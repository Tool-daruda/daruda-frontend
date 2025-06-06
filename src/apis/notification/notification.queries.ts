import { useQuery } from '@tanstack/react-query';

import { getAllNoti } from './notification.api';
import { NOTI_QUERY_KEY } from '@constants/queryKey';

// 전체 알림을 목록으로 조회
export const useNotiListQuery = () =>
  useQuery({
    queryKey: NOTI_QUERY_KEY.LIST_ALL(),
    queryFn: getAllNoti,
  });
