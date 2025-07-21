import { useMutation, useQueryClient, useInfiniteQuery } from '@tanstack/react-query';

import { delComment, postComment, getComment } from './comment.api';
import { InfiniteQueryResponse, Comment, CommentResponse } from './comment.model';
import { PostResponse } from '@apis/board/board.model';
import { BOARD_QUERY_KEY, COMMENT_QUERY_KEY } from '@constants/queryKey';

// 커뮤니티 댓글 작성 hook
export const useCommentPostMutation = (boardId: string | undefined) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => postComment(boardId, formData),
    onMutate: async (formData: FormData) => {
      await queryClient.cancelQueries({ queryKey: COMMENT_QUERY_KEY.LIST(boardId) });

      const prevComments = queryClient.getQueryData<InfiniteQueryResponse>(COMMENT_QUERY_KEY.LIST(boardId));
      const prevDetail = queryClient.getQueryData<PostResponse>(BOARD_QUERY_KEY.DETAIL(boardId));

      if (prevComments) {
        const optimisticComment: Comment = {
          commentId: Date.now(),
          content: formData.get('text') as string,
          image: formData.get('image') ? URL.createObjectURL(formData.get('image') as Blob) : null,
          nickname: '현재 유저 닉네임',
          updatedAt: new Date().toISOString(),
        };

        queryClient.setQueryData<InfiniteQueryResponse>(COMMENT_QUERY_KEY.LIST(boardId), {
          ...prevComments,
          pages: prevComments.pages.map((page, index) =>
            index === prevComments.pages.length - 1
              ? {
                  ...page,
                  commentList: [...(page.commentList || []), optimisticComment],
                }
              : page,
          ),
        });
      }

      const commentCount = prevDetail?.commentCount === undefined ? undefined : prevDetail.commentCount + 1;
      queryClient.setQueryData(BOARD_QUERY_KEY.DETAIL(boardId), {
        ...prevDetail,
        commentCount: commentCount,
      });
      return { prevComments, prevDetail };
    },
    onError: (error, _, context) => {
      if (context?.prevComments) {
        queryClient.setQueryData(COMMENT_QUERY_KEY.LIST(boardId), context.prevComments);
      }
      if (context?.prevDetail) {
        queryClient.setQueryData(BOARD_QUERY_KEY.DETAIL(boardId), context.prevDetail);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: COMMENT_QUERY_KEY.LIST(boardId) });
    },
  });
};

// 커뮤니티 댓글 조회 hook
export const useCommentListQuery = (id: string | undefined) =>
  useInfiniteQuery<CommentResponse>({
    queryKey: COMMENT_QUERY_KEY.LIST(id),
    queryFn: ({ pageParam = -1 }) => getComment({ pageParam, postId: id }),
    getNextPageParam: (lastPage) => {
      const nextCursor = lastPage?.pageInfo.nextCursor;
      return typeof nextCursor === 'number' && nextCursor !== -1 ? nextCursor - 1 : null;
    },
    initialPageParam: 0,
  });

// 커뮤니티 댓글 삭제 hook
export const useCommentDeleteMutation = (commentId: number, postId: string | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => delComment(commentId),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: COMMENT_QUERY_KEY.LIST(postId) });
      const prevComments = queryClient.getQueryData<InfiniteQueryResponse>(COMMENT_QUERY_KEY.LIST(postId)); // 댓글 리스트 가져오기
      const prevDetail = queryClient.getQueryData<PostResponse>(BOARD_QUERY_KEY.DETAIL(postId)); // 게시글 상세 가져오기
      if (prevComments) {
        queryClient.setQueryData<InfiniteQueryResponse>(COMMENT_QUERY_KEY.LIST(postId), {
          ...prevComments,
          pages: prevComments.pages.map((page) => ({
            ...page,
            commentList: page.commentList.filter((comment) => comment.commentId !== commentId),
          })),
        });
      }
      const commentCount = prevDetail?.commentCount ? prevDetail.commentCount - 1 : 0;
      queryClient.setQueryData(BOARD_QUERY_KEY.DETAIL(postId), {
        ...prevDetail,
        commentCount: commentCount,
      });
      return { prevComments, prevDetail };
    },
    onError: (error, _, context) => {
      if (context?.prevComments) {
        queryClient.setQueryData(COMMENT_QUERY_KEY.LIST(postId), context.prevComments);
      }
      console.error(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: COMMENT_QUERY_KEY.LIST(postId) });
    },
  });
};
