import { del } from '@apis/index';

// 댓글 삭제 API
export const delComment = async (commentId: number) => {
  const res = await del(`comments?comment-id=${commentId} `);
  return res;
};

export default delComment;
