import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { fetchCategories, fetchToolsByCategory } from './api';

import { GetToolListResponse } from '../types/ToolListType';

export const useGetToolListQuery = (
  category: string = 'ALL',
  isFree: boolean = false,
  criteria: 'popular' | 'createdAt' = 'popular',
) => {
  return useInfiniteQuery<GetToolListResponse>({
    queryKey: ['tools', { isFree, category, criteria }],
    queryFn: ({ pageParam }) => fetchToolsByCategory({ lastToolId: pageParam, criteria, isFree, category, size: 18 }),
    getNextPageParam: (lastPage) => {
      const nextCursor = lastPage.scrollPaginationDto.nextCursor;
      return typeof nextCursor === 'number' && nextCursor !== -1 ? nextCursor : null;
    },
    initialPageParam: 0,
    staleTime: 0,
  });
};

export const useGetCategoriesQuery = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: Infinity,
  });
