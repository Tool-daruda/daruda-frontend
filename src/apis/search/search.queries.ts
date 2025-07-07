import { InfiniteData, useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { getSearchBoard, getSearchTool } from './search.api';
import { SearchBoardResponse, SearchToolResponse } from './search.model';
import { SEARCH_QUERY_KEY } from '@constants/queryKey';

export const useSearchToolQuery = (keyword: string) => {
  return useQuery<SearchToolResponse>({
    queryKey: SEARCH_QUERY_KEY.SEARCH(keyword, 'tool'),
    queryFn: () => getSearchTool(keyword),
    enabled: !!keyword,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const useSearchBoardQuery = (keyword: string) =>
  useInfiniteQuery<
    SearchBoardResponse, // TQueryFnData
    Error, // TError
    InfiniteData<SearchBoardResponse>, // TData
    string[], // TQueryKey
    number | undefined // TPageParam
  >({
    queryKey: SEARCH_QUERY_KEY.SEARCH(keyword, 'board'),
    queryFn: ({ pageParam }) => getSearchBoard(keyword, pageParam),
    getNextPageParam: (lastPage) => {
      const nextCursor = lastPage?.scrollPaginationDto?.nextCursor;

      if (nextCursor === null || nextCursor === undefined || nextCursor === -1) {
        return undefined;
      }

      return nextCursor;
    },
    initialPageParam: undefined,
  });
