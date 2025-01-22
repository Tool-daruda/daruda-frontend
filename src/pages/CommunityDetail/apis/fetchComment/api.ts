import { get } from '@apis/index';
import { CommentResponse } from '@pages/CommunityDetail/types';
import type { AxiosResponse } from 'axios';

const fetchComment = async ({
  pageParam,
  postId,
}: {
  pageParam: number | null | unknown;
  postId: string | undefined;
  lastCommentId?: number | null;
}): Promise<CommentResponse> => {
  try {
    // 댓글 무한스크롤 조회, 4개씩 받아오도록 고정합니다, (혹시 정해진 숫자가 있다면 코멘트 부탁드립니다)
    const url = `/comments?` + `board-id=${postId}` + `&size=4` + `${pageParam ? `&lastCommentId=${pageParam}` : ''}`;
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

export default fetchComment;
