import { del } from '@apis/index';

export const delComment = async (commentId: number) => {
  const res = await del(`comments?comment-id=${commentId} `, {
    headers: {
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3Mzc1MzM3NjcsImV4cCI6MTczODc0MzM2NywidXNlcklkIjo4Nn0.DFG0kZbdSu5ROXE4VTP3YL1dVSnr5hmXI0D1hTfj3Pl08H-k02ssGfd6YYvFZEwliSF5MKDgFcz-eESseiiDxw',
    },
  });
  return res;
};

export default delComment;
