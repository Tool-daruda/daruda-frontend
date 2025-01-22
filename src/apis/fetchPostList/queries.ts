import { useInfiniteQuery } from '@tanstack/react-query';
import { GetPostListResponse } from 'src/types/post';

import { fetchPostList } from './api';

export const usePostListQuery = (toolId: number | null, isFree: boolean) =>
  useInfiniteQuery<GetPostListResponse>({
    queryKey: ['boards', { isFree, size: 6, lastBoardId: -1, toolId }], // 기본 쿼리 키 설정 (size에 따라서 가져올 값 갯수 결정)
    queryFn: ({ pageParam }) =>
      fetchPostList({
        pageParam,
        queryKey: ['boards', { isFree: isFree, size: 6, lastBoardId: -1, toolId: toolId }],
      }),

    getNextPageParam: (lastPage) => {
      const nextCursor = lastPage.scrollPaginationDto.nextCursor;
      return typeof nextCursor === 'number' && nextCursor !== -1 ? nextCursor - 1 : null;
    },
    initialPageParam: 0,
  });
