import { useMutation, useQueryClient, useInfiniteQuery } from '@tanstack/react-query';

import { delComment, postComment, fetchComment } from './comment.api';
import { InfiniteQueryResponse, Comment, ToastType, CommentResponse } from './comment.model';
import { PostResponse } from '@apis/board/board.model';

// 커뮤니티 댓글 작성 hook
export const useCommentPostMutation = (
  boardId: string | undefined,
  setToastType: (type: ToastType) => void,
  handleModalOpen: () => void,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => postComment(boardId, formData),
    onMutate: async (formData: FormData) => {
      await queryClient.cancelQueries({ queryKey: ['comment', boardId] });

      const prevComments = queryClient.getQueryData<InfiniteQueryResponse>(['comment', boardId]);
      const prevDetail = queryClient.getQueryData<PostResponse>(['detailPost', boardId]);

      if (prevComments) {
        const optimisticComment: Comment = {
          commentId: Date.now(),
          content: formData.get('text') as string,
          image: formData.get('image') ? URL.createObjectURL(formData.get('image') as Blob) : null,
          nickname: '현재 유저 닉네임',
          updatedAt: new Date().toISOString(),
        };

        queryClient.setQueryData<InfiniteQueryResponse>(['comment', boardId], {
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
      queryClient.setQueryData(['detailPost', boardId], {
        ...prevDetail,
        commentCount: commentCount,
      });
      return { prevComments, prevDetail };
    },
    onError: (error, _, context) => {
      if (context?.prevComments) {
        queryClient.setQueryData(['comment', boardId], context.prevComments);
      }
      if (context?.prevDetail) {
        queryClient.setQueryData(['detailPost', boardId], context.prevDetail);
      }
      setToastType('postErr');
      handleModalOpen();
      console.error(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comment', boardId] });
      setToastType('postComment');
      handleModalOpen();
    },
  });
};

// 커뮤니티 댓글 조회 hook
export const useCommentListQuery = (id: string | undefined) =>
  useInfiniteQuery<CommentResponse>({
    queryKey: ['comment', id],
    queryFn: ({ pageParam = -1 }) => fetchComment({ pageParam, postId: id }),
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
      await queryClient.cancelQueries({ queryKey: ['comment', postId] });
      const prevComments = queryClient.getQueryData<InfiniteQueryResponse>(['comment', postId]); // 댓글 리스트 가져오기
      const prevDetail = queryClient.getQueryData<PostResponse>(['detailPost', postId]); // 게시글 상세 가져오기
      if (prevComments) {
        queryClient.setQueryData<InfiniteQueryResponse>(['comment', postId], {
          ...prevComments,
          pages: prevComments.pages.map((page) => ({
            ...page,
            commentList: page.commentList.filter((comment) => comment.commentId !== commentId),
          })),
        });
      }
      const commentCount = prevDetail?.commentCount ? prevDetail.commentCount - 1 : 0;
      queryClient.setQueryData(['detailPost', postId], {
        ...prevDetail,
        commentCount: commentCount,
      });
      return { prevComments, prevDetail };
    },
    onError: (error, _, context) => {
      if (context?.prevComments) {
        queryClient.setQueryData(['comment', postId], context.prevComments);
      }
      console.error(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['comment', postId] });
    },
  });
};
