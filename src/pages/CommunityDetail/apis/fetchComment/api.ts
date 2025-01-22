import { get } from '@apis/index';
import { CommentResponse } from '@pages/CommunityDetail/types';
import type { AxiosResponse } from 'axios';

// 상세 페이지 댓글 (무한스크롤)
const fetchComment = async ({
  pageParam,
  postId,
}: {
  pageParam: number | null | unknown;
  postId: string | undefined;
}): Promise<CommentResponse> => {
  try {
    // 댓글 무한스크롤 조회, 4개씩 받아오도록 고정합니다, (혹시 정해진 숫자가 있다면 코멘트 부탁드립니다)g
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
