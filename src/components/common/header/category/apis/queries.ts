import { useQuery } from '@tanstack/react-query';

import { getCategory } from './api';

export const CATEGORY_QUERY_KEY = {
  TOOL_CATEGORY: () => ['category'],
};

// 툴 카테고리 가져오기
export const useGetCategory = () => {
  return useQuery({
    queryKey: CATEGORY_QUERY_KEY.TOOL_CATEGORY(),
    queryFn: () => getCategory(),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
  });
};
