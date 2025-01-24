import { CommentResponse, Comment } from '@pages/CommunityDetail/types';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { Post } from 'src/types/post';

import postComment from './api';

export interface InfiniteQueryResponse {
  pages: CommentResponse[]; // 각 페이지의 댓글 데이터
  pageParams: number[]; // 페이지 매개변수
}

const usePostComment = (boardId: string | undefined) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => postComment(boardId, formData),
    onMutate: async (formData: FormData) => {
      await queryClient.cancelQueries({ queryKey: ['comment', boardId] });

      const prevComments = queryClient.getQueryData<InfiniteQueryResponse>(['comment', boardId]);
      const prevDetail = queryClient.getQueryData<Post>(['detailPost', boardId]);

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
      return { prevComments };
    },
    onError: (error, _, context) => {
      if (context?.prevComments) {
        queryClient.setQueryData(['comment', boardId], context.prevComments);
      }
      console.error(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comment', boardId] });
    },
  });
};

export default usePostComment;
