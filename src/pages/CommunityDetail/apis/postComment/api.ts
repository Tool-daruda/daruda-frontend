import { AxiosError } from 'axios';

import { post } from '@apis/index';
// import { Comment } from '@pages/CommunityDetail/types';

const postComment = async (boardId: string | undefined, postConent: FormData) => {
  try {
    await post(`/comment?board-id=${boardId}`, postConent, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error('err:', err.message);
    }
    throw err;
  }
};

export default postComment;
