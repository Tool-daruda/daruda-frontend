import { patch } from '@apis/index';

import { PostBoardResponse } from '../types/PostType';

const postBoard = async (boardId: number, formData: FormData): Promise<PostBoardResponse> => {
  try {
    const response = await patch<PostBoardResponse>(`/boards/${boardId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error('게시 실패:', error);
    throw new Error('게시 실패');
  }
};

export default postBoard;
