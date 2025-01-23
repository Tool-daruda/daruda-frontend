import { post } from '@apis/index';
// import { Comment } from '@pages/CommunityDetail/types';

const postComment = async (boardId: string | undefined, postConent: FormData) => {
  try {
    await post(`/comments?board-id=${boardId}`, postConent, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export default postComment;
