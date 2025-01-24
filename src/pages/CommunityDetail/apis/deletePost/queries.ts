import { CommentResponse } from '@pages/CommunityDetail/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Post } from 'src/types/post';

import delComment from './api';

export interface InfiniteQueryResponse {
  pages: CommentResponse[]; // 각 페이지의 댓글 데이터
  pageParams: number[]; // 페이지 매개변수
}
const useCommentDelete = (commentId: number, postId: string | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => delComment(commentId),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['comment', postId] });
      const prevComments = queryClient.getQueryData<InfiniteQueryResponse>(['comment', postId]); // 댓글 리스트 가져오기
      const prevDetail = queryClient.getQueryData<Post>(['detailPost', postId]); // 게시글 상세 가져오기
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
export default useCommentDelete;
