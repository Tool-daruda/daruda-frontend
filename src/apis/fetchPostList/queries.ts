import { useInfiniteQuery } from '@tanstack/react-query';
import { GetPostListResponse } from 'src/types/post';

import { fetchPostList } from './api';

export const usePostListQuery = () =>
  useInfiniteQuery<GetPostListResponse>({
    queryKey: ['boards', { isFree: false, size: 6, lastBoardId: -1, toolId: null }], // 기본 쿼리 키 설정 (size에 따라서 가져올 값 갯수 결정)
    queryFn: ({ pageParam }) =>
      fetchPostList({
        pageParam,
        queryKey: ['boards', { isFree: true, size: 6, lastBoardId: -1 }],
      }),

    getNextPageParam: (lastPage) => {
      const nextCursor = lastPage.scrollPaginationDto.nextCursor;
      return typeof nextCursor === 'number' && nextCursor !== -1 ? nextCursor - 1 : null;
    },
    initialPageParam: 0,
  });
