import { del } from '@apis/index';

export const delComment = async (commentId: number) => {
  const res = await del(`comments/${commentId}`);
  return res;
};

export default delComment;
