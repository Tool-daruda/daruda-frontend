import { useQuery } from '@tanstack/react-query';

import { getDetail } from './queries';

export const DETAIL_QUERY_KEY = {
  TOOL_DETAIL: (toolID: number) => ['tooldetail', toolID],
};

// 툴 상세 정보 가져오기
export const useToolData = (toolId: number) => {
  return useQuery({
    queryKey: DETAIL_QUERY_KEY.TOOL_DETAIL(toolId),
    queryFn: () => getDetail(toolId),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!toolId,
    retry: false,
  });
};
