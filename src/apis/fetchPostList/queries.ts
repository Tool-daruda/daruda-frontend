import { useInfiniteQuery } from '@tanstack/react-query';
import { GetPostListResponse } from 'src/types/post';

import { fetchPostList } from './api';

export const usePostListQuery = (toolId: number | null, noTopic: boolean) =>
  useInfiniteQuery<GetPostListResponse>({
    // 기본 쿼리 키 설정 (size에 따라서 가져올 값 갯수 결정가능 / toolId를 통해 필터링 가능 )
    queryKey: ['boards', { noTopic, size: 10, lastBoardId: -1, toolId }],
    queryFn: ({ pageParam }) =>
      fetchPostList({
        pageParam,
        queryKey: ['boards', { noTopic: noTopic, size: 10, lastBoardId: -1, toolId: toolId }],
      }),

    getNextPageParam: (lastPage) => {
      const nextCursor = lastPage.scrollPaginationDto.nextCursor;
      return typeof nextCursor === 'number' && nextCursor !== -1 ? nextCursor - 1 : null;
    },
    initialPageParam: 0,
  });
