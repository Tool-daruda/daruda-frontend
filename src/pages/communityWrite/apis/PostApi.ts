import { post } from '@apis/index';

import { PostBoardResponse } from '../types/PostType';

const postBoard = async (formData: FormData): Promise<PostBoardResponse> => {
  try {
    const response = await post<PostBoardResponse>('/boards', formData, {
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
