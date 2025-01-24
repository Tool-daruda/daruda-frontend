import { del } from '@apis/index';
import { AxiosError } from 'axios';
// 댓글 삭제 API
export const delComment = async (commentId: number) => {
  try {
    const res = await del(`comments?comment-id=${commentId} `);
    return res;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error('err:', err.message);
    }
    throw err;
  }
};
export default delComment;
