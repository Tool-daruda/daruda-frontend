import { CommentResponse } from '@pages/CommunityDetail/types';
import { useInfiniteQuery } from '@tanstack/react-query';

import fetchComment from './api';

export const useGetComment = (id: string | undefined) =>
  useInfiniteQuery<CommentResponse>({
    queryKey: ['comment', id],
    queryFn: ({ pageParam = -1 }) => fetchComment({ pageParam, postId: id }),
    getNextPageParam: (lastPage) => {
      const nextCursor = lastPage?.pageInfo.nextCursor;
      return typeof nextCursor === 'number' && nextCursor !== -1 ? nextCursor - 1 : null;
    },
    initialPageParam: 0,
  });

export default useGetComment;
