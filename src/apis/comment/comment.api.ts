import { AxiosError, AxiosResponse } from 'axios';

import { CommentResponse } from './comment.model';
import { FormContent } from '@apis/board';
import { get, del, post } from '@apis/index';

// TODO:: 백엔드 new version 에 따른 로직 수정
// 커뮤니티 댓글 작성 post
export const postComment = async (boardId: string | undefined, postContent: FormContent) => {
  try {
    await post(`/comment?board-id=${boardId}`, postContent, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error('err:', err.message);
    }
    throw err;
  }
};

// 커뮤니티 댓글 조회 get
export const getComment = async ({
  pageParam,
  postId,
}: {
  pageParam: number | null | unknown;
  postId: string | undefined;
}): Promise<CommentResponse> => {
  try {
    const url = `/comment?` + `board-id=${postId}` + `&size=4` + `${pageParam ? `&lastCommentId=${pageParam}` : ''}`;
    const res: AxiosResponse<CommentResponse> = await get(url);

    return res.data;
  } catch (err) {
    console.error(err);
    return {
      commentList: [],
      pageInfo: {
        totalElements: 0,
        nextCursor: null,
      },
    };
  }
};

// 커뮤니티 댓글 삭제 del
export const delComment = async (commentId: number) => {
  try {
    const res = await del(`comment/${commentId} `);
    return res;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error('err:', err.message);
    }
    throw err;
  }
};
